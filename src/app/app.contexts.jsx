import React from 'react'
import { CodesProvider } from './codes/context/codes.context'
import { RecipesProvider } from "./recipes/context/recipes.context";

function AppContexts({ children }) {
  return (
    <CodesProvider>
      <RecipesProvider>
        {children}
      </RecipesProvider>
    </CodesProvider>
  )
}

export default AppContexts
