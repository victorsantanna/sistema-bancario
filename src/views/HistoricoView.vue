        <template>
            <NavbarTransacao :nome-usuario="nomeUsuario" :valor-saldo="valorSaldo" :tipo-conta="tipoConta"
                :cpf-cnpj="cpfCnpj" />
            <div class="container">
                <VueElementLoading :active="isLoading" :is-full-screen=true spinner="spinner" color="#06004F"
                    text="Carregando" duration="1" size="60" />
                <div>
                    <MenuLateral :nome-usuario="nomeUsuario" :tipo-conta="tipoConta" :cpf-cnpj="cpfCnpj" />
                </div>

                <div class="conteudo-principal">

                    <div class="fixed-button">
                        <BotaoSair class="btn-sair" />
                    </div>
                    <div class="historico">

                        <h3>Historico de transação</h3>
                        <div class="historico-data">

                            <div class="historico-data-info">
                                <p>Filtrar transação</p>
                                <input class="custom-date-input" v-model="filtro" type="text">
                            </div>
                            <div class="btn-buscar-historico">
                                <img src="../assets/img/historico/lupa.png" alt="" class="btn-lupa">
                                <button @click="buscarTransacoes" class="btn-buscar">Buscar</button>
                            </div>
                            <div v-if="filteredTransactions.length > 0" class="conteudo-historico">
                                <div v-for="(transacao, id) in filteredTransactions" :key="id"
                                    class="conteudo-historico-info">

                                </div>
                            </div>
                            <div v-else>
                                <p>Nenhuma transação encontrada.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="scroll-box">
                            <div v-if="transacoes.length > 0" class="conteudo-historico">
                                <div v-for="(transacao, id) in transacoes" :key="id">
                                    <p>{{ formatarData(transacao.data) }}</p>
                                    <div class="conteudo-historico-info">
                                        <div class="historico-group">
                                            <img :src="iconeTransacao(transacao.tipo)" alt="">
                                        </div>
                                        <div class="historico-group">
                                            <h3>{{ transacao.tipo }}</h3>
                                            <p>R$ {{ transacao.valor.toFixed(2) }}</p>
                                            <p>{{ transacao.contaDestino?.usuario?.nomeCompleto || 'N/A' }}</p>
                                        </div>

                                        <div class="historico-group">
                                            <h3>CPF/CNPJ</h3>
                                            <p>{{ transacao.contaDestino?.usuario?.cpfCnpj || 'N/A' }}</p>
                                        </div>
                                        <div class="historico-group">
                                            <h3>Agência</h3>
                                            <p>{{ transacao.contaDestino?.agencia || 'N/A' }}</p>
                                        </div>
                                        <div class="historico-group">
                                            <h3>Número da conta</h3>
                                            <p>{{ transacao.contaDestino?.conta || 'N/A' }}</p>
                                        </div>
                                        <div class="historico-group">
                                            <h3>Horário</h3>
                                            <p>{{ formatarHorario(transacao.data) }}</p>
                                        </div>
                                        <div class="historico-group">
                                            <img @click="baixarComprovante" class="historico-boleto-img"
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
                    <div v-if="showModal" class="modal">
                        <div class="modal-content">
                            <p>Download realizado com sucesso!</p>
                            <button class="close" @click="fecharModal">Fechar</button>
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
import VueElementLoading from 'vue-element-loading';

export default {
    components: {
        NavbarTransacao, MenuLateral, BotaoSair, Comprovante, VueElementLoading,
    },
    data() {
        return {

            showModal: false,

            isLoading: true,

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

            transacoes: [{
                id: '',
                valor: 0,
                data: "",
                tipo: "",
                contaOrigem: {
                    id: '',
                    conta: "",
                    agencia: "",
                    saldo: 0,
                    usuario: {
                        id: '',
                        nomeCompleto: "",
                        cpfCnpj: "",
                        email: "",
                        tipo: ""
                    }
                },
                contaDestino: {
                    id: '',
                    conta: "",
                    agencia: "",
                    saldo: 0,
                    usuario: {
                        id: '',
                        nomeCompleto: "",
                        cpfCnpj: "",
                        email: "",
                        tipo: ""
                    }
                }
            }],
            dataInicio: '',
            dataFim: '',

            filtro: '',
            transacoesOriginais: [],

        }
    },

    methods: {
        async getTransacoesCompletaPorId() {
            try {
                const idUsuario = sessionStorage.getItem('idUsuario');
                const response = await transacoesService.obterTransacoesCompleta(idUsuario);
                console.log('Os dados recebidos: ', response);
                this.transacoes = response.content.map(transacao => ({
                    id: transacao.id || '',
                    valor: transacao.valor || 0,
                    data: transacao.data || "",
                    tipo: transacao.tipo || "",
                    contaOrigem: {
                        id: transacao.contaOrigem?.id || '',
                        conta: transacao.contaOrigem?.conta || "",
                        agencia: transacao.contaOrigem?.agencia || "",
                        saldo: transacao.contaOrigem?.saldo || 0,
                        usuario: {
                            id: transacao.contaOrigem?.usuario?.id || '',
                            nomeCompleto: transacao.contaOrigem?.usuario?.nomeCompleto || "",
                            cpfCnpj: transacao.contaOrigem?.usuario?.cpfCnpj || "",
                            email: transacao.contaOrigem?.usuario?.email || "",
                            tipo: transacao.contaOrigem?.usuario?.tipo || ""
                        }
                    },
                    contaDestino: {
                        id: transacao.contaDestino?.id || '',
                        conta: transacao.contaDestino?.conta || "",
                        agencia: transacao.contaDestino?.agencia || "",
                        saldo: transacao.contaDestino?.saldo || 0,
                        usuario: {
                            id: transacao.contaDestino?.usuario?.id || '',
                            nomeCompleto: transacao.contaDestino?.usuario?.nomeCompleto || "",
                            cpfCnpj: transacao.contaDestino?.usuario?.cpfCnpj || "",
                            email: transacao.contaDestino?.usuario?.email || "",
                            tipo: transacao.contaDestino?.usuario?.tipo || ""
                        }
                    }
                }));
                this.transacoesOriginais = [...this.transacoes];
                return response
            } catch (error) {
                console.error('Erro ao obter transações completas:', error);
            }
        },

        formatarData(data) {
            if (!data) return 'N/A';
            const dataObj = new Date(data);
            const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
            return dataObj.toLocaleDateString('pt-BR', options);
        },

        formatarHorario(data) {
            if (!data) return 'N/A';
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

        buscarTransacoes() {
            this.transacoes = this.transacoes.filter(transacao =>
                transacao.tipo.toLowerCase().includes(this.filtro.toLowerCase()) ||
                transacao.valor.toString().includes(this.filtro.toLowerCase()) ||
                transacao.contaDestino?.usuario?.nomeCompleto.toLowerCase().includes(this.filtro.toLowerCase()) ||
                transacao.contaDestino?.usuario?.cpfCnpj.toLowerCase().includes(this.filtro.toLowerCase()) ||
                transacao.contaDestino?.agencia.toString().includes(this.filtro.toLowerCase()) ||
                transacao.contaDestino?.conta.toString().includes(this.filtro.toLowerCase()) ||
                this.formatarData(transacao.data).toLowerCase().includes(this.filtro.toLowerCase()) ||
                this.formatarHorario(transacao.data).toLowerCase().includes(this.filtro.toLowerCase())
            );
            setTimeout(() => {
                this.filtro = '';
                this.transacoes = [...this.transacoesOriginais];
            }, 10000);
        },

        baixarComprovante() {
            this.showModal = true;
        },
        fecharModal() {
            this.showModal = false;
        },

    },
    created() {

        this.getTransacoesCompletaPorId();
        this.nomeUsuario = sessionStorage.getItem('nomeUsuario') || '';
        this.valorSaldo = Number(sessionStorage.getItem('valorSaldo')) || 0;
        this.tipoConta = sessionStorage.getItem('tipoConta') || '';
        this.cpfCnpj = sessionStorage.getItem('cpfCnpj') || '';
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false;
        }, 1200);
    },
    computed: {
        filteredTransactions() {
            // Função para filtrar as transações com base no valor do filtro
            return this.transacoes.filter(transacao => {
                const filtroLowerCase = this.filtro.toLowerCase();

                // Aplicar filtros em vários campos da transação
                return transacao.tipo.toLowerCase().includes(filtroLowerCase) ||
                    transacao.valor.toString().includes(filtroLowerCase) ||
                    transacao.contaDestino?.usuario?.nomeCompleto.toLowerCase().includes(filtroLowerCase) ||
                    transacao.contaDestino?.usuario?.cpfCnpj.toLowerCase().includes(filtroLowerCase) ||
                    transacao.contaDestino?.agencia.toString().includes(filtroLowerCase) ||
                    transacao.contaDestino?.conta.toString().includes(filtroLowerCase) ||
                    this.formatarData(transacao.data).toLowerCase().includes(filtroLowerCase) ||
                    this.formatarHorario(transacao.data).toLowerCase().includes(filtroLowerCase);
            });
        }
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
    margin-top: 30px;
    margin-left: 80px;
    width: 67%;
    height: 400px;
}

.fixed-button {
    position: fixed;
    top: 115px;
    right: 10px;
    z-index: 1000;
}

.btn-sair {
    display: flex;
    justify-content: flex-end;
}

.historico {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}

.historico h3 {
    margin: 0;
    padding: 0;
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

}

.conteudo-historico-info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items:flex-start;
    flex-wrap: nowrap;
    border-bottom: 1.5px solid #E6E6ED;
}

.historico-group {
    flex: 1;
    margin: 10px;
    text-align: start;


}

.historico-group h3 {
    font-size: 12px;
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
.btn-buscar-historico:hover{
    background-color: #080065;
}

.btn-buscar {
    color: #DCDCDC;
    background-color: transparent;
    cursor: pointer;
    border: none;
}

.btn-buscar:hover{
    background-color: #080065;
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
    max-height: 300px;
    overflow-y: auto;
    border: none;
    padding: 10px;
    background-color: #fcfcfc;
    scrollbar-width: thin;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background-color: #06004F;
    padding: 20px;
    border-radius: 10px;
    width: 400px;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.modal-content p {
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 20px;
}

.close {
    width: 140px;
    height: 44px;
    margin-top: 10px;
    border: 1.2px solid #06004F;
    color: #06004F;
    border-radius: 4px;
    background-color: #fff;
    font-weight: bold;
    cursor: pointer;
}
</style>

