// src/pages/blog/rss.xml.ts
import rss from '@astrojs/rss';
import { sanity } from '../../lib/sanityClient';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const posts = await sanity.fetch(`
    *[_type=="post"]|order(_createdAt desc){
      title,
      "slug": slug.current,
      _createdAt,
      body
    }
  `);

  const baseUrl = import.meta.env.SITE || 'https://assetpartners.jp'

  return rss({
    title: '会社サイト ブログ',
    description: '会社サイトのブログ記事一覧',
    site: baseUrl,
    items: posts.map((post: any) => ({
      title: post.title,
      pubDate: new Date(post._createdAt),
      link: `${baseUrl}/blog/${post.slug}`,
      description: typeof post.body === 'string'
        ? post.body.slice(0, 200)
        : post.body?.filter((block: any) => block._type === 'block')
            .map((block: any) => block.children?.map((child: any) => child.text).join('') || '')
            .join(' ')
            .slice(0, 200) || '',
    })),
  });
}

