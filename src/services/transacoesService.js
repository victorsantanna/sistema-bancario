import http from './apiService'

export default {
    obterTransacoes: async () => {
        const { data } = await http.get(`transacoes`)
        return data
    },

    obterTransacaoPorId: async (parametro) => {
        const { data } = await http.get(`transacoes/${parametro}`)
        return data
    },

    realizarTransacao: async (parametro) => {
        const { data } = await http.post(`transacoes/fazer-transferencias`, parametro)
        return data
    },
    obterTransacoesCompleta: async (parametro) => {
        const { data } = await http.get(`transacoes?id=${parametro}`)
        return data
    },
}