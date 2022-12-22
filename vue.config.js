const {
  defineConfig
} = require('@vue/cli-service')

const webpack = require("webpack")

module.exports = defineConfig({
  transpileDependencies: true,

  /* 路径默认为空"" */
  // publicPath: process.env.NODE_ENV === 'production' ? '' : '/web-home',
  publicPath: '',

  /* 
   * 基本配置
   */
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  // outputDir: 'dist',
  // assetsDir: 'assets',

  // 配置全局使用 jquery
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        jquery: "jquery",
        "window.jQuery": "jquery"
      })
    ],
  },
  /* 
   * 代理
   */
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  devServer: {
    port: 9090,
    // host: 'localhost',
    // host: '0.0.0.0',
    // https: false,
    open: true,
    // proxy: 'http://localhost:9090'   // 配置跨域处理,只有一个代理
    proxy: { //配置多个跨域
      "/api": {
        target: "http://197.0.0.1:8088",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/"
        }
      },
      // ---以下配置后台IP
      // '/adms': {
      //   target: 'http://10.8.1.30:8002',
      //   changeOrigin: true,
      // },
      '/manage': {
        target: 'http://10.8.1.30:8008',
        changeOrigin: true,
        // pathRewrite: {
        //   "^/manage": "/xxx"
        // }
      },
    }
  },
  // 
})