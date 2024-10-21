import './global.css'

import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { ConstantContextProvider } from './context/ConstantContext'
import { router } from './router'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'

export function App() {
  return (
    <HelmetProvider>
      <ConstantContextProvider>
        <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        </QueryClientProvider>
        
      </ConstantContextProvider>
    </HelmetProvider>
  )
}
