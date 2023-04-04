<template>
    
    <div>
      <Navbar></Navbar>
       <Header></Header>
       <Cards></Cards>
       <ClientsCard></ClientsCard>
       <Gallery></Gallery>
      
       <Footer></Footer>
       

       
       
   
    </div>
   </template>
   
   <script>
   import Navbar from '../components/navbar.vue'
   import Header from '../components/header.vue'
import Cards from '../components/Cards.vue'
import Footer from '../components/Footer.vue';
import Gallery from '../components/Gallery.vue';
import ClientsCard from '../components/Clients-card.vue';


   

   
   
   export default {
     name: 'IndexPage',
   
     components:{
    Navbar,
    Header,
    Cards,
    Footer,
    Gallery,
    ClientsCard
}
   
   }
   </script>
   