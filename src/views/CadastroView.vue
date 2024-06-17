<template>
    <div class="container">
        <VueElementLoading :active="isLoading" :is-full-screen="true" spinner="spinner" color="#06004F"
            text="Carregando" duration="1" size="60" />
        <div class="content-cadastro">

            <div class="titulo-cadastro">
                <h2 class="titulo-cadastro-form">Realize seu cadastro</h2>
                <p class="subtitulo-paragrafo">DADOS PESSOAIS</p>
            </div>
            <div class="content-form-cadastro">
                <form>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="nome">Nome Completo</label>
                            <input
                                :class="{ 'input-error': erroNomeCompleto, 'input-success': !erroNomeCompleto && usuario.nomeCompleto }"
                                @blur="validarNomeCompleto" v-model="usuario.nomeCompleto" type="text" id="nome"
                                name="nome" placeholder="Informe o seu nome completo" required>
                            <p v-if="erroNomeCompleto" class="mensagem-erro">{{ erroNomeCompleto }}</p>
                        </div>
                        <div class="form-group">
                            <label for="cpfcnpj">CPF/CNPJ</label>
                            <input
                                :class="{ 'input-error': erroCpfCnpj, 'input-success': !erroCpfCnpj && usuario.cpfCnpj }"
                                v-model="usuario.cpfCnpj" v-mask="cpfCnpjMask" @blur="validarCpfCnpj" type="text"
                                id="cpfcnpj" name="cpfcnpj" placeholder="Informe seu CPF ou CNPJ" required>
                            <p v-if="erroCpfCnpj" class="mensagem-erro">{{ erroCpfCnpj }}</p>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="email">E-mail</label>
                            <input v-model="usuario.email" @blur="validarEmail" type="text" id="email" name="email"
                                placeholder="Informe o endereço de e-mail"
                                :class="{ 'input-error': erroEmail, 'input-success': !erroEmail && usuario.email }"
                                required>
                            <p v-if="erroEmail" class="mensagem-erro">{{ erroEmail }}</p>
                        </div>
                        <div class="form-group">
                            <label for="tipo">Tipo de conta</label>
                            <select v-model="usuario.tipo" id="tipo" name="tipo" @change="validarTipoConta"
                                :class="{ 'input-error': erroTipoConta, 'input-success': !erroTipoConta && usuario.tipo }">
                                <option class="tipo-conta-disabled" value="" disabled>Selecione o tipo de conta</option>
                                <option value="COMUM">COMUM</option>
                                <option value="LOJISTA">LOJISTA</option>
                            </select>
                            <p v-if="erroTipoConta" class="mensagem-erro">{{ erroTipoConta }}</p>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="senha">Senha</label>
                            <input v-model="usuario.senha" @blur="validarSenha" type="password" id="senha" name="senha"
                                placeholder="Escolha sua senha de acesso"
                                :class="{ 'input-error': erroSenha, 'input-success': !erroSenha && usuario.senha.length >= 8 }"
                                required>
                            <p v-if="erroSenha" class="mensagem-erro">{{ erroSenha }}</p>
                        </div>
                        <div class="form-group">
                            <label for="senha2">Repita a senha</label>
                            <input v-model="usuario.senhaRepetida" @blur="validarSenhaRepetida"
                                :class="{ 'input-error': erroSenhaRepetida, 'input-success': !erroSenhaRepetida && usuario.senha === usuario.senhaRepetida }"
                                type="password" id="senha2" name="senha2" placeholder="Repita sua senha de acesso">
                            <p v-if="erroSenhaRepetida" class="mensagem-erro">{{ erroSenhaRepetida }}</p>
                        </div>
                    </div>

                    <div class="form-group-btn">
                        <button @click="cadastrarUsuario" class="btn-finalizar-cadastro" type="button">Finalizar
                            cadastro</button>
                        <router-link to="/login">
                            <button class="btn-naocliente" type="button">Já sou cliente</button>
                        </router-link>
                    </div>
                </form>
            </div>
        </div>
        <div class="content-img-cadastro">
            <h2 class="texto-img">Prático, rápido e seguro</h2>
            <img class="img-cadastro" src="../assets/img/cadastro/imgcadastro.png" alt="logo cadastro">
        </div>
    </div>
    <footer>
        <div class="footer"></div>
    </footer>
</template>

<script>
import VueElementLoading from 'vue-element-loading';
import usuarioService from '@/services/usuariosService';
import contaService from '@/services/contasService';
export default {

    components: {
        VueElementLoading,
    },

    data() {
        return {
            erroTipoConta: '',
            erroEmail: '',
            erroNomeCompleto: '',
            erroCpfCnpj: '',
            erroSenha: '',
            erroSenhaRepetida: '',


            isLoading: true,

            usuario: {
                nomeCompleto: '',
                cpfCnpj: '',
                email: '',
                senha: '',
                tipo: '',
                senhaRepetida:'',
            },

            contaUsuario: {
                agencia: '',
                usuario: {
                    id: ''
                }
            },
        }
    },

    methods: {
        limparCpfCnpj(cpfCnpj) {
            return cpfCnpj.replace(/[^\d]/g, '');
        },

        validarSenhaRepetida() {
            if (this.usuario.senha !== this.usuario.senhaRepetida) {
                this.erroSenhaRepetida = 'As senhas não coincidem.';
            } else {
                this.erroSenhaRepetida = '';
            }
        },

        validarSenha() {
            if (this.usuario.senha.length < 8) {
                this.erroSenha = 'A senha deve conter pelo menos 8 caracteres.';
            } else {
                this.erroSenha = '';
            }
        },

        validarTipoConta() {
            if (!this.usuario.tipo) {
                this.erroTipoConta = 'Por favor, selecione o tipo de conta.';
            } else {
                this.erroTipoConta = '';
            }
        },

        validarEmail() {
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!this.usuario.email.match(regexEmail)) {
                this.erroEmail = 'E-mail inválido.';
            } else {
                this.erroEmail = '';
            }
        },

        validarNomeCompleto() {
            const nomeParts = this.usuario.nomeCompleto.trim().split(' ');
            if (nomeParts.length < 2) {
                this.erroNomeCompleto = 'Por favor, insira seu nome completo.';
            } else {
                this.erroNomeCompleto = '';
            }
        },

        validarCpfCnpj() {
            const cpfCnpj = this.limparCpfCnpj(this.usuario.cpfCnpj);
            if (cpfCnpj.length === 11 && this.validarCPF(cpfCnpj)) {
                this.erroCpfCnpj = '';
            } else if (cpfCnpj.length === 14 && this.validarCNPJ(cpfCnpj)) {
                this.erroCpfCnpj = '';
            } else {
                this.erroCpfCnpj = 'CPF ou CNPJ inválido.';
            }
        },

        async cadastrarUsuario() {

            this.validarNomeCompleto();
            this.validarCpfCnpj();
            this.validarTipoConta();
            this.validarEmail();
            this.validarSenha();
            

            if (this.erroNomeCompleto || this.erroCpfCnpj || this.erroEmail || this.erroTipoConta || this.erroSenha) {
                return;
            }

            this.usuario.cpfCnpj = this.limparCpfCnpj(this.usuario.cpfCnpj);

            try {
                const response = await usuarioService.cadastrarUsuario(this.usuario);
                console.log('Usuário cadastrado:', response);
                this.contaUsuario.usuario.id = response.id;
                this.contaUsuario.agencia = this.gerarNumeroAgencia();
                console.log('Dados da conta a ser cadastrada:', this.contaUsuario);
                await contaService.cadastrarConta(this.contaUsuario);
                console.log('Conta cadastrada com sucesso')
            } catch (error) {
                console.error('Erro ao cadastrar usuário ou conta:', error.message);
                if (error.response && error.response.data) {
                    this.error = error.response.data.messageUser || error.response.data.message || 'Erro ao cadastrar usuário';
                    console.error('Erro detalhado:', error.response.data.messageUser);
                }
            }
        },

        gerarNumeroAgencia() {
            return Math.floor(1000 + Math.random() * 9000).toString();
        },

        validarCPF(cpf) {
            // Função para validar CPF
            // Implementação de validação de CPF aqui (exemplo simples)
            return true; // Implementar lógica real de validação de CPF
        },

        validarCNPJ(cnpj) {
            // Função para validar CNPJ
            // Implementação de validação de CNPJ aqui (exemplo simples)
            return true; // Implementar lógica real de validação de CNPJ
        },
    },

    mounted() {
        
        setTimeout(() => {
            this.isLoading = false;
        }, 1200); 
    },

    computed: {
        cpfCnpjMask() {
            return this.usuario.cpfCnpj.length <= 14 ? '###.###.###-##' : '##.###.###/####-##';
        }
    },
}

</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 1208px;
    height: 520px;
}

.form-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
}

.titulo-cadastro {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-top: 20px;
}

.titulo-cadastro-form {
    margin: 0;
    padding: 0;
    color: #06004F;
    font-family: 'Montserrat', sans-serif;
    font-size: 25px;
}

.subtitulo-paragrafo {
    margin: 0;
    padding: 0;
    margin-top: 3px;
    font-size: 13.3px;
    color: #6B6B6B;
    font-weight: 500;
}

select {
    margin-bottom: 10px;
}

.content-form-cadastro {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 28px;
    width: 496px;
}

.content-img-cadastro {
    position: relative;
    width: 400px;
}

nav {
    width: 100px;
    height: 50px;
    display: flex
}

.img-cadastro {
    width: 444px;
    height: 590px;
}

.img-logo-cadastro {
    width: 120px;
    display: flex;
    flex-direction: row;
    margin: 15px;
}

.texto-img {
    position: absolute;
    z-index: 1;
    color: #E6E6ED;
    margin-left: 85px;
    font-size: 38px;
    margin-top: 50px;
}

.footer {
    width: 1240px;
    height: 70px;
    background-color: #06004F;
    box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.2);

}

form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

}

.form-group {
    flex: 0 0 48%;
}

.form-group input {
    border: none;
    border-bottom: 1.3px solid #6B6B6B;
    width: 224px;
    height: 28px;
    outline: none;
    margin-bottom: 10px;
    margin-top: 5px;
}

.form-group input:focus {
    border-bottom: 2.2px solid #06004F;
}

label {
    color: #6B6B6B;
    font-size: 15px;
    font-weight: 700;
}



#tipo {
    width: 224px;
    height: 28px;
    border: none;
    border-bottom: 1.3px solid #6B6B6B;
    outline: none;
    margin-top: 8px;
}

#tipo:focus {
    border-bottom: 2.2px solid #06004F;
}

.input-success {
    border-bottom: 2.2px solid #06004F !important;
}

.content-cadastro {
    width: 60%;
    margin-left: 68px;
    margin-top: 40px;
}

.btn-finalizar-cadastro {
    background-color: #06004F;
    color: #E6E6ED;
    border: none;
    border-radius: 4px;
    width: 240px;
    height: 44px;
    font-weight: bold;
    cursor: pointer;
    margin-right: 15px;
}

.btn-finalizar-cadastro:hover {
    background-color: #080065;
}

.btn-naocliente {
    width: 240px;
    height: 44px;
    border: 1.2px solid #06004F;
    color: #06004F;
    border-radius: 4px;
    background-color: #fff;
    font-weight: bold;
    cursor: pointer;
}

.mensagem-erro {
    color: #F24949;
    font-size: 12px;
    margin: 0px;
}

.input-error {
    border-bottom: 2.2px solid #F24949 !important;
}
</style>