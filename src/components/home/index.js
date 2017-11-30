// @flow

import React, { Component }  from 'react'
import cx from 'classnames'
import moment from 'moment'
import { Link } from 'react-router-dom'

import { Image, Nav, CardContainer, Card, Button, WidthControlled, UPRacingLogo } from '../ui'
import selector from '../../store/selector'

import style from './style.scss'

import type { Store } from '../../store/entities'

type Props = {
	store: Store,
}

type State = {
	activeImage: number,
	fadeHero: boolean,
	loaded: boolean,
}

class HomePage extends Component {

	props: Props

	state: State = {
		activeImage: Math.floor(Math.random() * this.props.store.homePage.heros.length),
		fadeHero: true,
		loaded: false,
	}

	componentDidMount = () => {
		setTimeout(() => {
			this.setState({ fadeHero: false })
			setInterval(this.changeImage, 10000)
		}, 3500)
		this.setState({ loaded: true })
	}

	render() {
		const store = this.props.store
		const posts = selector.findMostRecentBlogPosts(store, 4)

		return (
			<div className={style.container}>
				<div className={style.logoContainer}>
					<UPRacingLogo className={style.logo} />
				</div>
				<section className={style.heroContainer}>
					<Image image={store.homePage.heros[this.state.activeImage]} className={cx({
						[style.hero]: true,
						[style.faded]: this.state.fadeHero,
					})}/>
				</section>
				<section className={style.navContainer}>
					<WidthControlled noPadding>
						<div className={style.nav} >
							<Link to="/blog">Blog</Link>
							<Link to="/sponsors">Sponsors</Link>
							<a href="mailto:upracing.fs@gmail.com">Contact</a>
						</div>
					</WidthControlled>
				</section>
			</div>
		)

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
			})
		}, 900)
		setTimeout(() => {
			this.setState({
				fadeHero: false,
			})
		}, 950)
	}
}

export default HomePage
