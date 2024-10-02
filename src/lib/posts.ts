import { type CollectionEntry, getCollection, getEntry } from 'astro:content';

export const getPosts = async () => {
  const posts = await getCollection('posts', ({ data }) => data.isDraft !== true);
  const sortedPosts = posts.sort(
    ({ data: prevPostData }, { data: nextPostData }) =>
      nextPostData.publishedDate.getTime() - prevPostData.publishedDate.getTime(),
  );

  return await Promise.all(
    sortedPosts.map(async publishedPost => {
      const { series, prevPost, nextPost } = publishedPost.data;

      return {
        ...publishedPost,
        data: {
          ...publishedPost.data,
          series: series && {
            name: series.name,
            entries: await Promise.all(series.entries.map(entry => getEntry(entry))),
          },
          prevPost: prevPost && (await getEntry(prevPost)),
          nextPost: nextPost && (await getEntry(nextPost)),
        },
      };
    }),
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
