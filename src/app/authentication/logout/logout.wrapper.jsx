import React from 'react'
import Logout from './logout'
import AuthenticationService from '../authentication.service'
import Firebase from '../../../core/common/utils/firebase'
import { clearSession } from '../../../core/common/utils/session'
import { withRouter } from 'react-router'
import { HOME_ROUTE } from '../../quercus.routes'

const firebase = Firebase()
const authenticationService = AuthenticationService(firebase)

async function onLogout() {
  const result = await authenticationService.doLogout()

  clearSession()
  return result
}

function LogoutWrapper({ history }) {
  React.useEffect(() => {
    onLogout().then(() => history.push(HOME_ROUTE.url))
  }, [history])

  return (
    <Logout />
  )
}

export default withRouter(LogoutWrapper)
