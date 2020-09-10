import RecipesTypes from './recipes.types'

const recipesReducer = (state, action) => {
  switch(action.type) {
    case RecipesTypes.SET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      }
    default:
      return state
  }
}

export default recipesReducer
