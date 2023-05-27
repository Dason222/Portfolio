<template>
<div id="backToTop" v-cloak>
  <div class="h-screen bg-blue-200"></div>
  <div class="h-screen bg-blue-300"></div>
  <div class="h-screen bg-blue-400"></div>
  <div class="h-screen bg-blue-500"></div>
  <div class="h-screen bg-blue-600"></div>
  <transition name="fade">
    <div id="pagetop" class="fixed right-0 bottom-0" v-show="scY > 300" @click="toTop">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
           stroke="#4a5568"
           stroke-width="1" stroke-linecap="square" stroke-linejoin="arcs">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </div>
  </transition>
</div>

</template>

<script>
const backToTop = document.querySelector('#backToTop')
</script>