import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyADwSWhXqmX8RIrzUAHNsU04HsgvTVMZ7Q',
  authDomain: 'book-store-project-id.firebaseapp.com',
  databaseURL: 'https://book-store-project-id.firebaseio.com',
  projectId: 'book-store-project-id',
  storageBucket: 'book-store-project-id.appspot.com',
}

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.firestore()
const storage = firebaseApp.storage()
const auth = firebaseApp.auth()

export { db, storage, auth }
