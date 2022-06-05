import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import {setupStore} from './store';

const app = createApp(App).use(router);
setupStore(app);
app.mount('#app');
