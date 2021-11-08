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

export const Primary: Story<IIconProps> = args => <Icon {...args} />
Primary.args = {
	type: 'primary',
}

export const Secondary: Story<IIconProps> = args => <Icon {...args} />
Secondary.args = {
	type: 'secondary',
}
