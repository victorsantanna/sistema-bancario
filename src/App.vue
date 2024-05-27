<template>
 <Navbar  v-if="!isAuthPage" />
  
  <router-view/>
  
</template>

<script>
import Navbar from './components/Navbar.vue';

export default{
  components:{
    Navbar,
  },
  data(){
    return{
     
    }
  },
   computed: {
      isAuthPage() {
      return this.$route.path === '/login' || this.$route.path === '/cadastro';
    },
  }
}

</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1000px;
}

</style>
