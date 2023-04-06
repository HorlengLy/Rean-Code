<script setup>
    // const showItem = (course)=>{
    //     const css_item = document.querySelector(`#${course}-item`);
    //     css_item.classList.toggle("hidden");
    //     document.querySelector(`#${course}-icon`).classList.toggle("rotate-[90deg]")
    // }
</script>
<template>
    <div class="mt-3">
        <span class="text-sky-500 pl-[15px]">Basic Web Development</span>
        <ul>
            <li class="py-2 p-[40px] cursor-pointer border-y transition-all duration-200">
                <span   class="flex justify-between items-center hover:text-green-600">
                    HTML
                    <font-awesome-icon :icon="['fas', 'angle-right']" size="sm" id="html-icon"/>
                </span>
            </li>
            <li class="py-2 p-[40px] cursor-pointer border-y transition-all duration-200">
                <span class="flex justify-between items-center hover:text-green-600">
                    CSS
                    <font-awesome-icon :icon="['fas', 'angle-right']" size="sm" id="css-icon"/>
                </span>
            </li>
            <li class="py-2 p-[40px] cursor-pointer border-y transition-all duration-200">
                <span class="flex justify-between items-center hover:text-green-600">
                    JavaScript
                    <font-awesome-icon :icon="['fas', 'angle-right']" size="sm" id="js-icon"/>
                </span>
            </li>
        </ul>
    </div>

    <!-- Server -->

    <div class="mt-5">
        <span class="text-sky-500 pl-[15px]">Programing Language</span>
        <ul>
            <li class="py-2 p-[40px] cursor-pointer border-y transition-all duration-200">
                <span  class="flex justify-between items-center hover:text-green-600">
                    Node Js
                    <font-awesome-icon :icon="['fas', 'angle-right']" size="sm" id="nodeJs-icon"/>
                </span>
            </li>
            <li class="py-2 p-[40px] cursor-pointer border-y transition-all duration-200">
                <span  class="flex justify-between items-center hover:text-green-600">
                    PHP
                    <font-awesome-icon :icon="['fas', 'angle-right']" size="sm" id="php-icon"/>
                </span>
            </li>
            <li class="py-2 p-[40px] cursor-pointer border-y transition-all duration-200">
                <span  class="flex justify-between items-center hover:text-green-600">
                    Python
                    <font-awesome-icon :icon="['fas', 'angle-right']" size="sm" id="python-icon"/>
                </span>
            </li>
        </ul>
    </div>

    <!-- database -->
    
    <div class="mt-3">
        <span class="text-sky-500 pl-[15px]">Databases System</span>
        <ul>
            <li class="py-2 p-[40px] cursor-pointer border-y transition-all duration-200">
                <span  class="flex justify-between items-center hover:text-green-600">
                    MYSQL
                    <font-awesome-icon :icon="['fas', 'angle-right']" size="sm" id="mysql-icon"/>
                </span>
            </li>
            <li class="py-2 p-[40px] cursor-pointer border-y transition-all duration-200">
                <span  class="flex justify-between items-center hover:text-green-600">
                    MongoDB
                    <font-awesome-icon :icon="['fas', 'angle-right']" size="sm" id="mongo-icon"/>
                </span>
            </li>
        </ul>
    </div>
</template>