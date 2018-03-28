// @flow

import React from 'react'
import FontAwesome from 'react-fontawesome'
import cx from 'classnames'

import { Page, Header } from '../ui'
import style from './style.scss'

const Router = () => (
	<Page>
		<Header
			title="Contact | UPRacing"
			description="Contact UPRacing"
		/>
		<h2 className={style.title}>Contact Us</h2>
		<div className={style.icons}>
			<div className={style.iconContainer}>
				<a href="https://facebook.com/UPRacingTeam/" target="_blank">
				<FontAwesome
					name="facebook-official"
					className={cx(style.icon, style.facebook)}
					size="5x"
				/>
				</a>
			</div>
			<div className={style.iconContainer}>
				<a href="https://twitter.com/UP_Racing" target="_blank">
					<FontAwesome
						name="twitter"
						className={cx(style.icon, style.twitter)}
						size="5x"
					/>
				</a>
			</div>
			<div className={style.iconContainer}>
				<a href="mailto:upracing.fs@gmail.com">
					<FontAwesome
						name="envelope-o"
						className={cx(style.icon, style.mail)}
						size="5x"
					/>
				</a>
			</div>
			<div className={style.iconContainer}>
				<a href="https://www.flickr.com/photos/147851459@N08/" target="_blank">
				<FontAwesome
					name="flickr"
					className={cx(style.icon, style.flickr)}
					size="5x"
				/>
				</a>
			</div>
			<div className={style.iconContainer}>
				<a href="https://www.instagram.com/upracing74/" target="_blank">
				<FontAwesome
					name="instagram"
					className={cx(style.icon, style.instagram)}
					size="5x"
				/>
				</a>
			</div>
			<div className={style.iconContainer}>
				<a href="https://www.youtube.com/user/PortsmouthFS" target="_blank">
					<FontAwesome
						name="youtube-play"
						className={cx(style.icon, style.youtube)}
						size="5x"
					/>
				</a>
			</div>
		</div>
	</Page>
)

export default Router
