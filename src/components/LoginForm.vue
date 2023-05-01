<template>
  <div class="container my-3">
    <form class="form" @submit.prevent="handleLogin">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-envelope-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
            />
          </svg>
        </span>
        <input
          type="email"
          class="form-control"
          placeholder="Email..."
          aria-label="Email"
          aria-describedby="basic-addon1"
          v-model="data.email"
          required
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon2">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-key-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
            />
          </svg>
        </span>
        <input
          type="password"
          class="form-control"
          placeholder="Password..."
          aria-label="Password"
          aria-describedby="basic-addon2"
          autocomplete="on"
          v-model="data.password"
          required
        />
      </div>
      <button type="submit" class="btn btn-success btn-block mb-3" :disabled="!isDisabled">
        Login
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { login } from '../api/auth-api'

const data = reactive({
  email: null,
  password: null,
  status: {},
})

const isDisabled = computed(() => data.email && data.password)

async function handleLogin() {
  data.status = await login(data.email, data.password)
  emit('change')
}
</script>
