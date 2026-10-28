import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
const products=JSON.parse(await readFile('content/products.json','utf8'));
const posts=JSON.parse(await readFile('content/posts.json','utf8'));
for(const list of [products,posts])assert.equal(new Set(list.map(x=>x.id)).size,list.length,'IDs must be unique');
for(const p of products){for(const key of ['id','name','description','category','status','demo','note'])assert.ok(p[key],`${p.id} missing ${key}`);assert.ok(p.features.length);if(p.demo.startsWith('https://'))assert.equal(new URL(p.demo).protocol,'https:');assert.ok(!p.demo.includes('github.com/'),'Product CTA must not be a repository link')}
for(const p of posts){assert.ok(p.body.length);assert.match(p.date,/^\d{4}-\d{2}-\d{2}$/)}
const html=await readFile('index.html','utf8');const css=await readFile('styles.css','utf8');assert.ok(css.startsWith(':root'));for(const f of ['/styles.css','/app.js','/favicon.svg','/assets/falcon-flight.webp','/assets/falcon-portrait.webp'])await access('.'+f);for(const s of ['products','playground','journal','about','contact'])assert.ok(html.includes(`id="${s}"`));
console.log(`Validated ${products.length} products, ${posts.length} articles, local assets and section targets.`);
