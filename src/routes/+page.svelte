<script lang="ts">
	import classNames from 'classnames';
	import { IconCircleX, IconSearch } from '@tabler/icons-svelte';
	import type { PageData } from './$types';

	import PostCard from '$lib/components/PostCard.svelte';
	import Link from '$lib/components/Link.svelte';
	import IconBox from '$lib/components/IconBox.svelte';
	import { getPosts } from '$lib/api/posts';
	import { DEFAULT_ICON_SIZE } from '$lib/const/icon';

	export let data: PageData;

	let titleInputValue = '';
	let isInputFocused = false;

	const clearTitleInputValue = () => {
		titleInputValue = '';
	};
</script>

<svelte:head></svelte:head>

<div class={classNames('relative', 'w-full max-w-3xl', 'flex flex-col')}>
	<form
		class={classNames(
			'relative',
			'mb-8 px-3',
			'w-full h-16',
			'flex items-center gap-2',
			'rounded-md',
			'outline outline-slate-500',
			{
				'outline-2': !isInputFocused,
				'outline-4': isInputFocused
			}
		)}
		on:submit|preventDefault={async () => {
			//TODO: 검색 로직 이상한듯
			const searchTitle = titleInputValue.trim();
			if (!searchTitle) {
				clearTitleInputValue();
				return;
			}

			const posts = await getPosts({ title: searchTitle });
			data = { ...data, posts };
		}}
	>
		<IconSearch class={classNames('shrink-0', 'text-slate-500')} size={DEFAULT_ICON_SIZE} />
		<input
			class={classNames(
				'relative',
				'w-full h-full',
				'flex items-center',
				'rounded-md',
				'text-lg',
				'outline-none',
				'placeholder:text-slate-500',
				{ 'placeholder:opacity-0': isInputFocused }
			)}
			type="text"
			name="title"
			placeholder="게시글 제목 검색"
			bind:value={titleInputValue}
			on:focusin={() => (isInputFocused = true)}
			on:focusout={() => (isInputFocused = false)}
		/>
		{#if titleInputValue}
			<IconBox onClick={clearTitleInputValue}>
				<IconCircleX class="text-slate-500" size={DEFAULT_ICON_SIZE} />
			</IconBox>
		{/if}
	</form>

	{#each data.posts as post (post.title)}
		<PostCard {post} />
	{:else}
		<!-- TODO: 검색 결과 없을 떄 -->
		<span>없어 짜샤</span>
	{/each}

	<aside class={classNames('absolute top-0 -right-64', 'w-48 h-fit', 'hidden xl:flex flex-col')}>
		<h1 class={classNames('mb-1.5', 'text-lg font-medium')}>태그 목록</h1>
		<div class={classNames('flex flex-col gap-1')}>
			{#each data.tags as tag (tag)}
				<Link path={`/tags/${tag}`} className="hover:underline underline-offset-2">
					{tag}
				</Link>
			{/each}
		</div>
	</aside>
</div>
