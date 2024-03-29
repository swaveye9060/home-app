import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import mixin from './libs/mixin'
Vue.mixin(mixin);

/* 引用bootstrap */
import './assets/bootstrap-5.1.3-dist/css/bootstrap.css'
import './assets/bootstrap-5.1.3-dist/js/bootstrap.js'
/* 引用bootstrap > 图标 */
import "bootstrap-icons/font/bootstrap-icons.css";


// 其他样式
// import './assets/style/other/plugins.min.css'
// import './assets/style/other/vendor.min.css'
// import './assets/style/other/style.min.css'

// 全局样式
import './assets/style/index.less'



/* 
 * api请求
 */
Vue.prototype.$commonApi = require('@/api/common').default
Vue.prototype.$homeApi = require('@/api/home').default

/* 
 * 引入全局组件
 */
import Headers from './components/global/Headers.vue'
Vue.component('Headers', Headers)

import Footers from './components/global/Footers.vue'
Vue.component('Footers', Footers)

import HomeTitle from './components/global/HomeTitle.vue'
Vue.component('HomeTitle', HomeTitle)

/* 
 * 使用
 * this.$showLoading.show();
 * this.$showLoading.hide();
 */
import loading001 from './components/global/Loding';
Vue.use(loading001);






/* 
 * 引入外部安装组件
 * CountTo官网 url:https://www.npmjs.com/package/vue-count-to
 */
import CountTo from 'vue-count-to'
Vue.component('CountTo', CountTo)


/* --- */
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')