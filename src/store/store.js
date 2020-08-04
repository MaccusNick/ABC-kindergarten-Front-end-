import Vue from 'vue'
import Vuex from 'vuex'
// import Cookie from 'vue-cookies'

Vue.use(Vuex)

export default new Vuex.Store({
    // 组件中通过 this.$store.state.username 调用
    state: {
        username: null,
        token: null,
    },
})
