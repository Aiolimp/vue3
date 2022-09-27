import { createApp } from 'vue'
import { Button } from 'vant';
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'; // 全局引入样式
import 'lib-flexible/flexible'

const app = createApp(App) // 创建实例

app.use(Button) // 注册组件
app.use(router); //需放在app.mount(’#app’)前面 不然加载时router-view、router-link等未被渲染

app.mount('#app')
