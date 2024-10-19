import './global.css'

import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { ConstantContextProvider } from './context/ConstantContext'
import { router } from './router'

export function App() {
  return (
    <HelmetProvider>
      <ConstantContextProvider>
        <RouterProvider router={router} />
      </ConstantContextProvider>
    </HelmetProvider>
  )
}
