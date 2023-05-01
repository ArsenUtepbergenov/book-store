<template>
  <nav aria-label="Page navigation">
    <div class="container-md">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: !hasPrev() }">
          <a class="page-link" tabindex="-1" aria-disabled="true" @click="changePage(prevPage)">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-arrow-left-short"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.854 4.646a.5.5 0 0 1 0 .708L5.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"
              />
              <path
                fill-rule="evenodd"
                d="M4.5 8a.5.5 0 0 1 .5-.5h6.5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </a>
        </li>
        <li class="page-item active" v-if="hasFirst()">
          <a class="page-link" @click="changePage(1)">1</a>
        </li>
        <li class="page-item disabled" v-if="hasFirst()">
          <a class="page-link">...</a>
        </li>
        <li
          class="page-item"
          :class="{ active: current === page }"
          v-for="page in pages"
          :key="page"
        >
          <a class="page-link" @click="changePage(page)">{{ page }}</a>
        </li>
        <li class="page-item disabled" v-if="hasLast()">
          <a class="page-link">...</a>
        </li>
        <li class="page-item" v-if="hasLast()">
          <a class="page-link" @click="changePage(totalPages)">{{ totalPages }}</a>
        </li>
        <li class="page-item" :class="{ disabled: !hasNext() }">
          <a class="page-link" @click="changePage(nextPage)">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-arrow-right-short"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.793 8 8.146 5.354a.5.5 0 0 1 0-.708z"
              />
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 2,
    },
    pageRange: {
      type: Number,
      default: 2,
    },
  },
  computed: {
    pages() {
      let pages = []
      for (let i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i)
      }
      return pages
    },
    rangeStart() {
      const start = this.current - this.pageRange
      return start > 0 ? start : 1
    },
    rangeEnd() {
      const end = this.current + this.pageRange
      return end < this.totalPages ? end : this.totalPages
    },
    totalPages() {
      return Math.ceil(this.total / this.perPage)
    },
    nextPage() {
      return this.current + 1
    },
    prevPage() {
      return this.current - 1
    },
  },
  methods: {
    hasFirst() {
      return this.rangeStart !== 1
    },
    hasLast() {
      return this.rangeEnd < this.totalPages
    },
    hasPrev() {
      return this.current > 1
    },
    hasNext() {
      return this.current < this.totalPages
    },
    changePage(page) {
      this.$emit('pageChanged', page)
    },
  },
}
</script>
