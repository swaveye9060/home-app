import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import mixin from './libs/mixin'
Vue.mixin(mixin);

/* 引用bootstrap */
// import './assets/bootstrap-4.6.1-dist/css/bootstrap.css'
// import './assets/bootstrap-4.6.1-dist/js/bootstrap.js'
import './assets/bootstrap-5.1.3-dist/css/bootstrap.css'
import './assets/bootstrap-5.1.3-dist/js/bootstrap.js'

import './assets/style/index.less'

// import './assets/bootstrap-1.0/css/vendor.min.css'
// import './assets/bootstrap-1.0/css/plugins.min.css'
// import './assets/bootstrap-1.0/css/style.min.css'

// import './assets/bootstrap-1.0/js/vendor.min'
// import './assets/bootstrap-1.0/js/plugins.min'
// import './assets/bootstrap-1.0/js/main'

/* 
 * api请求
 */
Vue.prototype.$commonApi = require('@/api/common').default
Vue.prototype.$homeApi = require('@/api/home').default


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')