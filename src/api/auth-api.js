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

async function login (email, password) {
  try {
    const { user } = await auth.signInWithEmailAndPassword(email, password)
    console.log(`You are logged in as ${user.email}`)
    return { status: 'success', message: `You are logged in as ${user.email}` }
  } catch (error) {
    console.error(error.code, error.message)
    return { status: 'error', message: error.message }
  }
}

async function logout () {
  try {
    console.log('User successfully logged out')
    return { status: 'success', message: `You successfully logged out` }
  } catch (error) {
    console.error(error.code, error.message)
    return { status: 'error', message: error.message }
  }
}

auth.onAuthStateChanged(user => {
  if (user) {
    console.log(user)
  } else {
    console.log('logout')
  }
})

export {
  register,
  login,
  logout
}