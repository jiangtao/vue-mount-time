var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: '#inline-source-map',
  resolve: {
    extensions: ['', '.js', '.vue', '.json'],
    alias: {
      'vue': 'vue/dist/vue.runtime.common.js',
      'src': path.resolve(process.cwd(), 'src')
    }
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ],
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-vue-jsx', 'transform-runtime'],
    env: {
      test: {
        plugins: [
          ['istanbul', {
            'exclude': ['tests']
          }]
        ]
      }
    }
  }
}
