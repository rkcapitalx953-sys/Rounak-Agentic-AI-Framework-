"""
Two-pass pagination. Renders the built .docx to PDF, finds the page each
heading lands on, and writes toc-pages.json for build.js to consume.
Run:  node build.js && python3 paginate.py && node build.js
"""
import json, os, re, subprocess, sys, tempfile

DIR = os.path.dirname(os.path.abspath(__file__))
DOCX = os.path.join(DIR, "UPI_Research_Paper.docx")
SCRATCH = "/tmp/claude-0/-home-user-Rounak-Agentic-AI-Framework-/da54fbc6-4c55-5413-b3a5-ca59b80418a8/scratchpad"
RENDER = os.path.join(SCRATCH, "render")

def norm(s):
    """Whitespace-free lowercase form: immune to line wrapping inside a heading."""
    return re.sub(r"\s+", "", s).lower()

def to_pdf():
    os.makedirs(RENDER, exist_ok=True)
    env = dict(os.environ, HOME=os.path.join(SCRATCH, "lohome"))
    subprocess.run(
        ["soffice", f"-env:UserInstallation=file://{SCRATCH}/lop_pag",
         "--headless", "--convert-to", "pdf", DOCX, "--outdir", RENDER],
        check=True, capture_output=True, timeout=600, env=env)
    return os.path.join(RENDER, "UPI_Research_Paper.pdf")

def page_texts(pdf):
    out = subprocess.run(["pdftotext", "-layout", pdf, "-"],
                         check=True, capture_output=True, text=True).stdout
    return out.split("\f")

def headings():
    """Pull h1/h2 text out of the content modules, in document order."""
    js = subprocess.run(
        ["node", "-e",
         "const a=[...require('./content').FRONT,...require('./ch1_2').CH1_2,"
         "...require('./ch3').CH3,...require('./ch4_analysis').CH4_ANALYSIS,"
         "...require('./ch4_5').CH4_5];"
         "console.log(JSON.stringify(a.filter(x=>x.t==='h1'||x.t==='h2')"
         ".map(x=>({text:x.text,level:x.t==='h1'?0:1}))))"],
        cwd=DIR, check=True, capture_output=True, text=True).stdout
    # "Index" is a substring of "Financial Inclusion Index" and similar
    # headings later in the document, so searching for it drags the cursor
    # forward and breaks every lookup after it. It needs no page number anyway.
    return [h for h in json.loads(js) if h["text"] != "Index"]

def main():
    pdf = to_pdf()
    pages = page_texts(pdf)
    npages = len([p for p in pages if p.strip()])
    hs = headings()

    # Once the contents list is populated it repeats every heading, so any
    # page listing many of them is a contents page and must be skipped. Front
    # matter (Certificate, Acknowledgement) precedes it, so we cannot simply
    # start the search after it.
    targets = [norm(h["text"]) for h in hs]
    is_toc = [sum(t in norm(p) for t in targets) >= 5 for p in pages]

    mapping, cursor, missed = {}, 1, []
    for h in hs:
        target = norm(h["text"])
        found = None
        for i in range(cursor, len(pages) + 1):
            if is_toc[i - 1]:
                continue
            if target in norm(pages[i - 1]):
                found = i
                break
        if found:
            mapping[h["text"]] = str(found)
            cursor = found          # headings are monotonic in page order
        else:
            missed.append(h["text"])

    mapping.pop("Index", None)
    missed = [m for m in missed if m != "Index"]
    with open(os.path.join(DIR, "toc-pages.json"), "w", encoding="utf-8") as f:
        json.dump(mapping, f, ensure_ascii=False, indent=1)

    print(f"{npages} pages; located {len(mapping)}/{len(hs)} headings")
    if missed:
        print("NOT FOUND:", *missed, sep="\n  ")
        sys.exit(1)

main()
