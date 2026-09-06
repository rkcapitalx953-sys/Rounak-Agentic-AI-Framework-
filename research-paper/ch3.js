/** Chapter 3: Review of Literature, including the eight analysed data sets. */

const CH3 = [
  { t: 'h1', text: '3.  Review of Literature' },
  {
    t: 'p', text:
      'This chapter has two halves. Sections 3.1 to 3.10 review what is already known: the ' +
      'evolution of digital payments, the theory of the velocity of money, the empirical ' +
      'literature connecting payments to economic activity, the policy framework, and the ' +
      'principal criticisms of the system. Sections 3.11 onward present the eight data sets ' +
      'analysed for this project, each in the same four-part structure of table or graph, ' +
      'explanation, analysis, and interpretation.',
  },

  // -------------------------------------------------------------------- 3.1
  { t: 'h2', text: '3.1  Meaning and evolution of digital payments' },
  {
    t: 'p', text:
      'India’s retail payment system did not arrive at UPI in a single step. Its evolution can ' +
      'be read as a sequence of attempts to solve one problem after another.',
  },
  {
    t: 'p', text:
      'Electronic settlement between banks came first, with the Real Time Gross Settlement and ' +
      'National Electronic Funds Transfer systems. These were reliable but institutional in ' +
      'character: they operated in batches or during banking hours, required the payer to know ' +
      'the payee’s account number and branch code, and were designed for payments of substance. ' +
      'The Immediate Payment Service, introduced by NPCI, removed the constraint of banking ' +
      'hours and made round-the-clock retail transfer possible for the first time.',
  },
  {
    t: 'p', text:
      'Card networks solved a different problem — payment at the point of sale — but imposed ' +
      'costs of their own. Acceptance required a terminal, the merchant paid a discount rate on ' +
      'every transaction, and the economics of that arrangement excluded precisely the small ' +
      'traders who constitute the majority of Indian retail. Mobile wallets, which proliferated ' +
      'in the middle of the last decade, lowered the cost of acceptance but reintroduced a worse ' +
      'problem: each wallet was a closed loop. Money inside one provider’s system could not ' +
      'reach a user of another, and the market fragmented into networks that could not talk to ' +
      'each other.',
  },
  {
    t: 'p', text:
      'UPI’s contribution was to make the network itself the public good. Rather than build a ' +
      'better wallet, NPCI defined a standard that any wallet, bank or application could adopt, ' +
      'and required that all of them settle against the same rail. The Bank for International ' +
      'Settlements describes systems of this design as digital public infrastructure — ' +
      'interoperable, open and inclusive digital systems supporting society-wide public and ' +
      'private services — and treats fast payment systems as the archetype of the category ' +
      'regardless of whether the operator is public or private [20].',
  },

  // -------------------------------------------------------------------- 3.2
  { t: 'h2', text: '3.2  UPI and its features' },
  {
    t: 'p', text:
      'Six features distinguish UPI from what preceded it, and together they explain the ' +
      'adoption pattern documented later in this chapter.',
  },
  {
    t: 'bullets', items: [
      'Interoperability. Any application can pay any account at any participating bank. By ' +
      'FY 2025-26 there were 703 banks live on the platform, up from 44 in FY 2016-17 [2].',
      'Addressability without account details. A virtual payment address or a QR code replaces ' +
      'the account number and branch code, which removes both a memory burden and a common ' +
      'source of error.',
      'Continuous availability. Settlement is instant and the system operates without ' +
      'interruption, including on holidays.',
      'Zero cost to the user. There is no charge to the payer for UPI payments, and small ' +
      'merchants face a zero Merchant Discount Rate on transactions up to ₹2,000, supported by ' +
      'a government incentive of 0.15 per cent of transaction value [14].',
      'Two-factor authentication by design. Every transaction requires a PIN, and the device is ' +
      'bound to the customer’s registered mobile number [28].',
      'Extensibility. The same rail now carries recurring mandates, credit lines, cross-border ' +
      'acceptance and UPI-linked credit cards, without change to the user-facing model.',
    ],
  },

  // -------------------------------------------------------------------- 3.3
  { t: 'h2', text: '3.3  The growth of UPI transactions in India' },
  {
    t: 'p', text:
      'The growth record is set out in full in Data Set 1. Two features of it are worth stating ' +
      'here because they govern how the rest of the chapter should be read.',
  },
  {
    t: 'p', text:
      'The first is that growth has been sustained rather than explosive-then-flat. A system ' +
      'that grows a thousand-fold in three years and then stops has found a niche; a system that ' +
      'compounds for a decade has changed a habit. UPI’s volume rose in every single year of the ' +
      'period studied, including the years after the novelty had plainly worn off.',
  },
  {
    t: 'p', text:
      'The second is that volume has consistently grown faster than value. This is not a ' +
      'statistical curiosity but the single most informative fact in the whole data set, and ' +
      'Data Set 2 is devoted to it. It means that the typical UPI transaction has been getting ' +
      'smaller, which in turn tells us something about what kind of spending is moving onto the ' +
      'platform.',
  },

  // -------------------------------------------------------------------- 3.4
  { t: 'h2', text: '3.4  The concept of the velocity of money' },
  {
    t: 'p', text:
      'The velocity of money is among the oldest concepts in monetary economics and among the ' +
      'most frequently misused. This section sets out the theory with some care, because the ' +
      'empirical claims made later in this chapter depend on getting it right.',
  },
  { t: 'h3', text: '3.4.1  The equation of exchange' },
  {
    t: 'p', text:
      'Irving Fisher’s equation of exchange states that the total value of payments made in an ' +
      'economy over a period must equal the total value of goods and services exchanged:',
  },
  { t: 'equation', text: 'M × V  =  P × T' },
  {
    t: 'p', text:
      'Here M is the money stock, V the transactions velocity, P the average price and T the ' +
      'number of transactions. The relation is an identity — it is true by construction, not by ' +
      'assumption. Its usefulness lies in what it forces us to notice: if the money stock is ' +
      'held constant and the number of transactions rises, then velocity must have risen too.',
  },
  { t: 'h3', text: '3.4.2  Income velocity and transactions velocity' },
  {
    t: 'p', text:
      'Because T is not directly observable, economists ordinarily work with the income form of ' +
      'the identity, in which total transactions are replaced by national income:',
  },
  { t: 'equation', text: 'V  =  (P × Y)  ÷  M' },
  {
    t: 'p', text:
      'This is income velocity, and it is a much more conservative measure. It counts only ' +
      'those payments that correspond to newly produced output. Transactions velocity, by ' +
      'contrast, counts every payment — including a transfer of money between two of a person’s ' +
      'own accounts, a repayment to a friend, or a wholesaler paying a distributor for goods ' +
      'that will be counted in GDP only once, at final sale.',
  },
  {
    t: 'p', text:
      'The gap between the two measures is large and it is systematic. A payment system that ' +
      'makes transfers frictionless will raise transactions velocity a great deal and income ' +
      'velocity comparatively little, because most of the additional payments it enables are not ' +
      'purchases of final output. Any study claiming that a payment system has raised "the ' +
      'velocity of money" without saying which velocity it means should be treated with caution. ' +
      'This project accordingly reports a transactions-velocity proxy in Data Set 4 and labels ' +
      'it as such.',
  },
  { t: 'h3', text: '3.4.3  The Cambridge approach and the demand for money' },
  {
    t: 'p', text:
      'The Cambridge cash-balance approach expresses the same relationship from the opposite ' +
      'direction. Writing M = k × P × Y, where k is the fraction of nominal income that people ' +
      'choose to hold as money, velocity is simply the reciprocal of k. A rise in velocity is ' +
      'therefore identical to a fall in the proportion of income held idle as money.',
  },
  {
    t: 'p', text:
      'This formulation makes the link to payment technology direct and intuitive. Keynes ' +
      'identified a transactions motive for holding money: people hold balances because income ' +
      'and expenditure are not synchronised, and they must bridge the gap. A payment system that ' +
      'permits instant transfer from an interest-bearing account at any hour reduces the size of ' +
      'the bridge required. Held balances fall relative to spending; k falls; V rises. This is ' +
      'the theoretical mechanism by which UPI could plausibly affect velocity, and it is the one ' +
      'this project tests.',
  },
  { t: 'h3', text: '3.4.4  What velocity does not tell us' },
  {
    t: 'p', text:
      'A caution is owed here. A rise in velocity is not by itself a sign of economic health. ' +
      'Velocity rises during hyperinflations, when holding money is punished and people spend ' +
      'immediately. It falls during periods of uncertainty when precautionary saving increases. ' +
      'The claim that faster circulation is beneficial holds only when the increase arises from ' +
      'lower transaction costs rather than from a flight from money. The distinction matters for ' +
      'the interpretation offered in Data Set 4.',
  },

  // -------------------------------------------------------------------- 3.5
  { t: 'h2', text: '3.5  Digital payments and the circulation of money' },
  {
    t: 'p', text:
      'The Reserve Bank has treated the relationship between payment digitalisation and currency ' +
      'demand as a policy variable rather than an academic curiosity. Payments Vision 2025 named ' +
      'the reduction of cash in circulation as a percentage of GDP among its goals, observing ' +
      'that India’s ratio is high by international standards and that currency demand grows with ' +
      'both output and inflation [26].',
  },
  {
    t: 'p', text:
      'The mechanism by which digital payments might reduce currency demand is not that people ' +
      'hold less wealth, but that they hold less of it in the specific form of notes. Money kept ' +
      'in a bank account and spendable instantly through a phone performs the transactions ' +
      'function that cash previously performed, while remaining within the banking system where ' +
      'it can be lent. The Reserve Bank tracks the aggregate progress of this shift through its ' +
      'Digital Payments Index, constructed on a March 2018 base of 100, which stood at 465.33 in ' +
      'September 2024 and 493.22 in March 2025 [6].',
  },
  {
    t: 'p', text:
      'Direct evidence on household behaviour points the same way. The Department of Financial ' +
      'Services study of February 2026 found that adoption of UPI and RuPay was accompanied by a ' +
      'marked decline in both cash usage and ATM withdrawals among users, with 74 per cent citing ' +
      'speed of payment as the principal advantage [15].',
  },

  // -------------------------------------------------------------------- 3.6
  { t: 'h2', text: '3.6  Digital payments and economic activity' },
  {
    t: 'p', text:
      'The international evidence on whether fast payment systems affect real activity is ' +
      'developing, and it is more careful than popular commentary suggests.',
  },
  {
    t: 'p', text:
      'The Bank for International Settlements examined 86,163 applications across 95 countries ' +
      'between 2012 and 2022 and found that the launch of a retail fast payment system ' +
      'stimulates the adoption of digital finance applications, with the most pronounced effect ' +
      'in lower-income economies. The effect was strongest for applications built by fintech and ' +
      'big-tech entrants rather than by incumbent financial institutions, and it was amplified ' +
      'where the central bank took an active role, where membership was open, and where ' +
      'settlement was in real time [20]. India’s system has all three characteristics.',
  },
  {
    t: 'p', text:
      'The International Monetary Fund’s study of interoperability used the universe of UPI ' +
      'transactions and found that in districts where the payment landscape had been most ' +
      'fragmented before interoperability — and where the gain from unification was therefore ' +
      'largest — digital payments subsequently grew faster [18]. This is closer to a causal ' +
      'identification than most work in the field, because it exploits variation in the size of ' +
      'the shock across districts rather than merely comparing before and after.',
  },
  {
    t: 'p', text:
      'Evidence from comparable economies supports the general direction. A panel study of ' +
      'thirty-three Indonesian provinces found that digital payments significantly affected ' +
      'regional income and consumption both before and after an identified structural break ' +
      'associated with COVID-19, with the effect larger after the break [29]. Indonesia is not ' +
      'India, and the finding cannot be transplanted; it is cited here as an indication that the ' +
      'relationship is detectable in data of this kind, not as a measurement of India’s ' +
      'experience.',
  },
  {
    t: 'p', text:
      'For India specifically, the most useful micro-evidence is behavioural rather than ' +
      'macroeconomic. A study of 276 survey respondents supported by 20 follow-up interviews ' +
      'found that approximately 75 per cent of participants reported increased spending as a ' +
      'result of UPI, and that many attributed this to the intangibility of digital money, which ' +
      'reduced the reluctance ordinarily associated with parting with cash; 95.2 per cent found ' +
      'UPI convenient and 91.5 per cent were satisfied with it [25]. The sample is small and ' +
      'self-reported, and it cannot be generalised to the population. But it identifies a ' +
      'mechanism that aggregate statistics cannot see, and it carries a warning as well as a ' +
      'finding: a system that makes spending easier makes overspending easier too.',
  },
  {
    t: 'p', text:
      'The merchant-side evidence is stronger. The Department of Financial Services study found ' +
      'that 94 per cent of small merchants had adopted UPI, that about 72 per cent were satisfied ' +
      'with digital payments, citing faster transactions and improved record-keeping, and — most ' +
      'significantly for the present question — that 57 per cent reported an increase in sales ' +
      'following digital adoption [15]. Self-reported sales increases are not audited accounts, ' +
      'and a merchant may attribute to a payment method a gain that had other causes. Even so, a ' +
      'majority reporting higher sales is the most direct evidence available that the effect ' +
      'reaches real activity and not merely the composition of payments.',
  },

  // -------------------------------------------------------------------- 3.7
  { t: 'h2', text: '3.7  Financial inclusion and the digital economy' },
  {
    t: 'p', text:
      'Financial inclusion in India has proceeded in layers, and the payment layer is the one ' +
      'that made the others useful. An account opened under the Pradhan Mantri Jan Dhan Yojana ' +
      'and never transacted upon is an entry in a register. The same account, connected to a ' +
      'payment rail that a vegetable vendor will accept, becomes a functioning financial ' +
      'relationship.',
  },
  {
    t: 'p', text:
      'The Reserve Bank’s Financial Inclusion Index registered this progression, rising from ' +
      '64.2 in March 2024 to 67.0 in March 2025 with improvement in all three sub-indices of ' +
      'access, usage and quality [7]. The improvement in the usage sub-index is the ' +
      'analytically important one, since access had already been substantially achieved through ' +
      'the Jan Dhan programme, which had reached over 55.98 crore beneficiaries by August 2025, ' +
      'more than 55 per cent of them women [7].',
  },
  {
    t: 'p', text:
      'The World Bank’s Global Findex 2025, drawing on nationally representative surveys of ' +
      'about 145,000 adults across 141 economies, provides the international benchmark for this ' +
      'kind of measurement and records a related Indian finding: the proportion of women holding ' +
      'inactive accounts fell from a third in 2021 to 18 per cent by 2024 [21]. Dormancy is the ' +
      'precise problem that a usable payment rail addresses.',
  },
  {
    t: 'p', text:
      'Beyond payments, the transaction record itself has become an economic asset. The Reserve ' +
      'Bank has built the Unified Lending Interface on this foundation, giving regulated lenders ' +
      'seamless access to verified borrower data and thereby converting a payment history into ' +
      'creditworthiness [20]. For a small trader who has never had audited accounts, this is the ' +
      'route by which digital payment adoption becomes access to capital.',
  },

  // -------------------------------------------------------------------- 3.8
  { t: 'h2', text: '3.8  Government initiatives promoting digital payments' },
  {
    t: 'p', text:
      'Adoption on this scale was not spontaneous. Four categories of intervention shaped it.',
  },
  {
    t: 'bullets', items: [
      'Pricing. The Government has kept UPI free to the user and has compensated the system for ' +
      'the revenue foregone rather than allowing a merchant fee to be levied. Successive ' +
      'incentive schemes for low-value BHIM-UPI person-to-merchant transactions and RuPay debit ' +
      'cards have paid acquiring banks a percentage of transaction value in place of a Merchant ' +
      'Discount Rate, with a ₹1,500 crore scheme approved for low-value P2M transactions [14], [15].',
      'Infrastructure. The Payments Infrastructure Development Fund subsidises the deployment of ' +
      'acceptance infrastructure in smaller centres. By 31 October 2025 approximately 5.45 crore ' +
      'digital touch points had been deployed through the Fund in tier-3 to tier-6 centres, and ' +
      'by FY 2024-25 some 56.86 crore QR codes had been deployed to approximately 6.5 crore ' +
      'merchants [14].',
      'Identity and accounts. The Jan Dhan–Aadhaar–Mobile architecture supplied the ' +
      'preconditions: an account to receive money, an identity to authenticate the holder, and a ' +
      'device on which to transact.',
      'Internationalisation. Through NPCI International Payments Limited, UPI acceptance and ' +
      'remittance corridors have been extended abroad, reaching eleven foreign jurisdictions, ' +
      'with acceptance launched in Cambodia in June 2026 and a remittance corridor with the ' +
      'Maldives’ instant payment system going live in July 2026 [17].',
    ],
  },
  {
    t: 'p', text:
      'It is worth recording the fiscal character of this policy honestly. Free payments are not ' +
      'costless payments; the cost has been shifted from the merchant to the exchequer. Whether ' +
      'that transfer is justified depends on whether the resulting gains in formalisation, ' +
      'inclusion and tax visibility exceed the outlay — a question this project raises in ' +
      'Chapter 4 but cannot settle.',
  },

  // -------------------------------------------------------------------- 3.9
  { t: 'h2', text: '3.9  Challenges faced by digital payment systems' },
  {
    t: 'p', text:
      'Four difficulties recur across the literature and the policy record, and an honest ' +
      'assessment must give them their weight.',
  },
  {
    t: 'p', bold: true, text: 'Cyber fraud and social engineering.',
  },
  {
    t: 'p', text:
      'Cybersecurity incidents in India rose from 10.29 lakh in 2022 to 22.68 lakh in 2024 [28]. ' +
      'The technical security of UPI itself is not the principal vulnerability — device binding ' +
      'and two-factor authentication with a PIN make unauthorised access difficult. The ' +
      'vulnerability is the user, who can be deceived into authorising a payment. NPCI operates ' +
      'a fraud-monitoring solution using machine-learning models to generate alerts and decline ' +
      'suspicious transactions, and the Citizen Financial Cyber Fraud Reporting and Management ' +
      'System has saved more than ₹1,200 crore across more than 4.7 lakh complaints [28]. A ' +
      'system used by over 55 crore people is a target proportionate to its size.',
  },
  { t: 'p', bold: true, text: 'Dependence on infrastructure.' },
  {
    t: 'p', text:
      'A digital payment requires electricity, a functioning device and network connectivity ' +
      'simultaneously. Cash requires none of these. As UPI displaces cash it concentrates ' +
      'systemic risk: an outage that would once have been an inconvenience becomes an ' +
      'interruption of commerce.',
  },
  { t: 'p', bold: true, text: 'Unequal access.' },
  {
    t: 'p', text:
      'The digital divide is documented quantitatively in Data Set 8. Rural internet penetration ' +
      'stood at 46.73 subscribers per 100 people against an urban figure of 113.83 in August ' +
      '2025 [22]. A payment system reachable only through the internet cannot be more inclusive ' +
      'than internet access itself.',
  },
  { t: 'p', bold: true, text: 'Behavioural risk.' },
  {
    t: 'p', text:
      'The finding that roughly 75 per cent of surveyed users reported spending more because ' +
      'digital money felt less tangible [25] is a genuine cost, particularly for low-income ' +
      'households with little buffer against overspending. The same frictionlessness that ' +
      'raises velocity also removes a restraint that cash imposed without anyone designing it.',
  },

  // ------------------------------------------------------------------- 3.10
  { t: 'h2', text: '3.10  Case studies' },
  { t: 'h3', text: '3.10.1  Urban and rural India' },
  {
    t: 'p', text:
      'The rural story is one of rapid catching-up from a low base, achieved through deliberate ' +
      'subsidy of acceptance infrastructure rather than by market forces alone. The Payments ' +
      'Infrastructure Development Fund exists precisely because deploying a QR code in a tier-6 ' +
      'centre is not commercially attractive at the transaction volumes initially available ' +
      'there; 5.45 crore touch points had been deployed under it in tier-3 to tier-6 centres by ' +
      'October 2025 [14]. The gap that remains, however, is not primarily a gap in acceptance ' +
      'infrastructure but in connectivity, and it is documented in Data Set 8.',
  },
  { t: 'h3', text: '3.10.2  Small businesses and consumers' },
  {
    t: 'p', text:
      'For the small merchant, UPI resolved a problem that card acceptance never could. A ' +
      'terminal costs money and a discount rate erodes a thin margin; a printed QR code costs ' +
      'nothing and, below ₹2,000, carries no fee at all [14]. The result is near-universal ' +
      'acceptance: 94 per cent of small merchants surveyed reported adoption, and 57 per cent ' +
      'reported higher sales afterwards [15]. Street vendors under the PM SVANidhi scheme have ' +
      'been brought into the same framework, with cashback on digital transactions and access to ' +
      'UPI-linked RuPay credit cards converting a payment record into a credit line [14].',
  },
  { t: 'h3', text: '3.10.3  India in international comparison' },
  {
    t: 'p', text:
      'India’s position is unusual in two respects. The first is scale: UPI accounted for close ' +
      'to 49 per cent of global real-time payment transaction volume in 2024 and is recognised ' +
      'by the IMF as the world’s largest retail fast payment system by volume [3], [18]. The ' +
      'second is the pricing model. Most comparable systems abroad charge merchants something; ' +
      'the BIS notes that in India there are no charges for UPI-based payments to the user, with ' +
      'an interchange fee applying only to merchant transactions made through prepaid instruments ' +
      '[20]. India has chosen to treat retail payment as a public utility, and the adoption ' +
      'curve documented in this chapter is in part a consequence of that choice.',
  },
  { t: 'pb' },

  // ================================================== 3.11 DATA ANALYSIS ====
  { t: 'h2', text: '3.11  Analysis of data' },
  {
    t: 'p', text:
      'Eight data sets follow. Each is presented in the four-part structure adopted for this ' +
      'project: the table or graph, an explanation of what the data show, an analysis of what ' +
      'they mean, and an interpretation stating what may and may not be concluded.',
  },

  // ------------------------------------------------------------- DATA SET 1
  { t: 'h3', text: 'Data Set 1  ·  The growth of UPI transactions, FY 2016-17 to FY 2025-26' },
  {
    t: 'table',
    widths: [1900, 2000, 2100, 1513, 1513],
    head: ['Financial year', 'Volume (crore)', 'Value (₹ lakh crore)', 'Volume growth', 'Value growth'],
    rows: [
      ['2016-17', '2', '0.07', '—', '—'],
      ['2017-18', '92', '1.10', '4,500%', '1,471%'],
      ['2018-19', '535', '8.77', '482%', '697%'],
      ['2019-20', '1,252', '21.32', '134%', '143%'],
      ['2020-21', '2,233', '41.04', '78%', '92%'],
      ['2021-22', '4,597', '84.16', '106%', '105%'],
      ['2022-23', '8,375', '139.00', '82%', '65%'],
      ['2023-24', '13,116', '199.90', '57%', '44%'],
      ['2024-25', '18,587', '261.00', '42%', '31%'],
      ['2025-26', '24,162', '314.00', '30%', '20%'],
    ],
    note:
      'Table 1. Sources: NPCI UPI product statistics [1], with year-wise figures as reported in ' +
      'Press Information Bureau releases [2], [10], [13], [16]. Growth rates are computed by the ' +
      'author from the volume and value columns. Figures are rounded as published.',
  },
  { t: 'figure', file: 'fig01_upi_volume.png', caption: 'Figure 1. UPI transaction volume, FY 2016-17 to FY 2025-26.' },
  { t: 'figure', file: 'fig02_upi_value.png', caption: 'Figure 2. UPI transaction value, FY 2016-17 to FY 2025-26.' },

  { t: 'h4', text: 'Explanation of the data' },
  {
    t: 'p', text:
      'The table records the number and value of UPI transactions in each financial year since ' +
      'the platform’s launch, together with year-on-year growth rates calculated from those two ' +
      'columns. Volume rose from 2 crore transactions to 24,162 crore, and value from ₹0.07 lakh ' +
      'crore to approximately ₹314 lakh crore, over ten years [2].',
  },
  { t: 'h4', text: 'Analysis' },
  {
    t: 'p', text:
      'Three patterns are visible. First, growth rates are decelerating in percentage terms — ' +
      'from 4,500 per cent to 30 per cent — while absolute increments continue to rise. The ' +
      'increase in FY 2025-26 alone, some 5,575 crore transactions, exceeds the entire volume of ' +
      'FY 2021-22. This is the ordinary arithmetic of a maturing base and should not be read as ' +
      'a slowdown in real terms.',
  },
  {
    t: 'p', text:
      'Second, the curve has no plateau. Ten consecutive years of growth, through a pandemic and ' +
      'well past the point at which novelty could explain adoption, indicate a durable change in ' +
      'payment behaviour rather than a fashion.',
  },
  {
    t: 'p', text:
      'Third, and most importantly, volume growth has outpaced value growth in every year since ' +
      'FY 2021-22. In FY 2025-26 volume grew 30 per cent while value grew 20 per cent. Since the ' +
      'average transaction size is value divided by volume, this divergence necessarily means ' +
      'that the typical UPI payment is shrinking. Data Set 2 pursues this directly.',
  },
  { t: 'h4', text: 'Interpretation' },
  {
    t: 'p', text:
      'UPI has moved from an experiment to the default retail payment mechanism of the Indian ' +
      'economy, and it now handles the great majority of retail digital transactions. The ' +
      'divergence between volume and value growth is the first indication, developed further ' +
      'below, that the platform is not merely absorbing payments that already existed in another ' +
      'form but is reaching into a class of very small transactions that were previously ' +
      'settled in cash or not made at all. Hypothesis H1 is supported at this stage in its ' +
      'descriptive form; its velocity implication is tested in Data Set 4.',
  },

  { t: 'keypoint', text:
      'UPI grew from 2 crore transactions to 24,162 crore in ten years, and because volume grew faster than value in every year from FY 2021-22, the typical payment was getting smaller even as the total kept rising.' },

  // ------------------------------------------------------------- DATA SET 2
  { t: 'h3', text: 'Data Set 2  ·  The average value of a single UPI transaction' },
  {
    t: 'table',
    widths: [2200, 2300, 2300, 2226],
    head: ['Financial year', 'Value (₹ lakh crore)', 'Volume (crore)', 'Average per transaction (₹)'],
    rows: [
      ['2017-18', '1.10', '92', '1,196'],
      ['2018-19', '8.77', '535', '1,639'],
      ['2019-20', '21.32', '1,252', '1,703'],
      ['2020-21', '41.04', '2,233', '1,838'],
      ['2021-22', '84.16', '4,597', '1,831'],
      ['2022-23', '139.00', '8,375', '1,660'],
      ['2023-24', '199.90', '13,116', '1,524'],
      ['2024-25', '261.00', '18,587', '1,404'],
      ['2025-26', '314.00', '24,162', '1,300'],
    ],
    note:
      'Table 2. The average value per transaction is derived by the author as transaction value ' +
      'divided by transaction volume, using the figures in Table 1. FY 2016-17 is omitted ' +
      'because the base is too small for the ratio to be meaningful. Underlying data: [1], [2].',
  },
  { t: 'figure', file: 'fig03_ticket_size.png', caption: 'Figure 3. Average value of a single UPI transaction, FY 2017-18 to FY 2025-26.' },

  { t: 'h4', text: 'Explanation of the data' },
  {
    t: 'p', text:
      'This measure is not published directly; it is derived here by dividing each year’s ' +
      'transaction value by its volume. It answers the question: how large is a typical UPI ' +
      'payment, and is it changing? The series rises from ₹1,196 in FY 2017-18 to a peak of ' +
      '₹1,838 in FY 2020-21, and then falls steadily to ₹1,300 in FY 2025-26 — a decline of ' +
      'roughly 29 per cent from the peak.',
  },
  { t: 'h4', text: 'Analysis' },
  {
    t: 'p', text:
      'The shape of this curve tells the story of UPI’s adoption in two distinct phases.',
  },
  {
    t: 'p', text:
      'In the first phase, to FY 2020-21, the average transaction grew. This is what one expects ' +
      'when early adopters are relatively affluent, urban and comfortable with technology, and ' +
      'when the payments migrating to the platform are substantial ones — rent, fees, transfers ' +
      'between family members — that previously moved by cheque or bank transfer.',
  },
  {
    t: 'p', text:
      'In the second phase the average falls, continuously, for five years. Since total value ' +
      'continued to rise throughout, this cannot reflect a contraction in what people spend. It ' +
      'can only mean that the transactions being added at the margin are much smaller than the ' +
      'existing average, and are numerous enough to pull the mean down. The composition data ' +
      'confirm this: person-to-merchant transactions now constitute 63 per cent of volume, and ' +
      '86 per cent of those are below ₹500 [2].',
  },
  {
    t: 'p', text:
      'It should be noted that inflation works against this finding rather than producing it. ' +
      'Prices rose over the period, so a constant basket of goods would show a rising average ' +
      'transaction value. The observed decline is therefore an understatement of the shift ' +
      'towards small payments in real terms.',
  },
  { t: 'h4', text: 'Interpretation' },
  {
    t: 'p', text:
      'This is the single most important finding in the project, because it distinguishes between ' +
      'the two competing explanations of UPI’s growth. If UPI had merely digitised payments that ' +
      'already existed, the average transaction size would have remained broadly stable while ' +
      'volume rose. Instead it fell by nearly a third while volume multiplied thirteen-fold, ' +
      'which is the signature of a payment system reaching a class of transaction it did not ' +
      'previously serve — the tea, the vegetables, the auto fare.',
  },
  {
    t: 'p', text:
      'This bears directly on velocity. Fisher’s identity relates the money stock to the number ' +
      'of transactions it supports. A payment system that adds a very large number of very small ' +
      'transactions increases T substantially while adding relatively little to the value ' +
      'settled, which is precisely a rise in the frequency with which each rupee is used. ' +
      'Hypothesis H2 is supported.',
  },

  { t: 'keypoint', text:
      'The average UPI payment fell from ₹1,838 to ₹1,300 while volume rose more than ten-fold, which is the signature of a system adding small everyday payments rather than merely digitising ones that already existed.' },

  // ------------------------------------------------------------- DATA SET 3
  { t: 'h3', text: 'Data Set 3  ·  UPI within India’s wider digital payment system' },
  {
    t: 'table',
    widths: [3600, 2600, 2826],
    head: ['Indicator', 'Earlier period', 'Later period'],
    rows: [
      ['Total digital payment volume (crore)', '2,071 (FY 2017-18)', '18,737 (FY 2023-24)'],
      ['Total digital payment value (₹ lakh crore)', '1,962 (FY 2017-18)', '3,659 (FY 2023-24)'],
      ['Volume CAGR over the period', '—', '44%'],
      ['Value CAGR over the period', '—', '11%'],
      ['UPI share of retail digital payment volume', '—', '81% (FY 2024-25)'],
      ['Digital transactions, FY 2019-20 to FY 2024-25', '—', 'over 65,000 crore, worth over ₹12,000 lakh crore'],
    ],
    note: 'Table 3. Sources: Press Information Bureau releases [10], [11], [12], [14].',
  },
  { t: 'figure', file: 'fig05_digital_share.png', caption: 'Figure 5. UPI’s share of retail digital payment volume, FY 2024-25.' },

  { t: 'h4', text: 'Explanation of the data' },
  {
    t: 'p', text:
      'This data set places UPI in the context of all digital payments in India, including ' +
      'cards, wallets, NEFT, IMPS and RTGS. Total digital payment volume rose from 2,071 crore ' +
      'transactions in FY 2017-18 to 18,737 crore in FY 2023-24, a compound annual growth rate ' +
      'of 44 per cent, while value grew from ₹1,962 lakh crore to ₹3,659 lakh crore at a compound ' +
      'rate of 11 per cent [10], [11]. UPI accounted for 81 per cent of retail digital payment ' +
      'volume in FY 2024-25 [14].',
  },
  { t: 'h4', text: 'Analysis' },
  {
    t: 'p', text:
      'The contrast between the two growth rates — 44 per cent for volume against 11 per cent ' +
      'for value — repeats at the level of the whole payment system the pattern found for UPI ' +
      'alone. India’s digital payment system as a whole has been growing overwhelmingly through ' +
      'an increase in the number of payments rather than in their size.',
  },
  {
    t: 'p', text:
      'The value figures also require careful reading. Total digital payment value of ₹3,659 ' +
      'lakh crore vastly exceeds India’s GDP, because it includes wholesale settlement through ' +
      'RTGS — interbank and large corporate transfers of enormous individual size and modest ' +
      'number. This is a clear illustration of why payment value cannot be equated with economic ' +
      'output, and why the ratio computed in Data Set 4 must be described as a transactions ' +
      'proxy rather than as income velocity.',
  },
  {
    t: 'p', text:
      'That UPI carries 81 per cent of retail digital transactions by number while total digital ' +
      'value is dominated by wholesale systems is not a contradiction. It states precisely what ' +
      'UPI is: the instrument of high-frequency, low-value retail payment.',
  },
  { t: 'h4', text: 'Interpretation' },
  {
    t: 'p', text:
      'UPI is not one option among several in Indian retail payments; it is the system, with ' +
      'other instruments occupying the remaining fifth. For the purposes of this study, this ' +
      'means that changes in retail payment behaviour in India during the period may reasonably ' +
      'be attributed to UPI, since alternatives are too small a share to drive the aggregate.',
  },

  { t: 'keypoint', text:
      'UPI carries 81 per cent of India’s retail digital transactions, so changes in retail payment behaviour during this period can reasonably be attributed to it.' },

  // ------------------------------------------------------------- DATA SET 4
  { t: 'h3', text: 'Data Set 4  ·  UPI turnover relative to nominal GDP — a velocity proxy' },
  {
    t: 'table',
    widths: [2000, 2400, 2400, 2226],
    head: ['Financial year', 'UPI value (₹ lakh crore)', 'Nominal GDP (₹ lakh crore)', 'UPI ÷ GDP'],
    rows: [
      ['2022-23', '139.00', '269.50', '0.52×'],
      ['2023-24', '199.90', '295.36', '0.68×'],
      ['2024-25', '261.00', '318.07', '0.82×'],
      ['2025-26', '314.00', '346.36', '0.91×'],
    ],
    note:
      'Table 4. UPI values from [1], [2]. Nominal GDP at current prices from MoSPI provisional ' +
      'estimates [8], [9]. The ratio is computed by the author. Note a discontinuity: figures ' +
      'for FY 2022-23 and FY 2023-24 are on the 2011-12 base series, while FY 2024-25 and ' +
      'FY 2025-26 are on the revised 2022-23 base series. The break is small relative to the ' +
      'trend but the series is not perfectly continuous.',
  },
  { t: 'figure', file: 'fig04_turnover_gdp.png', caption: 'Figure 4. UPI turnover relative to nominal GDP, FY 2022-23 to FY 2025-26.' },

  { t: 'h4', text: 'Explanation of the data' },
  {
    t: 'p', text:
      'This data set constructs the closest approximation to a velocity measure that publicly ' +
      'available data permit. It expresses the total value settled over UPI in a year as a ' +
      'multiple of nominal GDP in the same year. The ratio rose from 0.52 in FY 2022-23 to 0.91 ' +
      'in FY 2025-26: by the most recent year, the value passing over UPI alone approached the ' +
      'entire annual output of the Indian economy.',
  },
  { t: 'h4', text: 'Analysis' },
  {
    t: 'p', text:
      'What this ratio does and does not measure must be stated exactly, since the risk of ' +
      'overstatement here is high.',
  },
  {
    t: 'p', text:
      'It is a transactions-turnover ratio, not income velocity. The numerator counts every ' +
      'payment, including person-to-person transfers that are not purchases of output and ' +
      'intermediate payments that GDP counts only once at final sale. The denominator counts ' +
      'final output only. The two are not commensurable in the way the ratio’s simplicity ' +
      'suggests, and the number should not be read as "each rupee now circulates 0.91 times".',
  },
  {
    t: 'p', text:
      'What the ratio does measure reliably is the rate of change. Whatever the mismatch between ' +
      'numerator and denominator, that mismatch is broadly consistent from year to year. The ' +
      'ratio therefore rose by roughly 75 per cent in three years, which means the value settled ' +
      'through this one retail instrument grew far faster than national output. Payment activity ' +
      'per unit of output has increased substantially, and this is exactly the direction the ' +
      'Cambridge formulation predicts: as the cost of transacting falls, the money balance held ' +
      'against a given volume of spending falls, and turnover rises.',
  },
  {
    t: 'p', text:
      'Two cautions temper the finding. First, some of the rise reflects payments migrating from ' +
      'cash to UPI, which raises measured turnover without any change in underlying behaviour — ' +
      'cash transactions were never counted. Second, as Section 3.4.4 noted, a rise in velocity ' +
      'is favourable only when it arises from lower transaction costs rather than from a flight ' +
      'from money. In this case the mechanism is plainly the former: India experienced no ' +
      'monetary disorder during the period, and the rise coincides with the documented collapse ' +
      'in the cost and friction of paying.',
  },
  { t: 'h4', text: 'Interpretation' },
  {
    t: 'p', text:
      'Hypothesis H1 is supported, with the qualification that what has been demonstrated is a ' +
      'rise in measured transactions turnover rather than in income velocity, and that part of ' +
      'the rise reflects the migration of previously invisible cash payments into a measured ' +
      'system. Both effects are real and both matter, but they are not the same thing, and the ' +
      'available data cannot separate them. This is the honest limit of what a study based on ' +
      'published aggregates can establish.',
  },

  { t: 'keypoint', text:
      'The value settled over UPI rose from 0.52 to 0.91 times India’s GDP in three years — the level of that ratio is not meaningful, but its rapid rise is, and it points to a higher transactions velocity of money.' },

  // ------------------------------------------------------------- DATA SET 5
  { t: 'h3', text: 'Data Set 5  ·  Digital payments around demonetisation' },
  {
    t: 'table',
    widths: [4200, 4826],
    head: ['Indicator', 'Value'],
    rows: [
      ['Value of specified bank notes demonetised (Nov 2016)', '₹15.4 trillion'],
      ['Share of total value of notes in circulation', '86.9%'],
      ['Share of demonetised notes returned to the RBI', 'approximately 98.96%'],
      ['Monthly digital transactions, October 2016', '71.27 crore'],
      ['Monthly digital transactions, May 2017', '111.45 crore'],
      ['Increase over the period', '56%'],
    ],
    note: 'Table 5. Sources: RBI, Macroeconomic Impact of Demonetisation [23]; PIB [24].',
  },
  { t: 'figure', file: 'fig06_demonetisation.png', caption: 'Figure 6. Monthly digital transaction volume before and after demonetisation.' },

  { t: 'h4', text: 'Explanation of the data' },
  {
    t: 'p', text:
      'On 9 November 2016 banknotes of ₹500 and ₹1,000 denominations, valued at ₹15.4 trillion ' +
      'and constituting 86.9 per cent of the value of notes then in circulation, ceased to be ' +
      'legal tender [23]. Monthly digital transactions rose from 71.27 crore in October 2016 to ' +
      '111.45 crore by May 2017, an increase of 56 per cent [24].',
  },
  { t: 'h4', text: 'Analysis' },
  {
    t: 'p', text:
      'Demonetisation constitutes a natural experiment of unusual severity: the supply of the ' +
      'dominant payment medium was withdrawn almost overnight, and an alternative had been ' +
      'launched only weeks earlier. The 56 per cent increase in digital transactions over seven ' +
      'months is the immediate behavioural response.',
  },
  {
    t: 'p', text:
      'The response must not be overstated. Approximately 98.96 per cent of the demonetised ' +
      'notes returned to the banking system [23], indicating that the currency was replaced ' +
      'rather than permanently displaced, and cash usage recovered substantially in the ' +
      'following years. Demonetisation did not by itself convert India into a digital economy.',
  },
  {
    t: 'p', text:
      'What it did accomplish is better described as a forced trial. A large number of people ' +
      'who would not otherwise have installed a payment application did so under compulsion, ' +
      'and a large number of merchants who would not otherwise have accepted digital payment ' +
      'learned to. Some of that behaviour persisted after the compulsion was removed. The ' +
      'lasting effect was on familiarity and infrastructure rather than on the immediate ' +
      'composition of payments.',
  },
  { t: 'h4', text: 'Interpretation' },
  {
    t: 'p', text:
      'Demonetisation accelerated UPI’s adoption at a formative moment but did not cause its ' +
      'sustained growth, which continued long after cash supply had normalised and at rates far ' +
      'exceeding anything observed in 2016-17. The episode is better understood as having ' +
      'removed an adoption barrier — the effort of learning something new — than as having ' +
      'changed the underlying economics of paying.',
  },

  { t: 'keypoint', text:
      'Demonetisation produced a 56 per cent jump in digital payments, but about 99 per cent of the currency came back, so it accelerated UPI’s adoption without causing its sustained growth.' },

  // ------------------------------------------------------------- DATA SET 6
  { t: 'h3', text: 'Data Set 6  ·  UPI growth before, during and after COVID-19' },
  {
    t: 'table',
    widths: [2200, 2400, 2200, 2226],
    head: ['Financial year', 'Volume (crore)', 'Growth', 'Period'],
    rows: [
      ['2019-20', '1,252', '134%', 'Pre-pandemic'],
      ['2020-21', '2,233', '78%', 'Pandemic'],
      ['2021-22', '4,597', '106%', 'Pandemic'],
      ['2022-23', '8,375', '82%', 'Post-pandemic'],
      ['2023-24', '13,116', '57%', 'Post-pandemic'],
    ],
    note: 'Table 6. Volumes from [1], [2], [10], [13]. Growth rates computed by the author.',
  },
  { t: 'figure', file: 'fig07_covid.png', caption: 'Figure 7. UPI transaction volume before, during and after the COVID-19 pandemic.' },

  { t: 'h4', text: 'Explanation of the data' },
  {
    t: 'p', text:
      'The table isolates the pandemic years. UPI volume grew 78 per cent in FY 2020-21, the ' +
      'year of the most severe restrictions, and then 106 per cent in FY 2021-22 — a rate higher ' +
      'than the year before it. Volume more than tripled between FY 2019-20 and FY 2021-22.',
  },
  { t: 'h4', text: 'Analysis' },
  {
    t: 'p', text:
      'The pattern is initially surprising. FY 2020-21 saw India’s real output contract, and one ' +
      'would expect a payment system to shrink with the economy it serves. UPI volume grew 78 ' +
      'per cent instead. Two forces account for this.',
  },
  {
    t: 'p', text:
      'The first is substitution: with movement restricted and physical contact discouraged, ' +
      'payments that would have been made in cash were made digitally instead. This ' +
      'redistributes payments between media without increasing their number.',
  },
  {
    t: 'p', text:
      'The second is adoption, and it is the more consequential. Merchants who had resisted ' +
      'digital acceptance adopted it because customers required it, and consumers who had ' +
      'avoided digital payment learned it because the alternative was unavailable. This ' +
      'expanded the addressable base permanently.',
  },
  {
    t: 'p', text:
      'The evidence that adoption dominated substitution lies in what happened next. If the ' +
      'pandemic surge had been purely substitution, growth would have reversed once normal ' +
      'commerce resumed. Instead FY 2021-22 grew faster than FY 2020-21, and growth continued at ' +
      '82 per cent and 57 per cent in the two following years, from a base many times larger. ' +
      'The change did not unwind.',
  },
  { t: 'h4', text: 'Interpretation' },
  {
    t: 'p', text:
      'COVID-19 functioned as a second and more durable forcing event than demonetisation. The ' +
      'contrast between the two episodes is instructive: demonetisation removed the alternative ' +
      'for a period of months and adoption partially reverted, while the pandemic lasted long ' +
      'enough for digital payment to become habitual. Habits, unlike compliance, survive the ' +
      'removal of the constraint that formed them.',
  },

  { t: 'keypoint', text:
      'UPI grew faster after the pandemic (106 per cent) than during its worst year (78 per cent), which shows the change had become a habit rather than reverting once cash was available again.' },

  // ------------------------------------------------------------- DATA SET 7
  { t: 'h3', text: 'Data Set 7  ·  Financial inclusion, digitalisation and global standing' },
  {
    t: 'table',
    widths: [4000, 2500, 2526],
    head: ['Indicator', 'Earlier', 'Later'],
    rows: [
      ['RBI Financial Inclusion Index', '64.2 (Mar 2024)', '67.0 (Mar 2025)'],
      ['RBI Digital Payments Index (Mar 2018 = 100)', '465.33 (Sep 2024)', '493.22 (Mar 2025)'],
      ['PMJDY beneficiaries', '—', '55.98 crore (Aug 2025)'],
      ['Share of PMJDY accounts held by women', '—', 'over 55%'],
      ['UPI users onboarded', '—', '55.49 crore (Jun 2026)'],
      ['Merchants accepting UPI', '—', 'approx. 6.5 crore (FY 2024-25)'],
      ['QR codes deployed', '—', '56.86 crore (FY 2024-25)'],
      ['India’s share of global real-time payment volume', '—', 'approx. 49% (2024)'],
    ],
    note: 'Table 7. Sources: RBI and PIB releases [3], [6], [7], [14], [16]; IMF [18].',
  },
  { t: 'figure', file: 'fig08_indices.png', caption: 'Figure 8. RBI Financial Inclusion Index and RBI Digital Payments Index.' },
  { t: 'figure', file: 'fig10_global_share.png', caption: 'Figure 10. India’s share of global real-time payment volume, 2024.' },

  { t: 'h4', text: 'Explanation of the data' },
  {
    t: 'p', text:
      'This data set assembles the principal indicators of inclusion and digitalisation. Both ' +
      'RBI composite indices rose over their most recent measurement intervals, and the ' +
      'Financial Inclusion Index improved across all three of its sub-indices — access, usage ' +
      'and quality [7]. The final row records that India accounted for approximately 49 per cent ' +
      'of global real-time payment transaction volume in 2024 [3].',
  },
  { t: 'h4', text: 'Analysis' },
  {
    t: 'p', text:
      'The rise in the usage sub-index carries more weight than the headline number. Access had ' +
      'already been largely achieved through the Jan Dhan programme; the binding constraint was ' +
      'dormancy, and the World Bank records that the share of Indian women holding inactive ' +
      'accounts fell from a third in 2021 to 18 per cent by 2024 [21]. A payment rail that a ' +
      'small vendor will accept is what converts an account from a registration into an ' +
      'instrument.',
  },
  {
    t: 'p', text:
      'The international comparison must be read with proportion in mind. India’s 49 per cent ' +
      'share of global real-time payment volume partly reflects population, and a share of ' +
      'volume is not a measure of quality. What makes it notable is the underlying policy ' +
      'difference identified by the BIS: most fast payment systems charge merchants, while ' +
      'India’s does not [20]. India has treated retail payment as a public utility, and the ' +
      'adoption curve is in part the consequence of that decision.',
  },
  {
    t: 'p', text:
      'The gap between 55.98 crore Jan Dhan beneficiaries and 55.49 crore UPI users is worth a ' +
      'moment’s attention. These are different populations measured at different dates and ' +
      'cannot be netted against one another, but their similar magnitude indicates that account ' +
      'ownership and payment capability now reach comparable shares of the adult population.',
  },
  { t: 'h4', text: 'Interpretation' },
  {
    t: 'p', text:
      'The inclusion gains are real and measurable, and the causal chain from accounts through ' +
      'usage to formalisation is visible in the indices rather than merely asserted. India’s ' +
      'international position rests on a deliberate policy choice about pricing, not on scale ' +
      'alone.',
  },

  { t: 'keypoint', text:
      'The RBI’s Financial Inclusion Index rose from 64.2 to 67.0 with usage improving fastest — the sub-index that matters, because access had already been achieved and dormancy was the real problem.' },

  // ------------------------------------------------------------- DATA SET 8
  { t: 'h3', text: 'Data Set 8  ·  Internet penetration and the rural–urban divide' },
  {
    t: 'table',
    widths: [4000, 2500, 2526],
    head: ['Indicator', 'Urban', 'Rural'],
    rows: [
      ['Internet subscribers, Aug 2025 (million)', '579.46', '423.39'],
      ['Internet subscribers per 100 people, Aug 2025', '113.83', '46.73'],
      ['Tele-density, Dec 2025', '148.92%', '59.63%'],
      ['Telecom subscribers, Dec 2025 (million)', '762.44', '543.70'],
    ],
    note:
      'Table 8. Source: TRAI telecom subscription data and performance indicator reports [22]. ' +
      'Total broadband subscribers stood at 999.81 million as at 31 October 2025, and total ' +
      'telecom subscribers at 1,306.14 million as at 31 December 2025, giving an overall ' +
      'tele-density of 91.74 per cent.',
  },
  { t: 'figure', file: 'fig09_divide.png', caption: 'Figure 9. Internet subscribers and internet penetration, rural and urban India.' },

  { t: 'h4', text: 'Explanation of the data' },
  {
    t: 'p', text:
      'UPI requires a connected device, so internet penetration sets the ceiling on how ' +
      'inclusive it can be. India had 999.81 million broadband subscribers as at 31 October 2025 ' +
      '[22]. Urban internet penetration stood at 113.83 subscribers per 100 people against a ' +
      'rural figure of 46.73 — a ratio of roughly 2.4 to 1.',
  },
  { t: 'h4', text: 'Analysis' },
  {
    t: 'p', text:
      'The urban figure exceeds 100 per 100 people because the measure counts subscriptions ' +
      'rather than persons, and many urban users hold more than one. This is a reminder to read ' +
      'the rural number as an upper bound on the share of rural individuals connected: if some ' +
      'rural users hold multiple subscriptions, fewer than 46.73 per cent of rural people are ' +
      'actually online.',
  },
  {
    t: 'p', text:
      'In absolute terms the gap is narrower than the penetration ratio implies — 579.46 million ' +
      'urban subscribers against 423.39 million rural — because rural India is more populous. ' +
      'The two panels of Figure 9 therefore tell complementary stories: rural India represents a ' +
      'large and growing absolute market, but a much smaller proportion of rural people are ' +
      'reached.',
  },
  {
    t: 'p', text:
      'This constraint is a connectivity constraint rather than an acceptance constraint. The ' +
      'Payments Infrastructure Development Fund has deployed some 5.45 crore digital touch ' +
      'points in tier-3 to tier-6 centres [14], so the difficulty is not that rural merchants ' +
      'lack QR codes. It is that a substantial share of rural residents cannot reliably reach ' +
      'the network on which the codes depend.',
  },
  { t: 'h4', text: 'Interpretation' },
  {
    t: 'p', text:
      'Hypothesis H3 is supported. The benefits of UPI documented throughout this chapter accrue ' +
      'unequally, and the inequality is structural rather than behavioural: it follows the ' +
      'distribution of connectivity. Any policy intended to extend the gains of digital payment ' +
      'further into rural India must therefore address the telecommunications constraint, since ' +
      'payment-system measures alone cannot overcome it.',
  },
  { t: 'keypoint', text:
      'Rural internet penetration is 46.73 per 100 people against an urban 113.83, so what limits UPI’s reach in rural India is connectivity, not merchant acceptance.' },

  { t: 'pb' },
];

module.exports = { CH3 };
