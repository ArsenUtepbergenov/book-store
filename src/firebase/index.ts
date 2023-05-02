import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'book-store-project-id.firebaseapp.com',
  databaseURL: 'https://book-store-project-id.firebaseio.com',
  projectId: 'book-store-project-id',
  storageBucket: 'book-store-project-id.appspot.com',
}

const app = initializeApp(config)

export const storage = getStorage(app)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const signIn = signInWithEmailAndPassword
export const signUp = createUserWithEmailAndPassword
