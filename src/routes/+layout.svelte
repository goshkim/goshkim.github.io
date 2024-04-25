<script lang="ts">
	import '$src/app.css';

	import { page } from '$app/stores';
	import classNames from 'classnames';
	import { IconSunHigh, IconBrandGithubFilled } from '@tabler/icons-svelte';

	import { NAVIGATORS, HOME_PATH } from '$lib/const/navigator';
	import { USERNAME, GITHUB_LINK } from '$lib/const/profile';
	import { DEFAULT_ICON_SIZE } from '$lib/const/icon';
	import Link from '$lib/components/Link.svelte';
	import LogoImage from '$lib/components/LogoImage.svelte';
	import IconBox from '$lib/components/IconBox.svelte';

	const currentDateYear = new Date().getFullYear();
</script>

<div class={classNames('min-h-screen', 'flex flex-col')}>
	<header
		class={classNames(
			'px-4',
			'h-16',
			'grow-0 flex items-center justify-between',
			'bg-emerald-500',
			'text-white'
		)}
	>
		<div class={classNames('w-fit h-full', 'flex items-center')}>
			<Link path={HOME_PATH}>
				<LogoImage />
			</Link>
		</div>
		<div class={classNames('w-fit h-full', 'flex items-center gap-5')}>
			<nav class={classNames('w-fit h-full', 'flex items-center')}>
				{#each NAVIGATORS as navigator (navigator.path)}
					{@const isActive = $page.url.pathname === navigator.path}
					<Link
						className={classNames(
							'relative',
							'min-w-fit w-24 h-full',
							'px-2.5',
							'flex justify-center items-center',
							{
								'hover:bg-emerald-400': !isActive
							}
						)}
						path={navigator.path}
						{isActive}
						><span class={classNames('text-lg', { 'font-thin': !isActive })}>
							{navigator.name}
						</span>
						<div
							slot="highlighter"
							class={classNames('absolute bottom-0', 'w-full h-1.5', ' bg-emerald-600')}
						></div>
					</Link>
				{/each}
			</nav>
			<div class={classNames('w-[0.5px] h-[35%]', 'bg-white')} />
			<div class={classNames('w-fit h-fit', 'flex items-center gap-4')}>
				<!-- TODO: 다크모드 구현 -->
				<IconBox>
					<IconSunHigh slot="icon" size={DEFAULT_ICON_SIZE} />
				</IconBox>
				<Link path={GITHUB_LINK} target="_blank" rel="noreferrer noopener">
					<IconBox>
						<IconBrandGithubFilled slot="icon" size={DEFAULT_ICON_SIZE} />
					</IconBox>
				</Link>
			</div>
		</div>
	</header>

	<main class={classNames('my-6 px-4', 'grow flex flex-col items-center')}>
		<slot></slot>
	</main>

	<footer
		class={classNames(
			'py-2',
			'flex items-center justify-center',
			'text-sm',
			'border-t-[1px] border-slate-300'
		)}
	>
		<p>&copy; {currentDateYear} {USERNAME}. All rights reserved.</p>
	</footer>
</div>
