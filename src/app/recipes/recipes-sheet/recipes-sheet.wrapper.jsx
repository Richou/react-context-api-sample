import React from 'react'
import PropTypes from 'prop-types'
import { compose } from "recompose";

import { withRecipesDependenciesInjection } from "../context/recipes.di";
import { withRecipesContext } from "../context/recipes.hoc";
import RecipesSheet from "./recipes-sheet";

function RecipesSheetWrapper({ recipesContextHelper, recipesService, match }) {
  const [recipe, setRecipe] = React.useState({})

  React.useEffect(() => {
    fetchRecipeById(match.params.id)
  }, [])

  async function fetchRecipeById(recipeId) {
    const found = recipesContextHelper.context().recipes?.find((item) => item.id === recipeId)

    if (found) {
      setRecipe(found)
    } else {
      const fetched = await recipesService.getRecipe(recipeId)

      if (!fetched.error) {
        setRecipe(fetched)
      }
    }
  }

  return (
    <RecipesSheet recipe={recipe} />
  )
}

RecipesSheetWrapper.propTypes = {
  recipesContextHelper: PropTypes.shape({}).isRequired,
  recipesService: PropTypes.shape({}).isRequired,
}

export default compose(
  withRecipesContext,
  withRecipesDependenciesInjection,
)(RecipesSheetWrapper)
