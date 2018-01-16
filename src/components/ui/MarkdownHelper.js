// @flow

import React from 'react'
import Remarkable from 'remarkable'

type Props = {
	content: string,
	className?: string,
}

const MarkdownHelper = (props: Props) => {
	const md = new Remarkable('full', {
		html: true,
		breaks: true,
	})
	md.set({
		langPrefix: 'line-numbers language-',
	})

	const rawMarkup = md.render(props.content)

	return (
		<div dangerouslySetInnerHTML={{ __html: rawMarkup }} className={props.className} />
	)
}

export default MarkdownHelper
