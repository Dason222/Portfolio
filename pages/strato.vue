<template>
    
    <div>
        <Navbar></Navbar>
        <strato-hero></strato-hero>
        <Strato></Strato>
        
        <Testimonials></Testimonials>
        <Footer></Footer>
       
    </div>
   </template>
   
   <script>
      import Navbar from '../components/navbar.vue'
import Footer from '../components/Footer.vue';
import MorflaxHero from '../components/Morflax/morflax-hero.vue';
import Strato from '../components/Strato/Strato.vue';
import StratoHero from '../components/Strato/strato-hero.vue';
import StratoCarousel from '../components/Strato/strato-carousel.vue';
import Testimonials from '../components/Strato/Testimonials.vue';
   
   export default {
     name: 'IndexPage',
   
     components:{
    Navbar,
    Footer,
    MorflaxHero,
    Strato,
    StratoHero,
    StratoCarousel,
    Testimonials
}
   
   }
   </script>
   