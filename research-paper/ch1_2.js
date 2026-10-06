/** Chapter 1 (Introduction) and Chapter 2 (Design of Study). */

const CH1_2 = [
  // ==================================================== 1. INTRODUCTION =====
  { t: 'h1', text: '1.  Introduction' },

  { t: 'h2', text: '1.1  The meaning of digital payments' },
  {
    t: 'p', text:
      'A payment means handing over money to settle what you owe. For most of history this ' +
      'needed a physical object to change hands: a coin, a note or a cheque. A digital payment ' +
      'removes the object. The money moves as a message instead. That message passes between two ' +
      'bank accounts, the payer’s balance falls, the payee’s balance rises, and no cash is ' +
      'touched at any stage.',
  },
  {
    t: 'p', text:
      'This difference matters more than it looks. Cash settles at once, but it moves slowly. It ' +
      'has to be withdrawn, carried, counted and deposited again. A digital instruction travels ' +
      'at the speed of a phone network and settles in seconds. So what changes is not just how ' +
      'easy it is to pay. What also changes is how many times the same money can be used in a ' +
      'year. That idea is the thread this project follows from start to finish.',
  },

  { t: 'h2', text: '1.2  The Unified Payments Interface' },
  {
    t: 'p', text:
      'The Unified Payments Interface, known as UPI, was launched in India in 2016. It is not an ' +
      'app. It is a standard, which means a common set of rules. Those rules let any bank account ' +
      'be paid from any app, using a single address instead of an account number. A user of one ' +
      'app can pay a shopkeeper who banks elsewhere and uses a completely different app. The ' +
      'payment is instant, free for both sides, and works at any hour.',
  },
  {
    t: 'p', text:
      'Three features explain why UPI worked where earlier systems did not. First, it is ' +
      'interoperable, which means the payer and the payee do not have to use the same provider. ' +
      'Second, it never shuts down, unlike the older systems it replaced. Third, it is free for ' +
      'ordinary payments. The Government has supported this by keeping the Merchant Discount Rate ' +
      'at zero for small-merchant UPI payments up to ₹2,000. In place of that fee it pays the ' +
      'banks an incentive of 0.15 per cent of the transaction value [14].',
  },
  {
    t: 'p', text:
      'The International Monetary Fund studied this design in June 2025 and said it was the main ' +
      'reason UPI spread so fast. Interoperability gives users the freedom to choose their app. ' +
      'Many people join through a brand they already trust, then move to a better app later. ' +
      'Because users can leave at any time, every provider has to keep improving. The result was ' +
      'a market with more than 200 apps, rather than one company taking everything [18].',
  },

  { t: 'h2', text: '1.3  The growth of digital transactions in India' },
  {
    t: 'p', text:
      'The scale of the change is hard to describe without figures. In FY 2016-17, its first full ' +
      'year, UPI handled about 2 crore transactions worth ₹0.07 lakh crore. In FY 2025-26 it ' +
      'handled over 24,162 crore transactions worth about ₹314 lakh crore. That is roughly a ' +
      'twelve-thousand-fold rise in the number of payments and a more than four-thousand-fold ' +
      'rise in their value, in ten years [2].',
  },
  {
    t: 'p', text:
      'This is not a small or specialist service. UPI handled 81 per cent of all retail digital ' +
      'payments in India in FY 2024-25 [14]. The IMF calls it the largest retail fast payment ' +
      'system in the world by number of transactions. It carries close to 49 per cent of all ' +
      'real-time payments made anywhere on earth [3], [18]. By June 2026, 55.49 crore users had ' +
      'joined [16]. The number of banks on the platform rose from 44 to 703 by FY 2025-26 [2].',
  },

  { t: 'h2', text: '1.4  The role of the National Payments Corporation of India' },
  {
    t: 'p', text:
      'None of this was left to the market to arrange. UPI was built and is run by the National ' +
      'Payments Corporation of India (NPCI). NPCI is the umbrella body for retail payments, set ' +
      'up under the guidance of the Reserve Bank of India and the Indian Banks’ Association. It ' +
      'is registered as a not-for-profit company, and that matters for the economics. Because ' +
      'NPCI does not have to earn a profit on the system itself, payments can be carried at or ' +
      'near cost.',
  },
  {
    t: 'p', text:
      'NPCI does five main jobs. It writes the technical rules. It runs the central switch that ' +
      'every payment passes through. It settles the amounts owed between member banks. It sets ' +
      'and revises transaction limits. And it runs the systems that watch for fraud as payments ' +
      'happen. Through its subsidiary NPCI International Payments Limited, it has also taken UPI ' +
      'abroad. UPI now works in eleven foreign countries for payments or money transfers, ' +
      'including the United Arab Emirates, Singapore, Bhutan, Nepal, Sri Lanka, France, Mauritius ' +
      'and Qatar [17].',
  },
  {
    t: 'p', text:
      'The fact that this is public infrastructure has drawn attention abroad. The Bank for ' +
      'International Settlements calls systems like UPI digital public infrastructure. By this it ' +
      'means open systems that anyone can connect to and that support services used by the whole ' +
      'of society. It notes that Aadhaar and UPI together have made large gains in financial ' +
      'inclusion and in the efficiency of payments [20].',
  },

  { t: 'h2', text: '1.5  From a cash economy to a digital economy' },
  {
    t: 'p', text:
      'India began this decade holding more cash, relative to the size of its economy, than most ' +
      'countries. The Reserve Bank has treated the reduction of that ratio as a goal of policy ' +
      'and named it in Payments Vision 2025 [26]. Cash is not free. It has to be printed, moved, ' +
      'guarded, sorted and destroyed. More importantly, every rupee sitting in a pocket or a cash ' +
      'box is a rupee doing no work.',
  },
  {
    t: 'p', text:
      'The move away from cash has therefore been pushed on purpose, not left to convenience. A ' +
      'survey commissioned by the Department of Financial Services, released in February 2026, ' +
      'found that 90 per cent of users felt more confident about digital payments after using UPI ' +
      'and RuPay. The same survey recorded a clear fall in their use of cash and in ATM ' +
      'withdrawals [15]. This is what the national figures look like at the level of one household.',
  },

  { t: 'h2', text: '1.6  The meaning of the velocity of money' },
  {
    t: 'p', text:
      'The velocity of money is the average number of times one rupee is used to buy goods and ' +
      'services in a given period. It is not a physical quality of money. It describes how ' +
      'quickly people spend the money they hold.',
  },
  {
    t: 'p', text:
      'Irving Fisher set this out in his equation of exchange, usually written as:',
  },
  { t: 'equation', text: 'M × V  =  P × T' },
  {
    t: 'p', text:
      'Here M is the stock of money in circulation, V is the velocity of that money, P is the ' +
      'average price level and T is the number of transactions. The equation says something ' +
      'simple. If the stock of money stays the same and the number of transactions rises, then ' +
      'velocity must have risen. In its more common income form the equation becomes ' +
      'V = (P × Y) ÷ M, where P × Y is national income at current prices.',
  },
  {
    t: 'p', text:
      'It is important to say which velocity is meant, and this project is careful about that. ' +
      'Income velocity compares national output with the money stock. It moves slowly. ' +
      'Transactions velocity compares the value of all payments with the money stock, and it can ' +
      'move much faster. The difference is that transactions velocity counts every payment, ' +
      'including transfers that are not purchases of anything newly produced. Payment systems ' +
      'affect transactions velocity directly and income velocity only indirectly. Section 3.4 ' +
      'explains this at length, because mixing up the two is the most common mistake made on ' +
      'this subject.',
  },

  { t: 'h2', text: '1.7  Digital payments and economic activity' },
  {
    t: 'p', text:
      'How could a payment system change real economic activity? Four routes are usually ' +
      'suggested, and each one appears again in the research reviewed in Chapter 3.',
  },
  {
    t: 'numbers', items: [
      'The cost of paying falls. When a payment costs nothing in fees and almost nothing in time, ' +
      'exchanges that were not worth the trouble before start to happen. This matters most for ' +
      'very small payments, which cash handled badly and cards never reached at all.',
      'People hold less idle money. A household that can pay instantly from its account does not ' +
      'need to keep much cash in hand. Money held for spending falls compared with the amount ' +
      'actually spent, and that is the same thing as a rise in velocity.',
      'The informal economy becomes visible. A digital payment leaves a record. Records build up ' +
      'into a credit history, and a credit history can turn a trader with no bank loan into a ' +
      'borrower. The Reserve Bank has pursued this directly through the Unified Lending ' +
      'Interface [20].',
      'Working capital is reused faster. A shopkeeper paid at once, rather than at the end of the ' +
      'day, can buy new stock sooner. The same rupee of working capital then pays for more sales ' +
      'in a year.',
    ],
  },
  {
    t: 'p', text:
      'These are reasonable explanations, not measured amounts, and this project treats them ' +
      'that way throughout.',
  },

  { t: 'h2', text: '1.8  Financial inclusion and the formalisation of the economy' },
  {
    t: 'p', text:
      'Financial inclusion means being able to use financial services that are useful and ' +
      'affordable. India built this in layers, and each layer needed the one before it. First ' +
      'came bank accounts for everyone under the Pradhan Mantri Jan Dhan Yojana. Then came a ' +
      'digital identity to prove who the account holder was. Last came a payment system those ' +
      'accounts could actually use. By 4 August 2025 the Jan Dhan scheme had reached over 55.98 ' +
      'crore people, and more than 55 per cent of those accounts were held by women [7].',
  },
  {
    t: 'p', text:
      'The result can be measured. The Reserve Bank’s Financial Inclusion Index rose from 64.2 in ' +
      'March 2024 to 67.0 in March 2025, and all three of its parts improved: access, usage and ' +
      'quality [7]. Formalisation comes from usage, not from access alone. An account that is ' +
      'only opened changes nothing. An account that is used creates the record of transactions on ' +
      'which credit and insurance can later be built.',
  },

  { t: 'h2', text: '1.9  Relevance in the post-demonetisation and post-pandemic economy' },
  {
    t: 'p', text:
      'Two shocks mark UPI’s first ten years. In November 2016, notes of ₹500 and ₹1,000 stopped ' +
      'being legal tender. They were worth ₹15.4 trillion, which was 86.9 per cent of the value ' +
      'of all notes then in circulation [23]. Monthly digital transactions rose 56 per cent ' +
      'between October 2016 and May 2017 [24]. UPI had launched only months earlier, so it was ' +
      'available at the exact moment the country was forced to look for something other than cash.',
  },
  {
    t: 'p', text:
      'The second shock was COVID-19. It turned contactless payment into a health precaution ' +
      'rather than a convenience, and it pushed a whole generation of small shopkeepers into ' +
      'accepting a QR code. The two episodes worked differently, and Data Sets 5 and 6 examine ' +
      'that difference. The first was a sharp force that people partly reversed afterwards. The ' +
      'second was a slower change that did not reverse.',
  },

  { t: 'h2', text: '1.10  Statement of the problem' },
  {
    t: 'p', text:
      'Nobody disputes that UPI has grown. The figures are published every month and are not ' +
      'seriously questioned. The question this project asks is narrower and harder. Has that ' +
      'growth changed the speed at which money circulates in India? And can any effect on real ' +
      'economic activity be found in data that is publicly available?',
  },
  {
    t: 'p', text:
      'The gap between those two questions is what this report is really about. A payment system ' +
      'can move a huge amount of money without changing national income at all. That happens if ' +
      'all it does is shift payments that would have been made in cash anyway. To show that ' +
      'something more than shifting has happened, different evidence is needed: evidence about ' +
      'the size of transactions, about who is paying, and about what shopkeepers report. That ' +
      'evidence is collected in Chapter 4.',
  },
  { t: 'pb' },

  // ================================================= 2. DESIGN OF STUDY =====
  { t: 'h1', text: '2.  Design of Study' },

  { t: 'h2', text: '2.1  Objectives of the study' },
  { t: 'p', text: 'This study has five objectives.' },
  {
    t: 'numbers', items: [
      'To understand what UPI is, how it is built, and how it grew in India between FY 2016-17 ' +
      'and FY 2025-26.',
      'To examine the link between UPI payments and the velocity of money, keeping transactions ' +
      'velocity and income velocity clearly separate.',
      'To study the effect of digital payments on economic activity, including spending patterns, ' +
      'the sales of small shopkeepers, and the recording of transactions.',
      'To examine how far UPI has helped financial inclusion and brought informal economic ' +
      'activity into the recorded economy.',
      'To study the problems and limits of digital payment systems in India, including cyber ' +
      'fraud, dependence on infrastructure, and uneven adoption across regions.',
    ],
  },

  { t: 'h2', text: '2.2  Research questions and hypotheses' },
  {
    t: 'p', text:
      'These objectives are turned into three statements that can be tested. They are given here ' +
      'so that the reader can judge, at the end of Chapter 4, whether the evidence supports them.',
  },
  {
    t: 'table',
    widths: [1200, 4400, 3426],
    head: ['', 'Hypothesis', 'Evidence used'],
    rows: [
      ['H1', 'The value of payments settled for every rupee of national output has risen sharply since FY 2016-17. In other words, transactions velocity has increased.', 'Data Sets 1 and 4'],
      ['H2', 'UPI’s growth comes from genuinely new, small payments, and not only from large payments moving across from cash.', 'Data Sets 2 and 3'],
      ['H3', 'The gains in inclusion and usage are not shared evenly between rural and urban India.', 'Data Sets 7 and 8'],
    ],
  },

  { t: 'h2', text: '2.3  Data collection methodology' },
  {
    t: 'p', text:
      'This study uses secondary data only. No survey was carried out, for a simple reason. The ' +
      'subject is national in scale, and it is already measured in full, every month, by the ' +
      'bodies that run and regulate it. A survey done by a school student could not improve on ' +
      'those measurements. Any sample small enough to be practical would be far too small to ' +
      'represent the country.',
  },
  { t: 'p', text: 'Sources were chosen in this order of preference:' },
  {
    t: 'bullets', items: [
      'Operator and regulator data. Transaction statistics from the National Payments Corporation ' +
      'of India, and the Annual Report, Payment Systems Report, Digital Payments Index and ' +
      'Financial Inclusion Index of the Reserve Bank of India.',
      'Government releases. Press Information Bureau releases and factsheets, answers given in ' +
      'Parliament, and the Economic Survey.',
      'Official statistics. National income figures from the Ministry of Statistics and Programme ' +
      'Implementation, and telecom and internet data from the Telecom Regulatory Authority of ' +
      'India.',
      'International research. Publications of the International Monetary Fund, the Bank for ' +
      'International Settlements and the World Bank, used mainly for comparison and for guidance ' +
      'on method.',
      'Academic research. Peer-reviewed papers and pre-prints, used where they show things at the ' +
      'level of individual users that national figures cannot.',
    ],
  },
  {
    t: 'p', text:
      'Commercial and news websites were avoided as sources of figures. Every number quoted here ' +
      'comes from the body that produced it. The number in square brackets points to the entry in ' +
      'the Bibliography where that release can be found.',
  },
  {
    t: 'p', text:
      'Two measures in this report were worked out by me, rather than taken from a source. The ' +
      'first is the average value of a UPI transaction, found by dividing yearly value by yearly ' +
      'volume. The second is UPI turnover as a multiple of nominal GDP. Both methods are written ' +
      'out next to the relevant tables so that anyone can check them.',
  },

  { t: 'h2', text: '2.4  Scope of the study' },
  {
    t: 'p', text:
      'This study looks at the effect of digital payments on the Indian economy as a whole. ' +
      'Within that, it focuses on UPI. Other instruments such as cards, wallets, IMPS, NEFT and ' +
      'RTGS appear only where a comparison is needed. The period runs from FY 2016-17, UPI’s ' +
      'first full year, to FY 2025-26, the most recent year with complete data when this was ' +
      'written. The main ideas examined are the velocity of money, consumption, and the recording ' +
      'of financial activity.',
  },
  {
    t: 'p', text:
      'Some related questions are left out on purpose. This study does not look at the profits of ' +
      'payment companies, at the design of a central bank digital currency, or at the competition ' +
      'question of how few apps handle most UPI traffic. Each of those is a large subject in ' +
      'itself.',
  },

  { t: 'h2', text: '2.5  Limitations of the study' },
  {
    t: 'p', text:
      'The limits below are stated openly. A study that hides them asks for more trust than its ' +
      'evidence deserves.',
  },
  {
    t: 'numbers', items: [
      'The study uses secondary data. Its conclusions can only be as reliable as the published ' +
      'figures they rest on.',
      'Correlation is not causation. UPI grew during a decade in which smartphone ownership, ' +
      'internet access, bank accounts and incomes all rose together. This project can show that ' +
      'things moved together. It cannot separate out UPI’s own effect, and it does not claim to.',
      'Velocity cannot be measured directly. It has to be worked out from the ratio of payments ' +
      'or income to a stock of money, and different choices give very different answers. The ' +
      'turnover ratio used in Data Set 4 is an approximation, and its limits are explained where ' +
      'it appears.',
      'Payment value is not output. A large share of UPI value is money sent between individuals. ' +
      'Those transfers do not buy anything newly produced, so they are not part of GDP. Any ratio ' +
      'of payment value to GDP has to be read with that in mind.',
      'The national accounts were revised during the study period. Nominal GDP is now published ' +
      'on a 2022-23 base, having earlier used a 2011-12 base, so the two series do not join ' +
      'perfectly. This break is pointed out wherever it affects a calculation.',
      'The system changes quickly. Transaction limits, fee rules and features were revised several ' +
      'times during the period, so the figures here are correct only up to the dates given.',
      'Regional differences are hidden. National figures cover wide variation between states and ' +
      'districts, and UPI data is not published at district level.',
    ],
  },
  { t: 'pb' },
];

module.exports = { CH1_2 };
