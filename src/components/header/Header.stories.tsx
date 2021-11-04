import { Story, Meta } from '@storybook/react'

import { Header, IHeader } from './Header'

export default {
	title: 'Components/Header',
	component: Header,
} as Meta

const Template: Story<IHeader> = args => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
	children: 'Header',
}
