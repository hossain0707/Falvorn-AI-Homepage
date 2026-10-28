import {mkdir,copyFile,cp,rm} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});await mkdir('dist',{recursive:true});
for(const f of ['index.html','styles.css','app.js','favicon.svg','robots.txt'])await copyFile(f,'dist/'+f);
for(const d of ['assets','content'])await cp(d,'dist/'+d,{recursive:true});
console.log('Built Falvorn AI → dist');
