<template>
  <v-app app class="app">
      <v-container class="app-bar-container">
        <v-row v-if="$vuetify.display.smAndUp" justify="space-between">
          <v-col cols="11">
            <v-btn variant="text">Home</v-btn>
            <v-btn variant="text">Projects</v-btn>
            <v-btn variant="text">DashBoard</v-btn>
            <v-btn variant="text">LeetCode</v-btn>
          </v-col>
          <v-col cols="1">
            <v-btn icon="mdi-theme-light-dark" variant="outlined" size="small" class="theme-button"></v-btn>
          </v-col>
        </v-row>

        <v-row v-else>
          <v-col>
            <v-btn @click.stop="drawer = !drawer">=</v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="main-list-container">
        <v-row>
          <v-col>
            <v-card :color="dynamic" color="transparent" variant="tonal">
              <v-card-title>
                <div style="color: #FF6F00; margin-left: -5px;" class="text-h2 font-weight-bold">Tingyuan Cui</div>
              </v-card-title>
              <v-card-subtitle>
                <div style="color: white; margin-left: -3px;" class="text-h4 font-weight-bold">This is sub-title</div>
              </v-card-subtitle>
              <v-card-text>
                <div style="color: white;" class="text-h6 font-weight-bold">This is text</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
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
    
  }
  .app-bar-container {
    color: rgb(174, 173, 173);
    display: inline-block;
    justify-content: center;
    vertical-align: middle;
    width: 850px;
  }
  .main-list-container  {
    display: inline-block;
    justify-content: center;
    vertical-align: middle;
    width: 850px;
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
