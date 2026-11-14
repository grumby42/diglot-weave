// Usage: node build.js <pack.js>  Builds a stamped artifact page and offline copy from the pilot's engine.
const fs=require('fs'),path=require('path');
let chromium=null;try{({chromium}=require('playwright'))}catch(e){}
const SRC=path.resolve(__dirname,'..'),ROOT=path.resolve(SRC,'..');
const wrap=(s,lang)=>'<!doctype html>\n<html lang="'+lang+'"><head><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'+s+'\n</html>\n';

const pack=require(path.resolve(process.argv[2]));
const d=new Date(),p=n=>String(n).padStart(2,'0');
const build=`WEAV-${d.getUTCFullYear()}${p(d.getUTCMonth()+1)}${p(d.getUTCDate())}-${p(d.getUTCHours())}${p(d.getUTCMinutes())}Z`;
const utc=d.toISOString().replace(/\.\d+Z/,'Z');
let s=fs.readFileSync(path.join(SRC,'templates','weave.html'),'utf8');
const swap=(a,b)=>{if(!s.includes(a))throw new Error('missing '+a);s=s.split(a).join(b)};
swap('<title>Viento y Sol</title>',`<title>${pack.title}</title>`);
swap('<h1>El viento y el sol</h1>',`<h1>${pack.title}</h1>`);
swap("Two friends grounded by wind retell Aesop's fable. The page starts in English and ends in Spanish.",pack.sub);
swap("Fable retold for this page from Aesop (public domain). Spanish follows",pack.footer+" Spanish follows");
swap('`.split("\\n").forEach',"\n"+require(path.join(SRC,'packs','globos.js')).lex+"\n"+require(path.join(SRC,'packs','common.js'))+"\n"+pack.lex+'`.split("\\n").forEach');
s=s.replace(/const USE=.*\n/,()=>'const USE='+JSON.stringify(pack.use||[])+';\n');
s=s.replace(/const PAGES=\[[\s\S]*?\n\];\n\nconst SOUND/,()=>'const PAGES='+JSON.stringify(pack.pages)+';\n\nconst SOUND');
swap('store.get("stage")',`store.get("${pack.key}-stage")`);
swap('store.set("stage"',`store.set("${pack.key}-stage"`);
swap('repeat(8,1fr)',`repeat(${pack.pages.length},1fr)`);
{const seen={},dups=[],rr=[];pack.lex.split('\n').forEach(row=>{const [w,p]=row.split('|');if(!w)return;if(seen[w])dups.push(w);seen[w]=1;if(/^r/.test(w)&&p&&/^r[^r]/i.test(p))rr.push(w);});if(dups.length)console.log('LINT duplicate keys:',dups.join(', '));if(rr.length)console.log('LINT initial r not trilled:',rr.join(', '));}
s=s.split('__BUILD__').join(build).split('__UTC__').join(utc);
const o=path.join(ROOT,'es',pack.file+'.html');
fs.writeFileSync(o,wrap(s,'en'));
if(!chromium){console.log(build,'built',o,'(audit skipped: playwright not installed)');process.exit(0)}
(async()=>{
 const b=await chromium.launch();const pg=await b.newPage({viewport:{width:390,height:844}});
 const errs=[];pg.on('pageerror',e=>errs.push(e.message));
 await pg.goto('file://'+o);
 const au=await pg.evaluate(()=>window.weaveAudit);
 console.log(build,utc,JSON.stringify({missing:au.missing,pct:au.pct,known:au.known}));
 for(let i=0;i<pack.pages.length;i++){await pg.click('#stage-'+i);
  const v=await pg.evaluate(()=>document.documentElement.scrollWidth-innerWidth);if(v>0)console.log('overflow',i,v)}
 console.log('bars',await pg.locator('.bar').count(),'errors',errs);await b.close();
})();
