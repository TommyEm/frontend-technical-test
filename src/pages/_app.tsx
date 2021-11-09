import { useState } from 'react'
import type { AppProps } from 'next/app'
import { getLoggedUserId } from '../utils/getLoggedUserId'
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from 'react-query'

import { LoggedUserIdContext } from '@/store/context'
import '../styles/globals.css'

// Default way to get a logged user
export const loggedUserId = getLoggedUserId()


function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <LoggedUserIdContext.Provider value={loggedUserId}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </LoggedUserIdContext.Provider>
    </QueryClientProvider>
  )
}

export default MyApp
