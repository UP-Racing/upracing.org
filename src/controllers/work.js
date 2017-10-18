// @flow

import store from '../store'
import selector from '../store/selector'

const findAllWork = async (req: express$Request, res: express$Response) => {
	const state = await store.getState()
	res.json({ work: selector.findAllWork(state) })
}

const findWorkBySlug = async (req: express$Request, res: express$Response) => {
	const state = await store.getState()
	const slug = req.params.slug
	const work = selector.findWorkBySlug(state, slug)

	if (work) {
		res.json({ work })
	} else {
		res.status(404).send(`Work with slug '${slug}' not found`)
	}
}

export default {
	findAllWork,
	findWorkBySlug,
}
