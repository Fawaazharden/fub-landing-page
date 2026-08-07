// Pre-deploy validation. Run with: npm run check
// Checks required files, per-page SEO basics, internal links, and the house style rules.
import { readFile, readdir, stat } from 'node:fs/promises';
import { join, relative, dirname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

// fileURLToPath, not URL.pathname: on Windows the latter yields "/C:/..." and every stat fails.
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const REQUIRED = [
  'index.html', 'src/styles.css', 'src/app.js', 'robots.txt', 'sitemap.xml', '404.html',
  'img/logo.png', 'img/favicon.png',
  'how-it-works/index.html', 'ai-calling/index.html', 'ai-texting/index.html',
  'lead-routing/index.html', 'lead-reactivation/index.html',
  'case-studies/timothy-fub-implementation/index.html',
  'about/index.html', 'contact/index.html', 'privacy/index.html', 'terms/index.html',
];

// House style. See BRIEF.md section 7. These are hard rules, not preferences.
const BANNED_CHARS = [
  ['em dash', '\u2014'], ['en dash', '\u2013'],
  ['&mdash;', '&mdash;'], ['&ndash;', '&ndash;'],
  ['&#8212;', '&#8212;'], ['&#8211;', '&#8211;'],
];
const BANNED_PHRASES = [
  '24/7', '24-7', 'while you sleep', 'never sleeps', 'around the clock',
  'transform', 'revolutioniz', 'game chang', 'unlock', 'unleash', 'elevate',
  'empower', 'leverage', 'seamless', 'cutting edge', 'supercharge', 'delve',
  'imagine if', 'fast-paced', 'the future of',
];
// Things that must never reach a public page. See BRIEF.md section 6.
const LEAKS = [
  ['client internal search domain', /theagentic\.team/i],
  ['Railway deployment URL', /[a-z0-9-]+\.up\.railway\.app/i],
  ['US phone number that is not the business line', /\b(?!708[.\-\s]?773[.\-\s]?7231)\(?\d{3}\)?[.\-\s]?\d{3}[.\-\s]?\d{4}\b/],
  ['Retell resource id', /\b(agent|llm)_[0-9a-f]{16,}/i],
];

const errors = [];
const warnings = [];

for (const f of REQUIRED) {
  try { await stat(join(ROOT, f)); }
  catch { errors.push(`missing required file: ${f}`); }
}

const pages = [];
async function walk(dir) {
  for (const name of await readdir(dir)) {
    if (name === 'node_modules' || name === '.git' || name === 'scripts') continue;
    const p = join(dir, name);
    const s = await stat(p);
    if (s.isDirectory()) await walk(p);
    else if (p.endsWith('.html')) pages.push(p);
  }
}
await walk(ROOT);

for (const p of pages) {
  const rel = relative(ROOT, p).split(sep).join('/');
  const raw = await readFile(p, 'utf8');
  const isError = rel === '404.html';

  if (!isError) {
    for (const token of ['<title>', 'name="description"', 'styles.css', 'app.js']) {
      if (!raw.includes(token)) errors.push(`${rel}: missing ${token}`);
    }
    if (!raw.includes('rel="canonical"')) warnings.push(`${rel}: no canonical`);

    const title = raw.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? '';
    if (title.length > 65) warnings.push(`${rel}: title ${title.length} chars (over 65)`);
    const desc = raw.match(/name="description" content="([\s\S]*?)"/)?.[1] ?? '';
    if (desc && (desc.length < 70 || desc.length > 165)) {
      warnings.push(`${rel}: description ${desc.length} chars (want 70 to 165)`);
    }
    const h1s = (raw.match(/<h1[\s>]/g) || []).length;
    if (h1s !== 1) errors.push(`${rel}: ${h1s} h1 tags, expected exactly 1`);
  }

  for (const [label, ch] of BANNED_CHARS) {
    const n = raw.split(ch).length - 1;
    if (n) errors.push(`${rel}: ${n} x ${label}`);
  }
  // Only scan visible text for banned phrases, so URLs and attributes cannot trip it.
  const text = raw.replace(/<script[\s\S]*?<\/script>/g, ' ')
                  .replace(/<[^>]+>/g, ' ').toLowerCase();
  for (const phrase of BANNED_PHRASES) {
    if (text.includes(phrase)) errors.push(`${rel}: banned phrase "${phrase}"`);
  }
  for (const [label, re] of LEAKS) {
    const m = raw.match(re);
    if (m) errors.push(`${rel}: possible leak, ${label} (${m[0]})`);
  }
  if (/placeholder copy|content pending|lorem ipsum|TODO/i.test(raw)) {
    errors.push(`${rel}: placeholder copy left in`);
  }

  // Internal links resolve to a real file. Root-absolute links carry the deploy
  // prefix (the site is served from /fub/), so strip it before resolving on disk.
  for (const m of raw.matchAll(/(?:href|src)="(?!https?:|mailto:|tel:|#|data:)([^"#?]+)/g)) {
    let target = m[1];
    if (target.endsWith('/')) target += 'index.html';
    const abs = target.startsWith('/')
      ? resolve(ROOT, target.replace(/^\/fub\//, '').replace(/^\//, ''))
      : resolve(dirname(p), target);
    try { await stat(abs); }
    catch { errors.push(`${rel}: dead internal link -> ${m[1]}`); }
  }
}

for (const w of warnings) console.log(`warn  ${w}`);
if (errors.length) {
  for (const e of errors) console.error(`ERROR ${e}`);
  console.error(`\n${errors.length} error(s), ${warnings.length} warning(s).`);
  process.exit(1);
}
console.log(`\nOK. ${pages.length} pages, ${REQUIRED.length} required files, ${warnings.length} warning(s).`);
