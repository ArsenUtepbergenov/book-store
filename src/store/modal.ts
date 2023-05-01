import { defineStore } from 'pinia'

export const useModalStore = defineStore('modalStore', {
  state: () => ({
    isAuthVisible: false,
  }),
  actions: {
    setAuth(payload: boolean) {
      this.isAuthVisible = payload
    },
  },
  getters: {
    isAuthVisible: state => state.isAuthVisible,
  },
})
