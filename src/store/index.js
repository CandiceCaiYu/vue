import Vue from "vue";
import Vuex from "vuex";

import aboutReduxInput from "./modules/aboutReduxInput";
import aboutReduxList from "./modules/aboutReduxList";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    aboutReduxInput,
    aboutReduxList
  }
});
