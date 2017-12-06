// @flow

import React, { Component }  from 'react'
import cx from 'classnames'
import { Link } from 'react-router-dom'

import { Image, WidthControlled, UPRacingLogo } from '../ui'

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
