import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './app.scss'
import { HOME_ROUTE, LOGOUT_ROUTE, SIGN_UP_ROUTE } from './castanea.routes'
import HomeWrapper from './home'
import SignUpWrapper from './authentication/sign-up'
import LogoutWrapper from './authentication/logout/logout.wrapper'

import { SecuredRoute } from '../core/components/secured-routes'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={SIGN_UP_ROUTE.url} component={SignUpWrapper} />
        <SecuredRoute exact path={HOME_ROUTE.url} component={HomeWrapper} redirectTo={SIGN_UP_ROUTE.url} />
        <SecuredRoute exact paht={LOGOUT_ROUTE.url} component={LogoutWrapper} redirectTo={SIGN_UP_ROUTE.url} />
      </Switch>
    </Router>
  );
}

export default App;
