/**
 * file: config.js
 * description:   require.config
 * author : [" 564493634@qq.com "]
 * date : 2015/3/19
 * devbaseUrl http://192.168.1.251/static/src/js || http://192.168.1.251/static/dist/js
 * probaseUrl http://static.yaozh.com/js
 */
window.config = config = window.config || {};
config.deps = config.deps || [];
config.baseUrl = config.baseUrl || 'http://static.yaozh.com/js';

require.config({
  baseUrl : window.config.baseUrl,
  urlArgs : 'yaozhVersion=1.1.3',
  waitSeconds : 5,
  map : {
    '*' : {
      'css' : 'require.css'
    }
  },
  deps : ["global"].concat(window.config.deps)
});
require.config({
  shim : {
    "prism" : {
      deps : ['css!../css/plugin/prism-twilight']
    },
    "http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js":{
      deps : ['jquery']
    }
    /*,
    "baidu.ueditor" : {
      deps : ['baidu.ueditor.config']
    }*/
  }
});