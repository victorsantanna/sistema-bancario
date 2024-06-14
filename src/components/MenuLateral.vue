<template>
    <aside :class="{ 'menu-closed': !isMenuOpen, 'menu-open': isMenuOpen }" ref="menuAside">
        <span id="open-btn" @click="toggleMenu">
            <img ref="menuButton"
                :class="{ 'expanded-img': isMenuOpen, 'closed-img': !isMenuOpen, 'rotated': !isMenuOpen }"
                src="../assets/img/img-detalhes/expandimenu.png" alt="menu">
        </span>
        <div class="aside-info">
            <router-link to="/detalhes" class="no-underline">
                <div class="aside-content">
                    <img class="aside-icon" src="../assets/img/img-detalhes/frame5.png" alt="">
                    <p v-if="isMenuOpen">Menu principal</p>
                </div>
            </router-link>
            <router-link to="transacao" class="no-underline">
                <div class="aside-content">
                    <img class="aside-icon" src="../assets/img/img-detalhes/frame6.png" alt="">
                    <p v-if="isMenuOpen">Realizar transação</p>
                </div>
            </router-link>
            <router-link to="/historico" class="no-underline">
                <div class="aside-content">
                    <img class="aside-icon" src="../assets/img/img-detalhes/frame7.png" alt="">
                    <p>Histórico</p>
                </div>

            </router-link>
            <div class="aside-content">
                <img class="aside-icon" src="../assets/img/img-detalhes/frame8.png" alt="">
                <p v-if="isMenuOpen">Cartões</p>
            </div>
            <div class="aside-content">
                <img class="aside-icon" src="../assets/img/img-detalhes/frame9.png" alt="">
                <p v-if="isMenuOpen">Investimentos</p>
            </div>
        </div>
        <div class="aside-config">
            <div class="config-info">
                <img class="aside-icon" src="../assets/img/img-detalhes/frame10.png" alt="">
                <p v-if="isMenuOpen">Configurações</p>
            </div>
            
        </div>
    </aside>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: true,
        }
    },
    props: {
        nomeUsuario: {
            type: String,
            required: true
        },
        tipoConta: {
            type: String,
            required: true
        },
        cpfCnpj: {
            type: String,
            required: true
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
            const aside = this.$refs.menuAside;
            const btn = this.$refs.menuButton;
            if (aside && btn) {
                if (this.isMenuOpen) {
                    aside.classList.remove('menu-closed');
                    btn.classList.remove('rotated');
                } else {
                    aside.classList.add('menu-closed');
                    btn.classList.add('rotated');
                }
            } else {
                console.error('Elementos não encontrados:', aside, btn);
            }
        },
    }
}
</script>


<style scoped>
aside {
    width: 200px;
    background-color: #05003F;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    height: 475px;
    transition: width 0.3s ease-out;

}

#open-btn {
    margin-left: 202px;
    transition: 0.3s ease;
    cursor: pointer;
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

.aside-icon:hover{
    width: 19px;
    height: 19px;
}

.aside-content {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
}

/* Estilos para textos do menu */
aside p {
    margin: 0;
    font-size: 16px;
    color: #E6E6ED;
    transition: font-size 0.3s;
    
}

aside p:hover{
    font-size: 17px;
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

.config-info {
    cursor: pointer;
}

.config-info {
    cursor: pointer;
}

.no-underline {
    text-decoration: none;
}

.menu-closed {
    width: 60px;
    transition: width 0.2s ease-in-out;
    
}

.menu-closed .aside-content p,
.menu-closed .config-info p,
.menu-closed .config-usuario-info p,
.menu-closed .config-usuario-info button {
    display: none;
    
}

.menu-closed .aside-content {
    justify-content: center;
}

.menu-closed .aside-icon {
    width: 21px;
    height: 21px;
    margin: 1px;
    transition: width 0.3s, height 0.3s;
}
.menu-closed .aside-icon:hover{
    width: 27px;
    height: 25px;
}

.menu-closed .aside-config {
    margin-top: 20px;
}

.menu-closed .config-info{
    margin-left: 15px;
    margin-top: 60px;
}

.rotated {
    transform: rotate(180deg);
    transition: transform 0.2s ease-in-out;
}

.menu-closed #open-btn {
    margin-left: 62px;
    transition: margin-left 0.2s ease-in-out;
    
}
</style>