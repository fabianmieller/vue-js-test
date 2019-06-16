import Vue from 'vue';
import App from './App.vue';

// eslint-disable-next-line import/prefer-default-export
export const serverBus = new Vue();

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
