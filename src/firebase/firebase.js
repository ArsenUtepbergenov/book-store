import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBtBBq1EetvTmiYH_c5xGwBkv7m2jJAUjQ",
  authDomain: "book-store-id.firebaseapp.com",
  databaseURL: "https://book-store-id.firebaseio.com",
  projectId: "book-store-id",
  storageBucket: "book-store-id.appspot.com",
  messagingSenderId: "101663699674"
}

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.firestore()
const storage = firebaseApp.storage()
const auth = firebaseApp.auth()

export {
  db,
  storage,
  auth
}
