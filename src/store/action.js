// @flow

import type { Store, HomePage, BlogPost, Sponsor } from './entities'

type A<T, D> = { type: T } & D

type Hydrate = A<'HYDRAT', { store: Store }>

type UpdateHomePage = A<'UPDATE_HOME_PAGE', { homePage: HomePage }>

type UpdateBlogPost = A<'UPDATE_BLOG_POST', {
	blogPost: BlogPost,
}>

type UpdateSponsor = A<'UPDATE_SPONSOR', {
	sponsor: Sponsor,
}>

export type Action =
	| Hydrate
	| UpdateHomePage
	| UpdateBlogPost
	| UpdateSponsor
