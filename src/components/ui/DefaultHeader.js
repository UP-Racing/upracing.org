// @flow

import React from 'react'
import Header from './Header'

const DefaultHeader = () => (
	<Header
		title="UPRacing"
		name="UPRacing"
		description="University of Portsmouth Formula Student Team"
	>
		<meta charSet="utf-8" />
		<meta name="keywords" content="UPRacing, University of Portsmouth, Formula Student" />
		<meta name="author" content="Chris Aubert" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<script type="text/javascript"></script>
		<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
		<link rel="dns-prefetch" href="//fonts.gstatic.com" />
		<link rel="stylesheet" href="/css/app.css" />

		<meta name="twitter:card" content="summary" />
		<meta name="twitter:site" content="@upracing" />
	</Header>
)

export default DefaultHeader
