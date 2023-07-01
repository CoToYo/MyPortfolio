<template>
    <v-container class="not-found-container">
        <div>
            <h3 style="color: white;" class="text-h3 font-weight-bold">Sorry, this page is in maintenance...</h3>
        </div>
    </v-container>
</template>
  
<style lang="scss">
.not-found-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
</style>
      
<script setup>
definePageMeta({
    layout: "default"
})
</script>
    
    