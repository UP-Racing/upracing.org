// @flow

import React from 'react'

import type { Media } from '../../../store/entities'

const Image = ({ image, className }: { image: Media, className: string }) => (
	<img
		src={image.src}
		alt={image.alt || ''}
		className={className}
	/>
)

export default Image

