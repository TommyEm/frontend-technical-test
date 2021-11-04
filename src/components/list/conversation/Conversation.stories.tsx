import { Story, Meta } from '@storybook/react'

import { Conversation, IConversation } from './Conversation'

export default {
	title: 'Components/List/Message',
	component: Conversation,
} as Meta

const Template: Story<IConversation> = args => <Conversation {...args} />

export const Default = Template.bind({})
Default.args = {
	messagesData: [
		{
			"id": 1,
			"conversationId": 1,
			"timestamp": 1625637849,
			"authorId": 1,
			"body": "Bonjour c'est le premier message de la première conversation"
		},
		{
			"id": 2,
			"conversationId": 1,
			"timestamp": 1625637867,
			"authorId": 1,
			"body": "Bonjour c'est le second message de la première conversation"
		},
		{
			"id": 3,
			"conversationId": 1,
			"timestamp": 1625648667,
			"authorId": 2,
			"body": "Bonjour c'est le troisième message de la première conversation"
		}
	],
}
