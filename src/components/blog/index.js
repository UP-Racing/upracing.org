// @flow

import React from 'react'
import moment from 'moment'

import { Page, CardContainer, Card } from '../ui'

import type { Store } from '../../store/entities'

const Blog = ({ store }: { store: Store }) => (
	<Page>
		<h2 className={style.sectionHeader} >Blog Posts</h2>
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

export default Blog
