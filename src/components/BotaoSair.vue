<template>
    <router-link to="/" class="no-underline">
        <div class="botao-sair" @click="limparSessionStorage">
            <button class="btn-sair" > Sair</button>
            <img src="../assets/img/img-detalhes/frame12.png" alt="">
        </div>
    </router-link>
</template>

<script>
export default {
    methods:{
        limparSessionStorage(){
            sessionStorage.clear();
        }
    }
}
</script>

<style scoped>
.botao-sair {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-right: 50px;
    margin-bottom: 30px;
    width: 98px;
    height: 28px;
    border: 1px solid #06004F;
    border-radius: 4px;

    align-items: center;
}

.btn-sair {
    border: none;
    background-color: #fff;
    color: #06004F;
    cursor: pointer;
    margin-right: 12px;
    font-weight: bold;
}

.no-underline {
    text-decoration: none;
}
</style>