import { Story, Meta } from '@storybook/react'

import { ConversationsListItem, IConversationsListItem } from './ConversationsListItem'

export default {
	title: 'Components/List/Conversation List Item',
	component: ConversationsListItem,
} as Meta

const Template: Story<IConversationsListItem> = args => <ConversationsListItem {...args} />

export const Default = Template.bind({})
Default.args = {
	conversationData: {
		"id": 1,
		"recipientId": 2,
		"recipientNickname": "Jeremie",
		"senderId": 1,
		"senderNickname": "Thibaut",
		"lastMessageTimestamp": 1625637849
	},
	userData: {
		"id": 2,
		"nickname": "Jeremie",
		"token": "xxxx"
	},
}
