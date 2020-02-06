import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// Close the menu after each router push
router.afterEach((to, from) => {
  store.commit("HIDE_MENU");
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
