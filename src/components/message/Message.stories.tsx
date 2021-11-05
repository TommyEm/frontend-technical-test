import { Story, Meta } from '@storybook/react'
import { Message, IMessageProps } from './Message'

export default {
	title: 'Components/Message',
	component: Message,
} as Meta

const Template: Story<IMessageProps> = args => <Message {...args} />

export const FromUser: Story<IMessageProps> = Template.bind({})
FromUser.args = {
	authorName: 'Harold',
	toUser: true,
	message: 'Hey, Kumar!',
}

export const ToUser: Story<IMessageProps> = Template.bind({})
ToUser.args = {
	authorName: 'Kumar',
	message: 'Hi, Harold!',
}
