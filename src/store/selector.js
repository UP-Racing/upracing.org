// @flow

import type { Store } from './entities'

const findHomePage = (store: Store) => store.homePage

const findAllBlogPosts = (store: Store) => findMostRecentBlogPosts(store)

const findMostRecentBlogPosts = (store: Store, n?: number, offset: number = 0)  => {
	const count = n ? n : store.blogPostsByDate.length
	return store.blogPostsByDate.slice(offset, offset + count)
		.map(slug => findBlogPostBySlug(store, slug))
}

const findBlogPostBySlug = (store: Store, slug: string) => store.blogPosts[slug]

const findSponsorByLevel = (store: Store, level: number) => store.sponsors.filter(s => s.level === level)

const findAbout = (store: Store) => store.about

const findStory = (store: Store) => store.story

const findTeamHeads = (store: Store) => store.team.heads

const findTeamSectionHeads = (store: Store) => store.team.sectionHeads

const findTeamSections = (store: Store) => store.team.sections

export default {
	findHomePage,
	findAllBlogPosts,
	findMostRecentBlogPosts,
	findBlogPostBySlug,
	findSponsorByLevel,
	findAbout,
	findStory,
	findTeamHeads,
	findTeamSectionHeads,
	findTeamSections,
}

