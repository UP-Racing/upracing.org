// @flow

import React  from 'react'
import { Route } from 'react-router-dom'
import { DefaultHeader } from './ui'
import HomePage from './home'
import Blog from './blog'
import Sponsors from './sponsors'

import style from './style.scss'

import type { Store } from '../store/entities'

type Props = {
	store: Store,
}

const App = (props: Props) => {
	return (
		<div className={style.container}>
			<DefaultHeader />
			<Route
				exact
				path="/"
				render={() => (<HomePage {...props} />)}
			/>
			<Route
				exact
				path="/blog/"
				render={() => (<Blog {...props} />)}
			/>
			<Route
				exact
				path="/sponsors/"
				render={() => (<Sponsors {...props} />)}
			/>
		</div>
	)
}

export default App
