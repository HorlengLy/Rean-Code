
<template>
  <div id="main" class="bg-gray-200 min-h-[100vh] overflow-y-auto">
    <div id="nav" class="w-screen bg-white z-[100] fixed shadow-md shadow-gray-300">
      <Header />
    </div>
    <div class="pt-[8vh] py-4">
      <RouterView></RouterView>
    </div>
    <Footer />
  </div>
</template>



<script setup>
      import Header from './components/Header.vue';
      import Footer from "./components/Footer.vue";
</script>