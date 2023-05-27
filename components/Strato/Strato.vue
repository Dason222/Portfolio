<template>
    <div>

    <div class="py-36 px-16 grid grid-cols-3 gap-4">
        
      <div v-for="image in images" :key="image.id" class="relative ">
        <img :src="image.src" alt="gallery image" class="w-full h-full object-cover rounded-lg">
        <div class="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-75 transition duration-300 rounded-lg">
          <div class="absolute inset-0 flex items-center justify-center">
            <a :href="image.src" target="_blank" class="text-white font-bold uppercase tracking-wide rounded-lg">
              View Full Size
            </a>
          </div>
        </div>
      </div>
    </div>
</div>

  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          { id: 1, src: "img/hoise.png" },
          { id: 2, src: "img/House/2.png" },
          { id: 3, src: "img/House/b.png" },
          { id: 4, src: "img/House/ea.png" },
          { id: 5, src: "img/House/l.png" },
          { id: 6, src: "img/House/r.png" },
        ]
      }
    }
  }
  </script>


<!-- <template>

    <div>
        <div class="grid gap-4">
    
            <img class="h-auto max-w-full rounded-lg" src="img/hoise.png" >
    
            <div class="grid grid-cols-5 gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="img/House/2.png" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="img/House/b.png" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="img/House/ea.png" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="img/House/f.png" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="img/House/l.png" alt="">
                </div>
            </div>
        </div>
    
    
        <div class="grid gap-4">
    
    <img class="pt-16 h-auto max-w-full rounded-lg" src="img/mix.png" >
    
    <div class="grid grid-cols-5 gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg object-cover" src="img\bomb.png" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg object-cover" src="img\gift.png" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="img\eth.png" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="img\done.png" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="img\bag.png" alt="">
        </div>
    </div>
    </div>
    
    </div>
        
    
        
         -->