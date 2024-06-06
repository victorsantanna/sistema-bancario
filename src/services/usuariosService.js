import http from './apiService'

export default {
    obterUsuarios: async () => {
        const { data } = await http.get(`usuarios`)
        return data
    },

    obterUsuarioPorCpfCnpj: async (parametro) => {
        const { data } = await http.get(`usuarios?cpfCnpj=${parametro}`)
        return data
    },

    cadastrarUsuario: async (parametro) => {
        const { data } = await http.post(`usuarios`, parametro)
        return data
    },

}