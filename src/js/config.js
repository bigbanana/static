/**
 * file: config.js
 * description:   require.config
 * author : [" 564493634@qq.com "]
 * date : 2015/3/19
 */
require.config({
  baseUrl : 'http://static.yaozh.com/js',
  urlArgs : 'v=1.1',
  waitSeconds : 5,
  map : {
    '*' : {
      'css' : 'require.css'
    }
  },
  deps : ['css!../css/normalize.css','css!../css/public.css',"global"].concat(config.deps)
});
require.config({
  shim : {
    "pace":{
      deps : ['css!../css/plugin/pace-theme-flash']
    },
    "prism" : {
      deps : ['css!../css/plugin/prism-twilight']
    }
  }
});