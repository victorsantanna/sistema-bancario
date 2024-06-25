<template>

  <Navbar v-if="!isAuthPage" />

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
    isAuthPage() {
      const authPages = ['/login', '/cadastro', '/detalhes', '/teste', '/transacao', '/historico'];
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
  width: 1208px;
}
</style>
