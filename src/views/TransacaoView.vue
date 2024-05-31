<template>
    <div class="container">
        <NavbarTransacao />
        <div class="body-content">

            <MenuLateral />

            <section class="content-section">
                    <div class="content-info-section">
                        <div class="menu-info">
                            <img class="aside-icon" src="../assets/img/img-detalhes/frame6.png" alt="">
                            <p>Realizar transação</p>
                        </div>
                       
                        <div class="content-transacoes-info">
                            <div class="content-info-usuario">
                        <div class="content-saldo-usuario">
                           <p>Saldo em conta</p>
                           <img src="../assets/img/img-detalhes/frame2.png" alt="olho">
                        </div>
                        <strong>
                            <p>R$:1400,45</p>
                        </strong>
                    </div>
                            <h3>Transação</h3>
                            <p>Dados da conta</p>
                            <p>Preencha os campos a seguir com os dados da conta que deseja transferir.</p>
                            <div>
                                <form>
                                    <div class="form-row">
                                        <input type="text" placeholder="Instituição" />
                                    </div>
                                    <div class="form-row">
                                        <input type="text" placeholder="Agência" />
                                        <input type="text" placeholder="Conta" />
                                    </div>
                                            <div class="form-row">
                                                <input type="text" placeholder="Nome completo" />
                                            </div>
                                            <div class="form-row">
                                                <input type="text" placeholder="CPF/CNPJ" />
                                                <input type="text" placeholder="Tipo de conta" />
                                            </div>
                                    <p class="text-valor-transf">Valor da transferência</p>
                                    <div class="form-row">
                                        <input class="input-valor" type="text" placeholder="Valor">
                                    </div>
                                    <div class="btn-transacao">
                                        <button class="btn-concluir">concluir transferência</button>
                                        <button class="btn-voltar">voltar</button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="section-secundaria">
                        <div class="botao-sair">
                            <button> Sair</button>
                            <img src="../assets/img/img-detalhes/frame12.png" alt="">
                        </div>
                        <div>
                            <img class="section-banner" src="../assets/img/img-detalhes/banner2.png" alt="">
                        </div>
                    </div>
                </section>
        </div>

    </div>
    

    <h1>Contas</h1>
    <ul>
      <li v-for="conta in contas" :key="conta.id">
        <p>Conta: {{ conta.conta }}</p>
        <p>Agência: {{ conta.agencia }}</p>
        <p>Saldo: {{ conta.saldo }}</p>
        <p>Usuário: {{ conta.usuario.nomeCompleto }}</p>
        <p>CPF/CNPJ: {{ conta.usuario.cpfCnpj }}</p>
        <p>E-mail: {{ conta.usuario.email }}</p>
        <p>Tipo de conta: {{ conta.usuario.tipo }}</p><br>

        
      </li>
    </ul>
  
    
</template>

<script>
import contasService from '@/services/contas.js';
import NavbarTransacao from '@/components/NavbarTransacao.vue';
import MenuLateral from '@/components/MenuLateral.vue';


export default{
    data(){
        return{
            contas:[],
        }
    },
    components:{
        NavbarTransacao,
        MenuLateral,
    },
    created(){
    this.getContas();
    
    },
    methods:{
     async getContas(){
       try {
        const response = await contasService.obterContas();
        console.log(response);
        this.contas = response;
        
       } catch (error) {
        console.error(error);
       }
     },
    }
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

.menu-info{
    display: flex;
    flex-direction: row;
    
}



.content-section{
  display: flex;
  flex-direction: row;
  justify-content: space-around;   
  margin: 45px;
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

/* formulário */

.form-row {
  display: flex;
  margin-bottom: 10px; 
}

.form-row input {
  flex: 2;
  margin-right: 10px; 
  padding-left:10px;
  height: 30px;
}

.form-row input:last-child {
  margin-right: 0; /* Remove o espaçamento do último input da linha */
}

.form-row input::placeholder{
    font-size: 14px;
 
}

.input-valor{
    margin-top: 6px;
}

.text-valor-transf{
    font-size: 15px;
    color: #06004F;
    font-weight: bold;
    
}

.btn-transacao{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 15px;
}
.btn-transacao button{
    flex: 1;
}

.btn-concluir{
    
    height: 34px;
    border: 1.2px solid #06004F; 
    color: #fff;
    border-radius: 4px;
    background-color: #06004F;
    font-weight: bold;
    cursor: pointer;
}

.btn-voltar{
    margin-left: 5px;
    
    height: 34px;
    border: 1.2px solid #06004F; 
    color: #06004F;
    border-radius: 4px;
    background-color: #DCDCDC;
    font-weight: bold;
    cursor: pointer;
}



</style>