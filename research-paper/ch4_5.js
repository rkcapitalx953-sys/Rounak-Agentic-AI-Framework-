/** Chapter 4 (Findings), Chapter 5 (Conclusion), Glossary, Bibliography. */

const { GLOSSARY } = require('./glossary');

const CH4_5 = [
  // ============================================ 4. FINDINGS & SUGGESTIONS ===
  { t: 'h1', text: '4.  Findings and Suggestions' },

  { t: 'h2', text: '4.1  Findings' },
  {
    t: 'p', text:
      'Seven findings emerge from the analysis in Chapter 3. Each is stated with the evidence ' +
      'that supports it and with the qualification that evidence requires.',
  },
  {
    t: 'p', bold: true,
    text: 'Finding 1.  UPI has become the default retail payment mechanism of the Indian economy.',
  },
  {
    t: 'p', text:
      'Volume rose from 2 crore transactions in FY 2016-17 to 24,162 crore in FY 2025-26, and ' +
      'UPI accounted for 81 per cent of retail digital payment transactions in FY 2024-25 [2], ' +
      '[14]. Growth occurred in every year of the period, and the absolute annual increment ' +
      'continues to rise even as percentage growth moderates.',
  },
  {
    t: 'p', bold: true,
    text: 'Finding 2.  The growth is composed of small payments, and increasingly so.',
  },
  {
    t: 'p', text:
      'The average value of a UPI transaction fell from ₹1,838 in FY 2020-21 to ₹1,300 in ' +
      'FY 2025-26, a decline of roughly 29 per cent, while volume rose more than ten-fold over ' +
      'the same years (Data Set 2). Person-to-merchant transactions now form 63 per cent of ' +
      'volume, of which 86 per cent are below ₹500 [2]. Since prices rose over the period, the ' +
      'shift towards small payments is larger in real terms than the nominal figures show.',
  },
  {
    t: 'p', bold: true,
    text: 'Finding 3.  Measured transactions turnover per rupee of output has risen substantially.',
  },
  {
    t: 'p', text:
      'UPI value as a multiple of nominal GDP rose from 0.52 in FY 2022-23 to 0.91 in FY 2025-26 ' +
      '(Data Set 4). This is consistent with the Cambridge prediction that a fall in the cost of ' +
      'transacting reduces the money balance held against a given volume of spending. It is a ' +
      'transactions measure, not income velocity, and part of the rise reflects the migration of ' +
      'previously unmeasured cash payments into a measured system. The available data cannot ' +
      'separate the two components.',
  },
  {
    t: 'p', bold: true,
    text: 'Finding 4.  Both external shocks accelerated adoption, but only one produced a durable change.',
  },
  {
    t: 'p', text:
      'Digital transactions rose 56 per cent in the seven months after demonetisation [24], but ' +
      'approximately 98.96 per cent of the demonetised currency returned to the banking system ' +
      '[23] and cash usage substantially recovered. The pandemic produced 78 per cent growth in ' +
      'FY 2020-21 followed by 106 per cent in FY 2021-22 — faster after the shock than during ' +
      'it — and growth continued at 82 and 57 per cent in the two subsequent years (Data Set 6). ' +
      'The distinguishing factor appears to be duration: the pandemic lasted long enough for ' +
      'digital payment to become habitual.',
  },
  {
    t: 'p', bold: true,
    text: 'Finding 5.  UPI has contributed to measurable gains in financial inclusion.',
  },
  {
    t: 'p', text:
      'The RBI Financial Inclusion Index rose from 64.2 to 67.0 between March 2024 and March ' +
      '2025 with improvement across access, usage and quality [7]. The usage gain matters most, ' +
      'since access had already been largely achieved: the share of Indian women holding ' +
      'inactive accounts fell from a third in 2021 to 18 per cent by 2024 [21].',
  },
  {
    t: 'p', bold: true,
    text: 'Finding 6.  There is credible evidence of an effect on real activity, though it is not conclusive.',
  },
  {
    t: 'p', text:
      'Of small merchants surveyed for the Department of Financial Services, 94 per cent had ' +
      'adopted UPI and 57 per cent reported an increase in sales following adoption [15]. This ' +
      'is self-reported and cannot be audited, and a merchant may attribute to a payment method ' +
      'a gain with other causes. It nonetheless constitutes the most direct available evidence ' +
      'that the effect reaches output and not merely the composition of payments. Cross-country ' +
      'work supports the direction: the BIS finds that fast payment system launches stimulate ' +
      'digital finance adoption, most strongly in lower-income economies [20].',
  },
  {
    t: 'p', bold: true,
    text: 'Finding 7.  The gains are unequally distributed, and two significant risks accompany them.',
  },
  {
    t: 'p', text:
      'Rural internet penetration was 46.73 subscribers per 100 people against an urban 113.83 ' +
      'in August 2025 [22], which caps how inclusive a network-dependent payment system can be. ' +
      'Cybersecurity incidents rose from 10.29 lakh in 2022 to 22.68 lakh in 2024 [28]. And ' +
      'roughly 75 per cent of users in one survey reported spending more because digital money ' +
      'felt less tangible [25] — the same frictionlessness that raises velocity also removes a ' +
      'restraint that cash imposed incidentally.',
  },

  { t: 'h2', text: '4.2  Suggestions' },
  {
    t: 'p', text:
      'Six suggestions follow from the findings. They are directed at the constraints the ' +
      'evidence actually identifies rather than at general aspirations.',
  },
  {
    t: 'numbers', items: [
      'Treat rural connectivity as payments policy. Data Set 8 shows the binding constraint on ' +
      'rural digital payment is network access, not merchant acceptance: 5.45 crore touch points ' +
      'have been deployed in tier-3 to tier-6 centres [14], yet fewer than half of rural ' +
      'residents are connected. Extending broadband is therefore a more effective payments ' +
      'intervention at the margin than further acceptance subsidy.',
      'Invest in fraud awareness at the scale of the system itself. UPI’s technical defences — ' +
      'device binding, two-factor authentication, machine-learning transaction monitoring [28] — ' +
      'are strong; the exploited vulnerability is the user’s judgement. Awareness campaigns ' +
      'should be treated as core infrastructure and delivered in regional languages through the ' +
      'payment applications themselves, at the point of transaction.',
      'Build spending-awareness features into payment applications. Given the finding that a ' +
      'large majority of surveyed users report spending more because digital money feels less ' +
      'tangible [25], applications could offer opt-in periodic spending summaries and ' +
      'self-imposed limits. This addresses a documented behavioural cost without restricting ' +
      'anyone’s choices.',
      'Publish disaggregated payment statistics. The most significant analytical limitation ' +
      'encountered in this project was the absence of state- and district-level UPI data, which ' +
      'made it impossible to examine regional variation. Releasing anonymised, disaggregated ' +
      'statistics would enable research that national aggregates cannot support.',
      'Reduce single points of failure. As cash is displaced, an outage ceases to be an ' +
      'inconvenience and becomes an interruption of commerce. Offline and feature-phone payment ' +
      'modes deserve continued investment specifically as resilience measures, not merely as ' +
      'inclusion measures.',
      'Evaluate the incentive framework openly. Zero-cost payment is financed by the exchequer ' +
      'rather than by merchants [14], [15]. Whether the gains in formalisation, inclusion and ' +
      'tax visibility exceed that outlay is an empirical question that deserves periodic public ' +
      'evaluation, since the answer determines whether the current pricing model is sustainable.',
    ],
  },
  { t: 'pb' },

  // ======================================================= 5. CONCLUSION ====
  { t: 'h1', text: '5.  Conclusion' },
  {
    t: 'p', text:
      'This project set out to ask whether the growth of UPI has changed the speed at which ' +
      'money circulates in the Indian economy, and whether any effect on real economic activity ' +
      'can be identified from published data. The two questions deserve separate answers.',
  },
  {
    t: 'p', text:
      'On circulation, the evidence is strong. The value settled over UPI rose from roughly half ' +
      'of nominal GDP in FY 2022-23 to approximately nine-tenths of it in FY 2025-26, and the ' +
      'number of transactions rose thirteen-fold over the decade while the average transaction ' +
      'shrank by nearly a third. Read through Fisher’s identity, this is a large increase in the ' +
      'number of transactions supported by a given money stock; read through the Cambridge ' +
      'formulation, it is a fall in the balance people need to hold against their spending. Both ' +
      'readings describe a rise in the transactions velocity of money. The qualification, stated ' +
      'plainly in Data Set 4 and repeated here, is that some part of the measured increase is ' +
      'the migration of cash payments — real, but previously invisible — into a system that ' +
      'counts them.',
  },
  {
    t: 'p', text:
      'On economic activity the evidence is suggestive rather than conclusive, and this project ' +
      'declines to claim more. That 57 per cent of small merchants report higher sales after ' +
      'adopting digital payment [15] is the most direct indication available that the effect ' +
      'reaches output. That the BIS finds fast payment systems stimulate digital finance ' +
      'adoption most strongly in lower-income economies [20], and that the IMF finds faster ' +
      'growth in districts where interoperability delivered the largest gain [18], both point ' +
      'the same way. None of this isolates UPI’s independent causal contribution from the ' +
      'simultaneous expansion of smartphones, internet access, bank accounts and nominal incomes ' +
      'over the same decade. A study based on published aggregates cannot perform that ' +
      'separation, and it would be dishonest to pretend otherwise.',
  },
  {
    t: 'p', text:
      'What can be said without qualification is that UPI has transformed payment behaviour. It ' +
      'has done so by solving a problem that cards and wallets could not: making the very small ' +
      'payment worth making. The decline in average transaction size from ₹1,838 to ₹1,300, ' +
      'occurring alongside a ten-fold rise in volume and in the face of inflation, is the ' +
      'signature of a system reaching transactions it did not previously serve. The tea, the ' +
      'vegetables, the auto fare — these are the payments UPI added, and they are the reason ' +
      'the aggregate numbers are what they are.',
  },
  {
    t: 'p', text:
      'The efficiency case is therefore genuine. Money that need not be withdrawn, carried and ' +
      're-deposited is money available for use; a merchant paid instantly restocks sooner; a ' +
      'transaction that leaves a record can become the basis of credit. These are real gains ' +
      'and they are consistent with everything in Chapter 3.',
  },
  {
    t: 'p', text:
      'Two problems remain unresolved and neither is incidental. The first is unequal access: ' +
      'with rural internet penetration at less than half the urban rate, a payment system that ' +
      'requires connectivity cannot be more inclusive than the network beneath it, and the ' +
      'people least reached are those for whom inclusion would matter most. The second is ' +
      'security, where the growth in cyber incidents tracks the growth of the system and the ' +
      'weak point is the user rather than the technology.',
  },
  {
    t: 'p', text:
      'A closing observation seems warranted. India built this system as public infrastructure ' +
      'and chose to make it free at the point of use, financing the cost from the exchequer ' +
      'rather than from merchants. Almost every comparable system abroad made the opposite ' +
      'choice. The adoption documented in this report is, in significant part, the consequence ' +
      'of that decision — which suggests that the most important thing about UPI may not be its ' +
      'technology at all, but the view of payment as a public good that the technology was built ' +
      'to serve.',
  },
  { t: 'pb' },

  ...GLOSSARY,

  // ====================================================== BIBLIOGRAPHY ======
  { t: 'h1', text: 'Bibliography' },
  {
    t: 'p', italicAll: true, text:
      'Entries are numbered as cited in the text. All sources were consulted online and were ' +
      'available at the addresses shown at the time of writing.',
  },
  {
    t: 'refs', items: [
      'National Payments Corporation of India. UPI Product Statistics. https://www.npci.org.in/what-we-do/upi/product-statistics',
      'Press Information Bureau, Government of India. "UPI completes 10 glorious years, Emerges as World’s Largest Real-Time Payments Platform, Anchoring India’s Digital Economy." https://www.pib.gov.in/PressReleasePage.aspx?PRID=2257087',
      'Press Information Bureau, Government of India. "UPI Recognized as World’s Largest Real-Time Payment System by IMF; Accounts for 49% of Global Transactions." https://www.pib.gov.in/PressReleasePage.aspx?PRID=2200569',
      'Reserve Bank of India. Annual Report 2024-25, Chapter on Payment and Settlement Systems. https://www.rbi.org.in/Scripts/AnnualReportMainDisplay.aspx',
      'Reserve Bank of India. Payment Systems Report, Half Year ended December 2024. https://www.rbi.org.in/scripts/PublicationsView.aspx?Id=23127',
      'Reserve Bank of India. Press releases on the RBI Digital Payments Index (RBI-DPI). https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=60913',
      'Press Information Bureau, Government of India. "RBI’s Financial Inclusion Index rises to 67 in 2025." https://www.pib.gov.in/PressNoteDetails.aspx?NoteId=154980&ModuleId=3',
      'Ministry of Statistics and Programme Implementation. Press Note on Provisional Estimates of Annual GDP for 2024-25. https://www.mospi.gov.in/sites/default/files/press_release/NAD_PR_30may2025.pdf',
      'Ministry of Statistics and Programme Implementation. Press Note on Provisional Estimates of Annual GDP for 2025-26. https://www.pib.gov.in/PressReleasePage.aspx?PRID=2269286',
      'Press Information Bureau, Government of India. "Total digital payment transactions volume increases from 2,071 crore in FY 2017-18 to 13,462 crore in FY 2022-23 at a CAGR of 45 per cent." https://www.pib.gov.in/PressReleasePage.aspx?PRID=1988370',
      'Press Information Bureau, Government of India. "Total digital payment transactions grow by 46% from 8,839 crore in FY 2021-22 to 18,737 crore in FY 2023-24." https://www.pib.gov.in/PressReleasePage.aspx?PRID=2110407',
      'Press Information Bureau, Government of India. "Indian digital payment landscape witnesses over 65,000 crore digital transactions amounting to more than ₹12,000 lakh crore in last 6 Financial years." https://www.pib.gov.in/PressReleasePage.aspx?PRID=2149372',
      'Press Information Bureau, Government of India. "UPI transactions grew from ₹1 lakh crore in FY 2017-18 to ₹139 lakh crore in FY 2022-23 in value, at a CAGR of 168%." https://www.pib.gov.in/PressReleasePage.aspx?PRID=1987764',
      'Press Information Bureau, Government of India. "Coordinated Efforts of Government, RBI and NPCI Accelerate Growth in Digital Payments." https://www.pib.gov.in/PressReleasePage.aspx?PRID=2240723',
      'Department of Financial Services, Ministry of Finance. "Socio-Economic Impact Analysis of Incentive Scheme for Promotion of RuPay Debit Card and low-value BHIM-UPI Transactions (P2M)", released at Chintan Shivir 2026. https://www.pib.gov.in/PressReleasePage.aspx?PRID=2228651',
      'Press Information Bureau, Government of India. "Nearly 55.49 Crore Users Onboarded on UPI as in June 2026." https://www.pib.gov.in/PressReleasePage.aspx?PRID=2286608',
      'Press Information Bureau, Government of India. "UPI is now live in over eight countries." https://www.pib.gov.in/PressReleasePage.aspx?PRID=2224505',
      'International Monetary Fund. Growing Retail Digital Payments: The Value of Interoperability. FinTech Note 2025/004, June 2025. https://www.imf.org/en/publications/fintech-notes/issues/2025/06/25/growing-retail-digital-payments-the-value-of-interoperability-567814',
      'International Monetary Fund. "India’s Frictionless Payments." Finance & Development, September 2025. https://www.imf.org/en/publications/fandd/issues/2025/09/indias-frictionless-payments-maria-peria',
      'Bank for International Settlements. Retail fast payment systems as a catalyst for digital finance. BIS Working Paper No. 1228, November 2024. https://www.bis.org/publ/work1228.htm',
      'World Bank. The Global Findex Database 2025: Connectivity and Financial Inclusion in the Digital Economy. https://www.worldbank.org/en/publication/globalfindex',
      'Telecom Regulatory Authority of India. Telecom Subscription Data and Indian Telecom Services Performance Indicator Reports, 2025. https://www.trai.gov.in/release-publication/reports/telecom-subscriptions-reports',
      'Reserve Bank of India. Macroeconomic Impact of Demonetisation — A Preliminary Assessment, 2017. https://rbidocs.rbi.org.in/rdocs/Publications/PDFs/MID10031760E85BDAFEFD497193995BB1B6DBE602.PDF',
      'Press Information Bureau, Government of India. "Status of the Return of SBNs — Reserve Bank of India Annual Report 2016-17." https://www.pib.gov.in/newsite/PrintRelease.aspx?relid=170379',
      'Dev, H., Gupta, R., Dharmavaram, S. and Kumar, D. "From Cash to Cashless: UPI’s Impact on Spending Behavior Among Indian Users and Prototyping Financially Responsible Interfaces." ACM CHI 2024 Late Breaking Work; arXiv:2401.09937. https://arxiv.org/abs/2401.09937',
      'Reserve Bank of India. Payments Vision 2025. https://rbidocs.rbi.org.in/rdocs/PublicationReport/Pdfs/PAYMENTSVISION2025844D11300C884DC4ACB8E56B7348F4D4.PDF',
      'Reserve Bank of India. National Strategy for Financial Inclusion 2025-30. https://www.rbi.org.in/commonman/Upload/English/Content/PDFs/English12052026.pdf',
      'Press Information Bureau, Government of India. "Curbing Cyber Frauds in Digital India." https://www.pib.gov.in/PressNoteDetails.aspx?NoteId=155384&ModuleId=3',
      'Badrawani, W. et al. "The Role of Digital Payments in Driving Regional Economic Growth: A Panel Data Analysis with Structural Break." arXiv:2508.02119, August 2025. https://arxiv.org/abs/2508.02119',
      'Ministry of Finance, Government of India. Economic Survey 2025-26, Statistical Appendix. https://www.indiabudget.gov.in/economicsurvey/',
    ],
  },
];

module.exports = { CH4_5 };
