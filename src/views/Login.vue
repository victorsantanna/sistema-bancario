<template>
    <VueElementLoading :active="isLoading" :is-full-screen="true" spinner="spinner" color="#06004F" text="Carregando"
        duration="1" size="60" />
    <div class="container">
        <div class="conteudo-login">
            <div class="conteudo-imagem-login">
                <img class="imagem-login" src="../assets/img/img-login/login.png" alt="Imagem login" loading="lazy">
            </div>
            <div class="conteudo-info-formulario">
                <h2>Acesse sua conta</h2>

                <div class="grupo-formulario">
                    <label for="cpf-cnpj">CPF/CNPJ</label>
                    <div class="input-with-error" :class="{ 'input-error': erroLogin }">
                        <input v-model="cpfCnpj" v-mask="cpfCnpjMask" type="text" id="cpf-cnpj" name="cpf-cnpj"
                            placeholder="Insira seu CPF ou CNPJ">
                        <div class="icon-error" v-if="erroLogin">
                            <img src="../assets/img/erromsg.png" alt="Ícone de erro">
                        </div>
                    </div>
                    <p v-if="erroLogin" class="mensagem-erro">{{ erroLogin }}</p>
                </div>
                <div class="grupo-formulario">
                    <label class="form-senha" for="senha">Senha</label>
                    <input type="password" id="senha" name="senha" placeholder="Insira sua senha">
                </div>
                <div class="grupo-formulario-check">
                    <input type="checkbox" id="lembrar" name="lembrar">
                    <label for="lembrar">Lembrar de mim</label>
                </div>
                <div class="grupo-formulario-botao">
                    <!--<router-link to="/detalhes">>-->
                    <button class="btn-login" @click="loginPorCpfCnpj()">Entrar</button>
                    <!--</router-link>-->
                    <router-link to="/cadastro">
                        <button class="botao-naocliente" type="button" onclick="location.href='#'">Ainda não sou
                            cliente</button>
                    </router-link>
                </div>
                <div class="grupo-formulario-esqueci">
                    <p class="link-esqueceu-senha">Esqueci minha senha</p>
                </div>

            </div>

        </div>
    </div>
    <footer>
        <div class="footer"></div>
    </footer>
</template>

<script>
import { RouterLink } from 'vue-router';
import VueElementLoading from 'vue-element-loading';
import usuarioService from '@/services/usuariosService';
export default {
    name: 'HomeView',
    components: {
        RouterLink, VueElementLoading,
    },
    data() {
        return {
            cpfCnpj: '',
            isLoading: true,
            erroLogin: '',
        }
    },
    methods: {
        async loginPorCpfCnpj() {
            try {
                const response = await usuarioService.obterUsuarioPorCpfCnpj(this.cpfCnpj.replace(/[^\d]/g, ''));
                if (response.content[0].id != undefined) {
                    sessionStorage.clear();
                    sessionStorage.setItem('idUsuario', response.content[0].id);
                    this.$router.push({ name: 'detalhes' })
                } else {
                    this.erroLogin = 'Usuário não encontrado';
                    this.limparErroAposTempo(5000);
                }
            } catch (error) {
                console.error(error);
                this.erroLogin = 'Usuário não encontrado';
                this.limparErroAposTempo(5000);
            } finally {
                this.isLoading = false;
            }
        },
        limparErroAposTempo() {
            setTimeout(() => {
                this.erroLogin = '';
            }, 5000);
        },
    },
    computed: {
        cpfCnpjMask() {
            return this.cpfCnpj.length <= 14 ? '###.###.###-##' : '##.###.###/####-##';
        }
    },
    mounted() {
        
        setTimeout(() => {
            this.isLoading = false;
        }, 1200); 
    }
}


</script>

<style scoped>
.container {
    font-family: 'Montserrat', sans-serif;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 1208px;
    height: 480px;
}

.conteudo-login {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 1208px;
}

.imagem-login {
    margin-top: 80px;
    width: 436px;
    margin-right: 220px;

}

.input-with-error input[type="text"] {
     /* Padding right increased to make room for the icon */
    margin: 0;
    padding: 0;
   
    
}

.input-error {
    border-bottom: 3px solid #F24949 !important;
}

.input-error input[type="text"] {
   
    border: none; /* Remove qualquer sombra de caixa */
}

.input-with-error {
    position: relative;
    display: flex;
    align-items: center;
}


.icon-error {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}

.icon-error img {
    width: 20px;
    height: auto;
}



.mensagem-erro {
    color: #F24949;
    font-size: 14px;
    margin: 0;
    padding: 0;
    margin-top: 10px;

}


h2 {
    color: #06004F;
    font-size: 28px;
    margin: 0;
}


.conteudo-info-formulario {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 260px;

}

form {
    display: flex;
    flex-direction: column;
    margin-right: 160px;

}

.grupo-formulario label {
    display: block;
    margin-top: 20px;
    margin-bottom: 4px;
    color: #6B6B6B;
    font-weight: bold;
    font-size: 16px;
}

.grupo-formulario input {
    border: none;
    border-bottom: 1.3px solid #6B6B6B;
    margin-bottom: 10px;
    width: 324px;
    height: 28px;
    outline: none;
    font-size: 14px;
    background-color: transparent;
}

.grupo-formulario input:focus {
    border-bottom: 3px solid #06004F;
    background: none;
}

input[type="checkbox"] {
    accent-color: #06004F;
}

.grupo-formulario-check {
    display: flex;
    flex-direction: row;
}

.grupo-formulario-check label {
    color: #06004F;
    font-size: 14px;
    font-weight: 700;
    margin-top: 3px;
    margin-bottom: 4px;
}

.grupo-formulario-botao {
    margin-top: 10px;
    display: flex;
    flex-direction: column;

}

.btn-login {
    background-color: #06004F;
    color: #E6E6ED;
    border: none;
    border-radius: 4px;
    width: 340px;
    height: 44px;
    font-weight: bold;
    cursor: pointer;
}

.btn-login:hover {
    background-color: #080065;
}

.botao-naocliente {
    width: 340px;
    height: 44px;
    margin-top: 10px;
    border: 1.2px solid #06004F;
    color: #06004F;
    border-radius: 4px;
    background-color: #fff;
    font-weight: bold;
    cursor: pointer;
}

.footer {
    margin-top: 30px;
    width: 1248px;
    height: 77px;
    background-color: #06004F;
    box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.2);
}

.grupo-formulario-esqueci {
    font-size: 15px;
    margin-top: 2px;
    font-weight: 500;
    color: #358EF7;
    cursor: pointer;
    
}

.grupo-formulario-esqueci:hover{
    color: #06004F;
    font-weight: bold;
}
</style>