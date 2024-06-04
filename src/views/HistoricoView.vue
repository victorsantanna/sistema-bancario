<template>
    <NavbarTransacao />
    <div class="container">
        <MenuLateral />
        <div class="conteudo-principal">
            <div class="btn-sair">
                <button>Sair</button>
                <img src="../assets/img/img-detalhes/frame12.png" alt="">
            </div>
            <div class="historico">
                <h3>Historico de transação</h3>
                <div class="historico-data">
                    <p>Data de inicio</p>
                    <input type="date">
                    <p>Data de fim</p>
                    <input type="date">

                </div>
            </div>
            <div class="conteudo-historico">
                <h3>mês</h3>
                <p>data</p>
                <div class="conteudo-historico-info">
                    <div>
                        <img src="../assets/img/historico/deposito.png" alt="">
                    </div>
                    <div>
                        <h3>transferencia recebida</h3>
                        <p>R$:150,00</p>
                        <p>Lucas Silva</p>
                    </div>
                    <div>
                        <h3>CPF/CNPJ</h3>
                        <p>***.123.774-**</p>                       
                    </div>
                    <div>
                        <h3>Agência</h3>
                        <p>1</p>                       
                    </div>
                    <div>
                        <h3>Número da conta</h3>
                        <p>88996633-1</p>                       
                    </div>
                    <div>
                        <h3>Horário</h3>
                        <p>17h23</p>                       
                    </div>
                    <div>
                        <img src="../assets/img/historico/comprovante.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
  
</template>

<script>
import NavbarTransacao from '@/components/NavbarTransacao.vue';
import MenuLateral from '@/components/MenuLateral.vue';
export default {
    components:{
        NavbarTransacao, MenuLateral,
    }
}
</script>

<style scoped>
.container{
    display: flex;
    font-family: 'Montserrat', sans-serif;
}

.conteudo-principal{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 100px;
    margin-top: 0;
    width: 100%;
    height: 500px;
}
.btn-sair{
    display: flex;
    justify-content: flex-end;
}

.historico{
    display: flex;
    flex-direction: column;
}

.historico-data{
    display: flex;
}

.conteudo-historico{
    display: flex;
    flex-direction: column;
}

.conteudo-historico-info{
    display: flex;
    
}

</style>