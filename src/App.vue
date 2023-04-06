
<template>
  <div id="main" class="bg-gray-200 min-h-[100vh] overflow-y-auto">
    <div id="nav" class="w-screen bg-white z-[100] fixed">
      <Header />
    </div>
    <div class="pt-[8vh] mt-2">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>



<script setup>
      import TopHeader from "./components/TopHeder.vue"
      import Header from './components/Header.vue';
      import Footer from "./components/Footer.vue";
</script>