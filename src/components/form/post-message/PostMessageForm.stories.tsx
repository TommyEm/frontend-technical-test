import { Story, Meta } from '@storybook/react'

import { PostMessageForm, IPostMessageFormProps } from './PostMessageForm'

export default {
	title: 'Components/Form/Post Message',
	component: PostMessageForm,
} as Meta


const Template: Story<IPostMessageFormProps> = args => <PostMessageForm {...args} />

export const Default: Story<IPostMessageFormProps> = Template.bind({})
Default.args = {
}
