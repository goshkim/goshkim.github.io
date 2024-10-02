import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';

import { SITE } from '@/config';

const { title, description } = SITE;

//TODO: RSS 피드 설정에 필요한 값 마저 채우기
export const GET: APIRoute = async ({ site }) => {
  return rss({
    title,
    description,
    site: site!,
    items: [],
  });
};
