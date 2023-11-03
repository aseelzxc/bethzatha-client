<template>
    <aside class="bg-white shadow-md w-64 h-full fixed top-0 left-0">
      <ul class="flex flex-col items-center">
        <li class="my-2">
          <a href="#" v-on:click="() => navigateToDashboard()">{{ ('Dashboard') }}</a>
        </li>
        <li class="my-2">
          <a href="#" v-on:click="() => navigateToContent()">{{ ('Content') }}</a>
        </li>
        <li class="my-2">
          <a href="#" v-on:click="() => navigateToAnalytics()">{{ ('Analytics') }}</a>
        </li>
        <li class="my-2">
          <a href="#" v-on:click="() => navigateToSettings()">{{ ('Settings') }}</a>
        </li>
      </ul>
    </aside>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'SideNavigation',
    methods: {
      navigateToDashboard() {
        // Navigate to the dashboard page
      },
      navigateToContent() {
        // Navigate to the content page
      },
      navigateToAnalytics() {
        // Navigate to the analytics page
      },
      navigateToSettings() {
        // Navigate to the settings page
      },
    },
  });
  </script>

  <style>
    .sidenav {
    position: fixed;
    top: 0;
    left: 0;
    width: 64px;
    height: 100%;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.12);
    }

    .sidenav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    }

    .sidenav a {
    display: block;
    padding: 16px;
    color: #333;
    text-decoration: none;
    }

    .sidenav a:hover {
    background-color: #f3f4f6;
    }
</style>
  