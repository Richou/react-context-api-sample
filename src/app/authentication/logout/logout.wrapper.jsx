import React from 'react'
import Logout from './logout'
import AuthenticationService from '../authentication.service'
import Firebase from '../../../core/common/utils/firebase'
import { withRouter } from 'react-router'
import { HOME_ROUTE } from '../../castanea.routes'
import { compose } from "recompose";

import { withCodesContext } from "../../codes";
import { withRecipesContext } from "../../recipes/context/recipes.hoc";

const firebase = Firebase()
const authenticationService = AuthenticationService(firebase)

async function onLogout() {
  return authenticationService.doLogout()
}

function LogoutWrapper({ history, codesContextHelper, recipesContextHelper }) {
  React.useEffect(() => {
    onLogout().then(() => history.push(HOME_ROUTE.url))
    codesContextHelper.dispatchProjects([])
    recipesContextHelper.dispatchRecipes([])
  }, [history])

  return (
    <Logout />
  )
}

export default compose(
  withRouter,
  withCodesContext,
  withRecipesContext,
)(LogoutWrapper)
