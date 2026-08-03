"""
RecommenderAgent — implements requirement (c): recommend the top 3 sectors
to focus on, each viewed through a Short / Mid / Long-term lens.

This agent deliberately does NOT re-read raw headlines. It only sees the
already-assessed sector impacts from InsightAgent — a real agentic-pipeline
property: each agent has a narrow, well-defined input contract instead of
everyone re-doing everyone else's work.
"""

import config
from agents.llm_client import LLMClient

SYSTEM_PROMPT = """You are a portfolio strategist. You will be given a JSON list of \
sector impact assessments (direction, magnitude 1-5, rationale) derived from the \
current business news cycle. Pick the TOP 3 sectors worth focusing on right now \
and, for each, give a view across three time horizons.

Return strict JSON:
{
  "picks": [
    {
      "sector": "<one of the given sector names>",
      "conviction": "High" | "Medium" | "Low",
      "short_term": "1-2 sentences: outlook for the next 2-4 weeks",
      "mid_term": "1-2 sentences: outlook for the next 2-6 months",
      "long_term": "1-2 sentences: outlook for 12+ months",
    }
  ]
}
Ground every horizon comment in the given rationale/direction — do not invent \
new facts. If the near-term news is the primary driver, say so plainly in \
short_term and be appropriately cautious in long_term about whether the \
driver is structural or transient."""


class RecommenderAgent:
    """Agent 4: ranks sectors and produces the final short/mid/long-term picks."""

    def __init__(self, llm: LLMClient | None = None):
        self.llm = llm or LLMClient()
        self.used_llm = False

    def recommend(self, sector_impacts: list[dict], top_n: int = 3) -> list[dict]:
        if not sector_impacts:
            return []

        compact = [
            {
                "sector": s["sector"], "direction": s["direction"],
                "magnitude": s["magnitude"], "rationale": s["rationale"],
            }
            for s in sector_impacts
        ]
        result = self.llm.ask_json(SYSTEM_PROMPT, str(compact))

        if result and result.get("picks"):
            self.used_llm = True
            return self._attach_evidence(result["picks"][:top_n], sector_impacts)

        self.used_llm = False
        return self._fallback_recommend(sector_impacts, top_n)

    @staticmethod
    def _attach_evidence(picks: list[dict], sector_impacts: list[dict]) -> list[dict]:
        by_name = {s["sector"]: s for s in sector_impacts}
        out = []
        for p in picks:
            src = by_name.get(p.get("sector"))
            if not src:
                continue
            out.append({**p, "articles": src.get("articles", []), "magnitude": src["magnitude"]})
        return out

    @staticmethod
    def _fallback_recommend(sector_impacts: list[dict], top_n: int) -> list[dict]:
        direction_weight = {"Positive": 1.0, "Mixed": 0.35, "Neutral": 0.05, "Negative": -0.5}

        scored = [
            (s, s["magnitude"] * direction_weight.get(s["direction"], 0))
            for s in sector_impacts
        ]
        scored.sort(key=lambda pair: pair[1], reverse=True)
        top = [s for s, score in scored[:top_n]]

        picks = []
        for s in top:
            conviction = "High" if s["magnitude"] >= 4 else "Medium" if s["magnitude"] >= 2 else "Low"
            picks.append({
                "sector": s["sector"],
                "conviction": conviction,
                "short_term": (
                    f"Immediate catalyst: {s['rationale']} Expect this to shape sentiment "
                    f"over the {config.TIME_HORIZONS['Short-term']}."
                ),
                "mid_term": (
                    f"Over the {config.TIME_HORIZONS['Mid-term']}, direction depends on whether "
                    f"the current driver persists rather than fades as a one-off news cycle."
                ),
                "long_term": (
                    f"{config.TIME_HORIZONS['Long-term']} out, treat this as a secondary factor — "
                    f"the structural case for {s['sector']} should rest on fundamentals beyond "
                    f"this single news window."
                ),
                "articles": s.get("articles", []),
                "magnitude": s["magnitude"],
            })
        return picks
