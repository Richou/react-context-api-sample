import React from 'react'
import PropTypes from 'prop-types'
import { Button } from "../../../core/ui";

function SignUp({ onSignUpClicked }) {
  return (
    <Button onClick={onSignUpClicked}>Sign Up</Button>
  )
}

SignUp.propTypes = {
  onSignUpClicked: PropTypes.func,
}

SignUp.defaultProps = {
  onSignUpClicked: () => {},
}

export default SignUp
