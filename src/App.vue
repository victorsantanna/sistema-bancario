<template>

  <Navbar v-if="!ehPaginaDeAutenticacao" />

  <router-view />

</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      isLoading: false,
    }
  },
  computed: {
    ehPaginaDeAutenticacao() {
      const authPages = ['/login', '/cadastro', '/detalhes', '/transacao', '/historico'];
      return authPages.includes(this.$route.path);
    },
  },
}

</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}
</style>
