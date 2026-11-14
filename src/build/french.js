// Usage: node french.js <pack.js>  Builds an English-to-French dialogue page from the shared engine.
// Line codes: "S" = Sam (English speaker, learner), "L" = Camille (native French speaker from Lyon).
const fs=require('fs'),path=require('path');
let chromium=null;try{({chromium}=require('playwright'))}catch(e){}
const SRC=path.resolve(__dirname,'..'),ROOT=path.resolve(SRC,'..');
const wrap=(s,lang)=>'<!doctype html>\n<html lang="'+lang+'"><head><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'+s+'\n</html>\n';
const pack=require(path.resolve(process.argv[2]));
const d=new Date(),p=n=>String(n).padStart(2,'0');
const build=`WEAV-${d.getUTCFullYear()}${p(d.getUTCMonth()+1)}${p(d.getUTCDate())}-${p(d.getUTCHours())}${p(d.getUTCMinutes())}Z`;
const utc=d.toISOString().replace(/\.\d+Z/,'Z');
let s=fs.readFileSync(path.join(SRC,'templates','weave.html'),'utf8');
const swap=(a,b)=>{if(s.split(a).length!==2)throw new Error('anchor x'+(s.split(a).length-1)+': '+String(a).slice(0,70));s=s.replace(a,()=>b)};
swap('<title>Viento y Sol</title>',`<title>${pack.title}</title>`);
swap('<h1>El viento y el sol</h1>',`<h1>${pack.title}</h1>`);
swap("Two friends grounded by wind retell Aesop's fable. The page starts in English and ends in Spanish.",pack.sub);
swap("Fable retold for this page from Aesop (public domain). Spanish follows Latin American pronunciation.",pack.footer+" Pronunciation follows standard French as spoken in France.");
// Content: French lexicon only (the Spanish base lexicon is removed)
s=s.replace(/const LEX=\{\};\n`[\s\S]*?`\.split\("\\n"\)/,()=>'const LEX={};\n`'+pack.lex+'`.split("\\n")');
s=s.replace(/const USE=.*\n/,()=>'const USE='+JSON.stringify(pack.use||[])+';\n');
s=s.replace(/const PAGES=\[[\s\S]*?\n\];\n\nconst SOUND/,()=>'const PAGES='+JSON.stringify(pack.pages)+';\n\nconst SOUND');
s=s.replace(/const SOUND=\[[\s\S]*?\]\];/,()=>'const SOUND='+JSON.stringify([
["on, om","nasal oh","bon: hum through your nose; don't finish the n"],
["an, en, am, em","nasal ah","vent, temps"],
["in, ain, un","nasal a","vin, pain; most speakers say un the same way"],
["u","ew","tu: say ee with rounded lips"],
["eu, œu","uh","deux, cœur: like fur without the r"],
["ou","oo","vous, tout"],
["oi","wah","moi, froid"],
["eau, au","oh","manteau, chaud"],
["é, -er, -ez","ay","café, enlever, parlez"],
["è, ê, -et, -est","eh","très, peut-être, est"],
["r","in the throat","a soft gargle, never the English r"],
["j, soft g","zh","je, rouge: the s in measure"],
["ch","sh","chaud, manteau"],
["gn","ny","gagner: the ny in canyon"],
["h","silent","homme is OM"],
["final consonants","usually silent","but c, r, f, l often sound: avec, bonjour, neuf"],
["liaison","linked","un homme sounds like uh-NOM: the n slides into the next word"]
])+';');
swap("Capital letters mark the stressed syllable. Spanish letter names follow the same logic: a is ah, b is beh, c is seh, d is deh. Respellings are a bridge, so listen as well.","French stresses the last syllable of a phrase lightly; capitals mark it. Respellings can only approximate nasal vowels and the French r, so listen as well.");
// Voices
swap('esVoice=by("es-mx")||by("es-us")||by("es-419")||by("es");','esVoice=by("fr-fr")||by("fr-ca")||by("fr");');
swap('samEs=v.find(x=>/^es[-_](mx|us|419)/i.test(x.lang)&&x!==esVoice)||esVoice;','samEs=v.find(x=>/^fr[-_](fr|ca|be|ch)/i.test(x.lang)&&x!==esVoice)||esVoice;');
swap('u.lang=s.es?(esVoice?esVoice.lang:"es-MX"):"en-US";','u.lang=s.es?(esVoice?esVoice.lang:"fr-FR"):"en-US";');
// French words keep apostrophes and hyphens (j'ai, l'homme, peut-être)
swap('const t=p.slice(1,-1).match(/\\p{L}+|[^\\p{L}]+/gu);',"const t=p.slice(1,-1).match(/\\p{L}+(?:['’-]\\p{L}+)*|[^\\p{L}]+/gu);");
// Names and labels
swap('who.textContent=l.w==="S"?"Sam":"Lucía"','who.textContent=l.w==="S"?"Sam":"Camille"');
swap('const DECK_LANG="es";','const DECK_LANG="fr";');
s=s.split('Spanish').join('French');
s=s.split('store.get("stage")').join(`store.get("${pack.key}-stage")`);
s=s.split('store.set("stage"').join(`store.set("${pack.key}-stage"`);
swap('repeat(8,1fr)',`repeat(${pack.pages.length},1fr)`);
{const seen={},dups=[];pack.lex.split('\n').forEach(row=>{const [w]=row.split('|');if(!w)return;if(seen[w])dups.push(w);seen[w]=1});if(dups.length)console.log('LINT duplicate keys:',dups.join(', '));}
s=s.split('__BUILD__').join(build).split('__UTC__').join(utc);
const o=path.join(ROOT,'fr',pack.file+'.html');
fs.writeFileSync(o,wrap(s,'en'));
if(!chromium){console.log(build,'built',o,'(audit skipped: playwright not installed)');process.exit(0)}
(async()=>{
 const b=await chromium.launch();const pg=await b.newPage({viewport:{width:390,height:844}});
 const errs=[];pg.on('pageerror',e=>errs.push(e.message));
 await pg.goto('file://'+o);
 const au=await pg.evaluate(()=>window.weaveAudit);
 const left=await pg.evaluate(()=>document.body.innerText.match(/Spanish|Lucía|español/g)||[]);
 console.log(build,utc,JSON.stringify({missing:au.missing,pct:au.pct,known:au.known}),'leftover Spanish:',JSON.stringify(left));
 for(let i=0;i<pack.pages.length;i++){await pg.click('#stage-'+i);
  const v=await pg.evaluate(()=>document.documentElement.scrollWidth-innerWidth);if(v>0)console.log('overflow',i,v)}
 console.log('bars',await pg.locator('.bar').count(),'errors',errs);await b.close();
})();
