import { Story, Meta } from '@storybook/react'

import { Header, IHeader } from './Header'
import { BackIcon } from '@/components/icon/Icon.stories'
import { IIconProps } from '../icon/Icon'

export default {
	title: 'Components/Header',
	component: Header,
} as Meta

const Template: Story<IHeader> = args => <Header {...args} />

export const Default = Template.bind({})

export const WithChildren = Template.bind({})
WithChildren.args = {
	children: <BackIcon {...BackIcon.args as IIconProps} />,
}
