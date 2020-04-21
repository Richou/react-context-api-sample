import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './app.scss'
import { CODES_HOME, HOME_ROUTE, LOGOUT_ROUTE, SIGN_UP_ROUTE } from './castanea.routes'
import HomeWrapper from './home'
import CodesWrapper from './codes'
import SignUpWrapper from './authentication/sign-up'
import LogoutWrapper from './authentication/logout/logout.wrapper'

import { SecuredRoute } from '../core/components/secured-routes'
import AppContexts from './app.contexts'

function App() {
  return (
    <AppContexts>
      <Router>
        <Switch>
          <Route exact path={SIGN_UP_ROUTE.url} component={SignUpWrapper} />
          <SecuredRoute exact path={HOME_ROUTE.url} component={HomeWrapper} redirectTo={SIGN_UP_ROUTE.url} />
          <SecuredRoute exact path={CODES_HOME.url} component={CodesWrapper} redirectTo={SIGN_UP_ROUTE.url} />
          <SecuredRoute exact paht={LOGOUT_ROUTE.url} component={LogoutWrapper} redirectTo={SIGN_UP_ROUTE.url} />
        </Switch>
      </Router>
    </AppContexts>
  );
}

export default App;
