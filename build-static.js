// Copia o site estático para dist/ (a Vercel publica essa pasta).
const fs = require('fs');
const files = ['index.html','politica-de-privacidade.html','robots.txt','sitemap.xml',
  'hero.webp','hero-800.webp','hero-1400.webp','hero-1400.jpg','hero-mobile.webp','alexandre.webp','alexandre.jpg'];
fs.rmSync('dist', { recursive: true, force: true });
fs.mkdirSync('dist');
for (const f of files) fs.copyFileSync(f, 'dist/' + f);
console.log('Site copiado para dist/:', files.length, 'arquivos');
