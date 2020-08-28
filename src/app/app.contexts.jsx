import React from 'react'
import { CodesProvider } from './codes/context/codes.hoc'
import { RecipesProvider } from "./recipes/context/recipes.hoc";

function combine(...providers) {
  if (providers.length === 1) {
    return providers[0]
  }

  return providers.reduce((Provider1, Provider2) => ({ children }) => <Provider1><Provider2>{children}</Provider2></Provider1>)
}

const AppProviders = combine(
  CodesProvider,
  RecipesProvider
)

function AppContexts({ children }) {
  return (
    <AppProviders>
      {children}
    </AppProviders>
  )
}

export default AppContexts
