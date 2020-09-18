import Vue from "vue";
import Vuex from "vuex";
import auth from "@/store/modules/auth";
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
  },
});
