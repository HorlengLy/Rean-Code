<template>
    <div class="bg-white lg:px-[100px] md:px-[50px] sm:px-[30px] px-[10px] lg:py-3 py-10 flex items-center justify-between">
        <div class="flex-[0.5] flex flex-col justify-center">
            <span class="font-kh_2 tracking-widest text-lg text-blue-600">
                    រៀនកូដ
            </span>
            <span class="text-gray-800 text-sm">
                @Horlengggg
            </span>
        </div>

        <!-- Lesson -->
        <div class="lg:flex-1 flex-[0.7] flex flex-col">
            <span class="font-Bokor font-semibold text">មេរៀន</span>
            <div class="flex justify-start gap-4">
                <ul class="flex flex-col gap-1">
                    <router-link to="/html">
                        <li class="uppercase underline text-xs text-blue-600 font-Roboto">html</li>
                    </router-link>
                    <router-link to="/html">
                        <li class="uppercase underline text-xs text-blue-600 font-Roboto">css</li>
                    </router-link>
                    <router-link to="/html">
                        <li class="uppercase underline text-xs text-blue-600 font-Roboto">javascript</li>
                    </router-link>
                </ul>
                <ul class="flex flex-col gap-1">
                    <router-link to="/html">
                        <li class="uppercase underline text-xs text-blue-600 font-Roboto">Node Js</li>
                    </router-link>
                    <router-link to="/html">
                        <li class="uppercase underline text-xs text-blue-600 font-Roboto">PHP</li>
                    </router-link>
                    <router-link to="/html">
                        <li class="uppercase underline text-xs text-blue-600 font-Roboto">Python</li>
                    </router-link>
                </ul>
                <ul class="lg:flex flex-col gap-1 hidden">
                    <router-link to="/html">
                        <li class="uppercase underline text-xs text-blue-600 font-Roboto">MongoDB</li>
                    </router-link>
                    <router-link to="/html">
                        <li class="uppercase underline text-xs text-blue-600 font-Roboto">Mysql</li>
                    </router-link>
                    <router-link to="/html">
                        <li class="uppercase underline text-xs text-blue-600 font-Roboto">Mysql</li>
                    </router-link>
                </ul>
            </div>
        </div>
        <!-- end lesson -->
        <!-- praticte -->
        <div  class="flex-[0.7] hidden sm:flex flex-col items-start">
            <span class="font-Bokor font-semibold text">អនុវត្តន៏</span>
            <div class="flex justify-between items-start gap-4">
                <ul>
                    <router-link to="/html">
                        <li class="py-1 uppercase underline text-xs text-blue-600 font-Roboto">Caculator</li>
                    </router-link>
                    <router-link to="/html">
                        <li class="py-1 uppercase underline text-xs text-blue-600 font-Roboto">Form Design</li>
                    </router-link>
                    <router-link to="/html">
                        <li class="py-1 uppercase underline text-xs text-blue-600 font-Roboto">Clock</li>
                    </router-link>
                </ul>
                <ul>
                    <router-link to="/html">
                        <li class="py-1 uppercase underline text-xs text-blue-600 font-Roboto">Caculator</li>
                    </router-link>
                    <router-link to="/html">
                        <li class="py-1 uppercase underline text-xs text-blue-600 font-Roboto">Form Design</li>
                    </router-link>
                    <router-link to="/html">
                        <li class="py-1 uppercase underline text-xs text-blue-600 font-Roboto">Clock</li>
                    </router-link>
                </ul>
            </div>
        </div>
        <div class="flex-[0.7] md:flex hidden flex-col items-start">
            <span class="font-Roboto">Roadmaps</span>
            <div class="flex gap-6">
                <ul class="">
                    <li class="py-1 text-blue-600 uppercase text-xs underline cursor-pointer">Basic Web</li>
                    <li class="py-1 text-blue-600 uppercase text-xs underline cursor-pointer">Design</li>
                    <li class="py-1 text-blue-600 uppercase text-xs underline cursor-pointer">Advance</li>
                </ul>
                <ul class="">
                    <li class="py-1 text-blue-600 uppercase text-xs underline cursor-pointer">Basic Web</li>
                    <li class="py-1 text-blue-600 uppercase text-xs underline cursor-pointer">Design</li>
                    <li class="py-1 text-blue-600 uppercase text-xs underline cursor-pointer">Advance</li>
                </ul>
            </div>
        </div>
        <div class="flex-[0.7]flex flex-col  items-start">
            <span class="font-Bokor font-semibold text">ទំនាក់ទំនង</span>
            <ul class="">
                <li class="py-1 text-blue-600 uppercase text-xs underline cursor-pointer">Facebook</li>
                <li class="py-1 text-blue-600 uppercase text-xs underline cursor-pointer">Telegram</li>
                <li class="py-1 text-blue-600 uppercase text-xs underline cursor-pointer">Github</li>
            </ul>
        </div>
    </div>
</template>