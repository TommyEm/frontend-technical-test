import { Story, Meta } from '@storybook/react'

import { ConversationsList, IConversationsList } from './ConversationsList'

export default {
	title: 'Components/List/Conversations',
	component: ConversationsList,
} as Meta

const Template: Story<IConversationsList> = args => <ConversationsList {...args} />

export const Default = Template.bind({})
Default.args = {
	conversationsData: [
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
	currentUserId: 1,
	usersData: [
		{
			"id": 1,
			"nickname": "Thibaut",
			"token": "xxxx"
		},
		{
			"id": 2,
			"nickname": "Jeremie",
			"token": "xxxx"
		},
		{
			"id": 3,
			"nickname": "Patrick",
			"token": "xxxx"
		},
		{
			"id": 4,
			"nickname": "Elodie",
			"token": "xxxx"
		}
	],
}
