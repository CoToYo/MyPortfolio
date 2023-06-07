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
        <MyName></MyName>
        <v-row>
          <v-col>
            <v-card :color="dynamic" color="transparent" variant="tonal">
              <v-card-title>
                <div style="color: white; margin-left: -5px;" class="text-h2 font-weight-bold">Who am I?</div>
              </v-card-title>
              <v-card-text>
                <div style="color: white; margin-left: -3px;" class="text-h4 font-weight-bold word-generating">{{ subtitle }}</div>
              </v-card-text>
              <!-- <v-card-text>
                <div style="color: white;" class="text-h6 font-weight-bold">This is text</div>
              </v-card-text> -->
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <div class="box"></div>

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
  .box {
    /* margin: 100px; */
    /* width: 200px;
    height: 200px; */
    background: orange;
    border-radius: 5px;
  }
  .animate-charcter{
    text-transform: uppercase;
    background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 5s linear infinite;
  display: inline-block;
      font-size: 120px;
  }
  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
  .word-generating {
    margin: auto;
    color: white;
    font: 700 normal 2.5em 'tahoma';
    text-shadow: 5px 2px #222324, 2px 4px #222324, 3px 5px #222324;
  }
</style>

<script setup>

  // import Name from '@/components/Name.vue';
  import Impossible from '@/components/Impossible.vue'
  import MyName from '@/components/MyName.vue'
  import { animate, glide, spring } from "motion"
  import { ref, onMounted } from 'vue';

  /**
   * Start: text typing animation
   */
  const words = [
    'Software Developer',
    'Student at Boston University',
    'Movie Buffs',
    'R&B Junkie',
    'Realistic Idealist',
  ];

  let subtitle = ref('');
  let i = 0;
  let offset = 0;
  let len = words.length;
  let forwards = true;
  let skipCount = 0;
  const skipDelay = 15;
  const speed = 70;

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
      subtitle.value = words[i].substr(0, offset);
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

