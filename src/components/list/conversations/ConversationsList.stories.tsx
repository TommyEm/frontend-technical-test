import { Story, Meta } from '@storybook/react'

import { ConversationsList, IConversationsList } from './ConversationsList'

export default {
	title: 'Components/List/Conversations List',
	component: ConversationsList,
} as Meta

const Template: Story<IConversationsList> = args => <ConversationsList {...args} />

export const Default = Template.bind({})
Default.args = {
	conversationData: [
		{
			"id": 1,
			"recipientId": 2,
			"recipientNickname": "Jeremie",
			"senderId": 1,
			"senderNickname": "Thibaut",
			"lastMessageTimestamp": 1625637849
		},
		{
			"id": 2,
			"recipientId": 3,
			"recipientNickname": "Patrick",
			"senderId": 1,
			"senderNickname": "Thibaut",
			"lastMessageTimestamp": 1620284667
		},
		{
			"id": 3,
			"recipientId": 1,
			"recipientNickname": "Thibaut",
			"senderId": 4,
			"senderNickname": "Elodie",
			"lastMessageTimestamp": 1625648667
		},
	],
}