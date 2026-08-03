# Agentic AI Framework — Business & Finance Intelligence

An agentic pipeline that scans multiple business/finance news sources,
synthesizes what's happening, assesses the impact on major industries, and
recommends the top 3 sectors to focus on across short/mid/long-term horizons.

Built for Internship Task 2. See `PRESENTATION_SCRIPT.md` for the class
presentation script.

## Architecture

Four single-purpose agents, sequenced by an `Orchestrator`:

| Agent | File | Requirement |
|---|---|---|
| `NewsScannerAgent` | `agents/news_scanner.py` | (a) scan multiple sources |
| `SummarizerAgent` | `agents/summarizer.py` | (a) build a summary |
| `InsightAgent` | `agents/insight_agent.py` | (b) assess industry impact |
| `RecommenderAgent` | `agents/recommender.py` | (c) top 3 sectors, short/mid/long-term |

Every agent tries a real LLM call first (via `agents/llm_client.py`, using
Groq's free OpenAI-compatible API) and transparently falls back to a
deterministic, keyword/lexicon-based method if no key is set or the call
fails — the pipeline never crashes mid-demo.

## Setup (2 minutes)

```bash
pip install -r requirements.txt
cp .env.example .env
```

Get a **free** Groq API key (no credit card) at
[console.groq.com/keys](https://console.groq.com/keys), then put it in `.env`:

```
GROQ_API_KEY=gsk_...your_key...
```

Without a key the pipeline still runs end-to-end on the rule-based fallback
agents — useful to know it works, but the LLM path is what you want for the
actual presentation (richer, better-written output).

## Run it

**Notebook (recommended for presenting):**
```bash
jupyter notebook notebook.ipynb
```
Run all cells top to bottom — it fetches live news and rebuilds the full
briefing with tables and a chart inline.

**CLI (quick check / headless):**
```bash
python main.py
```
Saves a Markdown report and a PNG chart to `reports/`.

## Project layout

```
config.py            sources, sector taxonomy, keyword lexicons
agents/
  llm_client.py       Groq wrapper — the only file that talks to the network
  news_scanner.py      Agent 1
  summarizer.py         Agent 2
  insight_agent.py       Agent 3
  recommender.py           Agent 4
orchestrator.py       sequences the agents, builds PipelineResult
report.py             renders Markdown report + sector chart
main.py               CLI entry point
notebook.ipynb        presentation-friendly walkthrough (main deliverable)
cache/                last successful scan, used if all live fetches fail
reports/              generated output lands here
```

## Notes

- News sources are free public RSS feeds — no API key, no rate limits
  (CNBC, MarketWatch, Yahoo Finance, Investing.com, Economic Times, Fortune,
  WSJ Markets). Edit `config.RSS_FEEDS` to add/remove sources.
- The 11-sector taxonomy is GICS-style (Energy, Financials, Information
  Technology, etc.) — see `config.SECTORS`.
- Nothing in the output is unsourced: every theme, sector rating, and
  recommendation carries the specific article link(s) it's grounded in.
