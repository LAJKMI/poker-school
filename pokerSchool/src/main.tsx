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
import QuizzComp from './quizz/QuizzComp.tsx'
import Scenario from './scenarioQuizz/Scenario.tsx'
import ChooseGame from './scenarioQuizz/chooseGame/ChooseGame.tsx'

const queryClient = new QueryClient()
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/variant/:id", element: <VariantRules /> },
  { path: "/dictionary", element: <Dictionary /> },
  { path: "/quizz/:id", element: <QuizzComp /> },
  { path: "/choosegame", element: <ChooseGame /> },
  { path: "/scenario/:id", element: <Scenario /> },
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
