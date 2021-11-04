import { Story, Meta } from '@storybook/react'

import { Title, ITitle } from './Title'

export default {
	title: 'Components/Title',
	component: Title,
} as Meta

const Template: Story<ITitle> = args => <Title {...args} />

export const Default = Template.bind({})
Default.args = {
	children: 'Title',
}
