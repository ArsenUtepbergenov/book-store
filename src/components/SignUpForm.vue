// The sign up form component

<template>
  <div class="container my-3">
    <form class="form" @submit.prevent="register">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
          </svg>
        </span>
        <input
          type="email"
          class="form-control"
          placeholder="Email..."
          aria-label="Email"
          aria-describedby="basic-addon1"
          v-model="email"
          required />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon2">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-key-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
        </span>
        <input
          type="password"
          class="form-control"
          placeholder="Password..."
          aria-label="Password"
          aria-describedby="basic-addon2"
          v-model="password"
          required />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon3">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-key" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
            <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
          </svg>
        </span>
        <input
          type="password"
          class="form-control"
          placeholder="Repeat password..."
          aria-label="Password1"
          aria-describedby="basic-addon3"
          v-model="confirmedPassword"
          required />
      </div>
      <button type="submit" class="btn btn-success btn-block mb-3" :disabled="!isDisabled">Sign Up</button>
      <template v-if="status.message">
        <StatusMessage
          :status="status.status"
          :message="status.message" />
      </template>
    </form>
  </div>
</template>

<script>
import { register } from '../api/auth-api'
import StatusMessage from './StatusMessage'

export default {
  name: 'SignUpForm',
  data() {
    return {
      email: null,
      password: null,
      confirmedPassword: null,
      status: {}
    }
  },
  computed: {
    isEqualPasswords () {
      return this.password === this.confirmedPassword
    },
    isDisabled () {
      return this.email && this.password && this.confirmedPassword && this.isEqualPasswords
    }
  },
  methods: {
    async register () {
      this.status = await register(this.email, this.password)
    }
  },
  components: {
    StatusMessage
  }
}
</script>
