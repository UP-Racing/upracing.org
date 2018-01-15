// @flow

import moment from 'moment'

export type Map<T> = {
	[id: string]: T,
}

export type Media = {
	src: string,
	width: number,
	height: number,
	alt: ?string,
}

export type HomePage = {
	heros: Media[],
	googleDescription: string,
}

export type About = {
	content: string,
}

export type Story = {
	content: string,
}

export type BlogPost = {
	slug: string,
	title: string,
	date: moment,
	content: string,
	blurb: string,
}

export type Sponsor = {
	name: string,
	link: string,
	image: Media,
	level: number,
}

export type Store = {
	homePage: HomePage,
	blogPosts: Map<BlogPost>,
	blogPostsByDate: string[],
	sponsors: Sponsor[],
	about: About,
	story: Story,
}

export const DEFAULT_STORE_STATE: Store = {
	homePage: {
		heros: [],
		googleDescription: '',
	},
	blogPosts: {},
	blogPostsByDate: [],
	sponsors: [],
	about: {
		content: '',
	},
	story: {
		content: '',
	},
}
