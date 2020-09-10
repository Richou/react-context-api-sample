import React from 'react'
import Recipes from "./recipes";
import { compose } from "recompose";
import { withRecipesContext } from "../context/recipes.hoc";
import { withRecipesDependenciesInjection } from "../context/recipes.di";
import { withRouter } from "react-router";

function RecipesWrapper({ recipesContextHelper, recipesService }) {

  React.useEffect(() => {
    getRecipes()
  }, [])

  async function getRecipes() {
    const response = await recipesService.findRecipes()

    recipesContextHelper.dispatchRecipes(response)
  }

  return (
    <Recipes
      recipes={recipesContextHelper.context().recipes}
    />
  )
}

export default compose(
  withRecipesContext,
  withRecipesDependenciesInjection,
  withRouter,
)(RecipesWrapper)
