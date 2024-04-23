import { getPosts } from '$lib/api/posts';

export const load = async () => {
	const posts = await getPosts();
	return {
		posts: posts
	};
};
