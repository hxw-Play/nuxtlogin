import Vue from "vue";
import Vuex from "vuex";
import cookies from "js-cookie"
Vue.use(Vuex);

Vue.prototype.$store  = new Vuex.Store({
    state:{
        num:10,
        userInfo:cookies.get("token")  ? JSON.parse(cookies.get("token")).email : ""
    },
    mutations:{
        setUser(state,val){
            state.userInfo = val
        }
    },
    actions:{
        
    },
    getters:{
        
    }
})
