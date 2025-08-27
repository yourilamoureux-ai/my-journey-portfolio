import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Youri Lamoureux | A Journey of Reinvention',
    description: 'My journey of reinvention in El Salvador. Follow along as I vibe code, learn Generative AI and share the wins and lessons of building in public.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en</language>`,
  });
}