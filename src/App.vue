<template>

  <Navbar v-if="!isAuthPage" />

  <router-view />

</template>

<script>
import Navbar from './components/Navbar.vue';
import usuarioService from './services/usuariosService'


export default {
  components: {
    Navbar,
  },
  data() {
    return {
      users: [],
    }
  },
  computed: {
    isAuthPage() {
      return this.$route.path === '/login' || this.$route.path === '/cadastro' || this.$route.path === '/detalhes' || this.$route.path === '/teste' || this.$route.path === '/transacao' || this.$route.path === '/historico';
    },
  },
  //created(){
  //  this.getUsuarios();
  // },
  methods: {
    async getUsuarios() {
      try {
        const response = await usuarioService.obterUsuarios();
        console.log(response);
        this.users = response;
        return response
      } catch (error) {
        console.error(error);
      }
    }
  },
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
