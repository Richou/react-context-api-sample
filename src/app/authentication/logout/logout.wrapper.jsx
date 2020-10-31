import React from 'react'
import Logout from './logout'
import AuthenticationService from '../authentication.service'
import Firebase from '../../../core/common/utils/firebase'
import { withRouter } from 'react-router'
import { HOME_ROUTE } from '../../castanea.routes'
import { compose } from "recompose";

import { useCodesContext } from "../../codes";
import { useRecipesContext } from "../../recipes";

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
      type: 'codeProjects:set',
      payload: [],
    })
    dispatchRecipes({
      type: 'recipes:set',
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
