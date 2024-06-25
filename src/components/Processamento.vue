<template>
    <div class="overlay">
        <div class="modal">
            <nav>
                <img class="img-modal" src="../assets/img/img-home/logo.png" alt="logo bank">
            </nav>
            <div class="content-modal">
                <h3>Transferência em processamento.<br> Por favor, aguarde um momento.</h3>
                <img src="../assets/img/relogio.png" alt="relogio">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background-color: #fff;
    width: 90%;
    max-width: 500px;
    height: auto;
    max-height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    overflow-y: auto;
}

nav {
    margin-bottom: 20px;
    background-color: #06004F;
    height: 50px;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
}

h3{
    font-size: 20px;
    margin-left: 20px;
}

.img-modal {
    width: 90px;
}

.content-modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

.content-modal img {
    width: 120px;
    margin-bottom: 25px;
}

.btn-comprovante {
    height: 34px;
    width: 150px;
    border: 1.2px solid #06004F;
    color: #fff;
    border-radius: 4px;
    background-color: #06004F;
    font-weight: bold;
    cursor: pointer;
    margin: 5px;
}

.btn-fechar {
    margin-left: 5px;
    width: 150px;
    height: 34px;
    border: 1.2px solid #06004F;
    color: #06004F;
    border-radius: 4px;
    background-color: #DCDCDC;
    font-weight: bold;
    cursor: pointer;
}

.btn-info {
    margin-bottom: 40px;
}
</style>