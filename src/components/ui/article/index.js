// @flow

import React from 'react'
import moment from 'moment'
import { Header, Page } from '../../ui'
import MarkdownHelper from '../MarkdownHelper'

import style from './style.scss'

type Props = {
	title: string,
	description: string,
	content: string,
	date?: moment,
}

const article = (props: Props) => (
	<Page>
		<Header
			title={`${props.title} | Chris Aubert`}
			description={props.description}
		/>
		<div className={style.article}>
			<header className={style.header}>
				<h1 className={style.title}>{props.title}</h1>
				{props.date && <h2 className={style.date}>{props.date.format('YYYY-MM-DD')}</h2>}
			</header>
			<main>
				<MarkdownHelper content={props.content} />
			</main>
		</div>
	</Page>
)

export default article
