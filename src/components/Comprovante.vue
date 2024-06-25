<template>
    <div class="overlay" v-if="open">
        <div class="container">
            <nav>
                <img src="../assets/img/img-home/logo.png" alt="">
                <h3> - Comprovante de transferência entre contas</h3>
            </nav>
            <div class="content-comprovante">

                <div class="eminente">
                    <div class="form-row-eminente">
                        <label for="">Eminente</label>
                        <span class="span-eminente">{{ transacao.eminente }}</span>
                    </div>
                    <div class="form-row">
                        <div class="row-uni">
                            <label for="">CPF/CNPJ</label>
                            <span class="span-cpfcnpj">{{ formatarCPFCNPJ(transacao.cpfCnpj) }}</span>
                        </div>
                        <div class="row-uni">
                            <label for="">Horário da transação</label>
                            <span class="span-horario">{{ transacao.horario }}</span>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="row-uni">
                            <label for="">Agência</label>
                            <span class="span-agencia">{{ transacao.agencia }}</span>

                        </div>
                        <div class="row-uni">
                            <label for="">Conta Corrente</label>
                            <span class="span-corrente">{{ transacao.contaCorrente }}</span>

                        </div>
                        <div class="row-uni">
                            <label for="">Data de Transação</label>
                            <span class="span-transacao">{{ transacao.dataTransacao }}</span>

                        </div>
                    </div>
                </div>

                <div class="destinatario">
                    <div class="form-row-destinatario">
                        <div>
                            <label for="">Destinatário</label>
                            <span class="span-destinatario">{{ transacao.destinatario }}</span>

                        </div>
                    </div>
                    <div class="form-row">
                        <div class="row-uni">
                            <label for="">CPF/CNPJ</label>
                            <span class="span-destinatário-cpfcnpj">{{ formatarCPFCNPJ(transacao.cpfCnpjDestinatario)
                                }}</span>

                        </div>
                        <div class="row-uni">
                            <label for="">Chave de Segurança</label>
                            <span class="span-destinatário-chave">{{ transacao.chaveSeguranca }}</span>

                        </div>
                    </div>
                    <div class="form-row">
                        <div class="row-uni">
                            <label for="">Agência</label>
                            <span class="span-destinatário-agencia">{{ transacao.agenciaDestinatario }}</span>

                        </div>
                        <div class="row-uni">
                            <label for="">Conta corrente</label>
                            <span class="span-destinatário-corrente">{{ transacao.contaCorrenteDestinatario }}</span>
                        </div>
                        <div class="row-uni">
                            <label for="">valor</label>
                            <span class="span-destinatário-valor">{{ formatarMoeda(transacao.valor) }}</span>
                        </div>
                    </div>

                </div>
            </div>

            <div class="btn-comprovantes">
                <button @click="baixarComprovante" class="btn-baixar">baixar</button>
                <button @click="closeModal" class="btn-fechar">fechar</button>
            </div>

        </div>
    </div>
    <div v-if="showModal" class="modal">
        <div class="modal-content">
            <p>Download realizado com sucesso!</p>
            <button class="close" @click="fecharModal">Fechar</button>
        </div>
    </div>

</template>

<script>

export default {
    data() {
        return {
            showModal: false
        };
    },
    props: {
        open: {
            type: Boolean,
            required: true
        },
        transacao: {
            type: Object,
            required: true
        },
        
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
        baixarComprovante() {
            this.showModal = true;
        },
        fecharModal() {
            this.showModal = false;
        },
        formatarMoeda(valor) {
            if (typeof valor === 'number') {
                return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
            } else {
                return valor;
            }
        },
        formatarCPFCNPJ(cpfCnpj) {
            
            // Remove caracteres não numéricos
            cpfCnpj = cpfCnpj.replace(/[^\d]/g, '');

            // Formata CPF (xxx.xxx.xxx-xx) e CNPJ (xx.xxx.xxx/xxxx-xx)
            if (cpfCnpj.length === 11) {
                return cpfCnpj.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
            } else if (cpfCnpj.length === 14) {
                return cpfCnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
            }

            // Retorna o valor original caso não seja CPF nem CNPJ válido
            return cpfCnpj;
        }
    },


}
</script>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    background-color: #fff;
    width: 90%;
    max-width: 700px;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}

nav {
    margin-bottom: 10px;
    background-color: #06004F;
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;

}

img {
    width: 90px;
    margin-right: 10px;
    margin-bottom: 5px;
}

h3 {
    color: #DCDCDC;
    font-size: 15px;

}

.content-comprovante {
    display: flex;
    flex-direction: column;


}



.form-row {
    display: flex;
    flex-direction: row;

}

.row-uni {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    flex: 1;
}

.info-row {
    display: flex;
    flex-direction: row;
}

label,
span {
    display: block;
    margin: 5px;
    margin-left: 25px;
    font-size: 14px;

}

span {
    padding: 5px 10px;
    color: #495057;
    background-color: #f4f4f4;
    border: 1px solid #ced4da;
    border-radius: 2px;
}

.span-eminente {
    width: 90%;
}

.span-cpfcnpj {
    width: 90%;
}

.span-horario {
    width: 80%;
}

.span-agencia {
    width: 85%;
}

.span-corrente {
    width: 85%;
}

.span-transacao {
    width: 70%;
}

.span-destinatario {
    width: 90%;
}

.span-destinatário-cpfcnpj {
    width: 90%;
}

.span-destinatário-chave {
    width: 80%;
}

.span-destinatário-agencia {
    width: 85%;
}

.span-destinatário-corrente {
    width: 85%;
}

.span-destinatário-valor {
    width: 70%;
}

.btn-comprovantes {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    margin-right: 30px;
    margin-bottom: 20px;


}


.btn-baixar {
    border: 1px solid #06004F;
    background-color: #fff;
    color: #06004F;
    cursor: pointer;
    margin-right: 12px;
    font-weight: bold;
    border-radius: 4px;
    width: 90px;
    height: 40px;
}

.btn-fechar {
    margin-left: 5px;
    width: 90px;
    height: 40px;
    border: 1.2px solid #06004F;
    color: #DCDCDC;
    border-radius: 4px;
    background-color: #06004F;
    font-weight: bold;
    cursor: pointer;
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