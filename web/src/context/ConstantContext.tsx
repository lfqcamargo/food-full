import React, { createContext, ReactNode, useContext } from 'react'

export interface ConstantContextType {
  name: string
}

export const ConstantContext = createContext<ConstantContextType | undefined>(
  undefined,
)

interface ConstantContextProviderProps {
  children: ReactNode
}

export const ConstantContextProvider: React.FC<
  ConstantContextProviderProps
> = ({ children }) => {
  const constant = { name: 'Hamburgueria' }

  return (
    <ConstantContext.Provider value={constant}>
      {children}
    </ConstantContext.Provider>
  )
}

export const useConstantContext = () => {
  const context = useContext(ConstantContext)
  if (!context) {
    throw new Error(
      'useConstantContext must be used within a ConstantContextProvider',
    )
  }
  return context
}
