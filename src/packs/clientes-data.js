module.exports={dir:"en",key:"clientes",file:"ingles-para-clientes",title:"Inglés para clientes",langName:"English",code:"en",fallback:"en-US",htmlLang:"es",
voices:["en-us","en-gb","en"],
sub:"Inglés para equipos de ciberseguridad que trabajan con clientes. Toca una tarjeta para oírla. La pronunciación está escrita con letras del español, y las mayúsculas marcan la sílaba con más fuerza.",
footer:"Inglés de Estados Unidos. La pronunciación escrita es solo un puente, porque el inglés no se lee como se escribe. Escucha siempre el audio. El audio usa las voces de tu dispositivo.",
ui:[
['placeholder="Search English or English"','placeholder="Busca en inglés o en español"'],
['aria-label="Search words"','aria-label="Buscar palabras"'],
['aria-label="Sections"','aria-label="Secciones"'],
['aria-label="Speech speed"><b>Speed</b><button id="r-slow" data-r="0.72">Slow</button>','aria-label="Velocidad de voz"><b>Velocidad</b><button id="r-slow" data-r="0.72">Lenta</button>'],
['aria-label="Self-test"><b>Test me</b><button id="t-off" data-t="off">Show all</button><button id="t-p" data-t="p">Hide sounds</button><button id="t-m" data-t="m">Hide meanings</button>','aria-label="Practicar"><b>Practicar</b><button id="t-off" data-t="off">Mostrar todo</button><button id="t-p" data-t="p">Ocultar pronunciación</button><button id="t-m" data-t="m">Ocultar significado</button>'],
['Build <span id="b"></span> · shipped <span id="u"></span>','Versión <span id="b"></span> · publicada <span id="u"></span>'],
['<a href="index.html">All pages</a> · <a href="../index.html">Home</a> · <a href="review.html">Review (<span id="due">0</span> due)</a>','<a href="index.html">Todas las páginas</a> · <a href="../index.html">Inicio</a> · <a href="review.html">Repaso (<span id="due">0</span> pendientes)</a>'],
['"This browser has no speech voices, so audio is unavailable."','"Este navegador no tiene voces, así que no hay audio."'],
[`"No English voice found. Add one in your device's text-to-speech settings."`,`"No se encontró una voz en inglés. Agrega una en la configuración de texto a voz de tu dispositivo."`],
['"No matches. Try fewer letters, or search in English."','"Sin resultados. Prueba con menos letras o busca en español."']
],
sections:[
{id:"sonidos",wide:1,t:"Sonidos",es:"Sounds",i:"Lee esto primero. Estos sonidos no existen en español, y la pronunciación escrita en toda la página usa estas letras.",rows:`think, thanks|THINK, THENKS|th sin voz: la lengua entre los dientes y sopla. No es «tink» ni «sink».
this, that|DHIS, DHET|th con voz: como una d muy suave con la lengua entre los dientes. Se escribe dh.
ship, sheep|SHIP, SHIIP|La i corta es relajada; la ii es larga y tensa. Cambian el significado: barco y oveja.
very, berry|VE-ri, BE-ri|v: el labio de abajo toca los dientes de arriba. very (muy) no es berry (baya).
hello, help|je-LOU, JELP|h: solo aire, como una j muy suave.
job, general|DYOB, DYE-ne-ral|j y g suave: como dy rápido. No es «yob».
she, shift|SHII, SHIFT|sh: como cuando pides silencio.
zero, zone|ZII-rou, ZOUN|z: una s que zumba.
about, problem|e-BAUT, PRO-blem|Las sílabas sin fuerza se relajan en una e débil.
red, report|RED, ri-PORT|r: la lengua no toca nada y no vibra. Nunca es la rr española.
school, security|SKUUL, si-KIU-ri-ti|Sin e al principio. No es «eskul».
worked, fixed|WERKT, FIKST|La -ed final no suma sílaba, excepto después de t o d: started = STAR-ted.
day, go, my|DEI, GOU, MAI|Muchas vocales largas en inglés son diptongos.
thanks, have|THENKS, JEV|La a de cat: boca más abierta que para la e española, entre e y a. La guía la escribe e.
not, job|NOT, DYOB|En Estados Unidos esta o suena más cerca de la a española. La guía escribe o, así que escucha el audio.
get, give|GUET, GUIV|En esta guía la g siempre es fuerte, como en «guerra».`},
{id:"cortesia",t:"Cortesía",es:"Courtesy",i:"Frases para abrir, guiar y cerrar una reunión con buen tono.",rows:`Good morning.|gud MOR-ning|Buenos días.
Thanks for joining.|THENKS for DYOI-ning|Gracias por conectarse.
Nice to meet you.|NAIS tu MIIT iu|Mucho gusto.
How are you doing?|JAU ar iu DUU-ing|¿Cómo está?
Let's get started.|lets guet STAR-ted|Empecemos.
Does that make sense?|daz dhet meik SENS|¿Tiene sentido?
Could you repeat that, please?|kud iu ri-PIIT dhet PLIIZ|¿Puede repetirlo, por favor?
Could you say that more slowly?|kud iu SEI dhet mor SLOU-li|¿Puede decirlo más despacio?
Let me make sure I understand.|let mii meik SHUR ai an-der-STEND|Déjeme confirmar que entiendo.
Let me check and get back to you.|let mii CHEK end guet BEK tu iu|Déjeme revisar y le respondo.
I'll follow up by email.|ail FO-lou ap bai II-meil|Le doy seguimiento por correo.
Thank you for your time.|THENK iu for ior TAIM|Gracias por su tiempo.
Have a great weekend.|jev e greit WIIK-end|Que tenga buen fin de semana.`},
{id:"analista",t:"Analista SOC",es:"SOC analyst",i:"Términos y frases para explicar alertas e investigaciones a un cliente.",rows:`alert|e-LERT|alerta
triage|tri-ASH|clasificación inicial, triaje
false positive|FOLS PO-zi-tiv|falso positivo
true positive|TRUU PO-zi-tiv|verdadero positivo
logs|LOGZ|registros
indicator of compromise|IN-di-kei-ter ov KOM-pro-maiz|indicador de compromiso, IOC
compromised account|KOM-pro-maizd e-KAUNT|cuenta comprometida
multi-factor authentication|MAL-ti FEK-ter o-then-ti-KEI-shon|autenticación multifactor, MFA
IP address|AI-PII e-DRES|dirección IP
containment|kon-TEIN-ment|contención
isolate the host|AI-so-leit dhe JOUST|aislar el equipo
escalate|ES-ka-leit|escalar
shift handoff|SHIFT JEND-of|entrega de turno
We detected suspicious activity.|wii di-TEK-ted se-SPI-shos ek-TI-vi-ti|Detectamos actividad sospechosa.
The account was compromised.|dhi e-KAUNT woz KOM-pro-maizd|La cuenta fue comprometida.
We isolated the host.|wii AI-so-lei-ted dhe JOUST|Aislamos el equipo.
We reset the password and revoked the sessions.|wii rii-SET dhe PES-werd end ri-VOUKT dhe SE-shonz|Restablecimos la contraseña y revocamos las sesiones.
We're still investigating.|wir STIL in-VES-ti-guei-ting|Seguimos investigando.
I'll escalate this to tier two.|ail ES-ka-leit dhis tu TIR TUU|Lo voy a escalar al nivel dos.`},
{id:"ingeniero",t:"Ingeniero",es:"Engineer",i:"Cambios, parches y configuración, explicados a un cliente.",rows:`firewall rule|FAI-er-wol RUUL|regla de firewall
patch|PECH|parche
vulnerability|val-ne-re-BI-li-ti|vulnerabilidad
maintenance window|MEIN-te-nens WIN-dou|ventana de mantenimiento
change request|CHEINDY ri-KWEST|solicitud de cambio
reboot|rii-BUUT|reiniciar
deploy|di-PLOI|desplegar
least privilege|LIIST PRI-vi-lidy|privilegio mínimo
encryption|en-KRIP-shon|cifrado
expired certificate|ek-SPAIRD ser-TI-fi-ket|certificado vencido
The agent isn't reporting.|dhi EI-dyent I-zent ri-POR-ting|El agente no está reportando.
We need a maintenance window.|wii NIID e MEIN-te-nens WIN-dou|Necesitamos una ventana de mantenimiento.
Is the change approved?|iz dhe CHEINDY e-PRUUVD|¿El cambio está aprobado?
We'll patch it tonight.|wiil PECH it tu-NAIT|Lo parchamos esta noche.
The certificate expires on Friday.|dhe ser-TI-fi-ket ek-SPAIRZ on FRAI-dei|El certificado vence el viernes.`},
{id:"entrega",t:"Entrega de servicio",es:"Service delivery",i:"Revisión de servicio, SLA, alcance y pendientes. El tono con clientes es cortés pero directo.",rows:`service level agreement|SER-vis LE-vel e-GRII-ment|acuerdo de nivel de servicio, SLA
response time|ri-SPONS TAIM|tiempo de respuesta
monthly review|MANTH-li ri-VIU|revisión mensual
report|ri-PORT|informe, reporte
metrics|MET-riks|métricas
scope|SKOUP|alcance
stakeholders|STEIK-joul-derz|partes interesadas
action items|EK-shon AI-temz|pendientes
renewal|ri-NUU-al|renovación
end of day|END ov DEI|al final del día, EOD
Let's review last month's metrics.|lets ri-VIU LEST manths MET-riks|Revisemos las métricas del mes pasado.
We met the SLA in 98 percent of cases.|wii met dhi es el EI in NAIN-ti EIT per-SENT ov KEI-siz|Cumplimos el SLA en el 98 % de los casos.
I understand your concern.|ai an-der-STEND ior ken-SERN|Entiendo su preocupación.
You're right. We missed the SLA.|iur RAIT. wii MIST dhi es el EI|Tiene razón. No cumplimos el SLA.
That's outside the scope of the contract.|dhets aut-SAID dhe SKOUP ov dhe KON-trekt|Eso está fuera del alcance del contrato.
I can prepare a proposal.|ai ken pri-PER e pro-POU-zal|Puedo preparar una propuesta.
What does success look like for you?|wot daz sek-SES luk laik for IU|¿Qué sería un buen resultado para usted?
Who else should be in this meeting?|JUU els shud bii in dhis MII-ting|¿Quién más debería estar en esta reunión?
You'll have an update by end of day.|iul jev en AP-deit bai END ov DEI|Tendrá una actualización antes de que termine el día.`},
{id:"suavizar",t:"Suavizar",es:"Softeners",i:"El inglés de Estados Unidos con clientes es directo pero amable. Estas frases suavizan una mala noticia, un no o una corrección.",rows:`I'm afraid…|aim e-FREID|Me temo que…|Antes de una mala noticia
Unfortunately,|an-FOR-chu-net-li|Lamentablemente,
We'd be happy to…|wiid bii JE-pi tu|Con gusto…
Just to confirm,|DYAST tu ken-FERM|Solo para confirmar,
Would it be possible to…?|wud it bii PO-si-bel tu|¿Sería posible…?
I'd suggest…|aid seg-DYEST|Yo sugeriría…
I see your point, but…|ai SII ior POINT bat|Entiendo su punto, pero…
That's a fair question.|dhets e FER KWES-chon|Es una pregunta válida.`},
{id:"incidente",t:"Llamada de incidente",es:"Incident call",i:"Frases para una llamada urgente con el cliente: impacto, tiempos y próximos pasos.",rows:`Can everyone hear me?|ken EV-ri-wan JIR mii|¿Todos me escuchan?
You're on mute.|iur on MIUT|Tiene el micrófono silenciado.
What's the impact?|wots dhi IM-pekt|¿Cuál es el impacto?
When did it start?|WEN did it START|¿Cuándo empezó?
Who's affected?|juuz e-FEK-ted|¿A quién afecta?
We've contained the threat.|wiiv kon-TEIND dhe THRET|Contuvimos la amenaza.
We don't have evidence of data loss yet.|wii dount jev E-vi-dens ov DEI-ta LOS yet|Todavía no tenemos evidencia de pérdida de datos.
I'll take care of that.|ail teik KER ov dhet|Yo me encargo de eso.
Next update in thirty minutes.|NEKST AP-deit in THER-ti MI-nits|Próxima actualización en treinta minutos.`},
{id:"correo",t:"Correo",es:"Email",i:"Frases comunes para correos con clientes.",rows:`Following up on our call.|FO-lou-ing ap on aur KOL|Doy seguimiento a nuestra llamada.
Please find the report attached.|pliiz faind dhe ri-PORT e-TECHT|Adjunto el informe.
Let me know if you have any questions.|let mii NOU if iu jev E-ni KWES-chonz|Avíseme si tiene preguntas.
Sorry for the delay.|SO-ri for dhe di-LEI|Disculpe la demora.
Just a quick reminder.|dyast e KWIK ri-MAIN-der|Solo un recordatorio rápido.
Best regards,|BEST ri-GARDZ|Saludos cordiales,`},
{id:"falsos",wide:1,t:"Falsos amigos",es:"False friends",i:"Palabras que parecen iguales pero significan otra cosa. Estas causan malentendidos reales con clientes.",rows:`actually|EK-chu-a-li|en realidad (no «actualmente»)|«Actualmente» es currently
eventually|i-VEN-chu-a-li|al final, con el tiempo (no «eventualmente»)|«Eventualmente» es possibly
assist|e-SIST|ayudar (no «asistir a» un evento)|«Asistir a una reunión» es attend a meeting
attend|e-TEND|asistir
sensible|SEN-si-bel|sensato (no «sensible»)|«Sensible» es sensitive
sensitive data|SEN-si-tiv DEI-ta|datos sensibles
realize|RII-e-laiz|darse cuenta (no «realizar»)|«Realizar» es carry out o perform
résumé|RE-zu-mei|currículum (no «resumen»)|«Resumen» es summary. Sin acentos, resume (ri-ZUUM) es el verbo reanudar
preoccupation|pri-o-kiu-PEI-shon|obsesión, distracción (no «preocupación»)|«Preocupación» es concern
support|se-PORT|apoyar, dar soporte (no «soportar»)|«Soportar» es tolerate
library|LAI-bre-ri|biblioteca (no «librería»)|En software, library también es biblioteca
discuss|dis-KAS|hablar de, conversar (no «discutir» con enojo)|«Discutir» con enojo es argue
molest|mo-LEST|acosar, abusar (no «molestar»)|«Molestar» es bother: Sorry to bother you
commitment|ko-MIT-ment|compromiso|«Compromise» es concesión, y en seguridad «compromised» es vulnerado
advise|ed-VAIZ|aconsejar, recomendar (no «avisar»)|«Avisar» es let you know
carpet|KAR-pet|alfombra (no «carpeta»)|«Carpeta» es folder`}
]};
