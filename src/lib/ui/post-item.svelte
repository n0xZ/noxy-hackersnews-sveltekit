<script lang="ts">
	import type { Post } from '../../types';

	export let post: Partial<Post>;
</script>

<aside class="flex flex-col justify-between p-5 space-y-1 border-b-2 h-36 w-full">
	<h2 class="font-medium line-clamp-1" title={post.title}>{post.title}</h2>
	<small class="opacity-60">{post.by}</small>
	<a href={`/${post.id}`} class="self-end"
		><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" class="h-6 w-6"
			><path
				fill="currentColor"
				d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"
			/></svg
		></a
	>
</aside>
