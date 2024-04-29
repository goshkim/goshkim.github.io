<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const post = data['post']['/src/lib/posts/1/post.md'];
	let darkMode = false;
</script>

<div>
	<button on:click={() => (darkMode = !darkMode)}> THEME CHANGE </button>
	<div class="text-lg border prose">
		<svelte:component this={post.default} />
	</div>
</div>

{#if darkMode}
	<style>
		@import './prism-material-dark.css';
	</style>
{:else}
	<style>
		@import './prism-material-light.css';
	</style>
{/if}
