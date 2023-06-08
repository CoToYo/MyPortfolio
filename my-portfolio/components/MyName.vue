<template>
    <a href="https://www.linkedin.com/in/tingyuan-cui-b02155204/" target="_blank"><div class="name-div">{{ title }}</div></a>
</template>

<script setup>
import { ref, onMounted } from 'vue';

/**
 * Start: text typing animation
 */
const words = [
  'Tingyuan Cui',
  'Tingyuan Choi',
  'Leon!',
  '崔 庭 源',
  '최 정 원',
];

let title = ref('');
let i = 0;
let offset = 0;
let len = words.length;
let forwards = true;
let skipCount = 0;
const skipDelay = 80;
const speed = 40;

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

<style lang="scss" scoped>
    .name-div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 550px;
    }

    @keyframes tipsy {
    0% {
        transform: translateX(-50%) translateY(-50%) rotate(0deg);
    }
    100% {
        transform: translateX(-50%) translateY(-50%) rotate(360deg);
    }
    }

    body {
    font-family: helvetica, arial, sans-serif;
    background-color: #2e2e31;
    }

    a {
    color: #fff1f1;
    text-shadow: 0 20px 25px #2e2e31, 0 40px 60px #2e2e31;
    font-size: 80px;
    font-weight: bold;
    text-decoration: none;
    letter-spacing: -3px;
    margin: 0;
    position: absolute;
    
    top: 500px;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    }

    a:before,
    a:after {
    content: '';
    padding: .9em .4em;
    position: absolute;
    left: 50%;
    width: 100%;
    top: 50%;
    display: block;
    border: 15px solid red;
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
    animation: 10s infinite alternate ease-in-out tipsy;
    }

    a:before {
    border-color: #e9f900#c9f900 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
    
    z-index: -1;
    }

    a:after {
    border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #a3f600 #89f300;
    
    box-shadow: 25px 25px 25px rgba(46, 46, 49, .8);
    }
</style>