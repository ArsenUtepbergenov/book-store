// The main app component

<template>
  <div id="app">
    <div class="navbar-wrapper">
      <Navbar />
    </div>
    <main>
      <router-view/>
    </main>
    <footer class="d-flex justify-content-center align-items-center bg-dark text-white footer">
      &copy;&nbsp;2020, all rights reserved.
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>