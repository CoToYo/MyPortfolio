<template>
  <v-app class="app-body">

    <v-main>
      <v-container class="content-container">
        <AppBar></AppBar>
        <slot />
      </v-container>
    </v-main>

  </v-app>
</template>
<style lang="scss">
.app-body {
  background-color: black;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
}

.content-container {
  width: 800px;
}

.theme-button {
  border-radius: 30%;
}
</style>

<script setup>
import AppBar from '@/components/AppBar.vue'
</script>
  
  