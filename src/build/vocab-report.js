// Usage: node src/build/vocab-report.js   (needs Playwright; run after a build)
// Measures how often each Spanish word recurs across the dialogue packs, in the suggested route order,
// and writes src/vocab-report.md. A word is "core" if it appears in at least 3 packs.
const fs=require('fs'),path=require('path');const {chromium}=require('playwright');
const ROOT=path.resolve(__dirname,'..','..');
const ROUTE=['viento-y-sol','desde-el-globo','hablemos-de-globos','a-la-mesa','en-la-barra','en-la-rampa','turno-de-noche','historias-de-cabina','la-llamada','flamencos-y-medias','los-dos-volcanes','respuesta-a-incidentes','la-revision-mensual','los-picos-de-los-pinzones','el-globo-de-teseo'];
(async()=>{
  const b=await chromium.launch();const per={};
  for(const f of ROUTE){
    const pg=await b.newPage();await pg.goto('file://'+path.join(ROOT,'es',f+'.html'));
    per[f]=await pg.evaluate(()=>{const c={};PAGES.forEach(p=>p.parsed.forEach(l=>l.toks.forEach(t=>{if(t.k==='es')c[t.key]=(c[t.key]||0)+1})));return c});
    await pg.close();
  }
  await b.close();
  const words={};
  ROUTE.forEach(f=>Object.entries(per[f]).forEach(([w,n])=>{words[w]=words[w]||{packs:[],n:0};words[w].packs.push(f);words[w].n+=n}));
  const all=Object.entries(words);
  const core=all.filter(([,v])=>v.packs.length>=3).sort((a,b)=>b[1].n-a[1].n);
  const once=all.filter(([,v])=>v.packs.length===1).length;
  const lines=['# Spanish vocabulary recycling report','',
   `Generated ${new Date().toISOString().replace(/\.\d+Z/,'Z')} from ${ROUTE.length} dialogue packs.`,'',
   `- Distinct words and phrases: ${all.length}`,
   `- Appear in only one pack: ${once} (${Math.round(100*once/all.length)}%)`,
   `- Core (in 3 or more packs): ${core.length}`,
   `- Core words seen 8 or more times in total: ${core.filter(([,v])=>v.n>=8).length}`,'',
   '| Word | Packs | Total uses |','|---|---|---|',
   ...core.map(([w,v])=>`| ${w} | ${v.packs.length} | ${v.n} |`)];
  const CORE=require(path.join(ROOT,'src','packs','core.js'));
  const weak=CORE.filter(w=>!words[w]||words[w].packs.length<3||words[w].n<8);
  lines.splice(9,0,`- Core list (src/packs/core.js): ${CORE.length} words; meeting the target of 3+ packs and 8+ uses: ${CORE.length-weak.length}`,
    weak.length?`- Below target: ${weak.map(w=>w+' ('+(words[w]?words[w].packs.length+' packs, '+words[w].n+' uses':'unused')+')').join(', ')}`:'- Every core word meets the target.','');
  fs.writeFileSync(path.join(ROOT,'src','vocab-report.md'),lines.join('\n')+'\n');
  console.log(lines.slice(0,9).join('\n'));
  // Per-pack: share of each pack's words already met in earlier packs on the route
  const seen=new Set();
  ROUTE.forEach(f=>{const ks=Object.keys(per[f]);const old=ks.filter(k=>seen.has(k)).length;console.log(f.padEnd(26),'words',String(ks.length).padStart(3),'already met',Math.round(100*old/ks.length)+'%');ks.forEach(k=>seen.add(k))});
})();
