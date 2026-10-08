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
      'My project asks whether UPI has changed the speed at which money moves around ' +
      'in India. UPI grew from about 2 crore payments in FY 2016-17 to over 24,000 ' +
      'crore in FY 2025-26. But the size is not the interesting part. The interesting ' +
      'part is that the average payment got smaller, from about ₹1,838 to ₹1,300. ' +
      'That tells me UPI did not just digitise payments that already existed. It ' +
      'added new, very small everyday payments. Using Fisher\'s equation, more ' +
      'transactions on the same stock of money means higher velocity. I also found ' +
      'that the value settled over UPI rose from about half of India\'s GDP to about ' +
      'nine-tenths of it in three years. On economic activity I am more careful. 57 ' +
      'per cent of small shopkeepers reported higher sales after taking up digital ' +
      'payment, which points one way. But I cannot prove UPI caused it, because ' +
      'smartphones, internet and incomes all rose in the same decade.',
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
      'UPI made very small payments worth making. Because there are now far more ' +
      'payments on roughly the same stock of money, money moves around faster.',
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
    a: 'Because I use UPI every day, and I wanted to know if something that changed my ' +
       'own habits had changed the economy too. The velocity of money is a concept ' +
       'from our syllabus that nobody can see directly. UPI gave me a way to look at ' +
       'it with real published data.',
  },
  {
    t: 'qa',
    q: 'What exactly is your research question?',
    a: 'There are two questions. First, has UPI changed the speed at which money moves ' +
       'around in India? Second, can I find any effect on real economic activity in ' +
       'published data? I answer the first one more confidently than the second, and I ' +
       'say so in the paper.',
  },
  {
    t: 'qa',
    q: 'What is new in your project? Everyone knows UPI grew.',
    a: 'I agree, the growth is not my finding. My own contribution is the average ' +
       'payment size in Table 2. That figure is not published anywhere. I worked it ' +
       'out by dividing yearly value by yearly volume. It falls from ₹1,838 to ₹1,300, ' +
       'and that fall is what separates "UPI added new payments" from "UPI just ' +
       'digitised old ones".',
  },
  {
    t: 'qa',
    q: 'What period does your study cover, and why?',
    a: 'FY 2016-17 to FY 2025-26. FY 2016-17 was UPI\'s first full year, and FY 2025-26 ' +
       'was the latest year with complete data when I wrote. Ten years also lets me ' +
       'look at two big shocks, demonetisation and COVID-19.',
  },

  { t: 'h2', text: 'B.  Concepts' },
  {
    t: 'qa',
    q: 'What is the velocity of money?',
    a: 'It is the average number of times one rupee is used to buy goods and services ' +
       'in a given period. It is not a physical quality of money. It just shows how ' +
       'quickly people spend what they hold.',
  },
  {
    t: 'qa',
    q: 'State the equation of exchange and explain each term.',
    a: 'M × V = P × T. M is the money stock, V is velocity, P is the average price ' +
       'level and T is the number of transactions. It is an identity, which means it ' +
       'is true by definition and not an assumption. Its use is that if M stays the ' +
       'same and T goes up, then V must have gone up.',
  },
  {
    t: 'qa',
    q: 'What is the Cambridge approach, and how does it relate to velocity?',
    a: 'It writes M = k × P × Y, where k is the share of income people keep as money. ' +
       'Velocity is one divided by k. So a rise in velocity and a fall in k are the ' +
       'same statement. This is the version I actually use, because UPI works by ' +
       'letting people keep less cash in hand.',
  },
  {
    t: 'qa',
    q: 'What is UPI, in one sentence?',
    a: 'It is a common set of rules, launched in 2016, that lets any bank account be ' +
       'paid from any app using one short address. It is instant, works all day, and ' +
       'is free for the user.',
  },
  {
    t: 'qa',
    q: 'What is NPCI, and why does it matter that it is not-for-profit?',
    a: 'NPCI is the National Payments Corporation of India. It built UPI and runs it, ' +
       'under RBI guidance. Because it is not-for-profit, it does not have to make a ' +
       'profit on the system itself. That is why UPI is free and card payments are ' +
       'not.',
  },
  {
    t: 'qa',
    q: 'What is interoperability and why was it decisive?',
    a: 'It means a user of one app can pay a user of any other app. Before UPI, ' +
       'wallets were closed loops, so money in one could not reach another. The IMF ' +
       'studied UPI and found that interoperability drove its growth. Users could join ' +
       'through a brand they trusted and switch later, so every company had to keep ' +
       'improving.',
  },
  {
    t: 'qa',
    q: 'Why did cards never achieve what UPI did?',
    a: 'Because of the cost of accepting them. A card machine costs money, and the ' +
       'shopkeeper pays a fee on every sale. That does not work on a ₹20 margin. A ' +
       'printed QR code costs nothing, and below ₹2,000 there is no fee at all.',
  },
  {
    t: 'qa',
    q: 'What is the difference between nominal and real GDP, and which did you use?',
    a: 'Nominal GDP is measured at current prices, so it includes inflation. Real GDP ' +
       'is at constant prices. I used nominal GDP in Table 4, because UPI value is ' +
       'also in current rupees. Both sides of a ratio have to be measured the same ' +
       'way.',
  },

  { t: 'h2', text: 'C.  Method' },
  {
    t: 'qa',
    q: 'What kind of data did you use?',
    a: 'Only secondary data. I used published figures from RBI, NPCI, PIB, MoSPI and ' +
       'TRAI, plus research from the IMF, BIS and World Bank.',
  },
  {
    t: 'qa',
    q: 'Why did you not conduct a primary survey?',
    a: 'Because what I am studying is national in size, and it is already measured in ' +
       'full by the bodies that run it. Any survey I could actually do would be too ' +
       'small to stand for the country, and it could not improve on RBI and NPCI data.',
  },
  {
    t: 'qa',
    q: 'How did you make sure your sources were reliable?',
    a: 'I took every number from the body that produced it, not from news or ' +
       'commercial websites. Each figure has a number in brackets pointing to the ' +
       'Bibliography, so anyone can check it.',
  },
  {
    t: 'qa',
    q: 'Which figures are your own calculations?',
    a: 'Two of them. The average value per payment in Table 2, and UPI turnover as a ' +
       'multiple of GDP in Table 4. I have written both methods under the tables so ' +
       'anyone can repeat them.',
  },
  {
    t: 'qa',
    q: 'What are the limitations of your study?',
    a: 'I list seven on page 11. The three that matter most are these. It is all ' +
       'secondary data. Correlation is not causation, because smartphones and incomes ' +
       'rose alongside UPI. And velocity cannot be measured directly, so Table 4 is an ' +
       'approximation and not a measurement.',
  },
  {
    t: 'qa',
    q: 'What were your hypotheses?',
    a: 'Three. H1 says transactions velocity has gone up. H2 says UPI added genuinely ' +
       'new small payments, not just old ones moving across. H3 says the gains are ' +
       'shared unevenly between rural and urban India. All three are supported, and H1 ' +
       'with one qualification.',
  },

  { t: 'h2', text: 'D.  Findings' },
  {
    t: 'qa',
    q: 'What is your most important finding?',
    a: 'That the average UPI payment shrank from ₹1,838 to ₹1,300 while volume rose ' +
       'more than ten times. If UPI had only digitised payments that already existed, ' +
       'the average size would have stayed roughly flat. It fell instead. So UPI ' +
       'reached payments it never served before: the tea, the vegetables, the auto ' +
       'fare.',
  },
  {
    t: 'qa',
    q: 'Why does a falling average transaction size matter for velocity?',
    a: 'Because Fisher\'s equation is about the number of transactions, not their size. ' +
       'Adding a very large number of very small payments raises T a lot while adding ' +
       'little to total value. That is exactly what it means for each rupee to be used ' +
       'more often.',
  },
  {
    t: 'qa',
    q: 'Did demonetisation cause UPI’s growth?',
    a: 'It speeded it up, but it did not cause it. Digital payments rose 56 per cent ' +
       'in the seven months after November 2016. But about 98.96 per cent of the notes ' +
       'came back, and cash use recovered. Growth carried on for years afterwards at ' +
       'rates far above 2016-17. Demonetisation removed the effort of trying something ' +
       'new. It did not change the economics.',
  },
  {
    t: 'qa',
    q: 'Why did UPI grow during COVID-19 when the economy shrank?',
    a: 'Two reasons. One is substitution, where payments that would have been cash ' +
       'became digital. The other is new users, where shopkeepers and customers who ' +
       'had resisted learned because there was no choice. New users mattered more, and ' +
       'I can show it. Growth was 78 per cent in FY 2020-21 but 106 per cent in FY ' +
       '2021-22. If it had been only substitution, it would have reversed once shops ' +
       'reopened. It did not.',
  },
  {
    t: 'qa',
    q: 'Why is demonetisation’s effect temporary but COVID’s permanent?',
    a: 'It comes down to how long each one lasted. Demonetisation took away the ' +
       'alternative for a few months, so people complied and then went back. The ' +
       'pandemic lasted long enough for digital payment to become a habit, and habits ' +
       'stay after the pressure is removed.',
  },
  {
    t: 'qa',
    q: 'Has UPI increased financial inclusion?',
    a: 'Yes, and we can measure it. The RBI Financial Inclusion Index rose from 64.2 ' +
       'to 67.0 in one year, and the usage part rose fastest. Access was already ' +
       'mostly solved by Jan Dhan, which reached 55.98 crore accounts. The real ' +
       'problem was accounts lying unused, and the World Bank says the share of Indian ' +
       'women with inactive accounts fell from a third in 2021 to 18 per cent in 2024.',
  },
  {
    t: 'qa',
    q: 'Has UPI increased GDP?',
    a: 'I cannot claim that, and I deliberately do not. What I can say is that 57 per ' +
       'cent of small shopkeepers reported higher sales after taking up digital ' +
       'payment. The BIS also finds that fast payment systems raise digital finance ' +
       'use most in lower-income countries. That is evidence pointing towards a real ' +
       'effect. It is not a measurement of one.',
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
    a: 'Transactions velocity, and the difference matters. Income velocity counts only ' +
       'payments for newly produced output, so it moves slowly. Transactions velocity ' +
       'counts every payment, including money I send between my own accounts and ' +
       'payments between wholesalers. A payment system affects transactions velocity ' +
       'directly and income velocity only indirectly. Most popular writing mixes the ' +
       'two up, so I labelled mine clearly.',
  },
  {
    t: 'qa',
    q: 'Hard 2.  So does 0.91× mean every rupee circulates 0.91 times a year?',
    a: 'No, and that is the trap in the number. The top of the ratio counts every ' +
       'payment. The bottom counts only final output. They are not measuring the same ' +
       'thing, so the level of the ratio means nothing. What does mean something is ' +
       'the change. The mismatch stays about the same each year, so a rise from 0.52 ' +
       'to 0.91 in three years tells me payment activity grew much faster than output.',
  },
  {
    t: 'qa',
    q: 'Hard 3.  Some of the rise is just cash payments becoming visible. Doesn’t that ruin your finding?',
    a: 'It qualifies my finding, and I say so in the paper. A cash payment that ' +
       'becomes a UPI payment raises the measured figure with no change in behaviour, ' +
       'because cash was never counted. The data cannot separate that from genuinely ' +
       'new payments. But Data Set 2 gives me a second check. If this were only ' +
       'migration, the average payment size would have stayed flat. It fell by 29 per ' +
       'cent. So at least part of the rise is new activity.',
  },
  {
    t: 'qa',
    q: 'Hard 4.  Inflation was positive over your period. Doesn’t that undermine the falling average?',
    a: 'It actually strengthens it. Rising prices push the average payment up. So ' +
       'inflation works against my finding rather than causing it. The average fell ' +
       'anyway, which means the shift towards small payments is even bigger in real ' +
       'terms.',
  },
  {
    t: 'qa',
    q: 'Hard 5.  If you cannot prove causation, what have you actually established?',
    a: 'Three things. First, that payment turnover per rupee of output rose sharply. ' +
       'That is measured, not guessed. Second, that the growth is made of new small ' +
       'payments and not just old ones moving across. That is the average size ' +
       'evidence. Third, that the effect on output is supported but not proved, ' +
       'because smartphones, internet, bank accounts and incomes all grew in the same ' +
       'decade, and published figures cannot separate them. Refusing to claim too much ' +
       'is itself a finding.',
  },
  {
    t: 'keypoint', label: 'If pressed further on Hard 5',
    text:
      'To prove cause and effect I would need UPI data by district, and something ' +
      'that varied between them. For example, comparing districts where adoption was ' +
      'forced early with similar ones where it was not. The IMF did something like ' +
      'this and found faster growth where interoperability helped most. That data is ' +
      'not published, which is why one of my suggestions is that it should be ' +
      'released.',
  },
  { t: 'pb' },

  // ============================================================ PART 5 =====
  { t: 'h1', text: 'Part 5  ·  Opinion, risks and the awkward ones' },

  {
    t: 'qa',
    q: 'Is UPI being free a good thing? Someone must be paying.',
    a: 'The Government pays, through incentive schemes worth about ₹1,500 crore for ' +
       'small merchant payments. Whether that is worth it depends on whether the gains ' +
       'in recorded activity, inclusion and tax collection are bigger than the ' +
       'spending. That is why one of my suggestions is that the scheme should be ' +
       'reviewed publicly from time to time.',
  },
  {
    t: 'qa',
    q: 'What are the risks of a cashless economy?',
    a: 'There are three. Dependence on infrastructure, because a digital payment needs ' +
       'power, a device and a network at the same time, and cash needs none of them. ' +
       'Fraud, with cyber incidents doubling from 10.29 lakh to 22.68 lakh between ' +
       '2022 and 2024. And exclusion, because a system that needs the internet cannot ' +
       'include more people than the internet does.',
  },
  {
    t: 'qa',
    q: 'Is UPI secure?',
    a: 'The technology is strong. The app is tied to one device, a PIN is needed, and ' +
       'machine learning blocks suspicious payments. The weak point is the user, who ' +
       'can be talked into approving a payment. That is why my suggestion is fraud ' +
       'awareness inside the apps in regional languages, rather than more technical ' +
       'security.',
  },
  {
    t: 'qa',
    q: 'Does UPI make people overspend?',
    a: 'The evidence suggests it can. In one survey about 75 per cent of users said ' +
       'they spent more, and many said digital money felt less real than cash. It is a ' +
       'real cost, especially for low-income families. I treat it as one. The same ' +
       'ease that raises velocity also removes a restraint that cash gave by accident.',
  },
  {
    t: 'qa',
    q: 'Why is rural adoption behind? Is it a lack of QR codes?',
    a: 'No, and that is the point of Data Set 8. Over 5.45 crore payment points have ' +
       'been set up in tier-3 to tier-6 centres. The problem is connectivity. Rural ' +
       'internet is 46.73 subscribers per 100 people against 113.83 in urban areas. So ' +
       'spreading broadband would help more now than paying for more QR codes.',
  },
  {
    t: 'qa',
    q: 'India has 49 per cent of the world’s real-time payments. Isn’t that just population?',
    a: 'Partly, and I say so. A share of volume says nothing about quality. What makes ' +
       'it notable is the policy difference. Most fast payment systems abroad charge ' +
       'shopkeepers, and India chose not to. So the growth is partly a result of ' +
       'treating payment as a public service.',
  },
  {
    t: 'qa',
    q: 'What would you do differently or study next?',
    a: 'I would want data by district, because national figures hide regional ' +
       'differences completely. If I carried the project further, I would look at ' +
       'whether the payment record is changing credit access for small traders through ' +
       'the Unified Lending Interface. That is where a payment effect would turn into ' +
       'an investment effect.',
  },
  {
    t: 'qa',
    q: 'Did you write this yourself?',
    a: 'Yes. Say it plainly, then show it. Name the two figures you calculated, say ' +
       'why you chose nominal GDP and not real GDP, and explain the base year break in ' +
       'Table 4. Nobody who has not worked with the material can do that.',
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
      'Whenever you give a number, say where it came from: RBI, NPCI, PIB, TRAI or ' +
      'the IMF. It takes three extra words. It shows the project is really ' +
      'researched, and it makes every answer harder to argue with.',
  },

  { t: 'h2', text: 'The last thing to read before you go in' },
  {
    t: 'keypoint', label: 'Remember',
    text:
      'UPI grew from 2 crore to 24,162 crore payments. The average payment fell from ' +
      '₹1,838 to ₹1,300. Value settled rose from 0.52 to 0.91 times GDP. Small ' +
      'payments got added, so money moves faster. On output, the evidence points one ' +
      'way but I do not overclaim. Everything else is detail.',
  },
];

module.exports = { VIVA };
