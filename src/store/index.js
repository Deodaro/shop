import Vue from 'vue'
import Vuex from 'vuex'

// объявление плагина
Vue.use(Vuex)

// импорт модуля
import shop from './shop'

// обращаемся к Vuex.Store
export default new Vuex.Store({
  modules: {
    shop
  }
})