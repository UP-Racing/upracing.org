// @flow

import React  from 'react'
import { Route } from 'react-router-dom'
import { DefaultHeader } from './ui'
import HomePage from './home'
import About from './about'
import Blog from './blog'
import Sponsors from './sponsors'
import Contact from './contact'

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
				path="/about"
				render={() => (<About {...props} />)}
			/>
			<Route
				path="/blog/"
				render={() => (<Blog {...props} />)}
			/>
			<Route
				exact
				path="/sponsors/"
				render={() => (<Sponsors {...props} />)}
			/>
			<Route
				exact
				path="/contact/"
				render={() => (<Contact {...props} />)}
			/>
		</div>
	)
}

export default App
