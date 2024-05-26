<template>
 <Navbar  v-if="!isLoginPage" />
  
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default{
  components:{
    Navbar,
  },
  computed: {
    // Verifica se a rota atual é a rota de login
    isLoginPage() {
      return this.$route.path === '/login';
    }
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
