<template>
    <NavbarTransacao :nome-usuario="nomeUsuario" :valor-saldo="valorSaldo" :tipo-conta="tipoConta"
        :cpf-cnpj="cpfCnpj" />
    <div class="container">
        <div class="body-content">
            <MenuLateral :nome-usuario="nomeUsuario" :tipo-conta="tipoConta" :cpf-cnpj="cpfCnpj" />
            <section class="content-section">
                <VueElementLoading :active="isLoading" spinner="spinner" color="#06004F" text="Carregando" duration="1"
                    size="60" />
                <VueElementLoading :active="isLoadingTransacao" spinner="spinner" color="#06004F" text="Carregando"
                    duration="1" size="60" />
                <div class="content-info-section">

                    <div class="content-transacoes-info">
                        <div class="content-info-usuario">
                            <div class="content-saldo-usuario">
                                <p>Saldo em conta</p>
                                <img v-if="olhoFechado" @click="toggleOlho" class="img-olho"
                                    src="../assets/img/img-detalhes/frame2.png" alt="olho" />
                                <img v-else @click="toggleOlho" class="img-olho"
                                    src="../assets/img/img-detalhes/olhofechado.png" alt="olhofechado" />
                            </div>
                            <strong>
                                <p v-if="olhoFechado">{{ formatarMoeda(this.valorSaldo) }}</p>
                                <p v-else class="oculto">*********</p>
                            </strong>
                        </div>
                        <div class="content-info-transacao">
                            <button @click="etapaFormulario = 1" :class="{ 'active': etapaFormulario === 1 }"
                                class="btn-info-transacao">Dados da conta</button>
                            <button @click="etapaFormulario = 2" :class="{ 'active': etapaFormulario === 2 }"
                                class="btn-info-transacao">Valor</button>
                            <button @click="etapaFormulario = 3" :class="{ 'active': etapaFormulario === 3 }"
                                class="btn-info-transacao">Concluir</button>
                        </div>
                        <div class="text-transacao">
                            <p>Preencha os campos a seguir com os dados da conta que deseja transferir.</p>
                        </div>
                        <div>
                            <div>
                                <span v-if="exibirErroInstituicao" id="erro-conta" class="msg-erro">Por favor, preencha
                                    o campo instituição.</span>
                                <div class="form-row" v-show="etapaFormulario >= 1">
                                    <input v-model="instituicao" type="text" placeholder="Instituição"
                                        @blur="validarInstituicao" />
                                </div>
                                <span v-if="exibirErroContaDestino" class="msg-erro" id="erro-conta">Por favor, preencha
                                    a conta destino.</span>
                                <div class="form-row" v-show="etapaFormulario >= 1">
                                    <input v-model="nomeUsuario" type="text" placeholder="Conta Origem" readonly />
                                    <input v-model="transacao.idContaOrigem" type="hidden" />
                                    <input v-model="transacao.idContaDestino" type="text" placeholder="Conta destino"
                                        @blur="validarContaDestino" />
                                </div>

                                <span v-if="exibirErroNomeCompleto" id="erro-conta" class="msg-erro">Por favor, preencha
                                    o nome completo.</span>
                                <div class="form-row" v-show="etapaFormulario >= 2">
                                    <input v-model="nomeCompleto" @blur="validarNomeCompleto" type="text"
                                        placeholder="Nome completo" />
                                </div>
                                <span v-if="exibirErroCpfCnpj" class="msg-erro lado-a-lado">Por favor, preencha o
                                    CPF/CNPJ.</span>
                                <span v-if="exibirErroTipoConta" class="msg-erro lado-a-lado">Por favor, preencha o tipo
                                    de conta.</span>
                                <div class="form-row" v-show="etapaFormulario >= 2">
                                    <input v-model="cpfCnpjDestino" type="text" placeholder="CPF/CNPJ"
                                        @blur="validarCpfCnpjDestino" />
                                    <input v-model="tipoContaDestino" type="text" placeholder="Tipo de conta"
                                        @blur="validarTipoContaDestino" />
                                </div>
                                <div class="form-row" v-show="etapaFormulario >= 2">
                                    <p class="text-valor-transf">Valor da transferência</p>
                                    <input v-model="transacao.valor" v-money="moneyConfig" class="input-valor"
                                        type="text">
                                </div>
                                <div v-if="erroTransacao" class="msg-erro">{{ erroTransacao }}</div>

                                <div class="btn-transacao">
                                    <button v-show="etapaFormulario < 3" @click="avancarFormulario(etapaFormulario + 1)"
                                        class="btn-concluir" :disabled="saldoZerado">Avançar</button>
                                    <button v-show="etapaFormulario === 3" @click="enviaTransacao"
                                        class="btn-concluir">Concluir transferência</button>
                                    <button v-show="etapaFormulario > 1" @click="voltarFormulario(etapaFormulario - 1)"
                                        class="btn-voltar">Voltar</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="section-secundaria">
                    <router-link to="/" class="no-underline">
                        <div class="botao-sair">
                            <button class="btn-sair"> Sair</button>
                            <img src="../assets/img/img-detalhes/frame12.png" alt="">
                        </div>

                    </router-link>
                    <div>
                        <img class="section-banner" :src="imagemAtual" alt="">
                    </div>
                </div>
            </section>
        </div>

    </div>

    <ModalTransacaoVue :open="isOpen" @close="isOpen = !isOpen" @ver-comprovante="abrirModalComprovante" />
    <Comprovante :open="isModalComprovanteOpen" :transacao="transacaoDetalhe" @close="isModalComprovanteOpen = false" />


</template>

<script>
import { ref } from 'vue';
import VueElementLoading from 'vue-element-loading';
import contasService from '@/services/contasService.js';
import transacaoService from '@/services/transacoesService.js';
import NavbarTransacao from '@/components/NavbarTransacao.vue';
import MenuLateral from '@/components/MenuLateral.vue';
import ModalTransacaoVue from '@/components/ModalTransacao.vue';
import Comprovante from '@/components/Comprovante.vue';


export default {
    data() {
        return {
            moneyConfig: {
                decimal: ',',
                thousands: '.',
                prefix: 'R$ ',
                precision: 0,
                masked: true,
            },
            etapaFormulario: 1,

            isLoading: true,
            isLoadingTransacao: false,

            olhoFechado: true,

            contas: [],

            indiceAtual: 0,
            imagens: [
                require('@/assets/img/img-detalhes/banner1.png'),
                require('@/assets/img/img-detalhes/banner2.png'),
                require('@/assets/img/img-detalhes/banner3.png')
            ],

            transacao: {
                idContaOrigem: '',
                idContaDestino: '',
                valor: 0,
            },
            transacaoDetalhe: {},

            nomeUsuario: '',
            valorSaldo: 0,
            tipoConta: '',
            cpfCnpj: '',

            isModalComprovanteOpen: false,
            isComprovanteOpen: false,

            instituicao: '',
            instituicaoValida: false,
            nomeCompleto: '',
            cpfCnpjDestino: '',
            tipoContaDestino: '',
            exibirErroInstituicao: false,
            exibirErroContaDestino: false,
            exibirErroNomeCompleto: false,
            exibirErroCpfCnpj: false,
            exibirErroTipoConta: false,
            erroTransacao: '',
        }
    },
    components: {
        NavbarTransacao, MenuLateral, ModalTransacaoVue, Comprovante, VueElementLoading,
    },
    computed: {
        imagemAtual() {
            return this.imagens[this.indiceAtual];
        },
        saldoZerado() {
            return this.valorSaldo === 0;
        }
    },
    mounted() {
        setInterval(() => {
            this.indiceAtual = (this.indiceAtual + 1) % this.imagens.length;
        }, 5000);
        setTimeout(() => {
            this.isLoading = false;
        }, 1200);
        setTimeout(() => {
            this.isLoadingTransacao = false;
        }, 4000);
    },
    setup() {
        const isOpen = ref(false)

        const openModal = () => {
            isOpen.value = true

            return isOpen.value
        }
        return {
            isOpen, openModal
        }
    },
    created() {
        this.getContas();
        this.nomeUsuario = sessionStorage.getItem('nomeUsuario') || '';
        this.nomeUsuario = this.capitalizarPrimeirasLetras(this.nomeUsuario);
        this.valorSaldo = Number(sessionStorage.getItem('valorSaldo')) || 0;
        this.tipoConta = sessionStorage.getItem('tipoConta') || '';
        this.cpfCnpj = sessionStorage.getItem('cpfCnpj') || '';
        this.transacao.idContaOrigem = sessionStorage.getItem('idUsuario') || '';
    },
    methods: {
        formatarMoeda(valor) {
            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
        },
        toggleOlho() {
            this.olhoFechado = !this.olhoFechado;
        },
        abrirComprovante() {
            console.log("Evento 'ver-comprovante' recebido pelo componente pai");
            this.isComprovanteOpen = false;
        },
        async getContas() {
            try {
                const response = await contasService.obterContas();
                console.log(response);
                this.contas = response;

            } catch (error) {
                console.error(error);
            }
        },
        async enviaTransacao() {
            try {
                if (this.instituicaoValida) {
                    let valorTransacao = parseFloat(this.transacao.valor.replace('R$ ', '').replace(/\./g, '').replace(',', '.'));

                    if (valorTransacao <= 0) {
                        throw new Error('Valor da transação deve ser maior que zero.');

                    }

                    // Verifica se o valor da transação não excede o saldo disponível
                    if (valorTransacao > this.valorSaldo) {
                        throw new Error('Saldo insuficiente para realizar a transação.');

                    }

                    this.isLoadingTransacao = true;
                    let saldoAtual = Number(this.valorSaldo);
                    if (isNaN(saldoAtual)) {
                        throw new Error('Valor do saldo inválido');
                    }
                    await transacaoService.realizarTransacao({ ...this.transacao, valor: valorTransacao });
                    saldoAtual -= valorTransacao;
                    this.valorSaldo = saldoAtual;
                    sessionStorage.setItem('valorSaldo', saldoAtual.toString());
                    this.isLoadingTransacao = false;
                    this.transacaoDetalhe = {
                        eminente: this.nomeUsuario,
                        cpfCnpj: this.cpfCnpj,
                        horario: new Date().toLocaleTimeString(),
                        agencia: '0001',
                        contaCorrente: '123456-7',
                        dataTransacao: new Date().toLocaleDateString(),
                        destinatario: this.nomeCompleto,
                        cpfCnpjDestinatario: this.cpfCnpjDestino,
                        chaveSeguranca: 'XXXXX-XXXXX-XXXXX-XXXXX',
                        agenciaDestinatario: '0001',
                        contaCorrenteDestinatario: this.transacao.idContaDestino,
                        valor: this.transacao.valor
                    };
                    this.openModal();
                    return;
                }
            } catch (error) {
                console.error(error);
                this.erroTransacao = error.message;
                setTimeout(() => {
                    this.erroTransacao = '';
                }, 3000);
            }
        },
        avancarFormulario(proximaEtapa) {
            this.etapaFormulario = proximaEtapa;
        },
        voltarFormulario(etapaAnterior) {
            this.etapaFormulario = etapaAnterior;
        },
        exibirSeccao(etapa) {
            this.etapaFormulario = etapa;
        },
        capitalizarPrimeirasLetras(str) {
            return str.replace(/\b\w/g, char => char.toUpperCase());
        },
        abrirModalComprovante() {
            this.isModalComprovanteOpen = true;
        },
        validarInstituicao() {
            this.instituicaoValida = this.instituicao.trim() !== '';
            this.exibirErroInstituicao = !this.instituicaoValida;
            if (this.exibirErroInstituicao) {
                this.exibirErroContexibirErroInstituicaoaDestino = setTimeout(() => {
                    this.exibirErroInstituicao = false;
                }, 3000);
            }

        },
        validarContaDestino() {
            this.exibirErroContaDestino = this.transacao.idContaDestino.trim() === '';
            if (this.exibirErroContaDestino) {
                this.exibirErroContaDestino = setTimeout(() => {
                    this.exibirErroContaDestino = false;
                }, 3000);
            }
        },
        validarNomeCompleto() {
            this.exibirErroNomeCompleto = this.nomeCompleto.trim() === '';
            if (this.exibirErroNomeCompleto) {
                this.exibirErroNomeCompleto = setTimeout(() => {
                    this.exibirErroNomeCompleto = false;
                }, 3000);
            }
        },
        validarCpfCnpjDestino() {
            this.exibirErroCpfCnpj = this.cpfCnpjDestino.trim() === '';
            if (this.exibirErroCpfCnpj) {
                this.exibirErroCpfCnpj = setTimeout(() => {
                    this.exibirErroCpfCnpj = false;
                }, 3000);
            }
        },
        validarTipoContaDestino() {
            this.exibirErroTipoConta = this.tipoContaDestino.trim() === '';
            if (this.exibirErroTipoConta) {
                this.exibirErroTipoConta = setTimeout(() => {
                    this.exibirErroTipoConta = false;
                }, 3000);
            }
        },

    },
}
</script>

<style scoped>
.container {
    width: 1208px;
    height: auto;

}

.body-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.content-section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-left: 45px;
}

.content-info-section {
    margin-right: 250px;
}

.content-saldo-usuario {
    display: flex;
    flex-direction: row;
}

.content-saldo-usuario img {
    margin-left: 10px;
}

.content-info-usuario {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 10px;

}

.content-info-usuario p,
h3 {
    margin: 2px;
    padding: 2px;
}

.content-info-usuario h3 {
    margin-top: 20px;
}

.content-transacoes-usuario {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-right: 5px solid #E6E6ED;


}

.content-transacoes-usuario img {
    margin-left: 90px;
    padding: 15px;
}

.content-transacoes-info {
    display: flex;
    flex-direction: column;
    margin-top: 20px;


}

.content-transacoes-info p {
    margin: 2px;
    padding: 2px;
    font-size: 16px;
}


.content-transacoes-info h4 {
    margin-top: 10px;
}

.section-banner {
    width: 190px;

}

/* formulário */

.form-row {
    display: flex;
    margin-bottom: 10px;
}

.form-row input {
    flex: 2;
    margin-right: 10px;
    padding-left: 10px;
    height: 30px;
}



.form-row input:last-child {
    margin-right: 0;

}

.form-row input::placeholder {
    font-size: 14px;

}

.input-valor {
    margin-top: 6px;
}

.text-valor-transf {
    font-size: 15px;
    color: #06004F;
    font-weight: bold;

}

.btn-transacao {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 10px;
    margin-bottom: 10px;
}

.btn-transacao button {
    flex: 1;
}

.btn-concluir {

    height: 34px;
    border: 1.2px solid #06004F;
    color: #fff;
    border-radius: 4px;
    background-color: #06004F;
    font-weight: bold;
    cursor: pointer;
}

.btn-avançar {

    height: 34px;
    border: 1.2px solid #06004F;
    color: #fff;
    border-radius: 4px;
    background-color: #06004F;
    font-weight: bold;
    cursor: pointer;
}

.btn-voltar {
    margin-left: 5px;

    height: 34px;
    border: 1.2px solid #06004F;
    color: #06004F;
    border-radius: 4px;
    background-color: #DCDCDC;
    font-weight: bold;
    cursor: pointer;
}

.botao-sair {
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

.btn-sair {
    border: none;
    background-color: #fff;
    color: #06004F;
    cursor: pointer;
    margin-right: 12px;
    font-weight: bold;
}

.section-secundaria {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
}

.oculto {
    background-color: #D9D9D9;
    padding: 10px 20px;
    width: 100px;
    border-radius: 5px;
    display: inline-block;
    color: #D9D9D9;
}

.btn-info-transacao {
    font-size: 14px;
    border: none;
    background-color: #fff;
    border-bottom: 2px solid #B2B0C8;
    color: #B2B0C8;
    cursor: pointer;
    width: 150px;

}

.btn-info-transacao.active {
    border-bottom: 2px solid #06004F;
    color: #06004F;
    font-weight: bold;
}

.no-underline {
    text-decoration: none;
}

.text-transacao {
    margin-top: 10px;
    margin-bottom: 10px;
}

.msg-erro {
    color: red;
    font-size: 10px;
    margin: 0;
    padding: 0;


}

#erro-conta {
    display: flex;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
}

.lado-a-lado {
    margin-left: 70px;

}
</style>