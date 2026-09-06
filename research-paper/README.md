# UPI, the Velocity of Money and Economic Activity in India

A CBSE Class XII Economics research project (48 pages, A4), written from the
synopsis of the same title.

| File | What it is |
|---|---|
| `UPI_Research_Paper.docx` | The paper. This is the deliverable. |
| `UPI_Research_Paper.pdf` | Same document, rendered — for reading or printing without Word. |
| `figures/` | The ten charts, as PNGs at 220 dpi. |

## Rebuilding

Sources are split so prose can be edited without touching layout code:

| File | Contains |
|---|---|
| `content.js` | Title page, certificate, acknowledgement, declaration, contents, list of exhibits |
| `ch1_2.js` | Chapter 1 (Introduction) and Chapter 2 (Design of Study) |
| `ch3.js` | Chapter 3 (Review of Literature) and the eight data sets |
| `ch4_5.js` | Chapter 4 (Findings), Chapter 5 (Conclusion), Bibliography |
| `build.js` | Renders the content blocks into the `.docx` |
| `make_figures.py` | Generates `figures/*.png` |
| `paginate.py` | Resolves the page numbers printed in the table of contents |

```bash
pip install matplotlib          # figures
npm install docx                # document

python3 make_figures.py         # regenerate the charts
node build.js                   # pass 1
python3 paginate.py             # find each heading's page number
node build.js                   # pass 2, with the contents page filled in
```

The table of contents is a static, page-numbered list rather than a Word TOC
field, so it displays correctly without anyone having to press "update fields",
and it survives conversion to PDF and Google Docs.

`paginate.py` needs `libreoffice-writer` and `poppler-utils`. If they are
missing, `build.js` still produces the document — the contents page simply keeps
whatever page numbers are in `toc-pages.json`.

## Editing the text

Each block in the content files is a small object, e.g.:

```js
{ t: 'p',  text: 'A paragraph.' }
{ t: 'h2', text: '1.1  A heading' }
{ t: 'table', widths: [...], head: [...], rows: [...], note: 'Table 1. Source: ...' }
{ t: 'figure', file: 'fig01_upi_volume.png', caption: 'Figure 1. ...' }
```

Change the text, re-run the two build passes, and the page numbers follow.

## A note on the data

Every figure quoted in the paper is referenced to the institution that published
it — RBI, NPCI, PIB, MoSPI, TRAI, IMF, BIS and the World Bank. Two measures are
derived by the author from published data rather than taken from a source: the
average value of a UPI transaction (Table 2) and UPI turnover as a multiple of
nominal GDP (Table 4). Both derivations are stated beside their tables.

Two caveats are flagged in the document itself and are worth repeating here:

- The UPI **value** figures for FY 2018-19, FY 2020-21 and FY 2021-22 come from
  NPCI's product-statistics series. Every other cell in Table 1 was cross-checked
  against a PIB release. Worth confirming against
  <https://www.npci.org.in/what-we-do/upi/product-statistics> before submission.
- Nominal GDP in Table 4 crosses a base-year revision: FY 2022-23 and FY 2023-24
  are on the 2011-12 base, FY 2024-25 and FY 2025-26 on the 2022-23 base. The
  note under the table says so.
