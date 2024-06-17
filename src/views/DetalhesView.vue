<template>
    <div class="container">
        <NavbarTransacao :nome-usuario="nomeUsuario" :valor-saldo="valorSaldo" :tipo-conta="tipoConta"
            :cpf-cnpj="cpfCnpj" />
        <div class="conteudo-corpo">
            <MenuLateral :nome-usuario="nomeUsuario" :tipo-conta="tipoConta" :cpf-cnpj="cpfCnpj" />
            <section class="content-section">
                <VueElementLoading :active="isLoading" :is-full-screen=true spinner="spinner" color="#06004F"
                    text="Carregando" duration="1" size="60" />
                <div class="content-info-section">
                    <div class="content-info-usuario">
                        <h3>Bem-vindo(a), {{ }}</h3>
                        <div class="content-saldo-usuario">
                            <p>Saldo em conta</p>
                            <img v-if="olhoFechado" @click="toggleOlho" class="img-olho"
                                src="../assets/img/img-detalhes/frame2.png" alt="olho" />
                            <img v-else @click="toggleOlho" class="img-olho"
                                src="../assets/img/img-detalhes/olhofechado.png" alt="olhofechado" />
                        </div>
                        <strong>
                            <p v-if="olhoFechado">{{ formatarMoeda(valorSaldo) }}</p>
                            <p v-else class="oculto">*********</p>
                        </strong>
                    </div>
                    <div class="content-transacoes-info">
                        <h3>Transações recentes</h3>
                        <div>
                            <div class="scroll-box">
                                <!-- <div v-for="(transaction, index) in transactions" :key="index"
                                    class="content-transacoes-usuario">
                                    <div class="content-transacoes-info">
                                        <h4>Transferência recebida</h4>
                                        <p>R$: {{ transaction.valor }}</p>
                                        <p>{{ transaction.contaDestino.usuario.nomeCompleto }}</p>
                                    </div>
                                    <div>
                                        <img src="../assets/img/img-detalhes/frame3.png" alt="">
                                    </div>
                                </div> -->
                                <div class="content-transacoes-usuario">
                                    <div class="content-transacoes-info">
                                        <h4>Transferência realizada</h4>
                                        <p>R$: 140,00</p>
                                        <p>Lucas Silva</p>
                                    </div>
                                    <div>
                                        <img src="../assets/img/img-detalhes/frame4.png" alt="">
                                    </div>
                                </div>
                                <div class="content-transacoes-usuario">
                                    <div class="content-transacoes-info">
                                        <h4>Transferência realizada</h4>
                                        <p>R$: 140,00</p>
                                        <p>Lucas Silva</p>
                                    </div>
                                    <div>
                                        <img src="../assets/img/img-detalhes/frame4.png" alt="">
                                    </div>
                                </div>
                                <div class="content-transacoes-usuario">
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

                    <BotaoSair class="btn-sair" />

                    <div>
                        <img class="section-banner" :src="imagemAtual" alt="">
                    </div>
                </div>
            </section>

        </div>
        <ModalBemVindo :open="exibirModalBemVindo" @close="handleClose"
            :nomeUsuario="capitalizarPrimeirasLetras(nomeUsuario)" />

    </div>


</template>

<script>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import VueElementLoading from 'vue-element-loading';
import contasService from '@/services/contasService.js';
import transacoesService from '@/services/transacoesService.js';
import NavbarTransacao from '@/components/NavbarTransacao.vue';
import MenuLateral from '@/components/MenuLateral.vue';
import BotaoSair from '@/components/BotaoSair.vue';
import ModalBemVindo from '@/components/ModalBemVindo.vue';

export default {
    components: {
        NavbarTransacao, MenuLateral, BotaoSair, ModalBemVindo, VueElementLoading,
    },
    data() {
        return {
            exibirModalBemVindo: false,

            isLoading: true,

            olhoFechado: true,

            indiceAtual: 0,
            imagens: [
                require('@/assets/img/img-detalhes/banner1.png'),
                require('@/assets/img/img-detalhes/banner2.png'),
                require('@/assets/img/img-detalhes/banner3.png')
            ],

            nomeUsuario: '',
            valorSaldo: 0,
            tipoConta: '',
            cpfCnpj: '',
            // transactions: [
            //     {
            //         contaDestino: {
            //             agencia: "",
            //             conta: "",
            //             id: '',
            //             saldo: '',
            //             usuario: {
            //                 cpfCnpj: '',
            //                 email: '',
            //                 id: '',
            //                 nomeCompleto: '',
            //                 tipo: '',
            //             }
            //         },
            //         contaOrigem: {
            //             agencia: '',
            //             conta: '',
            //             id: '',
            //             saldo: '',
            //             usuario: {
            //                 cpfCnpj: '',
            //                 email: '',
            //                 id: '',
            //                 nomeCompleto: '',
            //                 tipo: '',
            //             }
            //         },
            //         data: '',
            //         id: '',
            //         tipo: '',
            //         valor: '',
            //     },
            // ],

        }
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
        setTimeout(() => {
            this.isLoading = false;
        }, 1200);
        const modalExibido = sessionStorage.getItem('modalBemVindoExibido');
        if (!modalExibido) {
            this.exibirModalBemVindo = true; 
            sessionStorage.setItem('modalBemVindoExibido', 'true'); 
        };
    },
    created() {
        this.getContaPorId();
        this.getTransacoesPorId();
    },
    methods: {
        handleClose() {
            console.log('Modal close event received'); 
            this.exibirModalBemVindo = false;
        },
        capitalizarPrimeirasLetras(str) {
            return str.replace(/\b\w/g, char => char.toUpperCase());
        },
        toggleOlho() {
            this.olhoFechado = !this.olhoFechado;
        },
        async getTransacoes() {
            try {
                const response = await transacoesService.obterTransacoes();
                console.log(response);

                return response
            } catch (error) {
                console.error(error);
            }
        },
        async getContaPorId() {
            try {
                const idUsuario = sessionStorage.getItem('idUsuario');
                console.log('Id do usuário ' + idUsuario)
                const response = await contasService.obterContasPorId(idUsuario);
                console.log(response);

                sessionStorage.setItem('nomeUsuario', response.usuario.nomeCompleto);
                sessionStorage.setItem('valorSaldo', response.saldo);
                sessionStorage.setItem('tipoConta', response.usuario.tipo);
                sessionStorage.setItem('cpfCnpj', response.usuario.cpfCnpj);


                this.nomeUsuario = response.usuario.nomeCompleto;
                this.valorSaldo = response.saldo;
                this.tipoConta = response.usuario.tipo;
                this.cpfCnpj = response.usuario.cpfCnpj;


                return response
            } catch (error) {
                console.error(error);
            }
        },
        async getTransacoesPorId() {
            try {
                const idUsuario = sessionStorage.getItem('idUsuario');
                const response = await transacoesService.obterTransacaoPorId(idUsuario);
                console.log(response);

                return response
            } catch (error) {
                console.error(error);
            }
        },
        formatarMoeda(valor) {
            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
        },
        formatarCpfCnpj(cpfCnpj) {
            if (cpfCnpj && cpfCnpj.length === 11) {
                return cpfCnpj.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "***.$2.$3-**");
            } else if (cpfCnpj && cpfCnpj.length === 11) {
                return cpfCnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "**.$2.$3/****");
            } else {
                return cpfCnpj;
            }
        },

    },

}

</script>

<style scoped>
.container {
    width: 1240px;
    height: 585px;

}

.conteudo-corpo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.content-section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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
    margin-bottom: 40px;

}

.content-info-usuario p,
h3 {
    margin: 0;
    padding: 0;
}

.content-info-usuario h3 {
    margin-top: 40px;
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


}

.content-transacoes-info p,
h4 {
    margin: 0;
    padding: 0;
}

.content-transacoes-info h4 {
    margin-top: 30px;
}

.section-banner {
    width: 190px;
    margin-right: 60px;
}

.scroll-box {
    width: 100%;
    height: 300px;
    /* Defina a altura do box para ativar a rolagem */
    padding: 10px;
    border: 1px solid #000;
    border: none;
    background-color: #fff;
    overflow-y: scroll;
    /* Ativa a rolagem vertical */
    scrollbar-width: thin;

}

.scroll-box::-webkit-scrollbar {
    width: 12px;
    /* Largura da barra de rolagem */

}

.scroll-box::-webkit-scrollbar-track {
    background: #000000;
    /* Cor do trilho da barra de rolagem */
    border-radius: 10px;
    /* Remove as bordas */
}

.scroll-box::-webkit-scrollbar-thumb {
    background: #888;
    /* Cor do polegar da barra de rolagem */
    border-radius: 10px;
    /* Remove as bordas */
    border: none;
    /* Remove qualquer borda */

}

.section-secundaria {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
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
    margin-bottom: 30px;
}

.notificacao {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.img-olho {
    cursor: pointer;
}

.oculto {
    background-color: #D9D9D9;
    padding: 10px 20px;
    width: 100px;
    border-radius: 5px;
    display: inline-block;
    color: #D9D9D9;
}
</style>