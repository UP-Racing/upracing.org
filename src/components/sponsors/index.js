// @flow

import React from 'react'
import cx from 'classnames'

import { Page, CardContainer, Card, Image } from '../ui'
import selector from '../../store/selector'

import style from './style.scss'

import type { Store, Sponsor } from '../store/entities'

const LEVEL_PLATINUM = 1
const LEVEL_GOLD = 2
const LEVEL_SILVER = 3
const LEVEL_BRONZE = 4

type Props = {
	store: Store,
}

const SponsorCard = ({ sponsor, className }: { sponsor: Sponsor, className: string }) => (
	<Card
		className={cx([style.sponsor, className])}
		url={sponsor.link}
		external
		headerAtBottom
		title={sponsor.name}
	>
		<div className={style.imageContainer}>
			<Image image={sponsor.image} />
		</div>
	</Card>
)

const SponsorBlock = ({ sponsors, name }: { sponsors: Sponsor[], name: string}) => (
	<div className={style.block}>
		<h3>{name}</h3>
		{sponsors.map((s, i) =>
			<SponsorCard sponsor={s} className={style[name.toLowerCase()]} key={i} />
		)}
	</div>
)

const Sponsors = ({ store }: Props) => {
	const level1 = selector.findSponsorByLevel(store, LEVEL_PLATINUM)
	const level2 = selector.findSponsorByLevel(store, LEVEL_GOLD)
	const level3 = selector.findSponsorByLevel(store, LEVEL_SILVER)
	const level4 = selector.findSponsorByLevel(store, LEVEL_BRONZE)

	return (
		<Page>
			<h2 className={style.title} >Sponsors</h2>
			{level1.length > 0 &&
				<SponsorBlock
					name="Platinum"
					sponsors={level1}
				/>
			}
			{level2.length > 0 &&
				<SponsorBlock
				name="Gold"
				sponsors={level2}
				/>
			}
			{level3.length > 0 &&
				<SponsorBlock
				name="Silver"
				sponsors={level3}
				/>
			}
			{level4.length > 0 &&
				<SponsorBlock
				name="Bronze"
				sponsors={level4}
				/>
			}
		</Page>
	)
}

export default Sponsors
