// @flow

import type { Store, HomePage, BlogPost, Sponsor, About, Story, NewsLetter } from './entities'

type A<T, D> = { type: T } & D

type Hydrate = A<'HYDRAT', { store: Store }>

type UpdateHomePage = A<'UPDATE_HOME_PAGE', { homePage: HomePage }>

type UpdateAbout = A<'UPDATE_ABOUT', { about: About }>

type UpdateStory = A<'UPDATE_STORY', { story: Story }>

type UpdateBlogPost = A<'UPDATE_BLOG_POST', {
	blogPost: BlogPost,
}>

type UpdateSponsor = A<'UPDATE_SPONSOR', {
	sponsor: Sponsor,
}>

type UpdateNewsletter = A<'UPDATE_NEWSLETTER', { newsLetter: NewsLetter }>

export type Action =
	| Hydrate
	| UpdateHomePage
	| UpdateBlogPost
	| UpdateSponsor
	| UpdateAbout
	| UpdateStory
	| UpdateNewsletter
