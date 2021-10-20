import Vue from "vue";
import App from "./App.vue";
import productsItem from "./components/productsItems";

Vue.config.productionTip = false;

Vue.component("products-list", productsItem);

new Vue({
  render: (h) => h(App)
}).$mount("#app");
