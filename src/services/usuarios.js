import http from './api'

export default {
    obterUsuarios: async () => {
        const { data } = await http.get(`usuarios`)
        return data
    },
}