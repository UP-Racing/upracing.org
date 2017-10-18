// @flow

import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { REACT_ROOT_ID } from '../../contstants'
import App from '../../components/App'

import '../css/core.scss'

const Router = () => (
	<BrowserRouter>
		<App store={window.store} />
	</BrowserRouter>
)

ReactDom.render(React.createElement(Router), document.querySelector(`#${REACT_ROOT_ID}`))
