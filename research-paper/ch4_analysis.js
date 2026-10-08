/** Chapter 4: Analysis of Data — the eight data sets. */

const CH4_ANALYSIS = [
  {
    t: 'h1',
    text: '4.  Analysis of Data',
  },
  {
    t: 'p',
    text: 'This chapter has the main analysis of my project. I look at eight data sets. Each ' +
      'one follows the same four-part pattern: the table or graph, an explanation of what ' +
      'the data show, an analysis of what they mean, and an interpretation of what can and ' +
      'cannot be concluded. There are ten figures and eight tables. Each data set ends with ' +
      'one sentence summing up the result.',
  },
  {
    t: 'p',
    text: 'The first four data sets look at growth, size of payments and velocity. Data Sets 5 ' +
      'and 6 test the two big shocks of the period. Data Sets 7 and 8 look at financial ' +
      'inclusion and its limits. Together they test the three hypotheses from Section 2.2.',
  },
  {
    t: 'h2',
    text: '4.1  Data Set 1  ·  The growth of UPI transactions',
  },
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
    note: 'Table 1. Sources: NPCI UPI product statistics [1], with year-wise figures as ' +
      'reported in Press Information Bureau releases [2], [10], [13], [16]. Growth rates ' +
      'are computed by the author from the volume and value columns. Figures are rounded as ' +
      'published.',
  },
  {
    t: 'figure',
    file: 'fig01_upi_volume.png',
    caption: 'Figure 1. UPI transaction volume, FY 2016-17 to FY 2025-26.',
  },
  {
    t: 'figure',
    file: 'fig02_upi_value.png',
    caption: 'Figure 2. UPI transaction value, FY 2016-17 to FY 2025-26.',
  },
  {
    t: 'h4',
    text: 'Explanation of the data',
  },
  {
    t: 'p',
    text: 'The table shows the number and value of UPI payments in each financial year since ' +
      'UPI started. It also gives the growth rates, which I worked out from those two ' +
      'columns. Volume rose from 2 crore payments to 24,162 crore. Value rose from ₹0.07 ' +
      'lakh crore to about ₹314 lakh crore. Both of these happened over ten years [2].',
  },
  {
    t: 'h4',
    text: 'Analysis',
  },
  {
    t: 'p',
    text: 'Three patterns stand out. The first is that the growth rate is slowing in percentage ' +
      'terms, from 4,500 per cent down to 30 per cent. But the actual rise each year keeps ' +
      'getting bigger. The rise in FY 2025-26 alone was about 5,575 crore payments. That is ' +
      'more than the whole of FY 2021-22. This is simply what happens when a base gets ' +
      'larger. It does not mean UPI is really slowing down.',
  },
  {
    t: 'p',
    text: 'The second is that the growth never flattens out. Volume rose for ten years in a ' +
      'row, through a pandemic and long after the novelty wore off. That points to a ' +
      'lasting change in how people pay, not a passing trend.',
  },
  {
    t: 'p',
    text: 'The third pattern matters most. Volume has grown faster than value in every year ' +
      'since FY 2021-22. In FY 2025-26 volume grew 30 per cent while value grew 20 per ' +
      'cent. The average size of a payment is value divided by volume. So if volume grows ' +
      'faster, the average payment must be getting smaller. Data Set 2 looks at this ' +
      'directly.',
  },
  {
    t: 'h4',
    text: 'Interpretation',
  },
  {
    t: 'p',
    text: 'UPI has gone from an experiment to the normal way India pays in shops. It now ' +
      'handles most retail digital payments. The gap between volume growth and value growth ' +
      'is the first sign of something more. It suggests UPI is not just taking over ' +
      'payments that already existed. It is reaching very small payments that used to be ' +
      'made in cash, or were not made at all. So H1 is supported as a description. Its ' +
      'effect on velocity is tested in Data Set 4.',
  },
  {
    t: 'keypoint',
    text: 'UPI grew from 2 crore payments to 24,162 crore in ten years. Volume grew faster than ' +
      'value in every year from FY 2021-22, so the typical payment was getting smaller even ' +
      'as the total kept rising.',
  },
  {
    t: 'h2',
    text: '4.2  Data Set 2  ·  The average value of a single UPI transaction',
  },
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
    note: 'Table 2. The average value per transaction is derived by the author as transaction ' +
      'value divided by transaction volume, using the figures in Table 1. FY 2016-17 is ' +
      'omitted because the base is too small for the ratio to be meaningful. Underlying ' +
      'data: [1], [2].',
  },
  {
    t: 'figure',
    file: 'fig03_ticket_size.png',
    caption: 'Figure 3. Average value of a single UPI transaction, FY 2017-18 to FY 2025-26.',
  },
  {
    t: 'h4',
    text: 'Explanation of the data',
  },
  {
    t: 'p',
    text: 'This figure is not published anywhere. I worked it out by dividing each year\'s value ' +
      'by its volume. It answers a simple question: how big is a typical UPI payment, and ' +
      'is that changing? The answer rises from ₹1,196 in FY 2017-18 to a peak of ₹1,838 in ' +
      'FY 2020-21. After that it falls steadily to ₹1,300 in FY 2025-26. That is a drop of ' +
      'about 29 per cent from the peak.',
  },
  {
    t: 'h4',
    text: 'Analysis',
  },
  {
    t: 'p',
    text: 'The shape of this curve shows UPI\'s growth in two clear phases.',
  },
  {
    t: 'p',
    text: 'In the first phase, up to FY 2020-21, the average payment grew. This is what you ' +
      'would expect when the early users are better off, live in cities and are used to ' +
      'technology. The payments moving onto UPI then were large ones, such as rent, fees ' +
      'and money sent to family. These used to be paid by cheque or bank transfer.',
  },
  {
    t: 'p',
    text: 'In the second phase the average falls, every year, for five years. Total value kept ' +
      'rising all through. So this cannot mean people were spending less. It can only mean ' +
      'the new payments being added were much smaller than the old average, and that there ' +
      'were enough of them to pull the average down. The data on payment types confirms ' +
      'this. Person-to-merchant payments are now 63 per cent of all UPI volume, and 86 per ' +
      'cent of those are below ₹500 [2].',
  },
  {
    t: 'p',
    text: 'Inflation works against this finding rather than causing it. Prices rose over the ' +
      'period. So the same basket of goods would show a rising average payment. The average ' +
      'fell anyway. That means the shift towards small payments is even bigger in real ' +
      'terms than it looks.',
  },
  {
    t: 'h4',
    text: 'Interpretation',
  },
  {
    t: 'p',
    text: 'I think this is the most important finding in my project. It separates the two ' +
      'possible explanations of UPI\'s growth. If UPI had only digitised payments that ' +
      'already existed, the average payment would have stayed roughly flat while volume ' +
      'rose. Instead it fell by nearly a third while volume grew thirteen times. That is ' +
      'the sign of a payment system reaching payments it never served before: the tea, the ' +
      'vegetables, the auto fare.',
  },
  {
    t: 'p',
    text: 'This matters directly for velocity. Fisher\'s equation links the money stock to the ' +
      'number of transactions it supports. A system that adds a very large number of very ' +
      'small payments raises T a lot, while adding fairly little to the total value. That ' +
      'is exactly what it means for each rupee to be used more often. So H2 is supported.',
  },
  {
    t: 'keypoint',
    text: 'The average UPI payment fell from ₹1,838 to ₹1,300 while volume rose more than ten ' +
      'times. That is the sign of a system adding small everyday payments, not just ' +
      'digitising ones that already existed.',
  },
  {
    t: 'h2',
    text: '4.3  Data Set 3  ·  UPI within India’s wider digital payment system',
  },
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
  {
    t: 'figure',
    file: 'fig05_digital_share.png',
    caption: 'Figure 5. UPI’s share of retail digital payment volume, FY 2024-25.',
  },
  {
    t: 'h4',
    text: 'Explanation of the data',
  },
  {
    t: 'p',
    text: 'This data set puts UPI inside all digital payments in India. That includes cards, ' +
      'wallets, NEFT, IMPS and RTGS. Total digital payment volume rose from 2,071 crore ' +
      'payments in FY 2017-18 to 18,737 crore in FY 2023-24. That is a compound growth rate ' +
      'of 44 per cent a year. Value grew from ₹1,962 lakh crore to ₹3,659 lakh crore, a ' +
      'compound rate of 11 per cent [10], [11]. UPI alone made up 81 per cent of retail ' +
      'digital payment volume in FY 2024-25 [14].',
  },
  {
    t: 'h4',
    text: 'Analysis',
  },
  {
    t: 'p',
    text: 'The gap between those two growth rates is 44 per cent for volume against 11 per cent ' +
      'for value. This repeats, across the whole payment system, the same pattern I found ' +
      'in UPI alone. India\'s digital payments have grown mainly because more payments are ' +
      'being made, not because payments are bigger.',
  },
  {
    t: 'p',
    text: 'The value figures need care. Total digital payment value of ₹3,659 lakh crore is far ' +
      'bigger than India\'s GDP. That is because it includes RTGS, which carries very large ' +
      'transfers between banks and big companies. There are not many of these, but each one ' +
      'is huge. This shows clearly why payment value cannot be treated as economic output. ' +
      'It is also why the ratio in Data Set 4 has to be called a transactions measure and ' +
      'not income velocity.',
  },
  {
    t: 'p',
    text: 'There is no contradiction in UPI carrying 81 per cent of retail payments by number ' +
      'while total value is dominated by large wholesale systems. It just describes what ' +
      'UPI is. It is the system for frequent, small, everyday payments.',
  },
  {
    t: 'h4',
    text: 'Interpretation',
  },
  {
    t: 'p',
    text: 'UPI is not one choice among several in Indian retail payments. It is the system, and ' +
      'everything else shares the remaining fifth. For this study, that means changes in ' +
      'how India pays can fairly be linked to UPI, because nothing else is big enough to ' +
      'move the national figures.',
  },
  {
    t: 'keypoint',
    text: 'UPI carries 81 per cent of India\'s retail digital payments. So changes in how people ' +
      'pay during this period can fairly be linked to it.',
  },
  {
    t: 'h2',
    text: '4.4  Data Set 4  ·  UPI turnover relative to nominal GDP',
  },
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
    note: 'Table 4. UPI values from [1], [2]. Nominal GDP at current prices from MoSPI ' +
      'provisional estimates [8], [9]. The ratio is computed by the author. Note a ' +
      'discontinuity: figures for FY 2022-23 and FY 2023-24 are on the 2011-12 base series, ' +
      'while FY 2024-25 and FY 2025-26 are on the revised 2022-23 base series. The break is ' +
      'small relative to the trend but the series is not perfectly continuous.',
  },
  {
    t: 'figure',
    file: 'fig04_turnover_gdp.png',
    caption: 'Figure 4. UPI turnover relative to nominal GDP, FY 2022-23 to FY 2025-26.',
  },
  {
    t: 'h4',
    text: 'Explanation of the data',
  },
  {
    t: 'p',
    text: 'This data set builds the closest thing to a velocity measure that public data ' +
      'allows. It shows the total value settled over UPI in a year as a multiple of nominal ' +
      'GDP in the same year. The ratio rose from 0.52 in FY 2022-23 to 0.91 in FY 2025-26. ' +
      'By the latest year, the value passing through UPI alone came close to the whole ' +
      'yearly output of the Indian economy.',
  },
  {
    t: 'h4',
    text: 'Analysis',
  },
  {
    t: 'p',
    text: 'I need to say exactly what this ratio does and does not measure. It would be easy to ' +
      'claim too much from it.',
  },
  {
    t: 'p',
    text: 'It is a measure of transactions turnover, not income velocity. The top of the ratio ' +
      'counts every payment. That includes transfers between people, which do not buy ' +
      'anything new, and payments between businesses, which GDP counts only once at the ' +
      'final sale. The bottom counts final output only. The two are not measuring the same ' +
      'thing. So the number should not be read as "each rupee now circulates 0.91 times".',
  },
  {
    t: 'p',
    text: 'What the ratio does measure reliably is the direction and speed of change. The ' +
      'mismatch between the top and the bottom stays roughly the same each year. So ' +
      'comparing one year with another is still fair. On that basis the ratio rose by about ' +
      '75 per cent in three years. The value settled through this one retail system grew ' +
      'far faster than national output. So payment activity per unit of output has clearly ' +
      'gone up. This is what the Cambridge version predicts. As paying gets cheaper, people ' +
      'hold less money against a given amount of spending, so turnover rises.',
  },
  {
    t: 'p',
    text: 'Two cautions are needed. First, part of the rise is just cash payments moving onto ' +
      'UPI. That raises the measured figure without any change in behaviour, because cash ' +
      'payments were never counted in the first place. Second, as Section 3.4.4 explained, ' +
      'rising velocity is only a good sign when it comes from cheaper payments rather than ' +
      'people running away from money. Here the cause is clearly the first one. India had ' +
      'no monetary crisis in this period, and the rise matches the fall in the cost and ' +
      'difficulty of paying.',
  },
  {
    t: 'h4',
    text: 'Interpretation',
  },
  {
    t: 'p',
    text: 'H1 is supported, with one qualification. What I have shown is a rise in measured ' +
      'transactions turnover, not in income velocity. Part of that rise is cash payments ' +
      'becoming visible for the first time, rather than new activity. Both effects are real ' +
      'and both matter, but they are not the same thing. The published data cannot separate ' +
      'them. This is the honest limit of what a study based on national figures can show.',
  },
  {
    t: 'keypoint',
    text: 'The value settled over UPI rose from 0.52 to 0.91 times India\'s GDP in three years. ' +
      'The level of that ratio is not meaningful, but its fast rise is, and it points to a ' +
      'higher transactions velocity of money.',
  },
  {
    t: 'h2',
    text: '4.5  Data Set 5  ·  Digital payments around demonetisation',
  },
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
  {
    t: 'figure',
    file: 'fig06_demonetisation.png',
    caption: 'Figure 6. Monthly digital transaction volume before and after demonetisation.',
  },
  {
    t: 'h4',
    text: 'Explanation of the data',
  },
  {
    t: 'p',
    text: 'On 9 November 2016, ₹500 and ₹1,000 notes stopped being legal tender. They were ' +
      'worth ₹15.4 trillion. That was 86.9 per cent of the value of all notes then in ' +
      'circulation [23]. Monthly digital payments rose from 71.27 crore in October 2016 to ' +
      '111.45 crore by May 2017. That is a rise of 56 per cent [24].',
  },
  {
    t: 'h4',
    text: 'Analysis',
  },
  {
    t: 'p',
    text: 'Demonetisation worked like a very severe natural experiment. The main way people ' +
      'paid was taken away almost overnight, and an alternative had launched only weeks ' +
      'before. The 56 per cent rise in digital payments over seven months is how people ' +
      'reacted.',
  },
  {
    t: 'p',
    text: 'That reaction should not be overstated. About 98.96 per cent of the withdrawn notes ' +
      'came back to the banking system [23]. So the currency was replaced rather than ' +
      'removed for good, and cash use recovered a lot in the years that followed. ' +
      'Demonetisation did not by itself turn India into a digital economy.',
  },
  {
    t: 'p',
    text: 'What it did achieve is better described as a forced trial. Many people who would not ' +
      'otherwise have installed a payment app did so because they had to. Many shopkeepers ' +
      'who would not otherwise have accepted digital payment learned how. Some of that ' +
      'behaviour stayed once the pressure was gone. So the lasting effect was on ' +
      'familiarity and infrastructure, rather than on how people actually paid.',
  },
  {
    t: 'h4',
    text: 'Interpretation',
  },
  {
    t: 'p',
    text: 'Demonetisation speeded up UPI\'s growth at an early and important moment. But it did ' +
      'not cause the growth that followed. That growth carried on for years after cash ' +
      'supply returned to normal, and at rates far above anything seen in 2016-17. So the ' +
      'event is better understood as removing a barrier, which was the effort of learning ' +
      'something new. It did not change the economics of paying.',
  },
  {
    t: 'keypoint',
    text: 'Demonetisation produced a 56 per cent jump in digital payments. But about 99 per ' +
      'cent of the currency came back, so it speeded up UPI\'s growth without causing it.',
  },
  {
    t: 'h2',
    text: '4.6  Data Set 6  ·  UPI growth before, during and after COVID-19',
  },
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
  {
    t: 'figure',
    file: 'fig07_covid.png',
    caption: 'Figure 7. UPI transaction volume before, during and after the COVID-19 pandemic.',
  },
  {
    t: 'h4',
    text: 'Explanation of the data',
  },
  {
    t: 'p',
    text: 'This table separates out the pandemic years. UPI volume grew 78 per cent in FY ' +
      '2020-21, the year of the strictest restrictions. It then grew 106 per cent in FY ' +
      '2021-22, which is a higher rate than the year before. Volume more than tripled ' +
      'between FY 2019-20 and FY 2021-22.',
  },
  {
    t: 'h4',
    text: 'Analysis',
  },
  {
    t: 'p',
    text: 'The pattern looks surprising at first. India\'s real output shrank in FY 2020-21. You ' +
      'would expect a payment system to shrink along with the economy it serves. Instead ' +
      'UPI volume grew 78 per cent. Two forces explain this.',
  },
  {
    t: 'p',
    text: 'The first is substitution. With movement restricted and contact discouraged, ' +
      'payments that would have been made in cash were made digitally instead. This moves ' +
      'payments between methods. It does not increase how many there are.',
  },
  {
    t: 'p',
    text: 'The second is new users, and this matters more. Shopkeepers who had refused digital ' +
      'payment accepted it because customers insisted. Customers who had avoided it learned ' +
      'because there was no other option. This permanently widened the number of people who ' +
      'could use the system.',
  },
  {
    t: 'p',
    text: 'The proof that new users mattered more lies in what happened next. If the pandemic ' +
      'rise had been pure substitution, growth would have reversed once normal trade came ' +
      'back. Instead FY 2021-22 grew faster than FY 2020-21. Growth then carried on at 82 ' +
      'per cent and 57 per cent in the next two years, from a much bigger base. The change ' +
      'did not unwind.',
  },
  {
    t: 'h4',
    text: 'Interpretation',
  },
  {
    t: 'p',
    text: 'COVID-19 was a second shock, and a more lasting one than demonetisation. The ' +
      'contrast between the two is useful. Demonetisation removed the alternative for a few ' +
      'months, and the change partly reversed afterwards. The pandemic lasted long enough ' +
      'for digital payment to become a habit. Habits, unlike forced behaviour, survive once ' +
      'the pressure is removed.',
  },
  {
    t: 'keypoint',
    text: 'UPI grew faster after the pandemic (106 per cent) than during its worst year (78 per ' +
      'cent). That shows the change had become a habit, instead of reversing once cash was ' +
      'available again.',
  },
  {
    t: 'h2',
    text: '4.7  Data Set 7  ·  Financial inclusion, digitalisation and global standing',
  },
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
  {
    t: 'figure',
    file: 'fig08_indices.png',
    caption: 'Figure 8. RBI Financial Inclusion Index and RBI Digital Payments Index.',
  },
  {
    t: 'figure',
    file: 'fig10_global_share.png',
    caption: 'Figure 10. India’s share of global real-time payment volume, 2024.',
  },
  {
    t: 'h4',
    text: 'Explanation of the data',
  },
  {
    t: 'p',
    text: 'This data set brings together the main signs of financial inclusion and ' +
      'digitalisation. Both RBI indices rose over their latest periods. The Financial ' +
      'Inclusion Index improved in all three of its parts: access, usage and quality [7]. ' +
      'The last row shows that India handled about 49 per cent of all real-time payments in ' +
      'the world in 2024 [3].',
  },
  {
    t: 'h4',
    text: 'Analysis',
  },
  {
    t: 'p',
    text: 'The rise in the usage part matters more than the headline number. Access had already ' +
      'been largely achieved through the Jan Dhan scheme. The real problem was accounts ' +
      'lying unused. The World Bank records that the share of Indian women with inactive ' +
      'accounts fell from a third in 2021 to 18 per cent by 2024 [21]. A payment system ' +
      'that a small vendor will accept is what turns an account from a registration into ' +
      'something useful.',
  },
  {
    t: 'p',
    text: 'The international comparison needs to be kept in proportion. India\'s 49 per cent ' +
      'share of world real-time payments partly reflects our population. A share of volume ' +
      'also says nothing about quality. What makes it notable is the policy difference the ' +
      'BIS points out. Most fast payment systems abroad charge shopkeepers, and India\'s ' +
      'does not [20]. India chose to treat retail payment as a public service, and this ' +
      'growth is partly a result of that choice.',
  },
  {
    t: 'p',
    text: 'It is worth noticing how close 55.98 crore Jan Dhan accounts and 55.49 crore UPI ' +
      'users are. These are different groups measured on different dates, so they cannot ' +
      'simply be set against each other. But their similar size suggests that owning an ' +
      'account and being able to pay digitally now reach a similar share of adults.',
  },
  {
    t: 'h4',
    text: 'Interpretation',
  },
  {
    t: 'p',
    text: 'The gains in financial inclusion are real and can be measured. The chain running ' +
      'from accounts, to usage, to activity being recorded is visible in the indices rather ' +
      'than just claimed. India\'s international position rests on a deliberate choice about ' +
      'pricing, not on size alone.',
  },
  {
    t: 'keypoint',
    text: 'The RBI\'s Financial Inclusion Index rose from 64.2 to 67.0, with usage improving ' +
      'fastest. That is the part that matters, because access had already been achieved and ' +
      'unused accounts were the real problem.',
  },
  {
    t: 'h2',
    text: '4.8  Data Set 8  ·  Internet penetration and the rural–urban divide',
  },
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
    note: 'Table 8. Source: TRAI telecom subscription data and performance indicator reports ' +
      '[22]. Total broadband subscribers stood at 999.81 million as at 31 October 2025, and ' +
      'total telecom subscribers at 1,306.14 million as at 31 December 2025, giving an ' +
      'overall tele-density of 91.74 per cent.',
  },
  {
    t: 'figure',
    file: 'fig09_divide.png',
    caption: 'Figure 9. Internet subscribers and internet penetration, rural and urban India.',
  },
  {
    t: 'h4',
    text: 'Explanation of the data',
  },
  {
    t: 'p',
    text: 'UPI needs a connected device. So internet access sets the limit on how inclusive it ' +
      'can be. India had 999.81 million broadband subscribers on 31 October 2025 [22]. ' +
      'Urban areas had 113.83 internet subscribers per 100 people. Rural areas had 46.73. ' +
      'That is a ratio of roughly 2.4 to 1.',
  },
  {
    t: 'h4',
    text: 'Analysis',
  },
  {
    t: 'p',
    text: 'The urban figure is above 100 per 100 people because it counts subscriptions, not ' +
      'people. Many urban users have more than one. This is a reminder to read the rural ' +
      'figure as an upper limit. If some rural users also have more than one subscription, ' +
      'then fewer than 46.73 per cent of rural people are actually online.',
  },
  {
    t: 'p',
    text: 'In absolute numbers the gap is smaller than the penetration figures suggest. There ' +
      'are 579.46 million urban subscribers against 423.39 million rural ones. That is ' +
      'because rural India has more people. So the two panels of Figure 9 tell different ' +
      'halves of the same story. Rural India is a large and growing market in total, but a ' +
      'much smaller share of rural people is reached.',
  },
  {
    t: 'p',
    text: 'This is a limit of connectivity, not of acceptance. The Payments Infrastructure ' +
      'Development Fund has set up about 5.45 crore digital payment points in tier-3 to ' +
      'tier-6 centres [14]. So the problem is not that rural shops lack QR codes. The ' +
      'problem is that many rural people cannot reliably reach the network those codes ' +
      'need.',
  },
  {
    t: 'h4',
    text: 'Interpretation',
  },
  {
    t: 'p',
    text: 'H3 is supported. The benefits of UPI described in this chapter are shared unevenly. ' +
      'The unevenness is built into the infrastructure rather than being a matter of ' +
      'choice, because it follows the spread of connectivity. So any policy meant to take ' +
      'digital payment further into rural India has to deal with the telecom problem. ' +
      'Payment measures alone cannot solve it.',
  },
  {
    t: 'keypoint',
    text: 'Rural internet reaches 46.73 per 100 people against 113.83 in urban areas. So what ' +
      'limits UPI in rural India is connectivity, not whether shops will accept it.',
  },
  {
    t: 'pb',
  },
];

module.exports = { CH4_ANALYSIS };
