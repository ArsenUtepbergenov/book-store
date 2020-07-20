// The status component

<template functional>
  <div class="alert" :class="[props.status === 'error' ? 'alert-danger' : 'alert-success']" role="alert">
    {{props.message}}
  </div>
</template>

<script>
export default {
  name: 'StatusMessage'
}
</script>
