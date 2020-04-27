import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Firebase from "../../common/utils/firebase";

const firebase = Firebase()

function SecuredRoute({ component: Component, redirectTo, ...rest }) {
  const [authenticated, setAuthenticated] = React.useState(false)
  const [working, setWorking] = React.useState(true)

  React.useEffect(() => {
    const init = { unmounted: false }
    firebase.getAuthentication().onAuthStateChanged((user) => {
      if (!init.unmounted) {
        setAuthenticated(!!user)
        setWorking(false)
      }
    })

    return function cleanup() {
      init.unmounted = true
    }
  }, [])

  return (
    <Route {...rest} render={(props) => {
      if (working) {
        return <p>Loading ...</p>
      }
      if (authenticated) {
        return <Component {...props} />
      }

      return <Redirect to={{ pathname: redirectTo, state: { from: props.location } }}/>
    }} />
  )
}

export default SecuredRoute
