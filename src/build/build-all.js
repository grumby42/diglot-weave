// Rebuilds every page. Run from anywhere: node src/build/build-all.js
// Each page is audited in a headless browser if Playwright is installed (npm i playwright).
const {spawnSync}=require('child_process'),path=require('path');
const B=__dirname,P=path.join(B,'..','packs');
const run=(script,arg)=>{const r=spawnSync(process.execPath,[path.join(B,script)].concat(arg?[path.join(P,arg)]:[]),{encoding:'utf8'});
  process.stdout.write((arg||script)+': '+(r.stdout||'')+(r.stderr?'\nERR '+r.stderr:''));if(r.status!==0)process.exitCode=1};
run('pages.js');
for(const f of ['globos','flamencos','barra','aeropuerto','ciber','desde','comida','filosofia','leyenda','evolucion','carga','piloto','bomberos','revision'])run('build.js',f+'.js');
for(const f of ['trabajo-data','essentiel-data','clientes-data'])run('phrasebook.js',f+'.js');
run('reverse.js','review-en.js');
