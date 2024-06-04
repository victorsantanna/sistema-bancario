import http from './api'

export default {
    obterTransacoes: async () => {
        const { data } = await http.get(`transacoes`)
        return data
    },
}