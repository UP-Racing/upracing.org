// @flow

import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import cx from 'classnames'
import moment from 'moment'

import style from './style.scss'

type PropTypes = {
	url: string,
	title: string,
	date?: moment,
	className?: string,
	children?: any,
	external?: boolean,
	headerAtBottom?: boolean,
}

const Link = (props: PropTypes) => {
	if (props.external) {
		return (
			<a
				className={cx(style.container, props.className)}
				href={props.url}
				target="_blank"
			>
				{props.children}
			</a>
		)
	} else {
		return (
			<RouterLink
				className={cx(style.container, props.className)}
				to={props.url}
			>
				{props.children}
			</RouterLink>
		)
	}
}

const Card = (props: PropTypes) => (
	<Link
		{...props}
	>
		<article className={style.card}>
			{!props.headerAtBottom && (
				<div className={style.header}>
					<h3>{props.title}</h3>
					{props.date && (<h4>{props.date.format('YYYY-MM-DD')}</h4>)}
				</div>
			)}
			<div className={style.body}>
				{props.children}
			</div>
			{props.headerAtBottom && (
				<div className={style.header}>
					<h3>{props.title}</h3>
					{props.date && (<h4>{props.date.format('YYYY-MM-DD')}</h4>)}
				</div>
			)}
		</article>
	</Link>
)

export default Card
