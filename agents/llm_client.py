"""
LLMClient — a thin, provider-agnostic wrapper around the Groq chat-completions
API (free tier, OpenAI-compatible), with one job: never let the pipeline crash
just because a key is missing or a network call fails.

Every other agent asks this client for JSON and gets either a parsed dict
(LLM path) or None (meaning: "use your own rule-based fallback"). Agents
never talk to the network directly — this is the only place that does,
which is what makes the fallback behaviour possible to reason about.
"""

import json
import re
import requests

import config


class LLMClient:
    def __init__(self):
        self.api_key = config.GROQ_API_KEY
        self.model = config.GROQ_MODEL
        self.available = bool(self.api_key)
        self.last_error = None

    def ask_json(self, system_prompt: str, user_prompt: str) -> dict | None:
        """Ask the LLM for a JSON object. Returns None on any failure so
        the caller can fall back to its deterministic logic."""
        if not self.available:
            return None

        try:
            response = requests.post(
                config.GROQ_API_URL,
                headers={
                    "Authorization": f"Bearer {self.api_key}",
                    "Content-Type": "application/json",
                },
                json={
                    "model": self.model,
                    "messages": [
                        {"role": "system", "content": system_prompt},
                        {"role": "user", "content": user_prompt},
                    ],
                    "temperature": 0.3,
                    "response_format": {"type": "json_object"},
                },
                timeout=config.LLM_TIMEOUT_SECONDS,
            )
            response.raise_for_status()
            content = response.json()["choices"][0]["message"]["content"]
            return json.loads(_extract_json(content))
        except Exception as exc:  # network error, bad key, model retired, malformed JSON...
            self.last_error = str(exc)
            return None


def _extract_json(text: str) -> str:
    """Models occasionally wrap JSON in markdown fences despite instructions.
    Strip that before parsing rather than failing the whole call."""
    match = re.search(r"\{.*\}", text, re.DOTALL)
    return match.group(0) if match else text
