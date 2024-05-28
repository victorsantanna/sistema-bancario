<template>
    <div class="container">
        <div class="conteudo-login">
            <div class="conteudo-imagem-login">
                <img class="imagem-login" src="../assets/img/img-login/login.png" alt="">
            </div>
            <div class="conteudo-info-formulario">
                <h2>Acesse sua conta</h2>
                <form>
                    <div class="grupo-formulario">
                        <label for="cpf-cnpj">CPF/CNPJ</label>
                        <input type="text" id="cpf-cnpj" name="cpf-cnpj" placeholder="Insira seu CPF ou CNPJ" required>
                    </div>
                    <div class="grupo-formulario">
                        <label class="form-senha" for="senha">Senha</label>
                        <input type="password" id="senha" name="senha" placeholder="Insira sua senha" required>
                    </div>
                    <div class="grupo-formulario-check">
                        <input type="checkbox" id="lembrar" name="lembrar">
                        <label  for="lembrar">Lembrar de mim</label>
                    </div>
                    <div class="grupo-formulario-botao">
                        <button type="submit">Entrar</button>
                        <router-link to="/cadastro">
                            <button class="botao-naocliente" type="button" onclick="location.href='#'">Ainda não sou cliente</button>
                        </router-link>
                    </div>
                    <div class="grupo-formulario-esqueci">
                        <p>Esqueci minha senha</p>
                    </div>
                </form>
            </div>

        </div>
    </div>
    <footer>
        <div class="footer"></div>
    </footer>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
  name: 'HomeView',
  components: {
    RouterLink,
  }
}

</script>

<style scoped>

.container{
   font-family: 'Montserrat', sans-serif;
   margin-top: 10px;
   display: flex;
   flex-direction: row;
   justify-content:space-around;
   align-items: center;
   width:  1240px;
   height: 480px;
}
.conteudo-login{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 1250px;
}

.imagem-login{
   margin-top:80px;
   width: 436px;
   margin-right: 250px;
   
}

h2{
   color: #06004F;
   font-size: 28px;
}


.conteudo-info-formulario{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 160px;
    
}

form{
    display: flex;
    flex-direction: column;
    margin-right: 160px;

}

.grupo-formulario label{
   display: block;
   margin-top: 4px;
   margin-bottom: 2px; 
   color: #6B6B6B;
   font-weight: bold;
   font-size: 16px;
}

.grupo-formulario input{
    border: none;
    border-bottom: 1.3px solid #6B6B6B;
    margin-bottom: 13px;
    width: 324px;
    height: 28px;
    outline: none; 
}
.grupo-formulario input:focus {
    border-bottom: 2.2px solid #06004F; 
}

input[type="checkbox"] {
  accent-color: #06004F;
}

.grupo-formulario-check{
    display: flex;
    flex-direction: row;
}

.grupo-formulario-check label{
    color: #06004F;
    font-size: 14px;
    font-weight: 700;
    margin-top: 3px;
    margin-bottom: 4px;
}

.grupo-formulario-botao{
    margin-top: 10px;
    display: flex;
    flex-direction: column;

}
button[type="submit"]{
    background-color: #06004F;
    color: #E6E6ED;
    border: none;
    border-radius: 4px;
    width: 340px;
    height: 44px;
    font-weight: bold;
    cursor: pointer;
}

.botao-naocliente{
    width: 340px;
    height: 44px;
    margin-top:10px;
    border: 1.2px solid #06004F; 
    color: #06004F;
    border-radius: 4px;
    background-color: #fff;
    font-weight: bold;
    cursor: pointer;
}

.footer{
   margin-top: 30px;
    width: 1250px;
    height: 77px;
    background-color: #06004F;
    box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.2);
}

.grupo-formulario-esqueci{
    font-size: 15px;
    margin-top: 5px;
    font-weight: 500;
    color:#358EF7;
}

</style>