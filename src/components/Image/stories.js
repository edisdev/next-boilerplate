import React from 'react'
import Image from './index'

import JSImage from './../../../public/images/js.jpg'

export default {
	title: 'Example/Image',
	component: Image
}

const Template = (args) => <Image {...args}/>
//
export const Normal = Template.bind({})

Normal.args = {
	src: JSImage,
	layout: 'intrinsic',
	width: 'auto',
	height: 'auto'
}


//
export const NormalWithoutLazy = Template.bind({})

NormalWithoutLazy.args = {
	src: JSImage,
	loading: 'eager',
	layout: 'intrinsic',
	width: 'auto',
	height: 'auto'
}


//
export const Circle = Template.bind({})

Circle.args = {
	src: JSImage,
	layout: 'intrinsic',
	width: 200,
	height: 200,
	circle: true
}
