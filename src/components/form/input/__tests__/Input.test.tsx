import {
	cleanup,
	fireEvent,
	render,
	screen,
} from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from '../Input.stories'

const { Empty, Filled } = composeStories(stories)

afterEach(cleanup)
const emptyComponent = <Empty />
const filledComponent = <Filled />

it('should render an empty input', () => {
	render(emptyComponent)
	const input = screen.getByTestId('test-Input')
	expect(input).toBeVisible()
	expect(input).toHaveAttribute('type', 'text')
	expect(input).toHaveValue('')
})

it('should fill an input', () => {
	render(emptyComponent)
	const input = screen.getByTestId('test-Input')
	const changeValue = 'Filled input'
	fireEvent.change(input, { target: { value: changeValue } })
	expect(input).toHaveValue(changeValue)
})

it('should render a filled input', () => {
	render(filledComponent)
	expect(screen.getByTestId('test-Input')).toHaveValue('Input')
})

it('should match snapshot', () => {
	const tree = render(emptyComponent)
	expect(tree).toMatchSnapshot()
})
