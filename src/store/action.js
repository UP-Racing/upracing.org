// @flow

import type { Store, HomePage, BlogPost, Sponsor, About, Story, Team } from './entities'

type A<T, D> = { type: T } & D

type Hydrate = A<'HYDRAT', { store: Store }>

type UpdateHomePage = A<'UPDATE_HOME_PAGE', { homePage: HomePage }>

type UpdateAbout = A<'UPDATE_ABOUT', { about: About }>

type UpdateTeam = A<'UPDATE_TEAM', { team: Team }>

type UpdateStory = A<'UPDATE_STORY', { story: Story }>

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
	| UpdateAbout
	| UpdateTeam
	| UpdateStory
