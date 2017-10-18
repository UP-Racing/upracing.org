// @flow

import React, { Component }  from 'react'
import cx from 'classnames'
import moment from 'moment'

import { Image, Nav, CardContainer, Card, Button, WidthControlled } from '../ui'

import style from './style.scss'

import type { Store } from '../../store/entities'
import selector from '../../store/selector'

type Props = {
	store: Store,
}

type State = {
	activeImage: number,
	fadeHero: boolean,
}

class HomePage extends Component {

	props: Props

	state: State = {
		activeImage: 0,
		fadeHero: false,
	}

	componentDidMount = () => {
		setInterval(this.changeImage, 5000)
	}

	render() {
		const store = this.props.store
		const posts = selector.findMostRecentBlogPosts(store, 4)

		return (
			<div className={style.container}>
				<Nav />
				<header className={style.header}>
					<Image image={store.homePage.heros[this.state.activeImage]} className={cx({
						[style.hero]: true,
						[style.faded]: this.state.fadeHero,
					})}/>
				</header>
				<main className={style.main}>
					<WidthControlled>
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
						<Button url="/blog/">All Blog Posts</Button>
					</WidthControlled>
				</main>
			</div>
		)
	}

	changeImage = () => {
		this.setState({
			fadeHero: true,
		})
		setTimeout(() => {
			this.setState({
				activeImage: (this.state.activeImage + 1) % this.props.store.homePage.heros.length,
				fadeHero: false,
			})
		}, 400)
	}
}

export default HomePage
