// Usage: node reverse.js <pack.js>  Builds a Spanish-to-English page: Spanish prose, {English} target words, Spanish interface.
// In reverse packs, line code "L" is Sam (native English speaker, the coach) and "S" is Lucía (Spanish speaker, the learner).
const fs=require('fs'),path=require('path');
let chromium=null;try{({chromium}=require('playwright'))}catch(e){}
const SRC=path.resolve(__dirname,'..'),ROOT=path.resolve(SRC,'..');
const wrap=(s,lang)=>'<!doctype html>\n<html lang="'+lang+'"><head><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'+s+'\n</html>\n';

const pack=require(path.resolve(process.argv[2]));
const d=new Date(),p=n=>String(n).padStart(2,'0');
const build=`WEAV-${d.getUTCFullYear()}${p(d.getUTCMonth()+1)}${p(d.getUTCDate())}-${p(d.getUTCHours())}${p(d.getUTCMinutes())}Z`;
const utc=d.toISOString().replace(/\.\d+Z/,'Z');
let s=fs.readFileSync(path.join(SRC,'templates','weave.html'),'utf8');
const swap=(a,b)=>{if(s.split(a).length!==2)throw new Error('anchor x'+(s.split(a).length-1)+': '+a.slice(0,70));s=s.replace(a,()=>b)};
const all=(a,b)=>{if(!s.includes(a))throw new Error('missing '+a);s=s.split(a).join(b)};
// Page text
swap('<title>Viento y Sol</title>',`<title>${pack.title}</title>`);
swap('<h1>El viento y el sol</h1>',`<h1>${pack.title}</h1>`);
swap("Two friends grounded by wind retell Aesop's fable. The page starts in English and ends in Spanish.",pack.sub);
swap("Fable retold for this page from Aesop (public domain). Spanish follows Latin American pronunciation. Audio uses your device's speech voices.",pack.footer+" La pronunciación sigue el inglés de Estados Unidos. El audio usa las voces de tu dispositivo.");
swap('Build <span id="b"></span> · shipped <span id="u"></span>','Versión <span id="b"></span> · publicada <span id="u"></span>');
swap('<a href="index.html">All pages</a> · <a href="../index.html">Home</a>','<a href="index.html">Todas las páginas</a> · <a href="../index.html">Inicio</a>');
// Interface
swap('aria-label="Stages, by share of Spanish"','aria-label="Etapas, según la proporción de inglés"');
swap('aria-label="Pronunciation guides"><b>Guides</b>','aria-label="Guías de pronunciación"><b>Guías</b>');
swap('data-g="fade">Fading</button>','data-g="fade">Al inicio</button>');
swap('data-g="all">All</button>','data-g="all">Todas</button>');
swap('data-g="none">Off</button>','data-g="none">Ninguna</button>');
swap('aria-label="Speech speed"><b>Speed</b>','aria-label="Velocidad de voz"><b>Velocidad</b>');
swap('data-r="0.72">Slow</button>','data-r="0.72">Lenta</button>');
swap('aria-label="Voices"><b>Voices</b>','aria-label="Voces"><b>Voces</b>');
swap('title="Each line in one voice, so it flows. The Spanish is exact and the English has an accent.">Smooth</button>','title="Cada línea con una sola voz, para que fluya. El inglés suena exacto y el español con acento.">Fluida</button>');
swap('title="Switches voices at every language change: native sound for both languages, with short pauses.">Exact</button>','title="Cambia de voz en cada cambio de idioma: sonido nativo en los dos idiomas, con pausas cortas.">Exacta</button>');
swap('<button id="prev">Previous stage</button><button id="next">Next stage</button>','<button id="prev">Etapa anterior</button><button id="next">Siguiente etapa</button>');
swap('Tap any colored word to hear it and see what it means.','Toca cualquier palabra en color para oírla y ver qué significa.');
swap('"This browser has no speech voices, so audio is unavailable. The written guides still work."','"Este navegador no tiene voces, así que no hay audio. Las guías escritas sí funcionan."');
swap(`"No Spanish voice found. Add one in your device's text-to-speech settings."`,`"No se encontró una voz en inglés. Agrega una en la configuración de texto a voz de tu dispositivo."`);
swap('"Stage "+(i+1)+", "+q.t+", "+q.pct+" percent Spanish"','"Etapa "+(i+1)+", "+q.t+", "+q.pct+" por ciento en inglés"');
swap('h.textContent="Stage "+(cur+1)+": "+p.t','h.textContent="Etapa "+(cur+1)+": "+p.t');
swap('s.textContent=p.pct+"% Spanish"','s.textContent=p.pct+"% inglés"');
swap('ICON+"Play this stage"','ICON+"Reproducir esta etapa"');
swap('b.title="Incorrect Spanish, corrected in the next line"','b.title="Inglés incorrecto, corregido en la siguiente línea"');
swap('"aria-label","Play this line"','"aria-label","Reproducir esta línea"');
swap("'<summary>New words on this page ('","'<summary>Palabras nuevas en esta página ('");
swap('<th>Spanish</th><th>Say it</th><th>Meaning</th>','<th>Inglés</th><th>Pronunciación</th><th>Significado</th>');
swap("<summary>How Spanish sounds</summary><div class=\"table\"><table><thead><tr><th>Letter</th><th>Sound</th><th>Like</th>","<summary>Cómo suena el inglés</summary><div class=\"table\"><table><thead><tr><th>Letras</th><th>Sonido</th><th>Ejemplo</th>");
swap("Capital letters mark the stressed syllable. Spanish letter names follow the same logic: a is ah, b is beh, c is seh, d is deh. Respellings are a bridge, so listen as well.","Las mayúsculas marcan la sílaba con más fuerza. La pronunciación está escrita con letras del español, así que es solo un puente: escucha también el audio. El inglés no se lee como se escribe.");
// Sound guide for Spanish speakers learning English
s=s.replace(/const SOUND=\[[\s\S]*?\]\];/,()=>'const SOUND='+JSON.stringify([
["th (think)","th sin voz","Lengua entre los dientes y sopla. think = THINK, no «tink» ni «sink»."],
["th (this)","th con voz","Como una d muy suave con la lengua entre los dientes. this = DHIS."],
["i corta (ship)","i","Más corta y relajada que la i española. ship (barco) no es sheep (oveja)."],
["ee (sheep)","ii","Una i larga y tensa. Se escribe ii en esta guía."],
["v","v","Labio de abajo contra los dientes de arriba. very no es berry."],
["h","j","Como una j suave, solo aire. hello = je-LOU."],
["j, g (job, general)","dy","Como dy rápido. job = DYOB, no «yob»."],
["sh","sh","Como cuando pides silencio. she = SHII."],
["z","z","Una s que zumba. zero = ZII-rou."],
["vocal débil (about)","e","Una e muy relajada y corta en sílabas sin fuerza. about = e-BAUT."],
["r","r","La lengua no toca nada y no vibra. Nunca es la rr española."],
["s- inicial","s","Sin e delante. school = SKUUL, no «eskul»."],
["-ed final","t, d","Casi siempre sin vocal extra. worked = WERKT, no «work-ed». Después de t o d sí suma sílaba: started = STAR-ted."],
["ei, ou, ai","ei, ou, ai","Diptongos: day = DEI, go = GOU, my = MAI."],["a (cat, thanks, have)","e abierta","Más abierta que la e española, entre e y a. thanks = THENKS. Esta guía la escribe e, igual que la e de bed, así que escucha el audio."],["o (not, job, problem)","o","En Estados Unidos suena más cerca de la a española: not suena casi «nat». Esta guía escribe o; escucha el audio."],["t entre vocales (meeting, data)","r suave","En Estados Unidos suena como la r de «pero». La guía escribe t: meeting suena casi «MII-ring»."],["g en esta guía","siempre fuerte","gue y gui como en «guerra» y «guitarra»: get = guet, give = guiv."]
])+';');
// Voices: target words are English; base text is Spanish
swap('esVoice=by("es-mx")||by("es-us")||by("es-419")||by("es");','esVoice=by("en-us")||by("en-gb")||by("en");');
swap('samEs=v.find(x=>/^es[-_](mx|us|419)/i.test(x.lang)&&x!==esVoice)||esVoice;','samEs=v.find(x=>/^en[-_](us|gb|ca|au)/i.test(x.lang)&&x!==esVoice)||esVoice;');
swap('enVoice=by("en-us")||by("en");','enVoice=by("es-mx")||by("es-us")||by("es-419")||by("es");');
swap('u.lang=s.es?(esVoice?esVoice.lang:"es-MX"):"en-US";','u.lang=s.es?(esVoice?esVoice.lang:"en-US"):(enVoice?enVoice.lang:"es-MX");');
// Speaker names and pitch: "L" is Sam (coach), "S" is Lucía (learner)
swap('who.textContent=l.w==="S"?"Sam":"Lucía"','who.textContent=l.w==="S"?"Lucía":"Sam"');
swap('u.pitch=s.who==="S"?0.82:1.12;','u.pitch=s.who==="S"?1.12:0.82;');
swap('.who.S{color:var(--sam)} .who.L{color:var(--lucia)}','.who.S{color:var(--lucia)} .who.L{color:var(--sam)}');
// English words keep apostrophes and hyphens (let's, I'll, ninety-eight)
swap('const t=p.slice(1,-1).match(/\\p{L}+|[^\\p{L}]+/gu);',"const t=p.slice(1,-1).match(/\\p{L}+(?:['’-]\\p{L}+)*|[^\\p{L}]+/gu);");
// Sam's Spanish defaults to a clear Spanish voice for this audience, with its own saved setting
swap('luciaEn=store.get("flow")||"es"','luciaEn=store.get("rev-flow")||"es"');
swap('lf.textContent="Listen first"','lf.textContent="Primero escucha"');
swap('sm.textContent="Check yourself ("','sm.textContent="Ponte a prueba ("');
all('(ok?"Correct: ":"Not quite: ")','(ok?"Correcto: ":"Casi: ")');
swap('xm.setAttribute("aria-label","incorrect")','xm.setAttribute("aria-label","incorrecto")');
swap('say1.setAttribute("aria-label","Play the question")','say1.setAttribute("aria-label","Reproducir la pregunta")');
swap('store.set("flow",luciaEn)','store.set("rev-flow",luciaEn)');
// New study features, in Spanish
swap(/  <details class="how" id="how">[\s\S]*?<\/details>\n/.exec(s)[0],`  <details class="how" id="how"><summary>Cómo estudiar esta página</summary>
    <ol>
      <li>Toca <b>Reproducir esta etapa</b> antes de leer. <b>Primero escucha</b> oculta el texto hasta que lo oigas.</li>
      <li>Lee al mismo tiempo. Toca cualquier palabra que no conozcas para oírla y ver qué significa.</li>
      <li>Cuando una etapa empieza con <b>Palabras que vienen</b>, repásalas primero. Son nuevas en esa etapa.</li>
      <li>Toca <b>Repite después de mí</b>: la página lee cada línea y hace una pausa para que la repitas en voz alta.</li>
      <li>Responde la pregunta de la etapa y luego usa <b>Ponte a prueba</b>.</li>
      <li>En la última etapa, haz <b>Tu turno</b>: di la frase en inglés antes de ver la respuesta.</li>
      <li>Al día siguiente, vuelve a escuchar la última etapa sin guías.</li>
    </ol>
  </details>
`);
swap('ws.textContent="Words ahead ("+ahead.length+"): meet them before you read"','ws.textContent="Palabras que vienen ("+ahead.length+"): repásalas antes de leer"');
swap('uh.textContent="Your turn: say it in Spanish out loud, then check"','uh.textContent="Tu turno: dilo en inglés en voz alta y luego revisa"');
swap('btn.textContent="Show answer"','btn.textContent="Ver respuesta"');
swap('sh.textContent="Repeat after me"','sh.textContent="Repite después de mí"');
swap('sy.setAttribute("aria-label","Play the answer")','sy.setAttribute("aria-label","Reproducir la respuesta")');
// Pack content
swap('`.split("\\n").forEach',"\n"+pack.lex+'`.split("\\n").forEach');
s=s.replace(/const USE=.*\n/,()=>'const USE='+JSON.stringify(pack.use||[])+';\n');
s=s.replace(/const PAGES=\[[\s\S]*?\n\];\n\nconst SOUND/,()=>'const PAGES='+JSON.stringify(pack.pages)+';\n\nconst SOUND');
all('store.get("stage")',`store.get("${pack.key}-stage")`);
all('store.set("stage"',`store.set("${pack.key}-stage"`);
swap('repeat(8,1fr)',`repeat(${pack.pages.length},1fr)`);
{const seen={},dups=[],rr=[];pack.lex.split('\n').forEach(row=>{const [w,p]=row.split('|');if(!w)return;if(seen[w])dups.push(w);seen[w]=1;});if(dups.length)console.log('LINT duplicate keys:',dups.join(', '));if(rr.length)console.log('LINT initial r not trilled:',rr.join(', '));}
s=s.split('__BUILD__').join(build).split('__UTC__').join(utc);
const left=['Spanish','Stage ','Play this','Tap any','Previous stage'].filter(x=>s.slice(s.indexOf('<div class="wrap">')).replace(/const LEX[\s\S]*?const PAGES/,'').includes(x));
const o=path.join(ROOT,'en',pack.file+'.html');
fs.writeFileSync(o,wrap(s,'es'));
if(!chromium){console.log(build,'built',o,'(audit skipped: playwright not installed)');process.exit(0)}
(async()=>{
 const b=await chromium.launch();const pg=await b.newPage({viewport:{width:390,height:844}});
 const errs=[];pg.on('pageerror',e=>errs.push(e.message));
 await pg.goto('file://'+o);
 const au=await pg.evaluate(()=>window.weaveAudit);
 console.log(build,utc,JSON.stringify({missing:au.missing,pct:au.pct}),'leftover English UI:',JSON.stringify(left));
 for(let i=0;i<pack.pages.length;i++){await pg.click('#stage-'+i);
  const v=await pg.evaluate(()=>document.documentElement.scrollWidth-innerWidth);if(v>0)console.log('overflow',i,v)}
 if(process.argv[3]){await pg.click('#stage-1');await pg.screenshot({path:process.argv[3],fullPage:false})}
 console.log('errors',errs);await b.close();
})();
