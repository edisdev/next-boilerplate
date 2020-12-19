import React from 'react'
import Page from './index'

export default {
	title: 'Example/Page',
	component: Page
}

const Template = (args) => <Page {...args}/>

export const PageTemplate = Template.bind({})

PageTemplate.args = {
	title: 'Storybook In React'
}
