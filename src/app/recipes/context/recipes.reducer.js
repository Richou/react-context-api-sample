const recipesReducer = (state, action) => {
  switch(action.type) {
    case 'recipes:set':
      return {
        ...state,
        recipes: action.payload,
      }
    case 'recipe:set':
      return {
        ...state,
        recipe: action.payload,
      }
    default:
      return state
  }
}

export default recipesReducer
