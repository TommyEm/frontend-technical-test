import {
	cleanup,
	render,
	screen,
} from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from '../Header.stories'

const { Default, WithChildren } = composeStories(stories)

afterEach(cleanup)
const emptyComponent = <Default />

it('should render a header', () => {
	render(emptyComponent)
	expect(screen.getByRole('banner')).toBeVisible()
})

it('should render a header with an icon as children', () => {
	render(<WithChildren />)
	expect(screen.getByTestId('test-Icon')).toBeVisible()
})

it('should match snapshot', () => {
	const tree = render(emptyComponent)
	expect(tree).toMatchSnapshot()
})
