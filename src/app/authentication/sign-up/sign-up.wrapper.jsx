import React from 'react'
import SignUp from './sign-up'
import Firebase from '../../../core/common/utils/firebase'
import AuthenticationService from '../authentication.service'
import { withRouter } from "react-router";
import { HOME_ROUTE } from "../../castanea.routes";

const firebase = Firebase()
const authenticationService = AuthenticationService(firebase)

function SignUpWrapper({ history }) {

  async function onSignUpHandler(type) {
    try {
      await authenticationService.doLogin(type)

      history.push(HOME_ROUTE.url)
    } catch (error) {
      console.error('error', error)
    }

  }

  return (
    <SignUp onSignUpClicked={onSignUpHandler} />
  )
}

export default withRouter(SignUpWrapper)
