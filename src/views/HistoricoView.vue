    <template>
        <NavbarTransacao :nome-usuario="nomeUsuario" :valor-saldo="valorSaldo" :tipo-conta="tipoConta"
            :cpf-cnpj="cpfCnpj" />
        <div class="container">
            <MenuLateral :nome-usuario="nomeUsuario" :tipo-conta="tipoConta" :cpf-cnpj="cpfCnpj" />
            <div class="conteudo-principal">
                <BotaoSair class="btn-sair" />
                <div class="historico">
                    <h3>Historico de transação</h3>
                    <div class="historico-data">
                        <div class="historico-data-info">
                            <p>Data de inicio</p>
                            <input class="custom-date-input" type="date">
                        </div>
                        <div class="historico-data-info">
                            <p>Data de fim</p>
                            <input class="custom-date-input" type="date">
                        </div>
                        <div class="btn-buscar-historico">
                            <img src="../assets/img/historico/lupa.png" alt="" class="btn-lupa">
                            <button class="btn-buscar">Buscar</button>
                        </div>

                    </div>
                </div>
                <div class="conteudo-historico">

                    <div class="conteudo-historico-info">
                        <div class="historico-group">
                            <img src="../assets/img/historico/deposito.png" alt="">
                        </div>
                        <div class="historico-group">
                            <h3>Transferência</h3>
                            <p>R$:150,00</p>
                            <p>Lucas Silva</p>
                        </div>
                        <div class="historico-group">
                            <h3>CPF/CNPJ</h3>
                            <p>***.123.774-**</p>
                        </div>
                        <div class="historico-group">
                            <h3>Agência</h3>
                            <p>1</p>
                        </div>
                        <div class="historico-group">
                            <h3>Número da conta</h3>
                            <p>889963-1</p>
                        </div>
                        <div class="historico-group">
                            <h3>Horário</h3>
                            <p>17h23</p>
                        </div>
                        <div class="historico-group">
                            <img class="historico-boleto-img" src="../assets/img/historico/comprovante.png"
                                alt="boleto">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </template>

<script>
import transacoesService from '@/services/transacoesService.js';
import NavbarTransacao from '@/components/NavbarTransacao.vue';
import MenuLateral from '@/components/MenuLateral.vue';
import BotaoSair from '@/components/BotaoSair.vue';
export default {
    components: {
        NavbarTransacao, MenuLateral, BotaoSair,
    },
    data() {
        return {
            buscarPorId: '',
            nomeUsuario: '',
            valorSaldo: 0,
            tipoConta: '',
            cpfCnpj: '',
            contaOrigem: {
                agencia: '',
                conta: '',
                id: '',
                saldo: '',
            }

        }
    },
    methods: {
        async transacaoPorid() {
            try {
                const response = await transacoesService.obterTransacaoPorId(this.buscarPorId);
                console.log(response);
                return response
            } catch (error) {

            }
        }
    },
    created() {
        this.nomeUsuario = sessionStorage.getItem('nomeUsuario') || '';
        this.valorSaldo = Number(sessionStorage.getItem('valorSaldo')) || 0;
        this.tipoConta = sessionStorage.getItem('tipoConta') || '';
        this.cpfCnpj = sessionStorage.getItem('cpfCnpj') || '';
    }
}
</script>

<style scoped>
.container {
    display: flex;
    font-family: 'Montserrat', sans-serif;
    width: 1240px;
    height: 585px;
}

.conteudo-principal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 11px;
    margin-left: 80px;
    width: 67%;
    height: 290px;
    
}

.btn-sair {
    display: flex;
    justify-content: flex-end;
    


}

.historico {
    display: flex;
    flex-direction: column;
    
    margin-bottom: 20px;
}

.historico-data {
    display: flex;
    justify-content: flex-start;
    align-items: center;

}

.historico-data-info {
    margin: 5px;
}

.historico-data-info p {
    font-size: 13px;
}

.conteudo-historico {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.conteudo-historico-info {
    display: flex;
    justify-content: center;
    align-items: flex-start;
   


}

.historico-group {
    margin: 0;
    padding: 0;

    margin-right: 40px;
    display: inline-block;


}

.historico-group h3 {
    font-size: 15px;
    margin: 0;
    padding: 0;
    white-space: nowrap;

}

.historico-group p {
    font-size: 15px;
    white-space: nowrap;
    margin: 0;
    padding: auto;


}

.historico-group img {
    margin-top: 13px;
}

.btn-buscar-historico {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 40px;
    border: 1.2px solid #06004F;
    color: #DCDCDC;
    border-radius: 4px;
    background-color: #06004F;
    font-weight: bold;
    cursor: pointer;
    margin-top: 40px;
}

.btn-buscar {
    color: #DCDCDC;
    background-color: #06004F;
    cursor: pointer;
    border: none;
}

.btn-lupa {
    width: 20px;
    height: 20px;
}

.custom-date-input {
    width: 150px;
    height: 40px;
    font-size: 17px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 0;
}

.historico-boleto-img {
    cursor: pointer;
}
</style>

