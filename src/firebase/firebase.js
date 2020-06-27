import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
  apiKey: "AIzaSyBtBBq1EetvTmiYH_c5xGwBkv7m2jJAUjQ",
  authDomain: "book-store-id.firebaseapp.com",
  databaseURL: "https://book-store-id.firebaseio.com",
  projectId: "book-store-id",
  storageBucket: "book-store-id.appspot.com",
  messagingSenderId: "101663699674"
};

// App
const firebaseApp = firebase.initializeApp(config);
// db
const db = firebaseApp.firestore();
db.settings({timestampsInSnapshots: true});
// storage
const storage = firebaseApp.storage();

export {db};
export {storage};
