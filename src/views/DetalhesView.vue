<template>
    <div class="container">
        <nav class="navbar-container">
            <div>
                <router-link to="/">
                    <img class="navbar-logo" src="../assets/img/img-home/logo.png" alt="logo stefbank">

                </router-link>
            </div>
            <div class="navbar-info">
                <div class="navbar-info-usuario">
                    <h4>Lucas Silva</h4>
                    <p>***26320</p>
                </div>
                <div>
                    <button type="button" class="navbar-botao">LOJISTA</button>
                </div>
            </div>
        </nav>
        <div class="body-content">

            <aside>
                <span id="open-btn">
                    <img src="../assets/img/img-detalhes/expandimenu.png" alt="menu">
                </span>
                <div class="aside-info">
                    <div class="aside-content">
                        <img class="aside-icon" src="../assets/img/img-detalhes/frame5.png" alt="">
                        <p>Menu principal</p>
                    </div>
                    <router-link to="transacao">
                    <div class="aside-content">
                            <img class="aside-icon" src="../assets/img/img-detalhes/frame6.png" alt="">
                            <p>Realizar transação</p>
                        </div>
                    </router-link>
                    <div class="aside-content">
                        <img class="aside-icon" src="../assets/img/img-detalhes/frame7.png" alt="">
                        <p>Histórico</p>
                    </div>
                    <div class="aside-content">
                        <img  class="aside-icon" src="../assets/img/img-detalhes/frame8.png" alt="">
                        <p>Cartões</p>
                    </div>
                    <div class="aside-content">
                        <img class="aside-icon" src="../assets/img/img-detalhes/frame9.png" alt="">
                        <p>Investimentos</p>
                    </div>
                </div>
                <div class="aside-config">
                    <div class="config-info">
                        <img class="aside-icon" src="../assets/img/img-detalhes/frame10.png" alt="">
                        <p>Configurações</p>
                    </div>
                    <div class="config-usuario">
                        <div>
                            <img class="config-usuario-img" src="../assets/img/img-detalhes/Ellipse1.png" alt="">
                        </div>
                        <div class="config-usuario-info">
                            <p>Lucas Silva</p>
                            <button>LOJISTA</button>
                        </div>
                    </div>
                </div>
            </aside>
    
            <section class="content-section">
                <div class="content-info-section">
                    <div class="content-info-usuario">
                        <h3>Bem-vindo, Lucas Silva</h3>
                        <div class="content-saldo-usuario">
                           <p>Saldo em conta</p>
                           <img src="../assets/img/img-detalhes/frame2.png" alt="olho">
                        </div>
                        <strong>
                            <p>R$:1400,45</p>
                        </strong>
                    </div>
                    <div class="content-transacoes-info">
                        <h3>Transações recentes</h3>
                        <div>
                            <div class="scroll-box">

                                <div class="content-transacoes-usuario">
                                    <div class="content-transacoes-info">
                                        <h4>Transferência recebida</h4>
                                        <p>R$: 160,00</p>
                                        <p>Lucas Silva</p>
                                    </div>
                                    <div>
                                        <img src="../assets/img/img-detalhes/frame3.png" alt="">
                                    </div>
                                </div>
                                <div  class="content-transacoes-usuario">
                                    <div class="content-transacoes-info">
                                        <h4>Transferência realizada</h4>
                                        <p>R$: 140,00</p>
                                        <p>Lucas Silva</p>
                                    </div>
                                    <div>
                                        <img src="../assets/img/img-detalhes/frame4.png" alt="">
                                    </div>
                                </div>
                                <div  class="content-transacoes-usuario">
                                    <div class="content-transacoes-info">
                                        <h4>Transferência realizada</h4>
                                        <p>R$: 140,00</p>
                                        <p>Lucas Silva</p>
                                    </div>
                                    <div>
                                        <img src="../assets/img/img-detalhes/frame4.png" alt="">
                                    </div>
                                </div>
                                <div  class="content-transacoes-usuario">
                                    <div class="content-transacoes-info">
                                        <h4>Transferência realizada</h4>
                                        <p>R$: 140,00</p>
                                        <p>Lucas Silva</p>
                                    </div>
                                    <div>
                                        <img src="../assets/img/img-detalhes/frame4.png" alt="">
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
                <div class="section-secundaria">
                    <router-link to="/">
                        <div class="botao-sair">
                            <button class="btn-sair"> Sair</button>
                            <img src="../assets/img/img-detalhes/frame12.png" alt="">
                        </div>

                    </router-link>
                    <div>
                        <img class="section-banner" src="../assets/img/img-detalhes/banner1.png" alt="">
                    </div>
                </div>
            </section>
        </div>

    </div>

    
</template>

<script>
import { RouterLink } from 'vue-router';
import contasService from '@/services/contas.js';
import transacoesService from '@/services/transacoes.js';

export default{
  created(){
    this.getContas();
    this.getTransacoes();
  },
  methods:{
     async getContas(){
       try {
        const response = await contasService.obterContas();
        console.log(response);
        
        return response
       } catch (error) {
        console.error(error);
       }
    },
    async getTransacoes(){
         try {
          const response = await transacoesService.obterTransacoes();
          console.log(response);
          
          return response
         } catch (error) {
          console.error(error);
         }
      },
  },
}

</script>

<style scoped>

.container{
  width: 1240px;
  height: 585px;
 
}
.body-content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

nav{
    font-family: 'Montserrat', sans-serif;
    width: 1248px;
    height: 80px;
    background-color: #06004F;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
}

.navbar-logo{
    margin-left: 60px;
    width: 120px;
}

.navbar-info{
    color: #E6E6ED;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    margin: 50px;
}
.navbar-info-usuario{
    margin: 20px;
    
}

.navbar-info-usuario h4{
    font-size: 16px;
}

.navbar-info-usuario p{
    text-indent: 33px;
    font-size: 14px;
}

.navbar-info-usuario h4,
.navbar-info-usuario p {
  margin: 0;
  padding: 0;
}

.navbar-botao{
    background-color: #1D1393;
    border: .5px solid #3b348b;
    color: #E6E6ED;
    padding: 7px 20px;
    border-radius: 4px;
    cursor: pointer;
}

aside{
    width: 200px;
    background-color: #05003F;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    height: 475px;
    
}
#open-btn{
    margin-left: 202px;
}

.aside-content{
    margin-bottom: 30px;
    cursor: pointer;
}
.aside-icon{
    width: 18px;
    height: 18px;
    margin-right: 10px;
}

.aside-content{
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}
/* Estilos para textos do menu */
aside p {
    margin: 0;
    font-size: 16px;
    color: #E6E6ED;
}

.aside-config{
    margin-top: 130px;
    padding-top: 20px;
}

.config-usuario{
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    justify-content: center;
    
}
.config-usuario-img{
    width: 50px;
}

.config-usuario-info{
    margin-left: 20px;
    font-size: 20px;
    text-indent: -6px;
}

        aside > div:last-child > div {
            display: flex;
            align-items: center;
        }

        aside > div:last-child img {
           
            border-radius: 50%;
        }

        aside > div:last-child p {
            margin-left: 10px;
            font-weight: bold;
        }

        aside > div:last-child button {
            background-color: #1D1393;
    border: .5px solid #3b348b;
    color: #E6E6ED;
    padding: 4px 18px;
    border-radius: 4px;
    cursor: pointer;
        }

        aside > div:last-child button:hover {
            background-color: #0056b3;
        }

.content-section{
display: flex;
}

.content-section{
  display: flex;
  flex-direction: row;
  justify-content: space-around;   
}

.content-info-section{
    margin-right: 250px;
}
.content-saldo-usuario{
    display: flex;
    flex-direction: row;
}
.content-saldo-usuario img{
    margin-left: 10px;
}

.content-info-usuario{
    display: flex;
    flex-direction: column;
    margin:0;
    padding: 0;
    margin-bottom: 40px;
    
}
.content-info-usuario p, h3{
    margin: 0;
    padding: 0;
}

.content-info-usuario h3 {
    margin-top: 40px;
}

.content-transacoes-usuario{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-right: 5px solid #E6E6ED;


}

.content-transacoes-usuario img{
    margin-left: 90px;
    padding: 15px;
}

.content-transacoes-info{
    display: flex;
    flex-direction: column;
    
    
}
.content-transacoes-info p, h4{
    margin: 0;
    padding: 0;
}
.content-transacoes-info h4{
    margin-top: 30px;
}

.section-banner{
    width: 190px;
    margin-right: 60px;
}

.scroll-box {
    width: 100%;
    height: 300px; /* Defina a altura do box para ativar a rolagem */
    padding: 10px;
    border: 1px solid #000;
    border: none;
    background-color: #fff;
    overflow-y: scroll; /* Ativa a rolagem vertical */
    scrollbar-width: thin; 
    
}

.scroll-box::-webkit-scrollbar {
    width: 12px; /* Largura da barra de rolagem */
    
}

.scroll-box::-webkit-scrollbar-track {
    background: #000000; /* Cor do trilho da barra de rolagem */
    border-radius: 10px; /* Remove as bordas */
}
.scroll-box::-webkit-scrollbar-thumb {
    background: #888; /* Cor do polegar da barra de rolagem */
    border-radius: 10px; /* Remove as bordas */
    border: none; /* Remove qualquer borda */
    
}

.section-secundaria{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
}

.botao-sair{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-right: 50px;
    margin-bottom: 30px;
    width: 98px;
    height: 28px;
    border: 1px solid #06004F;
    border-radius: 4px;
       
    align-items: center;
}

.btn-sair{
    border: none;
    background-color: #fff;
    color: #06004F;
    cursor: pointer;
    margin-right: 12px;
    font-weight: bold;
}

.notificacao{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>