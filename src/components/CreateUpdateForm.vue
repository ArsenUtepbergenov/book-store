<template>
  <div class="container my-3">
    <form class="form" @submit.prevent="updateBook">
      <div class="row g-3">
        <div class="form-control form-content">
          <div class="input-group mb-3">
            <span class="input-group-text" id="title-addon">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-pencil"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
                />
                <path
                  fill-rule="evenodd"
                  d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"
                />
              </svg>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="New title..."
              aria-label="New title"
              aria-describedby="title-addon"
              v-model="updatedBook.title"
              required
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="author-addon">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-person-circle"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"
                />
                <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path
                  fill-rule="evenodd"
                  d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                />
              </svg>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="New author..."
              aria-label="New author"
              aria-describedby="author-addon"
              v-model="updatedBook.author"
              required
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="price-addon">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-cash"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 4H1v8h14V4zM1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1z"
                />
                <path
                  d="M13 4a2 2 0 0 0 2 2V4h-2zM3 4a2 2 0 0 1-2 2V4h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 12a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              pattern="^[0-9]+$"
              class="form-control"
              placeholder="New price..."
              aria-label="New price"
              aria-describedby="price-addon"
              v-model.number="updatedBook.price"
              required
            />
          </div>
          <div class="input-group mb-3">
            <progress class="form-progress" value="0" max="100" ref="progressImg">0%</progress>
            <input style="display: none" type="file" @change="selectedImg" ref="inputImg" />
          </div>
          <div class="input-group mb-3 align-items-center text">
            <div class="font-weight-bold">
              Download file:&nbsp;
              <div class="badge bg-dark text-wrap">{{ selectedImgName }}</div>
            </div>
          </div>
          <div class="input-group mb-3 align-items-center text">
            <img
              v-if="imgUrl"
              :src="imgUrl"
              class="rounded img-thumbnail"
              style="max-height: 300px"
              :alt="imgFileName"
            />
          </div>
          <div class="input-group mb-3 align-items-center">
            <div class="btn-group ml-auto" role="group" aria-label="Control buttons">
              <button
                type="button"
                class="btn btn-outline-success form-button"
                @click="$refs.inputImg.click()"
              >
                Download
              </button>
              <button
                type="button"
                class="btn btn-dark form-button"
                @click="uploadUpdatedImg()"
                :disabled="isUpdloadDisabled"
              >
                Updload
              </button>
            </div>
          </div>
          <div class="input-group mb-3">
            <textarea
              class="form-control form-textarea col-12"
              rows="4"
              v-model="updatedBook.description"
              placeholder="Description..."
              style="resize: none"
            ></textarea>
          </div>
          <div class="input-group mb-3">
            <button type="submit" class="btn btn-block btn-success form-button text-capitalize">
              {{ textSubmitButton }}
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import mixinUploadImg from '../mixins/uploadImg'
import { compareObjects } from '../utils/utils'

export default {
  name: 'Form',
  data() {
    return {
      imgFile: null,
      imgUrl: null,
      imgFileName: '',
      updatedBook: { ...this.book },
    }
  },
  props: {
    book: {
      type: Object,
      default: () => {},
    },
    textSubmitButton: {
      type: String,
      required: true,
    },
  },
  watch: {
    imgUrl(newUrl) {
      this.updatedBook.img = newUrl
    },
  },
  computed: {
    isUpdloadDisabled() {
      return !this.imgFile
    },
    selectedImgName() {
      return this.imgFileName
    },
  },
  methods: {
    uploadUpdatedImg() {
      this.uploadImg(this)
    },
    updateBook() {
      if (compareObjects(this.updatedBook, this.book || {})) return
      this.$emit('submit', this.updatedBook)
    },
    selectedImg(event) {
      this.imgFile = event.target.files[0]
      this.imgFileName = this.updatedBook.imgFileName = this.imgFile.name
    },
  },
  mixins: [mixinUploadImg],
}
</script>
