import { Story, Meta } from '@storybook/react'
import { Icon, IIconProps } from './Icon'


export default {
	title: 'Components/Icon',
	component: Icon,
	argTypes: {
		onChange: {
			action: 'Changed',
		},
	},
} as Meta

export const BackIcon: Story<IIconProps> = args => <Icon {...args} />
BackIcon.args = {
	icon: 'back',
	type: 'tertiary',
}

export const SendIcon: Story<IIconProps> = args => <Icon {...args} />
SendIcon.args = {
	icon: 'send',
	type: 'tertiary',
}

export const Primary: Story<IIconProps> = args => <Icon {...args} />
Primary.args = {
	icon: 'send',
	type: 'primary',
}

export const Secondary: Story<IIconProps> = args => <Icon {...args} />
Secondary.args = {
	icon: 'send',
	type: 'secondary',
}

export const Tertiary: Story<IIconProps> = args => <Icon {...args} />
Tertiary.args = {
	icon: 'send',
	type: 'tertiary',
}
