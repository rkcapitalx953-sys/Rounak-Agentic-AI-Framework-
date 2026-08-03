"""
InsightAgent — implements requirement (b): generate insights and assess the
impact of current events on major industries.

Every industry gets a structured verdict: direction, a 1-5 magnitude, a short
rationale, and — critically — the specific headlines that justify it. That
grounding is what separates this from "ask an LLM to guess sector vibes":
nothing here is asserted without a citable source article.
"""

import config
from agents.llm_client import LLMClient

SYSTEM_PROMPT = """You are a financial industry analyst. You will be given a numbered \
list of recent business/finance headlines and a fixed list of industry sectors.

For EACH sector in the provided list, assess the impact of the news on that \
sector right now. Return strict JSON:
{
  "sectors": [
    {
      "sector": "<must exactly match one of the provided sector names>",
      "direction": "Positive" | "Negative" | "Neutral" | "Mixed",
      "magnitude": <integer 1-5, how significant the impact is, 1=negligible 5=major>,
      "rationale": "1-2 sentences grounded in the specific headlines",
      "sources": [<article indices used as evidence>]
    }
  ]
}
Only include a sector if you find at least weak evidence in the headlines; if a \
sector has essentially no relevant news, still include it with direction \
"Neutral", magnitude 1, and an empty sources list. Do not invent facts."""


class InsightAgent:
    """Agent 3: assesses cross-industry impact of the current news cycle."""

    def __init__(self, llm: LLMClient | None = None):
        self.llm = llm or LLMClient()
        self.used_llm = False

    def assess(self, articles: list[dict]) -> list[dict]:
        if not articles:
            return []

        indexed_articles = "\n".join(
            f"[{i}] {a['title']} — {a['summary']}" for i, a in enumerate(articles)
        )
        user_prompt = (
            f"Sectors: {', '.join(config.SECTORS)}\n\nHeadlines:\n{indexed_articles}"
        )
        result = self.llm.ask_json(SYSTEM_PROMPT, user_prompt)

        if result and result.get("sectors"):
            self.used_llm = True
            return self._attach_sources(result["sectors"], articles)

        self.used_llm = False
        return self._fallback_assessment(articles)

    @staticmethod
    def _attach_sources(sectors: list[dict], articles: list[dict]) -> list[dict]:
        out = []
        for s in sectors:
            name = s.get("sector")
            if name not in config.SECTORS:
                continue
            idxs = [i for i in s.get("sources", []) if isinstance(i, int) and 0 <= i < len(articles)]
            out.append({
                "sector": name,
                "direction": s.get("direction", "Neutral"),
                "magnitude": max(1, min(5, int(s.get("magnitude", 1) or 1))),
                "rationale": s.get("rationale", ""),
                "articles": [articles[i] for i in idxs][:4],
            })
        return sorted(out, key=lambda s: s["magnitude"], reverse=True)

    @staticmethod
    def _fallback_assessment(articles: list[dict]) -> list[dict]:
        """Deterministic, lexicon-based scoring: for each sector, find articles
        whose text matches its keywords, then score sentiment by counting
        positive vs negative words from config's transparent word lists."""
        results = []
        for sector, keywords in config.SECTOR_KEYWORDS.items():
            matches = [
                a for a in articles
                if any(kw in f"{a['title']} {a['summary']}".lower() for kw in keywords)
            ]
            if not matches:
                results.append({
                    "sector": sector, "direction": "Neutral", "magnitude": 1,
                    "rationale": "No significant coverage found in this news window.",
                    "articles": [],
                })
                continue

            pos = neg = 0
            for a in matches:
                words = set(f"{a['title']} {a['summary']}".lower().split())
                pos += len(words & config.POSITIVE_WORDS)
                neg += len(words & config.NEGATIVE_WORDS)

            if pos == neg:
                direction = "Mixed" if (pos + neg) else "Neutral"
            else:
                direction = "Positive" if pos > neg else "Negative"

            magnitude = max(1, min(5, len(matches)))
            rationale = (
                f"{len(matches)} related headline(s) this cycle "
                f"({pos} positive vs {neg} negative signal words detected)."
            )
            results.append({
                "sector": sector, "direction": direction, "magnitude": magnitude,
                "rationale": rationale, "articles": matches[:4],
            })

        return sorted(results, key=lambda s: s["magnitude"], reverse=True)
