<template>
    <div class="container">
        <div class="content-logo">
            <img class="logo" src="../assets/img/logo.png" alt="logo">
        </div>
        <div class="content-entrar">
            <RouterLink to="/login">
                <button class="btn-entrar">Acesse sua conta</button>
            </RouterLink>
                <img class="img-frame" src="../assets/img/Frame.png" alt="">
        </div>

    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
export default{
    components:{
        RouterLink,
    }
}
</script>

<style scoped>
.container{
    font-family: 'Montserrat', sans-serif;
    width: 1000px;
    height: 70px;
    background-color: #06004F;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
}
.content-logo{
    margin-left: 50px;
}
.logo{
    width: 89px;
    height: 22px;
}
.content-entrar{
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
.btn-entrar{
    border: none;
    background-color: #06004F;
    color: #E6E6ED;
    cursor: pointer;
    
}
.img-frame{
    width: 22px;
    height: 22px;
    cursor: pointer;
    margin-top: 2px;
    
}
</style>