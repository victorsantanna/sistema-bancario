<template>
  <modal-bem-vindo-vue @close="isOpen = !isOpen" />
</template>

<script>
import ModalBemVindoVue from '@/components/ModalBemVindo.vue';
import { ref } from 'vue';

export default {
    components:{
        ModalBemVindoVue,
    },
    setup() {
        const isOpen = ref(true)

        const openModal = () => {
            isOpen.value = false

            return isOpen.value
        }
        return {
            isOpen, openModal
        }
    },

}
</script>

<style>

</style>