// Usage: node phrasebook.js <data.js>  Builds a phrasebook page from the Lo básico template with new data.
const fs=require('fs'),path=require('path');
let chromium=null;try{({chromium}=require('playwright'))}catch(e){}
const SRC=path.resolve(__dirname,'..'),ROOT=path.resolve(SRC,'..');
const wrap=(s,lang)=>'<!doctype html>\n<html lang="'+lang+'"><head><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'+s+'\n</html>\n';

const D=require(path.resolve(process.argv[2]));
const dt=new Date(),p=n=>String(n).padStart(2,'0');
const build=`WEAV-${dt.getUTCFullYear()}${p(dt.getUTCMonth()+1)}${p(dt.getUTCDate())}-${p(dt.getUTCHours())}${p(dt.getUTCMinutes())}Z`,utc=dt.toISOString().replace(/\.\d+Z/,'Z');
let s=fs.readFileSync(path.join(SRC,'templates','phrasebook.html'),'utf8');
const swap=(a,b)=>{if(s.split(a).length!==2)throw new Error('anchor: '+a.slice(0,60));s=s.replace(a,()=>b)};
const esc=x=>x.replace(/&/g,'&amp;').replace(/</g,'&lt;');
swap('<title>Lo básico</title>',`<title>${esc(D.title)}</title>`);
swap('<h1>Lo básico</h1>',`<h1>${esc(D.title)}</h1>`);
swap(/<p class="sub">[^<]*<\/p>/.exec(s)[0],`<p class="sub">${esc(D.sub)}</p>`);
swap('placeholder="Search Spanish or English"',`placeholder="Search ${D.langName} or English"`);
swap(/<p>Latin American pronunciation\.[^<]*<\/p>/.exec(s)[0],`<p>${esc(D.footer)}</p>`);
swap('"No Spanish voice found.',`"No ${D.langName} voice found.`);
swap('u.lang=voice?voice.lang:"es-MX"',`u.lang=voice?voice.lang:"${D.fallback}"`);
s=s.split('"basico-').join(`"${D.key}-`);
if(D.ui)D.ui.forEach(([x,y])=>swap(x,y));
const start=s.indexOf('const LANG={'),end=s.indexOf(']};\nLANG.sections.forEach');
if(start<0||end<0)throw new Error('LANG block');
s=s.slice(0,start)+'const LANG='+JSON.stringify({code:D.code,voices:D.voices,sections:D.sections})+';'+s.slice(end+3);
if(D.htmlLang)s=s.replace('<title>',`<title>`);
s=s.split('__BUILD__').join(build).split('__UTC__').join(utc);
const o=path.join(ROOT,(D.dir||'es'),D.file+'.html');
fs.writeFileSync(o,wrap(s,(D.htmlLang||'en')));
if(!chromium){console.log(build,'built',o,'(audit skipped: playwright not installed)');process.exit(0)}
(async()=>{const b=await chromium.launch();const pg=await b.newPage({viewport:{width:390,height:844}});
const e=[];pg.on('pageerror',x=>e.push(x.message));await pg.goto('file://'+o);
const au=await pg.evaluate(()=>window.basicoAudit);
const total=au?au.sections.reduce((n,x)=>n+ +x.split(':')[1],0):0;
console.log(build,JSON.stringify(au),'total',total,'overflow',await pg.evaluate(()=>document.documentElement.scrollWidth-innerWidth),'errors',e);
if(process.argv[3]){await pg.screenshot({path:process.argv[3]})}
await b.close()})();
