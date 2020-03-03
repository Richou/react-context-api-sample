import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { token } from '../../common/utils/session'

function SecuredRoute({ component: Component, redirectTo, ...rest }) {
  return (
    <Route {...rest} render={props => token() ? (<Component {...props} />) : (
      <Redirect to={{ pathname: redirectTo, state: { from: props.location } }}/>
    )}/>
  );
}

export default SecuredRoute
