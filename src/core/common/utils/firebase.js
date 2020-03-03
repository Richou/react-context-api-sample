import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
}

firebase.initializeApp(config)

export default function Firebase() {


  const githubAuthProvider = new firebase.auth.GithubAuthProvider()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
  const authentication = firebase.auth()

  function getAuthentication() {
    return authentication
  }

  function getGithubAuthProvider() {
    return githubAuthProvider
  }

  function getGoogleAuthProvider() {
    return googleAuthProvider
  }

  return Object.freeze({
    getAuthentication,
    getGithubAuthProvider,
    getGoogleAuthProvider,
  })
}
