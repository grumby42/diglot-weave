// Reverse pack. "S" = Lucía (Spanish speaker learning English). "L" = Sam (US colleague, the coach).
module.exports={key:"incident-en",file:"the-incident-call",title:"The Incident Call",
use:[["Pregunta si todos te escuchan.","Can everyone hear me?"],["Di que todavía no tienen evidencia de pérdida de datos.","We don't have evidence of data loss yet."],["Di que la próxima actualización es en treinta minutos.","Next update in thirty minutes."]],
sub:"Lucía dirige su primera llamada de incidente con un cliente en inglés. Sam la ayuda. La página empieza en español y termina en inglés.",
footer:"Diálogo original escrito para esta página. En una llamada de incidente, el inglés profesional es corto, claro y con horas concretas.",
lex:`the|dhe|el, la, los, las
a|e|un, una
and|end|y
of|ov|de
in|in|en
at|et|a las (hora)
on|on|en
for|for|para, por
it|it|lo, eso
is|iz|es, está
are|ar|son, están
we|wii|nosotros
you|iu|usted, ustedes, tú
me|mii|me, mí
that|dhet|eso
no|nou|no
yes|ies|sí
the call|dhe KOL|la llamada
call|kol|llamada
the bridge|dhe BRIDY|la llamada de incidente (literalmente «el puente»)
bridge|bridy|puente; llamada de incidente
the impact|dhii IM-pekt|el impacto
impact|IM-pekt|impacto
affected|e-FEK-ted|afectado, afectados
contained|ken-TEIND|contenido, contenida
threat|THRET|amenaza
think|THINK|pensar
data loss|DEI-te LOS|pérdida de datos|La t de data suena casi como una r suave
data|DEI-te|datos
loss|los|pérdida
update|AP-deit|actualización
good morning|gud MOR-ning|buenos días
can everyone hear me|ken EV-ri-wan JIR mii|¿todos me escuchan?
we can hear you|wii ken JIR iu|te escuchamos
you're on mute|iur on MIUT|tiene el micrófono silenciado
thanks for joining|THENKS for DYOI-ning|gracias por conectarse
thanks|thenks|gracias
everyone|EV-ri-wan|todos
i'm|aim|yo soy
lucía|lu-SII-a|Lucía
from the soc|fram dhe SOK|del SOC
the soc|dhe SOK|el SOC|SOC se dice como una sola palabra
when did it start|WEN did it START|¿cuándo empezó?
at two in the morning|et TUU in dhe MOR-ning|a las dos de la mañana
what's the impact|wats dhii IM-pekt|¿cuál es el impacto?
three servers are affected|THRII SER-verz ar e-FEK-ted|hay tres servidores afectados
who's affected|juuz e-FEK-ted|¿a quién afecta?
the finance team|dhe FAI-nens TIIM|el equipo de finanzas
what did you do|WAT did iu DUU|¿qué hicieron?
we isolated the hosts|wii AI-se-lei-ted dhe JOUSTS|aislamos los equipos
we reset the passwords|wii rii-SET dhe PES-werdz|restablecimos las contraseñas
and the sessions|end dhe SE-shenz|¿y las sesiones?
we revoked the sessions|wii ri-VOUKT dhe SE-shenz|revocamos las sesiones
do we have data loss|du wii jev DEI-te LOS|¿hay pérdida de datos?
we don't have|wii dount JEV|no tenemos
we don't have evidence|wii dount jev E-vi-dens|no tenemos evidencia
evidence|E-vi-dens|evidencia|No se usa en plural: some evidence, no evidence, a piece of evidence
yet|iet|todavía (al final de la frase)
can someone check the backups|ken SAM-wan CHEK dhe BEK-aps|¿alguien puede revisar los respaldos?
i'll take care of that|ail teik KER ov dhet|yo me encargo de eso
when is the next update|wen iz dhe NEKST AP-deit|¿cuándo es la próxima actualización?
next update in thirty minutes|NEKST AP-deit in THER-ti MI-nits|próxima actualización en treinta minutos|La t de thirty suena casi como una r suave
okay|ou-KEI|de acuerdo
thank you|THENK iu|gracias
quick update|KWIK AP-deit|actualización rápida
the threat is contained|dhe THRET iz ken-TEIND|la amenaza está contenida
the threat|dhe THRET|la amenaza
is anyone else affected|iz E-ni-wan ELS e-FEK-ted|¿hay alguien más afectado?
only the finance team|OUN-li dhe FAI-nens TIIM|solo el equipo de finanzas
great work|greit WERK|buen trabajo
next update at nine|NEKST AP-deit et NAIN|próxima actualización a las nueve
short answers|SHORT EN-serz|respuestas cortas
short and clear|SHORT end KLIR|corto y claro
good|gud|bien, bueno
always give a time|OL-weiz guiv e TAIM|siempre da una hora`,
pages:[
{t:"Las palabras",n:"Sam enseña las palabras clave antes de la llamada.",l:[
["S","Sam, hoy tengo mi primera llamada de incidente en inglés. ¿Por dónde empiezo?"],
["L","Por las palabras. La llamada es {the call}. En muchas empresas le dicen {the bridge}."],
["S","{The bridge}. ¿Y el impacto?"],
["L","{The impact}. El acento va en la primera sílaba: {impact}."],
["S","¿Y afectados?"],
["L","{Affected}. Y cuando ya controlaste la amenaza, está {contained}."],
["S","{Contained}. ¿Y amenaza?"],
["L","{Threat}. Con la th de {think}: {threat}, no «tret»."],
["S","¿Pérdida de datos?"],
["L","{Data loss}. Y la actualización, {update}, ya la conoces."]]},
{t:"Abrir la llamada",n:"Las primeras frases de toda llamada.",l:[
["L","Practiquemos. Yo soy el cliente. Empieza tú."],
["S","{Good morning}. ¿Cómo pregunto si todos me escuchan?"],
["L","{Can everyone hear me?}"],
["S","{Good morning. Can everyone hear me?}"],
["L","{Yes}, {we can hear you}."],
["S","¿Y si alguien habla pero no se oye nada?"],
["L","Le dices: {you're on mute}."],
["S","{You're on mute}. Ahora me presento."],
["L","Agradece primero: {thanks for joining}."],
["S","{Thanks for joining}. {I'm} {Lucía}, {from the SOC}."]]},
{t:"Los hechos",n:"Las preguntas del cliente y respuestas cortas con datos.",q:[["Who's affected?","The finance team","The SOC"]],l:[
["L","Ahora el cliente pregunta. {When did it start?}"],
["S","{At two in the morning}."],
["L","{Good}. {What's the impact?}"],
["S","{Three servers are affected}."],
["L","{Who's affected?}"],
["S","¿Cómo digo «el equipo de finanzas»?"],
["L","{The finance team}."],
["S","{The finance team}. {Short answers}, ¿verdad?"],
["L","Exacto. {Short and clear}."]]},
{t:"La contención",n:"Lo que ya hicieron, en pasado. Ojo con un error muy común.",l:[
["L","{What did you do?}"],
["S","{We isolated the hosts}. Y luego, {we reset the passwords}."],
["L","{And the sessions?}"],
["S","{We revoked the sessions}."],
["L","{Do we have data loss?}"],
["S","{We don't have} <<evidences>>..."],
["L","Sin s. En inglés, {evidence} no lleva plural: {we don't have evidence}."],
["S","{We don't have evidence of data loss yet}."]]},
{t:"Próximos pasos",n:"Casi todo en inglés. Asignar tareas y la próxima hora.",l:[
["L","{Can someone check the backups?}"],
["S","{I'll take care of that}."],
["L","{When is the next update?}"],
["S","{Next update in thirty minutes}."],
["L","{Okay. Thank you}. {Good}. {Always give a time}."]]},
{t:"La actualización",n:"Todo en inglés. Treinta minutos después.",q:[["Is the threat contained?","Yes","No"]],l:[
["S","{Quick update}. {The threat is contained}."],
["L","{Is anyone else affected?}"],
["S","{No}. {Only the finance team}."],
["L","{Great work}."],
["S","{Next update at nine}. {Thanks}, {everyone}."]]}
]};
