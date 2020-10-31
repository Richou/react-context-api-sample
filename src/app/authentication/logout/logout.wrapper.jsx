import React from 'react'
import Logout from './logout'
import AuthenticationService from '../authentication.service'
import Firebase from '../../../core/common/utils/firebase'
import { withRouter } from 'react-router'
import { HOME_ROUTE } from '../../castanea.routes'
import { compose } from "recompose";

import { useCodesContext } from "../../codes";
import { useRecipesContext } from "../../recipes";
import RecipesTypes from "../../recipes/context/recipes.types";
import CodesTypes from "../../codes/context/codes.types";

const firebase = Firebase()
const authenticationService = AuthenticationService(firebase)

async function onLogout() {
  return authenticationService.doLogout()
}

function LogoutWrapper({ history }) {
  const [, dispatchCodes] = useCodesContext()
  const [, dispatchRecipes] = useRecipesContext()

  React.useEffect(() => {
    onLogout().then(() => history.push(HOME_ROUTE.url))
    dispatchCodes({
      type: CodesTypes.SET_CODES_PROJECTS,
      payload: [],
    })
    dispatchRecipes({
      type: RecipesTypes.SET_RECIPES,
      payload: [],
    })
  }, [history])

  return (
    <Logout />
  )
}

export default compose(
  withRouter,
)(LogoutWrapper)
