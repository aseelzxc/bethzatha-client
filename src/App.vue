<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SideNavigation from './components/SideNavigation.vue'
</script>

<template>
<SideNavigation/>
 <div class="wrap-all-the-things">
    <RouterView/>    
  </div>
</template>

<style scoped>
</style>
