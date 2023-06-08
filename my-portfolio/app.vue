<template>
  <v-app app class="app body">
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
              <div style="color: white; margin-left: -5px;" class="text-h3 font-weight-bold">Who am I?</div>
            </v-card-title>
            <v-card-text>
              <div style="color: white; margin-left: -3px; height: 50px;" class="text-h5 font-weight-bold word-generating">{{ title }}</div>
            </v-card-text>
            <!-- <v-card-text>
              <div style="color: white;" class="text-h6 font-weight-bold">This is text</div>
            </v-card-text> -->
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col ><MyName></MyName></v-col>
      </v-row>
    </v-container>

    

    <v-container class="project-list-container">
      <v-row>
        <v-col>
          <div class="text-h3 font-weight-bold" style="color: white;">Projects</div>
        </v-col>
      </v-row>
      <v-row v-for="project in featureProjects">
        <v-col>
            <v-card variant="outlined" class="project-card">
                <v-card-title style="color: white" class="text-h4 font-weight-bold">{{ project.title }}</v-card-title>
                <v-card-subtitle style="color: white" class="text-h6 font-weight-bold">{{ project.description }}</v-card-subtitle>
            </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
  
</template>
<style>
  .app {
    background-color: black;
    overflow-y: auto; /* important! unless the background color will cut off when scrolling down. */
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
    background: transparent;
  }
  .theme-button {
    border-radius: 30%;
  }
  .word-generating {
    margin: auto;
    color: white;
    font: 700 normal 2.5em 'tahoma';
    text-shadow: 5px 2px #222324, 2px 4px #222324, 3px 5px #222324;
  }
  .project-list-container {
    background-color: black;
    /* display: flex; */
    position: relative;
    top: 600px;
    display: inline-block;
    justify-content: center;
    vertical-align: middle;
    width: 850px;
  }
  .project-card {
    border: 3px solid white;
  }
  .project-card:hover {
    /* border: 3px solid; */
    background: linear-gradient(to right, #606C5D, #75cd01);
    /* animation: background-color-transition 3s infinite; */
  }
  @keyframes background-color-transition {
    0% { background: linear-gradient(to right, red, blue); }
    40% { background: linear-gradient(to right, blue, green); }
    70% { background: linear-gradient(to right, green, red); }
    100% { background: linear-gradient(to right, red, blue); }
  }
  
</style>

<script setup>

  // import Name from '@/components/Name.vue';
  import Impossible from '@/components/Impossible.vue'
  import MyName from '@/components/MyName.vue'
  import { featureProjects } from '@/res/ProjectList'
  import { animate, glide, spring } from "motion"
  import { ref, onMounted } from 'vue';


  /**
   * Start: text typing animation
   */
  const words = [
    '📟 Software Developer',
    '🛑 Student at Boston University',
    '🎬 Movie Buffs',
    '🎸 R&B Junkie',
    '🫥 Realistic Idealist',
    'Sports Enthusiast 🏂 🏀 🏓 🏸 ⚽️ 🏋🏼',
  ];

  let title = ref('');
  let i = 0;
  let offset = 0;
  let len = words.length;
  let forwards = true;
  let skipCount = 0;
  const skipDelay = 80;
  const speed = 25;

  const wordflick = () => {
    setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          skipCount++;
          if (skipCount === skipDelay) {
            forwards = false;
            skipCount = 0;
          }
        }
      } else {
        if (offset === 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      title.value = words[i].substr(0, offset);
      if (skipCount === 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
    }, speed);
  };

  onMounted(() => {
    wordflick();
  });
  /**
   * End: text typing animation
   */
  
</script>

