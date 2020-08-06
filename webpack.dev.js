const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.resolve(__dirname, './client/public'),
    port: 9000,
    hot: true,
    proxy: {
      '/api': 'http://localhost:3000', // 프록시
    },
  },
});
