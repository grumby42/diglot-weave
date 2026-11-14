module.exports={key:"ciber",use:[["Ask the user what happened.", "¿Qué pasó?"], ["Say you're going to isolate the computer from the network.", "Voy a aislar el equipo de la red."], ["Tell the client you don't know yet and will give an update at three.", "Todavía no lo sabemos. Les doy otra actualización a las tres."]],file:"respuesta-a-incidentes",title:"Respuesta a incidentes",
sub:"A phishing click becomes a ransomware call. Sam ends by briefing the client in Spanish.",
footer:"Original dialogue written for this pack. Security terms vary by country, and English loanwords are common.",
lex:`un ataque|oon ah-TAH-keh|an attack
ataque|ah-TAH-keh|attack
contraseña|kohn-trah-SEH-nyah|password
correo|koh-RREH-oh|email
enlace|ehn-LAH-seh|link
archivo|ahr-CHEE-boh|file
archivos|ahr-CHEE-bohs|files
red|rrehd|network
servidor|sehr-bee-DOHR|server
usuario|oo-SWAH-ryoh|user
usuarios|oo-SWAH-ryohs|users
pasó|pah-SOH|happened
recibí|rreh-see-BEE|I received
raro|RRAH-roh|strange
hiciste|ee-SEES-teh|you did
clic|kleek|click
hice|EE-seh|I did
escribiste|ehs-kree-BEES-teh|you typed
lo siento|loh SYEHN-toh|I'm sorry
no te preocupes|noh teh preh-oh-KOO-pehs|don't worry
cambia|KAHM-byah|change
bloquear|bloh-keh-AHR|to block
cuenta|KWEHN-tah|account
aislar|ice-LAHR|to isolate
más|MAHS|more
afectados|ah-fehk-TAH-dohs|affected
todavía|toh-dah-BEE-ah|still, yet
revisar|rreh-bee-SAHR|to review
registros|rreh-HEES-trohs|logs
cifrados|see-FRAH-dohs|encrypted
algunos|ahl-GOO-nohs|some
ransomware|RRAHN-sohm-wehr|ransomware
tenemos|teh-NEH-mohs|we have
copias de seguridad|KOH-pyahs deh seh-goo-ree-DAHD|backups
respaldos|rrehs-PAHL-dohs|backups|The usual word in Mexico
copias|KOH-pyahs|copies
fuera de|FWEH-rah deh|outside of
pagamos|pah-GAH-mohs|do we pay
recomiendo|rreh-koh-MYEHN-doh|I recommend
pagar|pah-GAHR|to pay
llamamos|yah-MAH-mohs|we call
legal|leh-GAHL|legal
les|lehs|to you (group)
doy|doy|I give
resumen|rreh-SOO-mehn|summary
del|dehl|of the
incidente|een-see-DEHN-teh|incident
empezó|ehm-peh-SOH|began
escribió|ehs-kree-BYOH|typed
bloqueamos|bloh-keh-AH-mohs|we blocked
aislamos|ice-LAH-mohs|we isolated
tres|trehs|three
equipo|eh-KEE-poh|team; computer (in IT)
equipos|eh-KEE-pohs|computers
pérdida|PEHR-dee-dah|loss
datos|DAH-tohs|data
evidencia|eh-bee-DEHN-syah|evidence
eso|EH-soh|that
cuándo|KWAHN-doh|when
termina|tehr-MEE-nah|ends
investigación|een-behs-tee-gah-SYOHN|investigation
actualización|ahk-twah-lee-sah-SYOHN|update
las tres|lahs TREHS|three o'clock
gracias|GRAH-syahs|thank you
una|OO-nah|a, one (feminine)
están|ehs-TAHN|are
sabemos|sah-BEH-mohs|we know`,
pages:[
{t:"Warm-up",n:"Words from earlier pages come back before the new ones.",l:[["L", "Back at the security desk this week? No balloons, no bags, just screens."],["S", "Just screens. And an inbox full of alerts."],["S", "{Buenos días}, Lucía. Monday again."], ["L", "{Buenos días}. {Café}? Somebody already clicked something."], ["S", "{Otra vez}? {Pero} it's only nine."], ["L", "{Sí}. {Todo} starts with one click. {Vamos a} work."],["S", "{Creo} it's phishing {otra vez}, {porque} it always is."]]},
{t:"Monday morning",n:"The nouns of a bad day.",l:[
["L","Monday morning, Sam. Somebody clicked something. An attack is {un ataque}."],
["S","{Un ataque}. And the password?"],
["L","{La contraseña}. Long word, worth knowing."],
["S","{La contraseña}. Email?"],
["L","{El correo}. A link is {un enlace}. A file is {un archivo}."],
["S","Network?"],
["L","{La red}. The same word as a fishing net."],
["S","{La red}. Server must be easy."],
["L","{El servidor}. And the person who clicked is {el usuario}."]]},
{t:"The first questions",q:[["¿El usuario escribió su contraseña?", "Sí", "No"]],n:"Past tense, kept short and kind. Tú suits a coworker. With a client's employee you don't know, start with usted: ¿Hizo clic? No se preocupe.",l:[
["S","How do I ask what happened?"],
["L","{¿Qué pasó?}"],
["S","{¿Qué pasó?}"],
["L","{Recibí un correo raro}. Strange."],
["S","{¿Hiciste clic en el enlace?}"],
["L","{Sí, hice clic}. {Hiciste} is you did. {Hice} is I did."],
["S","{¿Escribiste tu contraseña?}"],
["L","{Sí. Lo siento}."],
["S","{No te preocupes}. That's don't worry?"],
["L","{Exacto}. A good responder says that first."]]},
{t:"Containment",n:"Actions in order, and a word that changes meaning.",l:[
["S","{Primero, cambia tu contraseña}."],
["L","{Muy bien}. {Cambia}, change."],
["S","{Voy a bloquear la cuenta}."],
["L","{La cuenta} is the account here."],
["S","{Voy a aislar el equipo}. Wait, {equipo} is team."],
["L","In IT, {el equipo} is also the computer. Context tells you which."],
["S","{Voy a aislar el equipo de la red}."],
["L","{¿Hay más usuarios afectados?}"],
["S","{Todavía no sé. Voy a revisar los registros}."]]},
{t:"The ransomware call",n:"All Spanish. The client asks the hard question.",l:[
["L","{¿Los archivos están cifrados?}"],
["S","{Sí, algunos. Es ransomware}."],
["L","{¿Tenemos respaldos?}"],
["S","{Sí. Las copias están fuera de la red}."],
["L","{¿Pagamos?}"],
["S","{No recomiendo pagar. Primero llamamos al equipo legal}."]]},
{t:"The briefing",q:[["¿Con qué empezó el ataque?", "Con un correo", "Con un archivo", "Con un servidor"]],n:"All Spanish. Facts, actions, next update.",l:[
["S","{Buenos días. Les doy un resumen del incidente}."],
["S","{El ataque empezó con un correo. Un usuario escribió su contraseña}."],
["S","{Bloqueamos la cuenta y aislamos tres equipos}."],
["L","{¿Hay pérdida de datos?}"],
["S","{Todavía no tenemos evidencia de eso}."],
["L","{¿Cuándo termina la investigación?}"],
["S","{Todavía no lo sabemos. Les doy otra actualización a las tres}."],
["L","{Gracias}."]]}
]};
