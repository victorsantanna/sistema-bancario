<template>
    <div class="container">
        <nav class="navbar-container">
            <div>
                <img class="navbar-logo" src="../assets/img/img-home/logo.png" alt="logo stefbank">
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

        <aside>
            <span id="open-btn">
                <img src="../assets/img/img-detalhes/expandimenu.png" alt="menu">
            </span>
            <div class="aside-info">
                <div class="aside-content">
                    <img class="aside-icon" src="../assets/img/img-detalhes/frame5.png" alt="">
                    <p>Menu principal</p>
                </div>
                <div class="aside-content">
                    <img class="aside-icon" src="../assets/img/img-detalhes/frame6.png" alt="">
                    <p>Realizar transação</p>
                </div>
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
                <div>
                    <img class="aside-icon" src="../assets/img/img-detalhes/frame10.png" alt="">
                    <p>Configurações</p>
                </div>
                <div>
                    <img src="../assets/img/img-detalhes/Ellipse1.png" alt="">
                    <p>Lucas Silva</p>
                    <button>LOJISTA</button>
                </div>
            </div>
        </aside>

        <section>
            <div>
                <div>
                    <h3>Bem-vindo, Lucas Silva</h3>
                    <p>Saldo em conta</p>
                    <img src="" alt="">
                    <p>R$:1400,45</p>
                </div>
                <div>
                    <h3>transações recentes</h3>
                    <div>
                        <div>
                            <h3>transferencia recebida</h3>
                            <p>R$: 140,00</p>
                            <p>Lucas Silva</p>
                        </div>
                        <div>
                            <img src="../assets/img/img-detalhes/frame3.png" alt="">
                        </div>
                        <div>
                            <h3>transferencia realizada</h3>
                            <p>R$: 140,00</p>
                            <p>Lucas Silva</p>
                        </div>
                        <div>
                            <img src="../assets/img/img-detalhes/frame4.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <button> Sair</button>
                    <img src="" alt="">
                </div>
                <div>
                    <p>notificações</p>
                    <img src="" alt="">
                </div>
                <div>

                    <img src="../assets/img/img-detalhes/banner1.png" alt="">
                </div>
            </div>
        </section>

    </div>

    
</template>

<script>
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
  border: 1px solid #0000ff;
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
    width: 220px;
    background-color: #05003F;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    height: 475px;
    
}
#open-btn{
    margin-left: 222px;
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

        /* Estilos para o perfil do usuário */
        aside > div:last-child {
            margin-top: 20px;
            padding-top: 20px;
           
        }

        aside > div:last-child > div {
            display: flex;
            align-items: center;
        }

        aside > div:last-child img {
            width: 40px;
            height: 40px;
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
    padding: 7px 25px;
    border-radius: 4px;
    cursor: pointer;
        }

        aside > div:last-child button:hover {
            background-color: #0056b3;
        }


</style>