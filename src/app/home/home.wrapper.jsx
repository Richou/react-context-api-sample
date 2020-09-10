import React from 'react'
import Home from './home'
import { withCodesContext } from "../codes";
import { withCodesDependenciesInjection } from "../codes/context/codes.di";
import { compose } from "recompose";
import { withRecipesContext } from "../recipes/context/recipes.hoc";
import { withRecipesDependenciesInjection } from "../recipes/context/recipes.di";

function HomeWrapper({ projectService, codesContextHelper, recipesService, recipesContextHelper }) {
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
  withCodesContext,
  withCodesDependenciesInjection,
  withRecipesContext,
  withRecipesDependenciesInjection,
)(HomeWrapper)
