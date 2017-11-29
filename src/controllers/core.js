// @flow

import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticRouter } from 'react-router-dom'
import ReactDomServer from 'react-dom/server'
import log from 'bristol'

import store from '../store'
import { REACT_ROOT_ID } from '../contstants'
import App from '../components/App'

const renderRouter = async (req: express$Request, res: express$Response) => {
	try {
		const storeState = await store.getState()

		const react = ReactDomServer.renderToString(
			<StaticRouter location={req.url} context={{ test: 'sdfsdf' }}>
				<App store={storeState}/>
			</StaticRouter>
		)

		const script = ReactDomServer.renderToString(
			<script dangerouslySetInnerHTML={{__html: `window.store = ${JSON.stringify(storeState)}`}}></script>
		)

		const helmet = Helmet.renderStatic()

		const html = `
    		<!doctype html>
    		<html ${helmet.htmlAttributes.toString()}>
				<head>
					${helmet.title.toString()}
					${helmet.meta.toString()}
					${helmet.link.toString()}
				</head>
				<body ${helmet.bodyAttributes.toString()}>
					<div id="${REACT_ROOT_ID}">${react}</div>
					${script}
					<script type="text/javascript" src="/js/app.js"></script>
				</body>
			</html>
		`


		res.write(html)
		res.end()
	} catch (e) {
		log.error(e)
	}
}

export default {
	renderRouter,
}
