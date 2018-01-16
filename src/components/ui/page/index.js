// @flow

import React from 'react'

import style from './style.scss'
import { WidthControlled, Nav } from '../index'

type Props = {
	children: any,
	noNav?: boolean,
}

const Page = (props: Props) => (
	<div className={style.container}>
		{!props.noNav && <Nav />}
		<WidthControlled>
			{props.children}
		</WidthControlled>
	</div>
)

export default Page
