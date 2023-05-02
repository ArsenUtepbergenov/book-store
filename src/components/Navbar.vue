<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <Modal v-if="showLoginModal" @close="toggleLoginModal">
      <template #body>
        <LoginForm @change="onAuthStateChanged" />
      </template>
    </Modal>
    <Modal v-if="showSignUpModal" @close="toggleSignUpModal">
      <template #body>
        <SignUpForm />
      </template>
    </Modal>
    <div class="container-md">
      <router-link class="navbar-brand d-flex align-items-center" to="/">
        <img
          src="../assets/brand.png"
          width="50"
          height="50"
          class="d-inline-block align-top"
          alt="brand"
          loading="lazy"
        />
        Book Store
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/">
              <svg
                width="1.4em"
                height="1.4em"
                viewBox="0 0 16 16"
                class="bi bi-house-door"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                />
              </svg>
              Home
            </router-link>
          </li>
          <template v-if="isLogged">
            <li class="nav-item">
              <router-link class="nav-link" to="/create-book">
                <svg
                  width="1.4em"
                  height="1.4em"
                  viewBox="0 0 16 16"
                  class="bi bi-person-badge-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z"
                  />
                </svg>
                Admin
              </router-link>
            </li>
          </template>
        </ul>
        <ul class="navbar-nav">
          <template v-if="!isLogged">
            <li class="nav-item">
              <button class="nav-link navbar-login-button" type="button" @click="toggleLoginModal">
                <svg
                  width="1.4em"
                  height="1.4em"
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
                Login
              </button>
            </li>
            <li class="nav-item">
              <button
                class="nav-link navbar-sign-up-button"
                type="button"
                @click="toggleSignUpModal"
              >
                <svg
                  width="1.4em"
                  height="1.4em"
                  viewBox="0 0 16 16"
                  class="bi bi-person-plus-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M13 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0v-2z"
                  />
                </svg>
                Sign Up
              </button>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <button class="nav-link navbar-login-button" type="button" @click="logout">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-arrow-bar-left"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.854 4.646a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L3.207 8l2.647-2.646a.5.5 0 0 0 0-.708z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M10 8a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0 0 1h6.5A.5.5 0 0 0 10 8zm2.5 6a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 1 0v11a.5.5 0 0 1-.5.5z"
                  />
                </svg>
                Logout
              </button>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Modal from '../components/Modal'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'
import { logout } from '../services/auth'

export default {
  name: 'Navbar',
  data() {
    return {
      showLoginModal: false,
      showSignUpModal: false,
      isLogged: false,
    }
  },
  methods: {
    toggleLoginModal() {
      this.showLoginModal = !this.showLoginModal
    },
    toggleSignUpModal() {
      this.showSignUpModal = !this.showSignUpModal
    },
    onAuthStateChanged() {
      this.toggleLoginModal()
      this.isLogged = true
    },
    async logout() {
      this.status = await logout()
      if (this.status.status === 'success') {
        this.isLogged = false
      }
    },
  },
  components: {
    Modal,
    LoginForm,
    SignUpForm,
  },
}
</script>
