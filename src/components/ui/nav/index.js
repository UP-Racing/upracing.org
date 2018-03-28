// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import { WidthControlled } from '../index'
import style from './style.scss'

type Props = {
	hideHome?: boolean,
}

const nav = (props: Props) => (
	<nav className={style.container}>
		<WidthControlled>
			<div className={style.nav} >
				{!props.hideHome && <Link to="/">UPRacing</Link>}
				<Link to="/about">About</Link>
				<Link to="/blog">Blog</Link>
				<Link to="/sponsors">Sponsors</Link>
				<Link to="/contact">Contact</Link>
			</div>
		</WidthControlled>
	</nav>
)

export default nav
