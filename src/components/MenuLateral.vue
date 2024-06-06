<template>
    <aside>
        <span id="open-btn">
            <img src="../assets/img/img-detalhes/expandimenu.png" alt="menu">
        </span>
        <div class="aside-info">
            <router-link to="/detalhes">
                <div class="aside-content">
                    <img class="aside-icon" src="../assets/img/img-detalhes/frame5.png" alt="">
                    <p>Menu principal</p>
                </div>
            </router-link>
            <router-link to="transacao">
                <div class="aside-content">
                    <img class="aside-icon" src="../assets/img/img-detalhes/frame6.png" alt="">
                    <p>Realizar transação</p>
                </div>
            </router-link>
            <router-link to="/historico">
                <div class="aside-content">
                    <img class="aside-icon" src="../assets/img/img-detalhes/frame7.png" alt="">
                    <p>Histórico</p>
                </div>

            </router-link>
            <div class="aside-content">
                <img class="aside-icon" src="../assets/img/img-detalhes/frame8.png" alt="">
                <p>Cartões</p>
            </div>
            <div class="aside-content">
                <img class="aside-icon" src="../assets/img/img-detalhes/frame9.png" alt="">
                <p>Investimentos</p>
            </div>
        </div>
        <div class="aside-config">
            <div class="config-info">
                <img class="aside-icon" src="../assets/img/img-detalhes/frame10.png" alt="">
                <p>Configurações</p>
            </div>
            <div class="config-usuario">
                <div>
                    <img class="config-usuario-img" src="../assets/img/img-detalhes/Ellipse1.png" alt="">
                </div>
                <div class="config-usuario-info">
                    <p>Lucas Silva</p>
                    <button>LOJISTA</button>
                </div>
            </div>
        </div>
    </aside>
</template>


<style scoped>
aside {
    width: 200px;
    background-color: #05003F;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    height: 475px;

}

#open-btn {
    margin-left: 202px;
}

.aside-content {
    margin-bottom: 30px;
    cursor: pointer;
}

.aside-icon {
    width: 18px;
    height: 18px;
    margin-right: 10px;
}

.aside-content {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

/* Estilos para textos do menu */
aside p {
    margin: 0;
    font-size: 16px;
    color: #E6E6ED;
}

.aside-config {
    margin-top: 130px;
    padding-top: 20px;
}

.config-usuario {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    justify-content: center;

}

.config-usuario-img {
    width: 50px;
}

.config-usuario-info {
    margin-left: 20px;
    font-size: 20px;
    text-indent: -6px;
}

aside>div:last-child>div {
    display: flex;
    align-items: center;
}

aside>div:last-child img {

    border-radius: 50%;
}

aside>div:last-child p {
    margin-left: 10px;
    font-weight: bold;
}

aside>div:last-child button {
    background-color: #1D1393;
    border: .5px solid #3b348b;
    color: #E6E6ED;
    padding: 4px 18px;
    border-radius: 4px;
    cursor: pointer;
}

aside>div:last-child button:hover {
    background-color: #0056b3;
}
</style>