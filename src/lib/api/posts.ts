export interface Post {
	title: string;
	description: string;
	tags: string[];
	series?: string;
	createdAt: string;
}

export interface PostsData {
	posts: Post[];
}

export interface PostSearchParams {
	title?: string;
}

export const getPosts = async (params: PostSearchParams = {}) => {
	let posts = [];
	const postFilePaths = import.meta.glob('/src/lib/posts/**/*.md', { eager: true });

	for (const postFilePath in postFilePaths) {
		const postFile = postFilePaths[postFilePath];

		if (postFile && typeof postFile === 'object' && 'metadata' in postFile) {
			const post = postFile.metadata as Post;
			posts.push(post);
		}
	}

	if (params && params.title) {
		posts = posts.filter((post) => post.title === params.title);
	}

	return posts.sort(
		(p1, p2) => new Date(p2.createdAt).getTime() - new Date(p1.createdAt).getTime()
	);
};
