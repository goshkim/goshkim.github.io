<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import logoSvg from '$lib/assets/logo.svg';

	export let className: string | undefined = undefined;
	export let size: number | `${number}` | undefined = 140;

	const alt = '블로그 로고 이미지';
</script>

<img class={className} src={logo} {alt} width={size} height={size} />
