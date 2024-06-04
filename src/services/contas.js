import http from './api'

export default {
    obterContas: async () => {
        const { data } = await http.get(`contas`)
        return data;
    },
    obterContasPorId: async (parametro) => {
        const { data } = await http.get(`contas/${parametro}`)
        return data;
    },
    cadastrarConta: async (parametro) => {
        const { data } = await http.post(`contas`, parametro)
        return data;
    },
}