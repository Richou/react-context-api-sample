import React from 'react'
import Logout from './logout'
import AuthenticationService from '../authentication.service'
import Firebase from '../../../core/common/utils/firebase'
import { withRouter } from 'react-router'
import { HOME_ROUTE } from '../../castanea.routes'

const firebase = Firebase()
const authenticationService = AuthenticationService(firebase)

async function onLogout() {
  return authenticationService.doLogout()
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
