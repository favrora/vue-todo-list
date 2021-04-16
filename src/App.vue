<template>
  <div id="app">
    <TheNav />

    <div id="box">
      <router-view />
    </div>

  </div>
</template>

<script>
import TheNav from './components/TheNav'

export default {
  name: 'App',
  components: { 
    TheNav
  }
}
</script>

// import all scss
<style lang="scss">
@import "assets/sass/variables";
@import "assets/sass/app";
@import "assets/sass/main-page";
@import "assets/sass/edit-page";
@import "assets/sass/modal";
</style>