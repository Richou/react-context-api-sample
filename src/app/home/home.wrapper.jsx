import React from 'react'
import Home from './home'
import { compose } from "recompose";

import { useCodesContext } from "../codes";
import { useRecipesContext } from "../recipes";

import { withCodesDependenciesInjection } from "../codes/context/codes.di";
import { withRecipesDependenciesInjection } from "../recipes/context/recipes.di";

function HomeWrapper({ projectService, recipesService }) {
  const [codesContext, dispatchCodes] = useCodesContext()
  const [recipesContext, dispatchRecipes] = useRecipesContext()

  React.useEffect(() => {
    getProjects()
    getRecipes()
  }, [])

  async function getProjects() {
    const response = await projectService.findProjects()

    dispatchCodes({
      type: 'codeProjects:set',
      payload: response,
    })
  }

  async function getRecipes() {
    const response = await recipesService.findRecipes()

    dispatchRecipes({
      type: 'recipes:set',
      payload: response,
    })
  }

  return (
    <Home
      codeProjects={codesContext.codesProjects}
      recipes={recipesContext.recipes}
    />
  )
}

export default compose(
  withCodesDependenciesInjection,
  withRecipesDependenciesInjection,
)(HomeWrapper)
