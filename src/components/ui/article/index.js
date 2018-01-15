// @flow

import React from 'react'
import moment from 'moment'
import { Header, Page, RichPageContent } from '../../ui'

type Props = {
	title: string,
	description: string,
	content: string,
	date?: moment,
}

const article = (props: Props) => (
	<Page>
		<Header
			title={`${props.title} | UPRacing`}
			description={props.description}
		/>
		<RichPageContent {...props} />
	</Page>
)

export default article
