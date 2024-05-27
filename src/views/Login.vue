<template>
    <div class="container">
        <div class="content-img-login">
            <img class="img-login" src="../assets/img/img-login/login.png" alt="">
        </div>
        <div class="content-info-form">
            <h2>Acesse sua conta</h2>
            <form>
                <div class="form-group">
                    <label for="cpf-cnpj">CPF/CNPJ</label>
                    <input type="text" id="cpf-cnpj" name="cpf-cnpj" placeholder="Insira seu CPF ou CNPJ" required>
                </div>
                <div class="form-group">
                    <label class="form-senha" for="senha">Senha</label>
                    <input type="password" id="senha" name="senha" placeholder="Insira sua senha" required>
                </div>
                <div class="form-group-check">
                    <input type="checkbox" id="lembrar" name="lembrar">
                    <label  for="lembrar">Lembrar de mim</label>
                </div>
                <div class="form-group-btn">
                    <button type="submit">Entrar</button>
                    <router-link to="/cadastro">
                        <button class="btn-naocliente" type="button" onclick="location.href='#'">Ainda não sou cliente</button>
                    </router-link>
                </div>
                <div class="form-group-esqueci">
                    <p>Esqueci minha senha</p>
                </div>
            </form>
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
    width: 990px;
    height: 385px;
}

h2{
    color: #06004F;
}

.img-login{
    margin-top: 80px;
   margin-right: 60px;
    width: 505px;
    height: 472px;
}

.content-info-form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px;
    margin-right: 150px;
    padding: 10px;
}

form{
    display: flex;
    flex-direction: column;
}

.form-group label{
   display: block;
   margin-top: 4px;
   margin-bottom: 2px; 
   color: #6B6B6B;
   font-weight: bold;
   font-size: 13px;
}

.form-group input{
    border: none;
    border-bottom: 1.3px solid #6B6B6B;
    margin-bottom: 13px;
    width: 224px;
    height: 28px;
    outline: none; 
}
.form-group input:focus {
    border-bottom: 2.2px solid #06004F; 
}

input[type="checkbox"] {
  accent-color: #06004F;
}

.form-group-check{
    display: flex;
    flex-direction: row;
}

.form-group-check label{
    color: #06004F;
    font-size: 12px;
    font-weight: 700;
    margin-top: 3px;
    margin-bottom: 4px;
}

.form-group-btn{
    margin-top: 10px;
    display: flex;
    flex-direction: column;

}
button[type="submit"]{
    background-color: #06004F;
    color: #E6E6ED;
    border: none;
    border-radius: 4px;
    width: 240px;
    height: 44px;
    font-weight: bold;
    cursor: pointer;
}

.btn-naocliente{
    width: 240px;
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
    margin-top: 41px;
    width: 1000px;
    height: 40px;
    background-color: #06004F;
    box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.2);
}

.form-group-esqueci{
    font-size: 12px;
    margin-top: 5px;
    font-weight: 500;
    color:#358EF7;
}

</style>