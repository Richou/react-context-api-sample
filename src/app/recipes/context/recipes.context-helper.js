import RecipesTypes from './recipes.types'

export default function RecipesContextHelper(dispatch) {
  function dispatchRecipes(recipes) {
    dispatch({
      type: RecipesTypes.SET_RECIPES,
      payload: recipes,
    })
  }

  return Object.freeze({
    dispatchRecipes,
  })
}
