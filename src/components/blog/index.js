// @flow

import React from 'react'
import moment from 'moment'

import { Page, CardContainer, Card } from '../ui'
import selector from '../../store/selector'

import style from './style.scss'

import type { Store } from '../../store/entities'

const Blog = ({ store }: { store: Store }) => {
	const posts = selector.findMostRecentBlogPosts(store, 4)

	return (
		<Page>
			<h2 className={style.title} >Blog Posts</h2>
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

export default Blog
