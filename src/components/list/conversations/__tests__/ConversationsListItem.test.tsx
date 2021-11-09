import {
	cleanup,
	render,
	screen,
} from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { composeStories } from '@storybook/testing-react'

import * as stories from '../ConversationsListItem.stories'

const { Default } = composeStories(stories)
const queryClient = new QueryClient()

afterEach(cleanup)
const storyComponent = <Default />

it('should render a conversations list item', () => {
	render(storyComponent)
	expect(screen.getByText(Default.args.userName)).toBeVisible()
})

it('should match snapshot', () => {
	const tree = render(storyComponent)
	expect(tree).toMatchSnapshot()
})
