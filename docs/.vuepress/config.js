const path = require('path');

module.exports = {
    title: 'Evan Docs',
    description: 'Just playing around',
    dest:path.resolve(process.cwd(),'dist'),
    configureWebpack: (config, isServer) => {
      if (!isServer) {
        // 修改客户端的 webpack 配置
        config.output.publicPath = './'
      }
    }
  }