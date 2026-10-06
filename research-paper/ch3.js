/** Chapter 3: Review of Literature. */

const CH3 = [
  { t: 'h1', text: '3.  Review of Literature' },
  {
    t: 'p', text:
      'This chapter sets out what is already known. It covers how digital payments developed, the ' +
      'theory of the velocity of money, the research linking payments to economic activity, the ' +
      'policies behind UPI, and the main criticisms made of it. These are the ideas and earlier ' +
      'findings against which my own analysis in Chapter 4 is carried out.',
  },

  // -------------------------------------------------------------------- 3.1
  { t: 'h2', text: '3.1  Meaning and evolution of digital payments' },
  {
    t: 'p', text:
      'India did not arrive at UPI in one step. Each earlier system solved one problem and left ' +
      'another behind.',
  },
  {
    t: 'p', text:
      'Electronic transfers between banks came first, through RTGS and NEFT. These were reliable ' +
      'but built for institutions. They worked in batches or only during banking hours. The payer ' +
      'had to know the receiver’s account number and branch code. They were meant for large ' +
      'payments. NPCI then introduced the Immediate Payment Service, which removed the limit of ' +
      'banking hours. For the first time, retail transfers could be made at any time of day.',
  },
  {
    t: 'p', text:
      'Card networks solved a different problem, which was paying at a shop counter. But they ' +
      'brought costs of their own. Accepting cards needed a machine, and the shopkeeper paid a ' +
      'fee on every sale. Those costs shut out exactly the small traders who make up most of ' +
      'Indian retail. Mobile wallets then appeared and made acceptance cheaper, but they created ' +
      'a worse problem. Each wallet was a closed loop. Money held in one company’s wallet could ' +
      'not reach a user of another, so the market split into networks that could not reach each ' +
      'other.',
  },
  {
    t: 'p', text:
      'UPI’s contribution was to treat the network itself as a public good. Instead of building a ' +
      'better wallet, NPCI wrote a standard that any wallet, bank or app could adopt, and made ' +
      'them all settle through the same system. The Bank for International Settlements calls ' +
      'designs like this digital public infrastructure. It means open systems that anyone can ' +
      'connect to and that support services used across society. The BIS treats fast payment ' +
      'systems as the clearest example of this, whether the operator is public or private [20].',
  },

  // -------------------------------------------------------------------- 3.2
  { t: 'h2', text: '3.2  UPI and its features' },
  {
    t: 'p', text:
      'Six features set UPI apart from what came before. Together they explain the pattern of ' +
      'adoption described later in this chapter.',
  },
  {
    t: 'bullets', items: [
      'Interoperability. Any app can pay any account at any member bank. By FY 2025-26 there were ' +
      '703 banks on the platform, up from 44 in FY 2016-17 [2].',
      'No account details needed. A UPI address or a QR code replaces the account number and ' +
      'branch code. This removes something to remember and a common source of mistakes.',
      'Always available. Payment is instant and the system runs without a break, including on ' +
      'holidays.',
      'Free for the user. There is no charge to the payer. Small shopkeepers pay no Merchant ' +
      'Discount Rate on payments up to ₹2,000, because the Government pays them an incentive of ' +
      '0.15 per cent of the value instead [14].',
      'Two-factor security built in. Every payment needs a PIN, and the app is tied to the ' +
      'customer’s registered mobile number [28].',
      'Easy to extend. The same system now carries standing instructions, credit lines, payments ' +
      'abroad and UPI-linked credit cards, without changing anything the user sees.',
    ],
  },

  // -------------------------------------------------------------------- 3.3
  { t: 'h2', text: '3.3  The growth of UPI transactions in India' },
  {
    t: 'p', text:
      'The full growth record appears in Data Set 1. Two points about it are worth making here, ' +
      'because they shape how the rest of this chapter should be read.',
  },
  {
    t: 'p', text:
      'The first is that growth has kept going rather than spiking and flattening. A system that ' +
      'grows a thousand times in three years and then stops has found a small niche. A system ' +
      'that keeps growing for ten years has changed a habit. UPI volume rose in every single year ' +
      'of the period studied, including years long after the novelty had worn off.',
  },
  {
    t: 'p', text:
      'The second is that volume has grown faster than value, year after year. This is not a ' +
      'statistical oddity. It is the most useful fact in the whole data set, and Data Set 2 is ' +
      'devoted to it. It means the typical UPI payment has been getting smaller, which tells us ' +
      'something about what kind of spending is moving onto the platform.',
  },

  // -------------------------------------------------------------------- 3.4
  { t: 'h2', text: '3.4  The concept of the velocity of money' },
  {
    t: 'p', text:
      'Velocity is one of the oldest ideas in monetary economics and one of the most often ' +
      'misused. This section explains the theory carefully, because the claims made later in the ' +
      'project depend on getting it right.',
  },
  { t: 'h3', text: '3.4.1  The equation of exchange' },
  {
    t: 'p', text:
      'Irving Fisher’s equation of exchange says that the total value of payments made in an ' +
      'economy over a period must equal the total value of what was exchanged:',
  },
  { t: 'equation', text: 'M × V  =  P × T' },
  {
    t: 'p', text:
      'Here M is the money stock, V is transactions velocity, P is the average price and T is the ' +
      'number of transactions. This is an identity, which means it is true by the way it is ' +
      'defined and not because of any assumption. Its value lies in what it forces us to see. If ' +
      'the money stock stays the same and the number of transactions rises, then velocity must ' +
      'have risen.',
  },
  { t: 'h3', text: '3.4.2  Income velocity and transactions velocity' },
  {
    t: 'p', text:
      'T cannot be observed directly, so economists usually use the income form of the equation. ' +
      'In this version, total transactions are replaced by national income:',
  },
  { t: 'equation', text: 'V  =  (P × Y)  ÷  M' },
  {
    t: 'p', text:
      'This is income velocity, and it is the more cautious measure. It counts only payments made ' +
      'for newly produced goods and services. Transactions velocity counts every payment. That ' +
      'includes money moved between a person’s own accounts, money repaid to a friend, and a ' +
      'wholesaler paying a distributor for goods that enter GDP only once, at the final sale.',
  },
  {
    t: 'p', text:
      'The gap between the two is large, and it always runs the same way. A payment system that ' +
      'makes transfers easy will raise transactions velocity a great deal and income velocity ' +
      'much less. That is because most of the extra payments it allows are not purchases of final ' +
      'output. So any study that says a payment system raised "the velocity of money", without ' +
      'saying which velocity, should be treated with care. This project therefore reports a ' +
      'measure of transactions velocity in Data Set 4, and labels it clearly as one.',
  },
  { t: 'h3', text: '3.4.3  The Cambridge approach and the demand for money' },
  {
    t: 'p', text:
      'The Cambridge cash-balance approach says the same thing from the other direction. It ' +
      'writes M = k × P × Y, where k is the share of income people choose to keep as money. ' +
      'Velocity is simply one divided by k. So a rise in velocity is exactly the same statement ' +
      'as a fall in the share of income held idle as money.',
  },
  {
    t: 'p', text:
      'This version makes the link to payment technology easy to see. Keynes pointed out that ' +
      'people hold money for transactions because income and spending do not arrive at the same ' +
      'time. They need a balance to bridge that gap. A system that lets them transfer money ' +
      'instantly, at any hour, from an account that earns interest makes the bridge smaller. So ' +
      'balances fall compared with spending, k falls, and V rises. This is how UPI could ' +
      'plausibly affect velocity, and it is what this project tests.',
  },
  { t: 'h3', text: '3.4.4  What velocity does not tell us' },
  {
    t: 'p', text:
      'One warning is needed. A rise in velocity is not by itself a sign of a healthy economy. ' +
      'Velocity rises sharply during hyperinflation, when holding money is punished and people ' +
      'spend at once. It falls in uncertain times, when people save for safety. Faster ' +
      'circulation is only a good sign when it comes from lower costs of paying, and not from ' +
      'people fleeing money itself. This difference matters for how Data Set 4 is read.',
  },

  // -------------------------------------------------------------------- 3.5
  { t: 'h2', text: '3.5  Digital payments and the circulation of money' },
  {
    t: 'p', text:
      'The Reserve Bank treats the link between digital payments and the demand for cash as a ' +
      'policy matter, not just an academic one. Payments Vision 2025 lists reducing cash in ' +
      'circulation, as a share of GDP, among its goals. It notes that India’s ratio is high ' +
      'compared with other countries, and that the demand for cash grows with both output and ' +
      'inflation [26].',
  },
  {
    t: 'p', text:
      'Digital payments do not reduce the demand for cash by making people poorer. They change ' +
      'the form in which wealth is held. Money kept in a bank account, and spendable instantly ' +
      'through a phone, does the job cash used to do. The difference is that it stays inside the ' +
      'banking system, where it can be lent out. The Reserve Bank tracks this shift through its ' +
      'Digital Payments Index, which uses March 2018 as a base of 100. It stood at 465.33 in ' +
      'September 2024 and 493.22 in March 2025 [6].',
  },
  {
    t: 'p', text:
      'Evidence on household behaviour points the same way. The Department of Financial Services ' +
      'study of February 2026 found that users of UPI and RuPay reported a clear fall in both ' +
      'cash use and ATM withdrawals. Of those users, 74 per cent said speed of payment was the ' +
      'main advantage [15].',
  },

  // -------------------------------------------------------------------- 3.6
  { t: 'h2', text: '3.6  Digital payments and economic activity' },
  {
    t: 'p', text:
      'Research on whether fast payment systems affect real activity is still developing. It is ' +
      'also more careful than most popular writing on the subject.',
  },
  {
    t: 'p', text:
      'The Bank for International Settlements studied 86,163 apps across 95 countries between ' +
      '2012 and 2022. It found that launching a fast payment system increases the use of digital ' +
      'finance apps, and that the effect is largest in lower-income countries. The effect was ' +
      'strongest for apps built by new fintech and big-tech firms rather than by established ' +
      'banks. It was also larger where the central bank took an active role, where membership was ' +
      'open to all, and where settlement happened in real time [20]. India’s system has all three ' +
      'of those features.',
  },
  {
    t: 'p', text:
      'The International Monetary Fund studied interoperability using data on every UPI ' +
      'transaction. It found that digital payments later grew fastest in those districts where ' +
      'the payment market had been most divided beforehand, and where joining it together ' +
      'therefore helped most [18]. This comes closer to showing cause and effect than most work ' +
      'in the field, because it compares districts that received different sized changes rather ' +
      'than simply comparing before with after.',
  },
  {
    t: 'p', text:
      'Evidence from similar economies points the same way. A study of thirty-three Indonesian ' +
      'provinces found that digital payments had a significant effect on regional income and ' +
      'consumption, both before and after a structural break linked to COVID-19. The effect was ' +
      'larger after the break [29]. Indonesia is not India, so this finding cannot simply be ' +
      'transferred. It is quoted here to show that the relationship can be detected in this kind ' +
      'of data, not as a measurement of what happened in India.',
  },
  {
    t: 'p', text:
      'For India itself, the most useful evidence is about behaviour rather than national ' +
      'figures. One study surveyed 276 people and followed up with 20 interviews. About 75 per ' +
      'cent said they spent more because of UPI. Many explained that digital money felt less ' +
      'real, so they felt less reluctant to part with it. In the same study, 95.2 per cent found ' +
      'UPI convenient and 91.5 per cent were satisfied with it [25]. The sample is small and the ' +
      'answers are self-reported, so the results cannot be applied to the whole country. But the ' +
      'study shows something national figures cannot see, and it carries a warning as well as a ' +
      'finding. A system that makes spending easier also makes overspending easier.',
  },
  {
    t: 'p', text:
      'The evidence from shopkeepers is stronger. The Department of Financial Services study ' +
      'found that 94 per cent of small merchants had adopted UPI. About 72 per cent were ' +
      'satisfied with digital payments, giving faster transactions and better record-keeping as ' +
      'their reasons. Most importantly for this project, 57 per cent said their sales had risen ' +
      'after they adopted digital payment [15]. These are reported figures, not audited accounts, ' +
      'and a shopkeeper may credit a payment method for a gain that had other causes. Even so, a ' +
      'majority reporting higher sales is the most direct evidence available that the effect ' +
      'reaches real activity, and not just the way payments are made.',
  },

  // -------------------------------------------------------------------- 3.7
  { t: 'h2', text: '3.7  Financial inclusion and the digital economy' },
  {
    t: 'p', text:
      'Financial inclusion in India was built in layers, and the payment layer is what made the ' +
      'others useful. A Jan Dhan account that is opened and never used is just an entry in a ' +
      'register. The same account, connected to a payment system that a vegetable seller will ' +
      'accept, becomes a working financial relationship.',
  },
  {
    t: 'p', text:
      'The Reserve Bank’s Financial Inclusion Index records this change. It rose from 64.2 in ' +
      'March 2024 to 67.0 in March 2025, and all three of its parts improved: access, usage and ' +
      'quality [7]. The rise in usage is the one that matters most. Access had already been ' +
      'largely achieved through the Jan Dhan scheme, which had reached over 55.98 crore people by ' +
      'August 2025, more than 55 per cent of them women [7].',
  },
  {
    t: 'p', text:
      'The World Bank’s Global Findex 2025 surveyed about 145,000 adults in 141 countries and ' +
      'provides the international standard for measuring this. It records one Indian finding that ' +
      'is directly relevant. The share of Indian women holding inactive accounts fell from a ' +
      'third in 2021 to 18 per cent by 2024 [21]. Inactive accounts are exactly the problem that ' +
      'a usable payment system solves.',
  },
  {
    t: 'p', text:
      'Beyond payments, the record of transactions has itself become valuable. The Reserve Bank ' +
      'built the Unified Lending Interface on this foundation. It gives approved lenders easy ' +
      'access to verified information about borrowers, which turns a payment history into proof ' +
      'of creditworthiness [20]. For a small trader who has never had audited accounts, this is ' +
      'how accepting digital payments can become access to a loan.',
  },

  // -------------------------------------------------------------------- 3.8
  { t: 'h2', text: '3.8  Government initiatives promoting digital payments' },
  {
    t: 'p', text:
      'Adoption on this scale did not happen on its own. Four kinds of government action shaped ' +
      'it.',
  },
  {
    t: 'bullets', items: [
      'Pricing. The Government has kept UPI free for users and has paid the system for the income ' +
      'it gives up, rather than letting shopkeepers be charged. Several schemes have paid banks a ' +
      'percentage of the transaction value in place of a Merchant Discount Rate, including a ' +
      '₹1,500 crore scheme for small merchant payments [14], [15].',
      'Infrastructure. The Payments Infrastructure Development Fund pays part of the cost of ' +
      'putting acceptance infrastructure into smaller towns. By 31 October 2025 about 5.45 crore ' +
      'digital payment points had been set up through the Fund in tier-3 to tier-6 centres. By ' +
      'FY 2024-25, some 56.86 crore QR codes had been given to about 6.5 crore merchants [14].',
      'Identity and accounts. The Jan Dhan, Aadhaar and Mobile combination provided what was ' +
      'needed first: an account to receive money, an identity to prove who the holder was, and a ' +
      'phone to pay from.',
      'Going international. Through NPCI International Payments Limited, UPI payments and money ' +
      'transfers have been extended to eleven foreign countries. Acceptance began in Cambodia in ' +
      'June 2026, and a money transfer link with the Maldives’ instant payment system started in ' +
      'July 2026 [17].',
    ],
  },
  {
    t: 'p', text:
      'The cost of this policy should be stated honestly. Free payments are not costless ' +
      'payments. The cost has simply moved from the shopkeeper to the Government. Whether that is ' +
      'worth it depends on whether the gains in recorded activity, inclusion and tax collection ' +
      'are larger than the amount spent. This project raises that question in Chapter 5 but ' +
      'cannot answer it.',
  },

  // -------------------------------------------------------------------- 3.9
  { t: 'h2', text: '3.9  Challenges faced by digital payment systems' },
  {
    t: 'p', text:
      'Four problems come up again and again in the research and in policy documents. An honest ' +
      'assessment has to give them proper weight.',
  },
  {
    t: 'p', bold: true, text: 'Cyber fraud and tricking users.',
  },
  {
    t: 'p', text:
      'Cybersecurity incidents in India rose from 10.29 lakh in 2022 to 22.68 lakh in 2024 [28]. ' +
      'The technology itself is not the main weak point. Tying the app to one device, and ' +
      'requiring a PIN, make it hard to break in. The weak point is the user, who can be tricked ' +
      'into approving a payment. NPCI runs a fraud-monitoring system that uses machine learning ' +
      'to raise alerts and block suspicious payments. The Citizen Financial Cyber Fraud Reporting ' +
      'and Management System has saved more than ₹1,200 crore across more than 4.7 lakh ' +
      'complaints [28]. A system used by over 55 crore people attracts attacks in proportion to ' +
      'its size.',
  },
  { t: 'p', bold: true, text: 'Dependence on infrastructure.' },
  {
    t: 'p', text:
      'A digital payment needs electricity, a working phone and a network signal, all at the same ' +
      'moment. Cash needs none of these. So as UPI replaces cash, the risk becomes concentrated. ' +
      'A breakdown that would once have been an inconvenience now stops trade.',
  },
  { t: 'p', bold: true, text: 'Unequal access.' },
  {
    t: 'p', text:
      'Data Set 8 measures the digital divide. In August 2025 rural areas had 46.73 internet ' +
      'subscribers per 100 people, against 113.83 in urban areas [22]. A payment system that can ' +
      'only be reached through the internet cannot include more people than the internet itself ' +
      'reaches.',
  },
  { t: 'p', bold: true, text: 'Risk to spending habits.' },
  {
    t: 'p', text:
      'The finding that about 75 per cent of surveyed users spent more, because digital money ' +
      'felt less real [25], is a genuine cost. It matters most for low-income households, who ' +
      'have little room to absorb overspending. The same ease that raises velocity also removes a ' +
      'restraint that cash used to provide by accident.',
  },

  // ------------------------------------------------------------------- 3.10
  { t: 'h2', text: '3.10  Case studies' },
  { t: 'h3', text: '3.10.1  Urban and rural India' },
  {
    t: 'p', text:
      'The rural story is one of fast catching up from a low start, achieved by deliberately ' +
      'paying for acceptance infrastructure rather than waiting for the market. The Payments ' +
      'Infrastructure Development Fund exists for exactly this reason. Putting a QR code in a ' +
      'tier-6 town is not profitable at the small volumes available there at first. By October ' +
      '2025 the Fund had set up 5.45 crore payment points in tier-3 to tier-6 centres [14]. The ' +
      'gap that remains is not mainly about acceptance, though. It is about connectivity, and ' +
      'Data Set 8 measures it.',
  },
  { t: 'h3', text: '3.10.2  Small businesses and consumers' },
  {
    t: 'p', text:
      'For the small shopkeeper, UPI solved a problem that cards never could. A card machine ' +
      'costs money, and a fee on every sale eats into a thin margin. A printed QR code costs ' +
      'nothing, and below ₹2,000 there is no fee at all [14]. The result is that almost everyone ' +
      'accepts it. Of small merchants surveyed, 94 per cent had adopted UPI and 57 per cent said ' +
      'their sales rose afterwards [15]. Street vendors under the PM SVANidhi scheme have been ' +
      'brought into the same system, with cashback on digital payments and access to UPI-linked ' +
      'RuPay credit cards that turn a payment record into a line of credit [14].',
  },
  { t: 'h3', text: '3.10.3  India in international comparison' },
  {
    t: 'p', text:
      'India stands out in two ways. The first is size. UPI handled close to 49 per cent of all ' +
      'real-time payments made in the world in 2024, and the IMF calls it the largest retail fast ' +
      'payment system by volume [3], [18]. The second is pricing. Most similar systems abroad ' +
      'charge shopkeepers something. The BIS notes that in India there is no charge to the user ' +
      'for UPI, and a fee applies only to merchant payments made through prepaid instruments like ' +
      'wallets [20]. India chose to treat retail payment as a public service, and the adoption ' +
      'described in this chapter is partly a result of that choice.',
  },
  { t: 'pb' },

];

module.exports = { CH3 };
