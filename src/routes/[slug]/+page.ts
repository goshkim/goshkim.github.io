import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = import.meta.glob('/src/lib/posts/1/post.md', { eager: true });
		console.log(post);
		return {
			post
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}.`);
	}
};
