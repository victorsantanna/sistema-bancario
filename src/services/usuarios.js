import http from './api'

export default {
    obterUsuarios: async () => {
        const { data } = await http.get(`usuarios`)
        return data
    },

    cadastrarUsuario: async (parametro) => {
        const { data } = await http.post(`usuarios`, parametro)
        return data
    },

    obterUsuarioPorCpfCnpj: async (parametro) => {
        const { data } = await http.get(`usuarios?cpfCnpj=${parametro}`)
        return data
    },
}