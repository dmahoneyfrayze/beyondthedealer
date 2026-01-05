import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://beyondthedealership.ca'; // Replace with actual domain

const staticRoutes = [
    '/',
    '/used',
    '/finance',
    '/trade-in',
    '/research/thunder-bay',
    '/research/new-vs-used',
    '/research/finance-vs-lease',
    '/research/student-programs',
    '/research/new-to-canada',
    '/ev-hybrid-guide-bc',
    '/second-chance-financing',
    '/sign-and-drive',
    '/credit-rebuilding',
    '/leasing',
    '/warranties',
    '/service-specials',
    '/find-my-car',
    '/saved-vehicles',
    '/compare',
    '/privacy',
    '/terms'
];

const generateSitemap = () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes
            .map(route => {
                return `  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
            })
            .join('\n')}
</urlset>`;

    const publicDir = path.resolve(__dirname, '../public');
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
    console.log('Sitemap generated successfully at public/sitemap.xml');
};

generateSitemap();
