import Vue from 'vue'
import Vuex from 'vuex'

// объявление плагина
Vue.use(Vuex)

// импорт модуля
import example from './example'

// обращаемся к Vuex.Store
export default new Vuex.Store({
  modules: {
    example
  }
})