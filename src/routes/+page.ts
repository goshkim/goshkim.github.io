import type { PageLoad } from './$types';
import { getPosts, getTags } from '$lib/api/posts';

export const load: PageLoad = async ({ url }) => {
	const searchParams = url.searchParams;
	const title = searchParams.get('title') ?? undefined;
	const posts = await getPosts({ title });
	const tags = await getTags();
	return {
		posts,
		tags
	};
};
