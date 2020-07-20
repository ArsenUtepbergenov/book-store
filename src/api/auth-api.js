import { auth } from '../firebase/firebase'

async function register (email, password) {
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password)
    console.log(`Account successfully created for ${user.email}`)
    return { status: 'success', message: `Account successfully created for ${user.email}` }
  } catch (error) {
    console.error(error.code, error.message)
    return { status: 'error', message: error.message }
  }
}

export {
  register
}