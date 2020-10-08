import React from 'react'
import recipesReducer from './recipes.reducer'
import RecipesContextHelper from './recipes.context-helper'

const initialState = {
  recipes: [],
}

const RecipesContext = React.createContext(null);

export const RecipesProvider = props => {
  const [state, dispatch] = React.useReducer(recipesReducer, initialState);
  const value = React.useMemo(() => {
    return [state, dispatch]
  }, [state, dispatch])
  return <RecipesContext.Provider value={value}>{props.children}</RecipesContext.Provider>
}

export const useRecipesContext = () => {
  const [state, dispatch] = React.useContext(RecipesContext);

  return RecipesContextHelper(state, dispatch)
}
