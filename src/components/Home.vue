<template>
    <div class="bg-gradient-to-r  min-h-[100vh]  bg-gray-300">
        <div class="xl:w-[70%] md:w-[80%] w-[90%] mx-auto py-8 lg:py-20 lg:flex">
            <div class="flex-1 flex flex-col items-center gap-5">
                <span id="text-cover" class="p-3 overflow-hidden bg-black z-[0] rounded-lg border-none">
                    <span id="text" class="lg:text-2xl sm:text-lg text-lg font-Bokor text-blue-500">
                        ស្វាគមន៏មកកាន់គេហទំព័ររៀនកូដដោយអត់គិតថ្លៃ
                    </span>
                </span>
                <div class="lg:flex hidden flex-col items-center gap-2">
                    <span class="font-kh_1 md:text-lg text-sm  indent-10">
                        រៀនកូដជាភាសាខ្មែរងាយៗ​ ដោយខ្លួនឯងចំណេញទាំងថវិការ ទាំងពេលវេលា
                        មិនពិបាកធ្វើដំណើរ​ មានប្រសិទ្ធភាពខ្ពស់ ចាប់ផ្ដើមពីសូន្យទៅ ងាយស្រួលសម្រាប់អ្នកទើបចាប់ផ្ដើមដំបូង
                    </span>
                    <span class="font-kh_1">
                        តោះនៅចាំអីទៀត &#63;
                    </span>
                    <span class="font-kh_1">
                        ចាប់ផ្ដើបឥឡូវនេះ​
                    </span>
                    <div class="flex gap-5">
                        <router-link to="/lessons">
                            <button class="bg-sky-600 hover:bg-sky-500 py-2 w-[120px] text-gray-200 rounded-md transition-all duration-200 shadow-lg shadow-sky-300">Get start</button>
                        </router-link>
                        <router-link to="/roadmap">
                            <button class="bg-sky-600 hover:bg-sky-500 py-2 w-[120px] text-gray-200 rounded-md transition-all duration-200 shadow-lg shadow-sky-300">Roadmaps</button>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="lg:flex-1 md:flex-[0.5] flex-[0.4] flex justify-center items-center lg:mt-0 mt-5 flex-col gap-3">
                <img src="../assets/images/CuteGirl2.png" alt="" class="xl:w-[400px] lg:w-[250px] w-[300px] lg:block hidden">
                <img src="../assets/images/CuteGirl.png" alt="" class="xl:w-[400px] lg:w-[250px] w-[300px] lg:hidden block">
                <div class="lg:hidden flex flex-col items-center gap-2 mt-5 md:px-[50px] px-[20px]">
                    <span class="font-kh_1 indent-10 md:text-base text-sm">
                        រៀនកូដជាភាសាខ្មែរងាយៗ​ ដោយខ្លួនឯងចំណេញទាំងថវិការ ទាំងពេលវេលា
                        មិនពិបាកធ្វើដំណើរ​ មានប្រសិទ្ធភាពខ្ពស់ ចាប់ផ្ដើមពីសូន្យទៅ ងាយស្រួលសម្រាប់អ្នកទើបចាប់ផ្ដើមដំបូង ។
                    </span>
                    <span class="font-kh_1">
                        តោះនៅចាំអីទៀត &#63;
                    </span>
                    <span class="font-kh_1">
                        ចាប់ផ្ដើបឥឡូវនេះ​
                    </span>
                    <div class="flex gap-5 mt-4">
                        <router-link to="/lessons">
                            <button class="bg-sky-600 hover:bg-sky-500 py-2 w-[120px] text-gray-200 rounded-md transition-all duration-200 shadow-lg shadow-sky-300">Get start</button>
                        </router-link>
                        <router-link to="/roadmap">
                            <button class="bg-sky-600 hover:bg-sky-500 py-2 w-[120px] text-gray-200 rounded-md transition-all duration-200 shadow-lg shadow-sky-300">Roadmaps</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import "../assets/css/Home.css"
</script>