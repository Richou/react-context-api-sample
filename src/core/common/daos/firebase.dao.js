import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
}

firebase.initializeApp(firebaseConfig)

export function FirebaseDao() {

  const firestore = firebase.firestore()

  function getFirestore() {
    return firestore
  }

  return Object.freeze({
    getFirestore,
  })
}
