<script setup>
    import Course from './Course.vue';
    import LessonNav from './LessonNav.vue'
    import LessonContain from './LessonContain.vue';
    let i = 0;
    const screen = document.querySelector("body").offsetWidth;
    console.log(screen);
    if(screen<1024) i=1;
    const subNav = ()=>{
        const sub_nav = document.querySelector("#sub_nav");
        const lessonContain = document.querySelector("#lessonContain");
        if(i%2){
            sub_nav.classList.remove("left-[-300px]","lg:left-0",'opacity-0','lg:opacity-100');
            sub_nav.classList.add("left-0",'opacity-100');
            i++;
            if(document.querySelector("body").offsetWidth>1024)
                lessonContain.style.marginLeft = `${sub_nav.offsetWidth+10}px`;
        }else{
            sub_nav.classList.remove("left-[-300px]","lg:left-0",'opacity-0','lg:opacity-100');
            sub_nav.classList.add("left-[-300px]",'opacity-0');
            if(document.querySelector("body").offsetWidth>1024){
                lessonContain.style.marginLeft = "0";
                lessonContain.style.width = "100%"
            }
            else 
                lessonContain.style.marginLeft = "auto";

            i++;
        }
    }
            
</script>

<template>
    <div class="flex  transition-all duration-300">
        <div id="sub_nav" class="fixed lg:left-0 left-[-300px] lg:top-[65px] top-0 
        opacity-0 lg:opacity-100 xl:w-[15%] lg:w-[25%] md:w-[30%] sm:w-[40%] w-[60%] h-screen 
        bg-white overflow-y-auto transition-all duration-300 pt-10 pb-[100px] z-[2000]">
            <span @click="subNav" class="absolute lg:hidden block top-4 right-5 cursor-pointer">
                <font-awesome-icon :icon="['fas', 'xmark']" size="xl" />
            </span>
            <span class="lg:text-2xl text-xl text-blue-700 pl-4">Course</span>
            <hr class="border-[1px] border-sky-300">
            <Course />
        </div>
        <div id="lessonContain" class="xl:w-[85%] lg:w-[80%] sm:w-[90%] w-full min-h-[85vh] xl:ml-[15%] lg:ml-[20%] mx-auto bg-gray-100 py-2 transition-all duration-300">
            <LessonNav :subNav="subNav"/>
            <div class="mt-5">
                <LessonContain />
            </div>
        </div>
    </div>
</template>