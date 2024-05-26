<template>
     <div class="container">
    <div class="content-img-home">
      <img class="img-home" src="../assets/img/logo2.png" alt="imagem home">
      <img class="img-home2" src="../assets/img/logo3.png" alt="imagem home">
    </div>
    <div class="content-info-home">
      <div class="content-info">
        <h2>Sua tranquilidade financeira,<br> nossa prioridade.</h2>
        <p>Com nossa tecnologia avançada, suas finanças estão sempre seguras.<br>
           Concentre-se no crescimento do seu negócio com total confiança.</p>
           <button class="btn-info">Crie sua conta agora</button>
        </div>
     
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
 
  }
}
</script>

<style scoped>
.container{
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  width: 990px;
  height: 385px;
  margin-top: 10px;
}
.content-img-home{
  position: relative;
  margin-top: 20px;
}

.img-home{
  position: absolute;
  z-index: 2; 
  width: 280px;
  height: 200px;
  margin-left: 80px;
}
.img-home2{
   z-index: 1;
  width: 400px;
  height: 280px;
  margin-left: 30px;
}
.content-info-home{
  display: flex;
  flex-direction: column;
  margin-right: 35px;
}
h2{
  font-size: 21px;
  font-weight: 700;
  color: #06004F;

}
p{
  font-size: 14px;
  font-weight: 400;
  color: #06004F;
}
.content-info{
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 330px;
}
.btn-info{
  background-color: #06004F;
  color:#E6E6ED ;
  width: 230px;
  height: 30px;
  border: none;
  border-radius: 4px;
  padding: 16px, 12px, 16px, 12px;
  cursor: pointer;
  margin-top: 10px;
}
</style>
