const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '.',
  productionSourceMap: false,
  runtimeCompiler: true,
  // outputDir: '../demo/www',
  outputDir: 'dist',
  // 代理
  devServer: {
    proxy: {
      '/wy': {
        target: 'http://localhost:3000/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/wy': ''
        }
      },
      '/api': {
        target: 'http://music.niubishanshan.top/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/qq': ''
        }
      }
    }
  }
})