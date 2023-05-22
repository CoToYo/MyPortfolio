<template>
  <v-app app class="app">
    <v-container class="app-container">
      <v-container class="app-bar-container">
        <v-row v-if="$vuetify.display.smAndUp" justify="space-between">
          <v-col cols="10">
            <v-btn variant="text">Home</v-btn>
            <v-btn variant="text">Projects</v-btn>
            <v-btn variant="text">DashBoard</v-btn>
            <v-btn variant="text">LeetCode</v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn icon="mdi-theme-light-dark" variant="outlined" size="small" class="theme-button"></v-btn>
          </v-col>
        </v-row>

        <v-row v-else>
          <v-col>
            <v-btn @click.stop="drawer = !drawer">=</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-container>


    <!-- Mobile version with dropdown menu -->
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
        title="John Leider"
      ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        </v-list>
    </v-navigation-drawer>
  </v-app>
  
</template>
<style>
  .app {
    background-color: black;
    color: rgb(174, 173, 173);
  }
  .app-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .app-bar-container {
    /* width: 800px; */
    display: flex;
    align-items: center;
  }
  .theme-button {
    border-radius: 30%;
  }
</style>

<script>
  // import Name from '@/components/Name.vue';
  
  export default {
    components: {
      
    },
    data() {
      return {
        drawer: null,
      }
    }
    
  };
</script>
