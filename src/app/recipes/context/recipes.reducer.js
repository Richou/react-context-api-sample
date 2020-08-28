import RecipesTypes from './recipes.types'

const recipesReducer = (state, action) => {
  switch(action.type) {
    case RecipesTypes.SET_RECIPES:
      return state
    default:
      return state
  }
}

export default recipesReducer
