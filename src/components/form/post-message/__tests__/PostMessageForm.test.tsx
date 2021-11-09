import {
	cleanup,
	render,
	screen,
} from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { composeStories } from '@storybook/testing-react'

import * as stories from '../PostMessageForm.stories'

const { Default } = composeStories(stories)
const queryClient = new QueryClient()

afterEach(cleanup)
const emptyComponent = (
    <QueryClientProvider client={queryClient}>
		<Default />
    </QueryClientProvider>
)

it('should render a "post message" form', () => {
	render(emptyComponent)
	expect(screen.getByRole('textbox')).toBeVisible()
	expect(screen.getByRole('button')).toBeVisible()
})

it('should match snapshot', () => {
	const tree = render(emptyComponent)
	expect(tree).toMatchSnapshot()
})
