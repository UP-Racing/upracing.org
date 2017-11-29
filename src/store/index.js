// @flow

import redis from 'redis'
import moment from 'moment'
import log from 'bristol'

import reducer from './reducer'
import { DEFAULT_STORE_STATE } from './entities'

import type { Store } from './entities'
import type { Action } from './action'

const redisClient = redis.createClient()
const STORE_NAME = 'upracing-store'

redisClient.on('error', (err: any) => {
	log.error('Redis Error', err)
})

const parseStore = (raw: any): Store => ({
	...raw,
	blogPosts: Object.keys(raw.blogPosts).reduce((acc, slug) => ({
		...acc,
		[slug]: {
			...raw.blogPosts[slug],
			date: moment(raw.blogPosts[slug].date),
		},
	}), raw.blogPosts),
})

const getState = async (): Promise<Store> => new Promise(res => {
	redisClient.get(STORE_NAME, (err, data) => {
		if (err || !data) {
			res(DEFAULT_STORE_STATE)
		} else {
			res(parseStore(JSON.parse(data)))
		}
	})
})

export const dispatch = async (action: Action) => {
	const store = await getState()
	const nextState = reducer(store, action)
	await new Promise((res) => redisClient.set(STORE_NAME, JSON.stringify(nextState), () => res()))
}

export const reset = () => new Promise((res) =>
	redisClient.set(STORE_NAME, JSON.stringify(DEFAULT_STORE_STATE), () => res())
)


export default {
	getState,
	reset,
}
