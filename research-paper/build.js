/**
 * Renders the content blocks into a formatted .docx.
 *   node build.js  ->  UPI_Research_Paper.docx
 */
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle,
  ImageRun, PageBreak, Footer, Header, PageNumber, TableOfContents,
  LevelFormat, convertInchesToTwip, Tab, TabStopType, LeaderType,
} = require('docx');

const { FRONT } = require('./content');
const { CH1_2 } = require('./ch1_2');
const { CH3 } = require('./ch3');
const { CH4_5 } = require('./ch4_5');

const ALL = [...FRONT, ...CH1_2, ...CH3, ...CH4_5];
const DIR = __dirname;
const FIGDIR = path.join(DIR, 'figures');

// ------------------------------------------------------------------ tokens --
const INK = '1a1a1a';
const NAVY = '1a3a5c';
const MUTED = '52514e';
const RULE = 'c9c8c4';
const HEAD_FILL = 'e8eef5';
const ZEBRA = 'f6f7f9';
const KEY_FILL = 'eef3f9';
const KEY_EDGE = 'c4d4e6';
const BODY_FONT = 'Cambria';
const SANS = 'Calibri';

// Content width between 1" margins on A4 (11906 dxa wide).
const CONTENT_W = 11906 - 2 * convertInchesToTwip(1); // 9026

// ------------------------------------------------------------- image sizing --
/** Reads width/height straight out of the PNG IHDR chunk. */
function pngSize(file) {
  const b = fs.readFileSync(file);
  return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
}

function imageRun(file, maxPx) {
  const full = path.join(FIGDIR, file);
  const { w, h } = pngSize(full);
  const width = Math.min(maxPx, w);
  return new ImageRun({
    type: 'png',
    data: fs.readFileSync(full),
    transformation: { width, height: Math.round((h * width) / w) },
  });
}

// ----------------------------------------------------------------- helpers --
const run = (text, o = {}) => new TextRun({
  text,
  font: o.font || BODY_FONT,
  size: o.size || 22,
  bold: !!o.bold,
  italics: !!o.italic,
  color: o.color || INK,
});

function bodyPara(text, o = {}) {
  return new Paragraph({
    alignment: o.right ? AlignmentType.RIGHT : AlignmentType.JUSTIFIED,
    spacing: { line: 340, after: o.after === undefined ? 160 : o.after },
    indent: o.indent ? { left: o.indent } : undefined,
    children: [run(text, o)],
  });
}

function cell(text, o = {}) {
  return new TableCell({
    width: { size: o.width, type: WidthType.DXA },
    shading: o.fill ? { type: ShadingType.CLEAR, fill: o.fill, color: 'auto' } : undefined,
    margins: { top: 90, bottom: 90, left: 120, right: 120 },
    verticalAlign: 'center',
    children: [new Paragraph({
      alignment: o.align || AlignmentType.LEFT,
      spacing: { line: 260, after: 0 },
      children: [run(text, { size: 20, bold: o.bold, color: o.color })],
    })],
  });
}

/** Column alignment: prose columns read badly centred, so allow an override. */
function colAlign(b, i) {
  if (b.colAlign && b.colAlign[i]) {
    return b.colAlign[i] === 'left' ? AlignmentType.LEFT
      : b.colAlign[i] === 'right' ? AlignmentType.RIGHT : AlignmentType.CENTER;
  }
  return i === 0 ? AlignmentType.LEFT : AlignmentType.CENTER;
}

function buildTable(b) {
  const widths = b.widths;
  const rows = [
    new TableRow({
      tableHeader: true,
      children: b.head.map((h, i) => cell(h, {
        width: widths[i], fill: HEAD_FILL, bold: true, color: NAVY,
        align: i === 0 ? AlignmentType.LEFT : AlignmentType.CENTER,
      })),
    }),
    ...b.rows.map((r, ri) => new TableRow({
      children: r.map((c, i) => cell(c, {
        width: widths[i],
        fill: ri % 2 === 1 ? ZEBRA : undefined,
        align: colAlign(b, i),
      })),
    })),
  ];
  const thin = { style: BorderStyle.SINGLE, size: 2, color: RULE };
  return new Table({
    columnWidths: widths,
    width: { size: widths.reduce((a, c) => a + c, 0), type: WidthType.DXA },
    borders: {
      top: thin, bottom: thin, left: thin, right: thin,
      insideHorizontal: thin, insideVertical: thin,
    },
    rows,
  });
}

// ------------------------------------------------------- contents helpers --
/** Headings that belong in the table of contents, in document order. */
function tocEntries(blocks) {
  return blocks
    .filter((x) => (x.t === 'h1' || x.t === 'h2') && x.text !== 'Table of Contents')
    .map((x) => ({ text: x.text, level: x.t === 'h1' ? 0 : 1 }));
}

/** Page numbers from a previous render pass; empty on the first pass. */
const PAGEFILE = path.join(DIR, 'toc-pages.json');
const PAGES = fs.existsSync(PAGEFILE)
  ? JSON.parse(fs.readFileSync(PAGEFILE, 'utf8'))
  : {};

// ------------------------------------------------------------- block router --
function render(blocks) {
  const out = [];
  for (const b of blocks) {
    switch (b.t) {
      case 'h1':
        out.push(new Paragraph({
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 240, after: 260 },
          border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: NAVY, space: 6 } },
          children: [run(b.text, { size: 32, bold: true, color: NAVY, font: SANS })],
        }));
        break;

      case 'h2':
        out.push(new Paragraph({
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 320, after: 140 },
          children: [run(b.text, { size: 26, bold: true, color: NAVY, font: SANS })],
        }));
        break;

      case 'h3':
        out.push(new Paragraph({
          heading: HeadingLevel.HEADING_3,
          spacing: { before: 280, after: 130 },
          children: [run(b.text, { size: 23, bold: true, color: INK, font: SANS })],
        }));
        break;

      case 'h4': // Explanation / Analysis / Interpretation labels
        out.push(new Paragraph({
          spacing: { before: 200, after: 90 },
          children: [run(b.text, { size: 22, bold: true, italic: true, color: MUTED, font: SANS })],
        }));
        break;

      case 'p':
        out.push(bodyPara(b.text, {
          bold: b.bold, italic: b.italicAll, right: b.right,
        }));
        break;

      case 'center':
        out.push(new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: {
            after: b.spacing === undefined ? 160 : b.spacing,
            line: b.line || Math.max(300, Math.round((b.size || 22) * 15)),
          },
          children: [run(b.text, b)],
        }));
        break;

      case 'keypoint':
        out.push(new Paragraph({
          alignment: AlignmentType.LEFT,
          spacing: { before: 160, after: 260, line: 300 },
          indent: { left: 170, right: 170 },
          shading: { type: ShadingType.CLEAR, fill: KEY_FILL, color: 'auto' },
          border: {
            top: { style: BorderStyle.SINGLE, size: 2, color: KEY_EDGE, space: 8 },
            bottom: { style: BorderStyle.SINGLE, size: 2, color: KEY_EDGE, space: 8 },
            left: { style: BorderStyle.SINGLE, size: 18, color: NAVY, space: 10 },
            right: { style: BorderStyle.SINGLE, size: 2, color: KEY_EDGE, space: 8 },
          },
          children: [
            run(`${b.label || 'In one sentence'}:  `, { bold: true, size: 21, color: NAVY, font: SANS }),
            run(b.text, { size: 21 }),
          ],
        }));
        break;

      case 'qa':
        out.push(new Paragraph({
          spacing: { before: 220, after: 80, line: 300 },
          keepNext: true,
          children: [
            run('Q.  ', { bold: true, size: 22, color: NAVY, font: SANS }),
            run(b.q, { bold: true, size: 22, color: NAVY, font: SANS }),
          ],
        }));
        out.push(new Paragraph({
          alignment: AlignmentType.JUSTIFIED,
          spacing: { after: 120, line: 320 },
          indent: { left: 300 },
          children: [run(b.a)],
        }));
        break;

      case 'equation':
        out.push(new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 160, after: 200 },
          children: [run(b.text, { size: 26, bold: true, color: NAVY })],
        }));
        break;

      case 'bullets':
        b.items.forEach((it) => out.push(new Paragraph({
          numbering: { reference: 'dots', level: 0 },
          alignment: AlignmentType.JUSTIFIED,
          spacing: { line: 320, after: 110 },
          children: [run(it)],
        })));
        break;

      case 'numbers':
        b.items.forEach((it) => out.push(new Paragraph({
          numbering: { reference: 'nums', level: 0 },
          alignment: AlignmentType.JUSTIFIED,
          spacing: { line: 320, after: 110 },
          children: [run(it)],
        })));
        break;

      case 'refs':
        b.items.forEach((it, i) => out.push(new Paragraph({
          alignment: AlignmentType.LEFT,
          spacing: { line: 280, after: 130 },
          indent: { left: 480, hanging: 480 },
          children: [
            run(`[${i + 1}]  `, { bold: true, color: NAVY, size: 21 }),
            run(it, { size: 21 }),
          ],
        })));
        break;

      case 'table':
        out.push(new Paragraph({ spacing: { before: 120, after: 100 }, children: [] }));
        out.push(buildTable(b));
        if (b.note) {
          out.push(new Paragraph({
            alignment: AlignmentType.LEFT,
            spacing: { before: 110, after: 220 },
            children: [run(b.note, { size: 18, italic: true, color: MUTED })],
          }));
        } else {
          out.push(new Paragraph({ spacing: { after: 200 }, children: [] }));
        }
        break;

      case 'figure':
        out.push(new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 220, after: 90 },
          keepNext: true,
          children: [imageRun(b.file, 600)],
        }));
        out.push(new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 240 },
          children: [run(b.caption, { size: 19, italic: true, color: MUTED })],
        }));
        break;

      case 'sigrow': {
        const half = Math.floor(CONTENT_W / 2);
        const sig = (lines, align) => new TableCell({
          width: { size: half, type: WidthType.DXA },
          borders: {
            top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE },
          },
          children: lines.map((l, i) => new Paragraph({
            alignment: align,
            spacing: { after: 60, line: 260 },
            children: [run(l, { size: 20, italic: i > 0, color: i > 0 ? MUTED : INK })],
          })),
        });
        out.push(new Table({
          columnWidths: [half, half],
          width: { size: half * 2, type: WidthType.DXA },
          borders: {
            top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE },
            left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE },
            insideHorizontal: { style: BorderStyle.NONE },
            insideVertical: { style: BorderStyle.NONE },
          },
          rows: [new TableRow({
            children: [sig(b.left, AlignmentType.LEFT), sig(b.right, AlignmentType.RIGHT)],
          })],
        }));
        break;
      }

      case 'rule':
        out.push(new Paragraph({
          spacing: { before: 60, after: 60 },
          border: { bottom: { style: BorderStyle.SINGLE, size: 10, color: NAVY, space: 2 } },
          children: [],
        }));
        break;

      case 'spacer':
        for (let i = 0; i < (b.n || 1); i++) {
          out.push(new Paragraph({ spacing: { after: 120 }, children: [] }));
        }
        break;

      case 'toclist':
        tocEntries(ALL).forEach((e) => out.push(new Paragraph({
          spacing: { after: 50, line: 240 },
          indent: { left: e.level === 1 ? 340 : 0 },
          tabStops: [{
            type: TabStopType.RIGHT,
            position: CONTENT_W,
            leader: LeaderType.DOT,
          }],
          children: [
            run(e.text, {
              size: 20,
              bold: e.level === 0,
              color: e.level === 0 ? NAVY : INK,
              font: SANS,
            }),
            new TextRun({ children: [new Tab()] }),
            run(PAGES[e.text] || '', { size: 20, bold: e.level === 0, font: SANS }),
          ],
        })));
        break;

      case 'pb':
        out.push(new Paragraph({ children: [new PageBreak()] }));
        break;

      default:
        throw new Error(`unknown block type: ${b.t}`);
    }
  }
  return out;
}

// ------------------------------------------------------------------- build --
function makeDocument({ blocks, title, description, headerText }) {
  return new Document({
  creator: 'Rounak Archana Kameswaran',
  title,
  description,
  styles: {
    default: {
      document: { run: { font: BODY_FONT, size: 22, color: INK } },
    },
  },
  numbering: {
    config: [
      {
        reference: 'dots',
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: '•',
          alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 520, hanging: 260 } } },
        }],
      },
      {
        reference: 'nums',
        levels: [{
          level: 0, format: LevelFormat.DECIMAL, text: '%1.',
          alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 560, hanging: 300 } } },
        }],
      },
    ],
  },
  sections: [{
    properties: {
      page: {
        margin: {
          top: convertInchesToTwip(1), bottom: convertInchesToTwip(1),
          left: convertInchesToTwip(1), right: convertInchesToTwip(1),
        },
      },
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          alignment: AlignmentType.RIGHT,
          spacing: { after: 60 },
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: RULE, space: 4 } },
          children: [run(headerText,
            { size: 17, italic: true, color: MUTED, font: SANS })],
        })],
      }),
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({
            children: ['Page ', PageNumber.CURRENT, ' of ', PageNumber.TOTAL_PAGES],
            font: SANS, size: 17, color: MUTED,
          })],
        })],
      }),
    },
    children: render(blocks),
  }],
  });
}

const TARGETS = {
  paper: {
    blocks: ALL,
    file: 'UPI_Research_Paper.docx',
    title: 'Impact of UPI-Based Digital Payments on the Velocity of Money and Economic Activity in India',
    description: 'CBSE Class XII Economics research project, session 2026-27',
    headerText: 'UPI, the Velocity of Money and Economic Activity in India',
  },
  viva: {
    get blocks() { return require('./viva').VIVA; },
    file: 'UPI_Viva_Cheat_Sheet.docx',
    title: 'Viva Cheat Sheet — UPI, the Velocity of Money and Economic Activity in India',
    description: 'Preparation handbook for the project viva',
    headerText: 'Viva Cheat Sheet — UPI and the Velocity of Money',
  },
};

const target = TARGETS[process.argv[2] || 'paper'];
if (!target) throw new Error(`unknown target: ${process.argv[2]}`);

Packer.toBuffer(makeDocument(target)).then((buf) => {
  const out = path.join(DIR, target.file);
  fs.writeFileSync(out, buf);
  console.log(`wrote ${out}  (${(buf.length / 1024).toFixed(0)} KB)`);
});
