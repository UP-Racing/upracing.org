// @flow

import React from 'react'
import moment from 'moment'

import style from './style.scss'
import MarkdownHelper from '../MarkdownHelper'

type Props = {
	title?: string,
	content: string,
	date?: moment,
}

const RichPageContent = (props: Props) => (
	<div className={style.article}>
		{props.title && (
			<header className={style.header}>
				<h1 className={style.title}>{props.title}</h1>
				{props.date && <h2 className={style.date}>{props.date.format('YYYY-MM-DD')}</h2>}
			</header>
		)}
		<main>
			<MarkdownHelper content={props.content} />
		</main>
	</div>
)

export default RichPageContent
