import React from 'react'
import Home from './home'
import { compose } from "recompose";

import { useCodesContext } from "../codes";
import { useRecipesContext } from "../recipes";

import { withCodesDependenciesInjection } from "../codes/context/codes.di";
import { withRecipesDependenciesInjection } from "../recipes/context/recipes.di";
import CodesTypes from "../codes/context/codes.types";
import RecipesTypes from "../recipes/context/recipes.types";

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
      type: CodesTypes.SET_CODES_PROJECTS,
      payload: response,
    })
  }

  async function getRecipes() {
    const response = await recipesService.findRecipes()

    dispatchRecipes({
      type: RecipesTypes.SET_RECIPES,
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
