import http from './api'

export default {
    obterContas: async () => {
        const { data } = await http.get(`contas`)
        return data
    },
}