/**
 * Viva cheat sheet — a companion to the research paper.
 * Build with:  node build.js viva
 *
 * Page references in square brackets point to the printed page numbers of
 * UPI_Research_Paper.docx.
 */

const VIVA = [
  // ------------------------------------------------------------- cover -----
  { t: 'spacer', n: 3 },
  { t: 'center', text: 'VIVA CHEAT SHEET', size: 40, bold: true, color: '1a3a5c', spacing: 160 },
  { t: 'rule' },
  { t: 'spacer', n: 1 },
  {
    t: 'center', size: 24, bold: true, spacing: 200,
    text: 'Impact of UPI-Based Digital Payments on the Velocity of Money and Economic Activity in India',
  },
  {
    t: 'center', italic: true, size: 21, color: '52514e', spacing: 200,
    text: 'Everything you need to defend the project, in the order you are likely to need it',
  },
  { t: 'spacer', n: 2 },
  { t: 'center', text: 'ROUNAK ARCHANA KAMESWARAN  ·  Class XII  ·  Economics', size: 21, bold: true },
  { t: 'spacer', n: 2 },
  { t: 'rule' },
  { t: 'spacer', n: 1 },
  {
    t: 'p', italicAll: true, text:
      'How to use this. Learn Parts 1 and 2 until you can say them without looking — between ' +
      'them they cover most of what an examiner actually asks. Part 3 is the general question ' +
      'bank. Part 4 is the five hard questions and deserves the most preparation, because those ' +
      'are the ones an examiner asks when a project is good. Part 5 covers opinion and risk ' +
      'questions, and Part 6 is what to do when you are stuck. Page numbers given as "p.24" ' +
      'refer to the printed pages of the research paper.',
  },
  { t: 'pb' },

  // ============================================================ PART 1 =====
  { t: 'h1', text: 'Part 1  ·  The opening answer' },
  {
    t: 'p', text:
      'Almost every viva starts with some version of "tell me about your project". Have this ' +
      'ready. It is about sixty seconds spoken, and it sets the agenda — examiners usually ask ' +
      'their next question about something you just said, so every sentence here is a door you ' +
      'are choosing to open.',
  },
  {
    t: 'keypoint', label: 'Say this',
    text:
      'My project asks whether UPI has changed the speed at which money circulates in India. ' +
      'UPI grew from about 2 crore transactions in FY 2016-17 to over 24,000 crore in FY 2025-26. ' +
      'But the interesting part is not the size — it is that the average payment got smaller, ' +
      'from about ₹1,838 to ₹1,300. That tells me UPI did not just digitise payments that ' +
      'already existed; it added new, very small everyday payments. Using Fisher’s equation of ' +
      'exchange, more transactions on the same money stock means a higher velocity of money. I ' +
      'also found that the value settled over UPI rose from about half of India’s GDP to about ' +
      'nine-tenths of it in three years. On economic activity my conclusion is more cautious: ' +
      '57 per cent of small merchants reported higher sales after adopting digital payment, ' +
      'which is suggestive, but I cannot prove UPI caused it because smartphones, internet and ' +
      'incomes all rose in the same decade.',
  },
  {
    t: 'p', text:
      'Notice what that answer does. It names a concept (Fisher’s identity), gives three ' +
      'specific numbers, states a finding that is genuinely your own, and admits a limit. ' +
      'Examiners reward all four.',
  },

  { t: 'h2', text: 'The single sentence, if you only get one' },
  {
    t: 'keypoint', label: 'Say this',
    text:
      'UPI made very small payments worth making, and because there are now far more payments ' +
      'on roughly the same stock of money, money circulates faster.',
  },
  { t: 'pb' },

  // ============================================================ PART 2 =====
  { t: 'h1', text: 'Part 2  ·  Numbers to know cold' },
  {
    t: 'p', text:
      'You will not be asked all of these. You will be asked some of them, and hesitating over a ' +
      'number in your own project looks worse than not knowing a concept. Learn the first block ' +
      'properly; skim the rest.',
  },

  { t: 'h2', text: 'The essential eight' },
  {
    t: 'table',
    widths: [4400, 3000, 1626],
    colAlign: ['left', 'left', 'center'],
    head: ['What', 'Number', 'Page'],
    rows: [
      ['UPI volume, FY 2016-17 → FY 2025-26', '2 crore → 24,162 crore', '20'],
      ['UPI value, FY 2016-17 → FY 2025-26', '₹0.07 → ₹314 lakh crore', '20'],
      ['Average payment, peak → latest', '₹1,838 (FY 2020-21) → ₹1,300', '22'],
      ['UPI value ÷ nominal GDP', '0.52× → 0.91× in three years', '26'],
      ['UPI share of retail digital volume', '81% (FY 2024-25)', '24'],
      ['India’s share of world real-time payments', 'about 49% (2024)', '32'],
      ['Small merchants reporting higher sales', '57%', '15'],
      ['Rural vs urban internet per 100 people', '46.73 vs 113.83', '34'],
    ],
  },

  { t: 'h2', text: 'The supporting set' },
  {
    t: 'table',
    widths: [4400, 4626],
    colAlign: ['left', 'left'],
    head: ['What', 'Number'],
    rows: [
      ['Banks live on UPI', '44 (FY 2016-17) → 703 (FY 2025-26)'],
      ['UPI users onboarded', '55.49 crore (June 2026)'],
      ['Merchants accepting UPI', 'about 6.5 crore; 56.86 crore QR codes'],
      ['Composition of UPI volume', 'P2M is 63%; 86% of P2M is below ₹500'],
      ['RBI Financial Inclusion Index', '64.2 (Mar 2024) → 67.0 (Mar 2025)'],
      ['RBI Digital Payments Index', '465.33 → 493.22 (March 2018 = 100)'],
      ['PMJDY beneficiaries', '55.98 crore; over 55% women'],
      ['Demonetisation', '₹15.4 trillion withdrawn = 86.9% of note value; 98.96% returned'],
      ['Digital payments around demonetisation', '71.27 → 111.45 crore a month (+56%)'],
      ['UPI growth, pandemic years', '78% (FY 2020-21), then 106% (FY 2021-22)'],
      ['Total digital payments', '2,071 crore (FY 2017-18) → 18,737 crore (FY 2023-24), CAGR 44%'],
      ['Cybersecurity incidents', '10.29 lakh (2022) → 22.68 lakh (2024)'],
      ['Users reporting they spend more', 'about 75% in one survey'],
      ['MDR on small-merchant UPI', 'zero up to ₹2,000; Government pays 0.15% incentive'],
    ],
  },
  { t: 'pb' },

  { t: 'h2', text: 'The eight data sets in one line each' },
  {
    t: 'p', text:
      'If an examiner points at any exhibit and says "explain this", these are your answers. ' +
      'They are the same sentences printed in the call-out boxes in the paper.',
  },
  {
    t: 'table',
    widths: [1500, 7526],
    colAlign: ['left', 'left'],
    head: ['Data set', 'What it shows'],
    rows: [
      ['1  ·  p.20', 'UPI grew about 12,000-fold in volume, and volume grew faster than value every year from FY 2021-22 — so payments were getting smaller.'],
      ['2  ·  p.22', 'The average payment fell from ₹1,838 to ₹1,300 while volume rose ten-fold. This is my most important finding.'],
      ['3  ·  p.24', 'UPI is 81% of retail digital transactions, so retail payment trends in this period can fairly be attributed to it.'],
      ['4  ·  p.26', 'UPI value went from 0.52 to 0.91 times GDP. The level means little; the rise means a lot.'],
      ['5  ·  p.28', 'Demonetisation gave a 56% jump, but 99% of the cash came back — it accelerated adoption without causing it.'],
      ['6  ·  p.30', 'COVID growth was 78% then 106% — faster after the shock than during it, so the habit stuck.'],
      ['7  ·  p.32', 'Financial Inclusion Index 64.2 → 67.0, with usage rising fastest, which is the sub-index that matters.'],
      ['8  ·  p.34', 'Rural internet is 46.73 per 100 against urban 113.83 — the limit is connectivity, not acceptance.'],
    ],
  },
  { t: 'pb' },

  // ============================================================ PART 3 =====
  { t: 'h1', text: 'Part 3  ·  Question bank' },

  { t: 'h2', text: 'A.  Topic and motivation' },
  {
    t: 'qa',
    q: 'Why did you choose this topic?',
    a: 'Because I use UPI every day and wanted to know whether something that changed my own ' +
       'habits had changed the economy. The velocity of money is a concept from the syllabus that ' +
       'nobody can observe directly, and UPI gave me a way to look at it with real published data.',
  },
  {
    t: 'qa',
    q: 'What exactly is your research question?',
    a: 'Two questions. First, has UPI changed the speed at which money circulates? Second, can any ' +
       'effect on real economic activity be identified from published data? I answer the first ' +
       'more confidently than the second, and the paper says so.',
  },
  {
    t: 'qa',
    q: 'What is new in your project? Everyone knows UPI grew.',
    a: 'Agreed — the growth is not the finding. My contribution is the average transaction size in ' +
       'Table 2. That figure is not published anywhere; I derived it by dividing annual value by ' +
       'annual volume. It falls from ₹1,838 to ₹1,300, and that decline is what distinguishes ' +
       '"UPI added new payments" from "UPI digitised old ones".',
  },
  {
    t: 'qa',
    q: 'What period does your study cover, and why?',
    a: 'FY 2016-17 to FY 2025-26. FY 2016-17 is UPI’s first full year, and FY 2025-26 was the most ' +
       'recent complete year when I wrote. Ten full years also lets me look at two shocks — ' +
       'demonetisation and COVID-19.',
  },

  { t: 'h2', text: 'B.  Concepts' },
  {
    t: 'qa',
    q: 'What is the velocity of money?',
    a: 'The average number of times one unit of currency is used to buy goods and services in a ' +
       'given period. It is a behavioural property, not a physical one — it describes how quickly ' +
       'people part with money they hold.',
  },
  {
    t: 'qa',
    q: 'State the equation of exchange and explain each term.',
    a: 'M × V = P × T. M is the money stock, V is transactions velocity, P is the average price ' +
       'level, T is the volume of transactions. It is an identity — true by construction, not an ' +
       'assumption. Its use is that if M is roughly fixed and T rises, V must have risen.',
  },
  {
    t: 'qa',
    q: 'What is the Cambridge approach, and how does it relate to velocity?',
    a: 'It writes M = k × P × Y, where k is the fraction of income people hold as money. Velocity ' +
       'is the reciprocal of k, so V = 1 ÷ k. A rise in velocity and a fall in k are the same ' +
       'statement. This is the version I actually use, because UPI works by reducing how much ' +
       'cash people need to keep on hand.',
  },
  {
    t: 'qa',
    q: 'What is UPI, in one sentence?',
    a: 'A common standard, launched in 2016, that lets any bank account be paid from any app ' +
       'through a single virtual payment address — instantly, at any hour, at no cost to the user.',
  },
  {
    t: 'qa',
    q: 'What is NPCI, and why does it matter that it is not-for-profit?',
    a: 'The National Payments Corporation of India built and runs UPI under RBI guidance. Because ' +
       'it is not obliged to maximise a return on the switch itself, transactions can be routed at ' +
       'or near cost — which is why UPI is free and card payments are not.',
  },
  {
    t: 'qa',
    q: 'What is interoperability and why was it decisive?',
    a: 'It means a user of one app can pay a user of any other. Before UPI, wallets were closed ' +
       'loops — money in one could not reach another. The IMF studied UPI and found ' +
       'interoperability drove adoption, because users could join through a brand they trusted and ' +
       'later switch, which forced every provider to improve.',
  },
  {
    t: 'qa',
    q: 'Why did cards never achieve what UPI did?',
    a: 'Cost of acceptance. A card terminal costs money and the merchant pays a discount rate on ' +
       'every sale, which does not work on a ₹20 margin. A printed QR code costs nothing and, ' +
       'below ₹2,000, carries no fee at all.',
  },
  {
    t: 'qa',
    q: 'What is the difference between nominal and real GDP, and which did you use?',
    a: 'Nominal GDP is measured at current prices, so it includes inflation; real GDP is at ' +
       'constant prices. I used nominal GDP in Table 4, because UPI transaction value is also in ' +
       'current rupees — both sides of the ratio must be measured the same way.',
  },

  { t: 'h2', text: 'C.  Method' },
  {
    t: 'qa',
    q: 'What kind of data did you use?',
    a: 'Entirely secondary data — published statistics from RBI, NPCI, PIB, MoSPI and TRAI, plus ' +
       'research from the IMF, BIS and World Bank.',
  },
  {
    t: 'qa',
    q: 'Why did you not conduct a primary survey?',
    a: 'Because the thing I am studying is national in scale and is already measured ' +
       'comprehensively by the institutions that run it. A survey I could realistically conduct ' +
       'would be too small to be representative, and could not improve on RBI and NPCI data.',
  },
  {
    t: 'qa',
    q: 'How did you make sure your sources were reliable?',
    a: 'I took every number from the institution that produced it rather than from news or ' +
       'commercial websites, and each figure carries a bracketed reference to the Bibliography so ' +
       'it can be checked.',
  },
  {
    t: 'qa',
    q: 'Which figures are your own calculations?',
    a: 'Two. The average value per transaction in Table 2, and UPI turnover as a multiple of GDP ' +
       'in Table 4. Both derivations are stated under their tables so anyone can reproduce them.',
  },
  {
    t: 'qa',
    q: 'What are the limitations of your study?',
    a: 'Seven are listed on page 11. The three that matter most: it is all secondary data; ' +
       'correlation is not causation, since smartphones and incomes rose alongside UPI; and ' +
       'velocity cannot be measured directly, so Table 4 is a proxy rather than a measurement.',
  },
  {
    t: 'qa',
    q: 'What were your hypotheses?',
    a: 'Three. H1 — transactions velocity has risen. H2 — UPI added genuinely new small payments ' +
       'rather than only migrating old ones. H3 — the gains are unevenly distributed between rural ' +
       'and urban India. All three are supported, H1 with a qualification.',
  },

  { t: 'h2', text: 'D.  Findings' },
  {
    t: 'qa',
    q: 'What is your most important finding?',
    a: 'That the average UPI payment shrank from ₹1,838 to ₹1,300 while volume rose more than ' +
       'ten-fold. If UPI had only digitised existing payments, average size would have stayed ' +
       'broadly flat. It fell — so UPI reached transactions it did not previously serve: the tea, ' +
       'the vegetables, the auto fare.',
  },
  {
    t: 'qa',
    q: 'Why does a falling average transaction size matter for velocity?',
    a: 'Because Fisher’s identity is about the number of transactions, not their size. Adding a ' +
       'very large number of very small payments raises T sharply while adding little to total ' +
       'value — which is precisely an increase in how often each rupee is used.',
  },
  {
    t: 'qa',
    q: 'Did demonetisation cause UPI’s growth?',
    a: 'It accelerated it but did not cause it. Digital payments rose 56 per cent in the seven ' +
       'months after November 2016, but about 98.96 per cent of the demonetised notes came back ' +
       'and cash use recovered. Growth continued for years afterwards at rates far above 2016-17. ' +
       'Demonetisation removed the effort of trying something new; it did not change the economics.',
  },
  {
    t: 'qa',
    q: 'Why did UPI grow during COVID-19 when the economy shrank?',
    a: 'Two forces. Substitution — payments that would have been cash became digital. And ' +
       'adoption — merchants and customers who had resisted learned because there was no ' +
       'alternative. Adoption dominated, and I can show that: growth was 78 per cent in FY 2020-21 ' +
       'but 106 per cent in FY 2021-22. If it had been pure substitution it would have reversed ' +
       'once shops reopened. It did not.',
  },
  {
    t: 'qa',
    q: 'Why is demonetisation’s effect temporary but COVID’s permanent?',
    a: 'Duration. Demonetisation removed the alternative for a few months, so people complied and ' +
       'then reverted. The pandemic lasted long enough for digital payment to become a habit, and ' +
       'habits survive the removal of the constraint that formed them.',
  },
  {
    t: 'qa',
    q: 'Has UPI increased financial inclusion?',
    a: 'Yes, measurably. The RBI Financial Inclusion Index rose from 64.2 to 67.0 in one year, and ' +
       'importantly the usage sub-index rose fastest. Access was already largely solved by Jan ' +
       'Dhan — 55.98 crore accounts. The problem was dormancy, and the World Bank records the share ' +
       'of Indian women with inactive accounts falling from a third in 2021 to 18 per cent in 2024.',
  },
  {
    t: 'qa',
    q: 'Has UPI increased GDP?',
    a: 'I cannot claim that, and I deliberately do not. What I can say is that 57 per cent of small ' +
       'merchants reported higher sales after adopting digital payment, and that the BIS finds fast ' +
       'payment systems raise digital finance adoption most in lower-income economies. That is ' +
       'evidence pointing towards a real effect, not a measurement of one.',
  },
  { t: 'pb' },

  // ============================================================ PART 4 =====
  { t: 'h1', text: 'Part 4  ·  The five hard questions' },
  {
    t: 'p', text:
      'These are the questions an examiner asks when the project is good enough to probe. Each ' +
      'targets a place where the paper is more careful than it strictly needed to be — which is ' +
      'exactly why they are worth marks if you handle them well. Prepare these five above all else.',
  },

  {
    t: 'qa',
    q: 'Hard 1.  Which velocity have you measured — income or transactions?',
    a: 'Transactions velocity, and the difference matters. Income velocity counts only payments ' +
       'for newly produced output, so it moves slowly. Transactions velocity counts every payment, ' +
       'including transfers between my own accounts and payments between wholesalers. A payment ' +
       'system acts on transactions velocity directly and on income velocity only indirectly. Most ' +
       'popular writing confuses the two, so I labelled mine explicitly.',
  },
  {
    t: 'qa',
    q: 'Hard 2.  So does 0.91× mean every rupee circulates 0.91 times a year?',
    a: 'No, and that is the trap in the number. The top of the ratio counts every payment; the ' +
       'bottom counts only final output. They are not commensurable, so the level of the ratio is ' +
       'not meaningful. What is meaningful is the rate of change: the mismatch is broadly constant ' +
       'year to year, so a rise from 0.52 to 0.91 in three years tells me payment activity grew ' +
       'much faster than output.',
  },
  {
    t: 'qa',
    q: 'Hard 3.  Some of the rise is just cash payments becoming visible. Doesn’t that ruin your finding?',
    a: 'It qualifies it, and I say so in the paper. A cash payment that becomes a UPI payment ' +
       'raises measured turnover without any change in behaviour, because cash was never counted. ' +
       'The available data cannot separate that from genuinely new transactions. But Data Set 2 ' +
       'gives me an independent check: if this were only migration, average payment size would ' +
       'have held steady. It fell by 29 per cent, so at least part of the rise is genuinely new ' +
       'activity.',
  },
  {
    t: 'qa',
    q: 'Hard 4.  Inflation was positive over your period. Doesn’t that undermine the falling average?',
    a: 'It strengthens it. Rising prices push the average value of any payment up, so inflation ' +
       'works against my finding rather than producing it. The average fell anyway — which means ' +
       'the shift towards small payments is larger in real terms than the nominal figures show.',
  },
  {
    t: 'qa',
    q: 'Hard 5.  If you cannot prove causation, what have you actually established?',
    a: 'Three things. That transactions turnover per rupee of output rose sharply — that is ' +
       'measured, not inferred. That the growth consists of new small payments, not just migrated ' +
       'ones — that is the average-size evidence. And that the effect on output is supported by ' +
       'merchant and cross-country evidence but not proved, because smartphones, internet access, ' +
       'bank accounts and incomes all expanded in the same decade and published aggregates cannot ' +
       'separate them. Refusing to overclaim is a finding, not a gap.',
  },
  {
    t: 'keypoint', label: 'If pressed further on Hard 5',
    text:
      'To prove causation I would need district-level UPI data and a source of variation — for ' +
      'example comparing districts where adoption was forced early against otherwise similar ' +
      'ones. The IMF did something like this and found faster growth where interoperability ' +
      'helped most. That data is not published, which is why one of my six suggestions is that ' +
      'disaggregated payment statistics should be released.',
  },
  { t: 'pb' },

  // ============================================================ PART 5 =====
  { t: 'h1', text: 'Part 5  ·  Opinion, risks and the awkward ones' },

  {
    t: 'qa',
    q: 'Is UPI being free a good thing? Someone must be paying.',
    a: 'The exchequer pays, through incentive schemes worth about ₹1,500 crore for low-value ' +
       'merchant transactions. Whether that is worth it depends on whether the gains in ' +
       'formalisation, inclusion and tax visibility exceed the outlay — which is why one of my ' +
       'suggestions is that the scheme should be evaluated publicly and periodically.',
  },
  {
    t: 'qa',
    q: 'What are the risks of a cashless economy?',
    a: 'Three. Infrastructure dependence — a digital payment needs power, a device and a network ' +
       'at the same time, and cash needs none of them, so an outage stops commerce. Fraud — cyber ' +
       'incidents doubled from 10.29 to 22.68 lakh between 2022 and 2024. And exclusion — a system ' +
       'reachable only through the internet cannot be more inclusive than internet access itself.',
  },
  {
    t: 'qa',
    q: 'Is UPI secure?',
    a: 'The technology is strong — device binding, a compulsory PIN, and machine-learning fraud ' +
       'monitoring that declines suspicious transactions. The weak point is the user, who can be ' +
       'talked into authorising a payment. That is why my suggestion is fraud awareness delivered ' +
       'inside the apps in regional languages, rather than more technical security.',
  },
  {
    t: 'qa',
    q: 'Does UPI make people overspend?',
    a: 'The evidence suggests it can. In one survey about 75 per cent of users reported spending ' +
       'more, many saying digital money felt less tangible than cash. It is a real cost, ' +
       'especially for low-income households, and I treat it as one — the same frictionlessness ' +
       'that raises velocity removes a restraint cash imposed without anyone designing it.',
  },
  {
    t: 'qa',
    q: 'Why is rural adoption behind? Is it a lack of QR codes?',
    a: 'No — that is the point of Data Set 8. Over 5.45 crore acceptance touch points have been ' +
       'deployed in tier-3 to tier-6 centres. The constraint is connectivity: rural internet is ' +
       '46.73 subscribers per 100 people against an urban 113.83. So extending broadband is a more ' +
       'effective payments policy at the margin than more acceptance subsidy.',
  },
  {
    t: 'qa',
    q: 'India has 49 per cent of the world’s real-time payments. Isn’t that just population?',
    a: 'Partly, and I say so. Volume share is not a measure of quality. What makes it notable is ' +
       'the policy difference: most fast payment systems abroad charge merchants, and India ' +
       'chose not to. The adoption is partly a consequence of treating payment as a public utility.',
  },
  {
    t: 'qa',
    q: 'What would you do differently or study next?',
    a: 'I would want district-level data to examine regional variation, which national aggregates ' +
       'hide completely. If I extended the project, I would look at whether the payment record ' +
       'itself is changing credit access for small traders through the Unified Lending Interface — ' +
       'that is where a payment effect would turn into an investment effect.',
  },
  {
    t: 'qa',
    q: 'Did you write this yourself?',
    a: 'Yes. Answer plainly, then show it: name the two calculations you derived, say why you ' +
       'chose nominal rather than real GDP, and explain the base-year break in Table 4. Nobody who ' +
       'has not engaged with the material can do that.',
  },
  { t: 'pb' },

  // ============================================================ PART 6 =====
  { t: 'h1', text: 'Part 6  ·  Traps, and how to get unstuck' },

  { t: 'h2', text: 'Six things not to say' },
  {
    t: 'table',
    widths: [4200, 4826],
    colAlign: ['left', 'left'],
    head: ['Do not say', 'Say instead'],
    rows: [
      ['"UPI increased India’s GDP."', '"The evidence points that way — 57% of small merchants reported higher sales — but I cannot prove causation."'],
      ['"Each rupee now circulates 0.91 times."', '"The level of that ratio is not meaningful. Its rise from 0.52 to 0.91 is."'],
      ['"Velocity increased" (unqualified)', '"Transactions velocity increased. Income velocity would move far less."'],
      ['"Demonetisation made India digital."', '"It accelerated adoption, but 99% of the cash returned. The lasting change came later."'],
      ['"Cash is finished."', '"Cash is declining as a share of payments, but currency in circulation is still large relative to GDP."'],
      ['"My data is from the internet."', '"My data is from RBI, NPCI, PIB, MoSPI and TRAI publications, each referenced in the Bibliography."'],
    ],
  },

  { t: 'h2', text: 'If you do not know the answer' },
  {
    t: 'p', text:
      'You will be asked something you have not prepared. That is normal and is not a failure. ' +
      'What examiners penalise is bluffing, because it is obvious. Three usable moves:',
  },
  {
    t: 'numbers', items: [
      'Say what you do know, then mark the limit honestly. "I did not examine that directly. What ' +
      'my data does show is…" — this turns an unknown into an answer.',
      'Reason out loud from the identity. Almost every velocity question can be worked from ' +
      'M × V = P × T. Say what happens to each term and why. Visible reasoning scores better than ' +
      'a remembered fact.',
      'Point to the paper. "That is in my limitations on page 11" or "Data Set 8 covers that" is ' +
      'a legitimate answer, and it shows you know your own structure.',
    ],
  },
  {
    t: 'keypoint', label: 'The one habit that matters',
    text:
      'Whenever you state a number, say where it came from — RBI, NPCI, PIB, TRAI, the IMF. It ' +
      'takes three extra words, it demonstrates the project is genuinely researched, and it makes ' +
      'every answer harder to challenge.',
  },

  { t: 'h2', text: 'The last thing to read before you go in' },
  {
    t: 'keypoint', label: 'Remember',
    text:
      'UPI grew from 2 crore to 24,162 crore transactions. The average payment fell from ₹1,838 ' +
      'to ₹1,300. Value settled rose from 0.52 to 0.91 times GDP. Small payments got added, so ' +
      'money moves faster. On output, the evidence is suggestive and I do not overclaim. ' +
      'Everything else is detail.',
  },
];

module.exports = { VIVA };
