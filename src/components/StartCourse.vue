<script setup>
    import SubjectTitle from './SubjectTitle.vue';
</script>


<template>
    <div class="flex  transition-all duration-300">
        <div id="sub_nav" class="fixed lg:left-0 left-[-300px] lg:top-[65px] top-0 
        opacity-0 lg:opacity-100 xl:w-[15%] lg:w-[25%] md:w-[30%] sm:w-[40%] w-[60%] h-screen 
        bg-white overflow-y-auto transition-all duration-300 pt-10 pb-[100px] z-[2000] shadow-md shadow-gray-600">
            <span class="absolute lg:hidden block top-4 right-5 cursor-pointer">
                <font-awesome-icon :icon="['fas', 'xmark']" size="xl" />
            </span>
            <span class="lg:text-2xl text-xl text-sky-700 pl-4 uppercase">html</span>
            <hr class="border-[1px] border-sky-300">
            <div class="mt-5">
                <span class="text-xl text-cyan-500 px-[30px]">Indroduction</span>
                <SubjectTitle />
            </div>
            <div class="mt-5">
                <span class="text-xl text-cyan-500 px-[30px]">Sytax</span>
                <SubjectTitle />
            </div>
            <div class="mt-5">
                <span class="text-xl text-cyan-500 px-[30px]">Element</span>
                <SubjectTitle />
            </div>
        </div>
        <div id="lessonContain" class="xl:w-[85%] lg:w-[80%] sm:w-[90%] w-full min-h-[85vh] xl:ml-[15%] lg:ml-[20%] mx-auto bg-gray-100 py-2 transition-all duration-300">
            dkdjjjd
        </div>
    </div>
</template>