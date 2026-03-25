import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './main.css'
import { BrowserRouter } from 'react-router'


// import {
//   QueryClient,
//   QueryClientProvider,
// } from '@tanstack/react-query'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
