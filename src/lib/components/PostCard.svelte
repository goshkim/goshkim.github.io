<script lang="ts">
	import classNames from 'classnames';

	import type { Post } from '$lib/api/posts';
	import Link from '$lib/components/Link.svelte';
	import Tag from '$lib/components/Tag.svelte';

	export let post: Post;

	const { title, description, tags, createdAt, slug } = post;
</script>

<article
	class={classNames(
		'py-4',
		'w-full h-52',
		'flex flex-col gap-1 justify-between',
		'border-b-[1px] border-b-slate-300'
	)}
>
	<div class="grow flex flex-col gap-2">
		<h1 class={classNames('text-2xl font-medium', 'break-words line-clamp-2')}>
			<Link path={`/${title}`}>
				{title}
			</Link>
		</h1>
		<!-- TODO: 시간 형식 변경 -->
		<p class="text-sm">{createdAt}</p>
		<p class={classNames('break-words line-clamp-2', 'leading-5')}>
			{description}
		</p>
	</div>
	<div class="flex items-center gap-2">
		{#each tags as tag (tag)}
			<Link path={`/tags/${tag}`}>
				<Tag>{tag}</Tag>
			</Link>
		{/each}
	</div>
</article>
