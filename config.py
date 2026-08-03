"""
Central configuration for the Agentic AI Business & Finance Intelligence framework.

Everything an agent needs to know about *where to look* and *what vocabulary
to use* lives here, so the agents themselves stay focused on behaviour.
"""

import os
from pathlib import Path

# ---------------------------------------------------------------------------
# Paths
# ---------------------------------------------------------------------------
ROOT_DIR = Path(__file__).resolve().parent
CACHE_DIR = ROOT_DIR / "cache"
REPORTS_DIR = ROOT_DIR / "reports"
ASSETS_DIR = ROOT_DIR / "assets"
for _dir in (CACHE_DIR, REPORTS_DIR, ASSETS_DIR):
    _dir.mkdir(exist_ok=True)

# ---------------------------------------------------------------------------
# LLM configuration (Groq free tier — https://console.groq.com)
# ---------------------------------------------------------------------------
GROQ_API_KEY = os.environ.get("GROQ_API_KEY", "").strip()
GROQ_MODEL = os.environ.get("GROQ_MODEL", "llama-3.3-70b-versatile")
GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"
LLM_TIMEOUT_SECONDS = 25

# ---------------------------------------------------------------------------
# News sources — free, public RSS/Atom feeds, no API key required.
# Deliberately spread across wire services, business press and markets desks
# so a single publisher's slant can't dominate the summary.
# ---------------------------------------------------------------------------
RSS_FEEDS = {
    "CNBC Business":      "https://www.cnbc.com/id/10001147/device/rss/rss.html",
    "CNBC Markets":       "https://www.cnbc.com/id/20910258/device/rss/rss.html",
    "MarketWatch":        "https://www.marketwatch.com/rss/topstories",
    "Yahoo Finance":      "https://finance.yahoo.com/news/rssindex",
    "Investing.com":      "https://www.investing.com/rss/news.rss",
    "Economic Times":     "https://economictimes.indiatimes.com/rssfeedstopstories.cms",
    "Fortune":            "https://fortune.com/feed/",
    "WSJ Markets":        "https://feeds.a.dj.com/rss/RSSMarketsMain.xml",
}

MAX_ARTICLES_PER_FEED = 15
MAX_ARTICLES_TOTAL = 60
ARTICLE_MAX_AGE_HOURS = 48  # ignore stale cached entries beyond this

# ---------------------------------------------------------------------------
# Industry taxonomy — GICS-style 11 sectors, each with a small keyword
# lexicon used by the rule-based fallback agent (and as a grounding hint
# fed to the LLM so its output stays on-taxonomy).
# ---------------------------------------------------------------------------
SECTOR_KEYWORDS = {
    "Energy": ["oil", "crude", "opec", "gas prices", "energy", "refinery", "pipeline", "petroleum", "drilling"],
    "Materials": ["mining", "steel", "copper", "commodity", "commodities", "chemicals", "metals", "lithium"],
    "Industrials": ["manufacturing", "factory", "logistics", "shipping", "airline", "aerospace", "defense", "supply chain"],
    "Consumer Discretionary": ["retail", "e-commerce", "automaker", "auto sales", "travel", "hotel", "luxury", "consumer spending"],
    "Consumer Staples": ["grocery", "food prices", "beverage", "household goods", "agriculture", "farm"],
    "Health Care": ["pharma", "drug", "fda", "biotech", "hospital", "healthcare", "vaccine", "clinical trial"],
    "Financials": ["bank", "interest rate", "federal reserve", "fed ", "lending", "insurance", "credit", "mortgage", "central bank"],
    "Information Technology": ["tech", "software", "semiconductor", "chip", "ai ", "artificial intelligence", "cloud", "cybersecurity", "startup"],
    "Communication Services": ["media", "telecom", "streaming", "social media", "advertising", "broadband"],
    "Utilities": ["utility", "utilities", "power grid", "electricity", "renewable energy", "solar", "wind power"],
    "Real Estate": ["real estate", "housing", "mortgage rates", "property market", "reit", "home sales"],
}
SECTORS = list(SECTOR_KEYWORDS.keys())

TIME_HORIZONS = {
    "Short-term": "next 2-4 weeks",
    "Mid-term": "next 2-6 months",
    "Long-term": "12+ months",
}

# ---------------------------------------------------------------------------
# Tiny, transparent sentiment lexicon for the rule-based fallback path.
# Kept intentionally small and inspectable — the point is that even
# without an LLM, every score is traceable to an explicit word list,
# not a black box.
# ---------------------------------------------------------------------------
POSITIVE_WORDS = {
    "growth", "surge", "rally", "profit", "beats", "beat", "upgrade", "expansion",
    "record", "strong", "gain", "gains", "boost", "recovery", "breakthrough",
    "approval", "partnership", "investment", "funding", "raises", "jump", "soar",
    "soars", "outperform", "bullish", "upbeat", "robust", "resilient", "rebound",
    "optimism", "wins", "win",
}
NEGATIVE_WORDS = {
    "decline", "drop", "falls", "fall", "plunge", "layoffs", "cuts", "cut",
    "recession", "slowdown", "weak", "loss", "losses", "downgrade", "lawsuit",
    "fraud", "crisis", "default", "bankruptcy", "tariff", "tariffs", "sanctions",
    "inflation", "shortage", "disruption", "warns", "warning", "misses", "miss",
    "bearish", "volatility", "uncertainty", "strike", "shutdown",
}
