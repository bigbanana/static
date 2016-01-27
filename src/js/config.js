/**
 * file: config.js
 * description:   require.config
 * author : [" 564493634@qq.com "]
 * date : 2015/3/19
 */
window.config = config = window.config || {baseUrl : '//static.yaozh.com/js'};
config.deps = config.deps || [];
require.config({
  shim : {
    "json2": {
      exports: 'JSON'
    },
    "prism": {
      deps : ['css!../css/plugin/prism-twilight']
    },
    "jquery.ui": {
      deps : ['css!../css/jquery-ui']
    },
    "highcharts": {
      deps: ['jquery'],
      exports: 'highcharts'
    },
    "highchartTable": {
      deps: ["highcharts"],
      exports: "$"
    },
    "highcharts.data": {
      deps: ["highcharts"],
      exports: "highcharts"
    },
    "jquery.datetimepicker": {
      deps: ["css!../css/plugin/jquery-ui-timepicker-addon"]
    },
    "pinyin": {
      exports: 'pinyin'
    },
    "dict": {
      deps: ['jquery']
    }
  },
  deps : ["modernizr","json2","global"].concat(window.config.deps)
});

define('setLinkDialogHeight',[],function(){
  return function(height){
    var params = location.search.slice(1).split('&');
    var param,parObj={},par;
    while(param = params.pop()){
      par = param.split('=');
      parObj[par[0]] = decodeURIComponent(par[1]);
    }
    if(!parObj._window_name) return;
    window.top.location = parObj._window_url+'#setLinkDialogHeight?_window_name='+parObj._window_name+'&height='+height+'&t='+new Date().getTime();
  }
});

