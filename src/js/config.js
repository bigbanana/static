/**
 * file: config.js
 * description:   require.config
 * author : [" 564493634@qq.com "]
 * date : 2015/3/19
 */
window.config = window.config || {deps:[]};
require.config({
  baseUrl : 'http://static.yaozh.com/js',
  urlArgs : 'v=1.1'+new Date().getTime(),
  waitSeconds : 5,
  map : {
    '*' : {
      'css' : 'require.css'
    }
  },
  deps : ["global"].concat(config.deps)
});
require.config({
  shim : {
    "pace":{
      deps : ['css!../css/plugin/pace-theme-flash']
    },
    "prism" : {
      deps : ['css!../css/plugin/prism-twilight']
    },
    "jquery.ui" : {
      deps : ['css!../css/jquery-ui']
    }
  }
});