<template>
     <nav class="navbar-container">
            <router-link to="/" >
                <div>
                    <img class="navbar-logo" src="../assets/img/img-home/logo.png" alt="logo stefbank">
                </div>

            </router-link>
            <div class="navbar-info">
                <div class="navbar-info-usuario">
                    <h4>Lucas Silva</h4>
                    <p>***26320</p>
                </div>
                <div>
                    <button type="button" class="navbar-botao">LOJISTA</button>
                </div>
            </div>
        </nav>
</template>

<script>

</script>

<style scoped>
    nav{
    font-family: 'Montserrat', sans-serif;
    width: 1248px;
    height: 80px;
    background-color: #06004F;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
}

.navbar-logo{
    margin-left: 60px;
    width: 120px;
}

.navbar-info{
    color: #E6E6ED;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    margin: 50px;
}
.navbar-info-usuario{
    margin: 20px;
    
}

.navbar-info-usuario h4{
    font-size: 16px;
}

.navbar-info-usuario p{
    text-indent: 33px;
    font-size: 14px;
}

.navbar-info-usuario h4,
.navbar-info-usuario p {
  margin: 0;
  padding: 0;
}

.navbar-botao{
    background-color: #1D1393;
    border: .5px solid #3b348b;
    color: #E6E6ED;
    padding: 7px 20px;
    border-radius: 4px;
    cursor: pointer;
}
</style>