// Stamps the three standalone templates: the pilot fable, the Spanish essentials phrasebook and the Spanish route page.
const fs=require('fs'),path=require('path');
const SRC=path.resolve(__dirname,'..'),ROOT=path.resolve(SRC,'..');
const d=new Date(),p=n=>String(n).padStart(2,'0');
const build=`WEAV-${d.getUTCFullYear()}${p(d.getUTCMonth()+1)}${p(d.getUTCDate())}-${p(d.getUTCHours())}${p(d.getUTCMinutes())}Z`,utc=d.toISOString().replace(/\.\d+Z/,'Z');
const wrap=(s,lang)=>'<!doctype html>\n<html lang="'+lang+'"><head><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'+s+'\n</html>\n';
const REPO=process.env.REPO||'grumby42/diglot-weave';
for(const [tpl,out,lang] of [['weave.html','es/viento-y-sol.html','en'],['phrasebook.html','es/lo-basico.html','en'],['ruta.html','es/index.html','en'],['home.html','index.html','en'],['en-hub.html','en/index.html','es'],['fr-hub.html','fr/index.html','en']]){
  const s=fs.readFileSync(path.join(SRC,'templates',tpl),'utf8').split('__BUILD__').join(build).split('__UTC__').join(utc).split('__REPO__').join(REPO);
  fs.writeFileSync(path.join(ROOT,out),wrap(s,lang||'en'));console.log(build,'built',out);
}

// Spaced review pages: one per folder, all sharing one deck in this site's browser storage.
const EN_UI={title:"Review",sub:"Words you tapped or missed on the dialogue and phrasebook pages come back here at growing intervals: the same day, then after 1, 3, 7 and 21 days. A few minutes a day is enough.",
 boxes:["New","1 day","3 days","1 week","3 weeks"],cols:["Word","Meaning","Box","From"],all:"All words in your deck",
 start:"Start review",next:"Next",finish:"Finish",show:"Show meaning",knew:"I knew it",missed:"I missed it",play:"Play the word",from:"From:",
 ready:"{n} words are due now.",done:"All caught up. Come back tomorrow.",emptyDeck:"Your deck is empty. Tap words on any dialogue or phrasebook page and they will show up here.",
 modeRead:"Read and choose",modeListen:"Listen and choose",reset:"Clear this deck",resetYes:"Yes, clear it",resetNo:"Keep it",
 noStore:"This browser is not saving progress (private window or blocked storage).",noTTS:"This browser has no speech voices, so audio is unavailable.",
 back:"All pages",home:"Home",stamp:"Build {b} · shipped {u}"};
const ES_UI={title:"Repaso",sub:"Las palabras que tocaste o fallaste en los diálogos y la guía de frases vuelven aquí cada vez más espaciadas: el mismo día y luego después de 1, 3, 7 y 21 días. Unos minutos al día son suficientes.",
 boxes:["Nuevas","1 día","3 días","1 semana","3 semanas"],cols:["Palabra","Significado","Caja","De"],all:"Todas las palabras de tu repaso",
 start:"Empezar el repaso",next:"Siguiente",finish:"Terminar",show:"Ver significado",knew:"La sabía",missed:"No la sabía",play:"Reproducir la palabra",from:"De:",
 ready:"Tienes {n} palabras para repasar.",done:"Todo al día. Vuelve mañana.",emptyDeck:"Tu repaso está vacío. Toca palabras en cualquier diálogo o en la guía de frases y aparecerán aquí.",
 modeRead:"Leer y elegir",modeListen:"Escuchar y elegir",reset:"Borrar este repaso",resetYes:"Sí, borrarlo",resetNo:"Conservarlo",
 noStore:"Este navegador no está guardando tu progreso (ventana privada o almacenamiento bloqueado).",noTTS:"Este navegador no tiene voces, así que no hay audio.",
 back:"Todas las páginas",home:"Inicio",stamp:"Versión {b} · publicada {u}"};
for(const [dir,cfg,lang] of [['es',{lang:'es',voices:['es-mx','es-us','es-419','es'],fallback:'es-MX',ui:EN_UI},'en'],['fr',{lang:'fr',voices:['fr-fr','fr-ca','fr'],fallback:'fr-FR',ui:EN_UI},'en'],['en',{lang:'en',voices:['en-us','en-gb','en'],fallback:'en-US',ui:ES_UI},'es']]){
  const s=fs.readFileSync(path.join(SRC,'templates','review.html'),'utf8').split('__CFG__').join(JSON.stringify(cfg)).split('__TITLE__').join(cfg.ui.title).split('__BUILD__').join(build).split('__UTC__').join(utc);
  fs.writeFileSync(path.join(ROOT,dir,'review.html'),wrap(s,lang));console.log(build,'built',dir+'/review.html');
}
