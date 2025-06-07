import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // 引入 router
import { createPinia } from 'pinia'; // 引入 Pinia

import Vant from 'vant'; // 引入 Vant
import 'vant/lib/index.css'; // 引入 Vant 样式

// 引入 Font Awesome 样式
import '@fortawesome/fontawesome-free/css/all.css';

// 引入 Capacitor Status Bar 插件
import { StatusBar } from '@capacitor/status-bar';

const app = createApp(App);
const pinia = createPinia(); // 创建 Pinia 实例

app.use(router); // 使用 router
app.use(Vant); // 使用 Vant
app.use(pinia); // 使用 Pinia

// 配置 Status Bar 不叠加在 Webview 上
StatusBar.setOverlaysWebView({ overlay: false });
StatusBar.setBackgroundColor({ color: '#ffffff' }); // 设置 Status Bar 背景色为白色

// 确保 Status Bar 可见
StatusBar.show();

app.mount('#app');
