<script lang="ts">
	import classNames from 'classnames';
</script>

<span
	class={classNames(
		'py-1 px-2',
		'text-sm',
		'bg-slate-300',
		'rounded-lg',
		'hover:opacity-70',
		'transition-opacity duration-300 ease-in-out'
	)}
>
	<slot></slot>
</span>
