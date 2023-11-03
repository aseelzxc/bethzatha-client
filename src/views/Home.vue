

<template>
  <SideNavigation/>
  <section class="main-content">
    <div class="flex flex-col min-h-screen">
    <header class="w-full p-4 flex justify-between items-center">
      <img src="../assets/icons/hamburger-menu.svg" alt="" class="h-8">
          <div class="pt-2 mx-auto text-gray-600 w-full max-w-screen-xl">
          <div class="relative mb-2">
            <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
              type="search" name="search" placeholder="Search here...">
            <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
              <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
                width="512px" height="512px">
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
        </div>
      <img src="../assets/images/default.jpg" alt="" class="rounded-full h-8">
    </header>
  
    <main class="flex flex-col flex-1">
      <div class="container flex justify-between items-center h-20">
        <h2 class="text-2xl font-bold">Dashboard</h2>
        <ul class="flex items-center">
          <li class="mr-4"><a href="#">Content</a></li>
          <li class="mr-4"><a href="#">Analytics</a></li>
          <li class="mr-4"><a href="#">Likes</a></li>
          <li class="mr-4"><a href="#">Comments</a></li>
          <li><a href="#">Share</a></li>
        </ul>
      </div>
  
      <div class="container flex flex-col flex-1">
        <div class="grid grid-cols-3 gap-4">
          <div class="bg-white shadow-md rounded-md p-4">
            <h3 class="text-xl font-bold">Total Likes</h3>
            <h2 class="text-3xl font-bold">50,120</h2>
          </div>
          <div class="bg-white shadow-md rounded-md p-4">
            <h3 class="text-xl font-bold">Comments</h3>
            <h2 class="text-3xl font-bold">25,120</h2>
          </div>
          <div class="bg-white shadow-md rounded-md p-4">
            <h3 class="text-xl font-bold">Total Share</h3>
            <h2 class="text-3xl font-bold">10,320</h2>
          </div>
        </div>
  
        <div class="mt-4">
          <h3 class="text-xl font-bold">Recent Activity</h3>
          <table class="table-auto w-full">
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Email</th>
                <th class="text-left">Joined</th>
                <th class="text-left">Type</th>
                <th class="text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Prem Shahi</td>
                <td>premshahi@gmail.com</td>
                <td>2022-02-12</td>
                <td>Member</td>
                <td>Liked</td>
              </tr>
              <tr>
                <td>Deepa Chand</td>
                <td>deepachand@gmail.com</td>
                <td>2022-02-12</td>
                <td>Member</td>
                <td>New</td>
              </tr>
              <tr>
                <td>Prakash shahi</td>
                <td>prakashshahi@gmail.com</td>
                <td>2022-02-13</td>
                <td>Member</td>
                <td>Shared</td>
              </tr>
              <tr>
                <td>Manisha Chand</td>
                <td>manishachan@gmail.com</td>
                <td>2022-02-13</td>
                <td>Member</td>
                <td>Liked</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  
    <footer class="bg-gray-200 shadow-md">
      <div class="container flex justify-center items-center h-20">
        <p class="text-gray-500 text-sm">Copyright &copy; 2023 Codinglab</p>
      </div>
    </footer>
    </div>
  </section>
</template>
<script setup lang="ts">
  import SideNavigation from '../components/SideNavigation.vue'

  
</script>

<style>
.main-content{
  margin-left: 16rem;
}
/* Flexbox */
.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.flex-1 {
  flex: 1;
}

/* Layout */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Typography */
h1, h2, h3 {
  font-family: sans-serif;
}

h1 {
  font-size: 1.5rem;
}

h2 {
  font-size: 1.25rem;
}

h3 {
  font-size: 1rem;
}

/* Colors */
.bg-white {
  background-color: white;
}

.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.12);
}

.text-blue-500 {
  color: #3b82f6;
}

.hover:text-blue-700 {
  color: #2563eb;
}

/* Table */
.table-auto {
  width: auto;
  border-collapse: collapse;
}

.table-auto th,
.table-auto td {
  border: 1px solid #ccc;
  padding: 0.5rem;
}

.table-auto th {
  background-color: #f3f4f6;
}

</style>
