// Reverse pack. "S" = Lucía (Spanish speaker learning English). "L" = Sam (US analyst on the next shift, also the coach).
module.exports={key:"handoff-en",file:"the-shift-handoff",title:"The Shift Handoff",
use:[["Pregunta si tu compañero está listo para la entrega de turno.","Ready for the handoff?"],["Di que hay tres alertas abiertas.","We have three open alerts."],["Pídele que vigile los inicios de sesión de la VPN.","Keep an eye on the VPN logins."]],
sub:"Lucía termina su turno de noche en el SOC y se lo entrega en inglés a Sam, el analista del turno siguiente. La página empieza en español y termina en inglés.",
footer:"Diálogo original escrito para esta página. Una buena entrega de turno dice cuántas alertas hay, cuál es su estado, qué se escaló y qué hay que vigilar.",
lex:`the|dhe|el, la, los, las
a|e|un, una
is|iz|es, está
are|ar|son, están
there|dher|ahí; are there = hay
yes|ies|sí
no|nou|no
hi|jai|hola
the handoff|dhe JEND-of|la entrega de turno
handoff|JEND-of|entrega de turno
open alerts|OU-pen e-LERTS|alertas abiertas
ticket|TI-ket|ticket, caso
escalated|ES-ke-lei-ted|escalado
keep an eye on|kii-pe-NAI on|vigila, no pierdas de vista
ready for the handoff|RE-di fer dhe JEND-of|¿listo para la entrega de turno?
we have|wii JEV|tenemos
three open alerts|THRII OU-pen e-LERTS|tres alertas abiertas
how many|jau ME-ni|cuántas, cuántos
two are false positives|TUU ar FOLS PO-zi-tivz|dos son falsos positivos
one is still under investigation|WAN iz stil AN-der in-ves-ti-GUEI-shen|una sigue en investigación
ticket five oh two|TI-ket FAIV ou TUU|el ticket 502
was escalated to tier two|wez ES-ke-lei-ted tu TIR TUU|se escaló al nivel dos
anything else i should know|E-ni-thing els ai shud NOU|¿algo más que deba saber?
the vpn logins|dhe vii-pii-EN LO-guinz|los inicios de sesión de la VPN
from brazil|frem bre-ZIL|desde Brasil
here are the|JIR ar dhe|aquí están los
information|in-fer-MEI-shen|información|No se usa en plural: some information, a piece of information
here's the information|JIRZ dhii in-fer-MEI-shen|aquí está la información
the client called|dhe KLAI-ent KOLD|el cliente llamó
about a phishing email|e-BAUT e FI-shing II-meil|por un correo de phishing
what did you tell them|wat did iuu TEL dhem|¿qué les dijiste?
i told them|ai TOULD dhem|les dije
we'd follow up by noon|wiid FO-lou ap bai NUUN|que les daríamos seguimiento antes del mediodía
okay|ou-KEI|de acuerdo
i've got it|aiv GOT it|yo me encargo; entendido
anything else|E-ni-thing ELS|¿algo más?
that's all|dhets OL|es todo
thanks|THENKS|gracias
get some sleep|guet sem SLIIP|ve a dormir un poco
have a good shift|jev e gud SHIFT|que tengas buen turno
three|THRII|tres
two|TUU|dos
lucía|lu-SII-a|Lucía`,
pages:[
{t:"Las palabras",n:"Sam enseña las palabras de una entrega de turno.",l:[
["S","Sam, al final de mi turno te entrego todo en inglés. ¿Cómo se dice «entrega de turno»?"],
["L","{The handoff}. En los SOC de Estados Unidos lo dicen todo el tiempo."],
["S","{The handoff}. ¿Y alertas abiertas?"],
["L","{Open alerts}. Y cada caso tiene su {ticket}."],
["S","{Ticket}, igual que en español. ¿Y escalado?"],
["L","{Escalated}. Y para decir «no lo pierdas de vista»: {keep an eye on}."]]},
{t:"Empezar",n:"Un saludo y el número de alertas primero.",l:[
["L","{Hi}, Lucía. {Ready for the handoff?}"],
["S","{Hi}, Sam. {Yes}. Primero, el resumen, ¿verdad?"],
["L","Exacto. Empieza con el número de alertas."],
["S","{We have} {three open alerts}."]]},
{t:"El estado",n:"El estado de cada alerta, en frases cortas.",q:[["How many open alerts are there?","Three","Two"]],l:[
["S","{Two are false positives}."],
["L","¿Y la tercera?"],
["S","{One is still under investigation}."],
["L","Bien. ¿Algo escalado?"],
["S","Sí. {Ticket five oh two} {was escalated to tier two}."]]},
{t:"Los detalles",n:"Lo que hay que vigilar. Ojo con un error muy común.",l:[
["L","{Anything else I should know?}"],
["S","{Yes}. {Keep an eye on} {the VPN logins} {from Brazil}."],
["L","Entendido. ¿Tienes notas?"],
["S","Sí. {Here are the} <<informations>>..."],
["L","Sin s y con {is}: {information} no tiene plural. {Here's the information}."],
["S","{Here's the information}."]]},
{t:"El cliente",n:"Casi todo en inglés. Una llamada pendiente.",l:[
["S","{The client called} {about a phishing email}."],
["L","{What did you tell them?}"],
["S","{I told them} {we'd follow up by noon}."],
["L","{Okay}. {I've got it}."]]},
{t:"El cierre",n:"Todo en inglés. Fin del turno.",l:[
["L","{Anything else?}"],
["S","{No}. {That's all}."],
["L","{Thanks}, {Lucía}. {Get some sleep}."],
["S","{Thanks}. {Have a good shift}."]]}
]};
