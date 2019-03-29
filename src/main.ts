import Vue from 'vue';
import './plugins/vuetify';
// import './plugins/PeterKhun';
// import './plugins/TestPlugin';
import './plugins/DialogPlugin';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
