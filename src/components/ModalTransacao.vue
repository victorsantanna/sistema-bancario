<template>
  <div class="overlay" v-if="open">
    <div class="modal">
        <nav>
            <img class="img-modal" src="../assets/img/img-home/logo.png" alt="logo bank">
        </nav>
        <div class="content-modal">
            <h3>Transferência Realizada com Sucesso!</h3>
            <img src="../assets/img/confirmacao.png" alt="confirmação">
    
        </div>
       <div>
           <button class="btn-comprovante"> ver comprovante</button>
           <button @click="$emit('close')" class="btn-fechar"> fechar </button>
    
       </div>
      </div>
        
    </div>
</template>

<script>
export default {
    props:{
        open:{
            type: Boolean,
            required: true
        },
        setup(props, { emit }){
            const closeModal = () => {
                emit('close', false)
            }
            return {
                closeModal
            }
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
  width: 500px;
  height: 285px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

nav {
  margin-bottom: 20px;
  background-color: #06004F;
  height: 50px;
  width: 100%;
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
}

.btn-fechar {
  margin-left: 5px;
  width: 120px;
  height: 34px;
  border: 1.2px solid #06004F; 
  color: #06004F;
  border-radius: 4px;
  background-color: #DCDCDC;
  font-weight: bold;
  cursor: pointer;
}

</style>