// Reverse pack. "S" = Lucía (Spanish speaker learning English). "L" = Sam (US colleague, the coach).
module.exports={key:"change-en",file:"the-change-review",title:"The Change Review",
use:[["Di que quieres explicarle el cambio al cliente.","I'd like to walk you through the change."],["Di que el riesgo es bajo.","The risk is low."],["Di que, si algo falla, van a revertir el cambio.","If something breaks, we'll roll back."]],
sub:"Lucía, ingeniera de seguridad, presenta un cambio a un cliente en inglés. Sam la ayuda. La página empieza en español y termina en inglés.",
footer:"Diálogo original escrito para esta página. Al presentar un cambio, el cliente quiere saber qué se cambia, por qué, cuándo, qué riesgo hay y cómo revertirlo.",
lex:`the|dhe|el, la, los, las
a|e|un, una
and|end|y
it|it|lo, eso
is|iz|es, está
we|wii|nosotros
yes|ies|sí
what|wat|qué
do|du|(auxiliar de pregunta)
has|jez|tiene
the change|dhe CHEINDY|el cambio
change|cheindy|cambio
change request|CHEINDY ri-KWEST|solicitud de cambio
maintenance window|MEIN-te-nens WIN-dou|ventana de mantenimiento
rollback plan|ROUL-bek PLEN|plan de reversión
roll back|roul BEK|revertir (deshacer un cambio)
risk|risk|riesgo
downtime|DAUN-taim|tiempo fuera de servicio
approved|e-PRUUVD|aprobado
good morning|gud MOR-ning|buenos días
i'd like to|aid LAIK tu|me gustaría
walk you through|wok iu THRUU|explicarle paso a paso
we need to|wii NIID tu|necesitamos
patch the firewall|PECH dhe FAI-er-wol|parchar el firewall
patch|pech|parchar
there's|dherz|hay
a critical vulnerability|e KRI-ti-kel val-ne-re-BI-li-ti|una vulnerabilidad crítica
actually|EK-chu-e-li|en realidad|No significa «actualmente»
currently|KER-ent-li|actualmente
the firewall|dhe FAI-er-wol|el firewall
the server|dhe SER-ver|el servidor
what's the risk|wats dhe RISK|¿cuál es el riesgo?
the risk is low|dhe RISK iz LOU|el riesgo es bajo
and if something breaks|end if SAM-thing BREIKS|¿y si algo falla?
if something breaks|if SAM-thing BREIKS|si algo falla
we'll roll back|wiil roul BEK|vamos a revertir el cambio
we have a rollback plan|wii JEV e ROUL-bek PLEN|tenemos un plan de reversión
how long is the downtime|jau LONG iz dhe DAUN-taim|¿cuánto tiempo dura la interrupción?
about fifteen minutes|e-BAUT FIF-tiin MI-nits|unos quince minutos
about an hour|e-BAUT en AU-er|alrededor de una hora
is the change approved|iz dhe CHEINDY e-PRUUVD|¿el cambio está aprobado?
it was approved on monday|it woz e-PRUUVD on MAN-dei|lo aprobaron el lunes
okay|ou-KEI|de acuerdo
great|greit|excelente
the window is saturday|dhe WIN-dou iz SE-ter-dei|la ventana es el sábado|La t de Saturday suena casi como una r suave
from ten at night|fram TEN et NAIT|desde las diez de la noche
until midnight|en-til MID-nait|hasta la medianoche
sounds good|saundz GUD|me parece bien
we'll send a confirmation|wiil SEND e kon-fer-MEI-shen|les enviaremos una confirmación
when it's done|wen its DAN|cuando termine
thank you|THENK iu|gracias
great work|greit WERK|buen trabajo
thank you for your time|THENK iu for ior TAIM|gracias por su tiempo`,
pages:[
{t:"Las palabras",n:"Sam enseña las palabras de un cambio antes de la reunión.",l:[
["L","Mañana presentas un cambio al cliente. Primero, las palabras. El cambio es {the change}."],
["S","{The change}. ¿Y la solicitud de cambio?"],
["L","{Change request}. Y la ventana de mantenimiento, {maintenance window}."],
["S","{Maintenance window}. ¿Y el plan para deshacer el cambio?"],
["L","{Rollback plan}. Revertir es {roll back}."],
["S","¿Y el riesgo? ¿Y el tiempo fuera de servicio?"],
["L","{Risk} y {downtime}. Y si el cliente dice que sí, el cambio está {approved}."]]},
{t:"Abrir la reunión",n:"Una frase para presentar el cambio con buen tono.",l:[
["L","Yo soy el cliente. Empieza tú."],
["S","{Good morning}. ¿Cómo digo «me gustaría explicarle el cambio»?"],
["L","{I'd like to} {walk you through} {the change}."],
["S","{Good morning}. {I'd like to} {walk you through} {the change}."],
["L","Perfecto. Ahora di qué vas a hacer y por qué."]]},
{t:"Qué y por qué",n:"El cambio y la razón. Ojo con un falso amigo.",q:[["What do we need to patch?","The firewall","The server"]],l:[
["S","{We need to} {patch the firewall}. Porque {there's} {a critical vulnerability}."],
["L","Bien. Corto y claro."],
["S","¿Y cómo digo «actualmente el firewall tiene una vulnerabilidad»? ¿<<Actually>>...?"],
["L","Cuidado: {actually} significa «en realidad». «Actualmente» es {currently}."],
["S","{Currently}, {the firewall} {has} {a critical vulnerability}."]]},
{t:"El riesgo",n:"Casi todo en inglés. El riesgo y cómo revertirlo.",l:[
["L","{What's the risk?}"],
["S","{The risk is low}."],
["L","{And if something breaks?}"],
["S","{If something breaks}, {we'll roll back}. {We have a rollback plan}."],
["L","Muy bien. Siempre menciona el plan."]]},
{t:"Las preguntas",n:"Todo en inglés. El cliente pregunta por el tiempo y la aprobación.",q:[["How long is the downtime?","About fifteen minutes","About an hour"]],l:[
["L","{How long is the downtime?}"],
["S","{About fifteen minutes}."],
["L","{Is the change approved?}"],
["S","{Yes}. {It was approved on Monday}."],
["L","{Okay}. {Great}."]]},
{t:"El cierre",n:"Todo en inglés. Cuándo, y qué pasa después.",l:[
["S","{The window is Saturday}, {from ten at night} {until midnight}."],
["L","{Sounds good}."],
["S","{We'll send a confirmation} {when it's done}."],
["L","{Thank you}. {Great work}."],
["S","{Thank you for your time}."]]}
]};
