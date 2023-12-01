<template>
  <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
<Header/>
 <div class="container">
    <RouterView/>    
  </div>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>
<style scoped>
</style>
