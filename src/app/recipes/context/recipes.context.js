import RecipesTypes from './recipes.types'

export default function RecipesContextHelper(ctx, dispatch) {
  function context() {
    return ctx
  }

  function dispatchRecipes(recipes) {
    dispatch({
      type: RecipesTypes.SET_RECIPES,
      payload: recipes,
    })
  }

  return Object.freeze({
    context,
    dispatchRecipes,
  })
}
