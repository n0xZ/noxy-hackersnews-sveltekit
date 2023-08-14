import type { PageLoad } from './$types';

import type { Post } from '../../types';
import type { Load } from '@sveltejs/kit';
export const load: Load = async ({ fetch, params }) => {
	const id = params.id;
	const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
	const post: Post = await res.json();
	return { relatedPost: post };
};
