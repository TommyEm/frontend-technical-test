import {
	cleanup,
	render,
	screen,
} from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from '../Title.stories'

const { Default } = composeStories(stories)

afterEach(cleanup)
const emptyComponent = <Default />

it('should render a title', () => {
	render(emptyComponent)
	expect(screen.getByTestId('test-Title')).toBeVisible()
})

it('should match snapshot', () => {
	const tree = render(emptyComponent)
	expect(tree).toMatchSnapshot()
})
