// @flow

import prismic from 'prismic.io'
import moment from 'moment'
import log from 'bristol'

import config from '../../config'
import { dispatch } from '../store'

import type { Media } from '../store/entities'

const PAGE_SIZE = 2

type Result = {
	id: string,
	uid: string,
	type: string,
	slug: string,
	rawJSON: any,
	firstPublicationDate: string,
	lastPublicationDate: string,
}

const parseMedia = ({ url, alt, width, height }: { url: string, alt?: string, width: string, height: string }): Media => ({
	src: url,
	alt,
	width: parseInt(width, 10),
	height: parseInt(height, 10),
})

const joinText = (blocks: any[]) => blocks.map(p => {
	if (p.type === 'image') {
		return `![${p.alt}](${p.url})`
	}
	console.log(p.spans)
	return p.text
}).join('\n')

const load  = async () => {
	log.info('Loading from Prismic')

	const api = ((await prismic.api(config.prismic.api, {
		accessToken: config.prismic.token,
	}): any))

	const pageResults = await api.query('', {pageSize: PAGE_SIZE})

	const promises = []
	for (let i = 1; i < pageResults.total_pages; i++) {
		promises.push(await api.query('', {pageSize: PAGE_SIZE, page: i + 1}))
	}

	const responses = await Promise.all(promises)

	const results: Result[] = responses.reduce((acc, response) => acc.concat(response.results), pageResults.results)

	for (let i = 0; i < results.length; i++) {
		const result = results[i]

		switch (result.type) {
			case 'home': {
				const homePage = {
					...result.rawJSON,
					heros: result.rawJSON.heros.map(h => parseMedia(h.hero)),
					googleDescription: joinText(result.rawJSON.googledescription),
				}

				await dispatch({
					type: 'UPDATE_HOME_PAGE',
					homePage,
				})
				break
			}
			case 'about': {
				const about = {
					content: joinText(result.rawJSON.content),
				}

				await dispatch({
					type: 'UPDATE_ABOUT',
					about,
				})
				break
			}
			case 'story': {
				const story = {
					content: joinText(result.rawJSON.content),
				}

				await dispatch({
					type: 'UPDATE_STORY',
					story,
				})
				break
			}
			case 'blogpost': {

				const blogPost = {
					slug: result.uid,
					title: joinText(result.rawJSON.title),
					date: moment(result.rawJSON.date),
					blurb: joinText(result.rawJSON.blurb),
					content: joinText(result.rawJSON.content),
				}

				await dispatch({
					type: 'UPDATE_BLOG_POST',
					blogPost,
				})
				break
			}
			case 'sponsor': {
				const sponsor = {
					name: joinText(result.rawJSON.name),
					link: result.rawJSON.website.url,
					image: parseMedia(result.rawJSON.logo),
					level: result.rawJSON.level,
				}

				await dispatch({
					type: 'UPDATE_SPONSOR',
					sponsor,
				})
				break
			}
			case 'team': {
				const team = {
					heads: [],
					sectionHeads: [],
					sections: [],
				}

				const parseTeamCard = (card: any) => ({
					name: joinText(card.name || []),
					image: parseMedia(card.image),
					description: joinText(card.description || []),
				})

				result.rawJSON.leaders.forEach(card => {
					console.log(card.description)
					card.description.forEach(console.log)
					team.heads.push(parseTeamCard(card))
				})

				result.rawJSON.sectionheads.forEach(card => {
					team.sectionHeads.push(parseTeamCard(card))
				})

				// console.log(result.rawJSON)

				result.rawJSON.sections.forEach(card => {
					team.sections.push(parseTeamCard(card))
				})

				// console.log('sdkfd')

				// console.log(team)

				await dispatch({
					type: 'UPDATE_TEAM',
					team,
				})
				break
			}
			default:
				log.warn(`Prismic type ${result.type} not known`)
		}
	}
	log.info('Store updated')
}

export default {
	load,
}
