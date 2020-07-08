// The book details view

<template>
  <section class="book-details">
    <Modal v-if="showModal" @close="toggleModal()">
      <CreateUpdateForm
        slot="body"
        :book="book"
        @submit="newData => updateBook(newData)"
        textSubmitButton="update" />
    </Modal>
    <div class="container-md">
      <div class="row mt-3 mb-3">
        <div class="card bg-light p-0">
          <div class="row g-0">
            <div class="card-header d-flex justify-content-between">
              <h2>{{book.title}}</h2>
              <div class="d-flex align-items-center">
                <button type="button" class="close" @click="toggleModal()" aria-label="Close modal window">
                  <svg width="1.4em" height="1.4em" viewBox="0 0 16 16" class="bi bi-pencil-square text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg>
                </button>
                <button type="button" class="close ml-2" @click="deleteBook()" aria-label="Delete book">
                  <svg width="1.4em" height="1.4em" viewBox="0 0 16 16" class="bi bi-trash text-danger" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="col-md-4">
              <img :src="book.img" style="width: 100%; min-height: 400px;" :alt="book.title">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Author: {{book.author}}</h5>
                <p class="card-text">Description: {{book.description}}</p>
                <p class="card-text">
                  <small class="text-muted">Price: {{book.price}} руб.</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { deleteBook, deleteImg, updateBook } from '../api/book-store-api'
import router from '../router'
import Modal from '../components/Modal'
import CreateUpdateForm from '../components/CreateUpdateForm'

export default {
  name: 'book-details-view',
  data () {
    return {
      bookId: '',
      book: null,
      showModal: false
    }
  },
  created () {
    this.bookId = this.$route.params.id
    this.book = this.$route.params.book
  },
  methods: {
    deleteBook () {
      deleteImg(this.book.imgFileName)
      deleteBook(this.bookId)
    },
    updateBook (newData) {
      if (this.book.imgFileName !== newData.imgFileName)
        deleteImg(this.book.imgFileName)

      this.book = newData
      updateBook(this.bookId, newData)
    },
    toggleModal () {
      this.showModal = !this.showModal
    }
  },
  components: {
    Modal,
    CreateUpdateForm
  }
}
</script>
