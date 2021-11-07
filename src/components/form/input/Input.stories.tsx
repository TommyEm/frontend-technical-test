import { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { Input, IInputProps } from './Input'


export default {
	title: 'Components/Form/Input',
	component: Input,
	argTypes: {
		onChange: {
			action: 'Changed',
		},
	},
} as Meta

const Template: Story<IInputProps> = args => {
  	const [value, setValue] = useState(args.value ?? '')
	return (
		<Input
			{...args}
			onChange={(e) => {
				const val = e.target.value
				args.onChange(val)
				setValue(val)
			}}
			value={value}
		/>
	)
}

export const Empty: Story<IInputProps> = Template.bind({})
Empty.args = {
	placeholder: 'Type something',
}

export const Filled: Story<IInputProps> = Template.bind({})
Filled.args = {
	value: 'Input',
}
