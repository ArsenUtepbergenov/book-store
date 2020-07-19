import router from '../router'
import { db, storage } from '../firebase/firebase'

async function fetchBooks () {
  try {
    const books = []
    const result = await db.collection('books').get()
    for (const doc of result.docs) {
      const dataDoc = {
        id: doc.id, ...doc.data()
      }
      books.push(dataDoc)
    }
    return books
  } catch (error) {
    console.error('Error: cannot get books collection: ', error)
  }
}

async function fetchBook (id) {
  try {
    const result = await db.collection('books').doc(id).get()
    return result.data()
  } catch (error) {
    console.error(`Error: cannot get a book with id = ${id}: `, error)
  }
}

async function deleteBook (id) {
  try {
    await db.collection('books').doc(id).delete()
    console.log(`The book with id ${id}, successfully deleted!`)
    router.push({ name: 'Home' })
  } catch (error) {
    console.error(`Error: cannot delete the book with id - ${id}: `, error)
  }
}

async function deleteImg (fileName) {
  try {
    const imgRef = storage.ref().child('img/' + fileName)
    await imgRef.delete()
    console.log(`The img/${fileName} in storage successfully deleted!`)
  } catch (error) {
    console.error(`Error: cannot delete the img/${fileName}: `, error)
  }
}

async function updateBook (id, book) {
  try {
    await db.collection('books').doc(id).update(book)
    console.log(`The book with id ${id}, successfully updated!`)
  } catch (error) {
    console.error(`Error: cannot update the book with id - ${id}: `, error)
  }
}

async function createBook (data) {
  try {
    const docRef = await db.collection('books').add(data)
    console.log(`The book with id ${docRef.id}, successfully created!`)
  } catch (error) {
    console.error(`Error: cannot create the book with data - ${data}: `, error)
  }
}

export {
  fetchBooks,
  deleteBook,
  deleteImg,
  updateBook,
  createBook,
  fetchBook
}