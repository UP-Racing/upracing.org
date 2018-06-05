// @flow

import _ from 'lodash'

import { DEFAULT_STORE_STATE } from './entities'

import type { Action } from './action'
import type { Store, Map, BlogPost } from './entities'

const getIdsSortedByDate = (data: Map<BlogPost>) => {
	const values = ((Object.values(data): Array<any>): Array<BlogPost>)
	const datesAndSlugs = values.map((d: BlogPost) => ({ ...d, date: d.date.unix() }))
	const sorted = _.sortBy(datesAndSlugs, 'date').reverse()
	return sorted.map(d => d.slug)
}

export default (store: Store = DEFAULT_STORE_STATE, action: Action) => {
	switch (action.type) {
		case 'UPDATE_HOME_PAGE': {
			return {
				...store,
				homePage: action.homePage,
			}
		}
		case 'UPDATE_ABOUT': {
			return {
				...store,
				about: action.about,
			}
		}
		case 'UPDATE_STORY': {
			return {
				...store,
				story: action.story,
			}
		}
		case 'UPDATE_BLOG_POST': {
			const { blogPost } = action

			const next = {
				...store,
				blogPosts: {
					...store.blogPosts,
					[blogPost.slug]: blogPost,
				},
			}

			next.blogPostsByDate = getIdsSortedByDate(next.blogPosts)

			return next
		}
		case 'UPDATE_SPONSOR': {
			const { sponsor } = action

			const sponsors = store.sponsors.filter(s => s.name !== sponsor.name)
			sponsors.push(sponsor)

			return {
				...store,
				sponsors,
			}
		}
		case 'UPDATE_NEWSLETTER': {
			const { newsletter } = action

			const next = {
				...store,
				newsLetters: {
					...store.newsLetters,
					[newsletter.slug]: newsletter,
				}
			}

			next.newsLetters = getIdsSortedByDate(next.newsLetters)

			return next
		}
		default: {
			return store
		}
	}
}
