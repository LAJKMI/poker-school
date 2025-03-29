import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundPage from './notFoundPage/NotFoundPage.tsx'
import VariantRules from './variantRules/VariantRules.tsx'
import Dictionary from './dictionaryPage/Dictionary.tsx'

const queryClient = new QueryClient()
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/variant/:id", element: <VariantRules /> },
  { path: "/dictionary", element: <Dictionary /> },
  { path: "*", element: <NotFoundPage /> }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
)
