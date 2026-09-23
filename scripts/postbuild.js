import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('dist directory does not exist. Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

const routes = [
  {
    path: 'services',
    title: 'Offshore Accounting & Bookkeeping Services | NK Associates',
    canonical: 'https://nkassociatesglobal.com/services',
    description: 'Explore NK Associates comprehensive offshore accounting services: daily bookkeeping, bank reconciliations, month-end close, accounts payable, accounts receivable, and tax prep support.'
  },
  {
    path: 'how-it-works',
    title: 'How It Works | Simple 4-Step Onboarding & Pilot | NK Associates',
    canonical: 'https://nkassociatesglobal.com/how-it-works',
    description: 'Learn how easy it is to partner with NK Associates. Start with a risk-free 2–4 week pilot on 1-2 client ledgers, review workpaper quality, and scale with confidence.'
  },
  {
    path: 'security',
    title: 'Data Security, Compliance & Confidentiality | NK Associates',
    canonical: 'https://nkassociatesglobal.com/security',
    description: 'Explore NK Associates multi-layered data security architecture: bank-grade encryption, zero local data retention, strict NDAs, and ISO-aligned practice controls.'
  },
  {
    path: 'about',
    title: 'About NK Associates | Global Offshore Accounting Partner',
    canonical: 'https://nkassociatesglobal.com/about',
    description: 'Learn about NK Associates mission, experienced leadership, quality-first delivery philosophy, and offshore accounting capabilities for global accounting practices.'
  },
  {
    path: 'faq',
    title: 'Frequently Asked Questions (FAQ) | Offshore Accounting Support | NK Associates',
    canonical: 'https://nkassociatesglobal.com/faq',
    description: 'Find answers to all your questions regarding NK Associates 2–4 week pilot program, data security protocols, white-label delivery, supported software, and pricing models.'
  },
  {
    path: 'contact',
    title: 'Schedule a 15-Minute Discovery Call | NK Associates',
    canonical: 'https://nkassociatesglobal.com/contact',
    description: 'Connect with our practice specialists to explore how offshore accounting support can expand your firm capacity. Book a call or initiate a pilot.'
  }
];

console.log('Generating static route HTML files for SPA SEO on static hosts...');

routes.forEach((route) => {
  const routeDir = path.join(distDir, route.path);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  let routeHtml = baseHtml;

  // Replace canonical
  routeHtml = routeHtml.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${route.canonical}" />`
  );

  // Replace title
  routeHtml = routeHtml.replace(
    /<title>[^<]*<\/title>/i,
    `<title>${route.title}</title>`
  );

  // Replace meta title
  routeHtml = routeHtml.replace(
    /<meta\s+name="title"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="title" content="${route.title}" />`
  );

  // Replace og:title & twitter:title
  routeHtml = routeHtml.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${route.title}" />`
  );
  routeHtml = routeHtml.replace(
    /<meta\s+property="twitter:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="twitter:title" content="${route.title}" />`
  );

  // Replace description
  routeHtml = routeHtml.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${route.description}" />`
  );
  routeHtml = routeHtml.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${route.description}" />`
  );
  routeHtml = routeHtml.replace(
    /<meta\s+property="twitter:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="twitter:description" content="${route.description}" />`
  );

  // Replace og:url & twitter:url
  routeHtml = routeHtml.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${route.canonical}" />`
  );
  routeHtml = routeHtml.replace(
    /<meta\s+property="twitter:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="twitter:url" content="${route.canonical}" />`
  );

  fs.writeFileSync(path.join(routeDir, 'index.html'), routeHtml, 'utf8');
  console.log(`✓ Created: dist/${route.path}/index.html`);
});

console.log('Static route generation complete!');
