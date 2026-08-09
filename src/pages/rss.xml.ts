import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import site from '../data/site.json';
import { withBase } from '../lib/url';

const posts = await getCollection('posts');
const sortedPosts = posts.sort(
  (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
);

export async function GET(context: APIContext) {
  return rss({
    title: site.title,
    description: site.description,
    site: new URL(withBase('/'), context.site).href,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: withBase(`/blog/${post.id}/`),
    })),
    customData: '<language>en-us</language>',
  });
}
