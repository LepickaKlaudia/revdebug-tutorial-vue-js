import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/App.css'; // Import globalnego pliku CSS

createApp(App).use(router).mount('#app');
