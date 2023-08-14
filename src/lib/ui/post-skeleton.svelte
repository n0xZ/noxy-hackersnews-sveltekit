<script lang="ts">
	export let id: number;
</script>

<aside class="flex flex-col justify-between p-5 space-y-1 border-b-2 w-full h-36 max-w-md">
	<div class="h-7 w-64 bg-gray-100 rounded-md animate-pulse" />
	<div class="h-4 w-16 animate-pulse bg-gray-100 rounded-md" />
	<a href={`/${id}`} class="self-end"
		><svg
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			viewBox="0 0 32 32"
			class="h-6 w-6"
			><path
				fill="currentColor"
				d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"
			/></svg
		></a
	>
</aside>
