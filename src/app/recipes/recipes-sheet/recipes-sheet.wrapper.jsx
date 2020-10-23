import React from 'react'
import PropTypes from 'prop-types'
import { compose } from "recompose";

import { withRecipesDependenciesInjection } from "../context/recipes.di";
import RecipesSheet from "./recipes-sheet";
import { useRecipesContext } from "..";

function RecipesSheetWrapper({ recipesService, match }) {
  const [recipesContext, recipesContextHelper] = useRecipesContext()

  const fetchRecipeById = React.useCallback(async (recipeId) => {
    const found = recipesContext.recipes?.find((item) => item.id === recipeId)

    if (found) {
      recipesContextHelper.dispatchRecipe(found)
    } else {
      const fetched = await recipesService.getRecipe(recipeId)

      if (!fetched.error) {
        recipesContextHelper.dispatchRecipe(fetched)
      }
    }
  }, [])

  React.useEffect(() => {
    fetchRecipeById(match.params.id)

    return () => recipesContextHelper.dispatchClearRecipe()
  }, [])

  return (
    <RecipesSheet recipe={recipesContext.recipe} />
  )
}

RecipesSheetWrapper.propTypes = {
  recipesService: PropTypes.shape({}).isRequired,
}

export default compose(
  withRecipesDependenciesInjection,
)(RecipesSheetWrapper)
