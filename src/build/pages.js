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
