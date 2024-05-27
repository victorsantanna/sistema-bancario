<template>
 <Navbar  v-if="!isAuthPage" />
  
  <router-view/>
  {{ this.users }}
  
</template>

<script>
import Navbar from './components/Navbar.vue';
import usuarioService from './services/usuarios'


export default{
  components:{
    Navbar,
  },
  data(){
    return{
      users: [],
    }
  },
   computed: {
      isAuthPage() {
      return this.$route.path === '/login' || this.$route.path === '/cadastro';
    },
  },
  created(){
    this.getUsuarios();
  },
  methods:{
     async getUsuarios(){
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
