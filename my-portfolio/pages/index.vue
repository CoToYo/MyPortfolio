<template>
  <v-container class="main-list-container">
    <v-row>
      <v-col cols="9">
        <v-card :color="dynamic" color="transparent" variant="tonal">
          <v-card-title>
            <div style="color: white; margin-left: -5px;" class="text-h3 font-weight-bold">Who am I?</div>
          </v-card-title>
          <v-card-text>
            <div style="color: white; margin-left: -3px; height: 50px;" class="text-h5 font-weight-bold word-generating">
              {{ title }}</div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-avatar :image="MyAvatar" size="160" class="avatar"></v-avatar>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="9"></v-col>
      <v-col cols="1"><v-icon @click="navigateToNewWindow(urls.resume)" icon="mdi mdi-file-account" color="white"
          size="30"></v-icon></v-col>
      <v-col cols="1"><v-icon @click="navigateToNewWindow(urls.linkedin)" icon="mdi mdi-linkedin" color="white"
          size="30"></v-icon></v-col>
      <v-col cols="1"><v-icon @click="navigateToNewWindow(urls.github)" icon="mdi mdi-github" color="white"
          size="30"></v-icon></v-col>
    </v-row>
    <v-row>
      <v-col class="MyName-container">
        <MyName></MyName>
      </v-col>
    </v-row>
  </v-container>

  <v-container class="project-list-container">
    <v-row>
      <v-col>
        <div class="text-h4 font-weight-bold" style="color: white;">Featured Projects</div>
      </v-col>
    </v-row>
    <v-row v-for="project in featureProjects">
      <v-col>
        <v-card variant="outlined" class="project-card">
          <v-card-title style="color: white" class="text-h5 font-weight-bold">{{ project.title }}</v-card-title>
          <v-card-subtitle style="color: white" class="text-h7">{{ project.description }}</v-card-subtitle>
          <v-card-text>
            <v-chip v-for="tech in project.techs" style="color: white; margin-right: 0.5%;" label size="small">{{ tech
            }}</v-chip>
            <v-icon @click="navigateToNewWindow(project.github)" icon="mdi mdi-github" size="x-large"
              style="color: white; position: absolute; right: 2%;"></v-icon>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.main-list-container {
  /* display: inline-block;
    justify-content: center;
    vertical-align: middle; */
  /* width: 800px; */
  background: transparent;
}

.word-generating {
  margin: auto;
  color: white;
  font: 700 normal 2.5em 'tahoma';
  text-shadow: 5px 2px #222324, 2px 4px #222324, 3px 5px #222324;
}

.MyName-container {
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar {
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;
  border-bottom-left-radius: 25%;
  border-bottom-right-radius: 5%;
  border: solid 2px;
  border-color: whitesmoke;
}

.project-list-container {
  background-color: black;
  margin-bottom: 2%;
}

.project-card {
  border: 2px dashed white;
  /* transition: background-color 1s ease; */
  transition: border-color 1.5s, background-color 1s ease;
}

.project-card:hover {
  /* border: 3px solid; */
  /* background: linear-gradient(to right, #606C5D, #75cd01); */
  background-color: #616F39;
  border-color: #616F39;
  /* animation: background-color-transition 3s infinite; */
}
</style>

<script setup>

// import Name from '@/components/Name.vue';
import MyAvatar from '@/assets/img/avatar.jpg'
import Impossible from '@/components/Impossible.vue'
import MyName from '@/components/MyName.vue'
import { featureProjects } from '@/res/ProjectList'
import { urls } from '@/res/URL.js'
import { ref, onMounted } from 'vue';

// set page layout
definePageMeta({
  layout: "default"
})

const navigateToNewWindow = (url) => {
  window.open(url);
};
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

