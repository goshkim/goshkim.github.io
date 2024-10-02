import { type CollectionEntry, getCollection } from 'astro:content';

export const getPosts = async () => {
  const publishedPosts = await getCollection('posts', ({ data }) => data.isDraft !== true);
  return publishedPosts.sort(
    ({ data: prevPostData }, { data: nextPostData }) =>
      nextPostData.publishedDate.getTime() - prevPostData.publishedDate.getTime(),
  );
};

export const getTags = async () => {
  const posts = await getPosts();
  return [...new Set(posts.flatMap(({ data }) => data.tags))];
};

export const getPostsGroupByTag = async () => {
  const posts = await getPosts();
  return posts.reduce(
    (grouped, post) => {
      post.data.tags.forEach(tag => {
        grouped[tag] = [...(grouped[tag] || []), post];
      });
      return grouped;
    },
    {} as Record<string, CollectionEntry<'posts'>[]>,
  );
};
