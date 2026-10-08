import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const routesToPrerender = [
  '/',
  '/about',
  '/services',
  '/services/engine-overhauling-islamabad',
  '/services/brake-service-islamabad',
  '/services/electrical-diagnostics-islamabad',
  '/services/suspension-repair-islamabad',
  '/services/transmission-repair-islamabad',
  '/services/oil-change-islamabad',
  '/faqs',
  '/contact',
  '/404'
];

async function prerender() {
  console.log('🚀 Starting SSG Prerendering for Shahzad Auto Garage...');

  const templatePath = path.resolve(rootDir, 'dist/static/index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template not found at ${templatePath}`);
  }
  const template = fs.readFileSync(templatePath, 'utf-8');

  const serverEntryPath = path.resolve(rootDir, 'dist/server/entry-server.js');
  if (!fs.existsSync(serverEntryPath)) {
    throw new Error(`Server entry not found at ${serverEntryPath}`);
  }
  
  // Convert Windows path to file:// URL for Node ESM import
  const serverEntryUrl = pathToFileURL(serverEntryPath).href;
  const { render } = await import(serverEntryUrl);

  for (const url of routesToPrerender) {
    const helmetContext = {};
    const { html: appHtml } = render(url, helmetContext);
    const { helmet } = helmetContext;

    let headTags = '';
    if (helmet) {
      headTags = [
        helmet.title ? helmet.title.toString() : '',
        helmet.priority ? helmet.priority.toString() : '',
        helmet.meta ? helmet.meta.toString() : '',
        helmet.link ? helmet.link.toString() : '',
        helmet.script ? helmet.script.toString() : ''
      ].join('\n');
    }

    // Replace placeholders
    let html = template
      .replace('<!-- app-head-placeholder -->', headTags)
      .replace('<!-- app-html-placeholder -->', appHtml);

    // Determine target output path
    let filePath;
    if (url === '/') {
      filePath = path.resolve(rootDir, 'dist/index.html');
    } else if (url === '/404') {
      filePath = path.resolve(rootDir, 'dist/404.html');
    } else {
      filePath = path.resolve(rootDir, `dist${url}/index.html`);
    }

    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, html, 'utf-8');
    console.log(`  ✓ Prerendered ${url} -> ${path.relative(rootDir, filePath)}`);
  }

  // Move client assets from dist/static to dist root
  console.log('📦 Finalizing dist structure...');
  const staticDir = path.resolve(rootDir, 'dist/static');

  // Copy assets from static to dist
  const copyRecursiveSync = (src, dest) => {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
      if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
      fs.readdirSync(src).forEach((childItemName) => {
        copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
      });
    } else {
      fs.copyFileSync(src, dest);
    }
  };

  if (fs.existsSync(staticDir)) {
    const items = fs.readdirSync(staticDir);
    for (const item of items) {
      if (item === 'index.html') continue; // Do not overwrite prerendered homepage index.html
      copyRecursiveSync(path.join(staticDir, item), path.join(rootDir, 'dist', item));
    }
    fs.rmSync(staticDir, { recursive: true, force: true });
  }

  // Remove temporary server bundle
  const serverDir = path.resolve(rootDir, 'dist/server');
  if (fs.existsSync(serverDir)) {
    fs.rmSync(serverDir, { recursive: true, force: true });
  }

  console.log('✅ Build-time SSG Prerendering Completed Successfully!');
}

prerender().catch((err) => {
  console.error('❌ Prerendering Error:', err);
  process.exit(1);
});
