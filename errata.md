# Life In The UK Question Bank Errata

Audit date: 2026-09-21.

This audit covers every record in the `questionBank` array in `life-in-the-uk.html` (4,058 records). Each record was reviewed once, in order, for factual accuracy, answer-key correctness, uniqueness of the correct answer, sensible wording, and corrupted or stale text. Question numbers below are one-based array indices.

The HTML page was not changed by this audit. This file lists substantive question, selection, and answer-key issues individually. Explanation-only corrections are in `suggestions.md`; grammar, spelling, punctuation, and surface-level wording corrections are in `grammar.md`.

## Coverage

| Records reviewed | Records reviewed | Affected records |
| --- | ---: | ---: |
| Q1-Q500 | 500 | 1 |
| Q501-Q1000 | 500 | 29 |
| Q1001-Q1250 | 250 | 21 |
| Q1251-Q1500 | 250 | 34 |
| Q1501-Q2000 | 500 | 95 |
| Q2001-Q2500 | 500 | 90 |
| Q2501-Q3000 | 500 | 73 |
| Q3001-Q3500 | 500 | 48 |
| Q3501-Q4058 | 558 | 91 |
| **Total** | **4,058** | **482** |

Explanation-only corrections moved to `suggestions.md`: 55. Grammar, spelling, punctuation, and surface-level wording corrections moved to `grammar.md`: 99. Substantive question/selection/answer issues retained here: 328.

## Errata

Question, answer key, and selections below are copied from the page questionBank. `[x]` marks a selection that matches the raw answer key. Suggestions below concern substantive question, selection, or answer-key issues.

### Q377
Question: `"In which year was the death penalty for murder suspended in Great Britain and effectively abolished?"`
Raw answer key: `"1965"`
Selections:
- [x] `"1965"`
- [ ] `"1918"`
- [ ] `"1948"`
- [ ] `"1982"`
Suggestion: Death penalty date. Current key: `1965`. The question conflates the 1965 suspension of the death penalty for murder with its permanent abolition in 1969. Suggested correction: ask when it was suspended and keep `1965`, or ask when it was permanently abolished and use `1969`.

### Q531
Question: `"True or false: The Prime Minister is the head of state; the Prime Minister is the head of government."`
Raw answer key: `"False"`
Selections:
- [ ] `"True"`
- [x] `"False"`
Suggestion: Prime Minister and head of state. The true and false clauses are combined in one statement. Suggested correction: split it, or state that the monarch is head of state and the Prime Minister is head of government.

### Q534
Question: `"True or false: Great Britain is the island containing England, Scotland and Wales; the UK also includes Scotland."`
Raw answer key: `"False"`
Selections:
- [ ] `"True"`
- [x] `"False"`
Suggestion: Great Britain and the UK. The statement says the UK includes Scotland, which is true, so the `False` key is wrong. Suggested correction: replace `Scotland` with `Northern Ireland` and key the corrected statement `True`.

### Q553
Question: `"True or false: Mutual respect and tolerance of No right to express a belief is a core principle of life in modern Britain."`
Raw answer key: `"False"`
Selections:
- [ ] `"True"`
- [x] `"False"`
Suggestion: Mutual respect statement. The question contains the inserted phrase `No right to express a belief`, making it unintelligible. Suggested correction: use `Mutual respect and tolerance of different faiths and beliefs is a core principle of life in modern Britain.`

### Q654
Question: `"True or false: The prosecution must prove a criminal case Any suspicion by police."`
Raw answer key: `"False"`
Selections:
- [ ] `"True"`
- [x] `"False"`
Suggestion: Criminal burden of proof. The question is malformed as `The prosecution must prove a criminal case Any suspicion by police.` Suggested correction: `The prosecution must prove a criminal case beyond reasonable doubt.` and key `True`.

### Q819
Question: `"By law, which TWO types of media have to give a balanced coverage of all political parties and equal time to rival viewpoints before an election?"`
Raw answer key: `["Television","Radio"]`
Selections:
- [x] `"Television"`
- [ ] `"Internet"`
- [ ] `"Newspapers"`
- [x] `"Radio"`
Suggestion: Political media coverage. The key `Television` and `Radio` is intended, but the wording claims equal time for all parties and viewpoints. Suggested correction: ask which media are subject to statutory due-impartiality rules and avoid claiming blanket equal time.

### Q840
Question: `"Which two of the following religious communities celebrate Diwali?"`
Raw answer key: `["Hindus","Sikhs"]`
Selections:
- [ ] `"Buddhists"`
- [x] `"Hindus"`
- [ ] `"Jews"`
- [x] `"Sikhs"`
Suggestion: Diwali communities. Buddhists can celebrate Diwali in some traditions, while Jains are omitted, so the two-answer key is not unique. Suggested correction: ask for all applicable communities or provide unambiguous distractors.

### Q876
Question: `"How often are general elections held in the UK?"`
Raw answer key: `"Every 5 years"`
Selections:
- [ ] `"Every 3 years"`
- [ ] `"Every 4 years"`
- [x] `"Every 5 years"`
- [ ] `"Every 10 years"`
Suggestion: General election frequency. Elections are not held exactly every five years. Suggested correction: ask for the maximum normal period between elections and key `Five years`.

### Q891
Question: `"Racial crime and smoking in public places are examples of:"`
Raw answer key: `"Criminal offences"`
Selections:
- [ ] `"Civil offences"`
- [x] `"Criminal offences"`
Suggestion: Criminal offences. Smoking is not criminal in every public place. Suggested correction: specify smoking in prohibited enclosed public places.

### Q896
Question: `"By law, which TWO types of media have to give a balanced coverage of all political parties and equal time to rival viewpoints before an election?"`
Raw answer key: `["Television","Radio"]`
Selections:
- [x] `"Television"`
- [ ] `"Internet"`
- [ ] `"Newspapers"`
- [x] `"Radio"`
Suggestion: Political media coverage. The key `Television` and `Radio` is intended, but the wording claims equal time for all parties and viewpoints. Suggested correction: ask which media are subject to statutory due-impartiality rules and avoid claiming blanket equal time.

### Q898
Question: `"Which of the following is not a valid UK coin?"`
Raw answer key: `"25p"`
Selections:
- [ ] `"1p"`
- [ ] `"5p"`
- [x] `"25p"`
- [ ] `"£1"`
Suggestion: UK coin denomination. A commemorative 25p coin has existed, so `not a valid UK coin` is ambiguous. Suggested correction: ask for the standard circulating denomination and key `25p`.

### Q902
Question: `"Where should you register if you want to become part of a jury?"`
Raw answer key: `"The electoral register"`
Selections:
- [x] `"The electoral register"`
- [ ] `"Your local church"`
- [ ] `"The NHS"`
- [ ] `"The British Embassy"`
Suggestion: Jury registration. People do not register specifically to join a jury; they are selected from the electoral register. Suggested correction: ask `From which register are prospective jurors selected at random?` and update the age explanation.

### Q932
Question: `"Scotland and Wales use a system called ‘individual registration’ where all those entitled to vote must complete their own registration form."`
Raw answer key: `"False"`
Selections:
- [ ] `"True"`
- [x] `"False"`
Suggestion: Individual electoral registration. The `False` key is outdated: individual registration applies in Scotland and Wales as well as England and Northern Ireland. Suggested correction: key the statement `True` or rewrite it to cover all four nations.

### Q949
Question: `"What was the biggest source of employment during the 18th century?"`
Raw answer key: `"Manufacturing"`
Selections:
- [ ] `"Fishing"`
- [ ] `"Teaching"`
- [ ] `"Aircraft industry"`
- [x] `"Manufacturing"`
Suggestion: Eighteenth-century employment. Agriculture is omitted and remained a major employment sector; manufacturing's rapid growth belongs to later industrialisation. Suggested correction: add `Agriculture` and key it, or ask which sector grew during the Industrial Revolution.

### Q956
Question: `"In 1833 the Emancipation Act abolished slavery throughout the British Empire."`
Raw answer key: `"True"`
Selections:
- [x] `"True"`
- [ ] `"False"`
Suggestion: Emancipation Act. The Act abolished slavery in most of the British Empire, not throughout without exceptions. Suggested correction: replace `throughout` with `in most of`.

### Q961
Question: `"What UK landmark was voted as Britain’s favourite view in 2007?"`
Raw answer key: `"Lake District"`
Selections:
- [ ] `"The Big Ben"`
- [x] `"Lake District"`
- [ ] `"Snowdonia"`
- [ ] `"The London Eye"`
Suggestion: Favourite view. The 2007 winning view was Wastwater, in the Lake District; the answer is a region rather than the view. Suggested correction: add `Wastwater` as the answer or ask which region contained it.

### Q964
Question: `"What do you need to do to apply for a National Insurance Number?"`
Raw answer key: `"Contact the Department for Work and Pensions (DWP)"`
Selections:
- [ ] `"Contact the NHS"`
- [x] `"Contact the Department for Work and Pensions (DWP)"`
- [ ] `"Contact your local MP"`
- [ ] `"Ask you employer to get it for you"`
Suggestion: National Insurance number. The current application route is online, and `you employer` is a typo. Suggested correction: use `Apply online through the GOV.UK National Insurance number service` and correct `your employer`.

### Q975
Question: `"What did Francis Crick discover?"`
Raw answer key: `"The structure of the DNA molecule"`
Selections:
- [ ] `"The MRI (magnetic resonance imaging) scanner"`
- [ ] `"The jet engine"`
- [ ] `"The IVF (in-vitro fertilisation) therapy"`
- [x] `"The structure of the DNA molecule"`
Suggestion: Francis Crick. The wording attributes the DNA discovery to Crick alone. Suggested correction: ask what Crick co-discovered with James Watson, while acknowledging the wider scientific contributions.

### Q984
Question: `"What year were women given the right to vote?"`
Raw answer key: `"1918"`
Selections:
- [x] `"1918"`
- [ ] `"1925"`
- [ ] `"1949"`
- [ ] `"1914"`
Suggestion: Women's voting rights. `What year were women given the right to vote?` implies all women received the vote in 1918. Suggested correction: specify qualifying women aged 30 and over in 1918, or ask when women received the vote on the same terms as men (`1928`).

### Q988
Question: `"How often are the members of the Welsh government elected?"`
Raw answer key: `"Every 4 years"`
Selections:
- [ ] `"Every 5 years"`
- [ ] `"Every 2 years"`
- [x] `"Every 4 years"`
- [ ] `"Every 3 years"`
Suggestion: Welsh elections. Members of the Senedd, not members of the Welsh Government, are elected; the membership explanation is stale. Suggested correction: ask how often Members of the Senedd are elected and remove the outdated membership count.

### Q990
Question: `"The Man Booker Prize is awarded in which of the following categories?"`
Raw answer key: `"Literature"`
Selections:
- [ ] `"Films"`
- [ ] `"Sport"`
- [x] `"Literature"`
- [ ] `"Music"`
Suggestion: Booker Prize. `Man Booker Prize` is obsolete terminology and the eligibility explanation is outdated. Suggested correction: use `Booker Prize` and current eligibility wording.

### Q995
Question: `"£100 is the highest value note in circulation in the UK."`
Raw answer key: `"False"`
Selections:
- [ ] `"True"`
- [x] `"False"`
Suggestion: Highest UK banknote. The unqualified `£100 is the highest value note in circulation in the UK` is ambiguous because Scottish and Northern Irish banks issue £100 notes while the Bank of England's highest is £50. Suggested correction: specify `highest Bank of England note` or state the UK-wide distinction.

### Q1007
Question: `"Who was Admiral Nelson?"`
Raw answer key: `"A British officer in charge of the British fleet at the Battle of Trafalgar against the Spanish fleet"`
Selections:
- [ ] `"One of the tribal leaders who fought against the Romans"`
- [ ] `"A British officer in charge of the British army at the Battle of Waterloo"`
- [ ] `"A British general who established the authority of the English Parliament"`
- [x] `"A British officer in charge of the British fleet at the Battle of Trafalgar against the Spanish fleet"`
Suggestion: Admiral Nelson. The answer says Trafalgar was against the Spanish fleet only. Suggested correction: say `the combined French and Spanish fleet`.

### Q1026
Question: `"How many members does the Welsh government have?"`
Raw answer key: `"60"`
Selections:
- [ ] `"150"`
- [ ] `"120"`
- [ ] `"90"`
- [x] `"60"`
Suggestion: Welsh Government membership. The question confuses the Welsh Government executive with the Senedd legislature and gives the stale membership figure of 60. Suggested correction: ask how many Members the Senedd has and use the current figure of 96 where appropriate.

### Q1038
Question: `"Who built a wall in the north of England to keep out the Picts (ancestors of the Scottish people)?"`
Raw answer key: `"Emperor Hadrian"`
Selections:
- [ ] `"Boudicca"`
- [x] `"Emperor Hadrian"`
- [ ] `"Emperor Claudius"`
- [ ] `"Julius Caesar"`
Suggestion: Hadrian's Wall and the Picts. The wall was built to secure the Roman frontier, not simply to keep out later Picts, and Picts were not all ancestors of Scottish people. Suggested correction: ask which emperor ordered the wall to defend the northern frontier of Roman Britain.

### Q1050
Question: `"By law, radio and television coverage of the political parties must be balanced and so equal time has to be given to rival viewpoints."`
Raw answer key: `"True"`
Selections:
- [x] `"True"`
- [ ] `"False"`
Suggestion: Broadcast impartiality. The `True` key endorses an equal-time claim that overstates UK broadcasting law. Suggested correction: use due impartiality/due weight wording or key the unqualified statement `False`.

### Q1114
Question: `"How are the members of the Northern Ireland Parliament elected?"`
Raw answer key: `"By a system of proportional representation"`
Selections:
- [x] `"By a system of proportional representation"`
- [ ] `"Using a system of ranked voting"`
- [ ] `"Using the first past the post system"`
- [ ] `"Using a runoff system"`
Suggestion: Northern Ireland legislature. The question says `Northern Ireland Parliament`. Suggested correction: use `Northern Ireland Assembly`.

### Q1130
Question: `"Who was elected as British Prime Minister in 1945?"`
Raw answer key: `"Clement Attlee"`
Selections:
- [x] `"Clement Attlee"`
- [ ] `"Winston Churchill"`
- [ ] `"Harold Wilson"`
- [ ] `"Harold Macmillan"`
Suggestion: 1945 Prime Minister. Voters elected MPs/a government, not the Prime Minister directly. Suggested correction: ask who became Prime Minister after Labour won the 1945 general election.

### Q1140
Question: `"Which film produced in the UK was one of the most commercially successful films of all time and one of the highest-grossing film franchises?"`
Raw answer key: `"Harry Potter"`
Selections:
- [x] `"Harry Potter"`
- [ ] `"Spider-man"`
- [ ] `"The Lord of the Rings"`
- [ ] `"Indiana Jones"`
Suggestion: Harry Potter. The question asks which film but describes a franchise. Suggested correction: change `film` to `film franchise`.

### Q1168
Question: `"Who can apply for the National Citizen Service programme?"`
Raw answer key: `"16- and 17-year-olds"`
Selections:
- [ ] `"14- and 15-year-olds"`
- [ ] `"15- and 16-year-olds"`
- [x] `"16- and 17-year-olds"`
- [ ] `"17- and 18-year-olds"`
Suggestion: National Citizen Service. The question treats the programme as current even though it concluded on 31 March 2025. Suggested correction: make it explicitly historical or retire the record.

### Q1209
Question: `"According to the Life in the UK handbook, what are two responsibilities that you will have as a British citizen or permanent resident of the UK?"`
Raw answer key: `["To look after the area in which you live and the environment","To look after yourself and your family"]`
Selections:
- [ ] `"To carry a weapon of any kind, even if it is for self-defence"`
- [x] `"To look after the area in which you live and the environment"`
- [x] `"To look after yourself and your family"`
- [ ] `"Noblemen who formed part of the king’s council of advisers"`
- [ ] `"Women in Britain today make up about half of the workforce."`
Suggestion: Responsibilities question. The option set contains unrelated fragments about noblemen and women in the workforce, indicating cross-record contamination. Suggested correction: use four coherent options and retain the two responsibility answers as the key.

### Q1215
Question: `"According to the Life in the UK handbook, when were men and women given the right to vote at the age of 21?"`
Raw answer key: `"1928"`
Selections:
- [ ] `"Corn"`
- [ ] `"1514"`
- [ ] `"Cork"`
- [x] `"1928"`
Suggestion: Women's voting rights. Men already had the vote at 21; 1928 gave women voting rights on the same terms. Suggested correction: ask when women were given the vote at 21, the same as men.

### Q1244
Question: `"Which of the following statements is TRUE?"`
Raw answer key: `"Anyone who is on the electoral register and is aged 18 to 70 can be asked to serve on a jury."`
Selections:
- [ ] `"Anyone who is on the electoral register and is aged 21 to 70 can be asked to serve on a jury."`
- [x] `"Anyone who is on the electoral register and is aged 18 to 70 can be asked to serve on a jury."`
- [ ] `"Anyone who is on the electoral register and is aged 25 to 70 can be asked to serve on a jury."`
- [ ] `"Anyone who is on the electoral register and is aged 16 to 70 can be asked to serve on a jury."`
Suggestion: Jury age. The answer/explanation uses the obsolete upper age of 70. Suggested correction: use the current generally applicable range `18 to 75`.

### Q1251
Question: `"Which of the following statements is TRUE?"`
Raw answer key: `"By law, radio and television coverage of the political parties must be balanced and so equal time has to be given to..."`
Selections:
- [x] `"By law, radio and television coverage of the political parties must be balanced and so equal time has to be given to..."`
- [ ] `"By law, Internet and Internet coverage of the political parties must be balanced and so equal time has to be given to ri..."`
- [ ] `"By law, Newspapers and Newspapers coverage of the political parties must be balanced and so equal time has to be given t..."`
Suggestion: Truncated political-media statements. Every option, including the key, is truncated and contains corrupted wording such as `Internet and Internet coverage`. Suggested correction: restore complete options and use due-impartiality wording.

### Q1252
Question: `"According to the Life in the UK handbook, by law, which TWO types of media have to give a balanced coverage of all political parties and equal time to rival viewpoints before an election?"`
Raw answer key: `["Television","Radio"]`
Selections:
- [ ] `"17th March"`
- [ ] `"Hovercraft"`
- [x] `"Radio"`
- [ ] `"Protestant"`
- [x] `"Television"`
Suggestion: Political media coverage. Radio and television are the intended pair, but `equal time` for all parties/viewpoints is legally overbroad. Suggested correction: ask which media are subject to broadcast due-impartiality rules.

### Q1253
Question: `"Complete the statement: \"_______ is a British overseas territory linked to the UK, but it is not part of it.\""`
Raw answer key: `"The Channel Islands"`
Selections:
- [ ] `"The Cambridge Tales"`
- [ ] `"Sir Roger Bannister"`
- [ ] `"Sophie Christiansen"`
- [x] `"The Channel Islands"`
Suggestion: Channel Islands status. The questions call the Channel Islands a British Overseas Territory and use incorrect singular agreement. Suggested correction: state that the Channel Islands are Crown Dependencies linked to the UK but not part of it.

### Q1254
Question: `"Complete the statement: \"The _______ Islands is a British overseas territory linked to the UK, but it is not part of it.\""`
Raw answer key: `"Channel"`
Selections:
- [x] `"Channel"`
- [ ] `"Fishing"`
- [ ] `"Austria"`
- [ ] `"Henry V"`
Suggestion: Channel Islands status. The questions call the Channel Islands a British Overseas Territory and use incorrect singular agreement. Suggested correction: state that the Channel Islands are Crown Dependencies linked to the UK but not part of it.

### Q1255
Question: `"Complete the statement: \"The Channel _______ is a British overseas territory linked to the UK, but it is not part of it.\""`
Raw answer key: `"Islands"`
Selections:
- [ ] `"In 1922"`
- [x] `"Islands"`
- [ ] `"Knights"`
- [ ] `"£10,000"`
Suggestion: Channel Islands status. The questions call the Channel Islands a British Overseas Territory and use incorrect singular agreement. Suggested correction: state that the Channel Islands are Crown Dependencies linked to the UK but not part of it.

### Q1276
Question: `"Complete the statement: \"In _______, women over the age of 30 were given voting rights and the right to stand for Parliament, partly in recognition of the contribution women made to the war effort during the First World War.\""`
Raw answer key: `"1918"`
Selections:
- [ ] `"1588"`
- [ ] `"Euro"`
- [x] `"1918"`
- [ ] `"1923"`
Suggestion: 1918 franchise. The wording omits the property qualification for women over 30. Suggested correction: say qualifying women aged 30 and over gained the vote in 1918, while equal voting terms came in 1928.

### Q1277
Question: `"Complete the statement: \"In 1918, women over the age of 30 were given voting rights and the right to stand for Parliament, partly in recognition of the contribution women made to the war effort during the _______.\""`
Raw answer key: `"First World War"`
Selections:
- [ ] `"The Black Death"`
- [ ] `"Charles Dickens"`
- [ ] `"The Crown Court"`
- [x] `"First World War"`
Suggestion: 1918 franchise. The wording omits the property qualification for women over 30. Suggested correction: say qualifying women aged 30 and over gained the vote in 1918, while equal voting terms came in 1928.

### Q1278
Question: `"Complete the statement: \"In 1918, women over the age of 30 were given voting rights and the right to stand for _______, partly in recognition of the contribution women made to the war effort during the First World War.\""`
Raw answer key: `"Parliament"`
Selections:
- [ ] `"Henry VIII"`
- [ ] `"Lord Byron"`
- [ ] `"Around 20%"`
- [x] `"Parliament"`
Suggestion: 1918 franchise. The wording omits the property qualification for women over 30. Suggested correction: say qualifying women aged 30 and over gained the vote in 1918, while equal voting terms came in 1928.

### Q1284
Question: `"Which of the following statements is TRUE?"`
Raw answer key: `"The first farmers arrived in Britain 6,000 years ago. The ancestors of these first farmers probably came from..."`
Selections:
- [x] `"The first farmers arrived in Britain 6,000 years ago. The ancestors of these first farmers probably came from..."`
- [ ] `"The first farmers arrived in Britain 6,000 years ago. The ancestors of these first farmers probably came from North-west..."`
- [ ] `"The first farmers arrived in Britain 6,000 years ago. The ancestors of these first farmers probably came from South-west..."`
- [ ] `"The first farmers arrived in Britain 6,000 years ago. The ancestors of these first farmers probably came from North-east..."`
Suggestion: Truncated origin statements. All options and the key end in literal `...`, including `probably came from...`. Suggested correction: restore complete alternatives and the full keyed statement.

### Q1288
Question: `"Complete the statement: \"_______.\""`
Raw answer key: `"Winston Churchill"`
Selections:
- [ ] `"Personal computer"`
- [ ] `"Kensington Palace"`
- [ ] `"The Domesday Book"`
- [x] `"Winston Churchill"`
Suggestion: Winston Churchill fragments. The records are orphaned fragments (`Winston _______`) without a factual predicate. Suggested correction: restore the underlying question and a complete statement about Churchill's wartime leadership.

### Q1289
Question: `"Complete the statement: \"Winston _______.\""`
Raw answer key: `"Churchill"`
Selections:
- [x] `"Churchill"`
- [ ] `"St George"`
- [ ] `"Wimbledon"`
- [ ] `"Buddhists"`
Suggestion: Winston Churchill fragments. The records are orphaned fragments (`Winston _______`) without a factual predicate. Suggested correction: restore the underlying question and a complete statement about Churchill's wartime leadership.

### Q1294
Question: `"Complete the statement: \"_______-Saxon kingdoms in England united under King Alfred the Great, who defeated the Vikings.\""`
Raw answer key: `"The Anglo"`
Selections:
- [x] `"The Anglo"`
- [ ] `"Hyde Park"`
- [ ] `"1st March"`
- [ ] `"Snowdonia"`
Suggestion: Anglo-Saxon unification. The wording implies Alfred the Great united all Anglo-Saxon kingdoms. Suggested correction: say the kingdoms were gradually united after Alfred, chiefly under Athelstan, or rewrite the question.

### Q1295
Question: `"Complete the statement: \"The Anglo-Saxon kingdoms in England united under _______ the Great, who defeated the Vikings.\""`
Raw answer key: `"King Alfred"`
Selections:
- [ ] `"The Vikings"`
- [ ] `"Eid al-Fitr"`
- [x] `"King Alfred"`
- [ ] `"Henry Moore"`
Suggestion: Anglo-Saxon unification. The wording implies Alfred the Great united all Anglo-Saxon kingdoms. Suggested correction: say the kingdoms were gradually united after Alfred, chiefly under Athelstan, or rewrite the question.

### Q1296
Question: `"Complete the statement: \"The _______-Saxon kingdoms in England united under King Alfred the Great, who defeated the Vikings.\""`
Raw answer key: `"Anglo"`
Selections:
- [ ] `"Italy"`
- [ ] `"Hindu"`
- [ ] `"1960s"`
- [x] `"Anglo"`
Suggestion: Anglo-Saxon unification. The wording implies Alfred the Great united all Anglo-Saxon kingdoms. Suggested correction: say the kingdoms were gradually united after Alfred, chiefly under Athelstan, or rewrite the question.

### Q1351
Question: `"Which of the following statements is TRUE?"`
Raw answer key: `"If you think someone is trying to persuade you to join an extremist or terrorist cause, you should notify your local..."`
Selections:
- [ ] `"If you think someone is trying to persuade you to join an extremist or terrorist cause, you should notify The Home Offic..."`
- [ ] `"If you think someone is trying to persuade you to join an extremist or terrorist cause, you should notify Your family."`
- [x] `"If you think someone is trying to persuade you to join an extremist or terrorist cause, you should notify your local..."`
- [ ] `"If you think someone is trying to persuade you to join an extremist or terrorist cause, you should notify Your local MP."`
Suggestion: Truncated extremist-cause options. The key and distractors end in `The Home Offic...` and `your local...`. Suggested correction: restore complete options, including `notify your local police force`.

### Q1353
Question: `"Complete the statement: \"False. _______ programme, which gives 16- and 17-year-olds the opportunity to enjoy outdoor activities, develop their skills and take part in a community project. Therefore, it is optional.\""`
Raw answer key: `"The National Citizen Service"`
Selections:
- [ ] `"The discovery of steam power"`
- [ ] `"The archbishop of Canterbury"`
- [x] `"The National Citizen Service"`
- [ ] `"The University of Manchester"`
Suggestion: National Citizen Service. The present-tense programme description is stale because the programme ended on 31 March 2025. Suggested correction: make the wording historical or replace it with a current programme.

### Q1354
Question: `"Complete the statement: \"False. The _______ Citizen Service programme, which gives 16- and 17-year-olds the opportunity to enjoy outdoor activities, develop their skills and take part in a community project. Therefore, it is optional.\""`
Raw answer key: `"National"`
Selections:
- [ ] `"Portugal"`
- [ ] `"Dumfries"`
- [ ] `"Cenotaph"`
- [x] `"National"`
Suggestion: National Citizen Service. The present-tense programme description is stale because the programme ended on 31 March 2025. Suggested correction: make the wording historical or replace it with a current programme.

### Q1355
Question: `"Complete the statement: \"False. The National _______ Service programme, which gives 16- and 17-year-olds the opportunity to enjoy outdoor activities, develop their skills and take part in a community project. Therefore, it is optional.\""`
Raw answer key: `"Citizen"`
Selections:
- [x] `"Citizen"`
- [ ] `"Measles"`
- [ ] `"MacBeth"`
- [ ] `"Quakers"`
Suggestion: National Citizen Service. The present-tense programme description is stale because the programme ended on 31 March 2025. Suggested correction: make the wording historical or replace it with a current programme.

### Q1359
Question: `"Complete the statement: \"Britain and _______ developed the world’s only supersonic commercial airliner, Concorde.\""`
Raw answer key: `"France"`
Selections:
- [x] `"France"`
- [ ] `"Canute"`
- [ ] `"Silver"`
- [ ] `"London"`
Suggestion: Concorde. The records call Concorde the world's only supersonic commercial airliner; the Soviet Tu-144 also entered commercial service. Suggested correction: call Concorde one of two supersonic commercial airliners or specify the first scheduled service.

### Q1360
Question: `"Which of the following statements is TRUE?"`
Raw answer key: `"Britain and France developed the world’s only supersonic commercial airliner, Concorde."`
Selections:
- [ ] `"Italy and Italy developed the world’s only supersonic commercial airliner, Concorde."`
- [x] `"Britain and France developed the world’s only supersonic commercial airliner, Concorde."`
- [ ] `"Germany and Germany developed the world’s only supersonic commercial airliner, Concorde."`
Suggestion: Concorde. The records call Concorde the world's only supersonic commercial airliner; the Soviet Tu-144 also entered commercial service. Suggested correction: call Concorde one of two supersonic commercial airliners or specify the first scheduled service.

### Q1361
Question: `"According to the Life in the UK handbook, which two countries developed the Concorde, the world’s only supersonic commercial airliner?"`
Raw answer key: `["Britain","France"]`
Selections:
- [ ] `"Cardiff"`
- [ ] `"Science"`
- [x] `"France"`
- [ ] `"Hansard"`
- [x] `"Britain"`
Suggestion: Concorde. The records call Concorde the world's only supersonic commercial airliner; the Soviet Tu-144 also entered commercial service. Suggested correction: call Concorde one of two supersonic commercial airliners or specify the first scheduled service.

### Q1392
Question: `"Which of the following statements is TRUE?"`
Raw answer key: `"During the ‘Great Depression’ in the 1930s the traditional heavy industries such as shipbuilding were badly affected."`
Selections:
- [ ] `"During the ‘Great Depression’ in the 1930s the traditional heavy industries such as Aviation were badly affected."`
- [ ] `"During the ‘Great Depression’ in the 1930s the traditional heavy industries such as Automobile were badly affected."`
- [ ] `"During the ‘Great Depression’ in the 1930s the traditional heavy industries such as Housing construction were badly affe..."`
- [x] `"During the ‘Great Depression’ in the 1930s the traditional heavy industries such as shipbuilding were badly affected."`
Suggestion: Truncated Great Depression option. One option ends `Housing construction were badly affe...`. Suggested correction: restore a complete distractor and retain the complete shipbuilding key.

### Q1462
Question: `"Which of the following statements is TRUE?"`
Raw answer key: `"By law, radio and television coverage of the political parties must be balanced and so equal time has to be given to..."`
Selections:
- [ ] `"By law, Internet and Internet coverage of the political parties must be balanced and so equal time has to be given to ri..."`
- [x] `"By law, radio and television coverage of the political parties must be balanced and so equal time has to be given to..."`
- [ ] `"By law, Newspapers and Newspapers coverage of the political parties must be balanced and so equal time has to be given t..."`
Suggestion: Truncated broadcast statements. Options/key contain literal truncation and the equal-time claim is inaccurate. Suggested correction: restore all text and use due-impartiality wording.

### Q1463
Question: `"According to the Life in the UK handbook, by law, which TWO types of media have to give a balanced coverage of all political parties and equal time to rival viewpoints before an election?"`
Raw answer key: `["Television","Radio"]`
Selections:
- [ ] `"Henry VIII"`
- [ ] `"Automobile"`
- [x] `"Television"`
- [ ] `"Newspapers"`
- [x] `"Radio"`
Suggestion: Political media coverage. Radio and television are the intended pair, but `equal time` for all parties/viewpoints is legally overbroad. Suggested correction: ask which media are subject to broadcast due-impartiality rules.

### Q1477
Question: `"According to the Life in the UK handbook, where should you register if you want to become part of a jury?"`
Raw answer key: `"The electoral register"`
Selections:
- [ ] `"Christmas Day in Wales"`
- [ ] `"The Battle of Waterloo"`
- [ ] `"The House of Newcastle"`
- [x] `"The electoral register"`
Suggestion: Jury register. The question asks where to register to become part of a jury and gives an outdated `18 to 70` explanation. Suggested correction: ask which register is used to select jurors and use the current age range.

### Q1487
Question: `"Complete the statement: \"The correct answer is _______ II.\""`
Raw answer key: `"Charles"`
Selections:
- [ ] `"In 1918"`
- [ ] `"£10,000"`
- [ ] `"Henry V"`
- [x] `"Charles"`
Suggestion: Charles II fragments. The records are self-referential (`The correct answer is...`) and lack the underlying question. Suggested correction: restore the question about the king defeated by Cromwell who hid in an oak tree; key `Charles II`.

### Q1488
Question: `"Which of the following statements is TRUE?"`
Raw answer key: `"The correct answer is Charles II."`
Selections:
- [x] `"The correct answer is Charles II."`
- [ ] `"The correct answer is Henry IV."`
- [ ] `"The correct answer is Richard III."`
- [ ] `"The correct answer is James I."`
Suggestion: Charles II fragments. The records are self-referential (`The correct answer is...`) and lack the underlying question. Suggested correction: restore the question about the king defeated by Cromwell who hid in an oak tree; key `Charles II`.

### Q1493
Question: `"Complete the statement: \"False. Anyone can make a complaint about the police by going to a police station and writing to the _______ of the police force involved. Complaints can also be made to an independent body: the Independent Police Complaints Commission in England and Wales, the Police Complaints Commissioner for Scotland or the Police Ombudsman for Northern Ireland.\""`
Raw answer key: `"Chief Constable"`
Selections:
- [ ] `"The Restoration"`
- [ ] `"The Renaissance"`
- [ ] `"Oliver Cromwell"`
- [x] `"Chief Constable"`
Suggestion: Police complaint bodies. The Independent Police Complaints Commission and Police Complaints Commissioner are obsolete names. Suggested correction: use the Independent Office for Police Conduct and Police Investigations and Review Commissioner, with current wording.

### Q1494
Question: `"Complete the statement: \"False. Anyone can make a complaint about the police by going to a police station and writing to the Chief Constable of the police force involved. Complaints can also be made to an independent body: the _______ in England and Wales, the Police Complaints Commissioner for Scotland or the Police Ombudsman for Northern Ireland.\""`
Raw answer key: `"Independent Police Complaints Commission"`
Selections:
- [x] `"Independent Police Complaints Commission"`
- [ ] `"The construction of the Tower of London."`
- [ ] `"Represent everyone in their constituency"`
- [ ] `"A salary for members of Parliament (MPs)"`
Suggestion: Police complaint bodies. The Independent Police Complaints Commission and Police Complaints Commissioner are obsolete names. Suggested correction: use the Independent Office for Police Conduct and Police Investigations and Review Commissioner, with current wording.

### Q1495
Question: `"Complete the statement: \"False. Anyone can make a complaint about the police by going to a police station and writing to the Chief Constable of the police force involved. Complaints can also be made to an independent body: the Independent Police Complaints Commission in England and Wales, the _______ for Scotland or the Police Ombudsman for Northern Ireland.\""`
Raw answer key: `"Police Complaints Commissioner"`
Selections:
- [ ] `"The Justice of the Peace Court"`
- [ ] `"Monitoring student’s behaviour"`
- [x] `"Police Complaints Commissioner"`
- [ ] `"The Queen’s Club Championships"`
Suggestion: Police complaint bodies. The Independent Police Complaints Commission and Police Complaints Commissioner are obsolete names. Suggested correction: use the Independent Office for Police Conduct and Police Investigations and Review Commissioner, with current wording.

### Q1500
Question: `"Which of the following statements is TRUE?"`
Raw answer key: `"During the 18th century, new ideas about politics, philosophy and science were developed. This is often called ‘the..."`
Selections:
- [ ] `"During the 18th century, new ideas about politics, philosophy and science were developed. This is often called ‘The Refo..."`
- [ ] `"During the 18th century, new ideas about politics, philosophy and science were developed. This is often called ‘The Swin..."`
- [x] `"During the 18th century, new ideas about politics, philosophy and science were developed. This is often called ‘the..."`
- [ ] `"During the 18th century, new ideas about politics, philosophy and science were developed. This is often called ‘The Glor..."`
Suggestion: Truncated Enlightenment statements. Every option and the key ends in literal truncation such as `the...`. Suggested correction: restore the complete key ending `the Enlightenment` and complete distractors.

### Q1533
Question: `"Which of the following statements is TRUE?"`
Raw answer key: `"The correct answer is William the Conqueror."`
Selections:
- [ ] `"The correct answer is Oliver Cromwell."`
- [ ] `"The correct answer is Queen Victoria."`
- [ ] `"The correct answer is Queen Elizabeth I."`
- [x] `"The correct answer is William the Conqueror."`
Suggestion: Self-referential true statements. The options say `The correct answer is...` instead of presenting facts. Suggested correction: restore the underlying substantive question and factual alternatives.

### Q1536
Question: `"Which of the following statements is TRUE?"`
Raw answer key: `"National Parks are areas of protected countryside that everyone can visit, and where people live, work and look after..."`
Selections:
- [ ] `"National Parks are Giant greenhouses that everyone can visit, and where people live, work and look after the landscape."`
- [ ] `"National Parks are Medieval buildings that everyone can visit, and where people live, work and look after the landscape."`
- [x] `"National Parks are areas of protected countryside that everyone can visit, and where people live, work and look after..."`
Suggestion: National Parks. The keyed option is truncated and the record has only three options. Suggested correction: restore the complete answer about protected countryside.

### Q1547
Question: `"Which of the following statements is TRUE?"`
Raw answer key: `"The correct answer is Charles I."`
Selections:
- [ ] `"The correct answer is Charles II."`
- [x] `"The correct answer is Charles I."`
- [ ] `"The correct answer is James VII."`
- [ ] `"The correct answer is James I."`
Suggestion: Self-referential true statements. The options say `The correct answer is...` instead of presenting facts. Suggested correction: restore the underlying substantive question and factual alternatives.

### Q1560
Question: `"According to the Life in the UK handbook, scotland and Wales use a system called ‘individual registration’ where all those entitled to vote must complete their own registration form.?"`
Raw answer key: `"False"`
Selections:
- [ ] `"Boers"`
- [ ] `"Sikhs"`
- [x] `"False"`
- [ ] `"Music"`
Suggestion: Individual registration. The statement that Scotland and Wales use individual registration is keyed `False`, but is true under current facts. Suggested correction: add `True` and key it, or date-label the old wording.

### Q1574
Question: `"Which of the following statements is TRUE?"`
Raw answer key: `"The correct answer is Henry VIII."`
Selections:
- [ ] `"The correct answer is William of Orange."`
- [ ] `"The correct answer is Winston Churchill."`
- [x] `"The correct answer is Henry VIII."`
- [ ] `"The correct answer is Oliver Cromwell."`
Suggestion: Self-referential true statements. The options say `The correct answer is...` instead of presenting facts. Suggested correction: restore the underlying substantive question and factual alternatives.

### Q1585
Question: `"Complete the statement: \"_______ and the Bayeux Tapestry.\""`
Raw answer key: `"The Domesday Book"`
Selections:
- [x] `"The Domesday Book"`
- [ ] `"He was a musician"`
- [ ] `"Kensington Palace"`
- [ ] `"William of Orange"`
Suggestion: Domesday Book and Bayeux Tapestry. These are isolated noun fragments with no complete proposition. Suggested correction: ask which two sources provide evidence about the Norman Conquest.

### Q1586
Question: `"Complete the statement: \"The Domesday Book and the _______.\""`
Raw answer key: `"Bayeux Tapestry"`
Selections:
- [ ] `"The Home Office"`
- [ ] `"The White Tower"`
- [ ] `"The Black Death"`
- [x] `"Bayeux Tapestry"`
Suggestion: Domesday Book and Bayeux Tapestry. These are isolated noun fragments with no complete proposition. Suggested correction: ask which two sources provide evidence about the Norman Conquest.

### Q1587
Question: `"Complete the statement: \"The _______ Book and the Bayeux Tapestry.\""`
Raw answer key: `"Domesday"`
Selections:
- [ ] `"Cornwall"`
- [ ] `"Policing"`
- [x] `"Domesday"`
- [ ] `"Hannukah"`
Suggestion: Domesday Book and Bayeux Tapestry. These are isolated noun fragments with no complete proposition. Suggested correction: ask which two sources provide evidence about the Norman Conquest.

### Q1598
Question: `"Which of the following statements is TRUE?"`
Raw answer key: `"As a British citizen you should respect and obey the law and look after the area in which you live and the environment..."`
Selections:
- [x] `"As a British citizen you should respect and obey the law and look after the area in which you live and the environment..."`
- [ ] `"As a British citizen you should Take part in religious activities and Take part in religious activities are the correct ..."`
- [ ] `"As a British citizen you should Vote in all elections and Vote in all elections are the correct answers."`
Suggestion: British citizen statements. The keyed option and a distractor are truncated. Suggested correction: restore complete statements, especially the keyed option ending `the environment.`

### Q1599
Question: `"According to the Life in the UK handbook, as a British citizen, you should:?"`
Raw answer key: `["Respect and obey the law","Look after the area in which you live and the environment"]`
Selections:
- [ ] `"The Archbishop of London"`
- [ ] `"The 40 days after Easter"`
- [ ] `"Your local police force."`
- [x] `"Respect and obey the law"`
- [x] `"Look after the area in which you live and the environment"`
Suggestion: British citizen responsibilities. The key contains two answers but the question does not say two answers are required. Suggested correction: explicitly ask for `Which TWO responsibilities...`.

### Q1615
Question: `"Which of the following statements is TRUE?"`
Raw answer key: `"The correct answer is the MacDonalds of Glencoe."`
Selections:
- [ ] `"The correct answer is The McDowalls of Garthland."`
- [x] `"The correct answer is the MacDonalds of Glencoe."`
- [ ] `"The correct answer is The MacLaine of Lochbuie."`
- [ ] `"The correct answer is The Macpherson of Cluny."`
Suggestion: Self-referential true statements. The options say `The correct answer is...` instead of presenting facts. Suggested correction: restore the underlying substantive question and factual alternatives.

### Q1624
Question: `"According to the Life in the UK handbook, in 1833 the Emancipation Act abolished slavery throughout the British Empire.?"`
Raw answer key: `"True"`
Selections:
- [ ] `"1823"`
- [ ] `"1948"`
- [ ] `"1835"`
- [x] `"True"`
Suggestion: Slavery Abolition Act. The statement says the 1833 Act abolished slavery throughout the Empire; it applied to most colonies and took effect in 1834. Suggested correction: qualify the scope/date and add a valid true/false choice.

### Q1631
Question: `"Complete the statement: \"_______ of Marston Moor and Naseby.\""`
Raw answer key: `"The Battles"`
Selections:
- [x] `"The Battles"`
- [ ] `"Your family"`
- [ ] `"Richard III"`
- [ ] `"Good Friday"`
Suggestion: Civil War battles. The records are incomplete noun phrases without a factual proposition. Suggested correction: ask which two battles were fought during the English Civil War.

### Q1632
Question: `"Complete the statement: \"The Battles of _______ and Naseby.\""`
Raw answer key: `"Marston Moor"`
Selections:
- [x] `"Marston Moor"`
- [ ] `"Lucian Freud"`
- [ ] `"Father’s Day"`
- [ ] `"Suffragettes"`
Suggestion: Civil War battles. The records are incomplete noun phrases without a factual proposition. Suggested correction: ask which two battles were fought during the English Civil War.

### Q1633
Question: `"Complete the statement: \"The _______ of Marston Moor and Naseby.\""`
Raw answer key: `"Battles"`
Selections:
- [x] `"Battles"`
- [ ] `"Grimsby"`
- [ ] `"Hadrian"`
- [ ] `"Belfast"`
Suggestion: Civil War battles. The records are incomplete noun phrases without a factual proposition. Suggested correction: ask which two battles were fought during the English Civil War.

### Q1641
Question: `"Complete the statement: \"The correct answer is the _______.\""`
Raw answer key: `"Reformation"`
Selections:
- [ ] `"A sportsman"`
- [ ] `"The cabinet"`
- [ ] `"Good Friday"`
- [x] `"Reformation"`
Suggestion: Reformation fragment. `The correct answer is the _______.` has no context. Suggested correction: restore the underlying question, such as the movement against the authority of the Pope.

### Q1642
Question: `"Which of the following statements is TRUE?"`
Raw answer key: `"The correct answer is the Reformation."`
Selections:
- [ ] `"The correct answer is The Renaissance."`
- [ ] `"The correct answer is The Enlightenment."`
- [ ] `"The correct answer is The Glorious Revolution."`
- [x] `"The correct answer is the Reformation."`
Suggestion: Self-referential true statements. The options say `The correct answer is...` instead of presenting facts. Suggested correction: restore the underlying substantive question and factual alternatives.

### Q1665
Question: `"Complete the statement: \"False. Anyone can make a complaint about the police by going to a police station and writing to the _______ of the police force involved. Complaints can also be made to an independent body: the Independent Police Complaints Commission in England and Wales, the Police Complaints Commissioner for Scotland or the Police Ombudsman for Northern Ireland.\""`
Raw answer key: `"Chief Constable"`
Selections:
- [ ] `"The Black Death"`
- [ ] `"Every two weeks"`
- [ ] `"Emperor Hadrian"`
- [x] `"Chief Constable"`
Suggestion: Police complaints. The true statement is prefixed with `False.`, and the named bodies are obsolete. Suggested correction: remove the prefix and use current England/Wales, Scotland, and Northern Ireland complaint bodies.

### Q1666
Question: `"Complete the statement: \"False. Anyone can make a complaint about the police by going to a police station and writing to the Chief Constable of the police force involved. Complaints can also be made to an independent body: the _______ in England and Wales, the Police Complaints Commissioner for Scotland or the Police Ombudsman for Northern Ireland.\""`
Raw answer key: `"Independent Police Complaints Commission"`
Selections:
- [x] `"Independent Police Complaints Commission"`
- [ ] `"The IVF (in-vitro fertilisation) therapy"`
- [ ] `"Represent everyone in their constituency"`
- [ ] `"The construction of the Tower of London."`
Suggestion: Police complaints. The true statement is prefixed with `False.`, and the named bodies are obsolete. Suggested correction: remove the prefix and use current England/Wales, Scotland, and Northern Ireland complaint bodies.

### Q1667
Question: `"Complete the statement: \"False. Anyone can make a complaint about the police by going to a police station and writing to the Chief Constable of the police force involved. Complaints can also be made to an independent body: the Independent Police Complaints Commission in England and Wales, the _______ for Scotland or the Police Ombudsman for Northern Ireland.\""`
Raw answer key: `"Police Complaints Commissioner"`
Selections:
- [x] `"Police Complaints Commissioner"`
- [ ] `"After the Anglo-Saxon invasion"`
- [ ] `"It restricted the King’s power"`
- [ ] `"The Flag of the United Kingdom"`
Suggestion: Police complaints. The true statement is prefixed with `False.`, and the named bodies are obsolete. Suggested correction: remove the prefix and use current England/Wales, Scotland, and Northern Ireland complaint bodies.

### Q1676
Question: `"Complete the statement: \"_______ discovered the structure of the DNA molecule.\""`
Raw answer key: `"Francis Crick"`
Selections:
- [ ] `"Julius Caesar"`
- [x] `"Francis Crick"`
- [ ] `"Every 4 years"`
- [ ] `"A voting slip"`
Suggestion: DNA discovery. The questions attribute discovery of DNA structure to Francis Crick alone. Suggested correction: say Crick co-discovered it with James Watson while acknowledging the wider contributions.

### Q1677
Question: `"Complete the statement: \"Francis _______ discovered the structure of the DNA molecule.\""`
Raw answer key: `"Crick"`
Selections:
- [ ] `"Poems"`
- [x] `"Crick"`
- [ ] `"Latin"`
- [ ] `"Hindu"`
Suggestion: DNA discovery. The questions attribute discovery of DNA structure to Francis Crick alone. Suggested correction: say Crick co-discovered it with James Watson while acknowledging the wider contributions.

### Q1678
Question: `"Which of the following statements is TRUE?"`
Raw answer key: `"Francis Crick discovered the structure of the DNA molecule."`
Selections:
- [ ] `"Francis Crick discovered The MRI (magnetic resonance imaging) scanner."`
- [x] `"Francis Crick discovered the structure of the DNA molecule."`
- [ ] `"Francis Crick discovered The IVF (in-vitro fertilisation) therapy."`
- [ ] `"Francis Crick discovered The jet engine."`
Suggestion: DNA discovery. The questions attribute discovery of DNA structure to Francis Crick alone. Suggested correction: say Crick co-discovered it with James Watson while acknowledging the wider contributions.

### Q1679
Question: `"According to the Life in the UK handbook, northern Ireland and Scotland have their own banknotes, which are valid everywhere in the UK.?"`
Raw answer key: `"True"`
Selections:
- [x] `"True"`
- [ ] `"Soho"`
- [ ] `"Fife"`
- [ ] `"1941"`
Suggestion: Scottish and Northern Irish banknotes. The statement omits that these notes are not legal tender everywhere and may be refused. Suggested correction: say they are valid currency throughout the UK but are not legal tender everywhere.

### Q1696
Question: `"Complete the statement: \"In _______, women over the age of 30 were given voting rights and the right to stand for Parliament, partly in recognition of the contribution women made to the war effort during the First World War.\""`
Raw answer key: `"1918"`
Selections:
- [ ] `"1215"`
- [ ] `"1823"`
- [ ] `"1938"`
- [x] `"1918"`
Suggestion: 1918 women's rights. The wording omits property qualifications and conflates voting rights with the separate right to stand for Parliament. Suggested correction: state the qualifying 1918 franchise and distinguish it from the 1928 equal franchise.

### Q1697
Question: `"Complete the statement: \"In 1918, women over the age of 30 were given voting rights and the right to stand for Parliament, partly in recognition of the contribution women made to the war effort during the _______.\""`
Raw answer key: `"First World War"`
Selections:
- [ ] `"The Carta Magna"`
- [ ] `"James Callaghan"`
- [x] `"First World War"`
- [ ] `"Charlie Chaplin"`
Suggestion: 1918 women's rights. The wording omits property qualifications and conflates voting rights with the separate right to stand for Parliament. Suggested correction: state the qualifying 1918 franchise and distinguish it from the 1928 equal franchise.

### Q1698
Question: `"Complete the statement: \"In 1918, women over the age of 30 were given voting rights and the right to stand for _______, partly in recognition of the contribution women made to the war effort during the First World War.\""`
Raw answer key: `"Parliament"`
Selections:
- [ ] `"Penicillin"`
- [ ] `"The police"`
- [x] `"Parliament"`
- [ ] `"St Andrews"`
Suggestion: 1918 women's rights. The wording omits property qualifications and conflates voting rights with the separate right to stand for Parliament. Suggested correction: state the qualifying 1918 franchise and distinguish it from the 1928 equal franchise.

### Q1708
Question: `"Complete the statement: \"There are 60 members of the _______ government or members of the Senedd (SMs) and elections are held every four years using a form of proportional representation.\""`
Raw answer key: `"Welsh"`
Selections:
- [ ] `"Crime"`
- [ ] `"Films"`
- [ ] `"Boers"`
- [x] `"Welsh"`
Suggestion: Senedd membership and elections. The records confuse the Welsh Government with the Senedd, use `SMs`, give 60 members, and say elections occur every four years. Suggested correction: refer to the Senedd and `MSs`, update the membership/election details, and remove the executive/legislature confusion.

### Q1709
Question: `"Complete the statement: \"There are 60 members of the Welsh government or members of the _______ (SMs) and elections are held every four years using a form of proportional representation.\""`
Raw answer key: `"Senedd"`
Selections:
- [ ] `"£8,000"`
- [x] `"Senedd"`
- [ ] `"County"`
- [ ] `"Harold"`
Suggestion: Senedd membership and elections. The records confuse the Welsh Government with the Senedd, use `SMs`, give 60 members, and say elections occur every four years. Suggested correction: refer to the Senedd and `MSs`, update the membership/election details, and remove the executive/legislature confusion.

### Q1710
Question: `"Complete the statement: \"There are 60 members of the Welsh government or members of the Senedd (SMs) and elections are held every _______ years using a form of proportional representation.\""`
Raw answer key: `"four"`
Selections:
- [ ] `"1066"`
- [ ] `"1835"`
- [ ] `"1807"`
- [x] `"four"`
Suggestion: Senedd membership and elections. The records confuse the Welsh Government with the Senedd, use `SMs`, give 60 members, and say elections occur every four years. Suggested correction: refer to the Senedd and `MSs`, update the membership/election details, and remove the executive/legislature confusion.

### Q1714
Question: `"Complete the statement: \"The Man Booker Prize for Fiction is awarded annually for the best fiction novel (literature) written by an author from the Commonwealth, Ireland or Zimbabwe. It has been awarded since _______. Past winners include Ian McEwan, Hilary Mantel and Julian Barnes.\""`
Raw answer key: `"1968"`
Selections:
- [ ] `"1939"`
- [ ] `"Rose"`
- [ ] `"1948"`
- [x] `"1968"`
Suggestion: Booker Prize history. The records use `Man Booker Prize` and say it was awarded since 1968; the first award was in 1969 for a 1968 publication. Suggested correction: use `Booker Prize` and specify the first award/date accurately.

### Q1715
Question: `"Complete the statement: \"_______ for Fiction is awarded annually for the best fiction novel (literature) written by an author from the Commonwealth, Ireland or Zimbabwe. It has been awarded since 1968. Past winners include Ian McEwan, Hilary Mantel and Julian Barnes.\""`
Raw answer key: `"The Man Booker Prize"`
Selections:
- [x] `"The Man Booker Prize"`
- [ ] `"At Buckingham Palace"`
- [ ] `"The names of animals"`
- [ ] `"North east of Europe"`
Suggestion: Booker Prize history. The records use `Man Booker Prize` and say it was awarded since 1968; the first award was in 1969 for a 1968 publication. Suggested correction: use `Booker Prize` and specify the first award/date accurately.

### Q1716
Question: `"Complete the statement: \"The Man Booker Prize for Fiction is awarded annually for the best fiction novel (literature) written by an author from the Commonwealth, Ireland or Zimbabwe. It has been awarded since 1968. Past winners include Ian McEwan, _______ and Julian Barnes.\""`
Raw answer key: `"Hilary Mantel"`
Selections:
- [ ] `"South America"`
- [ ] `"Ash Wednesday"`
- [x] `"Hilary Mantel"`
- [ ] `"Support peers"`
Suggestion: Booker Prize history. The records use `Man Booker Prize` and say it was awarded since 1968; the first award was in 1969 for a 1968 publication. Suggested correction: use `Booker Prize` and specify the first award/date accurately.

### Q1726
Question: `"According to the Life in the UK handbook, £100 is the highest value note in circulation in the UK.?"`
Raw answer key: `"False"`
Selections:
- [x] `"False"`
- [ ] `"1950s"`
- [ ] `"Hindu"`
- [ ] `"Jokes"`
Suggestion: Highest-value note. The options contain no true answer for the unqualified UK-wide wording because Scottish and Northern Irish banks issue £100 notes. Suggested correction: add `True`, or ask specifically about Bank of England notes, whose highest denomination is £50.

### Q1742
Question: `"Complete the statement: \"_______.\""`
Raw answer key: `"The Boer War"`
Selections:
- [ ] `"Isaac Newton"`
- [x] `"The Boer War"`
- [ ] `"South Africa"`
- [ ] `"Kate Winslet"`
Suggestion: Boer War fragments. The records are incomplete statements such as `The _______ War.` Suggested correction: ask which war took place in South Africa from 1899 to 1902.

### Q1743
Question: `"Complete the statement: \"The _______ War.\""`
Raw answer key: `"Boer"`
Selections:
- [ ] `"1588"`
- [ ] `"1942"`
- [ ] `"1835"`
- [x] `"Boer"`
Suggestion: Boer War fragments. The records are incomplete statements such as `The _______ War.` Suggested correction: ask which war took place in South Africa from 1899 to 1902.

### Q1745
Question: `"Complete the statement: \"This statement is _______.\""`
Raw answer key: `"True"`
Selections:
- [ ] `"1940"`
- [ ] `"Peso"`
- [ ] `"1949"`
- [x] `"True"`
Suggestion: Empty true/false statement. The question only says `This statement is _______.` with no proposition. Suggested correction: restore the missing statement or delete the record.

### Q1754
Question: `"Complete the statement: \"_______ was in charge of the British fleet at the Battle of Trafalgar against the Spanish fleet and was killed in the battle.\""`
Raw answer key: `"Admiral Nelson"`
Selections:
- [ ] `"Clement Attlee"`
- [ ] `"Auld Lang Syne"`
- [ ] `"Pound Sterling"`
- [x] `"Admiral Nelson"`
Suggestion: Battle of Trafalgar. The records say Nelson fought the Spanish fleet only. Suggested correction: say the combined French and Spanish fleet.

### Q1755
Question: `"Complete the statement: \"Admiral _______ was in charge of the British fleet at the Battle of Trafalgar against the Spanish fleet and was killed in the battle.\""`
Raw answer key: `"Nelson"`
Selections:
- [x] `"Nelson"`
- [ ] `"Potato"`
- [ ] `"Estate"`
- [ ] `"Silver"`
Suggestion: Battle of Trafalgar. The records say Nelson fought the Spanish fleet only. Suggested correction: say the combined French and Spanish fleet.

### Q1756
Question: `"Complete the statement: \"Admiral Nelson was in charge of the _______ fleet at the Battle of Trafalgar against the Spanish fleet and was killed in the battle.\""`
Raw answer key: `"British"`
Selections:
- [ ] `"Claudia"`
- [ ] `"Science"`
- [x] `"British"`
- [ ] `"Measles"`
Suggestion: Battle of Trafalgar. The records say Nelson fought the Spanish fleet only. Suggested correction: say the combined French and Spanish fleet.

### Q1761
Question: `"Complete the statement: \"False. You can contact MPs by letter or telephone at their constituency office, or at their office in the _______ of Commons. In addition, many MPs, Assembly members, MSPs and MEPs hold regular local ‘surgeries’, where constituents can go in person to talk about issues that are of concern to them.\""`
Raw answer key: `"House"`
Selections:
- [ ] `"NSPCC"`
- [ ] `"Sikhs"`
- [ ] `"Latin"`
- [x] `"House"`
Suggestion: MPs and surgeries. The true statement is prefixed with `False.` and refers to UK MEPs, which no longer exist. Suggested correction: remove the prefix and use current representatives.

### Q1762
Question: `"Complete the statement: \"False. You can contact MPs by letter or telephone at their constituency office, or at their office in the House of _______. In addition, many MPs, Assembly members, MSPs and MEPs hold regular local ‘surgeries’, where constituents can go in person to talk about issues that are of concern to them.\""`
Raw answer key: `"Commons"`
Selections:
- [ ] `"Fenians"`
- [ ] `"Britain"`
- [x] `"Commons"`
- [ ] `"Austria"`
Suggestion: MPs and surgeries. The true statement is prefixed with `False.` and refers to UK MEPs, which no longer exist. Suggested correction: remove the prefix and use current representatives.

### Q1795
Question: `"Which of the following statements is TRUE?"`
Raw answer key: `"There are public holidays each year called bank holidays, when banks and many other businesses are closed for the day."`
Selections:
- [ ] `"There are public holidays each year called Business Holidays, when banks and many other businesses are closed for the da..."`
- [ ] `"There are public holidays each year called Branch Holidays, when banks and many other businesses are closed for the day."`
- [x] `"There are public holidays each year called bank holidays, when banks and many other businesses are closed for the day."`
- [ ] `"There are public holidays each year called Credit Holidays, when banks and many other businesses are closed for the day."`
Suggestion: Bank-holiday true statement. A distractor is truncated with `...da`. Suggested correction: restore the full option.

### Q1797
Question: `"Complete the statement: \"In _______, women over the age of 30 were given voting rights and the right to stand for Parliament, partly in recognition of the contribution women made to the war effort during the First World War.\""`
Raw answer key: `"1918"`
Selections:
- [ ] `"1925"`
- [x] `"1918"`
- [ ] `"Corn"`
- [ ] `"ABBA"`
Suggestion: 1918 women's rights. The wording omits property qualifications and conflates voting rights with the separate right to stand for Parliament. Suggested correction: state the qualifying 1918 franchise and distinguish it from the 1928 equal franchise.

### Q1798
Question: `"Complete the statement: \"In 1918, women over the age of 30 were given voting rights and the right to stand for Parliament, partly in recognition of the contribution women made to the war effort during the _______.\""`
Raw answer key: `"First World War"`
Selections:
- [ ] `"5th of November"`
- [x] `"First World War"`
- [ ] `"The Burgundians"`
- [ ] `"2,000 years ago"`
Suggestion: 1918 women's rights. The wording omits property qualifications and conflates voting rights with the separate right to stand for Parliament. Suggested correction: state the qualifying 1918 franchise and distinguish it from the 1928 equal franchise.

### Q1799
Question: `"Complete the statement: \"In 1918, women over the age of 30 were given voting rights and the right to stand for _______, partly in recognition of the contribution women made to the war effort during the First World War.\""`
Raw answer key: `"Parliament"`
Selections:
- [ ] `"Penicillin"`
- [ ] `"James Cook"`
- [x] `"Parliament"`
- [ ] `"17th March"`
Suggestion: 1918 women's rights. The wording omits property qualifications and conflates voting rights with the separate right to stand for Parliament. Suggested correction: state the qualifying 1918 franchise and distinguish it from the 1928 equal franchise.

### Q1804
Question: `"Complete the statement: \"There are 60 members of the _______ government or members of the Senedd (SMs) and elections are held every four years using a form of proportional representation.\""`
Raw answer key: `"Welsh"`
Selections:
- [ ] `"1970s"`
- [x] `"Welsh"`
- [ ] `"1960s"`
- [ ] `"Music"`
Suggestion: Senedd membership and elections. The records confuse the Welsh Government with the Senedd, use `SMs`, give 60 members, and say elections occur every four years. Suggested correction: refer to the Senedd and `MSs`, update the membership/election details, and remove the executive/legislature confusion.

### Q1805
Question: `"Complete the statement: \"There are 60 members of the Welsh government or members of the _______ (SMs) and elections are held every four years using a form of proportional representation.\""`
Raw answer key: `"Senedd"`
Selections:
- [ ] `"Dollar"`
- [ ] `"Cinema"`
- [x] `"Senedd"`
- [ ] `"Diwali"`
Suggestion: Senedd membership and elections. The records confuse the Welsh Government with the Senedd, use `SMs`, give 60 members, and say elections occur every four years. Suggested correction: refer to the Senedd and `MSs`, update the membership/election details, and remove the executive/legislature confusion.

### Q1806
Question: `"Complete the statement: \"There are 60 members of the Welsh government or members of the Senedd (SMs) and elections are held every _______ years using a form of proportional representation.\""`
Raw answer key: `"four"`
Selections:
- [x] `"four"`
- [ ] `"1949"`
- [ ] `"1254"`
- [ ] `"1588"`
Suggestion: Senedd membership and elections. The records confuse the Welsh Government with the Senedd, use `SMs`, give 60 members, and say elections occur every four years. Suggested correction: refer to the Senedd and `MSs`, update the membership/election details, and remove the executive/legislature confusion.

### Q1827
Question: `"Complete the statement: \"Emmeline Pankhurst she set up the women’s Franchise League in _______, which fought to get the vote in local elections for married women. In 1903 she helped found the Women’s Social and Political Union (WSPU). This was the first group whose members were called ‘suffragettes’. The group used civil disobedience as part of their protest to gain the vote for women. In 1918, women over the age of 30 were given voting rights and the right to stand for Parliament, partly in recognition of the contribution women made to the war effort during the First World War.\""`
Raw answer key: `"1889"`
Selections:
- [ ] `"1254"`
- [ ] `"Oats"`
- [ ] `"1903"`
- [x] `"1889"`
Suggestion: Emmeline Pankhurst. The text contains the duplicated subject `Emmeline Pankhurst she`. Suggested correction: use `Emmeline Pankhurst set up...`.

### Q1828
Question: `"Complete the statement: \"Emmeline Pankhurst she set up the women’s Franchise League in 1889, which fought to get the vote in local elections for married women. In _______ she helped found the Women’s Social and Political Union (WSPU). This was the first group whose members were called ‘suffragettes’. The group used civil disobedience as part of their protest to gain the vote for women. In 1918, women over the age of 30 were given voting rights and the right to stand for Parliament, partly in recognition of the contribution women made to the war effort during the First World War.\""`
Raw answer key: `"1903"`
Selections:
- [ ] `"1949"`
- [ ] `"Corn"`
- [ ] `"1314"`
- [x] `"1903"`
Suggestion: Emmeline Pankhurst. The text contains the duplicated subject `Emmeline Pankhurst she`. Suggested correction: use `Emmeline Pankhurst set up...`.

### Q1829
Question: `"Complete the statement: \"Emmeline Pankhurst she set up the women’s Franchise League in 1889, which fought to get the vote in local elections for married women. In 1903 she helped found the Women’s Social and Political Union (WSPU). This was the first group whose members were called ‘suffragettes’. The group used civil disobedience as part of their protest to gain the vote for women. In _______, women over the age of 30 were given voting rights and the right to stand for Parliament, partly in recognition of the contribution women made to the war effort during the First World War.\""`
Raw answer key: `"1918"`
Selections:
- [ ] `"Euro"`
- [x] `"1918"`
- [ ] `"1807"`
- [ ] `"1215"`
Suggestion: Emmeline Pankhurst. The text contains the duplicated subject `Emmeline Pankhurst she`. Suggested correction: use `Emmeline Pankhurst set up...`.

### Q1833
Question: `"Complete the statement: \"Newton‘s most famous published work was _______ (‘Mathematical Principle of Natural Philosophy’), which showed how gravity applied to the whole universe.\""`
Raw answer key: `"Philosophiae Naturalis Principia Mathematica"`
Selections:
- [ ] `"Caring for animals at a local rescue shelter"`
- [ ] `"The House of York and the House of Lancaster"`
- [x] `"Philosophiae Naturalis Principia Mathematica"`
- [ ] `"Monitoring and evaluating school performance"`
Suggestion: Principia translation. The title is rendered as `Mathematical Principle`; the accepted translation is `Mathematical Principles of Natural Philosophy`. Suggested correction: use the plural in the questions, options, keys, and explanations.

### Q1834
Question: `"Complete the statement: \"Newton‘s most famous published work was Philosophiae Naturalis Principia Mathematica (‘_______ of Natural Philosophy’), which showed how gravity applied to the whole universe.\""`
Raw answer key: `"Mathematical Principle"`
Selections:
- [ ] `"The electoral register"`
- [ ] `"The Conservative Party"`
- [x] `"Mathematical Principle"`
- [ ] `"The Festival of Lights"`
Suggestion: Principia translation. The title is rendered as `Mathematical Principle`; the accepted translation is `Mathematical Principles of Natural Philosophy`. Suggested correction: use the plural in the questions, options, keys, and explanations.

### Q1835
Question: `"Complete the statement: \"Newton‘s most famous published work was Philosophiae Naturalis Principia Mathematica (‘Mathematical Principle of _______’), which showed how gravity applied to the whole universe.\""`
Raw answer key: `"Natural Philosophy"`
Selections:
- [ ] `"Emmeline Pankhurst"`
- [ ] `"Great Expectations"`
- [x] `"Natural Philosophy"`
- [ ] `"The Grand National"`
Suggestion: Principia translation. The title is rendered as `Mathematical Principle`; the accepted translation is `Mathematical Principles of Natural Philosophy`. Suggested correction: use the plural in the questions, options, keys, and explanations.

### Q1839
Question: `"Complete the statement: \"_______ built a wall in the north of England to keep out the Picts (ancestors of the Scottish people).\""`
Raw answer key: `"The Emperor Hadrian"`
Selections:
- [x] `"The Emperor Hadrian"`
- [ ] `"A shortage of water"`
- [ ] `"The First World War"`
- [ ] `"Edward I of England"`
Suggestion: Hadrian's Wall. The records say it was built to keep out Picts and call them ancestors of Scottish people. Suggested correction: describe it as marking and defending the northern frontier of Roman Britain.

### Q1840
Question: `"Complete the statement: \"The _______ Hadrian built a wall in the north of England to keep out the Picts (ancestors of the Scottish people).\""`
Raw answer key: `"Emperor"`
Selections:
- [x] `"Emperor"`
- [ ] `"Knights"`
- [ ] `"Farmers"`
- [ ] `"Defence"`
Suggestion: Hadrian's Wall. The records say it was built to keep out Picts and call them ancestors of Scottish people. Suggested correction: describe it as marking and defending the northern frontier of Roman Britain.

### Q1841
Question: `"Complete the statement: \"The Emperor _______ built a wall in the north of England to keep out the Picts (ancestors of the Scottish people).\""`
Raw answer key: `"Hadrian"`
Selections:
- [x] `"Hadrian"`
- [ ] `"The NHS"`
- [ ] `"In 1922"`
- [ ] `"England"`
Suggestion: Hadrian's Wall. The records say it was built to keep out Picts and call them ancestors of Scottish people. Suggested correction: describe it as marking and defending the northern frontier of Roman Britain.

### Q1867
Question: `"Which of the following statements is TRUE?"`
Raw answer key: `"The correct answer is the Battle of Britain."`
Selections:
- [ ] `"The correct answer is The Battle of Marston Moor."`
- [x] `"The correct answer is the Battle of Britain."`
- [ ] `"The correct answer is The Battle of Worcester."`
- [ ] `"The correct answer is The Battle of Dunbar."`
Suggestion: Self-referential true statements. The options say `The correct answer is...` instead of presenting facts. Suggested correction: restore the underlying substantive question and factual alternatives.

### Q1874
Question: `"According to the Life in the UK handbook, by law, radio and television coverage of the political parties must be balanced and so equal time has to be given to rival viewpoints.?"`
Raw answer key: `"True"`
Selections:
- [ ] `"Corn"`
- [ ] `"1939"`
- [ ] `"1923"`
- [x] `"True"`
Suggestion: Broadcast coverage true/false. The statement says equal time is required and has no `False` option. Suggested correction: rewrite using due impartiality or add `False` for the unqualified claim.

### Q1893
Question: `"Complete the statement: \"Anyone can make a complaint about the police by going to a police station and writing to the _______ of the police force involved. Complaints can also be made to an independent body: the Independent Police Complaints Commission in England and Wales, the Police Complaints Commissioner for Scotland or the Police Ombudsman for Northern Ireland.\""`
Raw answer key: `"Chief Constable"`
Selections:
- [ ] `"White Christmas"`
- [ ] `"The Black Death"`
- [ ] `"Summer Holidays"`
- [x] `"Chief Constable"`
Suggestion: Police complaint bodies. The named Independent Police Complaints Commission and Police Complaints Commissioner are obsolete. Suggested correction: use current complaint bodies and names.

### Q1894
Question: `"Complete the statement: \"Anyone can make a complaint about the police by going to a police station and writing to the Chief Constable of the police force involved. Complaints can also be made to an independent body: the _______ in England and Wales, the Police Complaints Commissioner for Scotland or the Police Ombudsman for Northern Ireland.\""`
Raw answer key: `"Independent Police Complaints Commission"`
Selections:
- [ ] `"Represent everyone in their constituency"`
- [x] `"Independent Police Complaints Commission"`
- [ ] `"A salary for members of Parliament (MPs)"`
- [ ] `"The IVF (in-vitro fertilisation) therapy"`
Suggestion: Police complaint bodies. The named Independent Police Complaints Commission and Police Complaints Commissioner are obsolete. Suggested correction: use current complaint bodies and names.

### Q1895
Question: `"Complete the statement: \"Anyone can make a complaint about the police by going to a police station and writing to the Chief Constable of the police force involved. Complaints can also be made to an independent body: the Independent Police Complaints Commission in England and Wales, the _______ for Scotland or the Police Ombudsman for Northern Ireland.\""`
Raw answer key: `"Police Complaints Commissioner"`
Selections:
- [ ] `"The inventor of the television"`
- [ ] `"The Queen’s Club Championships"`
- [x] `"Police Complaints Commissioner"`
- [ ] `"Monitoring student’s behaviour"`
Suggestion: Police complaint bodies. The named Independent Police Complaints Commission and Police Complaints Commissioner are obsolete. Suggested correction: use current complaint bodies and names.

### Q1914
Question: `"Complete the statement: \"It is a criminal offence to sell alcohol to any_______ who is under 18 or to buy alcohol for people who are under the age of 18. (There is one exception: people aged 16 or over can drink alcohol with a meal in a hotel or restaurant).\""`
Raw answer key: `"one"`
Selections:
- [ ] `"25p"`
- [ ] `"Ayr"`
- [ ] `"£50"`
- [x] `"one"`
Suggestion: Alcohol exception. The exception for 16- and 17-year-olds is overbroad. Suggested correction: specify beer, wine, or cider with a meal on licensed premises while accompanied by an adult.

### Q1945
Question: `"Complete the statement: \"False. You can contact MPs by letter or telephone at their constituency office, or at their office in the _______ of Commons. In addition, many MPs, SMs and MSPs hold regular local ‘surgeries‘, where constituents can go in person to talk about issues that are of concern to them.\""`
Raw answer key: `"House"`
Selections:
- [ ] `"Hindu"`
- [ ] `"Sikhs"`
- [ ] `"1960s"`
- [x] `"House"`
Suggestion: MPs, MSs, and MSPs. The true statement is prefixed with `False.` and uses obsolete/incorrect `SMs`. Suggested correction: remove the prefix and use `MSs` for Members of the Senedd.

### Q1946
Question: `"Complete the statement: \"False. You can contact MPs by letter or telephone at their constituency office, or at their office in the House of _______. In addition, many MPs, SMs and MSPs hold regular local ‘surgeries‘, where constituents can go in person to talk about issues that are of concern to them.\""`
Raw answer key: `"Commons"`
Selections:
- [ ] `"Knights"`
- [ ] `"Insulin"`
- [ ] `"Henry V"`
- [x] `"Commons"`
Suggestion: MPs, MSs, and MSPs. The true statement is prefixed with `False.` and uses obsolete/incorrect `SMs`. Suggested correction: remove the prefix and use `MSs` for Members of the Senedd.

### Q1961
Question: `"According to the Life in the UK handbook, you have to be at least 21 years old to serve on a jury.?"`
Raw answer key: `"False"`
Selections:
- [ ] `"Wales"`
- [x] `"False"`
- [ ] `"Welsh"`
- [ ] `"Radar"`
Suggestion: Jury age explanation. The key `False` is correct, but the explanation says eligibility is only 18-70. Suggested correction: update it to 18-75 where applicable.

### Q1989
Question: `"Which of the following statements is TRUE?"`
Raw answer key: `"There are public holidays each year called bank holidays, when banks and many other businesses are closed for the day."`
Selections:
- [x] `"There are public holidays each year called bank holidays, when banks and many other businesses are closed for the day."`
- [ ] `"There are public holidays each year called Business Holidays, when banks and many other businesses are closed for the da..."`
- [ ] `"There are public holidays each year called Workers Holidays, when banks and many other businesses are closed for the day..."`
- [ ] `"There are public holidays each year called Summer Holidays, when banks and many other businesses are closed for the day."`
Suggestion: Truncated true statement. Two distractors end with literal `...`, so the option set is incomplete. Suggested correction: restore complete statements.

### Q2010
Question: `"Complete the statement: \"The correct answer is the _______.\""`
Raw answer key: `"Royal Air Force"`
Selections:
- [ ] `"Dame Zaha Hadid"`
- [x] `"Royal Air Force"`
- [ ] `"The Burgundians"`
- [ ] `"Branch Holidays"`
Suggestion: Royal Air Force. The records are self-referential `The correct answer is...` fragments. Suggested correction: ask a substantive question such as `What is the name of the UK's air force?` and key `Royal Air Force`.

### Q2011
Question: `"Complete the statement: \"The correct answer is the _______ Air Force.\""`
Raw answer key: `"Royal"`
Selections:
- [ ] `"Sikhs"`
- [ ] `"Radio"`
- [ ] `"1960s"`
- [x] `"Royal"`
Suggestion: Royal Air Force. The records are self-referential `The correct answer is...` fragments. Suggested correction: ask a substantive question such as `What is the name of the UK's air force?` and key `Royal Air Force`.

### Q2012
Question: `"Complete the statement: \"The correct answer is the Royal Air _______.\""`
Raw answer key: `"Force"`
Selections:
- [x] `"Force"`
- [ ] `"NSPCC"`
- [ ] `"Jokes"`
- [ ] `"Radio"`
Suggestion: Royal Air Force. The records are self-referential `The correct answer is...` fragments. Suggested correction: ask a substantive question such as `What is the name of the UK's air force?` and key `Royal Air Force`.

### Q2090
Question: `"Which of the following statements is TRUE?"`
Raw answer key: `"Ulster fry is the correct answer."`
Selections:
- [ ] `"Haggis is the correct answer."`
- [ ] `"Pancakes is the correct answer."`
- [ ] `"Paella is the correct answer."`
- [x] `"Ulster fry is the correct answer."`
Suggestion: Northern Irish food. Options say `Haggis is the correct answer` rather than presenting facts. Suggested correction: ask which listed food is traditional in Northern Ireland and key `Ulster fry`.

### Q2099
Question: `"Which of the following statements is TRUE?"`
Raw answer key: `"Canals were built to link the factories to towns and cities and to the ports, particularly in the new industrial areas..."`
Selections:
- [ ] `"Canals were built To increase the number of water mills in the UK, particularly in the new industrial areas in the middl..."`
- [ ] `"Canals were built To increase the amount of water in towns and cities, particularly in the new industrial areas in the m..."`
- [x] `"Canals were built to link the factories to towns and cities and to the ports, particularly in the new industrial areas..."`
- [ ] `"Canals were built To make space for the large fleet of British ships, particularly in the new industrial areas in the mi..."`
Suggestion: Canal statements. Every option/key is truncated. Suggested correction: restore complete options, including the statement that canals linked factories to towns, cities, and ports.

### Q2120
Question: `"Complete the statement: \"Some of the most commercially successful films of all time, including the two highest-grossing film franchises (_______ and James Bond), have been produced in the UK.\""`
Raw answer key: `"Harry Potter"`
Selections:
- [ ] `"Jingle Bells"`
- [ ] `"The Boer War"`
- [x] `"Harry Potter"`
- [ ] `"Father’s Day"`
Suggestion: Highest-grossing claims. The records make an unqualified `two highest-grossing` claim. Suggested correction: use `among the highest-grossing` or add a date and defined scope.

### Q2121
Question: `"Complete the statement: \"Some of the most commercially successful films of all time, including the two highest-grossing film franchises (Harry Potter and _______), have been produced in the UK.\""`
Raw answer key: `"James Bond"`
Selections:
- [ ] `"Around 15%"`
- [ ] `"Beefeaters"`
- [x] `"James Bond"`
- [ ] `"St Patrick"`
Suggestion: Highest-grossing claims. The records make an unqualified `two highest-grossing` claim. Suggested correction: use `among the highest-grossing` or add a date and defined scope.

### Q2122
Question: `"Complete the statement: \"Some of the most commercially successful films of all time, including the two highest-grossing film franchises (Harry _______ and James Bond), have been produced in the UK.\""`
Raw answer key: `"Potter"`
Selections:
- [ ] `"Crisis"`
- [x] `"Potter"`
- [ ] `"County"`
- [ ] `"A poet"`
Suggestion: Highest-grossing claims. The records make an unqualified `two highest-grossing` claim. Suggested correction: use `among the highest-grossing` or add a date and defined scope.

### Q2142
Question: `"Complete the statement: \"Scientists led by _______, working at Manchester and then Cambridge University, were the first to ‘split the atom‘ and took part in the Manhattan Project in the United States, which developed the atomic bomb.\""`
Raw answer key: `"Ernest Rutherford"`
Selections:
- [ ] `"Giant greenhouses"`
- [ ] `"Personal computer"`
- [x] `"Ernest Rutherford"`
- [ ] `"The Enlightenment"`
Suggestion: Ernest Rutherford and the atomic bomb. The records imply Rutherford took part in the Manhattan Project; he died in 1937. Suggested correction: separate his 1917 nuclear experiment from the later Manhattan Project.

### Q2143
Question: `"Complete the statement: \"Scientists led by Ernest Rutherford, working at Manchester and then _______, were the first to ‘split the atom‘ and took part in the Manhattan Project in the United States, which developed the atomic bomb.\""`
Raw answer key: `"Cambridge University"`
Selections:
- [ ] `"South west of Europe"`
- [x] `"Cambridge University"`
- [ ] `"14- and 15-year-olds"`
- [ ] `"The House of Chester"`
Suggestion: Ernest Rutherford and the atomic bomb. The records imply Rutherford took part in the Manhattan Project; he died in 1937. Suggested correction: separate his 1917 nuclear experiment from the later Manhattan Project.

### Q2144
Question: `"Complete the statement: \"Scientists led by Ernest Rutherford, working at Manchester and then Cambridge University, were the first to ‘split the atom‘ and took part in the _______ in the United States, which developed the atomic bomb.\""`
Raw answer key: `"Manhattan Project"`
Selections:
- [ ] `"Caernarfon Castle"`
- [x] `"Manhattan Project"`
- [ ] `"South-east Europe"`
- [ ] `"William of Orange"`
Suggestion: Ernest Rutherford and the atomic bomb. The records imply Rutherford took part in the Manhattan Project; he died in 1937. Suggested correction: separate his 1917 nuclear experiment from the later Manhattan Project.

### Q2167
Question: `"Complete the statement: \"In _______ the Emancipation Act abolished slavery throughout the British Empire.\""`
Raw answer key: `"1833"`
Selections:
- [x] `"1833"`
- [ ] `"1925"`
- [ ] `"1939"`
- [ ] `"Gold"`
Suggestion: Slavery Abolition Act. The wording says the Emancipation Act abolished slavery throughout the Empire in 1833. Suggested correction: use `Slavery Abolition Act 1833`, state that it applied to most colonies, and note that it came into force in 1834.

### Q2168
Question: `"Complete the statement: \"In 1833 the _______ abolished slavery throughout the British Empire.\""`
Raw answer key: `"Emancipation Act"`
Selections:
- [x] `"Emancipation Act"`
- [ ] `"April Fool’s Day"`
- [ ] `"House of Members"`
- [ ] `"John Logie Baird"`
Suggestion: Slavery Abolition Act. The wording says the Emancipation Act abolished slavery throughout the Empire in 1833. Suggested correction: use `Slavery Abolition Act 1833`, state that it applied to most colonies, and note that it came into force in 1834.

### Q2169
Question: `"Complete the statement: \"In 1833 the Emancipation Act abolished slavery throughout the _______.\""`
Raw answer key: `"British Empire"`
Selections:
- [x] `"British Empire"`
- [ ] `"John Masefield"`
- [ ] `"Auld Lang Syne"`
- [ ] `"Sir Ian Botham"`
Suggestion: Slavery Abolition Act. The wording says the Emancipation Act abolished slavery throughout the Empire in 1833. Suggested correction: use `Slavery Abolition Act 1833`, state that it applied to most colonies, and note that it came into force in 1834.

### Q2188
Question: `"Complete the statement: \"Some of the most commercially successful films of all time, including the two highest-grossing film franchises (_______ and James Bond), have been produced in the UK.\""`
Raw answer key: `"Harry Potter"`
Selections:
- [ ] `"15 years old"`
- [x] `"Harry Potter"`
- [ ] `"Lucian Freud"`
- [ ] `"Constituency"`
Suggestion: Highest-grossing claims. The records make an unqualified `two highest-grossing` claim. Suggested correction: use `among the highest-grossing` or add a date and defined scope.

### Q2189
Question: `"Complete the statement: \"Some of the most commercially successful films of all time, including the two highest-grossing film franchises (Harry Potter and _______), have been produced in the UK.\""`
Raw answer key: `"James Bond"`
Selections:
- [ ] `"St Andrews"`
- [x] `"James Bond"`
- [ ] `"Lord Byron"`
- [ ] `"The police"`
Suggestion: Highest-grossing claims. The records make an unqualified `two highest-grossing` claim. Suggested correction: use `among the highest-grossing` or add a date and defined scope.

### Q2190
Question: `"Complete the statement: \"Some of the most commercially successful films of all time, including the two highest-grossing film franchises (Harry _______ and James Bond), have been produced in the UK.\""`
Raw answer key: `"Potter"`
Selections:
- [x] `"Potter"`
- [ ] `"Cinema"`
- [ ] `"France"`
- [ ] `"A fire"`
Suggestion: Highest-grossing claims. The records make an unqualified `two highest-grossing` claim. Suggested correction: use `among the highest-grossing` or add a date and defined scope.

### Q2197
Question: `"Complete the statement: \"_______ programme gives 16- and 17-year-olds the opportunity to enjoy outdoor activities, develop their skills and take part in a community project.\""`
Raw answer key: `"The National Citizen Service"`
Selections:
- [ ] `"The Flag of the Commonwealth"`
- [ ] `"The archbishop of Canterbury"`
- [ ] `"The discovery of steam power"`
- [x] `"The National Citizen Service"`
Suggestion: National Citizen Service. The present-tense programme description is stale because the programme ended on 31 March 2025. Suggested correction: make it historical or replace it with a current programme.

### Q2198
Question: `"Complete the statement: \"The _______ Citizen Service programme gives 16- and 17-year-olds the opportunity to enjoy outdoor activities, develop their skills and take part in a community project.\""`
Raw answer key: `"National"`
Selections:
- [ ] `"Hogmanay"`
- [ ] `"Vaisakhi"`
- [x] `"National"`
- [ ] `"St David"`
Suggestion: National Citizen Service. The present-tense programme description is stale because the programme ended on 31 March 2025. Suggested correction: make it historical or replace it with a current programme.

### Q2199
Question: `"Complete the statement: \"The National _______ Service programme gives 16- and 17-year-olds the opportunity to enjoy outdoor activities, develop their skills and take part in a community project.\""`
Raw answer key: `"Citizen"`
Selections:
- [ ] `"Defence"`
- [x] `"Citizen"`
- [ ] `"Physics"`
- [ ] `"Economy"`
Suggestion: National Citizen Service. The present-tense programme description is stale because the programme ended on 31 March 2025. Suggested correction: make it historical or replace it with a current programme.

### Q2207
Question: `"Which of the following statements is TRUE?"`
Raw answer key: `"In the UK, you need to be at least 16 years old to ride a moped, and there are other age requirements and special tests..."`
Selections:
- [ ] `"In the UK, you need to be at least 18 years old to ride a moped, and there are other age requirements and special tests ..."`
- [x] `"In the UK, you need to be at least 16 years old to ride a moped, and there are other age requirements and special tests..."`
- [ ] `"In the UK, you need to be at least 15 years old to ride a moped, and there are other age requirements and special tests ..."`
- [ ] `"In the UK, you need to be at least 17 years old to ride a moped, and there are other age requirements and special tests ..."`
Suggestion: Moped age. Options and key are truncated with `...`. Suggested correction: restore complete options, including the full statement that a moped can be ridden from age 16.

### Q2212
Question: `"Complete the statement: \"The small claims procedure is an informal way of helping people to settle minor disputes without spending a lot of time and money using a lawyer. This procedure is used for claims of less than £10,000 in England and Wales, £5,000 in Scotland and _______.\""`
Raw answer key: `"Northern Ireland"`
Selections:
- [ ] `"An aerial battle"`
- [ ] `"She got married."`
- [ ] `"Falkland Islands"`
- [x] `"Northern Ireland"`
Suggestion: Small-claims limits. The records give Northern Ireland a £5,000 limit; the current limit is £3,000, while Scotland is £5,000 and England/Wales £10,000. Suggested correction: state the jurisdiction-specific limits.

### Q2213
Question: `"Complete the statement: \"The small claims procedure is an informal way of helping people to settle minor disputes without spending a lot of time and money using a lawyer. This procedure is used for claims of less than £10,000 in _______ and Wales, £5,000 in Scotland and Northern Ireland.\""`
Raw answer key: `"England"`
Selections:
- [x] `"England"`
- [ ] `"A tramp"`
- [ ] `"James I"`
- [ ] `"Cardiff"`
Suggestion: Small-claims limits. The records give Northern Ireland a £5,000 limit; the current limit is £3,000, while Scotland is £5,000 and England/Wales £10,000. Suggested correction: state the jurisdiction-specific limits.

### Q2214
Question: `"Complete the statement: \"The small claims procedure is an informal way of helping people to settle minor disputes without spending a lot of time and money using a lawyer. This procedure is used for claims of less than £10,000 in England and _______, £5,000 in Scotland and Northern Ireland.\""`
Raw answer key: `"Wales"`
Selections:
- [ ] `"Wheat"`
- [ ] `"Radio"`
- [x] `"Wales"`
- [ ] `"Devon"`
Suggestion: Small-claims limits. The records give Northern Ireland a £5,000 limit; the current limit is £3,000, while Scotland is £5,000 and England/Wales £10,000. Suggested correction: state the jurisdiction-specific limits.

### Q2221
Question: `"Which of the following statements is TRUE?"`
Raw answer key: `"If you think someone is trying to persuade you to join an extremist or terrorist cause, you should notify your local..."`
Selections:
- [x] `"If you think someone is trying to persuade you to join an extremist or terrorist cause, you should notify your local..."`
- [ ] `"If you think someone is trying to persuade you to join an extremist or terrorist cause, you should notify Your local MP."`
- [ ] `"If you think someone is trying to persuade you to join an extremist or terrorist cause, you should notify Your local Cou..."`
- [ ] `"If you think someone is trying to persuade you to join an extremist or terrorist cause, you should notify The Prime Mini..."`
Suggestion: Extremist-cause reporting. Options/key are truncated, including `notify your local...`. Suggested correction: restore `notify your local police force` and complete every option.

### Q2229
Question: `"Complete the statement: \"Brunel was originally from Portsmouth, England. He was an engineer who built tunnels, bridges, railway lines and ships. He was responsible for constructing the _______, which was the first major railway built in Britain. It runs from Paddington Station in London to the south west of England, the West Midlands and Wales.\""`
Raw answer key: `"Great Western Railway"`
Selections:
- [ ] `"Vote in all elections"`
- [ ] `"Using a runoff system"`
- [ ] `"Freedom of expression"`
- [x] `"Great Western Railway"`
Suggestion: Great Western Railway. The claim that it was the first major railway built in Britain is misleading; earlier major railways existed. Suggested correction: describe Brunel's construction and the railway's route without the false superlative.

### Q2230
Question: `"Complete the statement: \"Brunel was originally from Portsmouth, England. He was an engineer who built tunnels, bridges, railway lines and ships. He was responsible for constructing the Great Western Railway, which was the first major railway built in Britain. It runs from _______ in London to the south west of England, the West Midlands and Wales.\""`
Raw answer key: `"Paddington Station"`
Selections:
- [x] `"Paddington Station"`
- [ ] `"William Wordsworth"`
- [ ] `"London’s South End"`
- [ ] `"Medieval buildings"`
Suggestion: Great Western Railway. The claim that it was the first major railway built in Britain is misleading; earlier major railways existed. Suggested correction: describe Brunel's construction and the railway's route without the false superlative.

### Q2231
Question: `"Complete the statement: \"Brunel was originally from Portsmouth, England. He was an engineer who built tunnels, bridges, railway lines and ships. He was responsible for constructing the Great Western Railway, which was the first major railway built in Britain. It runs from Paddington Station in London to the south west of England, the _______ and Wales.\""`
Raw answer key: `"West Midlands"`
Selections:
- [ ] `"Graham Greene"`
- [x] `"West Midlands"`
- [ ] `"Pre-selection"`
- [ ] `"Bodiam Castle"`
Suggestion: Great Western Railway. The claim that it was the first major railway built in Britain is misleading; earlier major railways existed. Suggested correction: describe Brunel's construction and the railway's route without the false superlative.

### Q2235
Question: `"Complete the statement: \"The correct answer is the _______.\""`
Raw answer key: `"Reformation"`
Selections:
- [ ] `"King Arthur"`
- [ ] `"The Vikings"`
- [ ] `"Richard III"`
- [x] `"Reformation"`
Suggestion: Reformation. The records use tautological `The correct answer is...` text. Suggested correction: ask a substantive question about the movement associated with Henry VIII's break from Rome.

### Q2236
Question: `"Which of the following statements is TRUE?"`
Raw answer key: `"The correct answer is the Reformation."`
Selections:
- [ ] `"The correct answer is The Holy Wars."`
- [x] `"The correct answer is the Reformation."`
- [ ] `"The correct answer is The Enlightenment."`
- [ ] `"The correct answer is The Spanish Inquisition."`
Suggestion: Reformation. The records use tautological `The correct answer is...` text. Suggested correction: ask a substantive question about the movement associated with Henry VIII's break from Rome.

### Q2238
Question: `"Complete the statement: \"Newton’s most famous published work was _______ (‘Mathematical Principle of Natural Philosophy’), which showed how gravity applied to the whole universe. Newton also discovered that white light is made up of the colours of the rainbow.\""`
Raw answer key: `"Philosophiae Naturalis Principia Mathematica"`
Selections:
- [x] `"Philosophiae Naturalis Principia Mathematica"`
- [ ] `"Caring for animals at a local rescue shelter"`
- [ ] `"That your dog wears a high visibility jacket"`
- [ ] `"The House of York and the House of Lancaster"`
Suggestion: Principia translation. `Mathematical Principle` should be `Mathematical Principles of Natural Philosophy`. Suggested correction: use the plural in all stems, options, keys, and explanations.

### Q2239
Question: `"Complete the statement: \"Newton’s most famous published work was Philosophiae Naturalis Principia Mathematica (‘_______ of Natural Philosophy’), which showed how gravity applied to the whole universe. Newton also discovered that white light is made up of the colours of the rainbow.\""`
Raw answer key: `"Mathematical Principle"`
Selections:
- [ ] `"Aintree near Liverpool"`
- [x] `"Mathematical Principle"`
- [ ] `"She was sent to France"`
- [ ] `"The Magistrates’ Court"`
Suggestion: Principia translation. `Mathematical Principle` should be `Mathematical Principles of Natural Philosophy`. Suggested correction: use the plural in all stems, options, keys, and explanations.

### Q2240
Question: `"Complete the statement: \"Newton’s most famous published work was Philosophiae Naturalis Principia Mathematica (‘Mathematical Principle of _______’), which showed how gravity applied to the whole universe. Newton also discovered that white light is made up of the colours of the rainbow.\""`
Raw answer key: `"Natural Philosophy"`
Selections:
- [x] `"Natural Philosophy"`
- [ ] `"The Roman invasion"`
- [ ] `"Authorised version"`
- [ ] `"The Crystal Palace"`
Suggestion: Principia translation. `Mathematical Principle` should be `Mathematical Principles of Natural Philosophy`. Suggested correction: use the plural in all stems, options, keys, and explanations.

### Q2247
Question: `"Complete the statement: \"In the middle of the century the potato crop failed, and _______ suffered a famine. A million people died from disease and starvation.\""`
Raw answer key: `"Ireland"`
Selections:
- [x] `"Ireland"`
- [ ] `"Defence"`
- [ ] `"A flood"`
- [ ] `"Insulin"`
Suggestion: Irish potato famine. The century is missing and Q2249 is truncated. Suggested correction: specify the middle of the 19th century and restore the complete answer ending in disease and starvation.

### Q2248
Question: `"Complete the statement: \"In the middle of the century the potato crop failed, and Ireland suffered a famine. A _______ people died from disease and starvation.\""`
Raw answer key: `"million"`
Selections:
- [ ] `"In 1922"`
- [ ] `"A nurse"`
- [ ] `"Austria"`
- [x] `"million"`
Suggestion: Irish potato famine. The century is missing and Q2249 is truncated. Suggested correction: specify the middle of the 19th century and restore the complete answer ending in disease and starvation.

### Q2249
Question: `"Which of the following statements is TRUE?"`
Raw answer key: `"In the middle of the century the potato crop failed, and Ireland suffered a famine. A million people died from disease..."`
Selections:
- [ ] `"In the middle of the century the Oats crop failed, and Ireland suffered a famine. A million people died from disease and..."`
- [ ] `"In the middle of the century the Corn crop failed, and Ireland suffered a famine. A million people died from disease and..."`
- [ ] `"In the middle of the century the Wheat crop failed, and Ireland suffered a famine. A million people died from disease an..."`
- [x] `"In the middle of the century the potato crop failed, and Ireland suffered a famine. A million people died from disease..."`
Suggestion: Irish potato famine. The century is missing and Q2249 is truncated. Suggested correction: specify the middle of the 19th century and restore the complete answer ending in disease and starvation.

### Q2302
Question: `"Which of the following statements is TRUE?"`
Raw answer key: `"Opposition MPs form the shadow cabinet and their role is to challenge the government and put forward alternative..."`
Selections:
- [ ] `"Opposition MPs form the Roundheads and their role is to challenge the government and put forward alternative policies."`
- [ ] `"Opposition MPs form the Quakers and their role is to challenge the government and put forward alternative policies."`
- [x] `"Opposition MPs form the shadow cabinet and their role is to challenge the government and put forward alternative..."`
- [ ] `"Opposition MPs form the Cavaliers and their role is to challenge the government and put forward alternative policies."`
Suggestion: Shadow cabinet. The keyed statement ends in `alternative...`. Suggested correction: restore the full sentence about opposition MPs challenging government and proposing alternative policies.

### Q2339
Question: `"Who is married to the King of the United Kingdom?"`
Raw answer key: `"Camila, the Queen Consort"`
Selections:
- [ ] `"Kate, the Princess of Wales"`
- [x] `"Camila, the Queen Consort"`
- [ ] `"Camila, the Princess of Wales"`
- [ ] `"Kate, the Queen Consort"`
Suggestion: Queen Camilla. `Camila, the Queen Consort` is misspelled and outdated. Suggested correction: ask who is married to King Charles III and key `Queen Camilla`.

### Q2340
Question: `"By what TWO other names is the Church of England known?"`
Raw answer key: `["The Anglican Church","The Episcopal Church"]`
Selections:
- [x] `"The Anglican Church"`
- [ ] `"The Union Church"`
- [ ] `"The Greatest Church"`
- [x] `"The Episcopal Church"`
Suggestion: Church of England names. The Scottish Episcopal Church and US Episcopal Church are separate Anglican churches, not alternate names for the Church of England. Suggested correction: ask separately for the Anglican churches in Scotland and the United States.

### Q2343
Question: `"How old do you need to be to apply for a free TV licence?"`
Raw answer key: `"Over 75"`
Selections:
- [ ] `"Over 65"`
- [ ] `"Over 60"`
- [ ] `"Over 70"`
- [x] `"Over 75"`
Suggestion: Free TV licence. Being 75 or over is insufficient without Pension Credit. Suggested correction: require age 75+ and receipt of Pension Credit.

### Q2361
Question: `"What is the relationship between the monarch and the government?"`
Raw answer key: `"Advise, warn and encourage the government’s decisions"`
Selections:
- [ ] `"Approve the government’s decisions on government policies"`
- [x] `"Advise, warn and encourage the government’s decisions"`
- [ ] `"Advise, encourage and approve the government’s decisions"`
- [ ] `"Advise and approve the government’s decisions"`
Suggestion: Monarch and government. The answer says the monarch encourages the government's decisions. Suggested correction: say the monarch advises, warns, and encourages the Prime Minister/government.

### Q2367
Question: `"Which of the following national galleries is NOT located in London?"`
Raw answer key: `"The National Museum"`
Selections:
- [ ] `"Tate Britain"`
- [ ] `"The National Gallery"`
- [ ] `"Tate Modern"`
- [x] `"The National Museum"`
Suggestion: National gallery. `The National Museum` is not a sufficiently identified gallery and the category is inconsistent. Suggested correction: use a named museum/gallery and ask a category-consistent question.

### Q2369
Question: `"How old is the clock at the Houses of Parliament in London, also known as ‘Big Ben’?"`
Raw answer key: `"150 years old"`
Selections:
- [ ] `"100 years old"`
- [x] `"150 years old"`
- [ ] `"200 years old"`
- [ ] `"250 years old"`
Suggestion: Big Ben. Big Ben is the bell, not the clock; the age answer is time-dependent and incorrect. Suggested correction: ask what Big Ben is, or use the Great Clock's 1859 completion date with a reference date.

### Q2383
Question: `"Which TWO of the following water sports are popular in the UK?"`
Raw answer key: `["Rowing","Sailing"]`
Selections:
- [ ] `"Waterpolo"`
- [x] `"Rowing"`
- [x] `"Sailing"`
- [ ] `"Surfing"`
Suggestion: Water sports. Surfing is also a popular UK water sport, so the two-answer key `Rowing` and `Sailing` is not unique. Suggested correction: replace the distractor or specify the intended source pair.

### Q2389
Question: `"How often are elections held for the Welsh government?"`
Raw answer key: `"Every four years"`
Selections:
- [x] `"Every four years"`
- [ ] `"Every three years"`
- [ ] `"Every fix years"`
- [ ] `"Every six years"`
Suggestion: Senedd. The wording contains `fix` instead of `five`, and the explanation uses the outdated 60-member figure. Suggested correction: fix the typo and update current membership/electoral-system details.

### Q2390
Question: `"Who was the British Minister after Margaret Thatcher?"`
Raw answer key: `"John Major"`
Selections:
- [ ] `"Tony Blair"`
- [ ] `"Harold Macmillan"`
- [ ] `"Gordon Brown"`
- [x] `"John Major"`
Suggestion: John Major. `British Minister` is not a defined office. Suggested correction: ask `Who was Prime Minister after Margaret Thatcher?`

### Q2412
Question: `"What is the first verse of the National Anthem of the UK ‘God save the King’?"`
Raw answer key: `"God save our gracious King!"`
Selections:
- [ ] `"Long to reign over us"`
- [ ] `"God save the King!"`
- [ ] `"Long live our noble King!"`
- [x] `"God save our gracious King!"`
Suggestion: National anthem. The quotation around `God Save our Gracious King!` is incomplete and punctuation is malformed. Suggested correction: restore the closing quote and punctuation.

### Q2419
Question: `"Members of the Welsh government are elected every four years on the basis of:"`
Raw answer key: `"Proportional representation"`
Selections:
- [x] `"Proportional representation"`
- [ ] `"Personal achievements"`
- [ ] `"Instant run-off"`
- [ ] `"First past the post system (the candidate who gets the most votes)"`
Suggestion: Welsh elections. Welsh Government ministers are appointed; Members of the Senedd are elected. Suggested correction: ask about Members of the Senedd, use current membership/electoral-system details, and avoid the executive/legislature confusion.

### Q2433
Question: `"How can MPs be contacted (choose TWO options)?"`
Raw answer key: `["By letter","By phoning their constituency office"]`
Selections:
- [x] `"By letter"`
- [ ] `"By going to your local council and asking for an appointment"`
- [x] `"By phoning their constituency office"`
- [ ] `"Through facebook"`
Suggestion: Contacting MPs. The question allows Facebook as a plausible contact route while asking for only two, and the stored contact details may be stale. Suggested correction: specify formal parliamentary contact methods, replace the Facebook distractor, and verify the contact details.

### Q2441
Question: `"What is the name of the building where the Welsh government members meet?"`
Raw answer key: `"Senedd"`
Selections:
- [ ] `"Westminster"`
- [ ] `"Stormont"`
- [ ] `"Holyrood"`
- [x] `"Senedd"`
Suggestion: Senedd terminology. `Welsh government members` is not the correct legislature label. Suggested correction: `Members of the Senedd (MSs)`.

### Q2445
Question: `"Which Act abolished slavery throughout the British Empire in 1833?"`
Raw answer key: `"The Emancipation Act"`
Selections:
- [ ] `"The Freedom Act"`
- [ ] `"The Habeas Corpus Act"`
- [x] `"The Emancipation Act"`
- [ ] `"The Slavery Act"`
Suggestion: Slavery Abolition Act. The formal title and scope are wrong in `Emancipation Act`/`throughout the Empire`. Suggested correction: use `Slavery Abolition Act 1833`, most colonies, and its 1834 commencement.

### Q2448
Question: `"What was the population of the UK in 2005?"`
Raw answer key: `"Just under 60 million"`
Selections:
- [ ] `"Just under 50 million"`
- [x] `"Just under 60 million"`
- [ ] `"Just over 50 million"`
- [ ] `"Just under 62 million"`
Suggestion: UK population in 2005. `Just under 60 million` is inaccurate; the mid-2005 UK population was just over 60 million. Suggested correction: add and key `Just over 60 million`.

### Q2452
Question: `"Where can people facing domestic violence get help from?"`
Raw answer key: `"The Citizens Advise Bureau"`
Selections:
- [ ] `"The NHS"`
- [x] `"The Citizens Advise Bureau"`
- [ ] `"The Human Rights Commission"`
- [ ] `"The RSPB"`
Suggestion: Domestic-violence help. `Citizens Advise Bureau` is misspelled, and the broad question makes multiple options defensible. Suggested correction: use `Citizens Advice` and ask for a specifically named source or make all applicable answers explicit.

### Q2465
Question: `"What was the population of the UK in 1801?"`
Raw answer key: `"8 million"`
Selections:
- [ ] `"5 million"`
- [x] `"8 million"`
- [ ] `"10 million"`
- [ ] `"12 million"`
Suggestion: UK population in 1801. The answer `8 million` describes a narrower territory, not the UK including Ireland. Suggested correction: ask for England/Great Britain or use the appropriate UK figure of about 16 million.

### Q2480
Question: `"When was the Northern Ireland Parliament established for the first time?"`
Raw answer key: `"In 1922"`
Selections:
- [x] `"In 1922"`
- [ ] `"In 1972"`
- [ ] `"In 1998"`
- [ ] `"In 1969"`
Suggestion: Northern Ireland Parliament. The first Parliament sat in 1921, not 1922. Suggested correction: use `1921` or ask a distinct question about the Irish Free State in 1922.

### Q2488
Question: `"What is the coin with the highest value in the UK?"`
Raw answer key: `"£2"`
Selections:
- [ ] `"50p"`
- [x] `"£2"`
- [ ] `"£5"`
- [ ] `"£10"`
Suggestion: Highest UK coin. £2 is the highest standard circulating denomination, but higher-value commemorative coins exist. Suggested correction: specify `highest-denomination standard circulating coin`.

### Q2500
Question: `"What name is given to the Church of England in Scotland and the United States?"`
Raw answer key: `"The Episcopal Church"`
Selections:
- [ ] `"The Main Church"`
- [ ] `"The King’s Church"`
- [x] `"The Episcopal Church"`
- [ ] `"The Catholic Church"`
Suggestion: Church names. The Episcopal Church is not simply another name for the Church of England. Suggested correction: distinguish the Scottish Episcopal Church and the Episcopal Church in the United States.

### Q2503
Question: `"Which TWO religions celebrate Diwali?"`
Raw answer key: `["Hindu","Sikh"]`
Selections:
- [ ] `"Buddhist"`
- [ ] `"Muslim"`
- [x] `"Hindu"`
- [x] `"Sikh"`
Suggestion: Diwali communities. The two-answer key omits other communities that celebrate Diwali, including Jains and some Buddhists. Suggested correction: specify the intended communities or ask for all applicable traditions.

### Q2517
Question: `"Under which Act was the United Kingdom of Great Britain and Northern Ireland created?"`
Raw answer key: `"The Act of Union"`
Selections:
- [x] `"The Act of Union"`
- [ ] `"The Great Act"`
- [ ] `"The United Kingdom Act"`
- [ ] `"The Act of Great Britain"`
Suggestion: Creation of the United Kingdom. The question conflates the 1800 Act creating the United Kingdom of Great Britain and Ireland with later naming changes. Suggested correction: ask separately about the 1707 Kingdom of Great Britain, the 1800 Act, or the 1927 current name.

### Q2534
Question: `"What was the population of the UK in 1998?"`
Raw answer key: `"57 million"`
Selections:
- [ ] `"40 million"`
- [ ] `"50 million"`
- [ ] `"55 million"`
- [x] `"57 million"`
Suggestion: UK population in 1998. `57 million` is too low; the UK population was approximately 58.5 million. Suggested correction: use about 58.5 million and provide a matching option. | UK population in 1998. The answer `57 million` is too low; the population was about 58.5 million. Suggested correction: use about 58.5 million.

### Q2539
Question: `"Who forms the judiciary?"`
Raw answer key: `"The judges collectively"`
Selections:
- [x] `"The judges collectively"`
- [ ] `"The Magistrates together"`
- [ ] `"The MPs together"`
- [ ] `"The judges and Magistrates together"`
Suggestion: Judiciary. `The judges collectively` is incomplete because magistrates are also part of the judiciary. Suggested correction: write a unique question distinguishing judges and magistrates.

### Q2561
Question: `"What TWO names are given to the people who give tours at the Tower of London?"`
Raw answer key: `["Beefeaters","Yeoman Wardens"]`
Selections:
- [x] `"Beefeaters"`
- [ ] `"Suffragettes"`
- [ ] `"Chartists"`
- [x] `"Yeoman Wardens"`
Suggestion: Tower of London. The official title is `Yeoman Warders`, not `Yeoman Wardens`. Suggested correction: replace the option and key.

### Q2565
Question: `"When is St Patrick’s Day, patron to of Northern Ireland?"`
Raw answer key: `"17th of March"`
Selections:
- [ ] `"23rd of April"`
- [ ] `"30th of November"`
- [ ] `"1st of March"`
- [x] `"17th of March"`
Suggestion: St Patrick's Day. The text says `patron to of Northern Ireland`. Suggested correction: use `St Patrick's Day, the feast day of Ireland's patron saint`.

### Q2571
Question: `"What name is given to the elected members of the Welsh government?"`
Raw answer key: `"SMs"`
Selections:
- [ ] `"MSPs"`
- [x] `"SMs"`
- [ ] `"MLAs"`
- [ ] `"MPs"`
Suggestion: Senedd abbreviation. `SMs` is incorrect. Suggested correction: `MSs` or `Members of the Senedd`.

### Q2587
Question: `"In which city is the Welsh government building, also known as Senedd, located?"`
Raw answer key: `"Cardiff Bay"`
Selections:
- [ ] `"Edinburgh"`
- [ ] `"Belfast"`
- [x] `"Cardiff Bay"`
- [ ] `"Swansea"`
Suggestion: Senedd building. The question calls the Senedd building the Welsh Government building. Suggested correction: distinguish the Senedd, the Welsh Parliament, from the Welsh Government executive.

### Q2600
Question: `"The Man Booker Prize for Fiction is awarded annually for the best fiction novel written by an author from:"`
Raw answer key: `"The Commonwealth, Ireland or Zimbabwe"`
Selections:
- [x] `"The Commonwealth, Ireland or Zimbabwe"`
- [ ] `"The European Union, Zambia or Zimbabwe"`
- [ ] `"The Commonwealth, the USA or Australia"`
- [ ] `"The European Union, Canada or Australia"`
Suggestion: Booker Prize eligibility. The Man Booker terminology and historical eligibility are stale. Suggested correction: use `Booker Prize` and add a date qualifier or current any-nationality eligibility.

### Q2623
Question: `"Which of the following statements is true?"`
Raw answer key: `"County Courts deal with a wide range of civil disputes including family matters, breaches of contract and divorce."`
Selections:
- [x] `"County Courts deal with a wide range of civil disputes including family matters, breaches of contract and divorce."`
- [ ] `"County Courts deal with a wide range of criminal disputes including family matters, breaches of contract and divorce."`
Suggestion: County Courts. County Courts do not generally handle divorce and family proceedings; those are handled by the Family Court. Suggested correction: use civil disputes such as contract, debt, and property matters.

### Q2638
Question: `"Which British actor has recently won an Oscar?"`
Raw answer key: `"Colin Firth"`
Selections:
- [ ] `"Hugh Laurie"`
- [x] `"Colin Firth"`
- [ ] `"Jude Law"`
- [ ] `"Charles Chaplin"`
Suggestion: Colin Firth and Anthony Hopkins. `Recently` is stale for a 2011 Oscar and `Antony Hopkins` is misspelled. Suggested correction: add the year/remove `recently` and use `Anthony Hopkins`.

### Q2651
Question: `"How many volunteers work for the National Trust?"`
Raw answer key: `"More than 61,000"`
Selections:
- [ ] `"More than 71,000"`
- [ ] `"More than 81,000"`
- [x] `"More than 61,000"`
- [ ] `"More than 91,000"`
Suggestion: National Trust volunteers. `More than 61,000` is not stable without a date and conflicts with the cited current report. Suggested correction: date the question and update the answer/options.

### Q2652
Question: `"What was the population of the UK in 1851?"`
Raw answer key: `"20 million"`
Selections:
- [x] `"20 million"`
- [ ] `"40 million"`
- [ ] `"30 million"`
- [ ] `"50 million"`
Suggestion: UK population in 1851. `20 million` is closer to Great Britain; the UK including Ireland had about 27.4 million. Suggested correction: specify the territory or update the figure.

### Q2654
Question: `"Which religious community celebrates Vaisakhi?"`
Raw answer key: `"Sikh"`
Selections:
- [ ] `"Muslim"`
- [ ] `"Hindu"`
- [x] `"Sikh"`
- [ ] `"Jewish"`
Suggestion: Vaisakhi. Both Sikh and Hindu communities are represented while the question asks for one answer. Suggested correction: make it a two-answer question or specify Sikh Khalsa observance.

### Q2658
Question: `"How can you visit the Northern Ireland Assembly (choose TWO options)?"`
Raw answer key: `["Contacting the Education Service","Contacting an MLA"]`
Selections:
- [x] `"Contacting the Education Service"`
- [ ] `"Contacting an MSP"`
- [x] `"Contacting an MLA"`
- [ ] `"Arranging a tour through the visitor services"`
Suggestion: Visiting the Northern Ireland Assembly. The selected pair is not unique because visitor services/tours provide another valid route. Suggested correction: use current visitor routes and make the requested pair uniquely correct.

### Q2659
Question: `"When was the first television broadcast made?"`
Raw answer key: `"In 1932"`
Selections:
- [ ] `"In 1922"`
- [x] `"In 1932"`
- [ ] `"In 1942"`
- [ ] `"In 1952"`
Suggestion: First television broadcast. `First` is undefined; 1925, 1932, and the BBC's 1936 regular service refer to different milestones. Suggested correction: specify the milestone, such as Baird's first London-to-Glasgow broadcast.

### Q2664
Question: `"When was the National Health System (NHS) established?"`
Raw answer key: `"1948"`
Selections:
- [ ] `"1945"`
- [x] `"1948"`
- [ ] `"1952"`
- [ ] `"1934"`
Suggestion: NHS. The expansion is `National Health Service`, not `National Health System`. Suggested correction: replace the wording.

### Q2666
Question: `"What is the note with the highest value in the UK?"`
Raw answer key: `"£50"`
Selections:
- [ ] `"£20"`
- [x] `"£50"`
- [ ] `"£200"`
- [ ] `"£500"`
Suggestion: Highest Bank of England note. £50 is highest for Bank of England notes, but Scottish and Northern Irish banks issue £100 notes. Suggested correction: restrict the question to Bank of England notes or state the UK-wide distinction.

### Q2689
Question: `"In which TWO cases may a person who has been summoned to do jury service be exempted from doing it:"`
Raw answer key: `["If they have a criminal conviction","If they provide a good reason to be excused, such as ill health"]`
Selections:
- [x] `"If they have a criminal conviction"`
- [ ] `"If they have children"`
- [x] `"If they provide a good reason to be excused, such as ill health"`
- [ ] `"If they have to go to work"`
Suggestion: Criminal convictions and jury service. A conviction does not automatically disqualify every person; disqualification depends on conviction and sentence. Suggested correction: distinguish disqualification from being excused.

### Q2692
Question: `"On which of the following issues the Northern Ireland Assembly CANNOT make decisions?"`
Raw answer key: `"Planning"`
Selections:
- [ ] `"Health"`
- [ ] `"Education"`
- [ ] `"The Environment"`
- [x] `"Planning"`
Suggestion: Northern Ireland devolved powers. Planning, social security, and some taxation are not all reserved to the central government; planning is devolved. Suggested correction: use a genuinely reserved matter such as defence, or explicitly describe limited devolved powers.

### Q2695
Question: `"Who led the group of Catholics who tried to kill the Protestant king with a bomb in the Houses of the Parliament in 1605?"`
Raw answer key: `"Guy Fawkes"`
Selections:
- [ ] `"Oliver Cromwell"`
- [ ] `"Alexander II"`
- [x] `"Guy Fawkes"`
- [ ] `"Adrian IV"`
Suggestion: Gunpowder Plot. Guy Fawkes did not lead the plot; Robert Catesby did. Suggested correction: ask who led it and key Catesby, or ask who guarded the explosives and key Fawkes.

### Q2701
Question: `"How many members has the Council of Europe?"`
Raw answer key: `"47"`
Selections:
- [ ] `"15"`
- [x] `"47"`
- [ ] `"190"`
- [ ] `"5"`
Suggestion: Council of Europe membership. The explanation/options use 47 members; the current Council of Europe has 46. Suggested correction: update the answer and explanation.

### Q2719
Question: `"How many verdicts are possible in trials in Scotland?"`
Raw answer key: `"Three: ‘guilty’, ‘not guilty’ or ‘not proven’"`
Selections:
- [ ] `"Two: ‘guilty’ or ‘not guilty’"`
- [x] `"Three: ‘guilty’, ‘not guilty’ or ‘not proven’"`
- [ ] `"Three: ‘guilty’, ‘not guilty’ or ‘on hold’"`
- [ ] `"Two: ‘guilty’ or ‘not proven’"`
Suggestion: Scottish verdicts. The not-proven verdict was abolished from 1 January 2026; current answers should be guilty or not guilty. Both also contain `based of`. Suggested correction: update the verdict question and use `based on`.

### Q2756
Question: `"Choose the correct answer. The Middle Ages were:"`
Raw answer key: `"A period of constant war"`
Selections:
- [ ] `"A period of peace in Britain"`
- [ ] `"A period where liberal ideas were introduced in Britain"`
- [x] `"A period of constant war"`
- [ ] `"A period where new ideas about politics and philosophy were introduced in Britain"`
Suggestion: Constant war. `A period of constant war` is an overstatement. Suggested correction: use `a period of almost constant warfare`.

### Q2773
Question: `"Whose details are NOT listed in the Phone Book?"`
Raw answer key: `"The King"`
Selections:
- [x] `"The King"`
- [ ] `"MPs, SMs and MSPs"`
- [ ] `"MEPs"`
- [ ] `"All of the above"`
Suggestion: Phone Book and MEPs. The premise is obsolete and UK MEPs no longer exist. Suggested correction: replace it with current official representative directories and terminology.

### Q2776
Question: `"How many Senedd members does the Welsh government have?"`
Raw answer key: `"60"`
Selections:
- [ ] `"40"`
- [ ] `"50"`
- [x] `"60"`
- [ ] `"75"`
Suggestion: Welsh Government and Senedd. The executive is confused with the legislature and the 60-member figure is stale. Suggested correction: distinguish the Welsh Government from the Senedd and update current membership.

### Q2781
Question: `"During which movement the Parliament passed laws giving women the right to equal pay and made it illegal for employees to discriminate against women because of their gender:"`
Raw answer key: `"The Swinging Sixties"`
Selections:
- [ ] `"The Punk movement"`
- [ ] `"The Enlightenment"`
- [x] `"The Swinging Sixties"`
- [ ] `"The Suffrage"`
Suggestion: Equal Pay and Sex Discrimination Acts. The Acts were passed in 1970 and 1975, not simply during the Swinging Sixties; the text also says employees instead of employers. Suggested correction: state the correct decades/Acts and use `employers`.

### Q2794
Question: `"How can you visit the Northern Ireland Assembly (choose TWO options)?"`
Raw answer key: `["Contacting the Education Service","Contacting an MLA"]`
Selections:
- [x] `"Contacting the Education Service"`
- [ ] `"Contacting an MSP"`
- [x] `"Contacting an MLA"`
- [ ] `"Arranging a tour through the visitor services"`
Suggestion: Visiting the Northern Ireland Assembly. The selected pair is not unique because visitor services/tours provide another valid route. Suggested correction: use current visitor routes and make the requested pair uniquely correct.

### Q2798
Question: `"When is the electoral register updated?"`
Raw answer key: `"September or October"`
Selections:
- [ ] `"April or May"`
- [ ] `"May or June"`
- [x] `"September or October"`
- [ ] `"October or November"`
Suggestion: Electoral register updates. Registers are updated continuously and by varying canvass schedules, not universally in September or October. Suggested correction: describe the local schedule or continuous updates.

### Q2799
Question: `"Which of the following is the official church of the state?"`
Raw answer key: `"The Church of England"`
Selections:
- [ ] `"The Church of Great Britain"`
- [x] `"The Church of England"`
- [ ] `"The Church of the United Kingdom"`
- [ ] `"The British Church"`
Suggestion: Established church. The Church of England is established in England, not the official church of the UK as a whole. Suggested correction: ask for the established church in England.

### Q2802
Question: `"What was the population of the UK in 1700?"`
Raw answer key: `"5 million"`
Selections:
- [ ] `"2 million"`
- [ ] `"4 million"`
- [x] `"5 million"`
- [ ] `"8 million"`
Suggestion: Historical UK populations. The UK did not exist in some of the named years, and several figures describe England or Great Britain instead. Suggested correction: specify the historical territory and use its corresponding population.

### Q2804
Question: `"When did the Allies defeat Germany marking the end of the Second World War?"`
Raw answer key: `"In May 1945"`
Selections:
- [ ] `"In June 1943"`
- [x] `"In May 1945"`
- [ ] `"In August 1945"`
- [ ] `"In August 1946"`
Suggestion: End of World War II. May 1945 marked the end of the war in Europe, not the global end of the Second World War. Suggested correction: say `end of the war in Europe`.

### Q2815
Question: `"How can you visit the UK Parliament (choose TWO options)?"`
Raw answer key: `["Writing to your local MP to ask for tickets","Queueing on the day at the public entrance"]`
Selections:
- [ ] `"Arranging a tour through the visitor services"`
- [x] `"Writing to your local MP to ask for tickets"`
- [x] `"Queueing on the day at the public entrance"`
- [ ] `"Contacting an MSP"`
Suggestion: Visiting Parliament. Multiple listed choices can be valid ways to visit Parliament. Suggested correction: distinguish public-gallery attendance from tours and make the requested pair unique.

### Q2823
Question: `"When was the Northern Ireland Parliament established for the first time?"`
Raw answer key: `"In 1922"`
Selections:
- [x] `"In 1922"`
- [ ] `"In 1932"`
- [ ] `"In 1925"`
- [ ] `"In 1928"`
Suggestion: Northern Ireland Parliament. The first Parliament was established/opened in 1921, not 1922. Suggested correction: use `1921` or ask a separate 1922 Irish Free State question.

### Q2839
Question: `"How long does it take to donate blood?"`
Raw answer key: `"About an hour"`
Selections:
- [ ] `"About half an hour"`
- [x] `"About an hour"`
- [ ] `"About two hours"`
- [ ] `"About 15 minutes"`
Suggestion: Blood donation duration. The donation itself takes roughly 5-10 minutes; about an hour describes the full appointment. Suggested correction: specify which duration is being tested.

### Q2851
Question: `"Which British scientist led the development of the atomic bomb?"`
Raw answer key: `"Ernest Rutherford"`
Selections:
- [ ] `"Howard Florey"`
- [ ] `"Ernst Chain"`
- [x] `"Ernest Rutherford"`
- [ ] `"Keith Campbell"`
Suggestion: Atomic bomb leadership. Rutherford died before the Manhattan Project and did not lead atomic-bomb development; one record has no correct option. Suggested correction: ask about the Manhattan Project or a correct scientist/project.

### Q2866
Question: `"Which flower is associated with Northern Ireland?"`
Raw answer key: `"Shamrock"`
Selections:
- [ ] `"Daffodil"`
- [ ] `"Rose"`
- [ ] `"Thistle"`
- [x] `"Shamrock"`
Suggestion: Shamrock. A shamrock is a plant/symbol, not a flower. Suggested correction: ask for the plant or symbol associated with Northern Ireland, or use the flax flower if asking for a flower.

### Q2874
Question: `"What was the population of the UK in 1600?"`
Raw answer key: `"Just over 4 million"`
Selections:
- [ ] `"Just over 3 million"`
- [x] `"Just over 4 million"`
- [ ] `"Just under 3 million"`
- [ ] `"Just over 5 million"`
Suggestion: Historical UK populations. The UK did not exist in some of the named years, and several figures describe England or Great Britain instead. Suggested correction: specify the historical territory and use its corresponding population.

### Q2889
Question: `"In Wales, the jury has to listen to the evidence presented at the trial and then decide a verdict of ‘guilty’, ‘not guilty’ or ‘not proven’ based of what they have heard:"`
Raw answer key: `"False"`
Selections:
- [ ] `"True"`
- [x] `"False"`
Suggestion: Scottish verdicts. The not-proven verdict was abolished from 1 January 2026; current answers should be guilty or not guilty. Both also contain `based of`. Suggested correction: update the verdict question and use `based on`.

### Q2894
Question: `"How long can you use your driving licence in the UK if you have a licence from another country?"`
Raw answer key: `"For up to 12 months"`
Selections:
- [x] `"For up to 12 months"`
- [ ] `"You need a UK driving licence"`
- [ ] `"For as long as it is valid"`
- [ ] `"For up to 2 years"`
Suggestion: Foreign driving licences. `Up to 12 months` is not universal; validity depends on country, licence type, and residency. Suggested correction: specify the relevant licence category and issuing country.

### Q2899
Question: `"Which British actor has recently won an Oscar?"`
Raw answer key: `"Sir Anthony Hopkins"`
Selections:
- [ ] `"Hugh Grant"`
- [x] `"Sir Anthony Hopkins"`
- [ ] `"Jude Law"`
- [ ] `"Richard Burton"`
Suggestion: Anthony Hopkins. `Recently` is stale and `Antony` is misspelled. Suggested correction: remove the time-relative word, add the year, and use `Anthony`.

### Q2921
Question: `"Who invented the cash-dispensing ATM (automatic teller machine) or ‘cashpoint’?"`
Raw answer key: `"James Goodfellow"`
Selections:
- [ ] `"Sir Peter Mansfield"`
- [x] `"James Goodfellow"`
- [ ] `"Patrick Steptoe"`
- [ ] `"Sir Tim Berners-Lee"`
Suggestion: ATM inventor. The invention is disputed between James Goodfellow and John Shepherd-Barron. Suggested correction: specify PIN-based cash machines, a patent, or the first installed ATM.

### Q2966
Question: `"When driving in the UK, where do you need to display the tax disc which shows that the annual road tax has been paid?"`
Raw answer key: `"The windowscreen of the car"`
Selections:
- [ ] `"Anywhere inside the car"`
- [x] `"The windowscreen of the car"`
- [ ] `"The wheel of the car"`
- [ ] `"The boot of the car"`
Suggestion: Tax disc. Tax discs were abolished in 2014, and `Windowscreen` is misspelled. Suggested correction: state that vehicle tax is recorded electronically and no disc is displayed; use `windscreen` if needed.

### Q2986
Question: `"When was Ireland divided into two countries?"`
Raw answer key: `"In 1922"`
Selections:
- [ ] `"In 1920"`
- [x] `"In 1922"`
- [ ] `"In 1925"`
- [ ] `"In 1928"`
Suggestion: Partition of Ireland. Partition was legislated by the 1920 Act and implemented in 1921; the Irish Free State was established in 1922. Suggested correction: qualify the date/event.

### Q2998
Question: `"Who is the fastest person to have sailed around the world single-handed?"`
Raw answer key: `"Dame Ellen MacArthur"`
Selections:
- [ ] `"Dame Kelly Holmes"`
- [x] `"Dame Ellen MacArthur"`
- [ ] `"Jayne Torvill"`
- [ ] `"Bradley Wiggins"`
Suggestion: Ellen MacArthur. Her record is historical, not necessarily current. Suggested correction: add the 2005 date or update to the current record holder.

### Q3002
Question: `"What do you need to drive a car in the UK?"`
Raw answer key: `"A driving licence, a valid motor insurance, a MOT certificate and the road tax"`
Selections:
- [x] `"A driving licence, a valid motor insurance, a MOT certificate and the road tax"`
- [ ] `"A driving licence and a valid motor insurance only"`
- [ ] `"A driving licence and a MOT certificate only"`
- [ ] `"A driving licence only"`
Suggestion: Driving requirements. An MOT is not required for cars under three years old. Suggested correction: specify a car that is required to have an MOT or a car over three years old.

### Q3004
Question: `"Who defeated the Vikings?"`
Raw answer key: `"King Alfred the Great"`
Selections:
- [x] `"King Alfred the Great"`
- [ ] `"William I"`
- [ ] `"Boudicca"`
- [ ] `"James II"`
Suggestion: Alfred and the Vikings. `Who defeated the Vikings?` is too broad because Alfred defeated a Viking army, not all Vikings. Suggested correction: identify the Viking army and the Battle of Edington in 878.

### Q3032
Question: `"What name is given to the celebration when people in Great Britain set off fireworks at home or in special displays on the 5th of November?"`
Raw answer key: `"Bonfire night"`
Selections:
- [x] `"Bonfire night"`
- [ ] `"Fireworks night"`
- [ ] `"Bright night"`
- [ ] `"The candles night"`
Suggestion: Bonfire Night. `Bonfire Night` and `Fireworks Night` are both plausible names. Suggested correction: remove the ambiguous distractor or ask which event commemorates the Gunpowder Plot.

### Q3034
Question: `"Who has control over policy and laws governing defence, foreign affairs, immigration, taxation and social security in Northern Ireland?"`
Raw answer key: `"The central UK government"`
Selections:
- [ ] `"The Irish government"`
- [x] `"The central UK government"`
- [ ] `"The Northern Ireland Assembly"`
- [ ] `"The monarch"`
Suggestion: Devolved taxation and social security. The questions state reserved powers too absolutely; some tax and social-security powers are devolved. Suggested correction: restrict the claim to genuinely reserved matters.

### Q3037
Question: `"The devolved governments in Scotland, Wales and Northern Ireland cannot control policies and laws governing taxation and social security:"`
Raw answer key: `"True"`
Selections:
- [x] `"True"`
- [ ] `"False"`
Suggestion: Devolved taxation and social security. The questions state reserved powers too absolutely; some tax and social-security powers are devolved. Suggested correction: restrict the claim to genuinely reserved matters.

### Q3054
Question: `"Who built a wall in the north of England to keep out the Picts (ancestors of the Scottish people)?"`
Raw answer key: `"Emperor Hadrian"`
Selections:
- [ ] `"Emperor Claudius"`
- [ ] `"Napoleon"`
- [x] `"Emperor Hadrian"`
- [ ] `"Julius Caesar"`
Suggestion: Hadrian's Wall. The wall was not simply built to keep out later Picts, and Picts were not ancestors of all Scottish people. Suggested correction: ask which emperor ordered it to defend the northern frontier of Roman Britain.

### Q3059
Question: `"Which of the following countries were granted their independence in 1947 (choose THREE answers)?"`
Raw answer key: `["India","Pakistan","Ceylon (Sri Lanka)"]`
Selections:
- [x] `"India"`
- [ ] `"Bangladesh"`
- [x] `"Pakistan"`
- [x] `"Ceylon (Sri Lanka)"`
Suggestion: Independence dates. Ceylon became independent in 1948, leaving only India and Pakistan in 1947. Suggested correction: ask for two 1947 answers or change the dates/question.

### Q3069
Question: `"Carrying a weapon is a criminal offence, unless it is for self-defence:"`
Raw answer key: `"False"`
Selections:
- [ ] `"True"`
- [x] `"False"`
Suggestion: Carrying weapons. The explanation is overbroad; legality depends on weapon, location, lawful authority, and reasonable excuse. Suggested correction: state the rule for carrying an offensive weapon in public without lawful authority or reasonable excuse.

### Q3076
Question: `"Where did the Vikings come from?"`
Raw answer key: `"Denmark and Norway"`
Selections:
- [ ] `"France and Germany"`
- [ ] `"Sweden and Finland"`
- [x] `"Denmark and Norway"`
- [ ] `"Sweden and Germany"`
Suggestion: Viking origins. Sweden is omitted from the answer. Suggested correction: use `Denmark, Norway and Sweden` or `Scandinavia`.

### Q3109
Question: `"What was the name of the European Union when it was first established?"`
Raw answer key: `"European Economic Community"`
Selections:
- [ ] `"European Political Union"`
- [ ] `"Union of European Countries"`
- [x] `"European Economic Community"`
- [ ] `"Europe United"`
Suggestion: EEC and EU. The EEC was established in 1957; the EU was established in 1993. Suggested correction: ask for the organisation established in 1957 that later contributed to the EU.

### Q3132
Question: `"What name was given to those who supported the king during the Civil War that began in 1642?"`
Raw answer key: `"The Cavaliers"`
Selections:
- [x] `"The Cavaliers"`
- [ ] `"The Suffragettes"`
- [ ] `"The Suffragettes"`
- [ ] `"The Squareheads"`
Suggestion: Cavaliers. `The Suffragettes` appears twice and `The Roundheads` is missing as a distractor. Suggested correction: replace the duplicate with `The Roundheads`.

### Q3140
Question: `"UK laws ensure that people are not treated unfairly in any area of life or work because of their age, disability, sex, pregnancy and maternity, race, religion or belief, sexuality or marital status:"`
Raw answer key: `"True"`
Selections:
- [x] `"True"`
- [ ] `"False"`
Suggestion: Equality Act. The protected-characteristic list is incomplete/inaccurate: it omits gender reassignment and uses marital status instead of marriage/civil partnership. Suggested correction: use the Equality Act list and specify covered areas.

### Q3176
Question: `"Do you need a TV licence for watching TV on a mobile phone?"`
Raw answer key: `"Yes"`
Selections:
- [x] `"Yes"`
- [ ] `"No"`
Suggestion: TV licence on a phone. A licence is required for live TV or BBC iPlayer, not all viewing on a mobile. Suggested correction: state the live-TV/BBC iPlayer rule.

### Q3183
Question: `"When was slavery abolished throughout the British Empire?"`
Raw answer key: `"1833"`
Selections:
- [x] `"1833"`
- [ ] `"1843"`
- [ ] `"1844"`
- [ ] `"1861"`
Suggestion: Slavery abolition. The 1833 Act abolished slavery in most of the Empire, not throughout all territories. Suggested correction: qualify `throughout` and use the formal Act name where appropriate.

### Q3201
Question: `"Who is in charge of appointing the local Chief Constable?"`
Raw answer key: `"Police and Crime Commissioners"`
Selections:
- [ ] `"A judge"`
- [x] `"Police and Crime Commissioners"`
- [ ] `"The mayor"`
- [ ] `"The local community members"`
Suggestion: Chief Constable appointments. Police and Crime Commissioners are not the universal arrangement across the UK. Suggested correction: limit the question to most English and Welsh police areas outside London.

### Q3203
Question: `"How many British died on the first day alone of the Battle of Somme?"`
Raw answer key: `"60,000"`
Selections:
- [x] `"60,000"`
- [ ] `"65,000"`
- [ ] `"40,000"`
- [ ] `"55,000"`
Suggestion: Battle of the Somme. `60,000` was the first-day casualty figure, not the number who died. Suggested correction: change `died` to `casualties` or provide the approximate death figure.

### Q3209
Question: `"People on the electoral register with ages between 18 and 70 can be asked to serve on a jury."`
Raw answer key: `"True"`
Selections:
- [x] `"True"`
- [ ] `"False"`
Suggestion: Jury age. The upper age of 70 is outdated. Suggested correction: use the current generally applicable upper age of 75.

### Q3234
Question: `"What is the name of the first Danish king to rule in England?"`
Raw answer key: `"Canute"`
Selections:
- [x] `"Canute"`
- [ ] `"Kenneth MacAlpin"`
- [ ] `"Henry V"`
- [ ] `"Edward I"`
Suggestion: First Danish king in England. Sweyn Forkbeard was the first Danish king to rule England; Canute followed. Suggested correction: add Sweyn Forkbeard or specify Canute's later reign.

### Q3236
Question: `"It is a civil offence to owe money to someone and you might be taken to court."`
Raw answer key: `"True"`
Selections:
- [x] `"True"`
- [ ] `"False"`
Suggestion: Civil debt. Owing money is a civil matter/debt claim, not a `civil offence`. Suggested correction: say a creditor may take a debtor to civil court.

### Q3252
Question: `"Which TWO of the following are examples of criminal offences:"`
Raw answer key: `["Selling tobacco to anyone under the age of 18","Smoking in public places"]`
Selections:
- [ ] `"Cases of unfair dismissal or discrimination in the workplace"`
- [x] `"Selling tobacco to anyone under the age of 18"`
- [ ] `"A dispute about faulty goods or services"`
- [x] `"Smoking in public places"`
Suggestion: Criminal offences and smoking. Smoking outdoors in public is not generally a criminal offence. Suggested correction: specify smoking in enclosed public places or workplaces.

### Q3267
Question: `"What does the UK offer to its permanent residents or citizens?"`
Raw answer key: `"A right to join in the election of a government"`
Selections:
- [ ] `"A right to judge others"`
- [x] `"A right to join in the election of a government"`
- [ ] `"Free access to all national museums"`
- [ ] `"A discount in taxes"`
Suggestion: Residents' voting rights. Permanent residents do not universally have voting rights; eligibility depends on nationality and election. Suggested correction: ask about British citizens or eligible voters.

### Q3270
Question: `"What does the UK offer to its residents or citizens (choose FIVE answers)?"`
Raw answer key: `["Freedom of belief and religion","Freedom of speech","Freedom from unfair discrimination","A right to a fair trial","A right to join in the election of a government"]`
Selections:
- [x] `"Freedom of belief and religion"`
- [x] `"Freedom of speech"`
- [x] `"Freedom from unfair discrimination"`
- [x] `"A right to a fair trial"`
- [ ] `"Free university tuition fees"`
- [x] `"A right to join in the election of a government"`
Suggestion: Residents' voting rights. Permanent residents do not universally have voting rights; eligibility depends on nationality and election. Suggested correction: ask about British citizens or eligible voters.

### Q3293
Question: `"What did the ‘Bill of Rights‘ confirm in 1689?"`
Raw answer key: `"The rights of Parliament and the limits of the king‘s power"`
Selections:
- [ ] `"Women‘s right to vote"`
- [x] `"The rights of Parliament and the limits of the king‘s power"`
- [ ] `"The supreme power of the king"`
- [ ] `"The freedom of speech"`
Suggestion: Bill of Rights. Parliamentary freedom of speech is also part of the Bill of Rights, making the distractor ambiguous. Suggested correction: specify parliamentary freedom of speech or replace the distractor.

### Q3327
Question: `"Which British scientist led the development of the atomic bomb?"`
Raw answer key: `"Ernest Rutherford"`
Selections:
- [ ] `"Howard Florey"`
- [ ] `"Ernst Chain"`
- [x] `"Ernest Rutherford"`
- [ ] `"Keith Campbell"`
Suggestion: Atomic bomb leadership. Rutherford died before the Manhattan Project and did not lead atomic-bomb development; one record has no correct option. Suggested correction: ask about the Manhattan Project or a correct scientist/project.

### Q3342
Question: `"During which movement the Parliament passed laws giving women the right to equal pay and made it illegal for employees to discriminate against women because of their gender:"`
Raw answer key: `"The Swinging Sixties"`
Selections:
- [ ] `"The Punk movement"`
- [ ] `"The Enlightenment"`
- [x] `"The Swinging Sixties"`
- [ ] `"The Suffrage"`
Suggestion: Equal Pay and Sex Discrimination Acts. The Acts were passed in 1970 and 1975, not simply during the Swinging Sixties; `employees` should be `employers`. Suggested correction: use the correct dates and wording.

### Q3417
Question: `"The UK is not a full member of the European Union because it does not use the Euro currency:"`
Raw answer key: `"False"`
Selections:
- [ ] `"True"`
- [x] `"False"`
Suggestion: UK and the EU. The explanation says the UK is still an EU member. Suggested correction: state that the UK is no longer an EU member and correct the true/false key.

### Q3418
Question: `"Who was the British Minister after Margaret Thatcher?"`
Raw answer key: `"John Major"`
Selections:
- [ ] `"Tony Blair"`
- [ ] `"Harold Macmillan"`
- [ ] `"Gordon Brown"`
- [x] `"John Major"`
Suggestion: John Major. `British Minister` is ambiguous. Suggested correction: ask who was Prime Minister after Margaret Thatcher.

### Q3458
Question: `"Who defeated the Vikings?"`
Raw answer key: `"King Alfred the Great"`
Selections:
- [x] `"King Alfred the Great"`
- [ ] `"William I"`
- [ ] `"Boudicca"`
- [ ] `"James II"`
Suggestion: Alfred and the Vikings. `Who defeated the Vikings?` is too broad because Alfred defeated a Viking army, not all Vikings. Suggested correction: identify the Viking army and the Battle of Edington in 878.

### Q3471
Question: `"Which Act abolished slavery throughout the British Empire in 1833?"`
Raw answer key: `"The Emancipation Act"`
Selections:
- [ ] `"The Freedom Act"`
- [ ] `"The Habeas Corpus Act"`
- [x] `"The Emancipation Act"`
- [ ] `"The Slavery Act"`
Suggestion: Slavery abolition. The 1833 Act abolished slavery in most of the Empire, not throughout all territories. Suggested correction: qualify `throughout` and use the formal Act name where appropriate.

### Q3485
Question: `"When was the first television broadcast made?"`
Raw answer key: `"In 1932"`
Selections:
- [ ] `"In 1922"`
- [x] `"In 1932"`
- [ ] `"In 1942"`
- [ ] `"In 1952"`
Suggestion: First television broadcast. The answer is only correct for a specified Baird milestone. Suggested correction: identify the London-to-Glasgow broadcast or another defined milestone.

### Q3494
Question: `"Under which Act was the United Kingdom of Great Britain created?"`
Raw answer key: `"The Act of Union"`
Selections:
- [x] `"The Act of Union"`
- [ ] `"The Great Act"`
- [ ] `"The United Kingdom Act"`
- [ ] `"The Act of Great Britain"`
Suggestion: Kingdom of Great Britain. The 1707 Acts created the Kingdom of Great Britain; the United Kingdom of Great Britain and Ireland arose from the 1800 Act effective in 1801. Suggested correction: specify which state and Act are meant.

### Q3502
Question: `"Who was Prime Minister in England from 1721 to 1742?"`
Raw answer key: `"Sir Robert Walpole"`
Selections:
- [x] `"Sir Robert Walpole"`
- [ ] `"Admiral Nelson"`
- [ ] `"Henry Pelham"`
- [ ] `"Charles Edward Stuart"`
Suggestion: Robert Walpole. `Prime Minister in England` is historically inaccurate; the office concerned Great Britain. Suggested correction: `Prime Minister of Great Britain`.

### Q3505
Question: `"When was Ireland divided into two countries?"`
Raw answer key: `"In 1922"`
Selections:
- [ ] `"In 1920"`
- [x] `"In 1922"`
- [ ] `"In 1925"`
- [ ] `"In 1928"`
Suggestion: Partition of Ireland. `1922` refers to the Irish Free State, while partition was legislated in 1920 and took effect in 1921. Suggested correction: specify the event being dated.

### Q3525
Question: `"After the Second World War, England was exhausted economically."`
Raw answer key: `"True"`
Selections:
- [x] `"True"`
- [ ] `"False"`
Suggestion: Post-war economy. The standard fact concerns the United Kingdom/Britain, not England alone. Suggested correction: use `United Kingdom`.

### Q3534
Question: `"What do Ian McEwan, Hilary Mantel and Julian Barnes have in common?"`
Raw answer key: `"They were awarded with the Man Booker Prize for Fiction"`
Selections:
- [ ] `"They are British sports players"`
- [x] `"They were awarded with the Man Booker Prize for Fiction"`
- [ ] `"They won a Nobel Prize in Literature"`
- [ ] `"They were awarded with the Mercury Music Prize"`
Suggestion: Booker Prize eligibility. The historical Commonwealth/Ireland/Zimbabwe restriction is obsolete. Suggested correction: use current eligibility and date the question.

### Q3535
Question: `"Who was Henry Purcell?"`
Raw answer key: `"An organist at Westminster Abbey"`
Selections:
- [ ] `"A German-born composer"`
- [x] `"An organist at Westminster Abbey"`
- [ ] `"An opera composer"`
- [ ] `"A jazz musician"`
Suggestion: Henry Purcell. Both `An organist at Westminster Abbey` and `An opera composer` are correct. Suggested correction: remove one or ask specifically about his Westminster Abbey post.

### Q3542
Question: `"What was the population of the UK in 1998?"`
Raw answer key: `"57 million"`
Selections:
- [ ] `"40 million"`
- [ ] `"50 million"`
- [ ] `"55 million"`
- [x] `"57 million"`
Suggestion: UK population in 1998. The answer `57 million` is too low; the population was about 58.5 million. Suggested correction: use about 58.5 million.

### Q3552
Question: `"What was the population of the UK in 1600?"`
Raw answer key: `"Just over 4 million"`
Selections:
- [ ] `"Just over 3 million"`
- [x] `"Just over 4 million"`
- [ ] `"Just under 3 million"`
- [ ] `"Just over 5 million"`
Suggestion: Historical UK populations. The UK did not exist in some of the named years, and several figures describe England or Great Britain instead. Suggested correction: specify the historical territory and use its corresponding population. | Historical population territory. The UK did not exist in 1600 or 1700, and the figures do not match the stated territory. Suggested correction: ask for England/Great Britain or specify the historical territories.

### Q3554
Question: `"When is the Sikh festival which celebrates the founding of the Sikh community (Khalsa) and known as Vaisakhi celebrated?"`
Raw answer key: `"14th of April"`
Selections:
- [ ] `"14th of February"`
- [x] `"14th of April"`
- [ ] `"30th of March"`
- [ ] `"30th of April"`
Suggestion: Vaisakhi date. Vaisakhi is generally observed on 13 or 14 April rather than fixed at 14 April. Suggested correction: use `13 or 14 April`.

### Q3565
Question: `"Which flower is associated with Northern Ireland?"`
Raw answer key: `"Shamrock"`
Selections:
- [ ] `"Daffodil"`
- [ ] `"Rose"`
- [ ] `"Thistle"`
- [x] `"Shamrock"`
Suggestion: Shamrock. A shamrock is a plant/symbol, not a flower. Suggested correction: ask for the plant or symbol associated with Northern Ireland, or use the flax flower if asking for a flower. | Shamrock. A shamrock is a plant/symbol, not a flower. Suggested correction: ask for the associated plant/symbol or use the flax flower.

### Q3580
Question: `"What was the population of the UK in 1801?"`
Raw answer key: `"8 million"`
Selections:
- [ ] `"5 million"`
- [x] `"8 million"`
- [ ] `"10 million"`
- [ ] `"12 million"`
Suggestion: Historical population territory. The UK did not exist in 1600 or 1700, and the figures do not match the stated territory. Suggested correction: ask for England/Great Britain or specify the historical territories.

### Q3603
Question: `"Which of the following is the official church of the state?"`
Raw answer key: `"The Church of England"`
Selections:
- [ ] `"The Church of Great Britain"`
- [x] `"The Church of England"`
- [ ] `"The Church of the United Kingdom"`
- [ ] `"The British Church"`
Suggestion: Established church. There is no single official church of the United Kingdom; the Church of England is established in England. Suggested correction: ask for the established church in England.

### Q3604
Question: `"What was the population of the UK in 1700?"`
Raw answer key: `"5 million"`
Selections:
- [ ] `"2 million"`
- [ ] `"4 million"`
- [x] `"5 million"`
- [ ] `"8 million"`
Suggestion: Historical UK populations. The UK did not exist in some of the named years, and several figures describe England or Great Britain instead. Suggested correction: specify the historical territory and use its corresponding population. | Historical population territory. The UK did not exist in 1600 or 1700, and the figures do not match the stated territory. Suggested correction: ask for England/Great Britain or specify the historical territories.

### Q3611
Question: `"What TWO names are given to the people who give tours at the Tower of London?"`
Raw answer key: `["Beefeaters","Yeoman Wardens"]`
Selections:
- [x] `"Beefeaters"`
- [ ] `"Suffragettes"`
- [ ] `"Chartists"`
- [x] `"Yeoman Wardens"`
Suggestion: Tower of London. `Yeoman Wardens` should be `Yeoman Warders`.

### Q3615
Question: `"When is St Patrick’s Day, patron to of Northern Ireland, celebrated?"`
Raw answer key: `"17th of March"`
Selections:
- [ ] `"23rd of April"`
- [ ] `"30th of November"`
- [ ] `"1st of March"`
- [x] `"17th of March"`
Suggestion: St Patrick's Day. `patron to of Northern Ireland` is malformed and St Patrick is patron saint of Ireland. Suggested correction: rewrite the sentence with `patron saint of Ireland`.

### Q3622
Question: `"What name is given to the Church of England in Scotland and the United States?"`
Raw answer key: `"The Episcopal Church"`
Selections:
- [ ] `"The Main Church"`
- [ ] `"The King’s Church"`
- [x] `"The Episcopal Church"`
- [ ] `"The Catholic Church"`
Suggestion: Church of England names. The Scottish Episcopal Church and US Episcopal Church are separate churches, not simply names for the Church of England. Suggested correction: ask separately for the Anglican church in Scotland or the United States.

### Q3625
Question: `"Which TWO religions celebrate Diwali?"`
Raw answer key: `["Hindu","Sikh"]`
Selections:
- [ ] `"Buddhist"`
- [ ] `"Muslim"`
- [x] `"Hindu"`
- [x] `"Sikh"`
Suggestion: Diwali communities. The two-answer key is not unique because other communities, including Jains and some Buddhists, celebrate Diwali. Suggested correction: specify the intended communities or ask for all applicable traditions.

### Q3630
Question: `"By what other TWO names is the Church of England known for?"`
Raw answer key: `["The Anglican Church","The Episcopal Church"]`
Selections:
- [x] `"The Anglican Church"`
- [ ] `"The Union Church"`
- [ ] `"The Greatest Church"`
- [x] `"The Episcopal Church"`
Suggestion: Church of England names. The Scottish Episcopal Church and US Episcopal Church are separate churches, not simply names for the Church of England. Suggested correction: ask separately for the Anglican church in Scotland or the United States.

### Q3644
Question: `"When is the Mercury Music Prize awarded?"`
Raw answer key: `"September"`
Selections:
- [ ] `"July"`
- [ ] `"August"`
- [x] `"September"`
- [ ] `"October"`
Suggestion: Mercury Prize date. The ceremony date varies by year and is not fixed to September. Suggested correction: say it is awarded annually on a date that varies.

### Q3646
Question: `"What name is given to the candelabrum lit during the eight-day holiday of Hanukkah?"`
Raw answer key: `"Menorah"`
Selections:
- [x] `"Menorah"`
- [ ] `"Diwali"`
- [ ] `"Ramadan"`
- [ ] `"Baisakhi"`
Suggestion: Hanukkah lamp. The explanation describes eight candles, but a hanukkiah has nine lights including the shamash. Suggested correction: use `hanukkiah` and describe the nine lights.

### Q3652
Question: `"Which of the following national galleries is NOT located in London?"`
Raw answer key: `"The National Museum"`
Selections:
- [ ] `"Tate Britain"`
- [ ] `"The National Gallery"`
- [ ] `"Tate Modern"`
- [x] `"The National Museum"`
Suggestion: National gallery. `The National Museum` is a museum, not a gallery. Suggested correction: make the category consistent or name a specific institution such as National Museum Cardiff.

### Q3654
Question: `"How old is the clock at the house of the parliament in London, also known as ‘Big Ben’?"`
Raw answer key: `"150 years old"`
Selections:
- [ ] `"100 years old"`
- [x] `"150 years old"`
- [ ] `"200 years old"`
- [ ] `"250 years old"`
Suggestion: Big Ben clock age. Big Ben is the bell, not the clock, and the age answer is time-dependent. Suggested correction: ask when the Great Clock was completed or ask what Big Ben is.

### Q3665
Question: `"Which British actor has recently won an Oscar?"`
Raw answer key: `"Sir Anthony Hopkins"`
Selections:
- [ ] `"Hugh Grant"`
- [x] `"Sir Anthony Hopkins"`
- [ ] `"Jude Law"`
- [ ] `"Richard Burton"`
Suggestion: Actors and Oscars. `Recently` is stale and explanations misspell `Anthony`. Suggested correction: remove the time-relative wording, add the year, and use `Anthony`.

### Q3680
Question: `"What is the note with the highest value in the UK?"`
Raw answer key: `"£50"`
Selections:
- [ ] `"£20"`
- [x] `"£50"`
- [ ] `"£100"`
- [ ] `"£500"`
Suggestion: Highest UK note. £50 is the highest Bank of England denomination, but Scottish and Northern Irish banks issue £100 notes. Suggested correction: specify Bank of England notes or explain the UK-wide distinction.

### Q3683
Question: `"Which British actor has recently won an Oscar?"`
Raw answer key: `"Sir Anthony Hopkins"`
Selections:
- [ ] `"Daniel Day Lewis"`
- [x] `"Sir Anthony Hopkins"`
- [ ] `"Jude Law"`
- [ ] `"Richard Burton"`
Suggestion: Actors and Oscars. `Recently` is stale and explanations misspell `Anthony`. Suggested correction: remove the time-relative wording, add the year, and use `Anthony`.

### Q3689
Question: `"What is the coin with the highest value in the UK?"`
Raw answer key: `"£2"`
Selections:
- [ ] `"50p"`
- [x] `"£2"`
- [ ] `"£5"`
- [ ] `"£10"`
Suggestion: Highest UK coin. £2 is the highest standard circulating denomination, but £5/£10 commemorative coins exist. Suggested correction: specify `highest-value standard circulating coin`.

### Q3696
Question: `"Who led the group of Catholics who tried to kill the Protestant king with a bomb in the Houses of the Parliament in 1605?"`
Raw answer key: `"Guy Fawkes"`
Selections:
- [ ] `"Oliver Cromwell"`
- [ ] `"Alexander II"`
- [x] `"Guy Fawkes"`
- [ ] `"Adrian IV"`
Suggestion: Gunpowder Plot. Robert Catesby led the group; Guy Fawkes guarded the explosives. Suggested correction: key Catesby or reword the question to ask about the explosives.

### Q3712
Question: `"Which British actor has recently won an Oscar?"`
Raw answer key: `"Colin Firth"`
Selections:
- [ ] `"Daniel Day Lewis"`
- [x] `"Colin Firth"`
- [ ] `"Jude Law"`
- [ ] `"Charles Chaplin"`
Suggestion: Actors and Oscars. `Recently` is stale and explanations misspell `Anthony`. Suggested correction: remove the time-relative wording, add the year, and use `Anthony`.

### Q3726
Question: `"What was the population of the UK in 2005?"`
Raw answer key: `"Just under 60 million"`
Selections:
- [ ] `"Just under 50 million"`
- [x] `"Just under 60 million"`
- [ ] `"Just over 50 million"`
- [ ] `"Just under 62 million"`
Suggestion: UK population in 2005. The population was just over 60 million, not just under. Suggested correction: change the key and option.

### Q3727
Question: `"What game do usually people play at Halloween?"`
Raw answer key: `"Trick or treat"`
Selections:
- [ ] `"Chess"`
- [x] `"Trick or treat"`
- [ ] `"Hide and seek"`
- [ ] `"Netball"`
Suggestion: Halloween activity. `What game do usually people play` is ungrammatical and trick-or-treat is an activity, not a game. Suggested correction: ask which activity children commonly take part in.

### Q3728
Question: `"What is the most well-known gallery in Wales?"`
Raw answer key: `"The National Museum"`
Selections:
- [ ] `"Tate Britain"`
- [x] `"The National Museum"`
- [ ] `"The National Gallery"`
- [ ] `"Tate Modern"`
Suggestion: Welsh gallery. `The National Museum` is a museum, not a gallery. Suggested correction: ask for a museum or name an actual gallery.

### Q3729
Question: `"The Man Booker Prize for Fiction is awarded annually for the best fiction novel written by an author from:"`
Raw answer key: `"The Commonwealth, Ireland or Zimbabwe"`
Selections:
- [x] `"The Commonwealth, Ireland or Zimbabwe"`
- [ ] `"The European Union, Zambia or Zimbabwe"`
- [ ] `"The Commonwealth, the USA or Australia"`
- [ ] `"The European Union, Canada or Australia"`
Suggestion: Booker Prize eligibility. The historical Commonwealth/Ireland/Zimbabwe restriction is obsolete. Suggested correction: use current eligibility and date the question.

### Q3739
Question: `"On Remembrance Day, there is a two-minute silence at 11 AM to commemorate those who died fighting during the First World War?"`
Raw answer key: `"True"`
Selections:
- [x] `"True"`
- [ ] `"False"`
Suggestion: Remembrance Day. The silence commemorates those who died in all wars and conflicts, not only the First World War. Suggested correction: use `in wars and conflicts`.

### Q3742
Question: `"What was the population of the UK in 1851?"`
Raw answer key: `"20 million"`
Selections:
- [x] `"20 million"`
- [ ] `"40 million"`
- [ ] `"30 million"`
- [ ] `"50 million"`
Suggestion: UK population in 1851. The UK including Ireland had about 27 million people; 20 million is closer to Great Britain. Suggested correction: specify the territory or update the figure.

### Q3792
Question: `"What was the population of the UK in 1851?"`
Raw answer key: `"20 million"`
Selections:
- [x] `"20 million"`
- [ ] `"40 million"`
- [ ] `"30 million"`
- [ ] `"50 million"`
Suggestion: UK population in 1851. The UK including Ireland had about 27 million people; 20 million is closer to Great Britain. Suggested correction: specify the territory or update the figure.

### Q3794
Question: `"What is the note with the highest value in the UK?"`
Raw answer key: `"£50"`
Selections:
- [ ] `"£20"`
- [x] `"£50"`
- [ ] `"£100"`
- [ ] `"£500"`
Suggestion: Highest UK note. £50 is the highest Bank of England denomination, but Scottish and Northern Irish banks issue £100 notes. Suggested correction: specify Bank of England notes or explain the UK-wide distinction.

### Q3796
Question: `"How old do you need to be to be able to apply for a free TV licence?"`
Raw answer key: `"Over 75"`
Selections:
- [ ] `"Over 65"`
- [ ] `"Over 60"`
- [ ] `"Over 70"`
- [x] `"Over 75"`
Suggestion: Free TV licence. Age 75+ alone is insufficient; the applicant must receive Pension Credit. Suggested correction: include the Pension Credit condition.

### Q3810
Question: `"What was the population of the UK in 1901?"`
Raw answer key: `"40 million"`
Selections:
- [ ] `"20 million"`
- [x] `"40 million"`
- [ ] `"30 million"`
- [ ] `"50 million"`
Suggestion: UK population in 1901. The UK including Ireland had about 46 million people, not 40 million. Suggested correction: update the figure or specify Great Britain.

### Q3816
Question: `"Which TWO of the following water sports are popular in the UK?"`
Raw answer key: `["Rowing","Sailing"]`
Selections:
- [ ] `"Waterpolo"`
- [x] `"Rowing"`
- [x] `"Sailing"`
- [ ] `"Surfing"`
Suggestion: Water sports. Surfing is also popular in the UK, so the two-answer key is not unique. Suggested correction: replace the distractor or specify the intended source pair.

### Q3832
Question: `"What can living people donate that may help other people with injuries or illnesses (choose TWO options)?"`
Raw answer key: `["Blood","A kidney"]`
Selections:
- [x] `"Blood"`
- [ ] `"Saliva"`
- [x] `"A kidney"`
- [ ] `"Their liver"`
Suggestion: Living organ donation. A living donor can donate part of a liver, so the two-answer key is not unique. Suggested correction: explicitly say `part of their liver` and include it, or replace that option.

### Q3833
Question: `"Where is the office of the MPs located?"`
Raw answer key: `"The House of Commons"`
Selections:
- [ ] `"10 Downing Street"`
- [x] `"The House of Commons"`
- [ ] `"The House of Lords"`
- [ ] `"Buckingham Palace"`
Suggestion: MP offices. MPs have parliamentary and constituency offices. Suggested correction: ask specifically about a parliamentary office or acknowledge both locations.

### Q3837
Question: `"How can MPs be contacted (choose TWO options)?"`
Raw answer key: `["By letter","By phoning their constituency office"]`
Selections:
- [x] `"By letter"`
- [ ] `"By going to your local council and asking for an appointment"`
- [x] `"By phoning their constituency office"`
- [ ] `"Through facebook"`
Suggestion: Contacting MPs. Facebook can be a valid contact route, and the explanation uses obsolete `SMs`. Suggested correction: specify formal methods, replace the distractor, and use `MSs`.

### Q3859
Question: `"How can you visit the UK Parliament (choose TWO options)?"`
Raw answer key: `["Writing to your local MP to ask for tickets","Queueing on the day at the public entrance"]`
Selections:
- [ ] `"Arranging a tour through the visitor services"`
- [x] `"Writing to your local MP to ask for tickets"`
- [x] `"Queueing on the day at the public entrance"`
- [ ] `"Contacting an MSP"`
Suggestion: Visiting Parliament. Multiple listed choices can be valid ways to visit Parliament. Suggested correction: distinguish public-gallery attendance from tours and make the requested pair unique. | Visiting Parliament. Arranging a tour is also a valid way to visit, so the two-answer key is not unique. Suggested correction: specify public-gallery entry or include all valid routes.

### Q3869
Question: `"How much do you have to pay to visit the Palace of Westminster?"`
Raw answer key: `"The entrance to the Palace of Westminster is free"`
Selections:
- [ ] `"£20"`
- [ ] `"£5"`
- [ ] `"£15"`
- [x] `"The entrance to the Palace of Westminster is free"`
Suggestion: Palace of Westminster cost. Some visits/tours are paid even if public-gallery entry can be free. Suggested correction: ask specifically about attending a debate through the public gallery.

### Q3896
Question: `"What name is given to the elected members of the Welsh government?"`
Raw answer key: `"SMs"`
Selections:
- [ ] `"MSPs"`
- [x] `"SMs"`
- [ ] `"MLAs"`
- [ ] `"MPs"`
Suggestion: Senedd terminology. `SMs`/`AMs` is obsolete or incorrect. Suggested correction: use `MSs`/`Members of the Senedd` and distinguish the legislature from the Government.

### Q3906
Question: `"How many members does the Council of Europe have?"`
Raw answer key: `"47"`
Selections:
- [ ] `"15"`
- [x] `"47"`
- [ ] `"190"`
- [ ] `"5"`
Suggestion: Council of Europe membership. The explanation/options use 47 members; the current Council of Europe has 46. Suggested correction: update the answer and explanation. | Council of Europe. The current membership is 46, not 47. Suggested correction: update the answer/options and explanations.

### Q3909
Question: `"What Treaty established the European Economic Union in 1957?"`
Raw answer key: `"The Treaty of Rome"`
Selections:
- [x] `"The Treaty of Rome"`
- [ ] `"The Treaty of Vienna"`
- [ ] `"The Treaty of Brussels"`
- [ ] `"The Act of Union"`
Suggestion: EEC and EU. The EEC was the 1957 predecessor; the EU was established in 1993. Suggested correction: distinguish the Treaty of Rome/EEC from the later EU.

### Q3935
Question: `"On which of the following issues the  Northern Ireland Assembly CANNOT make decisions?"`
Raw answer key: `"Planning"`
Selections:
- [ ] `"Health"`
- [ ] `"Education"`
- [ ] `"The Environment"`
- [x] `"Planning"`
Suggestion: Northern Ireland devolved powers. Planning, social security, and some taxation are not all reserved to the central government; planning is devolved. Suggested correction: use a genuinely reserved matter such as defence, or explicitly describe limited devolved powers. | Northern Ireland Assembly powers. Planning is devolved, so it cannot be the answer to what the Assembly cannot decide. Suggested correction: use a reserved matter such as defence.

### Q3941
Question: `"Who is married to the King of the United Kingdom?"`
Raw answer key: `"Camila, the Queen Consort"`
Selections:
- [ ] `"Kate, the Princess of Wales"`
- [x] `"Camila, the Queen Consort"`
- [ ] `"Camila, the Princess of Wales"`
- [ ] `"Kate, the Queen Consort"`
Suggestion: Queen Camilla. `Camila, the Queen Consort` is misspelled and outdated. Suggested correction: `Camilla, Queen Camilla`.

### Q3946
Question: `"How often are the general elections held in the UK?"`
Raw answer key: `"Every 5 years"`
Selections:
- [ ] `"Every year"`
- [ ] `"Every 2 years"`
- [ ] `"Every 4 years"`
- [x] `"Every 5 years"`
Suggestion: General elections. Elections may occur sooner than five years. Suggested correction: ask for the maximum normal interval.

### Q3955
Question: `"In Wales, the jury has to listen to the evidence presented at the trial and then decide a verdict of ‘guilty’, ‘not guilty’ or ‘not proven’ based of what they have heard:"`
Raw answer key: `"﻿False"`
Selections:
- [ ] `"True"`
- [x] `"﻿False"`
Suggestion: Scottish/Welsh verdicts. `based of` should be `based on`; Q3955 also contains an invisible character in the option. Q4012 relies on the obsolete not-proven verdict. Suggested correction: clean the text and update current Scottish verdict law.

### Q3957
Question: `"When driving in the UK, where do you need to display the tax disc which shows that the annual road tax has been paid?"`
Raw answer key: `"The windowscreen of the car"`
Selections:
- [ ] `"Anywhere inside the car"`
- [x] `"The windowscreen of the car"`
- [ ] `"The wheel of the car"`
- [ ] `"The boot of the car"`
Suggestion: Tax disc. Tax discs were abolished in 2014, and `Windowscreen` is misspelled. Suggested correction: state that vehicle tax is recorded electronically and no disc is displayed; use `windscreen` if needed. | Tax disc. Tax discs were abolished in 2014 and `windowscreen` is misspelled. Suggested correction: say vehicle tax is recorded electronically and no disc is displayed; use `windscreen` if needed.

### Q3962
Question: `"What is the relationship between the monarch and the government?"`
Raw answer key: `"Advise, warn and encourage the government’s decisions"`
Selections:
- [ ] `"Approve the government’s decisions on government policies"`
- [x] `"Advise, warn and encourage the government’s decisions"`
- [ ] `"Advise, encourage and approve the government’s decisions"`
- [ ] `"Advise and approve the government’s decisions"`
Suggestion: Monarch and government. The answer says the monarch encourages government decisions. Suggested correction: say the monarch advises, warns, and encourages the government/Prime Minister.

### Q3964
Question: `"Where can people facing domestic violence get help from (choose TWO options)?"`
Raw answer key: `["The Citizens Advise Bureau","A solicitor"]`
Selections:
- [ ] `"The NHS"`
- [x] `"The Citizens Advise Bureau"`
- [ ] `"The Human Rights Commission"`
- [x] `"A solicitor"`
Suggestion: Domestic-violence help. NHS services can also provide help, so the two-answer key is not unique, and `Citizens Advise Bureau` is misspelled. Suggested correction: use `Citizens Advice` and make the intended applicable sources explicit.

### Q3974
Question: `"How long does it take to donate blood?"`
Raw answer key: `"About an hour"`
Selections:
- [ ] `"About half an hour"`
- [x] `"About an hour"`
- [ ] `"About two hours"`
- [ ] `"About 15 minutes"`
Suggestion: Blood donation duration. The donation itself takes roughly 5-10 minutes; about an hour describes the full appointment. Suggested correction: specify which duration is being tested. | Blood donation. About an hour is the full appointment; the donation itself is about 5-10 minutes. Suggested correction: specify which duration is intended.

### Q3979
Question: `"Whose details are NOT listed in the Phone Book?"`
Raw answer key: `"The King"`
Selections:
- [x] `"The King"`
- [ ] `"MPs, SMs and MSPs"`
- [ ] `"MEPs"`
- [ ] `"None of the above"`
Suggestion: Phone Book. UK MEPs no longer exist and `SMs` is wrong, making the answer set stale/ambiguous. Suggested correction: date the question, remove MEPs, and use `MSs`.

### Q3981
Question: `"How many members does the Senedd have?"`
Raw answer key: `"60"`
Selections:
- [ ] `"40"`
- [ ] `"50"`
- [x] `"60"`
- [ ] `"75"`
Suggestion: Senedd membership. The current Senedd has 96 members; 96 is not offered. Suggested correction: replace the options/key and update the explanation.

### Q3988
Question: `"Members of the Senedd (SMs) are elected every four years on the basis of:"`
Raw answer key: `"Proportional representation"`
Selections:
- [x] `"Proportional representation"`
- [ ] `"Personal achievements"`
- [ ] `"Instant run-off"`
- [ ] `"First past the post system (the candidate who gets the most votes)"`
Suggestion: Senedd terminology. `SMs`/`AMs` is obsolete or incorrect. Suggested correction: use `MSs`/`Members of the Senedd` and distinguish the legislature from the Government.

### Q3996
Question: `"Many MPs, SMs and MSPs hold regular local events where constituents can go in person to talk about issues that are of concern to them. These are known as:"`
Raw answer key: `"Local ‘surgeries’"`
Selections:
- [ ] `"Hansard"`
- [x] `"Local ‘surgeries’"`
- [ ] `"Local ‘meetings’"`
- [ ] `"Constituents ‘reunions’"`
Suggestion: Senedd terminology. `SMs`/`AMs` is obsolete or incorrect. Suggested correction: use `MSs`/`Members of the Senedd` and distinguish the legislature from the Government.

### Q4001
Question: `"How long can you use your driving licence in the UK if you have a licence from another country?"`
Raw answer key: `"For up to 12 months"`
Selections:
- [x] `"For up to 12 months"`
- [ ] `"You need a UK driving licence"`
- [ ] `"For as long as it is valid"`
- [ ] `"For up to 2 years"`
Suggestion: Foreign driving licences. `Up to 12 months` is not universal; validity depends on country, licence type, and residency. Suggested correction: specify the relevant licence category and issuing country. | Foreign driving licences. The 12-month rule is not universal. Suggested correction: specify the country category, residency, and licence type.

### Q4012
Question: `"How many verdicts are possible in trials in Scotland?"`
Raw answer key: `"Three: ‘guilty’, ‘not guilty’ or ‘not proven’"`
Selections:
- [ ] `"Two: ‘guilty’ or ‘not guilty’"`
- [x] `"Three: ‘guilty’, ‘not guilty’ or ‘not proven’"`
- [ ] `"Three: ‘guilty’, ‘not guilty’ or ‘on hold’"`
- [ ] `"Two: ‘guilty’ or ‘not proven’"`
Suggestion: Scottish/Welsh verdicts. `based of` should be `based on`; Q3955 also contains an invisible character in the option. Q4012 relies on the obsolete not-proven verdict. Suggested correction: clean the text and update current Scottish verdict law.

### Q4030
Question: `"Who has control over policy and laws governing defence, foreign affairs, immigration, taxation and social security in Northern Ireland?"`
Raw answer key: `"The central UK government"`
Selections:
- [ ] `"The Irish government"`
- [x] `"The central UK government"`
- [ ] `"The Northern Ireland Assembly"`
- [ ] `"The monarch"`
Suggestion: Northern Ireland devolved powers. Planning, social security, and some taxation are not all reserved to the central government; planning is devolved. Suggested correction: use a genuinely reserved matter such as defence, or explicitly describe limited devolved powers.

### Q4031
Question: `"The devolved governments in Scotland, Wales and Northern Ireland cannot control policies and laws governing taxation and social security:"`
Raw answer key: `"True"`
Selections:
- [x] `"True"`
- [ ] `"False"`
Suggestion: Northern Ireland devolved powers. Planning, social security, and some taxation are not all reserved to the central government; planning is devolved. Suggested correction: use a genuinely reserved matter such as defence, or explicitly describe limited devolved powers.

### Q4053
Question: `"What was the name of the European Union when it was first established?"`
Raw answer key: `"European Economic Community"`
Selections:
- [ ] `"European Political Union"`
- [ ] `"Union of European Countries"`
- [x] `"European Economic Community"`
- [ ] `"Europe United"`
Suggestion: EEC and EU. The EEC was the 1957 predecessor; the EU was established in 1993. Suggested correction: distinguish the Treaty of Rome/EEC from the later EU.
