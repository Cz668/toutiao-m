import Vue from 'vue'
import App from './App.vue'

// 加载全局样式
import "./styles/index.less"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
