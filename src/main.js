import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';
import { mask } from 'vue-the-mask';
import VueElementLoading from 'vue-element-loading';





createApp(App)
    .component('VueElementLoading', VueElementLoading)
    .directive('mask', mask)
    .use(router)
    .mount('#app')
