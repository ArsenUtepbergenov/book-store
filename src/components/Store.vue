<template>
  <section class="store">
    <div class="container-md">
      <div class="row">
        <div class="col-md-12 col-lg-6 mb-2 mt-2">
          <div class="input-group flex-nowrap">
            <span class="input-group-text border-secondary" id="addon-wrapping">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-book"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.214 1.072C4.813.752 6.916.71 8.354 2.146A.5.5 0 0 1 8.5 2.5v11a.5.5 0 0 1-.854.354c-.843-.844-2.115-1.059-3.47-.92-1.344.14-2.66.617-3.452 1.013A.5.5 0 0 1 0 13.5v-11a.5.5 0 0 1 .276-.447L.5 2.5l-.224-.447.002-.001.004-.002.013-.006a5.017 5.017 0 0 1 .22-.103 12.958 12.958 0 0 1 2.7-.869zM1 2.82v9.908c.846-.343 1.944-.672 3.074-.788 1.143-.118 2.387-.023 3.426.56V2.718c-1.063-.929-2.631-.956-4.09-.664A11.958 11.958 0 0 0 1 2.82z"
                />
                <path
                  fill-rule="evenodd"
                  d="M12.786 1.072C11.188.752 9.084.71 7.646 2.146A.5.5 0 0 0 7.5 2.5v11a.5.5 0 0 0 .854.354c.843-.844 2.115-1.059 3.47-.92 1.344.14 2.66.617 3.452 1.013A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.276-.447L15.5 2.5l.224-.447-.002-.001-.004-.002-.013-.006-.047-.023a12.582 12.582 0 0 0-.799-.34 12.96 12.96 0 0 0-2.073-.609zM15 2.82v9.908c-.846-.343-1.944-.672-3.074-.788-1.143-.118-2.387-.023-3.426.56V2.718c1.063-.929 2.631-.956 4.09-.664A11.956 11.956 0 0 1 15 2.82z"
                />
              </svg>
            </span>
            <input
              type="text"
              v-model.trim="searchText"
              class="form-control border-secondary"
              placeholder="Search a book..."
              aria-label="The book name"
              aria-describedby="addon-wrapping"
            />
          </div>
        </div>
        <div
          class="col-md-12 col-lg-6 mb-2 mt-lg-2 d-flex justify-content-md-start justify-content-lg-end"
        >
          <div class="btn-group" role="group" aria-label="Control buttons">
            <button type="button" class="btn btn-outline-secondary" @click="sortByPrice()">
              Price
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-sort-up"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 13a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-1 0v10a.5.5 0 0 0 .5.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M5.354 4.854a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L3 3.207l1.646 1.647a.5.5 0 0 0 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 9a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
            <button type="button" class="btn btn-outline-secondary" @click="sortByTitle()">
              Title
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-sort-down"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 2a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-1 0v-10A.5.5 0 0 1 3 2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M5.354 10.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L3 11.793l1.646-1.647a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 9a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
            <button type="button" class="btn btn-outline-secondary" @click="turnOffFilters()">
              Turn off filters
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container-md mb-4">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4">
        <div class="col" v-for="book in showBooks" :key="book.id">
          <div class="card h-100 text-center">
            <router-link
              class="text-decoration-none"
              :to="{ name: 'BookDetails', params: { id: book.id } }"
            >
              <img class="card-img-top" :src="book.img" :alt="book.title" />
              <div class="card-body">
                <h3 class="card-title">{{ book.title }}</h3>
              </div>
            </router-link>
            <div class="card-footer">
              <small class="text-muted">{{ book.price }} руб.</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template v-if="!hasBooks">
      <div class="d-flex justify-content-center">
        <div class="spinner-border text-success" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </template>
    <template v-else>
      <Pagination
        :current="currentPage"
        :total="totalBooks"
        :perPage="perPage"
        @pageChanged="fetchBooks"
      />
    </template>
  </section>
</template>

<script>
import { fetchBooks } from '../services/book-store'
import { compareNumbers, compareStrings } from '../utils/utils'
import Pagination from './Pagination'

export default {
  name: 'Store',
  data() {
    return {
      originalBooks: [],
      books: [],
      searchText: '',
      currentPage: 1,
      perPage: 4,
      sorted: {
        price: false,
        title: false,
      },
    }
  },
  computed: {
    showBooks() {
      return this.searchText === ''
        ? this.fetchBooks(this.currentPage)
        : this.books.filter(book => book.title.match(this.searchText))
    },
    totalBooks() {
      return this.books && this.books.length
    },
    hasBooks() {
      return this.showBooks && this.showBooks.length >= 1
    },
  },
  async created() {
    this.books = await fetchBooks()
    this.originalBooks = [...this.books]
  },
  methods: {
    fetchBooks(page) {
      const left = (page - 1) * this.perPage,
        right = left + this.perPage
      this.currentPage = page
      return this.books.slice(left, right)
    },
    sortByPrice() {
      this.sorted.price = !this.sorted.price
      return this.books.sort((book1, book2) =>
        compareNumbers(book1.price, book2.price, this.sorted.price),
      )
    },
    sortByTitle() {
      this.sorted.title = !this.sorted.title
      return this.books.sort((book1, book2) =>
        compareStrings(book1.title, book2.title, this.sorted.title),
      )
    },
    turnOffFilters() {
      this.sorted.price = false
      this.sorted.title = false
      this.books = [...this.originalBooks]
    },
  },
  components: {
    Pagination,
  },
}
</script>
