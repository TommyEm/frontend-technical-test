import {
	cleanup,
	render,
	screen,
} from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { composeStories } from '@storybook/testing-react'

import * as stories from '../ConversationsList.stories'

const { Default } = composeStories(stories)
const queryClient = new QueryClient()

afterEach(cleanup)
const emptyComponent = (
    <QueryClientProvider client={queryClient}>
		<Default />
    </QueryClientProvider>
)

it('should render a conversations list', () => {
	render(emptyComponent)
	setTimeout(() => {
		expect(screen.getByTestId('test-ConversationsList')).toBeVisible()
	}, 1000)
})

it('should match snapshot', () => {
	const tree = render(emptyComponent)
	expect(tree).toMatchSnapshot()
})
