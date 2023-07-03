<template>
  <v-app class="app-body">

    <v-main>
      <v-container class="content-container">
        <AppBar></AppBar>
        <slot />
        <v-footer class="bg-black">
          <v-row justify="center" no-gutters>
            <v-btn v-for="(link, title) in links" :key="title" color="white" variant="text" class="mx-2" rounded="xl"
              @click="navigateToNewWindow(link)">
              {{ title }}
            </v-btn>
            <v-col class="text-center mt-4" cols="12">
              {{ new Date().getFullYear() }} — <strong>Tingyuan Cui</strong>
            </v-col>
          </v-row>
        </v-footer>
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
import { urls } from '@/res/URL.js'
const links = {
  'Home': '/',
  'Blog': urls.blog,
  'LinkedIn': urls.linkedin,
  'Github': urls.github,
  'Contact Me': urls.email,
}
const navigateToNewWindow = (url) => {
  window.open(url);
};

</script>
  
  