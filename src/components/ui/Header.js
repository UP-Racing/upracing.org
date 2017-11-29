// @flow

import React from 'react'
import { Helmet } from 'react-helmet'

export type Props = {
	title?: string,
	description?: string,
	image?: string,
	imageAlt?: string,
	children?: any,
}

const Header = (props: Props) => (
	<Helmet>
		{props.title && (<title>{props.title}</title>)}
		{props.description && (<meta name="description" content={props.description} />)}

		{props.title && (<meta name="twitter:title" content={props.title} />)}
		{props.description && (<meta name="twitter:description" content={props.description} />)}
		{props.image && props.imageAlt && (
			<meta name="twitter:image" content={props.image} />
		)}
		{props.image && props.imageAlt && (
			<meta name="twitter:image:alt" content={props.imageAlt} />
		)}

		{props.title && (<meta property="og:title" content={props.title} />)}
		{props.description && (<meta property="og:description" content={props.description} />)}
		{props.image && (
			<meta property="og:image" content={props.image} />
		)}
		{props.children}
	</Helmet>
)

export default Header
