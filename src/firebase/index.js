import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const config = {
  apiKey: 'AIzaSyADwSWhXqmX8RIrzUAHNsU04HsgvTVMZ7Q',
  authDomain: 'book-store-project-id.firebaseapp.com',
  databaseURL: 'https://book-store-project-id.firebaseio.com',
  projectId: 'book-store-project-id',
  storageBucket: 'book-store-project-id.appspot.com',
}

const app = initializeApp(config)

export const storage = getStorage(app)
export const db = getFirestore(app)
export const auth = getAuth(app)
