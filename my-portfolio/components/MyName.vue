<template>
  <!-- <a href="https://www.linkedin.com/in/tingyuan-cui-b02155204/" target="_blank">
    <div class="name-div">{{ title }}</div>
  </a> -->
  <div class="name-div">{{ title }}</div>
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

<style scoped>
.name-div {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.79);
  text-shadow: 0 20px 25px #2e2e31, 0 40px 60px #2e2e31;
  font-size: 80px;
  font-weight: bold;
  /* font-family: "Luckiest Guy", cursive; */
  text-decoration: none;
  letter-spacing: -3px;
  /* height: 100px; */
}
</style>