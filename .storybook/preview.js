import * as nextImage from 'next/image'
import { QueryClient, QueryClientProvider } from 'react-query'

import { LoggedUserIdContext } from '@/store/context'


Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} />
});

const queryClient = new QueryClient()

export const decorators = [
  Story => (
    <QueryClientProvider client={queryClient}>
      <LoggedUserIdContext.Provider value={1}>
        <Story />
      </LoggedUserIdContext.Provider>
    </QueryClientProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}