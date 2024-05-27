<template>
    <nav>
        <img src="../assets/img/cadastro/logocadastro.png" alt="">
    </nav>
    <div class="container">
        <div class="content-cadastro">
            <div class="titulo-cadastro">
                <h2>Realize seu cadastro</h2>
                <p>dados pessoais</p>
            </div>
            <div class="content-form-cadastro" >
                <form >
                    <div class="form-group">
                        <label for="nome">Nome Completo</label>
                        <input type="text" id="nome" name="nome" placeholder="Informe o seu nome completo" required>
                    </div>
                    <div class="form-group">
                        <label for="cpfcnpj">CPF/CNPJ</label>
                        <input type="text" id="cpfcnpj" name="cpfcnpj" placeholder="Informe seu CPF ou CNPJ" required>
                    </div>
                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input type="text" id="email" name="email" placeholder="Informe o endereço de e-mail" required>
                    </div>
                    <div class="form-group">
                        <label for="celular">Celular</label>
                        <input type="text" id="celular" name="celular" placeholder="Informe o número de celular" required>
                    </div>
                    <div class="form-group">
                        <label for="senha">Senha</label>
                        <input type="password" id="senha" name="senha" placeholder="Escolha sua senha de acesso" required>
                    </div>
                    <div class="form-group">
                        <label for="senha2">Repita a senha</label>
                        <input type="password" id="senha2" name="senha2" placeholder="Repita sua senha de acesso" required>
                    </div>
                </form>
            </div>
        </div>
        <div class="content-img-cadastro">
            <h2>Prático, rápido e seguro</h2>
            <img  class="img-cadastro" src="../assets/img/cadastro/imgcadastro.png" alt="logo cadastro">

        </div>

    </div>
    <footer>
        <div class="footer"></div>
    </footer>
</template>

<script>

</script>

<style scoped>

.container{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.img-cadastro{
    width: 200px;
}

.footer{
    margin-top: 41px;
    width: 1000px;
    height: 40px;
    background-color: #06004F;
    box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.2);
}
form{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
    
}
.form-group {
  flex: 0 0 48%; 
  margin-bottom: 16px; 
}
</style>