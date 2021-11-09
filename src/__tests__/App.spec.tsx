import { render, screen } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from 'react-query'
import App from "../pages"

const queryClient = new QueryClient()

const appComponent = (
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)

describe("App", () => {
  it("should render correctly App", () => {
    render(appComponent)
    expect(
      screen.getByText(/Conversations/)
    ).toBeInTheDocument()
  })
})