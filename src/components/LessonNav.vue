<script setup>
    import { defineProps } from 'vue';
    defineProps(['subNav'])
</script>
<template>
    <div class="flex items-center md:gap-20 gap-10 bg-white py-2 lg:px-[70px] px-[30px]">
        <div @click="subNav" class="cursor-pointer">
            <font-awesome-icon :icon="['fas', 'bars']" size="xl" />
        </div>
        <div>
            <input type="search" placeholder="Search..."
            class="py-2 px-4 outline-none border border-gray-400 bg-inherit transition-all 
            duration-200 text-sm text-gray-500 focus:ring-1 focus:ring-sky-500 md:w-[300px] w-[230px] rounded">
        </div>
    </div>
</template>