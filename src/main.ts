import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // 引入 router
import { createPinia } from 'pinia'; // 引入 Pinia

import Vant from 'vant'; // 引入 Vant
import 'vant/lib/index.css'; // 引入 Vant 样式

// 引入 Font Awesome 样式
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App);
const pinia = createPinia(); // 创建 Pinia 实例

app.use(router); // 使用 router
app.use(Vant); // 使用 Vant
app.use(pinia); // 使用 Pinia

app.mount('#app');
