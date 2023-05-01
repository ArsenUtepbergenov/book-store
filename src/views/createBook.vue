<template>
  <section class="create-book">
    <CreateUpdateForm @submit="createBook" textSubmitButton="create" />
  </section>
</template>

<script setup>
import { createBook } from '../api/book-store-api'
import CreateUpdateForm from '../components/CreateUpdateForm'
</script>
