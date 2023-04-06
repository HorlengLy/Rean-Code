<script setup>
    const showItem = (course)=>{
        const css_item = document.querySelector(`#${course}-item`);
        css_item.classList.toggle("hidden");
        document.querySelector(`#${course}-icon`).classList.toggle("rotate-[90deg]")
    }
</script>
<template>
    <div class="mt-3">
        <span class="text-sky-500 pl-[15px]">Basic Web Development</span>
        <ul>
            <li class="py-2 p-[40px] cursor-pointer border transition-all duration-200">
                <span @click="showItem('html')"  class="flex justify-between items-center hover:text-green-600">
                    HTML
                    <font-awesome-icon :icon="['fas', 'angle-right']" size="sm" id="html-icon"/>
                </span>
                <ul id="html-item" class="pl-[50px] transition-all duration-300 hidden">
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">possition</li>
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">display</li>
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">margin</li>
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">padding</li>
                </ul>
            </li>
            <li class="py-2 p-[40px] cursor-pointer border transition-all duration-200">
                <span @click="showItem('css')" class="flex justify-between items-center hover:text-green-600">
                    CSS
                    <font-awesome-icon :icon="['fas', 'angle-right']" size="sm" id="css-icon"/>
                </span>
                <ul id="css-item" class="pl-[50px] transition-all duration-300 hidden">
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">possition</li>
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">display</li>
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">margin</li>
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">padding</li>
                </ul>
            </li>
            <li class="py-2 p-[40px] cursor-pointer border transition-all duration-200">
                <span @click="showItem('js')"  class="flex justify-between items-center hover:text-green-600">
                    JavaScript
                    <font-awesome-icon :icon="['fas', 'angle-right']" size="sm" id="js-icon"/>
                </span>
                <ul id="js-item" class="pl-[50px] transition-all duration-300 hidden">
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">possition</li>
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">display</li>
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">margin</li>
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">padding</li>
                </ul>
            </li>
        </ul>
    </div>

    <!-- Server -->

    <div class="mt-5">
        <span class="text-sky-500 pl-[15px]">Programing Language</span>
        <ul>
            <li class="py-2 p-[40px] cursor-pointer border transition-all duration-200">
                <span @click="showItem('nodeJs')"  class="flex justify-between items-center hover:text-green-600">
                    Node Js
                    <font-awesome-icon :icon="['fas', 'angle-right']" size="sm" id="nodeJs-icon"/>
                </span>
                <ul id="nodeJs-item" class="pl-[50px] transition-all duration-300 hidden">
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">possition</li>
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">display</li>
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">margin</li>
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">padding</li>
                </ul>
            </li>
            <li class="py-2 p-[40px] cursor-pointer border transition-all duration-200">
                <span @click="showItem('php')"  class="flex justify-between items-center hover:text-green-600">
                    PHP
                    <font-awesome-icon :icon="['fas', 'angle-right']" size="sm" id="php-icon"/>
                </span>
                <ul id="php-item" class="pl-[50px] transition-all duration-300 hidden">
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">possition</li>
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">display</li>
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">margin</li>
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">padding</li>
                </ul>
            </li>
            <li class="py-2 p-[40px] cursor-pointer border transition-all duration-200">
                <span @click="showItem('python')"  class="flex justify-between items-center hover:text-green-600">
                    Python
                    <font-awesome-icon :icon="['fas', 'angle-right']" size="sm" id="python-icon"/>
                </span>
                <ul id="python-item" class="pl-[50px] transition-all duration-300 hidden">
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">possition</li>
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">display</li>
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">margin</li>
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">padding</li>
                </ul>
            </li>
        </ul>
    </div>

    <!-- database -->
    
    <div class="mt-3">
        <span class="text-sky-500 pl-[15px]">Databases System</span>
        <ul>
            <li class="py-2 p-[40px] cursor-pointer border transition-all duration-200">
                <span @click="showItem('mysql')"  class="flex justify-between items-center hover:text-green-600">
                    MYSQL
                    <font-awesome-icon :icon="['fas', 'angle-right']" size="sm" id="mysql-icon"/>
                </span>
                <ul id="mysql-item" class="pl-[50px] transition-all duration-300 hidden">
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">possition</li>
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">display</li>
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">margin</li>
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">padding</li>
                </ul>
            </li>
            <li class="py-2 p-[40px] cursor-pointer border transition-all duration-200">
                <span @click="showItem('mongo')"  class="flex justify-between items-center hover:text-green-600">
                    MongoDB
                    <font-awesome-icon :icon="['fas', 'angle-right']" size="sm" id="mongo-icon"/>
                </span>
                <ul id="mongo-item" class="pl-[50px] transition-all duration-300 hidden">
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">possition</li>
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">display</li>
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">margin</li>
                    <li class="py-1 hover:text-cyan-500 transition-all duration-200">padding</li>
                </ul>
            </li>
        </ul>
    </div>
</template>