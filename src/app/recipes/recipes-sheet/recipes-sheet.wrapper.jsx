import React from 'react'
import PropTypes from 'prop-types'
import { compose } from "recompose";

import { withRecipesDependenciesInjection } from "../context/recipes.di";
import RecipesSheet from "./recipes-sheet";
import { useRecipesContext } from "..";

function RecipesSheetWrapper({ recipesService, match }) {
  const [recipesContext, dispatch] = useRecipesContext()

  const fetchRecipeById = React.useCallback(async (recipeId) => {
    const found = recipesContext.recipes?.find((item) => item.id === recipeId)

    if (found) {
      dispatch({ type: 'recipe:set', payload: found })
    } else {
      const fetched = await recipesService.getRecipe(recipeId)

      if (!fetched.error) {
        dispatch({ type: 'recipe:set', payload: fetched })
      }
    }
  }, [])

  React.useEffect(() => {
    fetchRecipeById(match.params.id)

    return () => dispatch({ type: 'recipe:set', payload: null })
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
