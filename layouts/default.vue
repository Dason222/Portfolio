<template>
    <div>
        <navbar></navbar>
        <footer></footer>

        <nuxt></nuxt>
    </div>
</template>

<script>
import Navbar from '../components/navbar.vue';
import Footer from '../components/Footer.vue';

export default {
   name: 'IndexPage',

   components: {
      Navbar,

   }
}
</script>