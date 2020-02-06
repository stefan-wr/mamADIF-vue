import Vue from "vue";
import Vuex from "vuex";
import AdifSM from './modules/adifSM'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    adifSM: AdifSM
  }
});
