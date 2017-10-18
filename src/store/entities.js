// @flow

import moment from 'moment'

export type Map<T> = {
	[id: string]: T,
}

export type Media = {
	url: string,
	width: number,
	height: number,
	alt: ?string,
}

export type HomePage = {
	heros: Media[],
}

export type BlogPost = {
	slug: string,
	title: string,
	date: moment,
	content: string,
}

export type Store = {
	homePage: HomePage,
	blogPosts: Map<BlogPost>,
	blogPostsByDate: string[],
}

export const DEFAULT_STORE_STATE: Store = {
	homePage: {
		heros: [],
	},
	blogPosts: {},
	blogPostsByDate: [],
}
