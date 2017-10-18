// @flow

import React from 'react'
import cx from 'classnames'

import style from './style.scss'

type Props = {
	children: any,
	className?: string,
	noPadding?: boolean,
}

const WidthControlled = (props: Props) => (
	<div className={cx(
		style.container,
		props.noPadding ? style.noPadding : '',
		props.className,
		props.className
	)}>
		{props.children}
	</div>
)

export default WidthControlled
