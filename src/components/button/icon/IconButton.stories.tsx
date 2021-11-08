import { Story, Meta } from '@storybook/react'

import { IconButton, IIconButtonProps } from './IconButton'

export default {
	title: 'Components/Button/Icon',
	component: IconButton,
	argTypes: {
		onClick: { action: 'Clicked!' },
	}
} as Meta


const Template: Story<IIconButtonProps> = args => <IconButton {...args} />

export const SendButton: Story<IIconButtonProps> = Template.bind({})
SendButton.args = {
	label: 'Send',
}
