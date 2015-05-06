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
config.baseUrl = config.baseUrl || 'http://192.168.1.251/static/src/js';

require.config({
  baseUrl : window.config.baseUrl,
  urlArgs : 'yaozhVersion=1.1.2&data='+new Date().getTime(),
  waitSeconds : 5,
  map : {
    '*' : {
      'css' : 'require.css'
    }
  },
  deps : ["console","global"].concat(window.config.deps)
});
require.config({
  shim : {
    "prism" : {
      deps : ['css!../css/plugin/prism-twilight']
    }
    /*,
    "baidu.ueditor" : {
      deps : ['baidu.ueditor.config']
    }*/
  }
});