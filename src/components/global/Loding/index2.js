import Vue from 'vue';
import loadDialog from './index.vue';

const LoadDialog = (config) => {
  let options = {
    className: 'loader-chart',
    messageTip: '加载中，请稍后'
  };
  if (config && typeof config !== 'object') {
    options.content = config;
  }
  config = {
    ...options,
    ...config
  };

  let Tpl = Vue.extend(loadDialog);
  let instance = new Tpl();
  for (let key in config) {
    if (config.hasOwnProperty(key)) instance.$data[key] = config[key];
  }
  document.body.appendChild(instance.$mount().$el);
};

const closeLoading = () => {
  let loadList = document.querySelectorAll('.load-loading-dialog');
  for (let i = 0; i < loadList.length; i++) {
    document.body.removeChild(loadList[i]);
  }
}

export default {
  install() {
    Vue.prototype.$loadDialog = LoadDialog.bind(Vue);
    Vue.prototype.$closeLoading = closeLoading.bind(Vue);
  }
};