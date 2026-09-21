# Life In The UK Question Bank Errata

Audit date: 2026-09-21.

This audit covers every record in the `questionBank` array in `life-in-the-uk.html` (4,058 records). Each record was reviewed once, in order, for factual accuracy, answer-key correctness, uniqueness of the correct answer, sensible wording, and corrupted or stale text. Question numbers below are one-based array indices.

The HTML page was not changed by this audit. This file lists each affected record individually.

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

## Errata

Each entry puts the exact raw question and stored answer on the first line. The immediately following line is the suggestion.

### Q377
Raw question: "In which year was the death penalty for murder suspended in Great Britain and effectively abolished?"; raw answer: "1965"
Suggestion: Death penalty date. Current key: `1965`. The question conflates the 1965 suspension of the death penalty for murder with its permanent abolition in 1969. Suggested correction: ask when it was suspended and keep `1965`, or ask when it was permanently abolished and use `1969`.

### Q531
Raw question: "True or false: The Prime Minister is the head of state; the Prime Minister is the head of government."; raw answer: "False"
Suggestion: Prime Minister and head of state. The true and false clauses are combined in one statement. Suggested correction: split it, or state that the monarch is head of state and the Prime Minister is head of government.

### Q534
Raw question: "True or false: Great Britain is the island containing England, Scotland and Wales; the UK also includes Scotland."; raw answer: "False"
Suggestion: Great Britain and the UK. The statement says the UK includes Scotland, which is true, so the `False` key is wrong. Suggested correction: replace `Scotland` with `Northern Ireland` and key the corrected statement `True`.

### Q553
Raw question: "True or false: Mutual respect and tolerance of No right to express a belief is a core principle of life in modern Britain."; raw answer: "False"
Suggestion: Mutual respect statement. The question contains the inserted phrase `No right to express a belief`, making it unintelligible. Suggested correction: use `Mutual respect and tolerance of different faiths and beliefs is a core principle of life in modern Britain.`

### Q568
Raw question: "True or false: The Scotland is a Crown Dependency."; raw answer: "False"
Suggestion: Scotland and Crown Dependencies. `The Scotland` is malformed. Suggested correction: `Scotland is not a Crown Dependency.`

### Q654
Raw question: "True or false: The prosecution must prove a criminal case Any suspicion by police."; raw answer: "False"
Suggestion: Criminal burden of proof. The question is malformed as `The prosecution must prove a criminal case Any suspicion by police.` Suggested correction: `The prosecution must prove a criminal case beyond reasonable doubt.` and key `True`.

### Q746
Raw question: "True or false: The Turner Prize takes its name from the British painter J."; raw answer: "True"
Suggestion: Turner Prize. The artist's name is truncated to `J.` Suggested correction: identify the painter as `J. M. W. Turner`.

### Q814
Raw question: "What is the minimum age required to serve on a jury?"; raw answer: "18"
Suggestion: Jury age and selection. The answer is usable, but both explanations state the obsolete eligibility range `18 to 70`. Suggested correction: use the current applicable range, generally `18 to 75`, and say that jurors are selected randomly from the electoral register.

### Q815
Raw question: "How is a jury selected?"; raw answer: "Randomly from the electoral register"
Suggestion: Jury age and selection. The answer is usable, but both explanations state the obsolete eligibility range `18 to 70`. Suggested correction: use the current applicable range, generally `18 to 75`, and say that jurors are selected randomly from the electoral register.

### Q819
Raw question: "By law, which TWO types of media have to give a balanced coverage of all political parties and equal time to rival viewpoints before an election?"; raw answer: ["Television","Radio"]
Suggestion: Political media coverage. The key `Television` and `Radio` is intended, but the wording claims equal time for all parties and viewpoints. Suggested correction: ask which media are subject to statutory due-impartiality rules and avoid claiming blanket equal time.

### Q820
Raw question: "Which of the following territories is a Crown dependency but is NOT part of the UK?"; raw answer: "The Channel Islands"
Suggestion: Channel Islands status. The explanation calls the Channel Islands British Overseas Territories. Suggested correction: identify them as Crown Dependencies linked to the Crown but not part of the UK.

### Q840
Raw question: "Which two of the following religious communities celebrate Diwali?"; raw answer: ["Hindus","Sikhs"]
Suggestion: Diwali communities. Buddhists can celebrate Diwali in some traditions, while Jains are omitted, so the two-answer key is not unique. Suggested correction: ask for all applicable communities or provide unambiguous distractors.

### Q854
Raw question: "Who was supported by clansmen from the Scottish highlands and raised and army in 1745?"; raw answer: "Bonnie Prince Charlie"
Suggestion: Bonnie Prince Charlie. `raised and army` is a typo. Suggested correction: `raised an army`.

### Q876
Raw question: "How often are general elections held in the UK?"; raw answer: "Every 5 years"
Suggestion: General election frequency. Elections are not held exactly every five years. Suggested correction: ask for the maximum normal period between elections and key `Five years`.

### Q881
Raw question: "Who was voted the greatest Briton of all time in 2002?"; raw answer: "Winston Churchill"
Suggestion: Mo Farah. The distractor `Mo Farat` is misspelled. Suggested correction: `Mo Farah`.

### Q891
Raw question: "Racial crime and smoking in public places are examples of:"; raw answer: "Criminal offences"
Suggestion: Criminal offences. Smoking is not criminal in every public place. Suggested correction: specify smoking in prohibited enclosed public places.

### Q896
Raw question: "By law, which TWO types of media have to give a balanced coverage of all political parties and equal time to rival viewpoints before an election?"; raw answer: ["Television","Radio"]
Suggestion: Political media coverage. The key `Television` and `Radio` is intended, but the wording claims equal time for all parties and viewpoints. Suggested correction: ask which media are subject to statutory due-impartiality rules and avoid claiming blanket equal time.

### Q898
Raw question: "Which of the following is not a valid UK coin?"; raw answer: "25p"
Suggestion: UK coin denomination. A commemorative 25p coin has existed, so `not a valid UK coin` is ambiguous. Suggested correction: ask for the standard circulating denomination and key `25p`.

### Q902
Raw question: "Where should you register if you want to become part of a jury?"; raw answer: "The electoral register"
Suggestion: Jury registration. People do not register specifically to join a jury; they are selected from the electoral register. Suggested correction: ask `From which register are prospective jurors selected at random?` and update the age explanation.

### Q932
Raw question: "Scotland and Wales use a system called ‘individual registration’ where all those entitled to vote must complete their own registration form."; raw answer: "False"
Suggestion: Individual electoral registration. The `False` key is outdated: individual registration applies in Scotland and Wales as well as England and Northern Ireland. Suggested correction: key the statement `True` or rewrite it to cover all four nations.

### Q936
Raw question: "Which two political parties formed a coalition in 2010?"; raw answer: ["The Conservative Party","The Liberal Democrats Party"]
Suggestion: Liberal Democrats. `The Liberal Democrats Party` is not the party's name. Suggested correction: use `The Liberal Democrats`.

### Q949
Raw question: "What was the biggest source of employment during the 18th century?"; raw answer: "Manufacturing"
Suggestion: Eighteenth-century employment. Agriculture is omitted and remained a major employment sector; manufacturing's rapid growth belongs to later industrialisation. Suggested correction: add `Agriculture` and key it, or ask which sector grew during the Industrial Revolution.

### Q956
Raw question: "In 1833 the Emancipation Act abolished slavery throughout the British Empire."; raw answer: "True"
Suggestion: Emancipation Act. The Act abolished slavery in most of the British Empire, not throughout without exceptions. Suggested correction: replace `throughout` with `in most of`.

### Q961
Raw question: "What UK landmark was voted as Britain’s favourite view in 2007?"; raw answer: "Lake District"
Suggestion: Favourite view. The 2007 winning view was Wastwater, in the Lake District; the answer is a region rather than the view. Suggested correction: add `Wastwater` as the answer or ask which region contained it.

### Q964
Raw question: "What do you need to do to apply for a National Insurance Number?"; raw answer: "Contact the Department for Work and Pensions (DWP)"
Suggestion: National Insurance number. The current application route is online, and `you employer` is a typo. Suggested correction: use `Apply online through the GOV.UK National Insurance number service` and correct `your employer`.

### Q975
Raw question: "What did Francis Crick discover?"; raw answer: "The structure of the DNA molecule"
Suggestion: Francis Crick. The wording attributes the DNA discovery to Crick alone. Suggested correction: ask what Crick co-discovered with James Watson, while acknowledging the wider scientific contributions.

### Q984
Raw question: "What year were women given the right to vote?"; raw answer: "1918"
Suggestion: Women's voting rights. `What year were women given the right to vote?` implies all women received the vote in 1918. Suggested correction: specify qualifying women aged 30 and over in 1918, or ask when women received the vote on the same terms as men (`1928`).

### Q988
Raw question: "How often are the members of the Welsh government elected?"; raw answer: "Every 4 years"
Suggestion: Welsh elections. Members of the Senedd, not members of the Welsh Government, are elected; the membership explanation is stale. Suggested correction: ask how often Members of the Senedd are elected and remove the outdated membership count.

### Q990
Raw question: "The Man Booker Prize is awarded in which of the following categories?"; raw answer: "Literature"
Suggestion: Booker Prize. `Man Booker Prize` is obsolete terminology and the eligibility explanation is outdated. Suggested correction: use `Booker Prize` and current eligibility wording.

### Q995
Raw question: "£100 is the highest value note in circulation in the UK."; raw answer: "False"
Suggestion: Highest UK banknote. The unqualified `£100 is the highest value note in circulation in the UK` is ambiguous because Scottish and Northern Irish banks issue £100 notes while the Bank of England's highest is £50. Suggested correction: specify `highest Bank of England note` or state the UK-wide distinction.

### Q1007
Raw question: "Who was Admiral Nelson?"; raw answer: "A British officer in charge of the British fleet at the Battle of Trafalgar against the Spanish fleet"
Suggestion: Admiral Nelson. The answer says Trafalgar was against the Spanish fleet only. Suggested correction: say `the combined French and Spanish fleet`.

### Q1010
Raw question: "MPs can only be contacted by post."; raw answer: "False"
Suggestion: Contacting MPs. The explanation refers to UK MEPs holding surgeries, but UK MEPs ceased to exist after Brexit. Suggested correction: remove the obsolete MEP reference.

### Q1026
Raw question: "How many members does the Welsh government have?"; raw answer: "60"
Suggestion: Welsh Government membership. The question confuses the Welsh Government executive with the Senedd legislature and gives the stale membership figure of 60. Suggested correction: ask how many Members the Senedd has and use the current figure of 96 where appropriate.

### Q1038
Raw question: "Who built a wall in the north of England to keep out the Picts (ancestors of the Scottish people)?"; raw answer: "Emperor Hadrian"
Suggestion: Hadrian's Wall and the Picts. The wall was built to secure the Roman frontier, not simply to keep out later Picts, and Picts were not all ancestors of Scottish people. Suggested correction: ask which emperor ordered the wall to defend the northern frontier of Roman Britain.

### Q1050
Raw question: "By law, radio and television coverage of the political parties must be balanced and so equal time has to be given to rival viewpoints."; raw answer: "True"
Suggestion: Broadcast impartiality. The `True` key endorses an equal-time claim that overstates UK broadcasting law. Suggested correction: use due impartiality/due weight wording or key the unqualified statement `False`.

### Q1057
Raw question: "What should you do to make a complaint about the police (choose two answers)?"; raw answer: ["Go to the Police station directly","Write to the Chief Constable of the police force involved"]
Suggestion: Police complaints. The explanation names the obsolete Independent Police Complaints Commission and Police Complaints Commissioner. Suggested correction: use the Independent Office for Police Conduct in England and Wales, the Police Investigations and Review Commissioner in Scotland, and the Police Ombudsman for Northern Ireland.

### Q1060
Raw question: "Who was the architect that rebuilt Saint Paul’s cathedral after the Great Fire in 1666?"; raw answer: "Sir Christopher Wren"
Suggestion: St Paul's Cathedral. The question contains literal backslashes before the apostrophe in `St Paul\\'s`. Suggested correction: replace the corrupted text with `St Paul's`.

### Q1066
Raw question: "Is the BBC controlled by the government?"; raw answer: "No"
Suggestion: BBC funding and control. The explanation calls the BBC wholly state-funded. Suggested correction: describe it as editorially independent and publicly funded mainly through the licence fee, with other commercial income.

### Q1082
Raw question: "You have to be at least 21 years old to serve on a jury."; raw answer: "False"
Suggestion: Jury age. The explanation says eligibility ends at 70. Suggested correction: update the current generally applicable upper age to 75.

### Q1114
Raw question: "How are the members of the Northern Ireland Parliament elected?"; raw answer: "By a system of proportional representation"
Suggestion: Northern Ireland legislature. The question says `Northern Ireland Parliament`. Suggested correction: use `Northern Ireland Assembly`.

### Q1130
Raw question: "Who was elected as British Prime Minister in 1945?"; raw answer: "Clement Attlee"
Suggestion: 1945 Prime Minister. Voters elected MPs/a government, not the Prime Minister directly. Suggested correction: ask who became Prime Minister after Labour won the 1945 general election.

### Q1140
Raw question: "Which film produced in the UK was one of the most commercially successful films of all time and one of the highest-grossing film franchises?"; raw answer: "Harry Potter"
Suggestion: Harry Potter. The question asks which film but describes a franchise. Suggested correction: change `film` to `film franchise`.

### Q1148
Raw question: "Who led a team of scientists to ‘split the atom‘ for the first time?"; raw answer: "Ernest Rutherford"
Suggestion: Splitting the atom. The explanation misleadingly connects Rutherford's team with the Manhattan Project. Suggested correction: distinguish Rutherford's 1917 nuclear experiment from the later Manhattan Project.

### Q1168
Raw question: "Who can apply for the National Citizen Service programme?"; raw answer: "16- and 17-year-olds"
Suggestion: National Citizen Service. The question treats the programme as current even though it concluded on 31 March 2025. Suggested correction: make it explicitly historical or retire the record.

### Q1209
Raw question: "According to the Life in the UK handbook, what are two responsibilities that you will have as a British citizen or permanent resident of the UK?"; raw answer: ["To look after the area in which you live and the environment","To look after yourself and your family"]
Suggestion: Responsibilities question. The option set contains unrelated fragments about noblemen and women in the workforce, indicating cross-record contamination. Suggested correction: use four coherent options and retain the two responsibility answers as the key.

### Q1215
Raw question: "According to the Life in the UK handbook, when were men and women given the right to vote at the age of 21?"; raw answer: "1928"
Suggestion: Women's voting rights. Men already had the vote at 21; 1928 gave women voting rights on the same terms. Suggested correction: ask when women were given the vote at 21, the same as men.

### Q1225
Raw question: "Complete the statement: \"False. The Bill of Rights, _______, confirmed the rights of Parliament and the limits of the king’s power.\""; raw answer: "1689"
Suggestion: Bill of Rights completions. Each stem has a stray `False.` before a true statement. Suggested correction: remove `False. ` from each question and explanation.

### Q1226
Raw question: "Complete the statement: \"False. _______ of Rights, 1689, confirmed the rights of Parliament and the limits of the king’s power.\""; raw answer: "The Bill"
Suggestion: Bill of Rights completions. Each stem has a stray `False.` before a true statement. Suggested correction: remove `False. ` from each question and explanation.

### Q1227
Raw question: "Complete the statement: \"False. The _______ of Rights, 1689, confirmed the rights of Parliament and the limits of the king’s power.\""; raw answer: "Bill"
Suggestion: Bill of Rights completions. Each stem has a stray `False.` before a true statement. Suggested correction: remove `False. ` from each question and explanation.

### Q1244
Raw question: "Which of the following statements is TRUE?"; raw answer: "Anyone who is on the electoral register and is aged 18 to 70 can be asked to serve on a jury."
Suggestion: Jury age. The answer/explanation uses the obsolete upper age of 70. Suggested correction: use the current generally applicable range `18 to 75`.

### Q1245
Raw question: "According to the Life in the UK handbook, what is the minimum age required to serve on a jury?"; raw answer: "18"
Suggestion: Jury age. The answer/explanation uses the obsolete upper age of 70. Suggested correction: use the current generally applicable range `18 to 75`.

### Q1251
Raw question: "Which of the following statements is TRUE?"; raw answer: "By law, radio and television coverage of the political parties must be balanced and so equal time has to be given to..."
Suggestion: Truncated political-media statements. Every option, including the key, is truncated and contains corrupted wording such as `Internet and Internet coverage`. Suggested correction: restore complete options and use due-impartiality wording.

### Q1252
Raw question: "According to the Life in the UK handbook, by law, which TWO types of media have to give a balanced coverage of all political parties and equal time to rival viewpoints before an election?"; raw answer: ["Television","Radio"]
Suggestion: Political media coverage. Radio and television are the intended pair, but `equal time` for all parties/viewpoints is legally overbroad. Suggested correction: ask which media are subject to broadcast due-impartiality rules.

### Q1253
Raw question: "Complete the statement: \"_______ is a British overseas territory linked to the UK, but it is not part of it.\""; raw answer: "The Channel Islands"
Suggestion: Channel Islands status. The questions call the Channel Islands a British Overseas Territory and use incorrect singular agreement. Suggested correction: state that the Channel Islands are Crown Dependencies linked to the UK but not part of it.

### Q1254
Raw question: "Complete the statement: \"The _______ Islands is a British overseas territory linked to the UK, but it is not part of it.\""; raw answer: "Channel"
Suggestion: Channel Islands status. The questions call the Channel Islands a British Overseas Territory and use incorrect singular agreement. Suggested correction: state that the Channel Islands are Crown Dependencies linked to the UK but not part of it.

### Q1255
Raw question: "Complete the statement: \"The Channel _______ is a British overseas territory linked to the UK, but it is not part of it.\""; raw answer: "Islands"
Suggestion: Channel Islands status. The questions call the Channel Islands a British Overseas Territory and use incorrect singular agreement. Suggested correction: state that the Channel Islands are Crown Dependencies linked to the UK but not part of it.

### Q1276
Raw question: "Complete the statement: \"In _______, women over the age of 30 were given voting rights and the right to stand for Parliament, partly in recognition of the contribution women made to the war effort during the First World War.\""; raw answer: "1918"
Suggestion: 1918 franchise. The wording omits the property qualification for women over 30. Suggested correction: say qualifying women aged 30 and over gained the vote in 1918, while equal voting terms came in 1928.

### Q1277
Raw question: "Complete the statement: \"In 1918, women over the age of 30 were given voting rights and the right to stand for Parliament, partly in recognition of the contribution women made to the war effort during the _______.\""; raw answer: "First World War"
Suggestion: 1918 franchise. The wording omits the property qualification for women over 30. Suggested correction: say qualifying women aged 30 and over gained the vote in 1918, while equal voting terms came in 1928.

### Q1278
Raw question: "Complete the statement: \"In 1918, women over the age of 30 were given voting rights and the right to stand for _______, partly in recognition of the contribution women made to the war effort during the First World War.\""; raw answer: "Parliament"
Suggestion: 1918 franchise. The wording omits the property qualification for women over 30. Suggested correction: say qualifying women aged 30 and over gained the vote in 1918, while equal voting terms came in 1928.

### Q1284
Raw question: "Which of the following statements is TRUE?"; raw answer: "The first farmers arrived in Britain 6,000 years ago. The ancestors of these first farmers probably came from..."
Suggestion: Truncated origin statements. All options and the key end in literal `...`, including `probably came from...`. Suggested correction: restore complete alternatives and the full keyed statement.

### Q1288
Raw question: "Complete the statement: \"_______.\""; raw answer: "Winston Churchill"
Suggestion: Winston Churchill fragments. The records are orphaned fragments (`Winston _______`) without a factual predicate. Suggested correction: restore the underlying question and a complete statement about Churchill's wartime leadership.

### Q1289
Raw question: "Complete the statement: \"Winston _______.\""; raw answer: "Churchill"
Suggestion: Winston Churchill fragments. The records are orphaned fragments (`Winston _______`) without a factual predicate. Suggested correction: restore the underlying question and a complete statement about Churchill's wartime leadership.

### Q1294
Raw question: "Complete the statement: \"_______-Saxon kingdoms in England united under King Alfred the Great, who defeated the Vikings.\""; raw answer: "The Anglo"
Suggestion: Anglo-Saxon unification. The wording implies Alfred the Great united all Anglo-Saxon kingdoms. Suggested correction: say the kingdoms were gradually united after Alfred, chiefly under Athelstan, or rewrite the question.

### Q1295
Raw question: "Complete the statement: \"The Anglo-Saxon kingdoms in England united under _______ the Great, who defeated the Vikings.\""; raw answer: "King Alfred"
Suggestion: Anglo-Saxon unification. The wording implies Alfred the Great united all Anglo-Saxon kingdoms. Suggested correction: say the kingdoms were gradually united after Alfred, chiefly under Athelstan, or rewrite the question.

### Q1296
Raw question: "Complete the statement: \"The _______-Saxon kingdoms in England united under King Alfred the Great, who defeated the Vikings.\""; raw answer: "Anglo"
Suggestion: Anglo-Saxon unification. The wording implies Alfred the Great united all Anglo-Saxon kingdoms. Suggested correction: say the kingdoms were gradually united after Alfred, chiefly under Athelstan, or rewrite the question.

### Q1348
Raw question: "Complete the statement: \"In _______ there was another attempt to put a Stuart king back on the throne in place of George I’s son, George II. Charles Edward Stuart (Bonnie Prince Charlie), the grandson of James II, landed in Scotland. He was supported by clansmen from the Scottish highlands and raised and army.\""; raw answer: "1745"
Suggestion: Bonnie Prince Charlie. Every variant says `raised and army`. Suggested correction: `raised an army`.

### Q1349
Raw question: "Complete the statement: \"In 1745 there was another attempt to put a Stuart king back on the throne in place of George I’s son, George II. _______ (Bonnie Prince Charlie), the grandson of James II, landed in Scotland. He was supported by clansmen from the Scottish highlands and raised and army.\""; raw answer: "Charles Edward Stuart"
Suggestion: Bonnie Prince Charlie. Every variant says `raised and army`. Suggested correction: `raised an army`.

### Q1350
Raw question: "Complete the statement: \"In 1745 there was another attempt to put a Stuart king back on the throne in place of George I’s son, George II. Charles Edward Stuart (_______), the grandson of James II, landed in Scotland. He was supported by clansmen from the Scottish highlands and raised and army.\""; raw answer: "Bonnie Prince Charlie"
Suggestion: Bonnie Prince Charlie. Every variant says `raised and army`. Suggested correction: `raised an army`.

### Q1351
Raw question: "Which of the following statements is TRUE?"; raw answer: "If you think someone is trying to persuade you to join an extremist or terrorist cause, you should notify your local..."
Suggestion: Truncated extremist-cause options. The key and distractors end in `The Home Offic...` and `your local...`. Suggested correction: restore complete options, including `notify your local police force`.

### Q1353
Raw question: "Complete the statement: \"False. _______ programme, which gives 16- and 17-year-olds the opportunity to enjoy outdoor activities, develop their skills and take part in a community project. Therefore, it is optional.\""; raw answer: "The National Citizen Service"
Suggestion: National Citizen Service. The present-tense programme description is stale because the programme ended on 31 March 2025. Suggested correction: make the wording historical or replace it with a current programme.

### Q1354
Raw question: "Complete the statement: \"False. The _______ Citizen Service programme, which gives 16- and 17-year-olds the opportunity to enjoy outdoor activities, develop their skills and take part in a community project. Therefore, it is optional.\""; raw answer: "National"
Suggestion: National Citizen Service. The present-tense programme description is stale because the programme ended on 31 March 2025. Suggested correction: make the wording historical or replace it with a current programme.

### Q1355
Raw question: "Complete the statement: \"False. The National _______ Service programme, which gives 16- and 17-year-olds the opportunity to enjoy outdoor activities, develop their skills and take part in a community project. Therefore, it is optional.\""; raw answer: "Citizen"
Suggestion: National Citizen Service. The present-tense programme description is stale because the programme ended on 31 March 2025. Suggested correction: make the wording historical or replace it with a current programme.

### Q1359
Raw question: "Complete the statement: \"Britain and _______ developed the world’s only supersonic commercial airliner, Concorde.\""; raw answer: "France"
Suggestion: Concorde. The records call Concorde the world's only supersonic commercial airliner; the Soviet Tu-144 also entered commercial service. Suggested correction: call Concorde one of two supersonic commercial airliners or specify the first scheduled service.

### Q1360
Raw question: "Which of the following statements is TRUE?"; raw answer: "Britain and France developed the world’s only supersonic commercial airliner, Concorde."
Suggestion: Concorde. The records call Concorde the world's only supersonic commercial airliner; the Soviet Tu-144 also entered commercial service. Suggested correction: call Concorde one of two supersonic commercial airliners or specify the first scheduled service.

### Q1361
Raw question: "According to the Life in the UK handbook, which two countries developed the Concorde, the world’s only supersonic commercial airliner?"; raw answer: ["Britain","France"]
Suggestion: Concorde. The records call Concorde the world's only supersonic commercial airliner; the Soviet Tu-144 also entered commercial service. Suggested correction: call Concorde one of two supersonic commercial airliners or specify the first scheduled service.

### Q1392
Raw question: "Which of the following statements is TRUE?"; raw answer: "During the ‘Great Depression’ in the 1930s the traditional heavy industries such as shipbuilding were badly affected."
Suggestion: Truncated Great Depression option. One option ends `Housing construction were badly affe...`. Suggested correction: restore a complete distractor and retain the complete shipbuilding key.

### Q1462
Raw question: "Which of the following statements is TRUE?"; raw answer: "By law, radio and television coverage of the political parties must be balanced and so equal time has to be given to..."
Suggestion: Truncated broadcast statements. Options/key contain literal truncation and the equal-time claim is inaccurate. Suggested correction: restore all text and use due-impartiality wording.

### Q1463
Raw question: "According to the Life in the UK handbook, by law, which TWO types of media have to give a balanced coverage of all political parties and equal time to rival viewpoints before an election?"; raw answer: ["Television","Radio"]
Suggestion: Political media coverage. Radio and television are the intended pair, but `equal time` for all parties/viewpoints is legally overbroad. Suggested correction: ask which media are subject to broadcast due-impartiality rules.

### Q1477
Raw question: "According to the Life in the UK handbook, where should you register if you want to become part of a jury?"; raw answer: "The electoral register"
Suggestion: Jury register. The question asks where to register to become part of a jury and gives an outdated `18 to 70` explanation. Suggested correction: ask which register is used to select jurors and use the current age range.

### Q1487
Raw question: "Complete the statement: \"The correct answer is _______ II.\""; raw answer: "Charles"
Suggestion: Charles II fragments. The records are self-referential (`The correct answer is...`) and lack the underlying question. Suggested correction: restore the question about the king defeated by Cromwell who hid in an oak tree; key `Charles II`.

### Q1488
Raw question: "Which of the following statements is TRUE?"; raw answer: "The correct answer is Charles II."
Suggestion: Charles II fragments. The records are self-referential (`The correct answer is...`) and lack the underlying question. Suggested correction: restore the question about the king defeated by Cromwell who hid in an oak tree; key `Charles II`.

### Q1493
Raw question: "Complete the statement: \"False. Anyone can make a complaint about the police by going to a police station and writing to the _______ of the police force involved. Complaints can also be made to an independent body: the Independent Police Complaints Commission in England and Wales, the Police Complaints Commissioner for Scotland or the Police Ombudsman for Northern Ireland.\""; raw answer: "Chief Constable"
Suggestion: Police complaint bodies. The Independent Police Complaints Commission and Police Complaints Commissioner are obsolete names. Suggested correction: use the Independent Office for Police Conduct and Police Investigations and Review Commissioner, with current wording.

### Q1494
Raw question: "Complete the statement: \"False. Anyone can make a complaint about the police by going to a police station and writing to the Chief Constable of the police force involved. Complaints can also be made to an independent body: the _______ in England and Wales, the Police Complaints Commissioner for Scotland or the Police Ombudsman for Northern Ireland.\""; raw answer: "Independent Police Complaints Commission"
Suggestion: Police complaint bodies. The Independent Police Complaints Commission and Police Complaints Commissioner are obsolete names. Suggested correction: use the Independent Office for Police Conduct and Police Investigations and Review Commissioner, with current wording.

### Q1495
Raw question: "Complete the statement: \"False. Anyone can make a complaint about the police by going to a police station and writing to the Chief Constable of the police force involved. Complaints can also be made to an independent body: the Independent Police Complaints Commission in England and Wales, the _______ for Scotland or the Police Ombudsman for Northern Ireland.\""; raw answer: "Police Complaints Commissioner"
Suggestion: Police complaint bodies. The Independent Police Complaints Commission and Police Complaints Commissioner are obsolete names. Suggested correction: use the Independent Office for Police Conduct and Police Investigations and Review Commissioner, with current wording.

### Q1500
Raw question: "Which of the following statements is TRUE?"; raw answer: "During the 18th century, new ideas about politics, philosophy and science were developed. This is often called ‘the..."
Suggestion: Truncated Enlightenment statements. Every option and the key ends in literal truncation such as `the...`. Suggested correction: restore the complete key ending `the Enlightenment` and complete distractors.

### Q1533
Raw question: "Which of the following statements is TRUE?"; raw answer: "The correct answer is William the Conqueror."
Suggestion: Self-referential true statements. The options say `The correct answer is...` instead of presenting facts. Suggested correction: restore the underlying substantive question and factual alternatives.

### Q1536
Raw question: "Which of the following statements is TRUE?"; raw answer: "National Parks are areas of protected countryside that everyone can visit, and where people live, work and look after..."
Suggestion: National Parks. The keyed option is truncated and the record has only three options. Suggested correction: restore the complete answer about protected countryside.

### Q1537
Raw question: "Complete the statement: \"False. There is no established Church in Wales or _______.\""; raw answer: "Northern Ireland"
Suggestion: Established Church completions. Each true statement is prefixed with `False.`. Suggested correction: remove the prefix or convert the records into true/false questions.

### Q1538
Raw question: "Complete the statement: \"False. There is no established _______ in Wales or Northern Ireland.\""; raw answer: "Church"
Suggestion: Established Church completions. Each true statement is prefixed with `False.`. Suggested correction: remove the prefix or convert the records into true/false questions.

### Q1539
Raw question: "Complete the statement: \"False. There is no established Church in _______ or Northern Ireland.\""; raw answer: "Wales"
Suggestion: Established Church completions. Each true statement is prefixed with `False.`. Suggested correction: remove the prefix or convert the records into true/false questions.

### Q1547
Raw question: "Which of the following statements is TRUE?"; raw answer: "The correct answer is Charles I."
Suggestion: Self-referential true statements. The options say `The correct answer is...` instead of presenting facts. Suggested correction: restore the underlying substantive question and factual alternatives.

### Q1558
Raw question: "Complete the statement: \"False. _______ uses a system called ‘individual registration’ and all those entitled to vote must complete their own registration form.\""; raw answer: "Northern Ireland"
Suggestion: Individual registration completions. The true statement is prefixed with `False.`. Suggested correction: remove the prefix.

### Q1559
Raw question: "Complete the statement: \"False. Northern _______ uses a system called ‘individual registration’ and all those entitled to vote must complete their own registration form.\""; raw answer: "Ireland"
Suggestion: Individual registration completions. The true statement is prefixed with `False.`. Suggested correction: remove the prefix.

### Q1560
Raw question: "According to the Life in the UK handbook, scotland and Wales use a system called ‘individual registration’ where all those entitled to vote must complete their own registration form.?"; raw answer: "False"
Suggestion: Individual registration. The statement that Scotland and Wales use individual registration is keyed `False`, but is true under current facts. Suggested correction: add `True` and key it, or date-label the old wording.

### Q1574
Raw question: "Which of the following statements is TRUE?"; raw answer: "The correct answer is Henry VIII."
Suggestion: Self-referential true statements. The options say `The correct answer is...` instead of presenting facts. Suggested correction: restore the underlying substantive question and factual alternatives.

### Q1585
Raw question: "Complete the statement: \"_______ and the Bayeux Tapestry.\""; raw answer: "The Domesday Book"
Suggestion: Domesday Book and Bayeux Tapestry. These are isolated noun fragments with no complete proposition. Suggested correction: ask which two sources provide evidence about the Norman Conquest.

### Q1586
Raw question: "Complete the statement: \"The Domesday Book and the _______.\""; raw answer: "Bayeux Tapestry"
Suggestion: Domesday Book and Bayeux Tapestry. These are isolated noun fragments with no complete proposition. Suggested correction: ask which two sources provide evidence about the Norman Conquest.

### Q1587
Raw question: "Complete the statement: \"The _______ Book and the Bayeux Tapestry.\""; raw answer: "Domesday"
Suggestion: Domesday Book and Bayeux Tapestry. These are isolated noun fragments with no complete proposition. Suggested correction: ask which two sources provide evidence about the Norman Conquest.

### Q1597
Raw question: "Complete the statement: \"As a _______ citizen you should respect and obey the law and look after the area in which you live and the environment are the correct answers.\""; raw answer: "British"
Suggestion: British citizen completion. The completed text contains the orphaned phrase `are the correct answers`. Suggested correction: ask which two responsibilities a British citizen should have.

### Q1598
Raw question: "Which of the following statements is TRUE?"; raw answer: "As a British citizen you should respect and obey the law and look after the area in which you live and the environment..."
Suggestion: British citizen statements. The keyed option and a distractor are truncated. Suggested correction: restore complete statements, especially the keyed option ending `the environment.`

### Q1599
Raw question: "According to the Life in the UK handbook, as a British citizen, you should:?"; raw answer: ["Respect and obey the law","Look after the area in which you live and the environment"]
Suggestion: British citizen responsibilities. The key contains two answers but the question does not say two answers are required. Suggested correction: explicitly ask for `Which TWO responsibilities...`.

### Q1603
Raw question: "Complete the statement: \"False. The Bill of Rights, _______, confirmed the rights of Parliament and the limits of the king’s power.\""; raw answer: "1689"
Suggestion: Bill of Rights completions. Each true statement is prefixed with `False.`. Suggested correction: remove the prefix.

### Q1604
Raw question: "Complete the statement: \"False. _______ of Rights, 1689, confirmed the rights of Parliament and the limits of the king’s power.\""; raw answer: "The Bill"
Suggestion: Bill of Rights completions. Each true statement is prefixed with `False.`. Suggested correction: remove the prefix.

### Q1605
Raw question: "Complete the statement: \"False. The _______ of Rights, 1689, confirmed the rights of Parliament and the limits of the king’s power.\""; raw answer: "Bill"
Suggestion: Bill of Rights completions. Each true statement is prefixed with `False.`. Suggested correction: remove the prefix.

### Q1615
Raw question: "Which of the following statements is TRUE?"; raw answer: "The correct answer is the MacDonalds of Glencoe."
Suggestion: Self-referential true statements. The options say `The correct answer is...` instead of presenting facts. Suggested correction: restore the underlying substantive question and factual alternatives.

### Q1624
Raw question: "According to the Life in the UK handbook, in 1833 the Emancipation Act abolished slavery throughout the British Empire.?"; raw answer: "True"
Suggestion: Slavery Abolition Act. The statement says the 1833 Act abolished slavery throughout the Empire; it applied to most colonies and took effect in 1834. Suggested correction: qualify the scope/date and add a valid true/false choice.

### Q1628
Raw question: "Complete the statement: \"False. _______ are a British overseas territory. They are also linked to the UK but are not part of it.\""; raw answer: "The Falkland Islands"
Suggestion: British Overseas Territories completions. Each true statement is prefixed with `False.`. Suggested correction: remove the prefix.

### Q1629
Raw question: "Complete the statement: \"False. The _______ Islands are a British overseas territory. They are also linked to the UK but are not part of it.\""; raw answer: "Falkland"
Suggestion: British Overseas Territories completions. Each true statement is prefixed with `False.`. Suggested correction: remove the prefix.

### Q1630
Raw question: "Complete the statement: \"False. The Falkland _______ are a British overseas territory. They are also linked to the UK but are not part of it.\""; raw answer: "Islands"
Suggestion: British Overseas Territories completions. Each true statement is prefixed with `False.`. Suggested correction: remove the prefix.

### Q1631
Raw question: "Complete the statement: \"_______ of Marston Moor and Naseby.\""; raw answer: "The Battles"
Suggestion: Civil War battles. The records are incomplete noun phrases without a factual proposition. Suggested correction: ask which two battles were fought during the English Civil War.

### Q1632
Raw question: "Complete the statement: \"The Battles of _______ and Naseby.\""; raw answer: "Marston Moor"
Suggestion: Civil War battles. The records are incomplete noun phrases without a factual proposition. Suggested correction: ask which two battles were fought during the English Civil War.

### Q1633
Raw question: "Complete the statement: \"The _______ of Marston Moor and Naseby.\""; raw answer: "Battles"
Suggestion: Civil War battles. The records are incomplete noun phrases without a factual proposition. Suggested correction: ask which two battles were fought during the English Civil War.

### Q1641
Raw question: "Complete the statement: \"The correct answer is the _______.\""; raw answer: "Reformation"
Suggestion: Reformation fragment. `The correct answer is the _______.` has no context. Suggested correction: restore the underlying question, such as the movement against the authority of the Pope.

### Q1642
Raw question: "Which of the following statements is TRUE?"; raw answer: "The correct answer is the Reformation."
Suggestion: Self-referential true statements. The options say `The correct answer is...` instead of presenting facts. Suggested correction: restore the underlying substantive question and factual alternatives.

### Q1665
Raw question: "Complete the statement: \"False. Anyone can make a complaint about the police by going to a police station and writing to the _______ of the police force involved. Complaints can also be made to an independent body: the Independent Police Complaints Commission in England and Wales, the Police Complaints Commissioner for Scotland or the Police Ombudsman for Northern Ireland.\""; raw answer: "Chief Constable"
Suggestion: Police complaints. The true statement is prefixed with `False.`, and the named bodies are obsolete. Suggested correction: remove the prefix and use current England/Wales, Scotland, and Northern Ireland complaint bodies.

### Q1666
Raw question: "Complete the statement: \"False. Anyone can make a complaint about the police by going to a police station and writing to the Chief Constable of the police force involved. Complaints can also be made to an independent body: the _______ in England and Wales, the Police Complaints Commissioner for Scotland or the Police Ombudsman for Northern Ireland.\""; raw answer: "Independent Police Complaints Commission"
Suggestion: Police complaints. The true statement is prefixed with `False.`, and the named bodies are obsolete. Suggested correction: remove the prefix and use current England/Wales, Scotland, and Northern Ireland complaint bodies.

### Q1667
Raw question: "Complete the statement: \"False. Anyone can make a complaint about the police by going to a police station and writing to the Chief Constable of the police force involved. Complaints can also be made to an independent body: the Independent Police Complaints Commission in England and Wales, the _______ for Scotland or the Police Ombudsman for Northern Ireland.\""; raw answer: "Police Complaints Commissioner"
Suggestion: Police complaints. The true statement is prefixed with `False.`, and the named bodies are obsolete. Suggested correction: remove the prefix and use current England/Wales, Scotland, and Northern Ireland complaint bodies.

### Q1676
Raw question: "Complete the statement: \"_______ discovered the structure of the DNA molecule.\""; raw answer: "Francis Crick"
Suggestion: DNA discovery. The questions attribute discovery of DNA structure to Francis Crick alone. Suggested correction: say Crick co-discovered it with James Watson while acknowledging the wider contributions.

### Q1677
Raw question: "Complete the statement: \"Francis _______ discovered the structure of the DNA molecule.\""; raw answer: "Crick"
Suggestion: DNA discovery. The questions attribute discovery of DNA structure to Francis Crick alone. Suggested correction: say Crick co-discovered it with James Watson while acknowledging the wider contributions.

### Q1678
Raw question: "Which of the following statements is TRUE?"; raw answer: "Francis Crick discovered the structure of the DNA molecule."
Suggestion: DNA discovery. The questions attribute discovery of DNA structure to Francis Crick alone. Suggested correction: say Crick co-discovered it with James Watson while acknowledging the wider contributions.

### Q1679
Raw question: "According to the Life in the UK handbook, northern Ireland and Scotland have their own banknotes, which are valid everywhere in the UK.?"; raw answer: "True"
Suggestion: Scottish and Northern Irish banknotes. The statement omits that these notes are not legal tender everywhere and may be refused. Suggested correction: say they are valid currency throughout the UK but are not legal tender everywhere.

### Q1696
Raw question: "Complete the statement: \"In _______, women over the age of 30 were given voting rights and the right to stand for Parliament, partly in recognition of the contribution women made to the war effort during the First World War.\""; raw answer: "1918"
Suggestion: 1918 women's rights. The wording omits property qualifications and conflates voting rights with the separate right to stand for Parliament. Suggested correction: state the qualifying 1918 franchise and distinguish it from the 1928 equal franchise.

### Q1697
Raw question: "Complete the statement: \"In 1918, women over the age of 30 were given voting rights and the right to stand for Parliament, partly in recognition of the contribution women made to the war effort during the _______.\""; raw answer: "First World War"
Suggestion: 1918 women's rights. The wording omits property qualifications and conflates voting rights with the separate right to stand for Parliament. Suggested correction: state the qualifying 1918 franchise and distinguish it from the 1928 equal franchise.

### Q1698
Raw question: "Complete the statement: \"In 1918, women over the age of 30 were given voting rights and the right to stand for _______, partly in recognition of the contribution women made to the war effort during the First World War.\""; raw answer: "Parliament"
Suggestion: 1918 women's rights. The wording omits property qualifications and conflates voting rights with the separate right to stand for Parliament. Suggested correction: state the qualifying 1918 franchise and distinguish it from the 1928 equal franchise.

### Q1708
Raw question: "Complete the statement: \"There are 60 members of the _______ government or members of the Senedd (SMs) and elections are held every four years using a form of proportional representation.\""; raw answer: "Welsh"
Suggestion: Senedd membership and elections. The records confuse the Welsh Government with the Senedd, use `SMs`, give 60 members, and say elections occur every four years. Suggested correction: refer to the Senedd and `MSs`, update the membership/election details, and remove the executive/legislature confusion.

### Q1709
Raw question: "Complete the statement: \"There are 60 members of the Welsh government or members of the _______ (SMs) and elections are held every four years using a form of proportional representation.\""; raw answer: "Senedd"
Suggestion: Senedd membership and elections. The records confuse the Welsh Government with the Senedd, use `SMs`, give 60 members, and say elections occur every four years. Suggested correction: refer to the Senedd and `MSs`, update the membership/election details, and remove the executive/legislature confusion.

### Q1710
Raw question: "Complete the statement: \"There are 60 members of the Welsh government or members of the Senedd (SMs) and elections are held every _______ years using a form of proportional representation.\""; raw answer: "four"
Suggestion: Senedd membership and elections. The records confuse the Welsh Government with the Senedd, use `SMs`, give 60 members, and say elections occur every four years. Suggested correction: refer to the Senedd and `MSs`, update the membership/election details, and remove the executive/legislature confusion.

### Q1714
Raw question: "Complete the statement: \"The Man Booker Prize for Fiction is awarded annually for the best fiction novel (literature) written by an author from the Commonwealth, Ireland or Zimbabwe. It has been awarded since _______. Past winners include Ian McEwan, Hilary Mantel and Julian Barnes.\""; raw answer: "1968"
Suggestion: Booker Prize history. The records use `Man Booker Prize` and say it was awarded since 1968; the first award was in 1969 for a 1968 publication. Suggested correction: use `Booker Prize` and specify the first award/date accurately.

### Q1715
Raw question: "Complete the statement: \"_______ for Fiction is awarded annually for the best fiction novel (literature) written by an author from the Commonwealth, Ireland or Zimbabwe. It has been awarded since 1968. Past winners include Ian McEwan, Hilary Mantel and Julian Barnes.\""; raw answer: "The Man Booker Prize"
Suggestion: Booker Prize history. The records use `Man Booker Prize` and say it was awarded since 1968; the first award was in 1969 for a 1968 publication. Suggested correction: use `Booker Prize` and specify the first award/date accurately.

### Q1716
Raw question: "Complete the statement: \"The Man Booker Prize for Fiction is awarded annually for the best fiction novel (literature) written by an author from the Commonwealth, Ireland or Zimbabwe. It has been awarded since 1968. Past winners include Ian McEwan, _______ and Julian Barnes.\""; raw answer: "Hilary Mantel"
Suggestion: Booker Prize history. The records use `Man Booker Prize` and say it was awarded since 1968; the first award was in 1969 for a 1968 publication. Suggested correction: use `Booker Prize` and specify the first award/date accurately.

### Q1726
Raw question: "According to the Life in the UK handbook, £100 is the highest value note in circulation in the UK.?"; raw answer: "False"
Suggestion: Highest-value note. The options contain no true answer for the unqualified UK-wide wording because Scottish and Northern Irish banks issue £100 notes. Suggested correction: add `True`, or ask specifically about Bank of England notes, whose highest denomination is £50.

### Q1742
Raw question: "Complete the statement: \"_______.\""; raw answer: "The Boer War"
Suggestion: Boer War fragments. The records are incomplete statements such as `The _______ War.` Suggested correction: ask which war took place in South Africa from 1899 to 1902.

### Q1743
Raw question: "Complete the statement: \"The _______ War.\""; raw answer: "Boer"
Suggestion: Boer War fragments. The records are incomplete statements such as `The _______ War.` Suggested correction: ask which war took place in South Africa from 1899 to 1902.

### Q1745
Raw question: "Complete the statement: \"This statement is _______.\""; raw answer: "True"
Suggestion: Empty true/false statement. The question only says `This statement is _______.` with no proposition. Suggested correction: restore the missing statement or delete the record.

### Q1754
Raw question: "Complete the statement: \"_______ was in charge of the British fleet at the Battle of Trafalgar against the Spanish fleet and was killed in the battle.\""; raw answer: "Admiral Nelson"
Suggestion: Battle of Trafalgar. The records say Nelson fought the Spanish fleet only. Suggested correction: say the combined French and Spanish fleet.

### Q1755
Raw question: "Complete the statement: \"Admiral _______ was in charge of the British fleet at the Battle of Trafalgar against the Spanish fleet and was killed in the battle.\""; raw answer: "Nelson"
Suggestion: Battle of Trafalgar. The records say Nelson fought the Spanish fleet only. Suggested correction: say the combined French and Spanish fleet.

### Q1756
Raw question: "Complete the statement: \"Admiral Nelson was in charge of the _______ fleet at the Battle of Trafalgar against the Spanish fleet and was killed in the battle.\""; raw answer: "British"
Suggestion: Battle of Trafalgar. The records say Nelson fought the Spanish fleet only. Suggested correction: say the combined French and Spanish fleet.

### Q1761
Raw question: "Complete the statement: \"False. You can contact MPs by letter or telephone at their constituency office, or at their office in the _______ of Commons. In addition, many MPs, Assembly members, MSPs and MEPs hold regular local ‘surgeries’, where constituents can go in person to talk about issues that are of concern to them.\""; raw answer: "House"
Suggestion: MPs and surgeries. The true statement is prefixed with `False.` and refers to UK MEPs, which no longer exist. Suggested correction: remove the prefix and use current representatives.

### Q1762
Raw question: "Complete the statement: \"False. You can contact MPs by letter or telephone at their constituency office, or at their office in the House of _______. In addition, many MPs, Assembly members, MSPs and MEPs hold regular local ‘surgeries’, where constituents can go in person to talk about issues that are of concern to them.\""; raw answer: "Commons"
Suggestion: MPs and surgeries. The true statement is prefixed with `False.` and refers to UK MEPs, which no longer exist. Suggested correction: remove the prefix and use current representatives.

### Q1786
Raw question: "Complete the statement: \"False. There is no established Church in Wales or _______.\""; raw answer: "Northern Ireland"
Suggestion: Established Church completions. Each true statement is prefixed with `False.`. Suggested correction: remove the prefix.

### Q1787
Raw question: "Complete the statement: \"False. There is no established _______ in Wales or Northern Ireland.\""; raw answer: "Church"
Suggestion: Established Church completions. Each true statement is prefixed with `False.`. Suggested correction: remove the prefix.

### Q1788
Raw question: "Complete the statement: \"False. There is no established Church in _______ or Northern Ireland.\""; raw answer: "Wales"
Suggestion: Established Church completions. Each true statement is prefixed with `False.`. Suggested correction: remove the prefix.

### Q1795
Raw question: "Which of the following statements is TRUE?"; raw answer: "There are public holidays each year called bank holidays, when banks and many other businesses are closed for the day."
Suggestion: Bank-holiday true statement. A distractor is truncated with `...da`. Suggested correction: restore the full option.

### Q1797
Raw question: "Complete the statement: \"In _______, women over the age of 30 were given voting rights and the right to stand for Parliament, partly in recognition of the contribution women made to the war effort during the First World War.\""; raw answer: "1918"
Suggestion: 1918 women's rights. The wording omits property qualifications and conflates voting rights with the separate right to stand for Parliament. Suggested correction: state the qualifying 1918 franchise and distinguish it from the 1928 equal franchise.

### Q1798
Raw question: "Complete the statement: \"In 1918, women over the age of 30 were given voting rights and the right to stand for Parliament, partly in recognition of the contribution women made to the war effort during the _______.\""; raw answer: "First World War"
Suggestion: 1918 women's rights. The wording omits property qualifications and conflates voting rights with the separate right to stand for Parliament. Suggested correction: state the qualifying 1918 franchise and distinguish it from the 1928 equal franchise.

### Q1799
Raw question: "Complete the statement: \"In 1918, women over the age of 30 were given voting rights and the right to stand for _______, partly in recognition of the contribution women made to the war effort during the First World War.\""; raw answer: "Parliament"
Suggestion: 1918 women's rights. The wording omits property qualifications and conflates voting rights with the separate right to stand for Parliament. Suggested correction: state the qualifying 1918 franchise and distinguish it from the 1928 equal franchise.

### Q1804
Raw question: "Complete the statement: \"There are 60 members of the _______ government or members of the Senedd (SMs) and elections are held every four years using a form of proportional representation.\""; raw answer: "Welsh"
Suggestion: Senedd membership and elections. The records confuse the Welsh Government with the Senedd, use `SMs`, give 60 members, and say elections occur every four years. Suggested correction: refer to the Senedd and `MSs`, update the membership/election details, and remove the executive/legislature confusion.

### Q1805
Raw question: "Complete the statement: \"There are 60 members of the Welsh government or members of the _______ (SMs) and elections are held every four years using a form of proportional representation.\""; raw answer: "Senedd"
Suggestion: Senedd membership and elections. The records confuse the Welsh Government with the Senedd, use `SMs`, give 60 members, and say elections occur every four years. Suggested correction: refer to the Senedd and `MSs`, update the membership/election details, and remove the executive/legislature confusion.

### Q1806
Raw question: "Complete the statement: \"There are 60 members of the Welsh government or members of the Senedd (SMs) and elections are held every _______ years using a form of proportional representation.\""; raw answer: "four"
Suggestion: Senedd membership and elections. The records confuse the Welsh Government with the Senedd, use `SMs`, give 60 members, and say elections occur every four years. Suggested correction: refer to the Senedd and `MSs`, update the membership/election details, and remove the executive/legislature confusion.

### Q1807
Raw question: "Complete the statement: \"False. Members of the public are not allowed in _______, and the name or photographs of the accused young person cannot be published in newspapers or used by the media.\""; raw answer: "Youth Courts"
Suggestion: Youth Courts. The true statement that members of the public are not generally admitted is prefixed with `False.`. Suggested correction: remove the prefix.

### Q1808
Raw question: "Complete the statement: \"False. Members of the public are not allowed in _______ Courts, and the name or photographs of the accused young person cannot be published in newspapers or used by the media.\""; raw answer: "Youth"
Suggestion: Youth Courts. The true statement that members of the public are not generally admitted is prefixed with `False.`. Suggested correction: remove the prefix.

### Q1809
Raw question: "Complete the statement: \"False. Members of the public are not allowed in Youth _______, and the name or photographs of the accused young person cannot be published in newspapers or used by the media.\""; raw answer: "Courts"
Suggestion: Youth Courts. The true statement that members of the public are not generally admitted is prefixed with `False.`. Suggested correction: remove the prefix.

### Q1827
Raw question: "Complete the statement: \"Emmeline Pankhurst she set up the women’s Franchise League in _______, which fought to get the vote in local elections for married women. In 1903 she helped found the Women’s Social and Political Union (WSPU). This was the first group whose members were called ‘suffragettes’. The group used civil disobedience as part of their protest to gain the vote for women. In 1918, women over the age of 30 were given voting rights and the right to stand for Parliament, partly in recognition of the contribution women made to the war effort during the First World War.\""; raw answer: "1889"
Suggestion: Emmeline Pankhurst. The text contains the duplicated subject `Emmeline Pankhurst she`. Suggested correction: use `Emmeline Pankhurst set up...`.

### Q1828
Raw question: "Complete the statement: \"Emmeline Pankhurst she set up the women’s Franchise League in 1889, which fought to get the vote in local elections for married women. In _______ she helped found the Women’s Social and Political Union (WSPU). This was the first group whose members were called ‘suffragettes’. The group used civil disobedience as part of their protest to gain the vote for women. In 1918, women over the age of 30 were given voting rights and the right to stand for Parliament, partly in recognition of the contribution women made to the war effort during the First World War.\""; raw answer: "1903"
Suggestion: Emmeline Pankhurst. The text contains the duplicated subject `Emmeline Pankhurst she`. Suggested correction: use `Emmeline Pankhurst set up...`.

### Q1829
Raw question: "Complete the statement: \"Emmeline Pankhurst she set up the women’s Franchise League in 1889, which fought to get the vote in local elections for married women. In 1903 she helped found the Women’s Social and Political Union (WSPU). This was the first group whose members were called ‘suffragettes’. The group used civil disobedience as part of their protest to gain the vote for women. In _______, women over the age of 30 were given voting rights and the right to stand for Parliament, partly in recognition of the contribution women made to the war effort during the First World War.\""; raw answer: "1918"
Suggestion: Emmeline Pankhurst. The text contains the duplicated subject `Emmeline Pankhurst she`. Suggested correction: use `Emmeline Pankhurst set up...`.

### Q1833
Raw question: "Complete the statement: \"Newton‘s most famous published work was _______ (‘Mathematical Principle of Natural Philosophy’), which showed how gravity applied to the whole universe.\""; raw answer: "Philosophiae Naturalis Principia Mathematica"
Suggestion: Principia translation. The title is rendered as `Mathematical Principle`; the accepted translation is `Mathematical Principles of Natural Philosophy`. Suggested correction: use the plural in the questions, options, keys, and explanations.

### Q1834
Raw question: "Complete the statement: \"Newton‘s most famous published work was Philosophiae Naturalis Principia Mathematica (‘_______ of Natural Philosophy’), which showed how gravity applied to the whole universe.\""; raw answer: "Mathematical Principle"
Suggestion: Principia translation. The title is rendered as `Mathematical Principle`; the accepted translation is `Mathematical Principles of Natural Philosophy`. Suggested correction: use the plural in the questions, options, keys, and explanations.

### Q1835
Raw question: "Complete the statement: \"Newton‘s most famous published work was Philosophiae Naturalis Principia Mathematica (‘Mathematical Principle of _______’), which showed how gravity applied to the whole universe.\""; raw answer: "Natural Philosophy"
Suggestion: Principia translation. The title is rendered as `Mathematical Principle`; the accepted translation is `Mathematical Principles of Natural Philosophy`. Suggested correction: use the plural in the questions, options, keys, and explanations.

### Q1836
Raw question: "Complete the statement: \"The World War I ended in _______.\""; raw answer: "1918"
Suggestion: World War I. The generated text produces `The World War I ended...`. Suggested correction: use `World War I ended in 1918` or `The _______ War ended in 1918`.

### Q1837
Raw question: "Complete the statement: \"_______ I ended in 1918.\""; raw answer: "The World War"
Suggestion: World War I. The generated text produces `The World War I ended...`. Suggested correction: use `World War I ended in 1918` or `The _______ War ended in 1918`.

### Q1838
Raw question: "Complete the statement: \"The _______ War I ended in 1918.\""; raw answer: "World"
Suggestion: World War I. The generated text produces `The World War I ended...`. Suggested correction: use `World War I ended in 1918` or `The _______ War ended in 1918`.

### Q1839
Raw question: "Complete the statement: \"_______ built a wall in the north of England to keep out the Picts (ancestors of the Scottish people).\""; raw answer: "The Emperor Hadrian"
Suggestion: Hadrian's Wall. The records say it was built to keep out Picts and call them ancestors of Scottish people. Suggested correction: describe it as marking and defending the northern frontier of Roman Britain.

### Q1840
Raw question: "Complete the statement: \"The _______ Hadrian built a wall in the north of England to keep out the Picts (ancestors of the Scottish people).\""; raw answer: "Emperor"
Suggestion: Hadrian's Wall. The records say it was built to keep out Picts and call them ancestors of Scottish people. Suggested correction: describe it as marking and defending the northern frontier of Roman Britain.

### Q1841
Raw question: "Complete the statement: \"The Emperor _______ built a wall in the north of England to keep out the Picts (ancestors of the Scottish people).\""; raw answer: "Hadrian"
Suggestion: Hadrian's Wall. The records say it was built to keep out Picts and call them ancestors of Scottish people. Suggested correction: describe it as marking and defending the northern frontier of Roman Britain.

### Q1867
Raw question: "Which of the following statements is TRUE?"; raw answer: "The correct answer is the Battle of Britain."
Suggestion: Self-referential true statements. The options say `The correct answer is...` instead of presenting facts. Suggested correction: restore the underlying substantive question and factual alternatives.

### Q1874
Raw question: "According to the Life in the UK handbook, by law, radio and television coverage of the political parties must be balanced and so equal time has to be given to rival viewpoints.?"; raw answer: "True"
Suggestion: Broadcast coverage true/false. The statement says equal time is required and has no `False` option. Suggested correction: rewrite using due impartiality or add `False` for the unqualified claim.

### Q1881
Raw question: "Complete the statement: \"False. _______ has been suspended on a few occasions.\""; raw answer: "The Northern Ireland Assembly"
Suggestion: Northern Ireland Assembly. The true statement that the Assembly has been suspended is prefixed with `False.`. Suggested correction: remove the prefix.

### Q1882
Raw question: "Complete the statement: \"False. The _______ Ireland Assembly has been suspended on a few occasions.\""; raw answer: "Northern"
Suggestion: Northern Ireland Assembly. The true statement that the Assembly has been suspended is prefixed with `False.`. Suggested correction: remove the prefix.

### Q1883
Raw question: "Complete the statement: \"False. The Northern _______ Assembly has been suspended on a few occasions.\""; raw answer: "Ireland"
Suggestion: Northern Ireland Assembly. The true statement that the Assembly has been suspended is prefixed with `False.`. Suggested correction: remove the prefix.

### Q1893
Raw question: "Complete the statement: \"Anyone can make a complaint about the police by going to a police station and writing to the _______ of the police force involved. Complaints can also be made to an independent body: the Independent Police Complaints Commission in England and Wales, the Police Complaints Commissioner for Scotland or the Police Ombudsman for Northern Ireland.\""; raw answer: "Chief Constable"
Suggestion: Police complaint bodies. The named Independent Police Complaints Commission and Police Complaints Commissioner are obsolete. Suggested correction: use current complaint bodies and names.

### Q1894
Raw question: "Complete the statement: \"Anyone can make a complaint about the police by going to a police station and writing to the Chief Constable of the police force involved. Complaints can also be made to an independent body: the _______ in England and Wales, the Police Complaints Commissioner for Scotland or the Police Ombudsman for Northern Ireland.\""; raw answer: "Independent Police Complaints Commission"
Suggestion: Police complaint bodies. The named Independent Police Complaints Commission and Police Complaints Commissioner are obsolete. Suggested correction: use current complaint bodies and names.

### Q1895
Raw question: "Complete the statement: \"Anyone can make a complaint about the police by going to a police station and writing to the Chief Constable of the police force involved. Complaints can also be made to an independent body: the Independent Police Complaints Commission in England and Wales, the _______ for Scotland or the Police Ombudsman for Northern Ireland.\""; raw answer: "Police Complaints Commissioner"
Suggestion: Police complaint bodies. The named Independent Police Complaints Commission and Police Complaints Commissioner are obsolete. Suggested correction: use current complaint bodies and names.

### Q1902
Raw question: "Complete the statement: \"In _______, a great fire destroyed much of the city, including many churches and St Paul’s Cathedral. London was rebuilt with a new St Paul\\\\\\\\\\\\\\'s, which was designed by a famous architect, Sir Christopher Wren.\""; raw answer: "1666"
Suggestion: St Paul's Cathedral. The text contains visible repeated backslashes before the apostrophe. Suggested correction: replace `St Paul\\'s` with `St Paul's`.

### Q1903
Raw question: "Complete the statement: \"In 1666, a great fire destroyed much of the city, including many churches and _______’s Cathedral. London was rebuilt with a new St Paul\\\\\\\\\\\\\\'s, which was designed by a famous architect, Sir Christopher Wren.\""; raw answer: "St Paul"
Suggestion: St Paul's Cathedral. The text contains visible repeated backslashes before the apostrophe. Suggested correction: replace `St Paul\\'s` with `St Paul's`.

### Q1904
Raw question: "Complete the statement: \"In 1666, a great fire destroyed much of the city, including many churches and St Paul’s Cathedral. London was rebuilt with a new St Paul\\\\\\\\\\\\\\'s, which was designed by a famous architect, _______.\""; raw answer: "Sir Christopher Wren"
Suggestion: St Paul's Cathedral. The text contains visible repeated backslashes before the apostrophe. Suggested correction: replace `St Paul\\'s` with `St Paul's`.

### Q1914
Raw question: "Complete the statement: \"It is a criminal offence to sell alcohol to any_______ who is under 18 or to buy alcohol for people who are under the age of 18. (There is one exception: people aged 16 or over can drink alcohol with a meal in a hotel or restaurant).\""; raw answer: "one"
Suggestion: Alcohol exception. The exception for 16- and 17-year-olds is overbroad. Suggested correction: specify beer, wine, or cider with a meal on licensed premises while accompanied by an adult.

### Q1945
Raw question: "Complete the statement: \"False. You can contact MPs by letter or telephone at their constituency office, or at their office in the _______ of Commons. In addition, many MPs, SMs and MSPs hold regular local ‘surgeries‘, where constituents can go in person to talk about issues that are of concern to them.\""; raw answer: "House"
Suggestion: MPs, MSs, and MSPs. The true statement is prefixed with `False.` and uses obsolete/incorrect `SMs`. Suggested correction: remove the prefix and use `MSs` for Members of the Senedd.

### Q1946
Raw question: "Complete the statement: \"False. You can contact MPs by letter or telephone at their constituency office, or at their office in the House of _______. In addition, many MPs, SMs and MSPs hold regular local ‘surgeries‘, where constituents can go in person to talk about issues that are of concern to them.\""; raw answer: "Commons"
Suggestion: MPs, MSs, and MSPs. The true statement is prefixed with `False.` and uses obsolete/incorrect `SMs`. Suggested correction: remove the prefix and use `MSs` for Members of the Senedd.

### Q1961
Raw question: "According to the Life in the UK handbook, you have to be at least 21 years old to serve on a jury.?"; raw answer: "False"
Suggestion: Jury age explanation. The key `False` is correct, but the explanation says eligibility is only 18-70. Suggested correction: update it to 18-75 where applicable.

### Q1989
Raw question: "Which of the following statements is TRUE?"; raw answer: "There are public holidays each year called bank holidays, when banks and many other businesses are closed for the day."
Suggestion: Truncated true statement. Two distractors end with literal `...`, so the option set is incomplete. Suggested correction: restore complete statements.

### Q2006
Raw question: "According to the Life in the UK handbook, what religion did Elizabeth I follow?"; raw answer: "She was a Protestant"
Suggestion: Elizabeth I. `Elizabeth the I was a protestant` is malformed. Suggested correction: `Elizabeth I was a Protestant`.

### Q2010
Raw question: "Complete the statement: \"The correct answer is the _______.\""; raw answer: "Royal Air Force"
Suggestion: Royal Air Force. The records are self-referential `The correct answer is...` fragments. Suggested correction: ask a substantive question such as `What is the name of the UK's air force?` and key `Royal Air Force`.

### Q2011
Raw question: "Complete the statement: \"The correct answer is the _______ Air Force.\""; raw answer: "Royal"
Suggestion: Royal Air Force. The records are self-referential `The correct answer is...` fragments. Suggested correction: ask a substantive question such as `What is the name of the UK's air force?` and key `Royal Air Force`.

### Q2012
Raw question: "Complete the statement: \"The correct answer is the Royal Air _______.\""; raw answer: "Force"
Suggestion: Royal Air Force. The records are self-referential `The correct answer is...` fragments. Suggested correction: ask a substantive question such as `What is the name of the UK's air force?` and key `Royal Air Force`.

### Q2014
Raw question: "According to the Life in the UK handbook, in the UK, you have to be 21 years old to be able to vote in a general election.?"; raw answer: "False"
Suggestion: Stray punctuation. These questions contain a period before the question mark. Suggested correction: remove the stray period.

### Q2045
Raw question: "Complete the statement: \"_______’s day, patron of Northern Ireland is celebrated on the 17th of March.\""; raw answer: "St Patrick"
Suggestion: St Patrick's Day. The wording incorrectly apposes `patron` to the day and omits `saint`. Suggested correction: ask when St Patrick's Day, associated with Ireland's patron saint, is celebrated.

### Q2054
Raw question: "Complete the statement: \"British actors to have won Oscars include _______, Sir Antony Hopkins, Dame Judi Dench, Kate Winslet and Tilda Swinton. Emily Watson has not won an Oscar yet.\""; raw answer: "Colin Firth"
Suggestion: Anthony Hopkins. The actor's name is misspelled `Antony Hopkins`. Suggested correction: `Anthony Hopkins`.

### Q2055
Raw question: "Complete the statement: \"British actors to have won Oscars include Colin Firth, _______, Dame Judi Dench, Kate Winslet and Tilda Swinton. Emily Watson has not won an Oscar yet.\""; raw answer: "Sir Antony Hopkins"
Suggestion: Anthony Hopkins. The actor's name is misspelled `Antony Hopkins`. Suggested correction: `Anthony Hopkins`.

### Q2056
Raw question: "Complete the statement: \"British actors to have won Oscars include Colin Firth, Sir Antony Hopkins, _______, Kate Winslet and Tilda Swinton. Emily Watson has not won an Oscar yet.\""; raw answer: "Dame Judi Dench"
Suggestion: Anthony Hopkins. The actor's name is misspelled `Antony Hopkins`. Suggested correction: `Anthony Hopkins`.

### Q2089
Raw question: "According to the Life in the UK handbook, the system of government in the UK is a parliamentary democracy.?"; raw answer: "True"
Suggestion: Stray punctuation. These questions contain a period before the question mark. Suggested correction: remove the stray period.

### Q2090
Raw question: "Which of the following statements is TRUE?"; raw answer: "Ulster fry is the correct answer."
Suggestion: Northern Irish food. Options say `Haggis is the correct answer` rather than presenting facts. Suggested correction: ask which listed food is traditional in Northern Ireland and key `Ulster fry`.

### Q2099
Raw question: "Which of the following statements is TRUE?"; raw answer: "Canals were built to link the factories to towns and cities and to the ports, particularly in the new industrial areas..."
Suggestion: Canal statements. Every option/key is truncated. Suggested correction: restore complete options, including the statement that canals linked factories to towns, cities, and ports.

### Q2120
Raw question: "Complete the statement: \"Some of the most commercially successful films of all time, including the two highest-grossing film franchises (_______ and James Bond), have been produced in the UK.\""; raw answer: "Harry Potter"
Suggestion: Highest-grossing claims. The records make an unqualified `two highest-grossing` claim. Suggested correction: use `among the highest-grossing` or add a date and defined scope.

### Q2121
Raw question: "Complete the statement: \"Some of the most commercially successful films of all time, including the two highest-grossing film franchises (Harry Potter and _______), have been produced in the UK.\""; raw answer: "James Bond"
Suggestion: Highest-grossing claims. The records make an unqualified `two highest-grossing` claim. Suggested correction: use `among the highest-grossing` or add a date and defined scope.

### Q2122
Raw question: "Complete the statement: \"Some of the most commercially successful films of all time, including the two highest-grossing film franchises (Harry _______ and James Bond), have been produced in the UK.\""; raw answer: "Potter"
Suggestion: Highest-grossing claims. The records make an unqualified `two highest-grossing` claim. Suggested correction: use `among the highest-grossing` or add a date and defined scope.

### Q2142
Raw question: "Complete the statement: \"Scientists led by _______, working at Manchester and then Cambridge University, were the first to ‘split the atom‘ and took part in the Manhattan Project in the United States, which developed the atomic bomb.\""; raw answer: "Ernest Rutherford"
Suggestion: Ernest Rutherford and the atomic bomb. The records imply Rutherford took part in the Manhattan Project; he died in 1937. Suggested correction: separate his 1917 nuclear experiment from the later Manhattan Project.

### Q2143
Raw question: "Complete the statement: \"Scientists led by Ernest Rutherford, working at Manchester and then _______, were the first to ‘split the atom‘ and took part in the Manhattan Project in the United States, which developed the atomic bomb.\""; raw answer: "Cambridge University"
Suggestion: Ernest Rutherford and the atomic bomb. The records imply Rutherford took part in the Manhattan Project; he died in 1937. Suggested correction: separate his 1917 nuclear experiment from the later Manhattan Project.

### Q2144
Raw question: "Complete the statement: \"Scientists led by Ernest Rutherford, working at Manchester and then Cambridge University, were the first to ‘split the atom‘ and took part in the _______ in the United States, which developed the atomic bomb.\""; raw answer: "Manhattan Project"
Suggestion: Ernest Rutherford and the atomic bomb. The records imply Rutherford took part in the Manhattan Project; he died in 1937. Suggested correction: separate his 1917 nuclear experiment from the later Manhattan Project.

### Q2145
Raw question: "Complete the statement: \"The song _______, which is sung by people in the UK and other countries when they are celebrating the New Year (or Hogmanay as it is called in Scotland).\""; raw answer: "Auld Lang Syne"
Suggestion: Auld Lang Syne. The questions are sentence fragments with no main verb. Suggested correction: use `The song Auld Lang Syne is sung ... when celebrating the New Year.`

### Q2146
Raw question: "Complete the statement: \"The song Auld Lang Syne, which is sung by people in the UK and other countries when they are celebrating the _______ (or Hogmanay as it is called in Scotland).\""; raw answer: "New Year"
Suggestion: Auld Lang Syne. The questions are sentence fragments with no main verb. Suggested correction: use `The song Auld Lang Syne is sung ... when celebrating the New Year.`

### Q2147
Raw question: "Complete the statement: \"The song _______ Lang Syne, which is sung by people in the UK and other countries when they are celebrating the New Year (or Hogmanay as it is called in Scotland).\""; raw answer: "Auld"
Suggestion: Auld Lang Syne. The questions are sentence fragments with no main verb. Suggested correction: use `The song Auld Lang Syne is sung ... when celebrating the New Year.`

### Q2166
Raw question: "According to the Life in the UK handbook, the members of the House of Lords, known as peers, are elected by the people.?"; raw answer: "False"
Suggestion: Stray punctuation. These questions contain a period before the question mark. Suggested correction: remove the stray period.

### Q2167
Raw question: "Complete the statement: \"In _______ the Emancipation Act abolished slavery throughout the British Empire.\""; raw answer: "1833"
Suggestion: Slavery Abolition Act. The wording says the Emancipation Act abolished slavery throughout the Empire in 1833. Suggested correction: use `Slavery Abolition Act 1833`, state that it applied to most colonies, and note that it came into force in 1834.

### Q2168
Raw question: "Complete the statement: \"In 1833 the _______ abolished slavery throughout the British Empire.\""; raw answer: "Emancipation Act"
Suggestion: Slavery Abolition Act. The wording says the Emancipation Act abolished slavery throughout the Empire in 1833. Suggested correction: use `Slavery Abolition Act 1833`, state that it applied to most colonies, and note that it came into force in 1834.

### Q2169
Raw question: "Complete the statement: \"In 1833 the Emancipation Act abolished slavery throughout the _______.\""; raw answer: "British Empire"
Suggestion: Slavery Abolition Act. The wording says the Emancipation Act abolished slavery throughout the Empire in 1833. Suggested correction: use `Slavery Abolition Act 1833`, state that it applied to most colonies, and note that it came into force in 1834.

### Q2176
Raw question: "According to the Life in the UK handbook, anyone who is violent towards their partner – whether they are a man or a woman, married or living together – can be prosecuted.?"; raw answer: "True"
Suggestion: Stray punctuation. These questions contain a period before the question mark. Suggested correction: remove the stray period.

### Q2188
Raw question: "Complete the statement: \"Some of the most commercially successful films of all time, including the two highest-grossing film franchises (_______ and James Bond), have been produced in the UK.\""; raw answer: "Harry Potter"
Suggestion: Highest-grossing claims. The records make an unqualified `two highest-grossing` claim. Suggested correction: use `among the highest-grossing` or add a date and defined scope.

### Q2189
Raw question: "Complete the statement: \"Some of the most commercially successful films of all time, including the two highest-grossing film franchises (Harry Potter and _______), have been produced in the UK.\""; raw answer: "James Bond"
Suggestion: Highest-grossing claims. The records make an unqualified `two highest-grossing` claim. Suggested correction: use `among the highest-grossing` or add a date and defined scope.

### Q2190
Raw question: "Complete the statement: \"Some of the most commercially successful films of all time, including the two highest-grossing film franchises (Harry _______ and James Bond), have been produced in the UK.\""; raw answer: "Potter"
Suggestion: Highest-grossing claims. The records make an unqualified `two highest-grossing` claim. Suggested correction: use `among the highest-grossing` or add a date and defined scope.

### Q2197
Raw question: "Complete the statement: \"_______ programme gives 16- and 17-year-olds the opportunity to enjoy outdoor activities, develop their skills and take part in a community project.\""; raw answer: "The National Citizen Service"
Suggestion: National Citizen Service. The present-tense programme description is stale because the programme ended on 31 March 2025. Suggested correction: make it historical or replace it with a current programme.

### Q2198
Raw question: "Complete the statement: \"The _______ Citizen Service programme gives 16- and 17-year-olds the opportunity to enjoy outdoor activities, develop their skills and take part in a community project.\""; raw answer: "National"
Suggestion: National Citizen Service. The present-tense programme description is stale because the programme ended on 31 March 2025. Suggested correction: make it historical or replace it with a current programme.

### Q2199
Raw question: "Complete the statement: \"The National _______ Service programme gives 16- and 17-year-olds the opportunity to enjoy outdoor activities, develop their skills and take part in a community project.\""; raw answer: "Citizen"
Suggestion: National Citizen Service. The present-tense programme description is stale because the programme ended on 31 March 2025. Suggested correction: make it historical or replace it with a current programme.

### Q2207
Raw question: "Which of the following statements is TRUE?"; raw answer: "In the UK, you need to be at least 16 years old to ride a moped, and there are other age requirements and special tests..."
Suggestion: Moped age. Options and key are truncated with `...`. Suggested correction: restore complete options, including the full statement that a moped can be ridden from age 16.

### Q2212
Raw question: "Complete the statement: \"The small claims procedure is an informal way of helping people to settle minor disputes without spending a lot of time and money using a lawyer. This procedure is used for claims of less than £10,000 in England and Wales, £5,000 in Scotland and _______.\""; raw answer: "Northern Ireland"
Suggestion: Small-claims limits. The records give Northern Ireland a £5,000 limit; the current limit is £3,000, while Scotland is £5,000 and England/Wales £10,000. Suggested correction: state the jurisdiction-specific limits.

### Q2213
Raw question: "Complete the statement: \"The small claims procedure is an informal way of helping people to settle minor disputes without spending a lot of time and money using a lawyer. This procedure is used for claims of less than £10,000 in _______ and Wales, £5,000 in Scotland and Northern Ireland.\""; raw answer: "England"
Suggestion: Small-claims limits. The records give Northern Ireland a £5,000 limit; the current limit is £3,000, while Scotland is £5,000 and England/Wales £10,000. Suggested correction: state the jurisdiction-specific limits.

### Q2214
Raw question: "Complete the statement: \"The small claims procedure is an informal way of helping people to settle minor disputes without spending a lot of time and money using a lawyer. This procedure is used for claims of less than £10,000 in England and _______, £5,000 in Scotland and Northern Ireland.\""; raw answer: "Wales"
Suggestion: Small-claims limits. The records give Northern Ireland a £5,000 limit; the current limit is £3,000, while Scotland is £5,000 and England/Wales £10,000. Suggested correction: state the jurisdiction-specific limits.

### Q2221
Raw question: "Which of the following statements is TRUE?"; raw answer: "If you think someone is trying to persuade you to join an extremist or terrorist cause, you should notify your local..."
Suggestion: Extremist-cause reporting. Options/key are truncated, including `notify your local...`. Suggested correction: restore `notify your local police force` and complete every option.

### Q2229
Raw question: "Complete the statement: \"Brunel was originally from Portsmouth, England. He was an engineer who built tunnels, bridges, railway lines and ships. He was responsible for constructing the _______, which was the first major railway built in Britain. It runs from Paddington Station in London to the south west of England, the West Midlands and Wales.\""; raw answer: "Great Western Railway"
Suggestion: Great Western Railway. The claim that it was the first major railway built in Britain is misleading; earlier major railways existed. Suggested correction: describe Brunel's construction and the railway's route without the false superlative.

### Q2230
Raw question: "Complete the statement: \"Brunel was originally from Portsmouth, England. He was an engineer who built tunnels, bridges, railway lines and ships. He was responsible for constructing the Great Western Railway, which was the first major railway built in Britain. It runs from _______ in London to the south west of England, the West Midlands and Wales.\""; raw answer: "Paddington Station"
Suggestion: Great Western Railway. The claim that it was the first major railway built in Britain is misleading; earlier major railways existed. Suggested correction: describe Brunel's construction and the railway's route without the false superlative.

### Q2231
Raw question: "Complete the statement: \"Brunel was originally from Portsmouth, England. He was an engineer who built tunnels, bridges, railway lines and ships. He was responsible for constructing the Great Western Railway, which was the first major railway built in Britain. It runs from Paddington Station in London to the south west of England, the _______ and Wales.\""; raw answer: "West Midlands"
Suggestion: Great Western Railway. The claim that it was the first major railway built in Britain is misleading; earlier major railways existed. Suggested correction: describe Brunel's construction and the railway's route without the false superlative.

### Q2235
Raw question: "Complete the statement: \"The correct answer is the _______.\""; raw answer: "Reformation"
Suggestion: Reformation. The records use tautological `The correct answer is...` text. Suggested correction: ask a substantive question about the movement associated with Henry VIII's break from Rome.

### Q2236
Raw question: "Which of the following statements is TRUE?"; raw answer: "The correct answer is the Reformation."
Suggestion: Reformation. The records use tautological `The correct answer is...` text. Suggested correction: ask a substantive question about the movement associated with Henry VIII's break from Rome.

### Q2238
Raw question: "Complete the statement: \"Newton’s most famous published work was _______ (‘Mathematical Principle of Natural Philosophy’), which showed how gravity applied to the whole universe. Newton also discovered that white light is made up of the colours of the rainbow.\""; raw answer: "Philosophiae Naturalis Principia Mathematica"
Suggestion: Principia translation. `Mathematical Principle` should be `Mathematical Principles of Natural Philosophy`. Suggested correction: use the plural in all stems, options, keys, and explanations.

### Q2239
Raw question: "Complete the statement: \"Newton’s most famous published work was Philosophiae Naturalis Principia Mathematica (‘_______ of Natural Philosophy’), which showed how gravity applied to the whole universe. Newton also discovered that white light is made up of the colours of the rainbow.\""; raw answer: "Mathematical Principle"
Suggestion: Principia translation. `Mathematical Principle` should be `Mathematical Principles of Natural Philosophy`. Suggested correction: use the plural in all stems, options, keys, and explanations.

### Q2240
Raw question: "Complete the statement: \"Newton’s most famous published work was Philosophiae Naturalis Principia Mathematica (‘Mathematical Principle of _______’), which showed how gravity applied to the whole universe. Newton also discovered that white light is made up of the colours of the rainbow.\""; raw answer: "Natural Philosophy"
Suggestion: Principia translation. `Mathematical Principle` should be `Mathematical Principles of Natural Philosophy`. Suggested correction: use the plural in all stems, options, keys, and explanations.

### Q2247
Raw question: "Complete the statement: \"In the middle of the century the potato crop failed, and _______ suffered a famine. A million people died from disease and starvation.\""; raw answer: "Ireland"
Suggestion: Irish potato famine. The century is missing and Q2249 is truncated. Suggested correction: specify the middle of the 19th century and restore the complete answer ending in disease and starvation.

### Q2248
Raw question: "Complete the statement: \"In the middle of the century the potato crop failed, and Ireland suffered a famine. A _______ people died from disease and starvation.\""; raw answer: "million"
Suggestion: Irish potato famine. The century is missing and Q2249 is truncated. Suggested correction: specify the middle of the 19th century and restore the complete answer ending in disease and starvation.

### Q2249
Raw question: "Which of the following statements is TRUE?"; raw answer: "In the middle of the century the potato crop failed, and Ireland suffered a famine. A million people died from disease..."
Suggestion: Irish potato famine. The century is missing and Q2249 is truncated. Suggested correction: specify the middle of the 19th century and restore the complete answer ending in disease and starvation.

### Q2276
Raw question: "According to the Life in the UK handbook, the Speaker is an MP, he or she represents a constituency and deals with the constituents.?"; raw answer: "True"
Suggestion: Stray punctuation. These questions contain a period before the question mark. Suggested correction: remove the stray period.

### Q2280
Raw question: "Complete the statement: \"_______’s most famous plays include MacBeth.\""; raw answer: "William Shakespeare"
Suggestion: Macbeth. The play is repeatedly spelled `MacBeth`. Suggested correction: `Macbeth`.

### Q2281
Raw question: "Complete the statement: \"William _______’s most famous plays include MacBeth.\""; raw answer: "Shakespeare"
Suggestion: Macbeth. The play is repeatedly spelled `MacBeth`. Suggested correction: `Macbeth`.

### Q2282
Raw question: "Which of the following statements is TRUE?"; raw answer: "William Shakespeare’s most famous plays include MacBeth."
Suggestion: Macbeth. The play is repeatedly spelled `MacBeth`. Suggested correction: `Macbeth`.

### Q2289
Raw question: "According to the Life in the UK handbook, in Northern Ireland, up to three specially trained magistrates or a District Judge are required for Youth Court cases.?"; raw answer: "True"
Suggestion: Stray punctuation. These questions contain a period before the question mark. Suggested correction: remove the stray period.

### Q2302
Raw question: "Which of the following statements is TRUE?"; raw answer: "Opposition MPs form the shadow cabinet and their role is to challenge the government and put forward alternative..."
Suggestion: Shadow cabinet. The keyed statement ends in `alternative...`. Suggested correction: restore the full sentence about opposition MPs challenging government and proposing alternative policies.

### Q2333
Raw question: "What is the name of the best preserved prehistoric village in northern Europe and which origin traces back to the Stone Age?"; raw answer: "Skara Brae"
Suggestion: Skara Brae. The question is ungrammatical and unclear. Suggested correction: `What is the name of the best-preserved prehistoric village in northern Europe, dating from the Stone Age?`

### Q2339
Raw question: "Who is married to the King of the United Kingdom?"; raw answer: "Camila, the Queen Consort"
Suggestion: Queen Camilla. `Camila, the Queen Consort` is misspelled and outdated. Suggested correction: ask who is married to King Charles III and key `Queen Camilla`.

### Q2340
Raw question: "By what TWO other names is the Church of England known?"; raw answer: ["The Anglican Church","The Episcopal Church"]
Suggestion: Church of England names. The Scottish Episcopal Church and US Episcopal Church are separate Anglican churches, not alternate names for the Church of England. Suggested correction: ask separately for the Anglican churches in Scotland and the United States.

### Q2341
Raw question: "Who was the first British Prime Minister?"; raw answer: "Sir Robert Walpole"
Suggestion: First British Prime Minister. `The first man to British Prime Minister` is malformed. Suggested correction: `The first British Prime Minister`.

### Q2343
Raw question: "How old do you need to be to apply for a free TV licence?"; raw answer: "Over 75"
Suggestion: Free TV licence. Being 75 or over is insufficient without Pension Credit. Suggested correction: require age 75+ and receipt of Pension Credit.

### Q2346
Raw question: "When did the Conservative government called a referendum on the UK’s membership of the European Union?"; raw answer: "23rd June 2016"
Suggestion: Grammar. `When did ... called` should be `When did ... call`.

### Q2356
Raw question: "What name is given to the day when people play jokes on each other until midday?"; raw answer: "April’s Fool Day"
Suggestion: April Fool's Day. `April's Fool Day` is not the standard name. Suggested correction: `April Fool's Day` or `April Fools' Day`.

### Q2361
Raw question: "What is the relationship between the monarch and the government?"; raw answer: "Advise, warn and encourage the government’s decisions"
Suggestion: Monarch and government. The answer says the monarch encourages the government's decisions. Suggested correction: say the monarch advises, warns, and encourages the Prime Minister/government.

### Q2364
Raw question: "Which British scientist was awarded a Nobel Prize for discovering the structure of the DNA molecule?"; raw answer: "Francis Crick"
Suggestion: Christopher Cockerell. `Cockrell` is misspelled. Suggested correction: `Cockerell`.

### Q2367
Raw question: "Which of the following national galleries is NOT located in London?"; raw answer: "The National Museum"
Suggestion: National gallery. `The National Museum` is not a sufficiently identified gallery and the category is inconsistent. Suggested correction: use a named museum/gallery and ask a category-consistent question.

### Q2369
Raw question: "How old is the clock at the Houses of Parliament in London, also known as ‘Big Ben’?"; raw answer: "150 years old"
Suggestion: Big Ben. Big Ben is the bell, not the clock; the age answer is time-dependent and incorrect. Suggested correction: ask what Big Ben is, or use the Great Clock's 1859 completion date with a reference date.

### Q2372
Raw question: "The small claims procedure is used in England and Wales for minor disputes for:"; raw answer: "Claims of less than £10,000"
Suggestion: Small claims. The explanation gives Scotland's current limit as £3,000. Suggested correction: use £10,000 for England/Wales, £5,000 for Scotland, and £3,000 for Northern Ireland.

### Q2383
Raw question: "Which TWO of the following water sports are popular in the UK?"; raw answer: ["Rowing","Sailing"]
Suggestion: Water sports. Surfing is also a popular UK water sport, so the two-answer key `Rowing` and `Sailing` is not unique. Suggested correction: replace the distractor or specify the intended source pair.

### Q2387
Raw question: "Popular social networking websites in the UK include:"; raw answer: "Facebook and Twitter"
Suggestion: Grammar. `Social networking websites ... are a popular` is grammatically incorrect. Suggested correction: `Social networking websites ... are popular`.

### Q2389
Raw question: "How often are elections held for the Welsh government?"; raw answer: "Every four years"
Suggestion: Senedd. The wording contains `fix` instead of `five`, and the explanation uses the outdated 60-member figure. Suggested correction: fix the typo and update current membership/electoral-system details.

### Q2390
Raw question: "Who was the British Minister after Margaret Thatcher?"; raw answer: "John Major"
Suggestion: John Major. `British Minister` is not a defined office. Suggested correction: ask `Who was Prime Minister after Margaret Thatcher?`

### Q2396
Raw question: "What animal is represented in the Welsh flag?"; raw answer: "A dragon"
Suggestion: United with England. The explanations say `untied` instead of `united`. Suggested correction: replace `untied` with `united` or `incorporated`.

### Q2400
Raw question: "In which TWO movie categories does Britain continue to be particularly strong at?"; raw answer: ["Special effects movies","Animation movies"]
Suggestion: Grammar. `strong at` should be `strong in`.

### Q2411
Raw question: "In which category did Jayne Torvill and Christopher Dean win gold medals at the Olympic Games in 1984?"; raw answer: "Ice dancing"
Suggestion: Grammar. `is one` should be `are among` where the subject is plural.

### Q2412
Raw question: "What is the first verse of the National Anthem of the UK ‘God save the King’?"; raw answer: "God save our gracious King!"
Suggestion: National anthem. The quotation around `God Save our Gracious King!` is incomplete and punctuation is malformed. Suggested correction: restore the closing quote and punctuation.

### Q2419
Raw question: "Members of the Welsh government are elected every four years on the basis of:"; raw answer: "Proportional representation"
Suggestion: Welsh elections. Welsh Government ministers are appointed; Members of the Senedd are elected. Suggested correction: ask about Members of the Senedd, use current membership/electoral-system details, and avoid the executive/legislature confusion.

### Q2433
Raw question: "How can MPs be contacted (choose TWO options)?"; raw answer: ["By letter","By phoning their constituency office"]
Suggestion: Contacting MPs. The question allows Facebook as a plausible contact route while asking for only two, and the stored contact details may be stale. Suggested correction: specify formal parliamentary contact methods, replace the Facebook distractor, and verify the contact details.

### Q2434
Raw question: "What did the’Bill of Rights’ confirm in 1689?"; raw answer: "The rights of Parliament and the limits of the king’s power"
Suggestion: Bill of Rights punctuation. Spacing and quotation marks around `the Bill of Rights` are malformed. Suggested correction: normalize the phrase and punctuation.

### Q2435
Raw question: "Who designed the Clifton Suspension Bridge located over the Avon George?"; raw answer: "Isambard Kingdom Brunel"
Suggestion: Avon Gorge. `Avon George` is a place-name typo. Suggested correction: `Avon Gorge`.

### Q2441
Raw question: "What is the name of the building where the Welsh government members meet?"; raw answer: "Senedd"
Suggestion: Senedd terminology. `Welsh government members` is not the correct legislature label. Suggested correction: `Members of the Senedd (MSs)`.

### Q2445
Raw question: "Which Act abolished slavery throughout the British Empire in 1833?"; raw answer: "The Emancipation Act"
Suggestion: Slavery Abolition Act. The formal title and scope are wrong in `Emancipation Act`/`throughout the Empire`. Suggested correction: use `Slavery Abolition Act 1833`, most colonies, and its 1834 commencement.

### Q2448
Raw question: "What was the population of the UK in 2005?"; raw answer: "Just under 60 million"
Suggestion: UK population in 2005. `Just under 60 million` is inaccurate; the mid-2005 UK population was just over 60 million. Suggested correction: add and key `Just over 60 million`.

### Q2452
Raw question: "Where can people facing domestic violence get help from?"; raw answer: "The Citizens Advise Bureau"
Suggestion: Domestic-violence help. `Citizens Advise Bureau` is misspelled, and the broad question makes multiple options defensible. Suggested correction: use `Citizens Advice` and ask for a specifically named source or make all applicable answers explicit.

### Q2463
Raw question: "The Welsh dragon on the Welsh flag does not appear on the Union Flag because, when the first Union Flag was created in 1606 from the flags of Scotland and England, the Principality of Wales was already untied with England:"; raw answer: "True"
Suggestion: United with England. The explanations say `untied` instead of `united`. Suggested correction: replace `untied` with `united` or `incorporated`.

### Q2465
Raw question: "What was the population of the UK in 1801?"; raw answer: "8 million"
Suggestion: UK population in 1801. The answer `8 million` describes a narrower territory, not the UK including Ireland. Suggested correction: ask for England/Great Britain or use the appropriate UK figure of about 16 million.

### Q2466
Raw question: "Where is there UK geographically located?"; raw answer: "In the north west of Europe"
Suggestion: UK geography. `Where is there UK geographically located?` is malformed. Suggested correction: `Where is the UK geographically located?`

### Q2469
Raw question: "Which Scottish physician and researcher co-discovered the insulin used to treat diabetes?"; raw answer: "John McLeod"
Suggestion: John MacLeod. `John McLeod` is misspelled for the insulin co-discoverer. Suggested correction: `John MacLeod`.

### Q2476
Raw question: "Which of the following flags is not represented in the union flag?"; raw answer: "Welsh"
Suggestion: United with England. The explanations say `untied` instead of `united`. Suggested correction: replace `untied` with `united` or `incorporated`.

### Q2480
Raw question: "When was the Northern Ireland Parliament established for the first time?"; raw answer: "In 1922"
Suggestion: Northern Ireland Parliament. The first Parliament sat in 1921, not 1922. Suggested correction: use `1921` or ask a distinct question about the Irish Free State in 1922.

### Q2488
Raw question: "What is the coin with the highest value in the UK?"; raw answer: "£2"
Suggestion: Highest UK coin. £2 is the highest standard circulating denomination, but higher-value commemorative coins exist. Suggested correction: specify `highest-denomination standard circulating coin`.

### Q2500
Raw question: "What name is given to the Church of England in Scotland and the United States?"; raw answer: "The Episcopal Church"
Suggestion: Church names. The Episcopal Church is not simply another name for the Church of England. Suggested correction: distinguish the Scottish Episcopal Church and the Episcopal Church in the United States.

### Q2503
Raw question: "Which TWO religions celebrate Diwali?"; raw answer: ["Hindu","Sikh"]
Suggestion: Diwali communities. The two-answer key omits other communities that celebrate Diwali, including Jains and some Buddhists. Suggested correction: specify the intended communities or ask for all applicable traditions.

### Q2517
Raw question: "Under which Act was the United Kingdom of Great Britain and Northern Ireland created?"; raw answer: "The Act of Union"
Suggestion: Creation of the United Kingdom. The question conflates the 1800 Act creating the United Kingdom of Great Britain and Ireland with later naming changes. Suggested correction: ask separately about the 1707 Kingdom of Great Britain, the 1800 Act, or the 1927 current name.

### Q2525
Raw question: "Which of the following crosses does NOT form part of the Union Flag?"; raw answer: "The cross of St David, patron saint of Wales"
Suggestion: United with England. The explanation says Wales was `untied` with England. Suggested correction: `united` or `incorporated`.

### Q2533
Raw question: "Who composed a suite of pieces themed around the planets and the solar system called ‘The Planets’?"; raw answer: "Gustav Holst"
Suggestion: Edward Elgar. `The Edward Elgar` is malformed. Suggested correction: `Edward Elgar` or `Sir Edward Elgar`.

### Q2534
Raw question: "What was the population of the UK in 1998?"; raw answer: "57 million"
Suggestion: UK population in 1998. `57 million` is too low; the UK population was approximately 58.5 million. Suggested correction: use about 58.5 million and provide a matching option. | UK population in 1998. The answer `57 million` is too low; the population was about 58.5 million. Suggested correction: use about 58.5 million.

### Q2539
Raw question: "Who forms the judiciary?"; raw answer: "The judges collectively"
Suggestion: Judiciary. `The judges collectively` is incomplete because magistrates are also part of the judiciary. Suggested correction: write a unique question distinguishing judges and magistrates.

### Q2556
Raw question: "What was the name of the first cloned mammal?"; raw answer: "Dolly"
Suggestion: Ian Wilmut. The cloning scientist's surname is repeatedly misspelled `Wilmot`. Suggested correction: `Sir Ian Wilmut`.

### Q2561
Raw question: "What TWO names are given to the people who give tours at the Tower of London?"; raw answer: ["Beefeaters","Yeoman Wardens"]
Suggestion: Tower of London. The official title is `Yeoman Warders`, not `Yeoman Wardens`. Suggested correction: replace the option and key.

### Q2565
Raw question: "When is St Patrick’s Day, patron to of Northern Ireland?"; raw answer: "17th of March"
Suggestion: St Patrick's Day. The text says `patron to of Northern Ireland`. Suggested correction: use `St Patrick's Day, the feast day of Ireland's patron saint`.

### Q2571
Raw question: "What name is given to the elected members of the Welsh government?"; raw answer: "SMs"
Suggestion: Senedd abbreviation. `SMs` is incorrect. Suggested correction: `MSs` or `Members of the Senedd`.

### Q2587
Raw question: "In which city is the Welsh government building, also known as Senedd, located?"; raw answer: "Cardiff Bay"
Suggestion: Senedd building. The question calls the Senedd building the Welsh Government building. Suggested correction: distinguish the Senedd, the Welsh Parliament, from the Welsh Government executive.

### Q2588
Raw question: "What architectural style became popular in the 19th century?"; raw answer: "Medieval Gothic"
Suggestion: Baroque. `Barroco` is not the English style name. Suggested correction: `Baroque`.

### Q2600
Raw question: "The Man Booker Prize for Fiction is awarded annually for the best fiction novel written by an author from:"; raw answer: "The Commonwealth, Ireland or Zimbabwe"
Suggestion: Booker Prize eligibility. The Man Booker terminology and historical eligibility are stale. Suggested correction: use `Booker Prize` and add a date qualifier or current any-nationality eligibility.

### Q2610
Raw question: "How many devolved administrations are there in the UK?"; raw answer: "3"
Suggestion: Devolved bodies. The Scottish Parliament and Northern Ireland Assembly are legislatures, not devolved administrations. Suggested correction: call the administrations the Scottish Government and Northern Ireland Executive.

### Q2623
Raw question: "Which of the following statements is true?"; raw answer: "County Courts deal with a wide range of civil disputes including family matters, breaches of contract and divorce."
Suggestion: County Courts. County Courts do not generally handle divorce and family proceedings; those are handled by the Family Court. Suggested correction: use civil disputes such as contract, debt, and property matters.

### Q2638
Raw question: "Which British actor has recently won an Oscar?"; raw answer: "Colin Firth"
Suggestion: Colin Firth and Anthony Hopkins. `Recently` is stale for a 2011 Oscar and `Antony Hopkins` is misspelled. Suggested correction: add the year/remove `recently` and use `Anthony Hopkins`.

### Q2651
Raw question: "How many volunteers work for the National Trust?"; raw answer: "More than 61,000"
Suggestion: National Trust volunteers. `More than 61,000` is not stable without a date and conflicts with the cited current report. Suggested correction: date the question and update the answer/options.

### Q2652
Raw question: "What was the population of the UK in 1851?"; raw answer: "20 million"
Suggestion: UK population in 1851. `20 million` is closer to Great Britain; the UK including Ireland had about 27.4 million. Suggested correction: specify the territory or update the figure.

### Q2654
Raw question: "Which religious community celebrates Vaisakhi?"; raw answer: "Sikh"
Suggestion: Vaisakhi. Both Sikh and Hindu communities are represented while the question asks for one answer. Suggested correction: make it a two-answer question or specify Sikh Khalsa observance.

### Q2656
Raw question: "The Senedd has 129 Senedd members."; raw answer: "False"
Suggestion: Senedd spelling and membership. `Senned` is misspelled and the 60-member explanation is stale. Suggested correction: use `Senedd`, `MSs`, and current membership details.

### Q2657
Raw question: "Which British scientist made important discoveries working with steam power?"; raw answer: "James Watt"
Suggestion: Adam Smith. `Adan Smith` is misspelled. Suggested correction: `Adam Smith`.

### Q2658
Raw question: "How can you visit the Northern Ireland Assembly (choose TWO options)?"; raw answer: ["Contacting the Education Service","Contacting an MLA"]
Suggestion: Visiting the Northern Ireland Assembly. The selected pair is not unique because visitor services/tours provide another valid route. Suggested correction: use current visitor routes and make the requested pair uniquely correct.

### Q2659
Raw question: "When was the first television broadcast made?"; raw answer: "In 1932"
Suggestion: First television broadcast. `First` is undefined; 1925, 1932, and the BBC's 1936 regular service refer to different milestones. Suggested correction: specify the milestone, such as Baird's first London-to-Glasgow broadcast.

### Q2661
Raw question: "How many Russian and Polish Jews came to Britain to escape prosecution between 1870 and 1914?"; raw answer: "Around 120,000"
Suggestion: Persecution. `Prosecution` should be `persecution` in the migration question.

### Q2664
Raw question: "When was the National Health System (NHS) established?"; raw answer: "1948"
Suggestion: NHS. The expansion is `National Health Service`, not `National Health System`. Suggested correction: replace the wording.

### Q2665
Raw question: "The King has reigned since her mother’s death in 2022."; raw answer: "True"
Suggestion: The King's mother. The question says `her mother` for the King. Suggested correction: `his mother`.

### Q2666
Raw question: "What is the note with the highest value in the UK?"; raw answer: "£50"
Suggestion: Highest Bank of England note. £50 is highest for Bank of England notes, but Scottish and Northern Irish banks issue £100 notes. Suggested correction: restrict the question to Bank of England notes or state the UK-wide distinction.

### Q2668
Raw question: "What is celebrated during Diwali?"; raw answer: "The victory of good over evil and the gaining of knowledge"
Suggestion: Diwali spelling. `Diwalli` is misspelled. Suggested correction: `Diwali`.

### Q2678
Raw question: "Which of the following civil laws include disputes between landlords and tenants over issues such as repairs and eviction?"; raw answer: "Housing law"
Suggestion: Housing law. The question should say `Which area of civil law includes...`; the explanation says `suck as repairs`. Suggested correction: use `such as repairs`.

### Q2681
Raw question: "Who was reining in Britain when the British Empire became the largest empire the world has ever seen, with an estimated population of more than 400 million people?"; raw answer: "Queen Victoria"
Suggestion: Reigning. `Reining` is used for `reigning`. Suggested correction: replace it in each question.

### Q2689
Raw question: "In which TWO cases may a person who has been summoned to do jury service be exempted from doing it:"; raw answer: ["If they have a criminal conviction","If they provide a good reason to be excused, such as ill health"]
Suggestion: Criminal convictions and jury service. A conviction does not automatically disqualify every person; disqualification depends on conviction and sentence. Suggested correction: distinguish disqualification from being excused.

### Q2690
Raw question: "What is the role of the shadow cabinet?"; raw answer: "To challenge the government and put forward alternative policies"
Suggestion: Contradictory explanation. The explanation begins `Incorrect` even though the keyed answer is correct. Suggested correction: remove the contradictory word.

### Q2692
Raw question: "On which of the following issues the Northern Ireland Assembly CANNOT make decisions?"; raw answer: "Planning"
Suggestion: Northern Ireland devolved powers. Planning, social security, and some taxation are not all reserved to the central government; planning is devolved. Suggested correction: use a genuinely reserved matter such as defence, or explicitly describe limited devolved powers.

### Q2695
Raw question: "Who led the group of Catholics who tried to kill the Protestant king with a bomb in the Houses of the Parliament in 1605?"; raw answer: "Guy Fawkes"
Suggestion: Gunpowder Plot. Guy Fawkes did not lead the plot; Robert Catesby did. Suggested correction: ask who led it and key Catesby, or ask who guarded the explosives and key Fawkes.

### Q2701
Raw question: "How many members has the Council of Europe?"; raw answer: "47"
Suggestion: Council of Europe membership. The explanation/options use 47 members; the current Council of Europe has 46. Suggested correction: update the answer and explanation.

### Q2719
Raw question: "How many verdicts are possible in trials in Scotland?"; raw answer: "Three: ‘guilty’, ‘not guilty’ or ‘not proven’"
Suggestion: Scottish verdicts. The not-proven verdict was abolished from 1 January 2026; current answers should be guilty or not guilty. Both also contain `based of`. Suggested correction: update the verdict question and use `based on`.

### Q2746
Raw question: "What animal was cloned by scientists Sir Ian Wilmot and Keith Campbell?"; raw answer: "A sheep"
Suggestion: Ian Wilmut. The cloning scientist's surname is repeatedly misspelled `Wilmot`. Suggested correction: `Sir Ian Wilmut`.

### Q2756
Raw question: "Choose the correct answer. The Middle Ages were:"; raw answer: "A period of constant war"
Suggestion: Constant war. `A period of constant war` is an overstatement. Suggested correction: use `a period of almost constant warfare`.

### Q2773
Raw question: "Whose details are NOT listed in the Phone Book?"; raw answer: "The King"
Suggestion: Phone Book and MEPs. The premise is obsolete and UK MEPs no longer exist. Suggested correction: replace it with current official representative directories and terminology.

### Q2776
Raw question: "How many Senedd members does the Welsh government have?"; raw answer: "60"
Suggestion: Welsh Government and Senedd. The executive is confused with the legislature and the 60-member figure is stale. Suggested correction: distinguish the Welsh Government from the Senedd and update current membership.

### Q2781
Raw question: "During which movement the Parliament passed laws giving women the right to equal pay and made it illegal for employees to discriminate against women because of their gender:"; raw answer: "The Swinging Sixties"
Suggestion: Equal Pay and Sex Discrimination Acts. The Acts were passed in 1970 and 1975, not simply during the Swinging Sixties; the text also says employees instead of employers. Suggested correction: state the correct decades/Acts and use `employers`.

### Q2789
Raw question: "Who can get a 50% discount on their TV licences?"; raw answer: "Blind people"
Suggestion: Free TV licence. Blind people may qualify for a 50% discount, but a free licence for someone 75+ requires Pension Credit. Suggested correction: state the Pension Credit condition.

### Q2791
Raw question: "Which of the following British actresses has NOT won an Oscar?"; raw answer: "Emily Watson"
Suggestion: Anthony Hopkins. `Recently` is stale and `Antony` is misspelled. Suggested correction: remove the time-relative word, add the year, and use `Anthony`.

### Q2794
Raw question: "How can you visit the Northern Ireland Assembly (choose TWO options)?"; raw answer: ["Contacting the Education Service","Contacting an MLA"]
Suggestion: Visiting the Northern Ireland Assembly. The selected pair is not unique because visitor services/tours provide another valid route. Suggested correction: use current visitor routes and make the requested pair uniquely correct.

### Q2798
Raw question: "When is the electoral register updated?"; raw answer: "September or October"
Suggestion: Electoral register updates. Registers are updated continuously and by varying canvass schedules, not universally in September or October. Suggested correction: describe the local schedule or continuous updates.

### Q2799
Raw question: "Which of the following is the official church of the state?"; raw answer: "The Church of England"
Suggestion: Established church. The Church of England is established in England, not the official church of the UK as a whole. Suggested correction: ask for the established church in England.

### Q2802
Raw question: "What was the population of the UK in 1700?"; raw answer: "5 million"
Suggestion: Historical UK populations. The UK did not exist in some of the named years, and several figures describe England or Great Britain instead. Suggested correction: specify the historical territory and use its corresponding population.

### Q2803
Raw question: "When did the ‘Concorde’ aircraft retired from service?"; raw answer: "In 2003"
Suggestion: Concorde grammar. `When did the Concorde aircraft retired` should be `When did the Concorde aircraft retire`.

### Q2804
Raw question: "When did the Allies defeat Germany marking the end of the Second World War?"; raw answer: "In May 1945"
Suggestion: End of World War II. May 1945 marked the end of the war in Europe, not the global end of the Second World War. Suggested correction: say `end of the war in Europe`.

### Q2809
Raw question: "What British sportsmen holds a number of English Test cricket records?"; raw answer: "Sir Ian Botham"
Suggestion: Cricket records. The question needs `Which British sportsman`; `Sir Jackie Steward` should be `Sir Jackie Stewart`.

### Q2815
Raw question: "How can you visit the UK Parliament (choose TWO options)?"; raw answer: ["Writing to your local MP to ask for tickets","Queueing on the day at the public entrance"]
Suggestion: Visiting Parliament. Multiple listed choices can be valid ways to visit Parliament. Suggested correction: distinguish public-gallery attendance from tours and make the requested pair unique.

### Q2823
Raw question: "When was the Northern Ireland Parliament established for the first time?"; raw answer: "In 1922"
Suggestion: Northern Ireland Parliament. The first Parliament was established/opened in 1921, not 1922. Suggested correction: use `1921` or ask a separate 1922 Irish Free State question.

### Q2829
Raw question: "Which landscape architect designed grounds around country houses so that the landscape appeared to be natural, with grass, trees and lakes?"; raw answer: "Lancelot ‘Capability’ Brown"
Suggestion: Capability Brown. Edwin Lutyens could not have worked with Capability Brown; Brown died in 1783 and Lutyens was born in 1869. Suggested correction: remove that sentence.

### Q2839
Raw question: "How long does it take to donate blood?"; raw answer: "About an hour"
Suggestion: Blood donation duration. The donation itself takes roughly 5-10 minutes; about an hour describes the full appointment. Suggested correction: specify which duration is being tested.

### Q2851
Raw question: "Which British scientist led the development of the atomic bomb?"; raw answer: "Ernest Rutherford"
Suggestion: Atomic bomb leadership. Rutherford died before the Manhattan Project and did not lead atomic-bomb development; one record has no correct option. Suggested correction: ask about the Manhattan Project or a correct scientist/project.

### Q2866
Raw question: "Which flower is associated with Northern Ireland?"; raw answer: "Shamrock"
Suggestion: Shamrock. A shamrock is a plant/symbol, not a flower. Suggested correction: ask for the plant or symbol associated with Northern Ireland, or use the flax flower if asking for a flower.

### Q2874
Raw question: "What was the population of the UK in 1600?"; raw answer: "Just over 4 million"
Suggestion: Historical UK populations. The UK did not exist in some of the named years, and several figures describe England or Great Britain instead. Suggested correction: specify the historical territory and use its corresponding population.

### Q2877
Raw question: "Which two scientists were successful at cloning the first mammal, Dolly the sheep?"; raw answer: "Sir Ian Wilmot and Keith Campbell"
Suggestion: Wilmut and Crick. `Ian Wilmot` and `Francis Creek` are misspelled. Suggested correction: `Ian Wilmut` and `Francis Crick`.

### Q2889
Raw question: "In Wales, the jury has to listen to the evidence presented at the trial and then decide a verdict of ‘guilty’, ‘not guilty’ or ‘not proven’ based of what they have heard:"; raw answer: "False"
Suggestion: Scottish verdicts. The not-proven verdict was abolished from 1 January 2026; current answers should be guilty or not guilty. Both also contain `based of`. Suggested correction: update the verdict question and use `based on`.

### Q2894
Raw question: "How long can you use your driving licence in the UK if you have a licence from another country?"; raw answer: "For up to 12 months"
Suggestion: Foreign driving licences. `Up to 12 months` is not universal; validity depends on country, licence type, and residency. Suggested correction: specify the relevant licence category and issuing country.

### Q2895
Raw question: "What British discovery was influential in the development of computer science and the modern-day computer?   The Radar"; raw answer: "The Turing machine"
Suggestion: Stray text. The question has `The Radar` appended. Suggested correction: remove the stray text.

### Q2899
Raw question: "Which British actor has recently won an Oscar?"; raw answer: "Sir Anthony Hopkins"
Suggestion: Anthony Hopkins. `Recently` is stale and `Antony` is misspelled. Suggested correction: remove the time-relative word, add the year, and use `Anthony`.

### Q2905
Raw question: "Which one of the following four changes did the Chartists did NOT campaign for?"; raw answer: "Elections every six years"
Suggestion: Chartists grammar. `Which ... did the Chartists did NOT` is incorrect. Suggested correction: `Which ... did the Chartists NOT campaign for?`

### Q2908
Raw question: "When did King Charles III start reining?"; raw answer: "In 2022"
Suggestion: Reigning. `Reining` is used for `reigning`. Suggested correction: replace it in each question.

### Q2921
Raw question: "Who invented the cash-dispensing ATM (automatic teller machine) or ‘cashpoint’?"; raw answer: "James Goodfellow"
Suggestion: ATM inventor. The invention is disputed between James Goodfellow and John Shepherd-Barron. Suggested correction: specify PIN-based cash machines, a patent, or the first installed ATM.

### Q2924
Raw question: "What name is given to the candelabrum lit during the eight-day holiday of Hanukkah?"; raw answer: "Menorah"
Suggestion: Hanukkah lamp. A Hanukkah lamp has nine lights including the shamash and is more precisely a hanukkiah; the explanation says eight candles. Suggested correction: use `hanukkiah` and describe the nine lights.

### Q2932
Raw question: "Which of the following lines from Shakespeare’s plays and poems is often still quoted?"; raw answer: "The Darling buds of May"
Suggestion: Sonnet 18. The explanation calls Sonnet 18 a play. Suggested correction: call it a poem/sonnet.

### Q2958
Raw question: "Which of the following is NOT classified as a criminal offence in the UK?"; raw answer: "Unfair dismissal or discrimination in the workplace"
Suggestion: Civil matter terminology. Unfair dismissal/discrimination is a civil claim or matter, not a `civil offence`. Suggested correction: use `civil claim` or `civil matter`.

### Q2959
Raw question: "When did Henry VIII start reining?"; raw answer: "In April 1509"
Suggestion: Reigning. `Reining` is used for `reigning`. Suggested correction: replace it in each question.

### Q2966
Raw question: "When driving in the UK, where do you need to display the tax disc which shows that the annual road tax has been paid?"; raw answer: "The windowscreen of the car"
Suggestion: Tax disc. Tax discs were abolished in 2014, and `Windowscreen` is misspelled. Suggested correction: state that vehicle tax is recorded electronically and no disc is displayed; use `windscreen` if needed.

### Q2976
Raw question: "What are the British scientists Sir Ian Wilmot and Keith Campbell famous for?"; raw answer: "The cloning of the first mammal, Dolly the sheep"
Suggestion: Ian Wilmut. The cloning scientist's surname is repeatedly misspelled `Wilmot`. Suggested correction: `Sir Ian Wilmut`.

### Q2986
Raw question: "When was Ireland divided into two countries?"; raw answer: "In 1922"
Suggestion: Partition of Ireland. Partition was legislated by the 1920 Act and implemented in 1921; the Irish Free State was established in 1922. Suggested correction: qualify the date/event.

### Q2998
Raw question: "Who is the fastest person to have sailed around the world single-handed?"; raw answer: "Dame Ellen MacArthur"
Suggestion: Ellen MacArthur. Her record is historical, not necessarily current. Suggested correction: add the 2005 date or update to the current record holder.

### Q3002
Raw question: "What do you need to drive a car in the UK?"; raw answer: "A driving licence, a valid motor insurance, a MOT certificate and the road tax"
Suggestion: Driving requirements. An MOT is not required for cars under three years old. Suggested correction: specify a car that is required to have an MOT or a car over three years old.

### Q3004
Raw question: "Who defeated the Vikings?"; raw answer: "King Alfred the Great"
Suggestion: Alfred and the Vikings. `Who defeated the Vikings?` is too broad because Alfred defeated a Viking army, not all Vikings. Suggested correction: identify the Viking army and the Battle of Edington in 878.

### Q3032
Raw question: "What name is given to the celebration when people in Great Britain set off fireworks at home or in special displays on the 5th of November?"; raw answer: "Bonfire night"
Suggestion: Bonfire Night. `Bonfire Night` and `Fireworks Night` are both plausible names. Suggested correction: remove the ambiguous distractor or ask which event commemorates the Gunpowder Plot.

### Q3034
Raw question: "Who has control over policy and laws governing defence, foreign affairs, immigration, taxation and social security in Northern Ireland?"; raw answer: "The central UK government"
Suggestion: Devolved taxation and social security. The questions state reserved powers too absolutely; some tax and social-security powers are devolved. Suggested correction: restrict the claim to genuinely reserved matters.

### Q3037
Raw question: "The devolved governments in Scotland, Wales and Northern Ireland cannot control policies and laws governing taxation and social security:"; raw answer: "True"
Suggestion: Devolved taxation and social security. The questions state reserved powers too absolutely; some tax and social-security powers are devolved. Suggested correction: restrict the claim to genuinely reserved matters.

### Q3054
Raw question: "Who built a wall in the north of England to keep out the Picts (ancestors of the Scottish people)?"; raw answer: "Emperor Hadrian"
Suggestion: Hadrian's Wall. The wall was not simply built to keep out later Picts, and Picts were not ancestors of all Scottish people. Suggested correction: ask which emperor ordered it to defend the northern frontier of Roman Britain.

### Q3059
Raw question: "Which of the following countries were granted their independence in 1947 (choose THREE answers)?"; raw answer: ["India","Pakistan","Ceylon (Sri Lanka)"]
Suggestion: Independence dates. Ceylon became independent in 1948, leaving only India and Pakistan in 1947. Suggested correction: ask for two 1947 answers or change the dates/question.

### Q3069
Raw question: "Carrying a weapon is a criminal offence, unless it is for self-defence:"; raw answer: "False"
Suggestion: Carrying weapons. The explanation is overbroad; legality depends on weapon, location, lawful authority, and reasonable excuse. Suggested correction: state the rule for carrying an offensive weapon in public without lawful authority or reasonable excuse.

### Q3076
Raw question: "Where did the Vikings come from?"; raw answer: "Denmark and Norway"
Suggestion: Viking origins. Sweden is omitted from the answer. Suggested correction: use `Denmark, Norway and Sweden` or `Scandinavia`.

### Q3101
Raw question: "The Welsh government has 30 Senedd members."; raw answer: "False"
Suggestion: Welsh Government and Senedd. The explanation says the Welsh Government has Senedd members. Suggested correction: explain that the Senedd is the 60-member legislature and the Welsh Government is the executive.

### Q3109
Raw question: "What was the name of the European Union when it was first established?"; raw answer: "European Economic Community"
Suggestion: EEC and EU. The EEC was established in 1957; the EU was established in 1993. Suggested correction: ask for the organisation established in 1957 that later contributed to the EU.

### Q3132
Raw question: "What name was given to those who supported the king during the Civil War that began in 1642?"; raw answer: "The Cavaliers"
Suggestion: Cavaliers. `The Suffragettes` appears twice and `The Roundheads` is missing as a distractor. Suggested correction: replace the duplicate with `The Roundheads`.

### Q3140
Raw question: "UK laws ensure that people are not treated unfairly in any area of life or work because of their age, disability, sex, pregnancy and maternity, race, religion or belief, sexuality or marital status:"; raw answer: "True"
Suggestion: Equality Act. The protected-characteristic list is incomplete/inaccurate: it omits gender reassignment and uses marital status instead of marriage/civil partnership. Suggested correction: use the Equality Act list and specify covered areas.

### Q3176
Raw question: "Do you need a TV licence for watching TV on a mobile phone?"; raw answer: "Yes"
Suggestion: TV licence on a phone. A licence is required for live TV or BBC iPlayer, not all viewing on a mobile. Suggested correction: state the live-TV/BBC iPlayer rule.

### Q3183
Raw question: "When was slavery abolished throughout the British Empire?"; raw answer: "1833"
Suggestion: Slavery abolition. The 1833 Act abolished slavery in most of the Empire, not throughout all territories. Suggested correction: qualify `throughout` and use the formal Act name where appropriate.

### Q3201
Raw question: "Who is in charge of appointing the local Chief Constable?"; raw answer: "Police and Crime Commissioners"
Suggestion: Chief Constable appointments. Police and Crime Commissioners are not the universal arrangement across the UK. Suggested correction: limit the question to most English and Welsh police areas outside London.

### Q3203
Raw question: "How many British died on the first day alone of the Battle of Somme?"; raw answer: "60,000"
Suggestion: Battle of the Somme. `60,000` was the first-day casualty figure, not the number who died. Suggested correction: change `died` to `casualties` or provide the approximate death figure.

### Q3204
Raw question: "When was the first Union flag created?"; raw answer: "1606"
Suggestion: Union Flag explanation. The word `untied` is used instead of `united`. Suggested correction: replace it.

### Q3209
Raw question: "People on the electoral register with ages between 18 and 70 can be asked to serve on a jury."; raw answer: "True"
Suggestion: Jury age. The upper age of 70 is outdated. Suggested correction: use the current generally applicable upper age of 75.

### Q3234
Raw question: "What is the name of the first Danish king to rule in England?"; raw answer: "Canute"
Suggestion: First Danish king in England. Sweyn Forkbeard was the first Danish king to rule England; Canute followed. Suggested correction: add Sweyn Forkbeard or specify Canute's later reign.

### Q3236
Raw question: "It is a civil offence to owe money to someone and you might be taken to court."; raw answer: "True"
Suggestion: Civil debt. Owing money is a civil matter/debt claim, not a `civil offence`. Suggested correction: say a creditor may take a debtor to civil court.

### Q3249
Raw question: "Which TWO of the following British athletes have won gold medals in the Olympic Games?"; raw answer: ["Dame Kelly Holmes","Jessica Enis"]
Suggestion: Jessica Ennis. `Jessica Enis` is misspelled. Suggested correction: `Jessica Ennis`.

### Q3252
Raw question: "Which TWO of the following are examples of criminal offences:"; raw answer: ["Selling tobacco to anyone under the age of 18","Smoking in public places"]
Suggestion: Criminal offences and smoking. Smoking outdoors in public is not generally a criminal offence. Suggested correction: specify smoking in enclosed public places or workplaces.

### Q3267
Raw question: "What does the UK offer to its permanent residents or citizens?"; raw answer: "A right to join in the election of a government"
Suggestion: Residents' voting rights. Permanent residents do not universally have voting rights; eligibility depends on nationality and election. Suggested correction: ask about British citizens or eligible voters.

### Q3269
Raw question: "What do you need to apply to become a permanent resident or citizen of the UK (choose TWO options)?"; raw answer: ["To be able to speak and read English","A good understanding of life in the UK"]
Suggestion: Settlement requirements. The explanation answers a different question about resident rights. Suggested correction: explain the language and Life in the UK requirements, including exemptions.

### Q3270
Raw question: "What does the UK offer to its residents or citizens (choose FIVE answers)?"; raw answer: ["Freedom of belief and religion","Freedom of speech","Freedom from unfair discrimination","A right to a fair trial","A right to join in the election of a government"]
Suggestion: Residents' voting rights. Permanent residents do not universally have voting rights; eligibility depends on nationality and election. Suggested correction: ask about British citizens or eligible voters.

### Q3285
Raw question: "British values and principles are based on history and traditions and are protected by law, customs and expectations."; raw answer: "True"
Suggestion: British values. The explanation discusses Crown Dependencies rather than democracy, rule of law, liberty, tolerance, and community participation. Suggested correction: replace the explanation with one relevant to the statement.

### Q3287
Raw question: "As part of the citizenship ceremony, new citizens pledge their loyalty to the United Kingdom and to respect its rights and freedoms."; raw answer: "True"
Suggestion: Citizenship ceremony. The explanation discusses the national anthem rather than the citizenship pledge. Suggested correction: explain the loyalty/respect pledge.

### Q3293
Raw question: "What did the ‘Bill of Rights‘ confirm in 1689?"; raw answer: "The rights of Parliament and the limits of the king‘s power"
Suggestion: Bill of Rights. Parliamentary freedom of speech is also part of the Bill of Rights, making the distractor ambiguous. Suggested correction: specify parliamentary freedom of speech or replace the distractor.

### Q3294
Raw question: "Who designed the Clifton Suspension Bridge located over the Avon George?"; raw answer: "Isambard Kingdom Brunel"
Suggestion: Avon Gorge. `Avon George` is a place-name typo. Suggested correction: `Avon Gorge`.

### Q3307
Raw question: "Which of the following crosses does NOT form part of the Union Flag?"; raw answer: "The cross of St David, patron saint of Wales"
Suggestion: Union Flag explanation. The word `untied` is used instead of `united`. Suggested correction: replace it.

### Q3313
Raw question: "What was the name of the first cloned mammal?"; raw answer: "Dolly"
Suggestion: Ian Wilmut. `Ian Wilmot` is repeatedly misspelled. Suggested correction: `Sir Ian Wilmut`.

### Q3327
Raw question: "Which British scientist led the development of the atomic bomb?"; raw answer: "Ernest Rutherford"
Suggestion: Atomic bomb leadership. Rutherford died before the Manhattan Project and did not lead atomic-bomb development; one record has no correct option. Suggested correction: ask about the Manhattan Project or a correct scientist/project.

### Q3331
Raw question: "Which two scientists led a team which was the first to succeed in cloning a mammal, Dolly the sheep?"; raw answer: "Sir Ian Wilmot and Keith Campbell"
Suggestion: Ian Wilmut. `Ian Wilmot` is repeatedly misspelled. Suggested correction: `Sir Ian Wilmut`.

### Q3342
Raw question: "During which movement the Parliament passed laws giving women the right to equal pay and made it illegal for employees to discriminate against women because of their gender:"; raw answer: "The Swinging Sixties"
Suggestion: Equal Pay and Sex Discrimination Acts. The Acts were passed in 1970 and 1975, not simply during the Swinging Sixties; `employees` should be `employers`. Suggested correction: use the correct dates and wording.

### Q3382
Raw question: "What are the British scientists Sir Ian Wilmot and Keith Campbell famous for?"; raw answer: "The cloning of the first mammal, Dolly the sheep"
Suggestion: Ian Wilmut. `Ian Wilmot` is repeatedly misspelled. Suggested correction: `Sir Ian Wilmut`.

### Q3417
Raw question: "The UK is not a full member of the European Union because it does not use the Euro currency:"; raw answer: "False"
Suggestion: UK and the EU. The explanation says the UK is still an EU member. Suggested correction: state that the UK is no longer an EU member and correct the true/false key.

### Q3418
Raw question: "Who was the British Minister after Margaret Thatcher?"; raw answer: "John Major"
Suggestion: John Major. `British Minister` is ambiguous. Suggested correction: ask who was Prime Minister after Margaret Thatcher.

### Q3421
Raw question: "What animal is represented in the Welsh flag?"; raw answer: "A dragon"
Suggestion: Union Flag explanation. The word `untied` is used instead of `united`. Suggested correction: replace it.

### Q3434
Raw question: "What animal was cloned by scientists Sir Ian Wilmot and Keith Campbell?"; raw answer: "A sheep"
Suggestion: Ian Wilmut. `Ian Wilmot` is repeatedly misspelled. Suggested correction: `Sir Ian Wilmut`.

### Q3458
Raw question: "Who defeated the Vikings?"; raw answer: "King Alfred the Great"
Suggestion: Alfred and the Vikings. `Who defeated the Vikings?` is too broad because Alfred defeated a Viking army, not all Vikings. Suggested correction: identify the Viking army and the Battle of Edington in 878.

### Q3465
Raw question: "Which of the following statements about Mary, Queen of the Scotland, is NOT true?"; raw answer: "She was a Protestant"
Suggestion: Mary, Queen of Scots. `Queen of the Scotland` is malformed and an option says `She was kept her prisoner`. Suggested correction: use `Mary, Queen of Scots` and complete the option as `She was kept prisoner for about 20 years`.

### Q3471
Raw question: "Which Act abolished slavery throughout the British Empire in 1833?"; raw answer: "The Emancipation Act"
Suggestion: Slavery abolition. The 1833 Act abolished slavery in most of the Empire, not throughout all territories. Suggested correction: qualify `throughout` and use the formal Act name where appropriate.

### Q3475
Raw question: "The Welsh dragon on the Welsh flag does not appear on the Union Flag because, when the first Union Flag was created in 1606 from the flags of Scotland and England, the Principality of Wales was already untied with England:"; raw answer: "True"
Suggestion: Union Flag explanation. The word `untied` is used instead of `united`. Suggested correction: replace it.

### Q3482
Raw question: "How many Russian and Polish Jews came to Britain to escape prosecution between 1870 and 1914?"; raw answer: "Around 120,000"
Suggestion: Persecution. `Prosecution` should be `persecution` in the migration question.

### Q3485
Raw question: "When was the first television broadcast made?"; raw answer: "In 1932"
Suggestion: First television broadcast. The answer is only correct for a specified Baird milestone. Suggested correction: identify the London-to-Glasgow broadcast or another defined milestone.

### Q3494
Raw question: "Under which Act was the United Kingdom of Great Britain created?"; raw answer: "The Act of Union"
Suggestion: Kingdom of Great Britain. The 1707 Acts created the Kingdom of Great Britain; the United Kingdom of Great Britain and Ireland arose from the 1800 Act effective in 1801. Suggested correction: specify which state and Act are meant.

### Q3497
Raw question: "When did Henry VIII start reining?"; raw answer: "In April 1509"
Suggestion: Henry VIII. `When did Henry VIII start reining?` contains a typo. Suggested correction: `When did Henry VIII start reigning?`

### Q3502
Raw question: "Who was Prime Minister in England from 1721 to 1742?"; raw answer: "Sir Robert Walpole"
Suggestion: Robert Walpole. `Prime Minister in England` is historically inaccurate; the office concerned Great Britain. Suggested correction: `Prime Minister of Great Britain`.

### Q3505
Raw question: "When was Ireland divided into two countries?"; raw answer: "In 1922"
Suggestion: Partition of Ireland. `1922` refers to the Irish Free State, while partition was legislated in 1920 and took effect in 1921. Suggested correction: specify the event being dated.

### Q3516
Raw question: "What was the name of the project through which the atomic bomb was developed?"; raw answer: "The Manhattan project"
Suggestion: Manhattan Project. The explanation wrongly connects Rutherford's scientists to the atomic-bomb project. Suggested correction: describe the US-led Manhattan Project and remove Rutherford's involvement.

### Q3525
Raw question: "After the Second World War, England was exhausted economically."; raw answer: "True"
Suggestion: Post-war economy. The standard fact concerns the United Kingdom/Britain, not England alone. Suggested correction: use `United Kingdom`.

### Q3534
Raw question: "What do Ian McEwan, Hilary Mantel and Julian Barnes have in common?"; raw answer: "They were awarded with the Man Booker Prize for Fiction"
Suggestion: Booker Prize eligibility. The historical Commonwealth/Ireland/Zimbabwe restriction is obsolete. Suggested correction: use current eligibility and date the question.

### Q3535
Raw question: "Who was Henry Purcell?"; raw answer: "An organist at Westminster Abbey"
Suggestion: Henry Purcell. Both `An organist at Westminster Abbey` and `An opera composer` are correct. Suggested correction: remove one or ask specifically about his Westminster Abbey post.

### Q3542
Raw question: "What was the population of the UK in 1998?"; raw answer: "57 million"
Suggestion: UK population in 1998. The answer `57 million` is too low; the population was about 58.5 million. Suggested correction: use about 58.5 million.

### Q3552
Raw question: "What was the population of the UK in 1600?"; raw answer: "Just over 4 million"
Suggestion: Historical UK populations. The UK did not exist in some of the named years, and several figures describe England or Great Britain instead. Suggested correction: specify the historical territory and use its corresponding population. | Historical population territory. The UK did not exist in 1600 or 1700, and the figures do not match the stated territory. Suggested correction: ask for England/Great Britain or specify the historical territories.

### Q3554
Raw question: "When is the Sikh festival which celebrates the founding of the Sikh community (Khalsa) and known as Vaisakhi celebrated?"; raw answer: "14th of April"
Suggestion: Vaisakhi date. Vaisakhi is generally observed on 13 or 14 April rather than fixed at 14 April. Suggested correction: use `13 or 14 April`.

### Q3558
Raw question: "Which landscape architect designed grounds around country houses so that the landscape appeared to be natural, with grass, trees and lakes?"; raw answer: "Lancelot ‘Capability’ Brown"
Suggestion: Capability Brown. Edwin Lutyens could not have worked with Capability Brown; Brown died in 1783 and Lutyens was born in 1869. Suggested correction: remove that sentence. | Capability Brown. The explanation says Brown worked with Edwin Lutyens, who lived a century later. Suggested correction: remove that sentence.

### Q3565
Raw question: "Which flower is associated with Northern Ireland?"; raw answer: "Shamrock"
Suggestion: Shamrock. A shamrock is a plant/symbol, not a flower. Suggested correction: ask for the plant or symbol associated with Northern Ireland, or use the flax flower if asking for a flower. | Shamrock. A shamrock is a plant/symbol, not a flower. Suggested correction: ask for the associated plant/symbol or use the flax flower.

### Q3580
Raw question: "What was the population of the UK in 1801?"; raw answer: "8 million"
Suggestion: Historical population territory. The UK did not exist in 1600 or 1700, and the figures do not match the stated territory. Suggested correction: ask for England/Great Britain or specify the historical territories.

### Q3603
Raw question: "Which of the following is the official church of the state?"; raw answer: "The Church of England"
Suggestion: Established church. There is no single official church of the United Kingdom; the Church of England is established in England. Suggested correction: ask for the established church in England.

### Q3604
Raw question: "What was the population of the UK in 1700?"; raw answer: "5 million"
Suggestion: Historical UK populations. The UK did not exist in some of the named years, and several figures describe England or Great Britain instead. Suggested correction: specify the historical territory and use its corresponding population. | Historical population territory. The UK did not exist in 1600 or 1700, and the figures do not match the stated territory. Suggested correction: ask for England/Great Britain or specify the historical territories.

### Q3609
Raw question: "What British sportsmen holds a number of English Test cricket records?"; raw answer: "Sir Ian Botham"
Suggestion: Cricket records. `What British sportsmen holds` has subject-number disagreement. Suggested correction: `Which British sportsman holds...`.

### Q3611
Raw question: "What TWO names are given to the people who give tours at the Tower of London?"; raw answer: ["Beefeaters","Yeoman Wardens"]
Suggestion: Tower of London. `Yeoman Wardens` should be `Yeoman Warders`.

### Q3615
Raw question: "When is St Patrick’s Day, patron to of Northern Ireland, celebrated?"; raw answer: "17th of March"
Suggestion: St Patrick's Day. `patron to of Northern Ireland` is malformed and St Patrick is patron saint of Ireland. Suggested correction: rewrite the sentence with `patron saint of Ireland`.

### Q3622
Raw question: "What name is given to the Church of England in Scotland and the United States?"; raw answer: "The Episcopal Church"
Suggestion: Church of England names. The Scottish Episcopal Church and US Episcopal Church are separate churches, not simply names for the Church of England. Suggested correction: ask separately for the Anglican church in Scotland or the United States.

### Q3625
Raw question: "Which TWO religions celebrate Diwali?"; raw answer: ["Hindu","Sikh"]
Suggestion: Diwali communities. The two-answer key is not unique because other communities, including Jains and some Buddhists, celebrate Diwali. Suggested correction: specify the intended communities or ask for all applicable traditions.

### Q3630
Raw question: "By what other TWO names is the Church of England known for?"; raw answer: ["The Anglican Church","The Episcopal Church"]
Suggestion: Church of England names. The Scottish Episcopal Church and US Episcopal Church are separate churches, not simply names for the Church of England. Suggested correction: ask separately for the Anglican church in Scotland or the United States.

### Q3632
Raw question: "In which city is the Welsh Assembly building, also known as Senedd, located?"; raw answer: "Cardiff Bay"
Suggestion: Senedd terminology. `SMs`/`AMs` is obsolete or incorrect. Suggested correction: use `MSs`/`Members of the Senedd` and distinguish the legislature from the Government.

### Q3644
Raw question: "When is the Mercury Music Prize awarded?"; raw answer: "September"
Suggestion: Mercury Prize date. The ceremony date varies by year and is not fixed to September. Suggested correction: say it is awarded annually on a date that varies.

### Q3646
Raw question: "What name is given to the candelabrum lit during the eight-day holiday of Hanukkah?"; raw answer: "Menorah"
Suggestion: Hanukkah lamp. The explanation describes eight candles, but a hanukkiah has nine lights including the shamash. Suggested correction: use `hanukkiah` and describe the nine lights.

### Q3651
Raw question: "When does Lent take place?"; raw answer: "40 days before Easter"
Suggestion: Lent. Lent begins on Ash Wednesday; it contains 40 fasting days because Sundays are excluded, not simply 40 calendar days before Easter. Suggested correction: state both facts.

### Q3652
Raw question: "Which of the following national galleries is NOT located in London?"; raw answer: "The National Museum"
Suggestion: National gallery. `The National Museum` is a museum, not a gallery. Suggested correction: make the category consistent or name a specific institution such as National Museum Cardiff.

### Q3654
Raw question: "How old is the clock at the house of the parliament in London, also known as ‘Big Ben’?"; raw answer: "150 years old"
Suggestion: Big Ben clock age. Big Ben is the bell, not the clock, and the age answer is time-dependent. Suggested correction: ask when the Great Clock was completed or ask what Big Ben is.

### Q3662
Raw question: "What is celebrated during Diwali?"; raw answer: "The victory of good over evil and the gaining of knowledge"
Suggestion: Spelling. `Diwalli`/`Hannukah` are misspellings. Suggested correction: `Diwali` and `Hanukkah`.

### Q3665
Raw question: "Which British actor has recently won an Oscar?"; raw answer: "Sir Anthony Hopkins"
Suggestion: Actors and Oscars. `Recently` is stale and explanations misspell `Anthony`. Suggested correction: remove the time-relative wording, add the year, and use `Anthony`.

### Q3680
Raw question: "What is the note with the highest value in the UK?"; raw answer: "£50"
Suggestion: Highest UK note. £50 is the highest Bank of England denomination, but Scottish and Northern Irish banks issue £100 notes. Suggested correction: specify Bank of England notes or explain the UK-wide distinction.

### Q3683
Raw question: "Which British actor has recently won an Oscar?"; raw answer: "Sir Anthony Hopkins"
Suggestion: Actors and Oscars. `Recently` is stale and explanations misspell `Anthony`. Suggested correction: remove the time-relative wording, add the year, and use `Anthony`.

### Q3689
Raw question: "What is the coin with the highest value in the UK?"; raw answer: "£2"
Suggestion: Highest UK coin. £2 is the highest standard circulating denomination, but £5/£10 commemorative coins exist. Suggested correction: specify `highest-value standard circulating coin`.

### Q3696
Raw question: "Who led the group of Catholics who tried to kill the Protestant king with a bomb in the Houses of the Parliament in 1605?"; raw answer: "Guy Fawkes"
Suggestion: Gunpowder Plot. Robert Catesby led the group; Guy Fawkes guarded the explosives. Suggested correction: key Catesby or reword the question to ask about the explosives.

### Q3700
Raw question: "What name is given to the day when people play jokes on each other until midday?"; raw answer: "April’s Fool Day"
Suggestion: April Fool's Day. `April's Fool Day` is misspelled. Suggested correction: `April Fool's Day` or `April Fools' Day`.

### Q3712
Raw question: "Which British actor has recently won an Oscar?"; raw answer: "Colin Firth"
Suggestion: Actors and Oscars. `Recently` is stale and explanations misspell `Anthony`. Suggested correction: remove the time-relative wording, add the year, and use `Anthony`.

### Q3713
Raw question: "When is St Andrews Day, patron of the Scotland, celebrated?"; raw answer: "30th of November"
Suggestion: St Andrew's Day. `patron of the Scotland` is malformed. Suggested correction: `St Andrew's Day, patron saint of Scotland`.

### Q3726
Raw question: "What was the population of the UK in 2005?"; raw answer: "Just under 60 million"
Suggestion: UK population in 2005. The population was just over 60 million, not just under. Suggested correction: change the key and option.

### Q3727
Raw question: "What game do usually people play at Halloween?"; raw answer: "Trick or treat"
Suggestion: Halloween activity. `What game do usually people play` is ungrammatical and trick-or-treat is an activity, not a game. Suggested correction: ask which activity children commonly take part in.

### Q3728
Raw question: "What is the most well-known gallery in Wales?"; raw answer: "The National Museum"
Suggestion: Welsh gallery. `The National Museum` is a museum, not a gallery. Suggested correction: ask for a museum or name an actual gallery.

### Q3729
Raw question: "The Man Booker Prize for Fiction is awarded annually for the best fiction novel written by an author from:"; raw answer: "The Commonwealth, Ireland or Zimbabwe"
Suggestion: Booker Prize eligibility. The historical Commonwealth/Ireland/Zimbabwe restriction is obsolete. Suggested correction: use current eligibility and date the question.

### Q3732
Raw question: "Who can get a 50% discount on their TV licences?"; raw answer: "Blind people"
Suggestion: Free TV licence. Blind people may qualify for a 50% discount, but a free licence for someone 75+ requires Pension Credit. Suggested correction: state the Pension Credit condition. | Free TV licence. Age 75+ alone is insufficient; the applicant must receive Pension Credit. Suggested correction: include the Pension Credit condition.

### Q3739
Raw question: "On Remembrance Day, there is a two-minute silence at 11 AM to commemorate those who died fighting during the First World War?"; raw answer: "True"
Suggestion: Remembrance Day. The silence commemorates those who died in all wars and conflicts, not only the First World War. Suggested correction: use `in wars and conflicts`.

### Q3742
Raw question: "What was the population of the UK in 1851?"; raw answer: "20 million"
Suggestion: UK population in 1851. The UK including Ireland had about 27 million people; 20 million is closer to Great Britain. Suggested correction: specify the territory or update the figure.

### Q3792
Raw question: "What was the population of the UK in 1851?"; raw answer: "20 million"
Suggestion: UK population in 1851. The UK including Ireland had about 27 million people; 20 million is closer to Great Britain. Suggested correction: specify the territory or update the figure.

### Q3794
Raw question: "What is the note with the highest value in the UK?"; raw answer: "£50"
Suggestion: Highest UK note. £50 is the highest Bank of England denomination, but Scottish and Northern Irish banks issue £100 notes. Suggested correction: specify Bank of England notes or explain the UK-wide distinction.

### Q3796
Raw question: "How old do you need to be to be able to apply for a free TV licence?"; raw answer: "Over 75"
Suggestion: Free TV licence. Age 75+ alone is insufficient; the applicant must receive Pension Credit. Suggested correction: include the Pension Credit condition.

### Q3797
Raw question: "What time do usually pubs open on Sundays in the UK?"; raw answer: "12 pm"
Suggestion: Sunday pub opening. `What time do usually pubs open` is malformed. Suggested correction: `What time do pubs usually open on Sundays?`

### Q3810
Raw question: "What was the population of the UK in 1901?"; raw answer: "40 million"
Suggestion: UK population in 1901. The UK including Ireland had about 46 million people, not 40 million. Suggested correction: update the figure or specify Great Britain.

### Q3814
Raw question: "When is the Jewish celebration known as Hanukkah normally celebrated?"; raw answer: "November or December"
Suggestion: Spelling. `Diwalli`/`Hannukah` are misspellings. Suggested correction: `Diwali` and `Hanukkah`.

### Q3816
Raw question: "Which TWO of the following water sports are popular in the UK?"; raw answer: ["Rowing","Sailing"]
Suggestion: Water sports. Surfing is also popular in the UK, so the two-answer key is not unique. Suggested correction: replace the distractor or specify the intended source pair.

### Q3821
Raw question: "The small claims procedure is used in England and Wales for minor disputes for:"; raw answer: "Claims of less than £10,000"
Suggestion: Small claims. Scotland's current limit is £5,000, not £3,000. Suggested correction: state £10,000 for England/Wales, £5,000 for Scotland, and £3,000 for Northern Ireland.

### Q3828
Raw question: "What is the minimum age requirement to drive a mopped in the UK?"; raw answer: "16"
Suggestion: Moped. `Mopped` is a typo. Suggested correction: `moped`.

### Q3829
Raw question: "How many countries formed the European Economic Community (EEC) when it was first created in 1957?"; raw answer: "Six"
Suggestion: EEC and EU. The EEC was the 1957 predecessor; the EU was established in 1993. Suggested correction: distinguish the Treaty of Rome/EEC from the later EU.

### Q3832
Raw question: "What can living people donate that may help other people with injuries or illnesses (choose TWO options)?"; raw answer: ["Blood","A kidney"]
Suggestion: Living organ donation. A living donor can donate part of a liver, so the two-answer key is not unique. Suggested correction: explicitly say `part of their liver` and include it, or replace that option.

### Q3833
Raw question: "Where is the office of the MPs located?"; raw answer: "The House of Commons"
Suggestion: MP offices. MPs have parliamentary and constituency offices. Suggested correction: ask specifically about a parliamentary office or acknowledge both locations.

### Q3837
Raw question: "How can MPs be contacted (choose TWO options)?"; raw answer: ["By letter","By phoning their constituency office"]
Suggestion: Contacting MPs. Facebook can be a valid contact route, and the explanation uses obsolete `SMs`. Suggested correction: specify formal methods, replace the distractor, and use `MSs`.

### Q3859
Raw question: "How can you visit the UK Parliament (choose TWO options)?"; raw answer: ["Writing to your local MP to ask for tickets","Queueing on the day at the public entrance"]
Suggestion: Visiting Parliament. Multiple listed choices can be valid ways to visit Parliament. Suggested correction: distinguish public-gallery attendance from tours and make the requested pair unique. | Visiting Parliament. Arranging a tour is also a valid way to visit, so the two-answer key is not unique. Suggested correction: specify public-gallery entry or include all valid routes.

### Q3869
Raw question: "How much do you have to pay to visit the Palace of Westminster?"; raw answer: "The entrance to the Palace of Westminster is free"
Suggestion: Palace of Westminster cost. Some visits/tours are paid even if public-gallery entry can be free. Suggested correction: ask specifically about attending a debate through the public gallery.

### Q3871
Raw question: "What is the main function of the Council of Europe?"; raw answer: "Protect and promote human rights"
Suggestion: Council of Europe membership. The explanation/options use 47 members; the current Council of Europe has 46. Suggested correction: update the answer and explanation. | Council of Europe. The current membership is 46, not 47. Suggested correction: update the answer/options and explanations.

### Q3876
Raw question: "Which of the following civil laws include disputes between landlords and tenants over issues such as repairs and eviction?"; raw answer: "Housing law"
Suggestion: Grammar. `suck as repairs` should be `such as repairs`.

### Q3887
Raw question: "Which of the following is NOT classified as a criminal offence in the UK?"; raw answer: "Unfair dismissal or discrimination in the workplace"
Suggestion: Civil matter terminology. Unfair dismissal/discrimination is a civil claim or matter, not a `civil offence`. Suggested correction: use `civil claim` or `civil matter`. | Civil offence terminology. Unfair dismissal/discrimination are civil claims or matters, not civil offences. Suggested correction: use `civil claim` or `civil matter`.

### Q3896
Raw question: "What name is given to the elected members of the Welsh government?"; raw answer: "SMs"
Suggestion: Senedd terminology. `SMs`/`AMs` is obsolete or incorrect. Suggested correction: use `MSs`/`Members of the Senedd` and distinguish the legislature from the Government.

### Q3906
Raw question: "How many members does the Council of Europe have?"; raw answer: "47"
Suggestion: Council of Europe membership. The explanation/options use 47 members; the current Council of Europe has 46. Suggested correction: update the answer and explanation. | Council of Europe. The current membership is 46, not 47. Suggested correction: update the answer/options and explanations.

### Q3909
Raw question: "What Treaty established the European Economic Union in 1957?"; raw answer: "The Treaty of Rome"
Suggestion: EEC and EU. The EEC was the 1957 predecessor; the EU was established in 1993. Suggested correction: distinguish the Treaty of Rome/EEC from the later EU.

### Q3911
Raw question: "When did the King start reining?"; raw answer: "In 2022"
Suggestion: Reigning. `When did the King start reining?` should use `reigning`.

### Q3913
Raw question: "How do we call a set of principles by which a country is governed and which includes all of the institutions that are responsible for running the country and how their power is kept in check?"; raw answer: "Constitution"
Suggestion: Constitution definition. The opening `How do we call...` is unclear. Suggested correction: `What do we call a set of principles by which a country is governed...?`

### Q3917
Raw question: "How often are elections held for the Senedd?"; raw answer: "Every four years"
Suggestion: Senedd elections. The explanation uses the obsolete 60-member figure and `SMs`. Suggested correction: update membership/electoral details and use `MSs`.

### Q3935
Raw question: "On which of the following issues the  Northern Ireland Assembly CANNOT make decisions?"; raw answer: "Planning"
Suggestion: Northern Ireland devolved powers. Planning, social security, and some taxation are not all reserved to the central government; planning is devolved. Suggested correction: use a genuinely reserved matter such as defence, or explicitly describe limited devolved powers. | Northern Ireland Assembly powers. Planning is devolved, so it cannot be the answer to what the Assembly cannot decide. Suggested correction: use a reserved matter such as defence.

### Q3941
Raw question: "Who is married to the King of the United Kingdom?"; raw answer: "Camila, the Queen Consort"
Suggestion: Queen Camilla. `Camila, the Queen Consort` is misspelled and outdated. Suggested correction: `Camilla, Queen Camilla`.

### Q3942
Raw question: "What is the name of the building where the Senedd members meet?"; raw answer: "Senedd"
Suggestion: Senedd terminology. `SMs`/`AMs` is obsolete or incorrect. Suggested correction: use `MSs`/`Members of the Senedd` and distinguish the legislature from the Government.

### Q3944
Raw question: "When was the Treaty of Rome signed?"; raw answer: "25th March 1957"
Suggestion: EEC and EU. The EEC was the 1957 predecessor; the EU was established in 1993. Suggested correction: distinguish the Treaty of Rome/EEC from the later EU. | Treaty of Rome. The explanation incorrectly says the EU was originally called the EEC. Suggested correction: say the treaty established the EEC, predecessor of the EU.

### Q3946
Raw question: "How often are the general elections held in the UK?"; raw answer: "Every 5 years"
Suggestion: General elections. Elections may occur sooner than five years. Suggested correction: ask for the maximum normal interval.

### Q3954
Raw question: "What does the term ‘Hansard’ relate to?"; raw answer: "Official reports were proceedings in Parliament are published"
Suggestion: Hansard. The keyed option is grammatically unintelligible. Suggested correction: `The official reports in which proceedings in Parliament are published`.

### Q3955
Raw question: "In Wales, the jury has to listen to the evidence presented at the trial and then decide a verdict of ‘guilty’, ‘not guilty’ or ‘not proven’ based of what they have heard:"; raw answer: "﻿False"
Suggestion: Scottish/Welsh verdicts. `based of` should be `based on`; Q3955 also contains an invisible character in the option. Q4012 relies on the obsolete not-proven verdict. Suggested correction: clean the text and update current Scottish verdict law.

### Q3957
Raw question: "When driving in the UK, where do you need to display the tax disc which shows that the annual road tax has been paid?"; raw answer: "The windowscreen of the car"
Suggestion: Tax disc. Tax discs were abolished in 2014, and `Windowscreen` is misspelled. Suggested correction: state that vehicle tax is recorded electronically and no disc is displayed; use `windscreen` if needed. | Tax disc. Tax discs were abolished in 2014 and `windowscreen` is misspelled. Suggested correction: say vehicle tax is recorded electronically and no disc is displayed; use `windscreen` if needed.

### Q3962
Raw question: "What is the relationship between the monarch and the government?"; raw answer: "Advise, warn and encourage the government’s decisions"
Suggestion: Monarch and government. The answer says the monarch encourages government decisions. Suggested correction: say the monarch advises, warns, and encourages the government/Prime Minister.

### Q3964
Raw question: "Where can people facing domestic violence get help from (choose TWO options)?"; raw answer: ["The Citizens Advise Bureau","A solicitor"]
Suggestion: Domestic-violence help. NHS services can also provide help, so the two-answer key is not unique, and `Citizens Advise Bureau` is misspelled. Suggested correction: use `Citizens Advice` and make the intended applicable sources explicit.

### Q3974
Raw question: "How long does it take to donate blood?"; raw answer: "About an hour"
Suggestion: Blood donation duration. The donation itself takes roughly 5-10 minutes; about an hour describes the full appointment. Suggested correction: specify which duration is being tested. | Blood donation. About an hour is the full appointment; the donation itself is about 5-10 minutes. Suggested correction: specify which duration is intended.

### Q3978
Raw question: "Drinking in public can be a criminal offence and you can be fined or arrested for it:"; raw answer: "True"
Suggestion: Statement typo. `This stamens is true` should be `This statement is true`.

### Q3979
Raw question: "Whose details are NOT listed in the Phone Book?"; raw answer: "The King"
Suggestion: Phone Book. UK MEPs no longer exist and `SMs` is wrong, making the answer set stale/ambiguous. Suggested correction: date the question, remove MEPs, and use `MSs`.

### Q3981
Raw question: "How many members does the Senedd have?"; raw answer: "60"
Suggestion: Senedd membership. The current Senedd has 96 members; 96 is not offered. Suggested correction: replace the options/key and update the explanation.

### Q3988
Raw question: "Members of the Senedd (SMs) are elected every four years on the basis of:"; raw answer: "Proportional representation"
Suggestion: Senedd terminology. `SMs`/`AMs` is obsolete or incorrect. Suggested correction: use `MSs`/`Members of the Senedd` and distinguish the legislature from the Government.

### Q3996
Raw question: "Many MPs, SMs and MSPs hold regular local events where constituents can go in person to talk about issues that are of concern to them. These are known as:"; raw answer: "Local ‘surgeries’"
Suggestion: Senedd terminology. `SMs`/`AMs` is obsolete or incorrect. Suggested correction: use `MSs`/`Members of the Senedd` and distinguish the legislature from the Government.

### Q4001
Raw question: "How long can you use your driving licence in the UK if you have a licence from another country?"; raw answer: "For up to 12 months"
Suggestion: Foreign driving licences. `Up to 12 months` is not universal; validity depends on country, licence type, and residency. Suggested correction: specify the relevant licence category and issuing country. | Foreign driving licences. The 12-month rule is not universal. Suggested correction: specify the country category, residency, and licence type.

### Q4012
Raw question: "How many verdicts are possible in trials in Scotland?"; raw answer: "Three: ‘guilty’, ‘not guilty’ or ‘not proven’"
Suggestion: Scottish/Welsh verdicts. `based of` should be `based on`; Q3955 also contains an invisible character in the option. Q4012 relies on the obsolete not-proven verdict. Suggested correction: clean the text and update current Scottish verdict law.

### Q4027
Raw question: "Which of the following is NOT a role of the King:"; raw answer: "To inaugurate important business in the UK"
Suggestion: King's role. The explanation says `other counties` and contains malformed diplomatic wording. Suggested correction: use `other countries` and `in support of diplomatic relationships`.

### Q4030
Raw question: "Who has control over policy and laws governing defence, foreign affairs, immigration, taxation and social security in Northern Ireland?"; raw answer: "The central UK government"
Suggestion: Northern Ireland devolved powers. Planning, social security, and some taxation are not all reserved to the central government; planning is devolved. Suggested correction: use a genuinely reserved matter such as defence, or explicitly describe limited devolved powers.

### Q4031
Raw question: "The devolved governments in Scotland, Wales and Northern Ireland cannot control policies and laws governing taxation and social security:"; raw answer: "True"
Suggestion: Northern Ireland devolved powers. Planning, social security, and some taxation are not all reserved to the central government; planning is devolved. Suggested correction: use a genuinely reserved matter such as defence, or explicitly describe limited devolved powers.

### Q4039
Raw question: "Carrying a weapon is a criminal offence, unless it is for self-defence:"; raw answer: "False"
Suggestion: Carrying weapons. The explanation incorrectly says carrying any weapon is criminal; lawful authority/reasonable-excuse rules matter. Suggested correction: state the narrower public offensive-weapon rule.

### Q4045
Raw question: "Which of the following is NOT classified as a criminal offence in the UK?"; raw answer: "Unfair dismissal or discrimination in the workplace"
Suggestion: Civil matter terminology. Unfair dismissal/discrimination is a civil claim or matter, not a `civil offence`. Suggested correction: use `civil claim` or `civil matter`. | Civil offence terminology. Unfair dismissal/discrimination are civil claims or matters, not civil offences. Suggested correction: use `civil claim` or `civil matter`.

### Q4047
Raw question: "When are local elections for councillors held in most local authorities?"; raw answer: "In May"
Suggestion: Local elections. Elections are usually in May but not every year in every authority. Suggested correction: mention each council's election cycle.

### Q4053
Raw question: "What was the name of the European Union when it was first established?"; raw answer: "European Economic Community"
Suggestion: EEC and EU. The EEC was the 1957 predecessor; the EU was established in 1993. Suggested correction: distinguish the Treaty of Rome/EEC from the later EU.
