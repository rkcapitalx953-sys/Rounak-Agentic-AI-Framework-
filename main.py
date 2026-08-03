"""
CLI entry point — run the full agentic pipeline headlessly and save a report.

    python main.py

Useful for a quick sanity check, for scheduling (e.g. cron / Task Scheduler
for a daily briefing), or as the thing you point graders at if a notebook
isn't wanted. The notebook (notebook.ipynb) is the presentation-friendly
version of this exact same pipeline.
"""

import sys
from datetime import datetime

from dotenv import load_dotenv

load_dotenv()

import config
from orchestrator import Orchestrator
from report import render_markdown, render_sector_chart


def main():
    print("Agentic AI Business & Finance Intelligence — running pipeline...\n")

    orchestrator = Orchestrator()
    if not orchestrator.llm.available:
        print("  [!] No GROQ_API_KEY set — running on rule-based fallback agents.")
        print("      Get a free key at https://console.groq.com and put it in a .env file.\n")

    print("  [1/4] NewsScannerAgent: fetching sources...")
    result = orchestrator.run()

    if result.meta["used_cache"]:
        print("        -> all live sources failed, served from local cache")
    if result.meta["source_errors"]:
        for src, err in result.meta["source_errors"].items():
            print(f"        -> warning: {src} failed ({err})")
    print(f"        -> {result.meta['article_count']} articles ready")

    print("  [2/4] SummarizerAgent: building briefing...")
    print(f"        -> {len(result.themes)} themes "
          f"({'LLM' if result.meta['agents_used_llm']['summarizer'] else 'fallback'})")

    print("  [3/4] InsightAgent: assessing industry impact...")
    print(f"        -> {len(result.sector_impacts)} sectors scored "
          f"({'LLM' if result.meta['agents_used_llm']['insight'] else 'fallback'})")

    print("  [4/4] RecommenderAgent: ranking top sectors...")
    print(f"        -> {len(result.recommendations)} picks "
          f"({'LLM' if result.meta['agents_used_llm']['recommender'] else 'fallback'})\n")

    report_md = render_markdown(result)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    report_path = config.REPORTS_DIR / f"briefing_{timestamp}.md"
    report_path.write_text(report_md, encoding="utf-8")

    chart_path = config.REPORTS_DIR / f"sector_impact_{timestamp}.png"
    render_sector_chart(result, str(chart_path))

    print(f"Report saved to: {report_path}")
    print(f"Chart saved to:  {chart_path}\n")
    print("Top picks:")
    for i, pick in enumerate(result.recommendations, start=1):
        print(f"  {i}. {pick['sector']} (conviction: {pick.get('conviction', 'Medium')})")

    return 0


if __name__ == "__main__":
    sys.exit(main())
