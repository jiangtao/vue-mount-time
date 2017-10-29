# vue-mount-time [![Codecov](https://img.shields.io/codecov/c/github/jiangtao/vue-mount-time/master.svg?style=flat-square)]() [![Travis CI](https://img.shields.io/travis/jiangtao/vue-mount-time/branch.svg?style=flat-square)](https://travis-ci.org/jiangtao/vue-mount-time) [![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](http://opensource.org/licenses/MIT) [![npm](https://img.shields.io/npm/dm/vue-mount-time.svg?style=flat-square)](https://www.npmjs.org/package/vue-mount-time) [![David](https://img.shields.io/david/dev/jiangtao/vue-mount-time.svg?style=flat-square)](https://david-dm.org/jiangtao/vue-mount-time?type=dev) 

记录 `vue SPA` 页面打开时间

## Install

```bash
$ npm install -D vue-mount-time
```

## Usage

```
import Vue from 'vue'
import VueMountTime from 'vue-mount-time'

Vue.use(VueMountTime, {
  record: function(timing){
    console.log(timing) // 上报处理
  }
})
```

## License 

MIT