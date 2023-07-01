<template>
  <v-container class="app-bar-container">
    <v-row v-if="$vuetify.display.smAndUp" justify="space-between">
      <v-col cols="11">
        <v-btn @click="navigateToPage('/')" variant="text">Home</v-btn>
        <v-btn @click="navigateToPage('/Experiences')" variant="text">Experiences</v-btn>
        <v-btn @click="navigateToPage('/InMaintenance')" variant="text">Projects</v-btn>
        <v-btn @click="navigateToPage('/InMaintenance')" variant="text">LeetCode</v-btn>
      </v-col>
      <!-- <v-col cols="1">
          <v-btn icon="mdi-theme-light-dark" variant="outlined" size="small" class="theme-button"></v-btn>
        </v-col> -->
    </v-row>
    <v-row v-else>
      <v-col>
        <v-btn @click.stop="drawer = !drawer">=</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.app-bar-container {
  color: rgb(174, 173, 173);
  display: inline-block;
  justify-content: center;
  vertical-align: middle;
  /* width: 800px; */
  margin-top: 3%;
}
</style>

<script setup>
const navigateToPage = (url) => {
  return navigateTo(url)
};
</script>