// @flow

import store from '../store'
import selector from '../store/selector'

const findAllPosts = async (req: express$Request, res: express$Response) => {
	const state = await store.getState()
	res.json({ posts: selector.findAllPosts(state) })
}

const findPostBySlug = async(req: express$Request, res: express$Response) => {
	const state = await store.getState()
	const slug = req.params.slug

	const post = selector.findPostBySlug(state, slug)

	if (post) {
		res.json({ post })
	} else {
		res.status(404).send(`Post with slug '${slug}' not found`)
	}
}

export default {
	findAllPosts,
	findPostBySlug,
}
