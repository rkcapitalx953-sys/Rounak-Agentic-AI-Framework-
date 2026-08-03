# Presentation Script — Agentic AI Business & Finance Intelligence Framework

Target length: ~6 minutes talking + demo, ~2 minutes Q&A. Speaker notes are
in *[brackets]* — don't read those aloud, they're stage directions for you.

---

## 1. Hook (30s)

> "Every morning, an analyst has to read through dozens of business
> headlines from a dozen different outlets, figure out what actually
> matters, work out which industries it affects, and decide where to focus.
> That's a research task that takes a person 30-45 minutes every single day.
> I built an agentic AI system that does that entire workflow — scan,
> synthesize, assess, recommend — end to end, in about 15 seconds."

*[Optional: have the notebook already open in another tab so you can flip to it right after this line.]*

## 2. What "agentic" actually means here (45s)

> "The brief asked for an *agentic* AI framework, not just 'an AI that
> summarizes news.' Those are different things. A single prompt to ChatGPT
> that says 'summarize the news and tell me what sectors to buy' is not
> agentic — it's one model guessing everything at once, with no way to
> check its work.
>
> What I built instead is **four separate agents**, each with one job, each
> handing its output to the next:
>
> 1. A **News Scanner Agent** that pulls from eight independent news sources
> 2. A **Summarizer Agent** that turns those headlines into themed insight
> 3. An **Insight Agent** that scores the impact on eleven different industry
>    sectors
> 4. A **Recommender Agent** that picks the top 3 sectors and reasons about
>    them across short, mid, and long-term horizons
>
> An orchestrator sequences them. Each agent only sees the output of the
> agent before it — not the whole problem at once. That separation is the
> difference between 'agentic' and 'one big prompt.'"

*[This paragraph directly maps to task requirements a/b/c on the brief — say that out loud if your class expects you to trace back to the requirements: "Requirement (a) is agents one and two, (b) is agent three, (c) is agent four."]*

## 3. Architecture walkthrough (1 min)

> "Here's the flow." *[show the diagram cell / README architecture table]*
>
> "News comes in from RSS feeds — Reuters-style wire coverage, CNBC,
> MarketWatch, Yahoo Finance, Fortune, Economic Times, WSJ Markets. No paid
> API, no login — anyone can run this for free.
>
> Every agent tries to reason with a real LLM first — I'm using Groq, which
> gives a free API key in about two minutes, no credit card. But — and this
> is the part I'm most proud of — **if there's no key, or the API call
> fails for any reason, every single agent has a deterministic backup**. It
> falls back to keyword and sentiment-lexicon based logic instead of an
> LLM. The pipeline literally cannot crash from a missing key or a bad
> network connection. That's not a hypothetical — watch, I can demo it
> both ways."

## 4. Live demo (1.5–2 min)

*[Run this ahead of time so feeds are warm/cached, but re-run live in class — narrate while cells execute, since fetch takes a few seconds.]*

> "I'm running the notebook now — first cell fetches from eight sources
> live." *[run scanning cell]* "That's real headlines from this morning,
> deduplicated, roughly sixty articles across eight independent
> publishers, so no single outlet's spin dominates the picture."
>
> "Now the Summarizer Agent groups those into themes." *[show themes
> output]* "Notice every paragraph has clickable source links under it —
> that's not decoration, that's grounding. If the AI says something, I can
> click through and verify it came from a real headline, not something the
> model invented."
>
> "The Insight Agent scores all eleven sectors." *[show table + chart]*
> "Red means negative impact, green positive, grey neutral — magnitude is
> how big a deal it is right now, one to five."
>
> "And finally, the Recommender Agent picks the top three and reasons about
> each across three time horizons." *[show final picks]* "Short-term is
> 'what's the immediate catalyst,' mid-term is 'does this driver persist,'
> long-term is 'is this actually structural or just noise' — that
> distinction is exactly what requirement (c) asked for."

## 5. What makes this different (45s)

*[This is your "why should I get the best-performer award" paragraph — say it with conviction, not apologetically.]*

> "Three things I'd point to as deliberate design choices, not accidents:
>
> - **Everything is grounded.** No hallucinated claims — every insight
>   traces back to a specific, clickable article.
> - **It degrades gracefully.** I stress-tested this without an API key and
>   with a dead news source, and it still produces a full report — just
>   with simpler reasoning. Most people's AI projects break the moment
>   something upstream fails; this one doesn't.
> - **It's free and reproducible.** Anyone grading this can run it
>   themselves in two minutes with no paid subscription — I didn't want the
>   evaluation to depend on my personal API credits."

## 6. Close (20s)

> "So: four agents, one orchestrator, fully grounded output, and it never
> crashes even in the worst case. One more thing — you don't have to take my
> word for any of this. There's a link in the repo README that opens a live,
> runnable copy of this exact notebook in your browser, no install, no setup.
> Anyone grading this can run the real pipeline themselves, against live
> news, right now, not just read a report I generated earlier. That's the
> framework — happy to take questions."

*[If you have a couple of spare minutes and a friendly room, this is a strong closer: pull out your phone or point at the QR/link and let a judge click it live. Watching it work on a device you don't control is more convincing than any slide.]*

---

## Anticipated Q&A

**"Why not just use ChatGPT directly?"**
> Because a single chat prompt gives you one unverifiable paragraph with no
> structure, no citations, and no repeatability. This gives a structured,
> sourced, repeatable pipeline you could run every morning and trust the
> shape of the output every time.

**"How do you know the AI isn't making things up?"**
> Grounding. Every agent is given an *indexed* list of real headlines and
> is required to cite which indices it used — I map those back to actual
> article links afterward. Nothing is accepted from the model without a
> traceable source.

**"What if the news sources are biased?"**
> That's exactly why I pull from eight independent sources spanning wire
> services, business press, and markets desks rather than one — no single
> outlet's framing can dominate the aggregate picture.

**"How would you extend this?"**
> A few directions: track sector calls over time against actual market
> moves to measure accuracy, add a self-critique agent that challenges the
> Recommender's picks before they're finalized, or schedule it to run daily
> and email the briefing automatically.

**"Is this financial advice?"**
> No — it's a decision-support and research-automation tool. It surfaces
> and structures publicly available news faster than a human could; the
> judgment call is still the reader's.

**"What LLM are you using and why?"**
> Groq's free tier, serving Llama models through an OpenAI-compatible API —
> free, fast, and no credit card needed, so the project is runnable by
> anyone grading it without relying on my personal paid account.

**"Can we try it ourselves?"**
> Yes — that's the point of the Binder/Colab links in the README. Click
> either badge and you get the real notebook running in your own browser
> tab, no install, pulling live news right then. It's not a recording.

---

## Before you present — checklist

- [ ] Get a free Groq key at console.groq.com/keys and put it in `.env` —
      the LLM-reasoned output is noticeably better-written than the
      fallback; use it for the actual demo.
- [ ] Run `notebook.ipynb` top to bottom once beforehand so feeds are cached
      (offline-safety net if classroom wifi is bad on the day).
- [ ] Re-run it live in class anyway — the "it fetches real news right now"
      moment is the best part of the demo.
- [ ] Know your fallback story cold — if asked "what happens without the
      API," you should be able to explain it in one sentence, not read it.
- [ ] Click your own Binder link the night before — the first launch builds
      a container and can take a few minutes; it's fast on every launch
      after that. Don't let a judge hit that cold build time.
- [ ] Have the repo link (or a QR code to it) ready to show/share so judges
      can click the Binder/Colab badge themselves if they want to.
