import {
	cleanup,
	render,
	screen,
} from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from '../Message.stories'

const { FromUser, ToUser } = composeStories(stories)

afterEach(cleanup)
const fromUserComponent = <FromUser />
const toUserComponent = <ToUser />

it('should render a message from the user', () => {
	const { message } = fromUserComponent.type.args
	render(fromUserComponent)
	expect(screen.getByText(message)).toBeVisible()
})

it('should render a message to the user', () => {
	const { authorName } = toUserComponent.type.args
	render(toUserComponent)
	expect(screen.getByText(authorName)).toBeVisible()
})

it('matches snapshot', () => {
	const tree = render(fromUserComponent)
	expect(tree).toMatchSnapshot()
})
