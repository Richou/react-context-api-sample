import React from 'react'

import Firebase from '../../../core/common/utils/firebase'
import RecipesService from '../../../core/business/recipes/recipes.service'

const firebase = Firebase()
const recipesService = RecipesService(firebase.getFirestore(), firebase.getAuthentication())

export const withRecipesDependenciesInjection = (Component) => ({ ...props }) => {
  return <Component {...props} recipesService={recipesService} />
}
