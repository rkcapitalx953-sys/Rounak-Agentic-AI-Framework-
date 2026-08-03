"""
SummarizerAgent — implements requirement (a)'s second half: turn a pile of
raw headlines into an actual synthesized narrative of "what's happening",
grouped by theme, from a business & finance point of view.

LLM path: the model reads an indexed headline list and writes 4-6 themed
paragraphs, citing headline indices — we map those indices back to real
article links afterwards, so nothing in the final report is un-sourced.

Fallback path (no key / API down): themes are formed by bucketing
headlines into sectors via keyword match, then simply listing the
highest-signal headlines per bucket. Less prose, zero hallucination risk.
"""

import config
from agents.llm_client import LLMClient

SYSTEM_PROMPT = """You are a financial news desk editor. You will be given a numbered \
list of recent business/finance headlines with short snippets. Write a concise \
"what's happening" briefing.

Return strict JSON:
{
  "themes": [
    {"headline": "short theme title", "narrative": "2-3 sentence synthesis", "sources": [<article indices this is based on>]}
  ]
}
Identify 4 to 6 themes. Every theme MUST cite at least one real article index \
from the provided list in "sources". Do not invent facts not present in the \
provided headlines/snippets. Be specific (names, numbers) where the source text \
gives you specifics."""


class SummarizerAgent:
    """Agent 2: synthesizes raw headlines into a themed business/finance briefing."""

    def __init__(self, llm: LLMClient | None = None):
        self.llm = llm or LLMClient()
        self.used_llm = False

    def summarize(self, articles: list[dict]) -> list[dict]:
        if not articles:
            return []

        indexed = "\n".join(
            f"[{i}] ({a['source']}) {a['title']} — {a['summary']}"
            for i, a in enumerate(articles)
        )
        result = self.llm.ask_json(SYSTEM_PROMPT, indexed)

        if result and result.get("themes"):
            self.used_llm = True
            return self._attach_sources(result["themes"], articles)

        self.used_llm = False
        return self._fallback_themes(articles)

    @staticmethod
    def _attach_sources(themes: list[dict], articles: list[dict]) -> list[dict]:
        out = []
        for theme in themes:
            idxs = [i for i in theme.get("sources", []) if isinstance(i, int) and 0 <= i < len(articles)]
            if not idxs:
                continue
            out.append({
                "headline": theme.get("headline", "Untitled"),
                "narrative": theme.get("narrative", ""),
                "articles": [articles[i] for i in idxs],
            })
        return out

    @staticmethod
    def _fallback_themes(articles: list[dict]) -> list[dict]:
        buckets: dict[str, list[dict]] = {s: [] for s in config.SECTORS}
        buckets["General Business"] = []

        for article in articles:
            text = f"{article['title']} {article['summary']}".lower()
            matched = False
            for sector, keywords in config.SECTOR_KEYWORDS.items():
                if any(kw in text for kw in keywords):
                    buckets[sector].append(article)
                    matched = True
                    break
            if not matched:
                buckets["General Business"].append(article)

        themes = []
        for name, items in buckets.items():
            if not items:
                continue
            items = items[:4]
            narrative = " ".join(f"{a['title']}." for a in items[:3])
            themes.append({
                "headline": name,
                "narrative": narrative,
                "articles": items,
            })
        themes.sort(key=lambda t: len(t["articles"]), reverse=True)
        return themes[:6]
