import { Codes } from '@/enums'
import { auth, signIn, signUp, db } from '@/firebase'
import { FirebaseUser, ReceivedUser, User } from '@/models'
import { FirebaseError } from 'firebase/app'
import { signOut, updateProfile } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'

export async function login(_: unknown, { email, password }: FirebaseUser) {
  try {
    const { user } = await signIn(auth, email, password)

    console.log('login', user as ReceivedUser)
  } catch (error) {
    console.error(`${Codes.ERROR_SIGN_IN}`, error as FirebaseError)
  }
}

export async function registration(_: unknown, { name, email, password }: User) {
  try {
    const { user } = await signUp(auth, email, password)
    await setDoc(doc(db, 'users', user.uid), {
      name,
      email,
      photoURL: '',
      photoName: '',
    })

    await updateProfile(user, {
      displayName: name,
    })

    console.log('Document written with ID: ', user.uid)

    console.log('registration', user as ReceivedUser)
  } catch (error) {
    console.error(`${Codes.ERROR_REGISTRATION}`, error as FirebaseError)
  }
}

export async function logout() {
  try {
    await signOut(auth)
  } catch (error) {
    console.error(`${Codes.ERROR_LOGOUT}`, error as FirebaseError)
  }
}
