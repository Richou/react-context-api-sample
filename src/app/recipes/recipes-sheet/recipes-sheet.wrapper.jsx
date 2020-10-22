import React from 'react'
import PropTypes from 'prop-types'
import { compose } from "recompose";

import { withRecipesDependenciesInjection } from "../context/recipes.di";
import RecipesSheet from "./recipes-sheet";
import { useRecipesContext } from "..";

function RecipesSheetWrapper({ recipesService, match }) {
  const [recipesContext, recipesContextHelper] = useRecipesContext()
  const [recipe, setRecipe] = React.useState({})

  const fetchRecipeById = React.useCallback(async (recipeId) => {
    const found = recipesContext.recipes?.find((item) => item.id === recipeId)

    if (found) {
      setRecipe(found)
    } else {
      const fetched = await recipesService.getRecipe(recipeId)

      if (!fetched.error) {
        setRecipe(fetched)
      }
    }
  }, [recipesContextHelper, recipesService])

  React.useEffect(() => {
    fetchRecipeById(match.params.id)
  }, [fetchRecipeById, match.params.id])

  return (
    <RecipesSheet recipe={recipe} />
  )
}

RecipesSheetWrapper.propTypes = {
  recipesService: PropTypes.shape({}).isRequired,
}

export default compose(
  withRecipesDependenciesInjection,
)(RecipesSheetWrapper)
