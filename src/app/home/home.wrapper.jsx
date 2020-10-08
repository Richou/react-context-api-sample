import React from 'react'
import Home from './home'
import { compose } from "recompose";

import { useCodesContext } from "../codes";
import { useRecipesContext } from "../recipes";

import { withCodesDependenciesInjection } from "../codes/context/codes.di";
import { withRecipesDependenciesInjection } from "../recipes/context/recipes.di";

function HomeWrapper({ projectService, recipesService }) {
  const codesContextHelper = useCodesContext()
  const recipesContextHelper = useRecipesContext()

  React.useEffect(() => {
    getProjects()
    getRecipes()
  }, [])

  async function getProjects() {
    const response = await projectService.findProjects()

    codesContextHelper.dispatchProjects(response)
  }

  async function getRecipes() {
    const response = await recipesService.findRecipes()

    recipesContextHelper.dispatchRecipes(response)
  }

  return (
    <Home
      codeProjects={codesContextHelper.context().codesProjects}
      recipes={recipesContextHelper.context().recipes}
    />
  )
}

export default compose(
  withCodesDependenciesInjection,
  withRecipesDependenciesInjection,
)(HomeWrapper)
