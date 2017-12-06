// @flow

import React from 'react'
import moment from 'moment'
import { Route } from 'react-router-dom'

import { Page, CardContainer, Card, Article } from '../ui'
import selector from '../../store/selector'

import style from './style.scss'

import type { Store } from '../../store/entities'

type Props = {
	store: Store,
}

const BlogArticle = ({ store, match }) => {
	const post = selector.findBlogPostBySlug(store, match.params.slug)
	console.log(post)

	return (
		<Article
			title={post.title}
			description={post.blurb}
			content={post.content}
			date={moment(post.date)}
		/>
	)
}

const BlogList = ({ store }: { store: Store }) => {
	const posts = selector.findMostRecentBlogPosts(store, 4)

	return (
		<Page>
			<h2 className={style.title}>Blog Posts</h2>
			<CardContainer>
				{posts.map(post => (
					<Card
						url={`/blog/${post.slug}`}
						key={post.slug}
						title={post.title}
						date={moment(post.date)}
					>
						{post.blurb}
					</Card>
				))}
			</CardContainer>
		</Page>
	)
}

const Router = (props: Props) => {
	return (
		<div>
			<Route
				exact
				path="/blog"
				render={({ location }) => (<BlogList {...props} location={location} />)}
			/>
			<Route
				path="/blog/:slug"
				render={({ match }) => (<BlogArticle {...props} match={match} />)}
			/>
		</div>
	)}

export default Router
