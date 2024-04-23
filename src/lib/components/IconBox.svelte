<script lang="ts">
	import classNames from 'classnames';

	export let className: string | undefined = undefined;
</script>

<button
	class={className ??
		classNames(
			'flex items-center justify-center',
			'hover:opacity-70 hover:transform-opacity hover:duration-300 hover:ease-in-out',
			'cursor-pointer'
		)}
>
	<slot name="icon"></slot>
</button>
