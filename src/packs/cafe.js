// English to French. "S" = Sam (learner), "L" = Camille (native French speaker from Lyon).
module.exports={key:"cafe",file:"au-cafe",title:"Au café",
use:[["Order a coffee with milk, politely.","Je voudrais un crème, s'il vous plaît."],["Ask for the check.","L'addition, s'il vous plaît."],["Ask if you can pay by card.","Je peux payer par carte ?"]],
sub:"After a flight, Sam and Camille stop at a café in Lyon. Greeting, ordering, paying and tipping, from English to French.",
footer:"Original dialogue written for this page. In France, menu prices include service by law, so a tip is optional; leaving a little extra for good service is common.",
lex:`j'ai faim|zhay FAN|I'm hungry (literally "I have hunger")
j'ai froid|zhay FRWAH|I'm cold
un café|uhn kah-FAY|a coffee|In a French café this means an espresso
un crème|uhn KREM|a coffee with steamed milk
un croissant|uhn krwah-SAHN|a croissant
un pain au chocolat|uhn pan oh shoh-koh-LAH|a chocolate pastry
bonjour|bohn-ZHOOR|hello, good morning
bonjour, madame|bohn-zhoor mah-DAHM|hello, ma'am
une table pour deux|ewn tahbl poor DUH|a table for two
s'il vous plaît|seel voo PLEH|please (formal)
parfait|par-FEH|perfect
installez-vous|an-stah-lay-VOO|have a seat (vous)
qu'est-ce que vous prenez|kes-kuh voo pruh-NAY|what will you have (vous)
je voudrais|zhuh voo-DREH|I would like
et|AY|and
je veux|zhuh VUH|I want|Sounds demanding when ordering
et moi|ay MWAH|and me
c'est tout|seh TOO|that's all
une carafe d'eau|ewn kah-rahf DOH|a jug of tap water|Free in French restaurants and cafés
sur place ou à emporter|sewr plah-soo ah ahn-por-TAY|for here or to go
c'est délicieux|seh day-lee-SYUH|it's delicious
bien sûr|byan SEWR|of course
après le vol|ah-preh luh VOL|after the flight
tout est délicieux|too-teh day-lee-SYUH|everything is delicious
l'addition|lah-dee-SYOHN|the check
voilà|vwah-LAH|here you go
je peux payer par carte|zhuh puh peh-yay par KART|can I pay by card
et le pourboire|ay luh poor-BWAHR|and the tip
le service est compris|luh sair-vee-seh kohm-PREE|service is included
un petit pourboire|uhn puh-tee poor-BWAHR|a small tip
si tu veux|see tew VUH|if you want
merci|mair-SEE|thank you
bonne journée|bon zhoor-NAY|have a nice day
au revoir|oh ruh-VWAHR|goodbye
qu'est-ce que sam prend|kes-kuh sahm PRAHN|what is Sam having
oui|WEE|yes
non|NOHN|no
un crème et un croissant|uhn krem ay uhn krwah-SAHN|a coffee with milk and a croissant
un café et un pain au chocolat|uhn kah-fay ay uhn pan oh shoh-koh-LAH|an espresso and a chocolate pastry
madame|mah-DAHM|ma'am`,
pages:[
{t:"The food",n:"What a French café serves, one word at a time.",l:[
["S","After that flight, I'm starving. Where do we eat?"],
["L","A café, of course. And I'm hungry too: {j'ai faim}. Same pattern as {j'ai froid}."],
["S","{J'ai faim}. What do they have?"],
["L","{Un café}, which here means an espresso. If you want milk, it's {un crème}."],
["S","{Un crème}. And to eat?"],
["L","{Un croissant}, of course. Or {un pain au chocolat}. Trust me on that one."],
["S","{Un pain au chocolat}. Sold."]]},
{t:"Walking in",n:"The first rule of any French café: say hello.",l:[
["L","First rule: always say {bonjour} when you walk in. To the woman at the counter: {bonjour, madame}."],
["S","{Bonjour, madame}. {Une table pour deux}, {s'il vous plaît} ?"],
["L","{Parfait}. She says {installez-vous}: have a seat."],
["S","{Installez-vous}. And how do I call the server? Not garçon, right?"],
["L","Never garçon. It sounds rude now. Catch her eye and say {s'il vous plaît}."]]},
{t:"Ordering",n:"Polite ordering with je voudrais.",q:[["Qu'est-ce que Sam prend ?","Un crème et un croissant","Un café et un pain au chocolat"]],l:[
["L","She comes over: {qu'est-ce que vous prenez ?}"],
["S","{Je voudrais} {un crème} {et} {un croissant}, {s'il vous plaît}."],
["L","Good: {je voudrais}, not {je veux}. {Et moi}, {un café} {et} {un pain au chocolat}. {C'est tout}."],
["S","And water? Do we have to buy it?"],
["L","No. Ask for {une carafe d'eau}. Tap water is free."],
["S","And at a bakery, they asked me {sur place ou à emporter}. What was that?"],
["L","For here or to go. {Sur place ou à emporter} ?"]]},
{t:"Eating",n:"Mostly French. Compliments and small talk.",l:[
["S","{C'est délicieux} ! Is that how you say delicious?"],
["L","{Bien sûr}. And pilots have a saying: {après le vol}, {tout est délicieux}."],
["S","After the flight, everything is delicious. True. {Un café} ?"],
["L","{Oui}, {un café}, {s'il vous plaît}. {J'ai froid}."]]},
{t:"Paying",n:"All French. The check, the card and the tip.",q:[["Le service est compris ?","Oui","Non"]],l:[
["S","{L'addition}, {s'il vous plaît}."],
["L","{Voilà}."],
["S","{Je peux payer par carte} ?"],
["L","{Bien sûr}."],
["S","{Et le pourboire} ?"],
["L","{Le service est compris}: service is included in the price. {Un petit pourboire}, {si tu veux}."],
["S","{Merci}. {Bonne journée} !"],
["L","{Au revoir} !"]]}
]};
