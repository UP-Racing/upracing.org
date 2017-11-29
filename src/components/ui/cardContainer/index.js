// @flow

import React from 'react'

import style from './style.scss'

type Props = {
	children: any,
}

const CardContainer = (props: Props) => (
	<div className={style.container}>
		{props.children}
	</div>
)

export default CardContainer
