import {readFile,readdir,stat} from 'node:fs/promises';
import {join,relative} from 'node:path';
const root=new URL('../',import.meta.url).pathname;
const required=['index.html','src/styles.css','src/app.js','robots.txt','sitemap.xml','404.html','how-it-works/index.html','ai-calling/index.html','ai-texting/index.html','lead-routing/index.html','lead-reactivation/index.html','case-studies/timothy-fub-implementation/index.html','about/index.html','contact/index.html','privacy/index.html','terms/index.html'];
const missing=[];for(const f of required){try{await stat(join(root,f))}catch{missing.push(f)}}
if(missing.length)throw new Error('Missing: '+missing.join(', '));
const html=[];async function walk(dir){for(const n of await readdir(dir)){const p=join(dir,n),s=await stat(p);if(s.isDirectory())await walk(p);else if(p.endsWith('.html'))html.push(p)}}await walk(root);
for(const p of html){const t=await readFile(p,'utf8');for(const token of ['<title>','meta name="description"','src/styles.css','src/app.js']){if(!t.includes(token)&&!p.endsWith('404.html'))throw new Error(`${relative(root,p)} missing ${token}`)}if(/placeholder copy|content pending|Metric label/i.test(t))throw new Error(`${relative(root,p)} still has placeholder copy`)}
console.log(`Validated ${html.length} HTML pages and ${required.length} required files.`);
