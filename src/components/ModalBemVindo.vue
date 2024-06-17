<template>
    <div v-if="open" class="overlay">
        <div class="modal">
            <nav>
                <img class="img-modal" src="../assets/img/img-home/logo.png" alt="logo bank">
            </nav>
            <div class="content-modal">
                <div class="content-modal-info">
                    <h3>Olá, {{ nomeUsuario }}</h3>
                    <p>Seja muito bem-vindo ao <strong>StefBank!</strong></p>
                    <p>Estamos emocionados em tê-lo como nosso cliente e esperamos que você aproveite ao máximo a sua
                        experiência bancária conosco.</p>
                    <p>No <strong>StefBank!</strong>, nossa prioridade é fornecer a você serviços bancários seguros,
                        convenientes e
                        inovadores. Queremos simplificar sua vida financeira e ajudá-lo a alcançar seus objetivos
                        financeiros de maneira eficaz</p>
                    <p>Explore nosso aplicativo para descobrir uma variedade de recursos, incluindo:</p>

                    <ul>
                        <li>Verificação de saldo e histórico de transações</li>
                        <li>Transferências rápidas e seguras</li>
                        <li>Pagamento de contas com facilidade</li>
                        <li>Investimentos inteligentes</li>
                        <li>E muito mais!</li>
                    </ul>

                </div>
                <div class="btn-avançar">
                    <button @click="closeModal">Avançar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        open: {
            type: Boolean,
            required: false
        },
        nomeUsuario: {
            type: String,
            required: true
        },
    },
    methods: {
        closeModal() {
            console.log('closeModal called');
            this.$emit('close');
        }
    },
}
</script>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background-color: #fff;
    width: 90%;
    max-width: 700px;
    height: auto;
    max-height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

}

.content-modal {
    padding: 10px;
    margin: 10px;

}

.content-modal-info {
    font-size: 15px;
}

ul {
    margin-bottom: 2px;
}

nav {

    background-color: #06004F;
    height: 60px;
    width: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.img-modal {
    width: 100px;
}

.btn-avançar {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

}

button {
    height: 34px;
    width: 120px;
    border: 1.2px solid #06004F;
    color: #fff;
    border-radius: 4px;
    background-color: #06004F;
    font-weight: bold;
    cursor: pointer;
    margin-right: 20px;
    margin-bottom: 15px;

}

button:hover {
    background-color: #080065;
}
</style>