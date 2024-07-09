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
    margin-right: 15px;
    width: 198px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: box-shadow 0.3s ease;
}

.conteudo-entrar:hover {
    border: 1px solid #ffffff;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.4);
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
    margin-right: 2px;

}

.no-underline {
    text-decoration: none;
    margin-right: 50px;
}

/* media queries */
@media (max-width: 600px) {
    .container{
        width: 420px;
        gap: 120px;
        
    }
    .conteudo-logo .logo {
        width: 65px;
        height: 30px;
        margin-top: 5px;
        margin-left: 5px;
    }

    .conteudo-entrar {
        width: 150px;
        height: 40px;
        margin-top: 10px;
        border: 1px solid #fff;
        border-radius: 4px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .botao-entrar {
        font-size: 12px;
    }

    .imagem-frame {
        width: 20px;
        height: 20px;
    }
}

@media (min-width: 601px) and (max-width: 768px) {

    .container {
        flex-direction: row;
        height: auto;
        padding: 20px;
        width: 716px;
    }

    .conteudo-logo {
        margin: 0;

    }

    .conteudo-entrar {
        width: 100%;
        justify-content: center;
    }

    .botao-entrar {
        font-size: 14px;
    }

    .imagem-frame {
        width: 20px;
        height: 20px;
    }
}


</style>