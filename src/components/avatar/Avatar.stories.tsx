import { Story, Meta } from '@storybook/react'

import { Avatar, IAvatar } from './Avatar'

export default {
	title: 'Components/Avatar',
	component: Avatar,
} as Meta

const Template: Story<IAvatar> = args => <Avatar {...args} />

export const Default: Story<IAvatar> = Template.bind({})
Default.args = {
	userName: 'John',
}
