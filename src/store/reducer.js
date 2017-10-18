// @flow

import _ from 'lodash'

import { DEFAULT_STORE_STATE } from './entities'

import type { Action } from './action'
import type { Store, Map, Work, Post } from './entities'

const getIdsSortedByDate = (data: Map<Work>|Map<Post>) => {
	const values = ((Object.values(data): Array<any>): Array<Work | Post>)
	const datesAndSlugs = values.map((d: Work|Post) => ({ ...d, date: d.date.unix() }))
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

			// console.log(next)

			return next
		}
		default: {
			return store
		}
	}
}
