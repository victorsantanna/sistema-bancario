<template>
    <div>

        <NavbarTransacaoVue />
        <MenuLateral />
        
        <ProcessamentoVue />
    </div>


</template>

<script>
import NavbarTransacaoVue from "@/components/NavbarTransacao.vue";
import MenuLateral from "@/components/MenuLateral.vue";
import ComprovanteVue from '@/components/Comprovante.vue';
import ProcessamentoVue from '@/components/Processamento.vue';

export default {
    components: {
        NavbarTransacaoVue, MenuLateral, ComprovanteVue, ProcessamentoVue,
    }
}

</script>

<style></style>