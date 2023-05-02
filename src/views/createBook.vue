<template>
  <section class="create-book">
    <CreateUpdateForm @submit="createBook" textSubmitButton="create" />
  </section>
</template>

<script setup>
import { createBook } from '../services/book-store'
import CreateUpdateForm from '../components/CreateUpdateForm'
</script>
