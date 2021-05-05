export default {
  state: {
    message: 'hello vuex'
  },
  mutations: {
    setMessage (state, message) {
      state.message = message
    }
  },
  actions: {
    setMessage ({commit}, payload) {
      // через commit можем обращаться к мутациям.
      // в данном случае - к мутации setMessage
      commit('setMessage', payload)
    }
  },
  getters: {
    // создаём геттер и как параметр передаём стейт
    getMessage(state) {
      // и возвращаем значение из стейта
      return state.message
    }
  }
}