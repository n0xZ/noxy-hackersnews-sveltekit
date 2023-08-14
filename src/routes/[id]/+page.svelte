<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Tukinews : {data.relatedPost.title}</title>
</svelte:head>
<main class="flex flex-col container mx-auto max-w-4xl prose prose-sm mt-7">
	<h2 class="text-center">{data.relatedPost.title}</h2>
	<small class="mb-10 opacity-70">{data.relatedPost.by}</small>
	{#if data.relatedPost.text}
		<div contenteditable="true" bind:innerHTML={data.relatedPost.text} />
	{:else}
		<a href={data.relatedPost.url}>Related post</a>
	{/if}
</main>
