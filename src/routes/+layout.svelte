<script lang="ts">
	import PostItem from '$lib/ui/post-item.svelte';

	import PostSkeleton from '$lib/ui/post-skeleton.svelte';
	import '../app.css';
	import type { LayoutServerData } from './$types';
	export let data: LayoutServerData;
</script>

<header class="p-5 border-b-2">
	<nav class="container mx-auto max-w-4xl">
		<a href="/">Tukinews</a>
	</nav>
</header>
<div class="h-full ">
	<section class="hidden h-full xl:flex lg:flex md:flex xl:flex-row">
		<article class="flex flex-col justify-between h-full min-h-screen max-w-[28rem] w-full border-r-2" >
				<article class="grid h-full grid-rows-3 mt-6 place-items-center">
			{#await data.streamed.posts then deferredPosts}
					{#each deferredPosts as deferredPost}
						{#await deferredPost}
							{#each data.slicedTopPostsIds as id}
								<PostSkeleton {id} />
							{/each}
						{:then post}
							<PostItem {post} />
						{/await}
					{/each}
			{/await}
				</article>
		</article>

		<article class=" items-center w-full min-h-screen  h-full bg-gray-50">
			<slot />
		</article>
	</section>
	<section class="relative h-screen xl:h-full xl:hidden lg:hidden">
		<slot />
	</section>
</div>
