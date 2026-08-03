"""
Report rendering — turns a PipelineResult into (1) a Markdown report you can
hand in / paste anywhere, and (2) a sector-impact chart (PNG) for a visual
"wow" moment in the notebook or the live demo.

Kept separate from the agents on purpose: agents produce structured data,
rendering is a pure presentation concern. Swapping Markdown for HTML/PDF
later would only touch this file.
"""

from orchestrator import PipelineResult

DIRECTION_EMOJI = {"Positive": "🟢", "Negative": "🔴", "Mixed": "🟡", "Neutral": "⚪"}


def render_markdown(result: PipelineResult) -> str:
    lines = []
    lines.append(f"# Business & Finance Intelligence Briefing")
    lines.append(f"*Generated {result.generated_at} · {result.meta['article_count']} articles analyzed*")
    lines.append("")

    mode = "LLM-reasoned (Groq)" if result.meta["llm_available"] else "Rule-based fallback (no LLM key set)"
    lines.append(f"> **Reasoning mode:** {mode}"
                 + (f" — model `{result.meta['llm_model']}`" if result.meta["llm_model"] else ""))
    if result.meta.get("used_cache"):
        lines.append("> ⚠️ Live fetch failed for all sources — served from local cache.")
    lines.append("")

    lines.append("## a) What's happening — Business & Finance briefing")
    lines.append("")
    for theme in result.themes:
        lines.append(f"### {theme['headline']}")
        lines.append(theme["narrative"])
        for a in theme["articles"][:3]:
            lines.append(f"- [{a['title']}]({a['link']}) — *{a['source']}*")
        lines.append("")

    lines.append("## b) Industry impact assessment")
    lines.append("")
    lines.append("| Sector | Direction | Impact | Rationale |")
    lines.append("|---|---|---|---|")
    for s in result.sector_impacts:
        emoji = DIRECTION_EMOJI.get(s["direction"], "")
        bar = "●" * s["magnitude"] + "○" * (5 - s["magnitude"])
        rationale = s["rationale"].replace("|", "-")
        lines.append(f"| {s['sector']} | {emoji} {s['direction']} | {bar} | {rationale} |")
    lines.append("")

    lines.append("## c) Top 3 sectors to focus on")
    lines.append("")
    for i, pick in enumerate(result.recommendations, start=1):
        lines.append(f"### {i}. {pick['sector']}  ·  Conviction: {pick.get('conviction', 'Medium')}")
        lines.append(f"- **Short-term:** {pick['short_term']}")
        lines.append(f"- **Mid-term:** {pick['mid_term']}")
        lines.append(f"- **Long-term:** {pick['long_term']}")
        for a in pick.get("articles", [])[:2]:
            lines.append(f"  - Evidence: [{a['title']}]({a['link']})")
        lines.append("")

    return "\n".join(lines)


def render_sector_chart(result: PipelineResult, out_path: str) -> str:
    """Saves a horizontal bar chart of sector magnitude, colour-coded by
    direction, to out_path. Returns the path for convenience."""
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt

    color_map = {"Positive": "#2ecc71", "Negative": "#e74c3c", "Mixed": "#f1c40f", "Neutral": "#95a5a6"}
    data = sorted(result.sector_impacts, key=lambda s: s["magnitude"])
    sectors = [s["sector"] for s in data]
    magnitudes = [s["magnitude"] for s in data]
    colors = [color_map.get(s["direction"], "#95a5a6") for s in data]

    fig, ax = plt.subplots(figsize=(8, 5))
    ax.barh(sectors, magnitudes, color=colors)
    ax.set_xlabel("Impact magnitude (1-5)")
    ax.set_xlim(0, 5)
    ax.set_title("Current News Cycle — Impact by Sector")
    fig.tight_layout()
    fig.savefig(out_path, dpi=150)
    plt.close(fig)
    return out_path
