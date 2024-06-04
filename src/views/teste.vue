<template>
    <div>

        <NavbarTransacaoVue />
        <MenuLateral />
        <comprovante-vue />
    </div>
    
    
</template>

<script>
import NavbarTransacaoVue from "@/components/NavbarTransacao.vue";
import MenuLateral from "@/components/MenuLateral.vue";
import ComprovanteVue from '@/components/Comprovante.vue';

export default{
    components:{
        NavbarTransacaoVue, MenuLateral, ComprovanteVue,
    }
}

</script>

<style>

</style>