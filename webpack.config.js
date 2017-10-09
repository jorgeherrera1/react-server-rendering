const webpack = require('webpack');

const browserConfig = {
  entry: {
    app: './src/browser/index.js'
  },
  output: {
    path: __dirname,
    filename: './public/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};

const serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  output: {
    path: __dirname,
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};

module.exports = [browserConfig, serverConfig];
