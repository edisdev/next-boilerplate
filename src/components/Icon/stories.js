import React from 'react'
import { storiesOf } from '@storybook/react'
import icons, { files } from '@/assets/icons/index'

files.forEach(icon => {
	const Icon = icons[icon]
  
	storiesOf(`Guides/Icons/${icon}`, module)
		.addParameters({ component: Icon })
		.add(icon, () => {
			return <Icon />
		})
})
