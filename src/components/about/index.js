// @flow

import React from 'react'

import { Page, Header, RichPageContent } from '../ui'
import selector from '../../store/selector'

import type { Store } from '../../store/entities'

type Props = {
	store: Store,
}

const Router = (props: Props) => {
	const about = selector.findAbout(props.store)

	return (
		<Page>
			<Header
				title="About Us | UPRacing"
				description="About all of us here at UPRacing"
			/>
			<RichPageContent
				title="About Us"
				content={about.content}
			/>
		</Page>
	)}

export default Router
