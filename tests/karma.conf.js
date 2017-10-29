let webpackTestConfig = require('./webpack.test.conf')

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'promise'],
    files: ['./index.js'],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: './coverage',
      reporters: [{
        type: 'text'
      }, {
        type: 'lcov',
        subdir: '.'
      }, {
        type: 'json',
        subdir: '.'
      }]
    },
    plugins: [
      'karma-mocha',
      'karma-promise',
      'karma-webpack',
      'karma-coverage',
      'karma-spec-reporter',
      'karma-sourcemap-loader',
      'karma-phantomjs-launcher'
    ],
    webpack: webpackTestConfig,
    webpackMiddleware: {
      noInfo: true
    },
    singleRun: true
  })
}
