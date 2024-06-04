<template>
    <div class="container">
        <div class="content-cadastro">
            <img class="img-logo-cadastro" src="../assets/img/cadastro/logocadastro.png" alt="">
            <div class="titulo-cadastro">
                <h2 class="titulo-cadastro-form">Realize seu cadastro</h2>
                <p class="subtitulo-paragrafo">DADOS PESSOAIS</p>
            </div>
            <div class="content-form-cadastro">
                <form>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="nome">Nome Completo</label>
                            <input v-model="usuario.nomeCompleto" type="text" id="nome" name="nome"
                                placeholder="Informe o seu nome completo" required>
                        </div>
                        <div class="form-group">
                            <label for="cpfcnpj">CPF/CNPJ</label>
                            <input v-model="usuario.cpfCnpj" type="text" id="cpfcnpj" name="cpfcnpj"
                                placeholder="Informe seu CPF ou CNPJ" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="email">E-mail</label>
                            <input v-model="usuario.email" type="text" id="email" name="email"
                                placeholder="Informe o endereço de e-mail" required>
                        </div>
                        <div class="form-group">
                            <label for="celular">Tipo</label>
                            <input v-model="usuario.tipo" type="text" id="senha3" name="senha3"
                                placeholder="tipo da conta" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="senha">Senha</label>
                            <input v-model="usuario.senha" type="password" id="senha" name="senha"
                                placeholder="Escolha sua senha de acesso" required>
                        </div>
                        <div class="form-group">
                            <label for="senha2">Repita a senha</label>
                            <input type="password" id="senha2" name="senha2" placeholder="Repita sua senha de acesso">
                        </div>
                    </div>
                    <div class="">
                        <label for="conta">Conta</label>
                        <input v-model="contaUsuario.agencia" type="text" id="conta" name="conta"
                            placeholder="insira sua conta" max-length="4">
                    </div>

                    <div class="form-group-btn">
                        <button @click="cadastrarUsuario" type="submit">Finalizar cadastro</button>
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
import usuarioService from '@/services/usuarios';
import contaService from '@/services/contas';
export default {
    data() {
        return {
            usuario: {
                nomeCompleto: '',
                cpfCnpj: '',
                email: '',
                senha: '',
                tipo: '',
            },
            contaUsuario: {
                agencia: '',
                usuario: {
                    id: ''
                }
            }
        }
    },
    methods: {
        async cadastrarUsuario() {
            try {
                const response = await usuarioService.cadastrarUsuario(this.usuario);
                this.contaUsuario.usuario.id = response.id;
                await contaService.cadastrarConta(this.contaUsuario);
            } catch (error) {
                console.error(error.message);
                if (error.response && error.response.data) {
                    this.error = error.response.data.messageUser || error.response.data.message || 'Erro ao cadastrar usuário';
                    console.error('Erro detalhado:', error.response.data.messageUser);
                }
            }
        }
     }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 1240px;
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
    margin-top: 40px;
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

.content-form-cadastro {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 30px;
    width: 500px;
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
    width: 420px;
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
    margin-bottom: 20px;
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

.content-cadastro {
    width: 60%;
    margin-left: 68px;
}

button[type="submit"] {
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
</style>