/**
 * Content model for the research paper. Each entry is a block descriptor that
 * build.js renders into a docx element. Keeping prose separate from layout
 * makes the text editable without touching the rendering code.
 *
 *   h1 h2 h3   headings          p        body paragraph
 *   bullets    unordered list    numbers  ordered list
 *   table      {head, rows, widths, note} figure {file, caption}
 *   pb         page break        rule     horizontal rule
 *   center     centred paragraph  spacer  blank line
 *
 * The document opens on the index; there is no title page or front matter.
 */

const FRONT = [
  // ------------------------------------------------------------------- index
  { t: 'h1', text: 'Index' },
  { t: 'toclist' },
  { t: 'pb' },

  // -------------------------------------------------------------- exhibits
  { t: 'h1', text: 'List of Exhibits' },
  {
    t: 'p', italicAll: true, text:
      'The eight data sets analysed in Chapter 4 are supported by the following tables and ' +
      'figures. Each data set follows the same four-part structure: the table or graph, an ' +
      'explanation of the data, an analysis, and an interpretation.',
  },
  {
    t: 'table',
    widths: [1500, 5400, 2126],
    head: ['Exhibit', 'Title', 'Data set'],
    rows: [
      ['Table 1', 'Growth of UPI transactions, FY 2016-17 to FY 2025-26', 'Data Set 1'],
      ['Figure 1', 'UPI transaction volume, FY 2016-17 to FY 2025-26', 'Data Set 1'],
      ['Figure 2', 'UPI transaction value, FY 2016-17 to FY 2025-26', 'Data Set 1'],
      ['Table 2', 'Average value of a single UPI transaction', 'Data Set 2'],
      ['Figure 3', 'Average value of a single UPI transaction', 'Data Set 2'],
      ['Table 3', 'UPI and total digital payments compared', 'Data Set 3'],
      ['Figure 5', 'UPI’s share of retail digital payment volume', 'Data Set 3'],
      ['Table 4', 'UPI turnover relative to nominal GDP', 'Data Set 4'],
      ['Figure 4', 'UPI turnover relative to nominal GDP', 'Data Set 4'],
      ['Table 5', 'Digital payments around demonetisation', 'Data Set 5'],
      ['Figure 6', 'Digital payments around demonetisation', 'Data Set 5'],
      ['Table 6', 'UPI growth before, during and after COVID-19', 'Data Set 6'],
      ['Figure 7', 'UPI volume before, during and after COVID-19', 'Data Set 6'],
      ['Table 7', 'Indicators of financial inclusion and digitalisation', 'Data Set 7'],
      ['Figure 8', 'Financial inclusion and payment digitalisation indices', 'Data Set 7'],
      ['Figure 10', 'India’s share of global real-time payment volume', 'Data Set 7'],
      ['Table 8', 'Internet and telecom penetration, rural and urban', 'Data Set 8'],
      ['Figure 9', 'The rural–urban digital divide', 'Data Set 8'],
    ],
  },
  { t: 'pb' },
];

module.exports = { FRONT };
