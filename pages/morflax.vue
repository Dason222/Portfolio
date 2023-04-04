<template>
    
    <div>
        <Navbar></Navbar>
        <MorflaxHero></MorflaxHero>
        <Footer></Footer>
       
    </div>
   </template>
   
   <script>
      import Navbar from '../components/navbar.vue'
import Footer from '../components/Footer.vue';
import MorflaxHero from '../components/morflax-hero.vue';
   
   export default {
     name: 'IndexPage',
   
     components:{
    Navbar,
    Footer,
    MorflaxHero
}
   
   }
   </script>
   