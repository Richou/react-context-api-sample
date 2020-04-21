import React from 'react'
import { CodesProvider } from './codes/context/codes.hoc'

function AppContexts({ children }) {
  return (
    <CodesProvider>
      {children}
    </CodesProvider>
  )
}

export default AppContexts
