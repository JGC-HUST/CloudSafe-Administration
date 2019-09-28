import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import user from './module/user'
import app from './module/app'

// 注册vuex
Vue.use(Vuex)

// 导出state对象
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    user,
    app
  }
})
