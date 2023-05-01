<template>
  <div
    class="alert"
    :class="[props.status === 'error' ? 'alert-danger' : 'alert-success']"
    role="alert"
  >
    {{ props.message }}
  </div>
</template>

<script setup>
defineProps({
  status: String,
})
</script>
