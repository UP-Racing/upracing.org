// @flow

import log from 'bristol'
import Express from 'express'
import BodyParser from 'body-parser'
import serveStatic from 'serve-static'

import config from '../config'
import prismic from './prismic'
import routes from './routes'
import store from './store'

export default class Server {

	constructor() {
		setTimeout(this.init, 0)
	}

	init = async () => {
		try {
			this.initLogs()
			await this.initRepo()
			this.makeWebServer()
		} catch (e) {
			log.error(e)
		}
	}

	initLogs = () => {
		log.addTarget('console').withFormatter('human')
	}

	initRepo = async () => {
		log.info('Starting Repo')
		await prismic.load()

		console.log((await store.getState()))
	}

	makeWebServer = () => {
		log.info(`Start WebServer on ${config.port}`)

		const app = Express()

		app.use(serveStatic(__dirname + '/public'))
		app.use(BodyParser.urlencoded({
			extended: true,
		}))
		app.use(BodyParser.json())

		app.set('view engine', 'html')

		app.use(routes)

		app.listen(config.port)
	}

}

new Server()
