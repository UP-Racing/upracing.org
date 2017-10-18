// @flow

import type { Store, HomePage, BlogPost } from './entities'

type A<T, D> = { type: T } & D

type Hydrate = A<'HYDRAT', { store: Store }>

type UpdateHomePage = A<'UPDATE_HOME_PAGE', { homePage: HomePage }>

type UpdateBlogPost = A<'UPDATE_BLOG_POST', {
	blogPost: BlogPost,
}>

export type Action =
	| Hydrate
	| UpdateHomePage
	| UpdateBlogPost
