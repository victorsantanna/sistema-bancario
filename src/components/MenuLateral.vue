<template>
     <aside>
            <span id="open-btn">
                <img src="../assets/img/img-detalhes/expandimenu.png" alt="menu">
            </span>
            <div class="aside-info">
                <div class="aside-content">
                    <img class="aside-icon" src="../assets/img/img-detalhes/frame5.png" alt="">
                    <p>Menu principal</p>
                </div>
                <div class="aside-content">
                    <img class="aside-icon" src="../assets/img/img-detalhes/frame6.png" alt="">
                    <p>Realizar transação</p>
                </div>
                <div class="aside-content">
                    <img class="aside-icon" src="../assets/img/img-detalhes/frame7.png" alt="">
                    <p>Histórico</p>
                </div>
                <div class="aside-content">
                    <img  class="aside-icon" src="../assets/img/img-detalhes/frame8.png" alt="">
                    <p>Cartões</p>
                </div>
                <div class="aside-content">
                    <img class="aside-icon" src="../assets/img/img-detalhes/frame9.png" alt="">
                    <p>Investimentos</p>
                </div>
            </div>
            <div class="aside-config">
                <div>
                    <img class="aside-icon" src="../assets/img/img-detalhes/frame10.png" alt="">
                    <p>Configurações</p>
                </div>
                <div>
                    <img src="../assets/img/img-detalhes/Ellipse1.png" alt="">
                    <p>Lucas Silva</p>
                    <button>LOJISTA</button>
                </div>
            </div>
        </aside>
</template>


<style scoped>
aside{
    width: 220px;
    background-color: #05003F;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    height: 475px;
    
}
#open-btn{
    margin-left: 222px;
}

.aside-content{
    margin-bottom: 30px;
    cursor: pointer;
}
.aside-icon{
    width: 18px;
    height: 18px;
    margin-right: 10px;
}

.aside-content{
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

        /* Estilos para o perfil do usuário */
        aside > div:last-child {
            margin-top: 20px;
            padding-top: 20px;
           
        }

        aside > div:last-child > div {
            display: flex;
            align-items: center;
        }

        aside > div:last-child img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }

        aside > div:last-child p {
            margin-left: 10px;
            font-weight: bold;
        }

        aside > div:last-child button {
            background-color: #1D1393;
    border: .5px solid #3b348b;
    color: #E6E6ED;
    padding: 7px 25px;
    border-radius: 4px;
    cursor: pointer;
        }

        aside > div:last-child button:hover {
            background-color: #0056b3;
        }



</style>