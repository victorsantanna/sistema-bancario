<template>
    <div class="overlay">
        <div class="container">
            <nav>
                <img src="../assets/img/img-home/logo.png" alt="">
                <h3> - Comprovante de transferência entre contas</h3>
            </nav>
            <div class="content-comprovante">

                <div class="eminente">
                    <div class="form-row">
                        <label for="">Eminente</label>
                        <span>Victor Lima</span>
                    </div>
                    <div class="form-row">
                        <label for="">CPF/CNPJ</label>
                        <span>Victor Lima</span>
                        <label for="">Horário da transação</label>
                        <span>Victor Lima</span>
                    </div>
                    <div class="form-row">
                        <label for="">Agência</label>
                        <span>Victor Lima</span>
                        <label for="">Conta Corrente</label>
                        <span>Victor Lima</span>
                        <label for="">Data de Transação</label>
                        <span>Victor Lima</span>
                    </div>
                </div>
                <hr>
                <div class="destinatario">
                    <div class="form-row">
                        <label for="">destinatario</label>
                        <span>Victor Lima</span>
                    </div>
                    <div class="form-row">
                        <label for="">CPF/CNPJ</label>
                        <span>Victor Lima</span>
                        <label for="">Chave de Segurança</label>
                        <span>Victor Lima</span>
                    </div>
                    <div class="form-row">
                        <label for="">Agência</label>
                        <span>Victor Lima</span>
                        <label for="">Conta corrente</label>
                        <span>Victor Lima</span>
                    </div>

                </div>
            </div>

            <div class="btn-comprovantes">
                <button class="btn-baixar">baixar</button>
                <button>fechar</button>
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

.container {
    background-color: #fff;
    width: 700px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

nav {
    margin-bottom: 20px;
    background-color: #06004F;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;


}

img {
    width: 90px;
}

h3 {
    color: #DCDCDC;
    font-size: 15px;
    margin: 5px;
    margin-bottom: 3px;
}

.contant-comprovante {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.eminente,
.destinatario {
    width: 100%;

}

.form-row {
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;

}

label,
span {
    display: block;
    margin: 10px;
    margin-bottom: 8px;
    font-size: 16px;

}

span {
    padding: 6px 12px;
    color: #495057;
    background-color: #f4f4f4;
    border: 1px solid #ced4da;
    border-radius: 4px;
}

.btn-comprovantes {
    margin-top: 20px;
}


.btn-baixar {
    border: 1px solid #06004F;
    background-color: #fff;
    color: #06004F;
    cursor: pointer;
    margin-right: 12px;
    font-weight: bold;
    border-radius: 4px;
    width: 70px;
    height: 40px;
}
</style>