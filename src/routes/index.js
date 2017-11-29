// @flow

import express from 'express'
import log from 'bristol'

import core from '../controllers/core'
import prismic from '../prismic'

const router = express.Router()

// ---- RENDER ---- //

router.get(/^\/(?!api).*/i, core.renderRouter)

// ---- WEBHOOKS ---- //

router.post('/webhooks/updatePrismic', async (req: express$Request, res: express$Response) => {
	log.info('Reloading Prismic Repo')
	res.sendStatus(200)
	await prismic.load()
})

export default router
