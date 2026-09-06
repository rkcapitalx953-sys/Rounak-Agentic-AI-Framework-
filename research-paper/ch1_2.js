/** Chapter 1 (Introduction) and Chapter 2 (Design of Study). */

const CH1_2 = [
  // ==================================================== 1. INTRODUCTION =====
  { t: 'h1', text: '1.  Introduction' },

  { t: 'h2', text: '1.1  The meaning of digital payments' },
  {
    t: 'p', text:
      'A payment is the transfer of purchasing power from one person to another in settlement ' +
      'of an obligation. For most of economic history that transfer required a physical object ' +
      'to change hands — a coin, a note, a cheque. A digital payment removes the object. The ' +
      'money moves as an instruction: a message passes between two accounts held with regulated ' +
      'institutions, the payer’s balance is debited, the payee’s is credited, and no currency ' +
      'is physically handled at any point.',
  },
  {
    t: 'p', text:
      'The distinction matters more than it first appears. Cash settles instantly but travels ' +
      'slowly: it must be withdrawn, carried, counted and re-deposited. A digital instruction ' +
      'travels at the speed of a telecommunications network and settles in seconds. What ' +
      'changes, therefore, is not only the convenience of paying but the sheer number of times ' +
      'a given stock of money can be used within a given period. That last observation is the ' +
      'thread this project follows from beginning to end.',
  },

  { t: 'h2', text: '1.2  The Unified Payments Interface' },
  {
    t: 'p', text:
      'The Unified Payments Interface, universally known as UPI, was launched in India in 2016. ' +
      'It is best described not as an application but as a standard — a common set of rules that ' +
      'allows any bank account to be addressed by any application through a single virtual ' +
      'payment address. A user of one provider can pay a merchant who banks elsewhere and who ' +
      'uses an entirely different application, instantly, at no cost to either party, at any ' +
      'hour of any day.',
  },
  {
    t: 'p', text:
      'Three features explain why UPI succeeded where earlier systems did not. First, it is ' +
      'interoperable: the payer and payee need not share a provider. Second, it is available ' +
      'without interruption, in contrast to the batch-processed systems it displaced. Third, ' +
      'for the ordinary person-to-person or small merchant transaction it is free — a design ' +
      'choice the Government has reinforced by keeping the Merchant Discount Rate at zero for ' +
      'small-merchant UPI transactions up to ₹2,000 and paying an incentive of 0.15 per cent of ' +
      'transaction value in their place [14].',
  },
  {
    t: 'p', text:
      'The International Monetary Fund, in a June 2025 study of retail payment interoperability, ' +
      'identified precisely this architecture as the source of UPI’s adoption. Interoperability, ' +
      'the Fund argued, increases the user’s freedom to choose an application; many users join ' +
      'through a trusted brand and later switch to a better one, and the standing threat of that ' +
      'switch forces incumbents to improve. The result was a market that expanded to more than ' +
      '200 applications rather than consolidating around the first mover [18].',
  },

  { t: 'h2', text: '1.3  The growth of digital transactions in India' },
  {
    t: 'p', text:
      'The scale of what followed is difficult to convey without figures. In FY 2016-17, its ' +
      'first full year, UPI processed about 2 crore transactions worth ₹0.07 lakh crore. In ' +
      'FY 2025-26 it processed over 24,162 crore transactions worth approximately ₹314 lakh ' +
      'crore — a roughly twelve-thousand-fold increase in volume and a more than four-thousand-' +
      'fold increase in value over ten years [2].',
  },
  {
    t: 'p', text:
      'Nor is this the growth of a niche instrument. UPI accounted for 81 per cent of all retail ' +
      'digital payment transactions in India in FY 2024-25 [14], and the IMF records it as the ' +
      'world’s largest retail fast payment system by transaction volume, handling close to ' +
      '49 per cent of global real-time payment transactions [3], [18]. As of June 2026, 55.49 ' +
      'crore users had been onboarded [16], and by FY 2025-26 the number of banks live on the ' +
      'platform had risen from 44 to 703 [2].',
  },

  { t: 'h2', text: '1.4  The role of the National Payments Corporation of India' },
  {
    t: 'p', text:
      'None of this was left to the market to organise. UPI was built and is operated by the ' +
      'National Payments Corporation of India (NPCI), an umbrella organisation for retail ' +
      'payments established under the guidance of the Reserve Bank of India and the Indian ' +
      'Banks’ Association. NPCI is constituted as a not-for-profit company, and that legal form ' +
      'is central to the economics of the system: because the operator is not obliged to ' +
      'maximise a return on the switch itself, transactions can be routed at or near cost.',
  },
  {
    t: 'p', text:
      'NPCI writes the technical standard, operates the central switch through which every ' +
      'transaction is routed, settles positions between member banks, sets and revises ' +
      'transaction limits, and runs the fraud-monitoring systems that screen traffic in real ' +
      'time. Through its subsidiary NPCI International Payments Limited it has also carried the ' +
      'standard abroad; UPI is now live in eleven foreign jurisdictions for acceptance or ' +
      'cross-border remittances, among them the United Arab Emirates, Singapore, Bhutan, Nepal, ' +
      'Sri Lanka, France, Mauritius and Qatar [17].',
  },
  {
    t: 'p', text:
      'The public character of this infrastructure has attracted international attention in its ' +
      'own right. The Bank for International Settlements classes fast payment systems of this ' +
      'kind as digital public infrastructure — open, interoperable systems that support ' +
      'society-wide public and private services — and notes that India’s deployment of Aadhaar ' +
      'and UPI has delivered substantial advances in both financial inclusion and payments ' +
      'efficiency [20].',
  },

  { t: 'h2', text: '1.5  From a cash economy to a digital economy' },
  {
    t: 'p', text:
      'India entered this decade with one of the world’s higher ratios of currency in ' +
      'circulation to GDP, and the Reserve Bank has treated the reduction of that ratio as an ' +
      'explicit objective of policy, naming it in Payments Vision 2025 [26]. Cash is not costless: ' +
      'it must be printed, transported, secured, sorted and destroyed, and every rupee sitting ' +
      'in a pocket or a cash box is a rupee performing no work.',
  },
  {
    t: 'p', text:
      'The shift away from cash has therefore been pursued deliberately rather than left to ' +
      'convenience alone. Independent survey evidence commissioned by the Department of ' +
      'Financial Services and released in February 2026 found that 90 per cent of users reported ' +
      'greater confidence in digital payments after using UPI and RuPay, accompanied by a marked ' +
      'decline in cash usage and ATM withdrawals [15]. This is the behavioural counterpart of the ' +
      'aggregate statistics.',
  },

  { t: 'h2', text: '1.6  The meaning of the velocity of money' },
  {
    t: 'p', text:
      'The velocity of money is the average number of times one unit of currency is used to ' +
      'purchase goods and services within a given period. It is not a physical property of money ' +
      'but a behavioural one: it describes how quickly people part with the money they hold.',
  },
  {
    t: 'p', text:
      'The idea is formalised in Irving Fisher’s equation of exchange, conventionally written as:',
  },
  { t: 'equation', text: 'M × V  =  P × T' },
  {
    t: 'p', text:
      'where M is the stock of money in circulation, V is the transactions velocity of that ' +
      'money, P is the average price level and T is the volume of transactions. In its more ' +
      'commonly used income form the identity becomes V = (P × Y) ÷ M, where P × Y is nominal ' +
      'national income. Read from left to right, the identity says something simple and ' +
      'important: for a given stock of money, a rise in velocity supports a larger volume of ' +
      'transactions.',
  },
  {
    t: 'p', text:
      'It is essential to be precise about which velocity is meant, and this project is careful ' +
      'to distinguish the two. Income velocity relates national output to the money stock, and ' +
      'moves slowly. Transactions velocity relates the total value of all payments — including ' +
      'the many transfers that are not themselves purchases of newly produced output — to the ' +
      'money stock, and can move a great deal faster. Payment systems act on transactions ' +
      'velocity directly and on income velocity only indirectly. Section 3.4 returns to this ' +
      'distinction at length, because conflating the two is the commonest error in popular ' +
      'writing on the subject.',
  },

  { t: 'h2', text: '1.7  Digital payments and economic activity' },
  {
    t: 'p', text:
      'How might a payment system affect real economic activity? Four channels are usually ' +
      'proposed, and each recurs in the literature reviewed in Chapter 3.',
  },
  {
    t: 'numbers', items: [
      'Transaction costs fall. When paying costs nothing in fees and almost nothing in time, ' +
      'exchanges that were previously not worth the friction begin to take place. The margin ' +
      'here is very small payments — the ones cash handled badly and cards never reached.',
      'Idle balances shrink. A household that can pay instantly from its account has less ' +
      'reason to hold precautionary cash. Money held for transactions purposes falls relative ' +
      'to spending, which is the same statement as a rise in velocity.',
      'The informal economy becomes visible. A digital payment leaves a record. Records ' +
      'accumulate into a credit history, and a credit history converts an unbanked trader into ' +
      'a borrower — a channel the Reserve Bank has pursued explicitly through the Unified ' +
      'Lending Interface [20].',
      'Working capital turns over faster. A merchant paid instantly rather than at the end of ' +
      'the day can restock sooner. The same rupee of working capital finances more sales in a ' +
      'year.',
    ],
  },
  {
    t: 'p', text:
      'These are plausible mechanisms rather than established magnitudes, and this project is ' +
      'careful throughout to treat them as such.',
  },

  { t: 'h2', text: '1.8  Financial inclusion and the formalisation of the economy' },
  {
    t: 'p', text:
      'Financial inclusion means access to useful, affordable financial services. India’s ' +
      'approach has rested on a sequence in which each layer depends on the one before it: ' +
      'universal bank accounts opened under the Pradhan Mantri Jan Dhan Yojana, a digital ' +
      'identity to authenticate the account holder, and a payment rail on which those accounts ' +
      'could actually transact. By 4 August 2025 the Jan Dhan programme had reached over 55.98 ' +
      'crore beneficiaries, more than 55 per cent of them women [7].',
  },
  {
    t: 'p', text:
      'The measurable result appears in the Reserve Bank’s Financial Inclusion Index, which rose ' +
      'from 64.2 in March 2024 to 67.0 in March 2025, with growth recorded across all three ' +
      'sub-indices of access, usage and quality [7]. Formalisation follows from usage rather ' +
      'than from access alone: an account that is merely opened changes nothing, while an ' +
      'account that is used generates the transaction record on which credit and insurance can ' +
      'later be built.',
  },

  { t: 'h2', text: '1.9  Relevance in the post-demonetisation and post-pandemic economy' },
  {
    t: 'p', text:
      'Two shocks bracket UPI’s first decade. In November 2016, banknotes of ₹500 and ₹1,000 ' +
      'denominations — ₹15.4 trillion, or 86.9 per cent of the value of notes then in ' +
      'circulation — ceased to be legal tender [23]. Monthly digital transactions rose 56 per ' +
      'cent between October 2016 and May 2017 [24]. UPI, launched only months earlier, was ' +
      'available at exactly the moment a nation was compelled to look for an alternative to cash.',
  },
  {
    t: 'p', text:
      'The second shock was the COVID-19 pandemic, which made contactless payment a matter of ' +
      'public health rather than convenience and pushed a generation of small merchants into ' +
      'accepting a QR code. The distinction between the two episodes is instructive and is ' +
      'examined in Data Sets 5 and 6: the first was a sharp compulsion followed by partial ' +
      'reversion, the second a slower change that did not reverse.',
  },

  { t: 'h2', text: '1.10  Statement of the problem' },
  {
    t: 'p', text:
      'That UPI has grown is not in dispute; the figures are published monthly and are not ' +
      'seriously contested. The question this project asks is narrower and harder. Has that ' +
      'growth changed the speed at which money circulates in the Indian economy, and can any ' +
      'effect on real economic activity be identified from publicly available data?',
  },
  {
    t: 'p', text:
      'The distinction between the two questions is the substance of this report. A payment ' +
      'system can move an enormous quantity of money without altering national income at all, ' +
      'if what it does is relocate transactions that would have occurred in cash. Establishing ' +
      'whether something more than relocation has occurred requires evidence of a different ' +
      'kind — evidence about transaction sizes, about who is transacting, and about what ' +
      'merchants report. That evidence is assembled in Chapter 4.',
  },
  { t: 'pb' },

  // ================================================= 2. DESIGN OF STUDY =====
  { t: 'h1', text: '2.  Design of Study' },

  { t: 'h2', text: '2.1  Objectives of the study' },
  { t: 'p', text: 'This study is directed at five objectives.' },
  {
    t: 'numbers', items: [
      'To understand the concept, architecture and growth of UPI-based digital payments in India ' +
      'between FY 2016-17 and FY 2025-26.',
      'To examine the relationship between UPI-based payments and the velocity of money, ' +
      'distinguishing carefully between transactions velocity and income velocity.',
      'To analyse the impact of digital payments on economic activity, including consumption ' +
      'patterns, small-merchant sales and the formalisation of transactions.',
      'To examine the role of UPI in promoting financial inclusion and in bringing informal ' +
      'economic activity into the recorded economy.',
      'To study the challenges and limitations of digital payment systems in India, including ' +
      'cyber fraud, infrastructure dependence and unequal regional adoption.',
    ],
  },

  { t: 'h2', text: '2.2  Research questions and hypotheses' },
  {
    t: 'p', text:
      'The objectives above are translated into three testable propositions. They are stated ' +
      'here so that the reader may judge, at the end of Chapter 4, whether the evidence ' +
      'supports them.',
  },
  {
    t: 'table',
    widths: [1200, 4400, 3426],
    head: ['', 'Hypothesis', 'Evidence used'],
    rows: [
      ['H1', 'The value of payments settled per rupee of national output has risen substantially since FY 2016-17 — that is, transactions velocity has increased.', 'Data Sets 1 and 4'],
      ['H2', 'UPI’s growth reflects genuinely new, small-value transactions rather than only the migration of existing large payments from cash.', 'Data Sets 2 and 3'],
      ['H3', 'The gains in inclusion and usage are not distributed evenly between rural and urban India.', 'Data Sets 7 and 8'],
    ],
  },

  { t: 'h2', text: '2.3  Data collection methodology' },
  {
    t: 'p', text:
      'The study is based entirely on secondary data. No primary survey was conducted, for the ' +
      'straightforward reason that the phenomenon under study is national in scale and is ' +
      'already measured, comprehensively and at high frequency, by the institutions that operate ' +
      'and regulate it. A school-level survey could not improve on that measurement, and any ' +
      'sample small enough to be feasible would be too small to be representative.',
  },
  { t: 'p', text: 'Sources were selected in the following order of preference:' },
  {
    t: 'bullets', items: [
      'Operator and regulator data. Transaction statistics published by the National Payments ' +
      'Corporation of India, and the Annual Report, Payment Systems Report, Digital Payments ' +
      'Index and Financial Inclusion Index of the Reserve Bank of India.',
      'Government releases. Press Information Bureau releases and factsheets, replies placed ' +
      'before Parliament, and the Economic Survey.',
      'Official statistics. National income aggregates from the Ministry of Statistics and ' +
      'Programme Implementation; telecom and internet subscription data from the Telecom ' +
      'Regulatory Authority of India.',
      'International institutional research. Publications of the International Monetary Fund, ' +
      'the Bank for International Settlements and the World Bank, used chiefly for comparison ' +
      'and for methodological guidance.',
      'Academic literature. Peer-reviewed and pre-print research, used where it supplies ' +
      'micro-level evidence that aggregate statistics cannot.',
    ],
  },
  {
    t: 'p', text:
      'Commercial and news websites were deliberately avoided as primary sources of numbers. ' +
      'Where a figure is quoted in this report, it is quoted from the institution that produced ' +
      'it, and the reference number in square brackets points to the entry in the Bibliography ' +
      'at which that institution’s release may be found.',
  },
  {
    t: 'p', text:
      'Two derived measures are computed by the author from published data rather than taken ' +
      'from any source. The first is the average value of a UPI transaction, obtained by ' +
      'dividing annual transaction value by annual transaction volume. The second is UPI ' +
      'turnover as a multiple of nominal GDP. Both derivations are stated in full beside the ' +
      'relevant tables so that they can be checked.',
  },

  { t: 'h2', text: '2.4  Scope of the study' },
  {
    t: 'p', text:
      'The study is confined to the macroeconomic implications of digital payments in India. ' +
      'Within that field its focus is narrower still: it is a study of UPI, and other ' +
      'instruments — cards, wallets, IMPS, NEFT and RTGS — enter only where they are needed as ' +
      'a comparison. The period examined runs from FY 2016-17, the first full year of UPI’s ' +
      'operation, to FY 2025-26, the most recent year for which complete annual data were ' +
      'available at the time of writing. The conceptual focus is on the velocity of money, ' +
      'consumption and the formalisation of financial activity.',
  },
  {
    t: 'p', text:
      'Certain adjacent questions are deliberately excluded. The study does not examine the ' +
      'profitability of payment service providers, the design of central bank digital currency, ' +
      'or the competition-policy question of market concentration among UPI applications. Each ' +
      'is a substantial subject in its own right.',
  },

  { t: 'h2', text: '2.5  Limitations of the study' },
  {
    t: 'p', text:
      'The following limitations are stated plainly, because a study that conceals them invites ' +
      'more confidence than its evidence can bear.',
  },
  {
    t: 'numbers', items: [
      'The study rests on secondary data. Its conclusions can be no more reliable than the ' +
      'published statistics on which they depend.',
      'Correlation is not causation. UPI expanded during a decade in which smartphone ownership, ' +
      'internet access, bank account ownership and nominal income all rose together. This ' +
      'project can describe association; it cannot isolate UPI’s independent causal contribution, ' +
      'and it does not claim to.',
      'Velocity cannot be measured directly. It is inferred from the ratio of payment or income ' +
      'aggregates to a money stock, and different choices of numerator and denominator yield ' +
      'materially different numbers. The turnover ratio used in Data Set 4 is a proxy, and its ' +
      'limitations are set out where it is introduced.',
      'Payment value is not output. A large share of UPI value consists of person-to-person ' +
      'transfers, which are not purchases of newly produced goods and services and therefore do ' +
      'not enter GDP. Any ratio of payment value to GDP must be read with this firmly in mind.',
      'A revision of the national accounts occurred within the study period. Nominal GDP is now ' +
      'published on a 2022-23 base, having previously used a 2011-12 base; the two series are ' +
      'not perfectly continuous. The break is identified where it affects a calculation.',
      'The ecosystem changes rapidly. Transaction limits, fee rules and product features were ' +
      'revised repeatedly during the study period, and figures cited here are current only to ' +
      'their stated date.',
      'Regional variation is understated. National aggregates conceal wide differences between ' +
      'states and between districts, and district-level UPI data are not published.',
    ],
  },
  { t: 'pb' },
];

module.exports = { CH1_2 };
