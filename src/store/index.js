import Vue from "vue";
import Vuex from "vuex";
import auth from "@/store/modules/auth";
import post from "@/store/modules/post";
import { vuexfireMutations } from "vuexfire";
Vue.use(Vuex);
Vue.config.devtools = true;
export default new Vuex.Store({
  state: {},
  mutations: {
    ...vuexfireMutations,
  },
  actions: {},
  modules: {
    auth,
    post,
  },
});
