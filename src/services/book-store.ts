import { toRaw } from 'vue'

import { db } from '../firebase'
import { getDocs } from '@firebase/firestore'
import { deleteDoc, collection, doc, getDoc, addDoc } from 'firebase/firestore'
import { Book, BookExtended } from '@/models/store'

async function fetchBooks() {
  try {
    const books: BookExtended[] = []

    const querySnapshot = await getDocs(collection(db, 'books'))

    querySnapshot.forEach(doc => {
      const dataDoc = {
        id: doc.id,
        ...doc.data(),
      }

      books.push(dataDoc as BookExtended)
    })

    return books
  } catch (error) {
    console.error('Error: cannot get books collection: ', error)
  }
}

async function fetchBook(id = '') {
  try {
    const docRef = doc(db, 'books', id)

    const res = await getDoc(docRef)

    return res.data()
  } catch (error) {
    console.error(`Error: cannot get a book with id = ${id}: `, error)
  }
}

async function deleteBook(id = '') {
  try {
    const docRef = doc(db, 'books', id)

    await deleteDoc(docRef)

    console.log(`The book with id ${id} has been successfully deleted!`)
  } catch (error) {
    console.error(`Error: cannot delete the book with id - ${id}: `, error)
  }
}

async function deleteImg(fileName = '') {
  try {
    // const imgRef = storage.ref().child('img/' + fileName)
    // await imgRef.delete()
    console.log(`The img/${fileName} in storage successfully deleted!`)
  } catch (error) {
    console.error(`Error: cannot delete the img/${fileName}: `, error)
  }
}

async function updateBook(id = '', book: Book) {
  console.log(book)

  try {
    // await db.collection('books').doc(id).update(book)
    console.log(`The book with id ${id}, successfully updated!`)
  } catch (error) {
    console.error(`Cannot update the book with id - ${id}: `, error)
  }
}

async function createBook(data: Book) {
  const bData = toRaw(data)

  try {
    const dbRef = collection(db, 'books')
    const docRef = await addDoc(dbRef, bData)

    console.log(`The book with id ${docRef.id}, has been successfully created!`)
  } catch (error) {
    console.error(`Cannot create the book: `, error)
  }
}

export { fetchBooks, deleteBook, deleteImg, updateBook, createBook, fetchBook }
