/** Chapter 5 (Findings), Chapter 6 (Conclusion), Glossary, Bibliography. */

const { GLOSSARY } = require('./glossary');

const CH4_5 = [
  {
    t: 'h1',
    text: '5.  Findings and Suggestions',
  },
  {
    t: 'h2',
    text: '5.1  Findings',
  },
  {
    t: 'p',
    text: 'Seven findings come out of the analysis in Chapter 4. I give each one with the ' +
      'evidence behind it, and with the qualification that evidence needs.',
  },
  {
    t: 'p',
    bold: true,
    text: 'Finding 1.  UPI has become the normal way India pays in shops.',
  },
  {
    t: 'p',
    text: 'Volume rose from 2 crore payments in FY 2016-17 to 24,162 crore in FY 2025-26. UPI ' +
      'made up 81 per cent of retail digital payments in FY 2024-25 [2], [14]. Growth ' +
      'happened in every single year. The actual rise each year keeps getting bigger, even ' +
      'though the percentage growth is slowing.',
  },
  {
    t: 'p',
    bold: true,
    text: 'Finding 2.  The growth is made up of small payments, more and more so.',
  },
  {
    t: 'p',
    text: 'The average UPI payment fell from ₹1,838 in FY 2020-21 to ₹1,300 in FY 2025-26. That ' +
      'is a fall of about 29 per cent. Over the same years volume rose more than ten times ' +
      '(Data Set 2). Person-to-merchant payments are now 63 per cent of volume, and 86 per ' +
      'cent of those are below ₹500 [2]. Prices rose over this period, so the shift towards ' +
      'small payments is even bigger in real terms than the figures show.',
  },
  {
    t: 'p',
    bold: true,
    text: 'Finding 3.  The value of payments settled for each rupee of output has risen sharply.',
  },
  {
    t: 'p',
    text: 'UPI value as a multiple of nominal GDP rose from 0.52 in FY 2022-23 to 0.91 in FY ' +
      '2025-26 (Data Set 4). This fits the Cambridge prediction. When paying gets cheaper, ' +
      'people hold less money against a given amount of spending. But it is a transactions ' +
      'measure, not income velocity. Part of the rise is cash payments becoming visible for ' +
      'the first time, and the data cannot separate the two.',
  },
  {
    t: 'p',
    bold: true,
    text: 'Finding 4.  Both shocks speeded up growth, but only one lasted.',
  },
  {
    t: 'p',
    text: 'Digital payments rose 56 per cent in the seven months after demonetisation [24]. But ' +
      'about 98.96 per cent of the withdrawn currency came back to the banks [23], and cash ' +
      'use recovered a lot. The pandemic produced 78 per cent growth in FY 2020-21 and then ' +
      '106 per cent in FY 2021-22. That is faster after the shock than during it. Growth ' +
      'then carried on at 82 and 57 per cent in the next two years (Data Set 6). The ' +
      'difference seems to be how long each one lasted. The pandemic went on long enough ' +
      'for digital payment to become a habit.',
  },
  {
    t: 'p',
    bold: true,
    text: 'Finding 5.  UPI has helped financial inclusion in ways we can measure.',
  },
  {
    t: 'p',
    text: 'The RBI Financial Inclusion Index rose from 64.2 to 67.0 between March 2024 and ' +
      'March 2025. Access, usage and quality all improved [7]. The gain in usage matters ' +
      'most, because access had already been largely achieved. The share of Indian women ' +
      'with inactive accounts fell from a third in 2021 to 18 per cent by 2024 [21].',
  },
  {
    t: 'p',
    bold: true,
    text: 'Finding 6.  There is believable evidence of an effect on real activity, but it is ' +
      'not proof.',
  },
  {
    t: 'p',
    text: 'Of the small shopkeepers surveyed for the Department of Financial Services, 94 per ' +
      'cent had adopted UPI. Of those, 57 per cent said their sales had risen afterwards ' +
      '[15]. These are reported figures that cannot be audited, and a shopkeeper may credit ' +
      'a payment method for a gain that had another cause. Even so, it is the most direct ' +
      'evidence we have that the effect reaches output, and not just the way people pay. ' +
      'Research from other countries points the same way. The BIS finds that launching a ' +
      'fast payment system increases the use of digital finance, most of all in ' +
      'lower-income countries [20].',
  },
  {
    t: 'p',
    bold: true,
    text: 'Finding 7.  The gains are shared unevenly, and two serious risks come with them.',
  },
  {
    t: 'p',
    text: 'In August 2025 rural areas had 46.73 internet subscribers per 100 people, against ' +
      '113.83 in urban areas [22]. That sets a ceiling on how inclusive a system needing a ' +
      'network can be. Cybersecurity incidents rose from 10.29 lakh in 2022 to 22.68 lakh ' +
      'in 2024 [28]. And about 75 per cent of users in one survey said they spent more ' +
      'because digital money felt less real [25]. The same ease that raises velocity also ' +
      'removes a restraint that cash used to give by accident.',
  },
  {
    t: 'h2',
    text: '5.2  Suggestions',
  },
  {
    t: 'p',
    text: 'Six suggestions follow from these findings. Each one deals with a problem the ' +
      'evidence actually shows, rather than a general wish.',
  },
  {
    t: 'numbers',
    items: [
      'Treat rural connectivity as payments policy. Data Set 8 shows that what limits rural ' +
      'digital payment is network access, not whether shops will accept it. About 5.45 ' +
      'crore payment points have been set up in tier-3 to tier-6 centres [14]. Yet fewer ' +
      'than half of rural people are connected. So spreading broadband would do more good ' +
      'now than paying for still more acceptance infrastructure.',
      'Spend on fraud awareness on the same scale as the system itself. UPI\'s technical ' +
      'defences are strong. The app is tied to one device, a PIN is needed, and machine ' +
      'learning watches for suspicious payments [28]. The weak point is the user\'s ' +
      'judgement. So awareness campaigns should be treated as essential infrastructure. ' +
      'They should be in regional languages, inside the payment apps, at the moment of ' +
      'paying.',
      'Build spending-awareness features into payment apps. Most surveyed users say they ' +
      'spend more because digital money feels less real [25]. Apps could offer optional ' +
      'monthly spending summaries, and limits that users set for themselves. This deals ' +
      'with a real cost without taking away anyone\'s choice.',
      'Publish payment data region by region. The biggest limit I faced was that UPI data ' +
      'is not published by state or district. This made it impossible to study regional ' +
      'differences. Releasing this data, with names removed, would allow research that ' +
      'national totals cannot support.',
      'Reduce single points of failure. As cash disappears, a breakdown stops being an ' +
      'inconvenience and starts stopping trade. Offline payment modes, and modes that work ' +
      'on basic phones, deserve more investment. They should be funded so the system can ' +
      'survive failures, and not only to include more people.',
      'Review the incentive scheme openly. Free payment is paid for by the Government ' +
      'rather than by shopkeepers [14], [15]. Whether the gains in recorded activity, ' +
      'inclusion and tax collection are worth that spending is a question that can be ' +
      'answered with evidence. It should be reviewed publicly from time to time, because ' +
      'the answer decides whether free payment can continue.',
    ],
  },
  {
    t: 'pb',
  },
  {
    t: 'h1',
    text: '6.  Conclusion',
  },
  {
    t: 'p',
    text: 'I set out to ask whether the growth of UPI has changed the speed at which money ' +
      'moves around in India. I also asked whether any effect on real economic activity can ' +
      'be found in published data. The two questions deserve different answers.',
  },
  {
    t: 'p',
    text: 'On circulation, the evidence is strong. The value settled over UPI rose from about ' +
      'half of nominal GDP in FY 2022-23 to about nine-tenths of it in FY 2025-26. Over the ' +
      'decade the number of payments rose thirteen times, while the average payment shrank ' +
      'by nearly a third. Read through Fisher\'s equation, that is a big rise in the number ' +
      'of transactions supported by a given stock of money. Read through the Cambridge ' +
      'version, it is a fall in the balance people need to hold against their spending. ' +
      'Both readings describe a rise in the transactions velocity of money. The ' +
      'qualification, which I state plainly in Data Set 4, is that part of the measured ' +
      'rise is cash payments moving into a system that counts them. Those payments were ' +
      'always real. They were simply invisible before.',
  },
  {
    t: 'p',
    text: 'On economic activity the evidence points one way but does not prove the case, and I ' +
      'do not claim more than that. The fact that 57 per cent of small shopkeepers report ' +
      'higher sales after taking up digital payment [15] is the most direct sign we have ' +
      'that the effect reaches output. The BIS finding that fast payment systems raise ' +
      'digital finance use most in lower-income countries [20], and the IMF finding of ' +
      'faster growth in districts where interoperability helped most [18], both point the ' +
      'same way. But none of this separates UPI\'s own effect from everything else that ' +
      'happened in the same decade. Smartphones, internet access, bank accounts and incomes ' +
      'all spread at the same time. A study based on published national figures cannot ' +
      'separate them, and it would be dishonest to pretend otherwise.',
  },
  {
    t: 'p',
    text: 'What I can say without any qualification is that UPI has changed how India pays. It ' +
      'did this by solving a problem that cards and wallets never could. It made the very ' +
      'small payment worth making. The average payment fell from ₹1,838 to ₹1,300 while ' +
      'volume rose more than ten times, and it did so even though inflation was pushing the ' +
      'other way. That is the sign of a system reaching payments it never served before. ' +
      'The tea, the vegetables, the auto fare: these are the payments UPI added, and they ' +
      'are why the national figures look the way they do.',
  },
  {
    t: 'p',
    text: 'So the case for greater efficiency is genuine. Money that does not have to be ' +
      'withdrawn, carried and deposited again is money free to be used. A shopkeeper paid ' +
      'at once can buy new stock sooner. A payment that leaves a record can later become ' +
      'the basis of a loan. These are real gains, and they fit everything I found in ' +
      'Chapter 4.',
  },
  {
    t: 'p',
    text: 'Two problems remain, and neither is small. The first is unequal access. Rural ' +
      'internet reaches less than half the urban rate. A payment system that needs a ' +
      'network cannot include more people than the network does, and the people left out ' +
      'are those who would gain most. The second is security. The rise in cyber incidents ' +
      'tracks the growth of the system, and the weak point is the user rather than the ' +
      'technology.',
  },
  {
    t: 'p',
    text: 'One last point is worth making. India built this system as public infrastructure and ' +
      'chose to make it free to use. The cost is paid from government funds rather than ' +
      'charged to shopkeepers. Almost every similar system abroad chose the opposite. The ' +
      'growth I have described is, in large part, a result of that decision. So the most ' +
      'important thing about UPI may not be its technology at all. It may be the idea that ' +
      'payment is a public service, which the technology was built to serve.',
  },
  {
    t: 'pb',
  },

  ...GLOSSARY,

  {
    t: 'h1',
    text: 'Bibliography',
  },
  {
    t: 'p',
    italicAll: true,
    text: 'Entries are numbered as cited in the text. All sources were consulted online and ' +
      'were available at the addresses shown at the time of writing.',
  },
  {
    t: 'refs',
    items: [
      'National Payments Corporation of India. UPI Product Statistics. ' +
      'https://www.npci.org.in/what-we-do/upi/product-statistics',
      'Press Information Bureau, Government of India. "UPI completes 10 glorious years, ' +
      'Emerges as World’s Largest Real-Time Payments Platform, Anchoring India’s Digital ' +
      'Economy." https://www.pib.gov.in/PressReleasePage.aspx?PRID=2257087',
      'Press Information Bureau, Government of India. "UPI Recognized as World’s Largest ' +
      'Real-Time Payment System by IMF; Accounts for 49% of Global Transactions." ' +
      'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2200569',
      'Reserve Bank of India. Annual Report 2024-25, Chapter on Payment and Settlement ' +
      'Systems. https://www.rbi.org.in/Scripts/AnnualReportMainDisplay.aspx',
      'Reserve Bank of India. Payment Systems Report, Half Year ended December 2024. ' +
      'https://www.rbi.org.in/scripts/PublicationsView.aspx?Id=23127',
      'Reserve Bank of India. Press releases on the RBI Digital Payments Index (RBI-DPI). ' +
      'https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=60913',
      'Press Information Bureau, Government of India. "RBI’s Financial Inclusion Index ' +
      'rises to 67 in 2025." ' +
      'https://www.pib.gov.in/PressNoteDetails.aspx?NoteId=154980&ModuleId=3',
      'Ministry of Statistics and Programme Implementation. Press Note on Provisional ' +
      'Estimates of Annual GDP for 2024-25. ' +
      'https://www.mospi.gov.in/sites/default/files/press_release/NAD_PR_30may2025.pdf',
      'Ministry of Statistics and Programme Implementation. Press Note on Provisional ' +
      'Estimates of Annual GDP for 2025-26. ' +
      'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2269286',
      'Press Information Bureau, Government of India. "Total digital payment transactions ' +
      'volume increases from 2,071 crore in FY 2017-18 to 13,462 crore in FY 2022-23 at a ' +
      'CAGR of 45 per cent." https://www.pib.gov.in/PressReleasePage.aspx?PRID=1988370',
      'Press Information Bureau, Government of India. "Total digital payment transactions ' +
      'grow by 46% from 8,839 crore in FY 2021-22 to 18,737 crore in FY 2023-24." ' +
      'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2110407',
      'Press Information Bureau, Government of India. "Indian digital payment landscape ' +
      'witnesses over 65,000 crore digital transactions amounting to more than ₹12,000 lakh ' +
      'crore in last 6 Financial years." ' +
      'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2149372',
      'Press Information Bureau, Government of India. "UPI transactions grew from ₹1 lakh ' +
      'crore in FY 2017-18 to ₹139 lakh crore in FY 2022-23 in value, at a CAGR of 168%." ' +
      'https://www.pib.gov.in/PressReleasePage.aspx?PRID=1987764',
      'Press Information Bureau, Government of India. "Coordinated Efforts of Government, ' +
      'RBI and NPCI Accelerate Growth in Digital Payments." ' +
      'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2240723',
      'Department of Financial Services, Ministry of Finance. "Socio-Economic Impact ' +
      'Analysis of Incentive Scheme for Promotion of RuPay Debit Card and low-value ' +
      'BHIM-UPI Transactions (P2M)", released at Chintan Shivir 2026. ' +
      'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2228651',
      'Press Information Bureau, Government of India. "Nearly 55.49 Crore Users Onboarded ' +
      'on UPI as in June 2026." https://www.pib.gov.in/PressReleasePage.aspx?PRID=2286608',
      'Press Information Bureau, Government of India. "UPI is now live in over eight ' +
      'countries." https://www.pib.gov.in/PressReleasePage.aspx?PRID=2224505',
      'International Monetary Fund. Growing Retail Digital Payments: The Value of ' +
      'Interoperability. FinTech Note 2025/004, June 2025. ' +
      'https://www.imf.org/en/publications/fintech-notes/issues/2025/06/25/growing-retail-digital-payments-the-value-of-interoperability-567814',
      'International Monetary Fund. "India’s Frictionless Payments." Finance & Development, ' +
      'September 2025. ' +
      'https://www.imf.org/en/publications/fandd/issues/2025/09/indias-frictionless-payments-maria-peria',
      'Bank for International Settlements. Retail fast payment systems as a catalyst for ' +
      'digital finance. BIS Working Paper No. 1228, November 2024. ' +
      'https://www.bis.org/publ/work1228.htm',
      'World Bank. The Global Findex Database 2025: Connectivity and Financial Inclusion in ' +
      'the Digital Economy. https://www.worldbank.org/en/publication/globalfindex',
      'Telecom Regulatory Authority of India. Telecom Subscription Data and Indian Telecom ' +
      'Services Performance Indicator Reports, 2025. ' +
      'https://www.trai.gov.in/release-publication/reports/telecom-subscriptions-reports',
      'Reserve Bank of India. Macroeconomic Impact of Demonetisation — A Preliminary ' +
      'Assessment, 2017. ' +
      'https://rbidocs.rbi.org.in/rdocs/Publications/PDFs/MID10031760E85BDAFEFD497193995BB1B6DBE602.PDF',
      'Press Information Bureau, Government of India. "Status of the Return of SBNs — ' +
      'Reserve Bank of India Annual Report 2016-17." ' +
      'https://www.pib.gov.in/newsite/PrintRelease.aspx?relid=170379',
      'Dev, H., Gupta, R., Dharmavaram, S. and Kumar, D. "From Cash to Cashless: UPI’s ' +
      'Impact on Spending Behavior Among Indian Users and Prototyping Financially ' +
      'Responsible Interfaces." ACM CHI 2024 Late Breaking Work; arXiv:2401.09937. ' +
      'https://arxiv.org/abs/2401.09937',
      'Reserve Bank of India. Payments Vision 2025. ' +
      'https://rbidocs.rbi.org.in/rdocs/PublicationReport/Pdfs/PAYMENTSVISION2025844D11300C884DC4ACB8E56B7348F4D4.PDF',
      'Reserve Bank of India. National Strategy for Financial Inclusion 2025-30. ' +
      'https://www.rbi.org.in/commonman/Upload/English/Content/PDFs/English12052026.pdf',
      'Press Information Bureau, Government of India. "Curbing Cyber Frauds in Digital ' +
      'India." https://www.pib.gov.in/PressNoteDetails.aspx?NoteId=155384&ModuleId=3',
      'Badrawani, W. et al. "The Role of Digital Payments in Driving Regional Economic ' +
      'Growth: A Panel Data Analysis with Structural Break." arXiv:2508.02119, August 2025. ' +
      'https://arxiv.org/abs/2508.02119',
      'Ministry of Finance, Government of India. Economic Survey 2025-26, Statistical ' +
      'Appendix. https://www.indiabudget.gov.in/economicsurvey/',
    ],
  },
];

module.exports = { CH4_5 };
