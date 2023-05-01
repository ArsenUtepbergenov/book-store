// base
export type FirebaseUser = {
  email: string
  password: string
}

export type Notification = {
  title: string
  message: string
}

export type ReceivedUser = {
  displayName: string
  email: string
  photoURL: string
}

export type User = FirebaseUser & { name: string }
export type UserWithRepeatedPassword = User & { repeatedPassword: string }
export type UserPhoto = { url: string; fileName: string }
