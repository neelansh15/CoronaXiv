import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    getURL: "https://corona-xiv.herokuapp.com/?title=",
    loading: false
  },
  mutations: {
    setLoading(state){
      state.loading = true
    },
    setNotLoading(state){
      state.loading = false
    }
  },
  actions: {
    setLoading(context){
      context.commit('setLoading')
    },
    setNotLoading(context){
      context.commit('setNotLoading')
    }
  },
  modules: {
  }
})
