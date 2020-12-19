import React from 'react'
import icons, { files } from '@/assets/icons/index'

export default {
	title: 'Guides'
}


const AllIcons = () => {
	return files.map(icon => {
		let Icon = icons[icon]
		return <div className="max-content-width m-bottom-10 flex flex-align-center" key={icon}>
			<Icon width={40} height={40}/>
			<small className="m-left-10">{icon}</small>
		</div>
	})
}

export const IconSet = () => {
	return (
		<div>
			<AllIcons/>
		</div>
	)
}
