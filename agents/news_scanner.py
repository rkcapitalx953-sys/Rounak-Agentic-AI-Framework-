"""
NewsScannerAgent — implements requirement (a): scan multiple news sources
and surface what's happening from a business & finance point of view.

Design notes for the writeup / presentation:
  * Sources are plain public RSS feeds (see config.RSS_FEEDS) — no API key,
    no rate limit, so a live class demo never depends on a paid quota.
  * Every fetch is cached to disk. If a feed is unreachable (flaky wifi,
    a source rate-limiting the room's shared IP, etc.) the agent falls
    back to the last good cache instead of returning nothing — resilience
    that matters a lot for a live in-class demo.
  * De-duplication is title-based (normalised), since wire stories get
    re-published near-verbatim across multiple outlets.
"""

import html
import json
import re
import time
from datetime import datetime, timezone

import feedparser
import requests

import config

USER_AGENT = "Mozilla/5.0 (compatible; AgenticFinanceIntel/1.0)"
CACHE_FILE = config.CACHE_DIR / "articles_cache.json"


class NewsScannerAgent:
    """Agent 1: fetches, cleans, dedupes and caches business/finance headlines."""

    def __init__(self, feeds: dict | None = None):
        self.feeds = feeds or config.RSS_FEEDS
        self.source_errors: dict[str, str] = {}
        self.used_cache = False

    def scan(self) -> list[dict]:
        self.source_errors = {}
        self.used_cache = False
        articles: list[dict] = []

        for source, url in self.feeds.items():
            try:
                entries = self._fetch_feed(url)
            except Exception as exc:
                self.source_errors[source] = str(exc)
                continue
            for entry in entries[: config.MAX_ARTICLES_PER_FEED]:
                article = self._to_article(entry, source)
                if article:
                    articles.append(article)

        articles = self._dedupe(articles)
        articles.sort(key=lambda a: a["published_ts"], reverse=True)
        articles = articles[: config.MAX_ARTICLES_TOTAL]

        if articles:
            self._save_cache(articles)
        else:
            articles = self._load_cache()
            self.used_cache = True

        return articles

    def _fetch_feed(self, url: str) -> list:
        # feedparser can fetch URLs itself, but a manual request gives us
        # a real timeout and a browser-like User-Agent (some feeds 403
        # bare Python user agents).
        resp = requests.get(url, headers={"User-Agent": USER_AGENT}, timeout=12)
        resp.raise_for_status()
        parsed = feedparser.parse(resp.content)
        return parsed.entries

    def _to_article(self, entry, source: str) -> dict | None:
        title = html.unescape(entry.get("title", "")).strip()
        link = entry.get("link", "").strip()
        if not title or not link:
            return None

        raw_summary = entry.get("summary", "") or entry.get("description", "")
        summary = _strip_html(raw_summary)[:400]

        published_ts = _parse_published(entry)

        return {
            "title": title,
            "link": link,
            "source": source,
            "summary": summary,
            "published_ts": published_ts,
            "published_iso": datetime.fromtimestamp(published_ts, tz=timezone.utc).isoformat(),
        }

    @staticmethod
    def _dedupe(articles: list[dict]) -> list[dict]:
        seen = set()
        unique = []
        for a in articles:
            key = re.sub(r"[^a-z0-9]", "", a["title"].lower())[:60]
            if key and key not in seen:
                seen.add(key)
                unique.append(a)
        return unique

    @staticmethod
    def _save_cache(articles: list[dict]) -> None:
        payload = {"cached_at": datetime.now(timezone.utc).isoformat(), "articles": articles}
        CACHE_FILE.write_text(json.dumps(payload, indent=2), encoding="utf-8")

    @staticmethod
    def _load_cache() -> list[dict]:
        if not CACHE_FILE.exists():
            return []
        try:
            payload = json.loads(CACHE_FILE.read_text(encoding="utf-8"))
            return payload.get("articles", [])
        except Exception:
            return []


def _strip_html(text: str) -> str:
    text = re.sub(r"<[^>]+>", " ", text)
    text = html.unescape(text)
    return re.sub(r"\s+", " ", text).strip()


def _parse_published(entry) -> float:
    for field in ("published_parsed", "updated_parsed"):
        t = entry.get(field)
        if t:
            return time.mktime(t)
    return time.time()
