<script setup>
    import "../assets/css/HeaderTop.css";
    const changeText = ()=>{
        setTimeout(()=>{
            document.querySelector('#text-animation').textContent = "តោះរៀនកូដដោយអត់គិតថ្លៃ";
        },0)
        setTimeout(()=>{
            document.querySelector('#text-animation').textContent = "តោះងើបឡើងរៀនជាមួយខ្ញុំ";
        },4000)
        setTimeout(()=>{
            document.querySelector('#text-animation').textContent = "តោះនៅដេកអីទៀត?";
        },8000)
    }
    changeText()
    setInterval(()=>{
        changeText()
    },12000)
</script>
<template>
    <div class="bg-black py-2 flex gap-5 justify-center tracking-widest">
        <span class="font-kh_2 lg:text-3xl text-2xl py-2 text-orange-500">ហេ​ !</span>
        <div class="text-animation-cover py-2 lg:w-[350px] md:w-[300px] w-[250px]">
            <span class="font-kh_2 lg:text-3xl md:text-2xl text-xl  bg-gradient-to-r from-orange-600 via-blue-600 to-orange-600 bg-clip-text text-transparent" id="text-animation"></span>
        </div>
    </div>
</template>