/** Chapter 1 (Introduction) and Chapter 2 (Design of Study). */

const CH1_2 = [
  // ==================================================== 1. INTRODUCTION =====
  { t: 'h1', text: '1.  Introduction' },

  { t: 'h2', text: '1.1  The meaning of digital payments' },
  {
    t: 'p', text:
      'A payment means giving money to settle what you owe. For most of history this needed ' +
      'something physical to change hands. It could be a coin, a note or a cheque. A digital ' +
      'payment removes that object. The money moves as a message instead. The message goes ' +
      'between two bank accounts. The payer’s balance goes down and the payee’s balance goes up. ' +
      'No cash is touched at any point.',
  },
  {
    t: 'p', text:
      'This difference matters more than it looks. Cash settles at once, but it moves slowly. It ' +
      'has to be withdrawn, carried, counted and then deposited again. A digital message travels ' +
      'at the speed of a phone network and settles in seconds. So it is not just easier to pay. ' +
      'The same money can also be used many more times in a year. That idea runs through this ' +
      'whole project.',
  },

  { t: 'h2', text: '1.2  The Unified Payments Interface' },
  {
    t: 'p', text:
      'The Unified Payments Interface, or UPI, was launched in India in 2016. It is not an app. ' +
      'It is a standard, which means a common set of rules. These rules let any bank account be ' +
      'paid from any app. You use a short UPI address instead of an account number. So a user of ' +
      'one app can pay a shopkeeper who banks somewhere else and uses a different app. The ' +
      'payment is instant, free for both sides, and works at any time of day.',
  },
  {
    t: 'p', text:
      'Three features explain why UPI worked when earlier systems did not. First, it is ' +
      'interoperable. This means the payer and the shopkeeper do not need the same app. Second, ' +
      'it never shuts down, unlike the older systems it replaced. Third, it is free for normal ' +
      'payments. Small shopkeepers pay no Merchant Discount Rate on payments up to ₹2,000. ' +
      'Instead, the Government pays the banks 0.15 per cent of the value of the payment [14].',
  },
  {
    t: 'p', text:
      'The International Monetary Fund studied this design in June 2025. It said this was the ' +
      'main reason UPI spread so fast. Because any app works with any other, users are free to ' +
      'choose. Many people join through a brand they already trust and move to a better app ' +
      'later. Since users can leave at any time, every company has to keep improving. The result ' +
      'was a market with more than 200 apps, instead of one company taking everything [18].',
  },

  { t: 'h2', text: '1.3  The growth of digital transactions in India' },
  {
    t: 'p', text:
      'The scale of the change is hard to show without figures. In FY 2016-17, its first full ' +
      'year, UPI handled about 2 crore transactions worth ₹0.07 lakh crore. In FY 2025-26 it ' +
      'handled over 24,162 crore transactions worth about ₹314 lakh crore. That is about a ' +
      'twelve-thousand-fold rise in the number of payments in ten years. The value rose more ' +
      'than four thousand times [2].',
  },
  {
    t: 'p', text:
      'This is not a small service used by a few people. UPI handled 81 per cent of all retail ' +
      'digital payments in India in FY 2024-25 [14]. The IMF calls it the largest retail fast ' +
      'payment system in the world by number of payments. It carries nearly 49 per cent of all ' +
      'real-time payments made anywhere in the world [3], [18]. By June 2026, 55.49 crore users ' +
      'had joined [16]. The number of banks on the platform rose from 44 to 703 by FY 2025-26 [2].',
  },

  { t: 'h2', text: '1.4  The role of the National Payments Corporation of India' },
  {
    t: 'p', text:
      'None of this was left to the market. UPI was built and is run by the National Payments ' +
      'Corporation of India, or NPCI. NPCI is the umbrella body for retail payments in India. It ' +
      'was set up with the guidance of the Reserve Bank of India and the Indian Banks’ ' +
      'Association. It is registered as a not-for-profit company. This matters, because NPCI ' +
      'does not have to earn a profit on the system itself. That is why payments can be carried ' +
      'at close to cost.',
  },
  {
    t: 'p', text:
      'NPCI does five main jobs. It writes the technical rules. It runs the central switch that ' +
      'every payment passes through. It settles the money owed between member banks. It sets the ' +
      'limits on how much can be sent. It also runs the systems that watch for fraud while ' +
      'payments happen. Through its subsidiary, NPCI International Payments Limited, it has ' +
      'taken UPI abroad as well. UPI now works in eleven foreign countries. These include the ' +
      'United Arab Emirates, Singapore, Bhutan, Nepal, Sri Lanka, France, Mauritius and Qatar [17].',
  },
  {
    t: 'p', text:
      'The fact that this is public infrastructure has drawn attention abroad. The Bank for ' +
      'International Settlements calls systems like UPI digital public infrastructure. It means ' +
      'open systems that anyone can join and that serve the whole country. The BIS says that ' +
      'Aadhaar and UPI together have made big gains in financial inclusion and in the efficiency ' +
      'of payments [20].',
  },

  { t: 'h2', text: '1.5  From a cash economy to a digital economy' },
  {
    t: 'p', text:
      'India began this decade holding more cash than most countries, compared with the size of ' +
      'its economy. The Reserve Bank wants to bring that down. It named this as a goal in ' +
      'Payments Vision 2025 [26]. Cash is not free. It has to be printed, moved, guarded, sorted ' +
      'and destroyed. More importantly, a rupee sitting in a pocket or a cash box is doing no ' +
      'work at all.',
  },
  {
    t: 'p', text:
      'So the move away from cash was pushed on purpose. It was not left to convenience. A survey ' +
      'done for the Department of Financial Services, released in February 2026, found that 90 ' +
      'per cent of users felt more confident about digital payments after using UPI and RuPay. ' +
      'The same survey found a clear fall in how much cash they used and how often they visited ' +
      'ATMs [15]. This is what the national figures look like inside one household.',
  },

  { t: 'h2', text: '1.6  The meaning of the velocity of money' },
  {
    t: 'p', text:
      'The velocity of money is the average number of times one rupee is used to buy goods and ' +
      'services in a given period. It is not a physical quality of money. It simply shows how ' +
      'quickly people spend the money they hold.',
  },
  {
    t: 'p', text:
      'Irving Fisher explained this in his equation of exchange. It is usually written as:',
  },
  { t: 'equation', text: 'M × V  =  P × T' },
  {
    t: 'p', text:
      'Here M is the stock of money, V is velocity, P is the average price level and T is the ' +
      'number of transactions. The equation tells us something simple. If the stock of money ' +
      'stays the same and the number of transactions goes up, then velocity must have gone up ' +
      'too. There is also an income form of the equation, written as V = (P × Y) ÷ M. Here P × Y ' +
      'is national income at current prices.',
  },
  {
    t: 'p', text:
      'It is important to say which velocity we mean, and this project is careful about that. ' +
      'Income velocity compares national output with the money stock. It moves slowly. ' +
      'Transactions velocity compares the value of all payments with the money stock. It can ' +
      'move much faster. The reason is that transactions velocity counts every payment. That ' +
      'includes transfers which do not buy anything new. Payment systems affect transactions ' +
      'velocity directly, and income velocity only in an indirect way. Section 3.4 explains this ' +
      'in detail, because mixing up the two is the most common mistake on this topic.',
  },

  { t: 'h2', text: '1.7  Digital payments and economic activity' },
  {
    t: 'p', text:
      'How could a payment system change real economic activity? There are four main ways. Each ' +
      'one comes up again in the research reviewed in Chapter 3.',
  },
  {
    t: 'numbers', items: [
      'Paying becomes cheaper. When a payment costs nothing and takes no time, people start ' +
      'making exchanges that were not worth the trouble before. This matters most for very small ' +
      'payments. Cash handled these badly, and cards never reached them at all.',
      'People hold less idle money. A family that can pay straight from its bank account does ' +
      'not need much cash in hand. So the money held for spending falls compared with the amount ' +
      'actually spent. That is the same thing as a rise in velocity.',
      'The informal economy becomes visible. A digital payment leaves a record. Records build up ' +
      'into a credit history. A credit history can turn a trader who never had a loan into a ' +
      'borrower. The Reserve Bank has worked on this through the Unified Lending Interface [20].',
      'Working capital is reused faster. A shopkeeper who is paid at once, instead of at the end ' +
      'of the day, can buy new stock sooner. The same rupee then pays for more sales in a year.',
    ],
  },
  {
    t: 'p', text:
      'These are sensible explanations, not measured amounts. This project treats them that way ' +
      'throughout.',
  },

  { t: 'h2', text: '1.8  Financial inclusion and the formalisation of the economy' },
  {
    t: 'p', text:
      'Financial inclusion means being able to use financial services that are useful and cheap. ' +
      'India built this in layers, and each layer needed the one before it. First came bank ' +
      'accounts for everyone under the Pradhan Mantri Jan Dhan Yojana. Then came a digital ' +
      'identity to prove who the account holder was. Last came a payment system those accounts ' +
      'could actually use. By 4 August 2025 the Jan Dhan scheme had reached over 55.98 crore ' +
      'people. More than 55 per cent of those accounts were held by women [7].',
  },
  {
    t: 'p', text:
      'The result can be measured. The Reserve Bank’s Financial Inclusion Index rose from 64.2 in ' +
      'March 2024 to 67.0 in March 2025. All three of its parts improved: access, usage and ' +
      'quality [7]. Formalisation comes from usage, not from access alone. An account that is ' +
      'only opened changes nothing. An account that is used creates a record of payments. Credit ' +
      'and insurance can then be built on that record.',
  },

  { t: 'h2', text: '1.9  Relevance in the post-demonetisation and post-pandemic economy' },
  {
    t: 'p', text:
      'Two big shocks mark UPI’s first ten years. In November 2016, ₹500 and ₹1,000 notes stopped ' +
      'being legal tender. They were worth ₹15.4 trillion. That was 86.9 per cent of the value of ' +
      'all notes then in circulation [23]. Monthly digital transactions rose 56 per cent between ' +
      'October 2016 and May 2017 [24]. UPI had launched only months earlier. So it was ready at ' +
      'the exact moment the country had to find something other than cash.',
  },
  {
    t: 'p', text:
      'The second shock was COVID-19. It turned contactless payment into a health precaution ' +
      'rather than a convenience. It also pushed a whole generation of small shopkeepers into ' +
      'accepting a QR code. The two shocks worked in different ways, and Data Sets 5 and 6 study ' +
      'that difference. The first was a sudden force that people partly undid later. The second ' +
      'was a slower change that did not reverse.',
  },

  { t: 'h2', text: '1.10  Statement of the problem' },
  {
    t: 'p', text:
      'Nobody doubts that UPI has grown. The figures come out every month and are not seriously ' +
      'questioned. The question I ask in this project is narrower and harder. Has that growth ' +
      'changed the speed at which money moves around in India? And can any effect on real ' +
      'economic activity be found in data that is public?',
  },
  {
    t: 'p', text:
      'The gap between those two questions is what this report is about. A payment system can ' +
      'move a huge amount of money without changing national income at all. That happens if it ' +
      'only shifts payments that would have been made in cash anyway. To show that something ' +
      'more than a shift has happened, I need different evidence. I need to look at the size of ' +
      'payments, at who is paying, and at what shopkeepers say. That evidence is collected in ' +
      'Chapter 4.',
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
      'To study the link between UPI payments and the velocity of money, keeping transactions ' +
      'velocity and income velocity separate.',
      'To study the effect of digital payments on economic activity. This includes spending ' +
      'habits, the sales of small shopkeepers, and the recording of payments.',
      'To see how far UPI has helped financial inclusion, and how far it has brought informal ' +
      'activity into the recorded economy.',
      'To study the problems and limits of digital payments in India. These include cyber fraud, ' +
      'dependence on networks, and uneven use across regions.',
    ],
  },

  { t: 'h2', text: '2.2  Research questions and hypotheses' },
  {
    t: 'p', text:
      'These objectives are turned into three statements that can be tested. They are given here ' +
      'so the reader can judge, at the end of Chapter 4, whether the evidence supports them.',
  },
  {
    t: 'table',
    widths: [1200, 4400, 3426],
    head: ['', 'Hypothesis', 'Evidence used'],
    rows: [
      ['H1', 'The value of payments settled for every rupee of national output has risen sharply since FY 2016-17. In other words, transactions velocity has gone up.', 'Data Sets 1 and 4'],
      ['H2', 'UPI’s growth comes from new, small payments. It does not come only from large payments moving across from cash.', 'Data Sets 2 and 3'],
      ['H3', 'The gains in inclusion and usage are not shared evenly between rural and urban India.', 'Data Sets 7 and 8'],
    ],
  },

  { t: 'h2', text: '2.3  Data collection methodology' },
  {
    t: 'p', text:
      'This study uses secondary data only. I did not carry out a survey, for a simple reason. ' +
      'The subject is national in size. It is already measured in full, every month, by the ' +
      'bodies that run and regulate it. A survey done by a school student could not improve on ' +
      'those figures. Any sample small enough for me to collect would be far too small to stand ' +
      'for the whole country.',
  },
  { t: 'p', text: 'I chose sources in this order of preference:' },
  {
    t: 'bullets', items: [
      'Operator and regulator data. Transaction figures from the National Payments Corporation ' +
      'of India. Also the Annual Report, Payment Systems Report, Digital Payments Index and ' +
      'Financial Inclusion Index of the Reserve Bank of India.',
      'Government releases. Press Information Bureau releases and factsheets, answers given in ' +
      'Parliament, and the Economic Survey.',
      'Official statistics. National income figures from the Ministry of Statistics and ' +
      'Programme Implementation. Telecom and internet data from the Telecom Regulatory Authority ' +
      'of India.',
      'International research. Work by the International Monetary Fund, the Bank for ' +
      'International Settlements and the World Bank. I used these mainly for comparison and for ' +
      'guidance on method.',
      'Academic research. Peer-reviewed papers and pre-prints. I used these where they show ' +
      'things about individual users that national figures cannot.',
    ],
  },
  {
    t: 'p', text:
      'I avoided commercial and news websites as sources of figures. Every number quoted here ' +
      'comes from the body that produced it. The number in square brackets points to the entry ' +
      'in the Bibliography where that release can be found.',
  },
  {
    t: 'p', text:
      'Two measures in this report were worked out by me, not taken from a source. The first is ' +
      'the average value of a UPI payment. I found it by dividing the yearly value by the yearly ' +
      'volume. The second is UPI turnover as a multiple of nominal GDP. I have written out both ' +
      'methods next to the tables so that anyone can check them.',
  },

  { t: 'h2', text: '2.4  Scope of the study' },
  {
    t: 'p', text:
      'This study looks at the effect of digital payments on the Indian economy as a whole. ' +
      'Within that, it focuses on UPI. Other methods such as cards, wallets, IMPS, NEFT and RTGS ' +
      'appear only where a comparison is needed. The period runs from FY 2016-17, UPI’s first ' +
      'full year, to FY 2025-26. That was the latest year with complete data when I wrote this. ' +
      'The main ideas studied are the velocity of money, consumption, and the recording of ' +
      'financial activity.',
  },
  {
    t: 'p', text:
      'Some related questions are left out on purpose. This study does not look at the profits of ' +
      'payment companies. It does not look at the design of a central bank digital currency. It ' +
      'also does not look at the question of how few apps handle most UPI traffic. Each of those ' +
      'is a large topic on its own.',
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
      'figures behind them.',
      'Correlation is not causation. UPI grew during a decade when smartphones, internet access, ' +
      'bank accounts and incomes all rose together. I can show that these things moved together. ' +
      'I cannot separate out UPI’s own effect, and I do not claim to.',
      'Velocity cannot be measured directly. It has to be worked out from the ratio of payments ' +
      'or income to a stock of money. Different choices give very different answers. The ' +
      'turnover ratio in Data Set 4 is an approximation, and I explain its limits where it ' +
      'appears.',
      'Payment value is not output. A large share of UPI value is money sent between individuals. ' +
      'These transfers do not buy anything new, so they are not part of GDP. Any ratio of ' +
      'payment value to GDP has to be read with that in mind.',
      'The national accounts were revised during this period. Nominal GDP is now published on a ' +
      '2022-23 base. Earlier it used a 2011-12 base. So the two series do not join perfectly. I ' +
      'point this out wherever it affects a calculation.',
      'The system changes quickly. Limits, fees and features were revised several times during ' +
      'the period. So the figures here are correct only up to the dates given.',
      'Regional differences are hidden. National figures cover wide variation between states and ' +
      'districts. UPI data is not published at district level.',
    ],
  },
  { t: 'pb' },
];

module.exports = { CH1_2 };
