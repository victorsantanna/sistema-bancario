<template>
    <nav class="navbar-container">
        <router-link to="/">
            <div>
                <img class="navbar-logo" src="../assets/img/img-home/logo.png" alt="logo stefbank">
            </div>

        </router-link>
        <div class="navbar-info">
            <div class="navbar-info-usuario">
                <h4>{{ capitalizarPrimeirasLetras(nomeUsuario) }}</h4>
                <p>{{ formatarCpfCnpj(cpfCnpj) }}</p>
            </div>
            <div>
                <button type="button" class="navbar-botao">{{ this.tipoConta }}</button>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        nomeUsuario: {
            type: String,
            required: true
        },
        valorSaldo: {
            type: Number,
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
        formatarCpfCnpj(cpfCnpj) {
            if (cpfCnpj && cpfCnpj.length === 11) {
                return cpfCnpj.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "***.$2.$3-**");
            } else if (cpfCnpj && cpfCnpj.length === 14) {
                return cpfCnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "**.$2.$3/****");
            } else {
                return cpfCnpj;
            }
        },
        capitalizarPrimeirasLetras(str) {
            return str.replace(/\b\w/g, char => char.toUpperCase());
        }

    }
}



</script>

<style scoped>
nav {
    font-family: 'Montserrat', sans-serif;
    width: 1248px;
    height: 80px;
    background-color: #06004F;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.navbar-logo {
    margin-left: 60px;
    width: 120px;
}

.navbar-info {
    color: #E6E6ED;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 50px;
}

.navbar-info-usuario {
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

}

.navbar-info-usuario h4 {
    font-size: 16px;
}

.navbar-info-usuario p {

    font-size: 14px;
}

.navbar-info-usuario h4,
.navbar-info-usuario p {
    margin: 0;
    padding: 0;
}

.navbar-botao {
    background-color: #1D1393;
    border: .5px solid #3b348b;
    color: #E6E6ED;
    padding: 7px 20px;
    border-radius: 4px;
    
}
</style>