export interface Post {
	title: string;
	description: string;
	tags: string[];
	series?: string;
	createdAt: string;
	slug: string;
}

export interface PostsData {
	posts: Post[];
}

export interface PostSearchParams {
	title?: string;
}

export const getPosts = async () => {
	const posts = [];
	const postFilePaths = import.meta.glob('/src/lib/posts/**/*.md', { eager: true });

	for (const postFilePath in postFilePaths) {
		const postFile = postFilePaths[postFilePath];

		if (postFile && typeof postFile === 'object' && 'metadata' in postFile) {
			const post = postFile.metadata as Post;
			posts.push(post);
		}
	}

	return posts.sort(
		(p1, p2) => new Date(p2.createdAt).getTime() - new Date(p1.createdAt).getTime()
	);
};

export const getTags = async () => {
	const posts = await getPosts();
	const tags = new Set();
	posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
	return [...tags];
};
