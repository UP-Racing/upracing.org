// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import style from './style.scss'

type PropTypes = {
	url: string,
	external?: boolean,
	children?: any,
}

const button = (props: PropTypes) => {
	if (props.external) {
		return (
			<a
				className={style.button}
				href={props.url}
				target="_blank"
			>
				{props.children}
			</a>
		)
	} else {
		return (
			<Link
				className={style.button}
				to={props.url}
			>
				{props.children}
			</Link>
		)
	}
}

export default button
