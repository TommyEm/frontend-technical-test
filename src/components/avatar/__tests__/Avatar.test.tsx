import {
	cleanup,
	render,
	screen,
} from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from '../Avatar.stories'

const { Default } = composeStories(stories)

afterEach(cleanup)
const emptyComponent = <Default />

it('should render an avatar', () => {
	render(emptyComponent)
	expect(screen.getByTestId('test-Avatar')).toBeVisible()
})

it('should match snapshot', () => {
	const tree = render(emptyComponent)
	expect(tree).toMatchSnapshot()
})
