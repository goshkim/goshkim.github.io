import type { PageLoad } from './$types';
import { getPosts, getTags } from '$lib/api/posts';

export const load: PageLoad = async () => {
	const posts = await getPosts();
	const tags = await getTags();
	return {
		posts,
		tags
	};
};
