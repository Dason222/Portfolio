<template>
    
    <div>
        <Navbar></Navbar>
        <MorflaxHero></MorflaxHero>
        <Footer></Footer>
        <ScrollToTopButton></ScrollToTopButton>

    </div>
   </template>
   
   <script>
    import Navbar from '../components/navbar.vue'
    import Footer from '../components/Footer.vue';
    import MorflaxHero from '../components/Morflax/morflax-hero.vue';
    import ScrollToTopButton from '../components/ScrollToTopButton.vue'
   
   export default {
     name: 'IndexPage',
   
     components:{
    Navbar,
    Footer,
    MorflaxHero,
    ScrollToTopButton
}
   
   }
   </script>
   