import React from 'react'
import icons from '@/assets/icons/index'


const Icon = ({ name, ...options }) => {
	let Icon = icons[name]
	return <Icon {...options}/>
}

export default Icon
