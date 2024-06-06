<template>

    <div class="container">
        <div class="conteudo-logo">
            <img class="logo" src="../assets/img/img-home/logo.png" alt="logo">
        </div>
        <RouterLink to="/login" class="no-underline">
            <div class="conteudo-entrar">

                <button class="botao-entrar">Acesse sua conta</button>
                <img class="imagem-frame" src="../assets/img/img-home/Frame.png" alt="imagem frame">
            </div>
        </RouterLink>
    </div>

</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    components: {
        RouterLink,
    }
}
</script>

<style scoped>
.container {
    font-family: 'Montserrat', sans-serif;
    width: 1248px;
    height: 80px;
    background-color: #06004F;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.conteudo-logo {
    margin-left: 50px;
}

.logo {
    width: 110px;
    height: 22px;

}

.conteudo-entrar {
    margin-top: 5px;
    margin-right: 50px;
    width: 198px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.botao-entrar {
    border: none;
    background-color: #06004F;
    color: #E6E6ED;
    cursor: pointer;

}

.imagem-frame {
    width: 22px;
    height: 22px;
    cursor: pointer;
    margin-top: 2px;

}

.no-underline {
    text-decoration: none;
}
</style>