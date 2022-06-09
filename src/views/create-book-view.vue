// The create book view

<template>
  <section class="create-book">
    <CreateUpdateForm
      @submit="createBook"
      textSubmitButton="create" />
  </section>
</template>

<script>
import { createBook } from '../api/book-store-api'
import CreateUpdateForm from '../components/CreateUpdateForm'

export default {
  name: 'create-book-view',
  methods: {
    createBook (newData) {
      createBook(newData)
    }
  },
  components: {
    CreateUpdateForm
  }
}
</script>
