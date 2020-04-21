import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
}

firebase.initializeApp(config)

export default function Firebase() {
  const githubAuthProvider = new firebase.auth.GithubAuthProvider()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
  const authentication = firebase.auth()
  const firestore = firebase.firestore()

  function getAuthentication() {
    return authentication
  }

  function getGithubAuthProvider() {
    return githubAuthProvider
  }

  function getGoogleAuthProvider() {
    return googleAuthProvider
  }

  function getFirestore() {
    return firestore
  }

  return Object.freeze({
    getAuthentication,
    getGithubAuthProvider,
    getGoogleAuthProvider,
    getFirestore,
  })
}
