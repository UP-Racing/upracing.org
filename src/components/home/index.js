// @flow

import React, { Component }  from 'react'
import cx from 'classnames'

import { Image, WidthControlled, UPRacingLogo, Nav, RichPageContent } from '../ui'

import style from './style.scss'

import type { Store } from '../../store/entities'

type Props = {
	store: Store,
}

type State = {
	activeImage: number,
	fadeHero: boolean,
}

class HomePage extends Component {

	props: Props
	interval: ?number

	state: State = {
		activeImage: Math.floor(Math.random() * this.props.store.homePage.heros.length),
		fadeHero: true,
	}

	componentDidMount = () => {
		this.setState({ fadeHero: false })
		this.interval = setInterval(this.changeImage, 5000)
	}

	componentWillUnmount = () => {
		clearInterval(this.interval)
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
				<section className={style.about}>
					<WidthControlled>
						<RichPageContent content={store.homePage.googleDescription} />
					</WidthControlled>
				</section>
				<Nav hideHome />
				<div className={style.imageLoader}>
					{store.homePage.heros.map(image => <Image key={image.src} image={image}/>)}
				</div>
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
