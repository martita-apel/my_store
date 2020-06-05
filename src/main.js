import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebaseConfig from "@/firebase";
import firebase from "firebase";

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

// Main Styles
import "./assets/scss/main.scss";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
