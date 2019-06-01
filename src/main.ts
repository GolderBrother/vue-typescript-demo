import Vue from 'vue'
// 在代码中导入 *.vue 文件的时候，需要写上 .vue 后缀。原因还是因为 TypeScript 默认只识别 *.ts 文件，不识别 *.vue 文件：
import App from './App.vue'
import router from './router'
import store from './store'

// 引入elementUI 组件
import { Button, Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(Button)
// 定义全局方法
Vue.prototype.$message = Message
Vue.config.productionTip = false

export default new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
