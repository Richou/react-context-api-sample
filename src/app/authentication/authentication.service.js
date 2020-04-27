export default function AuthenticationService(firebase) {

  const authentication = firebase.getAuthentication()
  const providers = {
    google: firebase.getGoogleAuthProvider(),
    github: firebase.getGithubAuthProvider(),
  }


  async function doLogin(type = 'github') {
    const provider = providers[type]
    provider.addScope('profile')
    provider.addScope('email')
    return authentication.signInWithPopup(provider)
  }

  async function doLogout() {
    return authentication.signOut()
  }

  return Object.freeze({
    doLogin,
    doLogout,
  })
}
