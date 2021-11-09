import { Story, Meta } from '@storybook/react'

import { ConversationsListItem, IConversationsListItemProps } from './ConversationsListItem'

export default {
	title: 'Components/List/Conversation List Item',
	component: ConversationsListItem,
} as Meta

const Template: Story<IConversationsListItemProps> = args => <ConversationsListItem {...args} />

export const Default: Story<IConversationsListItemProps> = Template.bind({})
Default.args = {
	conversationData: {
		"id": 1,
		"recipientId": 2,
		"recipientNickname": "Jeremie",
		"senderId": 1,
		"senderNickname": "Thibaut",
		"lastMessageTimestamp": 1625637849
	},
	userName: 'John',
}
