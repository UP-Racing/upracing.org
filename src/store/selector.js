// @flow

import type { Store } from './entities'

const findHomePage = (store: Store) => store.homePage

const findAllBlogPosts = (store: Store) => findMostRecentBlogPosts(store)

const findMostRecentBlogPosts = (store: Store, n?: number, offset: number = 0) => {
	const count = n ? n : store.blogPostsByDate.length
	return store.blogPostsByDate.slice(offset, offset + count)
		.map(slug => findBlogPostBySlug(store, slug))
}

const findBlogPostBySlug = (store: Store, slug: string) => store.blogPosts[slug]

const findSponsorByLevel = (store: Store, level: number) => store.sponsors.filter(s => s.level === level)

export default {
	findHomePage,
	findAllBlogPosts,
	findMostRecentBlogPosts,
	findBlogPostBySlug,
	findSponsorByLevel,
}

