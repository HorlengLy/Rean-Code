<script setup>
    import "../assets/css/Header.css"
    const showNav = ()=>{
        const navbar = document.querySelector("#navbar");
        navbar.classList.toggle("right-[-500px]")
        navbar.classList.toggle("opacity-0")
        navbar.classList.toggle("right-0")
    }
</script>
<template>
    <div class="lg:px-[120px] md:px-[80px] sm:px-[60px] px-[30px] lg:py-3 py-2 flex items-center justify-between">
        <div class="lg:flex-[0.4] flex items-center gap-4">
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/code-icon.png" alt=""
            class="w-[40px] h-[40px]">
            <span class="font-kh_2 lg:text-2xl font-bold text-lg text-gray-600">
                រៀនកូដ
            </span>
        </div>

        <div class="lg:hidden block cursor-pointer" @click="showNav">
            <font-awesome-icon :icon="['fas', 'bars']" size="xl" />
        </div>

        <div id="navbar" class="flex-1 bg-white lg:shadow-none shadow-2xl shadow-gray-500 lg:h-auto h-[100vh] lg:w-auto md:w-[350px] sm:w-[300px] w-[250px]     
        lg:static absolute top-0 transition-all duration-300 lg:opacity-100 opacity-0 right-[-500px] 
        flex lg:flex-row flex-col xl:justify-end z-[1000]">
            <div class="relative">
                <span @click="showNav" class="lg:hidden absolute cursor-pointer right-5 top-3">
                    <font-awesome-icon :icon="['fas', 'xmark']" size="xl" />
                </span>
            </div>
            <div class="lg:hidden flex gap-4 px-10 items-center mt-10">
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/code-icon.png" alt=""
                    class="w-[30px] h-[30px]">
                <span class="font-kh_1 lg:text-3xl font-bold text-lg text-blue-600">
                    រៀនកូដ
                </span> 
                <hr>
            </div>
            <ul class="flex lg:flex-row flex-col lg:gap-4 xl:gap-6 gap-1 w-full lg:mt-0 mt-10 lg:justify-end">
                <router-link :to="{name:'home'}">
                    <li @click="showNav" class="font-kh_1 flex items-center lg:gap-2 gap-6 lg:px-0 px-10  py-2 cursor-pointer lg:hover:text-red-600 transition-all duration-200 lg:hover:bg-white hover:bg-gray-300">
                        <font-awesome-icon :icon="['fas', 'house-chimney-user']" size="lg" class="2xl:block lg:hidden block"/>ទំព័រដើម
                    </li>
                </router-link>
                <router-link :to="{name:'lesson.indroducts'}">
                    <li @click="showNav" class="font-kh_1 flex items-center lg:gap-2 gap-6 lg:px-0 px-10  py-2 cursor-pointer lg:hover:text-red-600 transition-all duration-200 lg:hover:bg-white hover:bg-gray-300">
                        <font-awesome-icon :icon="['fas', 'book']" size="lg"  class="2xl:block lg:hidden block"/>មេរៀន
                    </li>
                </router-link>
                <router-link :to="{name:'pratice'}">
                    <li @click="showNav" class="font-kh_1 lg:px-0 px-10  flex items-center lg:gap-2 gap-6   py-2 cursor-pointer lg:hover:text-red-600 transition-all duration-200 lg:hover:bg-white hover:bg-gray-300">
                        <font-awesome-icon :icon="['fas', 'pen']" size="lg"  class="2xl:block lg:hidden block"/>អនុវត្តន៏
                    </li>
                </router-link>
                <router-link :to="{name:'contact'}">
                    <li @click="showNav" class="font-kh_1 lg:px-0 px-10  flex items-center lg:gap-2 gap-6   py-2 cursor-pointer lg:hover:text-red-600 transition-all duration-200 lg:hover:bg-white hover:bg-gray-300">
                        <font-awesome-icon :icon="['faD', 'address-book']" size="lg" class="2xl:block lg:hidden block"/>ទំនាក់ទំនង
                    </li>
                </router-link>
                <router-link :to="{name:'about'}">
                    <li @click="showNav" class="font-kh_1 lg:px-0 px-10  flex items-center lg:gap-2 gap-6   py-2 cursor-pointer lg:hover:text-red-600 transition-all duration-200 lg:hover:bg-white hover:bg-gray-300">
                        <font-awesome-icon :icon="['faD', 'circle-info']" size="lg" class="2xl:block lg:hidden block"/>អំពីយើង
                    </li>
                </router-link>
                <router-link :to="{name:'support'}">
                    <li @click="showNav" class="font-kh_1 lg:px-0 px-10  flex items-center lg:gap-2 gap-6   py-2 cursor-pointer lg:hover:text-red-600 transition-all duration-200 lg:hover:bg-white hover:bg-gray-300">
                        <font-awesome-icon :icon="['fas', 'handshake-angle']"  class="2xl:block lg:hidden block"/>គាំទ្រពួកយើង
                    </li>
                </router-link>
                <router-link :to="{name:'roadmap'}">
                    <li @click="showNav" class="font-Roboto lg:px-0 px-10  flex items-center lg:gap-2 gap-6   py-2 cursor-pointer lg:hover:text-red-600 transition-all duration-200 lg:hover:bg-white hover:bg-gray-300">
                        <font-awesome-icon :icon="['fas', 'person-arrow-up-from-line']" size="lg"  class="2xl:block lg:hidden block"/>Roadmap
                    </li>
                </router-link>
            </ul>
        </div>
    </div>
</template>