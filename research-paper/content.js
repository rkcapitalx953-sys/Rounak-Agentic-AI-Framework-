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
 */

const FRONT = [
  // ------------------------------------------------------------- title page
  { t: 'spacer', n: 2 },
  { t: 'center', text: 'A RESEARCH PROJECT SUBMITTED TO THE', size: 22, spacing: 120 },
  { t: 'center', text: 'CENTRAL BOARD OF SECONDARY EDUCATION', size: 22, spacing: 120 },
  { t: 'center', text: 'IN PARTIAL FULFILMENT OF THE REQUIREMENTS FOR', size: 22, spacing: 120 },
  { t: 'center', text: 'THE AISSCE IN ECONOMICS (CODE 030)', size: 22, spacing: 400 },
  { t: 'rule' },
  { t: 'spacer', n: 1 },
  {
    t: 'center', text: 'IMPACT OF UPI-BASED DIGITAL PAYMENTS ON THE VELOCITY OF MONEY AND ECONOMIC ACTIVITY IN INDIA',
    size: 34, bold: true, spacing: 240, color: '1a3a5c',
  },
  { t: 'spacer', n: 1 },
  { t: 'rule' },
  { t: 'spacer', n: 1 },
  {
    t: 'center', italic: true, size: 21, color: '52514e', spacing: 200,
    text: 'An empirical study of the Unified Payments Interface between FY 2016-17 and FY 2025-26, and what it implies for the circulation of money in the Indian economy',
  },
  { t: 'spacer', n: 3 },
  { t: 'center', text: 'Submitted by', size: 21, color: '52514e', spacing: 100 },
  { t: 'center', text: 'ROUNAK ARCHANA KAMESWARAN', size: 26, bold: true, spacing: 100 },
  { t: 'center', text: 'Class XII  ·  Commerce', size: 21, color: '52514e', spacing: 340 },
  { t: 'center', text: 'Under the guidance of', size: 21, color: '52514e', spacing: 100 },
  { t: 'center', text: '_______________________________', size: 21, spacing: 60 },
  { t: 'center', text: 'Post-Graduate Teacher, Economics', size: 20, italic: true, color: '52514e', spacing: 340 },
  { t: 'center', text: 'ACADEMIC SESSION 2026-27', size: 21, bold: true },
  { t: 'pb' },

  // ------------------------------------------------------------- certificate
  { t: 'h1', text: 'Certificate' },
  {
    t: 'p', text:
      'This is to certify that ROUNAK ARCHANA KAMESWARAN, a student of Class XII, has ' +
      'satisfactorily completed the research project entitled "Impact of UPI-Based Digital ' +
      'Payments on the Velocity of Money and Economic Activity in India" in partial ' +
      'fulfilment of the requirements prescribed by the Central Board of Secondary Education ' +
      'for the All India Senior School Certificate Examination in Economics (Code 030) for ' +
      'the academic session 2026-27.',
  },
  {
    t: 'p', text:
      'The work presented in this report is the original effort of the candidate. It has been ' +
      'carried out under my supervision, and to the best of my knowledge it has not been ' +
      'submitted earlier to this or any other Board for the award of any certificate or diploma.',
  },
  { t: 'spacer', n: 4 },
  {
    t: 'sigrow',
    left: ['_____________________________', 'Signature of the Internal Examiner'],
    right: ['_____________________________', 'Signature of the External Examiner'],
  },
  { t: 'spacer', n: 3 },
  {
    t: 'sigrow',
    left: ['_____________________________', 'Signature of the Subject Teacher'],
    right: ['_____________________________', 'Signature of the Principal'],
  },
  { t: 'spacer', n: 2 },
  { t: 'p', text: 'Date: _______________                    Place: _______________', italicAll: true },
  { t: 'pb' },

  // --------------------------------------------------------- acknowledgement
  { t: 'h1', text: 'Acknowledgement' },
  {
    t: 'p', text:
      'A project of this kind is never the work of one person alone, and I am glad to record ' +
      'the debts I have accumulated in writing it.',
  },
  {
    t: 'p', text:
      'My first and deepest thanks go to my Economics teacher, whose classes first made me ' +
      'curious about why the same rupee, spent more often, does more work in an economy. That ' +
      'single idea became the spine of this study. I am grateful for the patience with which ' +
      'my drafts were read and for the insistence that every number carry a source.',
  },
  {
    t: 'p', text:
      'I thank the Principal and the school for providing the library and internet access ' +
      'without which secondary research of this scale would not have been possible.',
  },
  {
    t: 'p', text:
      'This project rests almost entirely on data placed in the public domain by Indian ' +
      'institutions. I acknowledge the Reserve Bank of India, the National Payments Corporation ' +
      'of India, the Press Information Bureau, the Ministry of Statistics and Programme ' +
      'Implementation and the Telecom Regulatory Authority of India, whose published statistics ' +
      'form the evidentiary base of this report. I also acknowledge the International Monetary ' +
      'Fund, the Bank for International Settlements and the World Bank, whose research allowed ' +
      'me to place India’s experience in an international frame.',
  },
  {
    t: 'p', text:
      'Finally, I thank my family for their encouragement, and my classmates for arguing with ' +
      'my conclusions — which improved them.',
  },
  { t: 'spacer', n: 2 },
  { t: 'p', right: true, text: 'ROUNAK ARCHANA KAMESWARAN', bold: true },
  { t: 'p', right: true, text: 'Class XII · Commerce', italicAll: true },
  { t: 'pb' },

  // -------------------------------------------------------------- declaration
  { t: 'h1', text: 'Declaration' },
  {
    t: 'p', text:
      'I hereby declare that the project report entitled "Impact of UPI-Based Digital Payments ' +
      'on the Velocity of Money and Economic Activity in India" is a record of independent ' +
      'research work carried out by me during the academic session 2026-27.',
  },
  {
    t: 'p', text:
      'The study is based on secondary data. Every statistic reproduced in this report has been ' +
      'drawn from the published releases of official institutions or from peer-reviewed and ' +
      'institutional research, and each has been referenced to its source in the text and in ' +
      'the Bibliography. Where a figure has been derived by me from published data — for ' +
      'example the average value of a transaction, or a ratio to Gross Domestic Product — ' +
      'the method of derivation is stated alongside the table so that it can be independently ' +
      'checked.',
  },
  {
    t: 'p', text:
      'No part of this report has been copied from any other project, and it has not been ' +
      'submitted previously for the award of any certificate, diploma or degree.',
  },
  { t: 'spacer', n: 3 },
  { t: 'p', right: true, text: '_____________________________' },
  { t: 'p', right: true, text: 'ROUNAK ARCHANA KAMESWARAN', bold: true },
  { t: 'pb' },

  // ---------------------------------------------------------------- contents
  { t: 'h1', text: 'Table of Contents' },
  { t: 'toclist' },
  { t: 'pb' },

  // -------------------------------------------------------------- exhibits
  { t: 'h1', text: 'List of Exhibits' },
  {
    t: 'p', italicAll: true, text:
      'The eight data sets analysed in Chapter 3 are supported by the following tables and ' +
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
