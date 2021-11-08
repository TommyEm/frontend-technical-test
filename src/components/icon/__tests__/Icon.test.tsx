import {
	cleanup,
	render,
	screen,
} from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from '../Icon.stories'

const { Primary, Secondary } = composeStories(stories)

afterEach(cleanup)
const storyComponent = <Primary />

it('should render a primary icon', () => {
	render(storyComponent)
	expect(screen.getByTestId('test-Icon')).toBeVisible()
})

it('should render a secondary icon', () => {
	render(<Secondary />)
	expect(screen.getByTestId('test-Icon')).toBeVisible()
})

it('should match snapshot', () => {
	const tree = render(storyComponent)
	expect(tree).toMatchSnapshot()
})
