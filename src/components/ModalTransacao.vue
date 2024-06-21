<template>
  <div class="overlay" v-if="open">
    <div class="modal">
      <nav>
        <img class="img-modal" src="../assets/img/img-home/logo.png" alt="logo bank">
      </nav>
      <div class="content-modal">
        <h3>Transferência Realizada com Sucesso!</h3>
        <img src="../assets/img/confirmacao2.png" alt="confirmação">

      </div>
      <div class="btn-info">

        <button @click="verComprovante" class="btn-comprovante"> Ver comprovante</button>
        <button @click="closeModal" class="btn-fechar"> Fechar </button>

      </div>
    </div>

  </div>
</template>

<script>

import { RouterLink } from 'vue-router';
export default {
    props: {
      open: {
        type: Boolean,
        required: true
      },  
    },
    setup(props, { emit }) {
      const closeModal = () => {
        emit('close', false);
      };
      const verComprovante = () => {
        console.log("Evento 'ver-comprovante' emitido");
        emit('ver-comprovante');
      };
      return {
        closeModal,
        verComprovante
      }
    }
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: #fff;
  width: 90%;
  max-width: 500px;
  height: auto;
  max-height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow-y: auto;
}

nav {
  margin-bottom: 20px;
  background-color: #06004F;
  height: 50px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-modal {
  width: 90px;
}

.content-modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.content-modal img {
  width: 120px;
}

.btn-comprovante {
  height: 34px;
  width: 150px;
  border: 1.2px solid #06004F;
  color: #fff;
  border-radius: 4px;
  background-color: #06004F;
  font-weight: bold;
  cursor: pointer;
  margin: 5px;
}

.btn-fechar {
  margin-left: 5px;
  width: 150px;
  height: 34px;
  border: 1.2px solid #06004F;
  color: #06004F;
  border-radius: 4px;
  background-color: #DCDCDC;
  font-weight: bold;
  cursor: pointer;
}

.btn-info {
  margin-bottom: 40px;
}
</style>