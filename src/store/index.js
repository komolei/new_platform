import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'


// import state from './state'
Vue.use(Vuex)

export default new Vuex.Store({
    // state,
    modules: {
        user
    }

})