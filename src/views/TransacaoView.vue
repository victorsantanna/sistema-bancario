<template>
    <NavbarTransacao :nome-usuario="nomeUsuario" :valor-saldo="valorSaldo" :tipo-conta="tipoConta"
        :cpf-cnpj="cpfCnpj" />
    <div class="container">
        <div class="body-content">
            <MenuLateral :nome-usuario="nomeUsuario" :tipo-conta="tipoConta" :cpf-cnpj="cpfCnpj" />
            <section class="content-section">
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
                                <p  v-if="olhoFechado">{{ formatarMoeda(valorSaldo) }}</p>
                                <p v-else class="oculto">*********</p>
                            </strong>
                        </div>
                        <div class="content-info-transacao">
                            <button class="btn-info-transacao" >Dados da conta</button>
                            <button class="btn-info-transacao" >Valor</button>
                            <button class="btn-info-transacao" >Concluir</button>
                        </div>
                        <h3>Transação</h3>
                        <p>Preencha os campos a seguir com os dados da conta que deseja transferir.</p>
                        <div>

                            <div class="form-row">
                                <input type="text" placeholder="Instituição" />
                            </div>
                            <div class="form-row">
                                <input v-model="transacao.idContaOrigem" type="text" placeholder="Conta Origem" />
                                <input v-model="transacao.idContaDestino" type="text" placeholder="Conta destino" />
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
                                <input v-model="transacao.valor" class="input-valor" type="text" placeholder="Valor">
                            </div>
                            <div class="btn-transacao">
                                <button @click="enviaTransacao" class="btn-concluir">concluir transferência</button>
                                <button class="btn-voltar">voltar</button>

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
                        <img class="section-banner" :src="imagemAtual" alt="">
                    </div>
                </div>
            </section>
        </div>

    </div>

    <ModalTransacaoVue :open="isOpen" @close="isOpen = !isOpen" @ver-comprovante="abrirComprovante" />
    <Comprovante :open="isComprovanteOpen" @close="isComprovanteOpen = true" />


</template>

<script>
import { ref } from 'vue';
import contasService from '@/services/contasService.js';
import transacaoService from '@/services/transacoesService.js';
import NavbarTransacao from '@/components/NavbarTransacao.vue';
import MenuLateral from '@/components/MenuLateral.vue';
import ModalTransacaoVue from '@/components/ModalTransacao.vue';
import Comprovante from '@/components/Comprovante.vue';


export default {
    data() {
        return {
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
                valor: ''
            },
            nomeUsuario: '',
            valorSaldo: 0,
            tipoConta: '',
            cpfCnpj: '',
            isComprovanteOpen: false
        }
    },
    components: {
        NavbarTransacao,
        MenuLateral,
        ModalTransacaoVue,
        Comprovante,
    },
    computed: {
        imagemAtual() {
            return this.imagens[this.indiceAtual];
        },
    },
    mounted() {
        setInterval(() => {
            this.indiceAtual = (this.indiceAtual + 1) % this.imagens.length;
        }, 5000);
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
        this.valorSaldo = Number(sessionStorage.getItem('valorSaldo')) || 0;
        this.tipoConta = sessionStorage.getItem('tipoConta') || '';
        this.cpfCnpj = sessionStorage.getItem('cpfCnpj') || '';

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
                await transacaoService.realizarTransacao(this.transacao);
                this.openModal();
            } catch (error) {
                console.error(error);
            }
        },

    }
}
</script>

<style scoped>
.container {
    width: 1240px;
    height: 585px;

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

.content-transacoes-info p,
h4 {
    margin: 2px;
    padding: 2px;
}

.content-transacoes-info h4 {
    margin-top: 10px;
}

.section-banner {
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
    padding-left: 10px;
    height: 30px;
}

.form-row input:last-child {
    margin-right: 0;
    /* Remove o espaçamento do último input da linha */
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
    margin-top: 15px;
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

.btn-info-transacao{
    font-size: 14px;
    border: none;
    background-color: #fff;
    border-bottom: 2px solid #B2B0C8;
    color: #B2B0C8;
    cursor: pointer;
    width: 150px;
   
}

.btn-info-transacao:focus{
    border-bottom: 2px solid #06004F;
    color: #06004F;
    font-weight: bold;
}

</style>