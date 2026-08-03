"""
Orchestrator — the coordinator agent. It doesn't reason about news itself;
its only job is to sequence the four specialist agents, hand each one
exactly the state it needs, and record how the run went (LLM-backed or
fallback, cache used or not, which sources failed).

Pipeline:
    NewsScannerAgent   -> raw, deduped articles                (requirement a, part 1)
    SummarizerAgent    -> themed "what's happening" briefing   (requirement a, part 2)
    InsightAgent       -> per-sector impact assessment         (requirement b)
    RecommenderAgent   -> top-3 sectors x short/mid/long term  (requirement c)
"""

from dataclasses import dataclass, field
from datetime import datetime, timezone

from agents import LLMClient, NewsScannerAgent, SummarizerAgent, InsightAgent, RecommenderAgent


@dataclass
class PipelineResult:
    generated_at: str
    articles: list
    themes: list
    sector_impacts: list
    recommendations: list
    meta: dict = field(default_factory=dict)


class Orchestrator:
    def __init__(self):
        self.llm = LLMClient()
        self.scanner = NewsScannerAgent()
        self.summarizer = SummarizerAgent(self.llm)
        self.insight_agent = InsightAgent(self.llm)
        self.recommender = RecommenderAgent(self.llm)

    def run(self) -> PipelineResult:
        articles = self.scanner.scan()
        themes = self.summarizer.summarize(articles)
        sector_impacts = self.insight_agent.assess(articles)
        recommendations = self.recommender.recommend(sector_impacts)

        meta = {
            "llm_available": self.llm.available,
            "llm_model": self.llm.model if self.llm.available else None,
            "used_cache": self.scanner.used_cache,
            "source_errors": self.scanner.source_errors,
            "article_count": len(articles),
            "agents_used_llm": {
                "summarizer": self.summarizer.used_llm,
                "insight": self.insight_agent.used_llm,
                "recommender": self.recommender.used_llm,
            },
        }

        return PipelineResult(
            generated_at=datetime.now(timezone.utc).isoformat(),
            articles=articles,
            themes=themes,
            sector_impacts=sector_impacts,
            recommendations=recommendations,
            meta=meta,
        )
