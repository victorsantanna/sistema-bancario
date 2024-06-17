<template>
  <VueElementLoading :active="isLoading" spinner="spinner" color="#06004F" text="Carregando" duration="1" size="60" :is-full-screen=true />
  <div class="container">
    <div class="conteudo-home">
      <div class="conteudo-imagem-home">
        <img class="imagem-home" src="../assets/img/img-home/logo4.png" alt="imagem home">
      </div>
      <div class="conteudo-info-home">
        <div class="conteudo-info">
          <h2>Sua tranquilidade financeira,<br> nossa prioridade.</h2>
          <p>Com nossa tecnologia avançada, suas finanças estão sempre seguras.<br>
            Concentre-se no crescimento do seu negócio com total confiança.</p>
          <router-link to="/cadastro">
            <button class="botao-info">Crie sua conta agora</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="container-segunda-parte">
    <div class="conteudo-segunda-parte">
      <h2>O cartão que impulsiona o seu negócio. &#128640;</h2>
      <p>Nosso cartão oferece benefícios exclusivos e segurança avançada, ajudando você a gerenciar suas finanças com
        facilidade e a focar no crescimento do seu negócio.</p>
      <div class="gradiente-linha"></div>
    </div>
    <div class="conteudo-img-segunda-parte">
      <img class="img-segunda-parte" src="../assets/img/Cartão.png" alt="imagem cartão">
    </div>
  </div>
  <div class="container-terceira-parte">

  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import VueElementLoading from 'vue-element-loading';

export default {
  name: 'HomeView',
  components: {
    RouterLink,VueElementLoading,
  },
  data(){
    return{
      isLoading: true,
    };
  },
  mounted() {
    // Simular um atraso de carregamento para fins de demonstração
    setTimeout(() => {
      this.isLoading = false;
    }, 1200); // Ajuste o tempo conforme necessário
  }
}

</script>

<style scoped>
.container {
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  width: 1150px;
  height: 100vh;
  margin-bottom: 10px;
}

.conteudo-home {
  width: 1100px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;
}

.imagem-home {
  width: 500px;
  height: 380px;

}

.conteudo-info-home {
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: 29px;
  font-weight: 700;
  color: #06004F;
  margin: 0;
  padding: 0;
  margin-bottom: 4px;


}

p {
  font-size: 18px;
  font-weight: 400;
  color: #06004F;
  margin-bottom: 20px;

}

.conteudo-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 440px;
}

.botao-info {
  background-color: #06004F;
  color: #E6E6ED;
  width: 330px;
  height: 45px;
  border: none;
  border-radius: 4px;
  padding: 16px, 12px, 16px, 12px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 15px;
  font-weight: 700;
}

.botao-info:hover {
  background-color: #080065;
}

.container-segunda-parte {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 1150px;
  
}

.conteudo-segunda-parte {
  width: 360px;
  padding: 50px;
  margin: 30px;
  margin-right: 150px;
  
}

.conteudo-segunda-parte h2 {
  width: 600px;
  font-size: 32px;
  font-weight: 700;
  color: #06004F;

}

.conteudo-segunda-parte p {
  font-size: 20px;
  width: 470px;
  font-weight: 400;
  color: #06004F;
  margin-bottom: 10px;
}

.gradiente-linha {
  height: 8px;
  width: 150px;
  border-radius: 4px;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(19, 0, 223, 1) 100%);
  margin: 0;
}

.img-segunda-parte {
  width: 500px;
}

@media (max-width: 394px) {
  .container {
    padding: 0;
    margin: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 250px;
  }

  h2 {
    font-size: 20px;
    color: #06004F;
    margin-bottom: 4px;


  }

  p {
    font-size: 14px;
  }

  .conteudo-home {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 10px;
    
    
  }

  .conteudo-info {
    width: 90%;
    margin: 0;
    padding: 0;
    
  }

  .botao-info {
    width: 220px;
    font-size: 12px;
  }

  .container-segunda-parte{
    width: 80%;
    margin: 0;
    padding: 0;
    margin-bottom: 900px;
  }
  .conteudo-segunda-parte{
    width: 50%;
    margin: 0;
    padding: 0;
  }

  .conteudo-segunda-parte h2 {
    font-size: 20px;
    
  }

  .conteudo-segunda-parte p {
    font-size: 14px;
   
  }

  .gradiente-linha {
    width: 100px;
  }

  .imagem-home,
  .img-segunda-parte {
    display: none;
  }

}

@media (max-width: 480px) {
  .container {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  h2 {
    font-size: 20px;
  }

  p {
    font-size: 14px;
  }

  .conteudo-home {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 10px;
    margin-bottom: 350px;
    padding: 0;
  }

  .conteudo-info {
    width: 90%;
    margin: 0;
    padding: 0;
  }

  .botao-info {
    width: 220px;
    font-size: 12px;
  }

  .conteudo-segunda-parte h2 {
    width: 100%;
    font-size: 20px;
  }

  .conteudo-segunda-parte p {
    font-size: 14px;
    width: 100%;
  }

  .gradiente-linha {
    width: 80px;
  }

  .imagem-home,
  .img-segunda-parte {
    display: none;
  }

}
</style>
