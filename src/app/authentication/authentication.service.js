export default function AuthenticationService(firebase) {

  const authentication = firebase.getAuthentication()
  const providers = {
    google: firebase.getGoogleAuthProvider(),
    github: firebase.getGithubAuthProvider(),
  }


  async function doLogin(type = 'github') {
    return authentication.signInWithPopup(providers[type])
  }

  async function doLogout() {
    return authentication.signOut()
  }

  return Object.freeze({
    doLogin,
    doLogout,
  })
}
