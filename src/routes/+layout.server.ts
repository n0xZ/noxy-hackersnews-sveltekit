import type { LayoutServerLoad } from './$types';
import { env } from '$env/dynamic/private';
import type { Post } from '../types';
export const load: LayoutServerLoad = async ({ fetch }) => {
	const res = await fetch(env.TOP_POSTS_URL);
	const topPostsIds: number[] = await res.json();
	const slicedTopPostsIds = topPostsIds.slice(0, 50);

	const deferredPosts = slicedTopPostsIds.map(async (d): Promise<Partial<Post>> => {
		const postRes = await fetch(`${env.API_URL}/item/${d}.json?print=pretty`);
		const { title, id, by }: Post = await postRes.json();
		return { title, id, by };
	});
	return {
		slicedTopPostsIds,
		streamed: {
			posts: deferredPosts
		}
	};
};
