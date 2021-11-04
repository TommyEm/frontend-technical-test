import { Story, Meta } from '@storybook/react'

import { Conversation, IConversation } from './Conversation'

export default {
	title: 'Components/Conversation',
	component: Conversation,
} as Meta

const Template: Story<IConversation> = args => <Conversation {...args} />

export const Default = Template.bind({})
Default.args = {
	conversationId: 1,
}
