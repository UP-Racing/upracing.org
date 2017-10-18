// @flow

import express from 'express'
import log from 'bristol'

import core from '../controllers/core'
import work from '../controllers/work'
import posts from '../controllers/posts'

import prismic from '../prismic'

const router = express.Router()

// ---- API ---- //

router.get('/api/work', work.findAllWork)
router.get('/api/work/:slug', work.findWorkBySlug)

router.get('/api/posts', posts.findAllPosts)
router.get('/api/posts/:slug', posts.findPostBySlug)

// ---- RENDER ---- //

router.get(/^\/(?!api).*/i, core.renderRouter)

// ---- WEBHOOKS ---- //

router.post('/webhooks/updatePrismic', async (req: express$Request, res: express$Response) => {
	log.info('Reloading Prismic Repo')
	res.sendStatus(200)
	await prismic.load()
})

export default router
