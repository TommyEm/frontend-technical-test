import {
	cleanup,
	fireEvent,
	render,
	screen,
} from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from '../IconButton.stories'

const { SendButton } = composeStories(stories)

afterEach(cleanup)
const emptyComponent = <SendButton />

it('should render an icon button', () => {
	render(emptyComponent)
	expect(screen.getByRole('button')).toBeVisible()
})

it('should click a button', () => {
	const handleClick = jest.fn()
	render(<SendButton onClick={handleClick} />)
	fireEvent.click(screen.getByRole('button'))
	expect(handleClick).toHaveBeenCalled()
})

it('should match snapshot', () => {
	const tree = render(emptyComponent)
	expect(tree).toMatchSnapshot()
})
