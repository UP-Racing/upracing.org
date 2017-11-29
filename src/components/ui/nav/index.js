// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import { WidthControlled } from '../index'
import style from './style.scss'

const nav = () => (
	<nav className={style.container}>
		<WidthControlled noPadding>
			<div className={style.nav} >
				<Link to="/">UPRacing</Link>
				<Link to="/blog">Blog</Link>
				{/*<Link to="/team">Team</Link>*/}
				<Link to="/sponsors">Sponsors</Link>
				<a href="mailto:upracing.fs@gmail.com">Contact</a>
			</div>
		</WidthControlled>
	</nav>
)

export default nav
