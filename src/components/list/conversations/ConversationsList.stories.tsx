import { Story, Meta } from '@storybook/react'

import { ConversationsList, IConversationsListProps } from './ConversationsList'

export default {
	title: 'Components/List/Conversations List',
	component: ConversationsList,
} as Meta

const Template: Story<IConversationsListProps> = args => <ConversationsList {...args} />

export const Default: Story<IConversationsListProps> = Template.bind({})
Default.args = {}
