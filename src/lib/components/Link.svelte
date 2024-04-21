<script lang="ts">
	export let className: string | undefined = undefined;
	export let path: string;
	export let isActive: boolean | undefined = undefined;
	export let target: string | undefined = undefined;
	export let rel: string | undefined = undefined;

	let isHover = false;
</script>

<a
	class={className}
	href={path}
	{target}
	{rel}
	on:mouseenter={() => (isHover = true)}
	on:mouseleave={() => (isHover = false)}
>
	<slot name="content"></slot>
	{#if isActive || isHover}
		<slot name="highlighter"></slot>
	{/if}
</a>
