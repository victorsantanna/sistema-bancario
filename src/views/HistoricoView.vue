        <template>
            <NavbarTransacao :nome-usuario="nomeUsuario" :valor-saldo="valorSaldo" :tipo-conta="tipoConta"
                :cpf-cnpj="cpfCnpj" />
            <div class="container">
                <MenuLateral :nome-usuario="nomeUsuario" :tipo-conta="tipoConta" :cpf-cnpj="cpfCnpj" />
                <div class="conteudo-principal">
                    <div class="fixed-button">
                        <BotaoSair class="btn-sair" />
                    </div>
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
                    <div class="scroll-box">
                        <div v-if="transacoes.length > 0" class="conteudo-historico">
                            <div v-for="(transacao, index) in transacoes" :key="index">
                                <p>{{ formatarData(transacao.data) }}</p>
                                <div class="conteudo-historico-info">
                                    <div class="historico-group">
                                        <img :src="iconeTransacao(transacao.tipo)" alt="">
                                    </div>
                                    <div class="historico-group">
                                        <h3>{{ tipoTransacao(transacao.tipo) }}</h3>
                                        <p>R$ {{ transacao.valor.toFixed(2) }}</p>
                                        <p>{{ transacao.contaOrigem.usuario.nomeCompleto }}</p>
                                    </div>

                                    <div class="historico-group">
                                        <h3>CPF/CNPJ</h3>
                                        <p>{{ transacao.contaOrigem.usuario.cpfCnpj }}</p>
                                    </div>
                                    <div class="historico-group">
                                        <h3>Agência</h3>
                                        <p>{{ transacao.contaOrigem.agencia }}</p>
                                    </div>
                                    <div class="historico-group">
                                        <h3>Número da conta</h3>
                                        <p>{{ transacao.contaOrigem.conta }}</p>
                                    </div>
                                    <div class="historico-group">
                                        <h3>Horário</h3>
                                        <p>{{ formatarHorario(transacao.data) }}</p>
                                    </div>
                                    <div class="historico-group">
                                        <img  class="historico-boleto-img"
                                            src="../assets/img/historico/comprovante.png" alt="boleto">
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div v-else>
                            <p>Nenhum dado encontrado.</p>
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
import Comprovante from '@/components/Comprovante.vue';
export default {
    components: {
        NavbarTransacao, MenuLateral, BotaoSair, Comprovante,
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
            },
            transacoes: [],
            dataInicio: '',
            dataFim: '',

        }
    },
    methods: {
        async getTransacoesCompletaPorId() {
            try {
                const idUsuario = sessionStorage.getItem('idUsuario');
                const response = await transacoesService.obterTransacoesCompleta(idUsuario);
                console.log('Os dados recebidos: ', response);
                this.transacoes = response.content;
                return response
            } catch (error) {
                console.error('Erro ao obter transações completas:', error);
            }
        },
        // async getTransacoesPorId() {
        //     try {
        //         const idUsuario = sessionStorage.getItem('idUsuario');
        //         const response = await transacoesService.obterTransacaoPorId(idUsuario);
        //         console.log("Dados da transação recebidos:", response);

        //         // Verificar se a resposta é um array ou um objeto único
        //         if (response && Array.isArray(response)) {

        //             this.transactions = response;
        //         } else if (response) {
        //             console.log("A resposta é um objeto:", response);
        //             this.transactions = [response]; // Colocar o objeto único dentro de um array
        //         } else {
        //             console.error('Dados da transação não encontrados ou são inválidos');
        //         }


        //         return response
        //     } catch (error) {
        //         console.error(error);
        //     }
        // },

        formatarData(data) {
            const dataObj = new Date(data);
            const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
            return dataObj.toLocaleDateString('pt-BR', options);
        },
        formatarHorario(data) {
            const dataObj = new Date(data);
            return `${dataObj.getHours()}h${dataObj.getMinutes()}`;
        },
        tipoTransacao(tipo) {
            return tipo === 'TRANSFERENCIA' ? 'Transferência' : 'Deposito';
        },
        iconeTransacao(tipo) {
            switch (tipo) {
                case 'TRANSFERENCIA':
                    return require('../assets/img/historico/retirada.png');
                case 'SAQUE':
                    return require('../assets/img/historico/retirada.png');
                case 'DEPOSITO':
                    return require('../assets/img/historico/deposito.png');

            }
        },
        async buscarHistorico() {
            // Implementar a lógica para buscar histórico baseado nas datas dataInicio e dataFim
            console.log('Buscar histórico com data de início:', this.dataInicio, 'e data de fim:', this.dataFim);
            // Exemplo de como buscar com as datas:
            // const response = await transacoesService.buscarHistorico(this.dataInicio, this.dataFim);
            // Atualizar this.transactions com o resultado da busca
        },
    },
    created() {
        this.getTransacoesCompletaPorId();
        // this.getTransacoesPorId();
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
    width: 1208px;
    height: auto;
}

.conteudo-principal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 11px;
    margin-left: 80px;
    width: 67%;
    height: 460px;

}

.fixed-button {
    position: fixed;
    top: 115px;
    right: 10px;
    z-index: 1000;
    /* Garante que o botão esteja acima de outros conteúdos */
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
    font-size: 13px;
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

.scroll-box {
    width: 100%;
    max-height: 800px;
    overflow-y: auto;
    border: none;
    padding: 10px;
    background-color: #fcfcfc;


}
</style>

