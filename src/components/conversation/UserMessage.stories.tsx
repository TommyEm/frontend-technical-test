import { Story, Meta } from '@storybook/react'

import { UserMessage, IUserMessage } from './UserMessage'

export default {
	title: 'Components/UserMessage',
	component: UserMessage,
} as Meta

const Template: Story<IUserMessage> = args => <UserMessage {...args} />

export const Default = Template.bind({})
Default.args = {
	authorName: 'Bill',
	message: 'Bonjour c\'est le premier message de la première conversation',
}
