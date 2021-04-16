<template>
  <div class="nav">
  
    <router-link :to="{name: 'main-page'}">
      Main Page
    </router-link>
 
    <router-link :to="{name: 'edit-page'}">
      Edit Page
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'TheNav'
}
</script>