import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import AppRouter from "./routes/AppRouter"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Navbar />
          <AppRouter />
        <Footer />
    </QueryClientProvider>
  )
}

export default App
