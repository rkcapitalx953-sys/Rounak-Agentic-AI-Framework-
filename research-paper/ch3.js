/** Chapter 3: Review of Literature. */

const CH3 = [
  { t: 'h1', text: '3.  Review of Literature' },
  {
    t: 'p', text:
      'This chapter reviews what is already known: the evolution of digital payments, the ' +
      'theory of the velocity of money, the empirical literature connecting payments to ' +
      'economic activity, the policy framework, and the principal criticisms of the system. ' +
      'It establishes the concepts and the prior findings against which the original ' +
      'analysis of Chapter 4 is carried out.',
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
      'Chapter 5 but cannot settle.',
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

];

module.exports = { CH3 };
