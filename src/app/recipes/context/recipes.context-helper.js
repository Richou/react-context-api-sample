import RecipesTypes from './recipes.types'

export default function RecipesContextHelper(dispatch) {
  function dispatchRecipes(recipes) {
    dispatch({
      type: RecipesTypes.SET_RECIPES,
      payload: recipes,
    })
  }

  function dispatchRecipe(recipe) {
    dispatch({
      type: RecipesTypes.SET_RECIPE,
      payload: recipe,
    })
  }

  function dispatchClearRecipe() {
    dispatch({
      type: RecipesTypes.SET_RECIPE,
      payload: null,
    })
  }

  return Object.freeze({
    dispatchRecipes,
    dispatchRecipe,
    dispatchClearRecipe,
  })
}
