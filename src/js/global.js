window.browser = (function(){
  var arr = navigator.userAgent.match(/msie.(\d+)/i);
  return !arr ? 100 : arr[1];
})();
//ie9以上开启进度条
if(window.browser>9){
  require(['pace'],function(Pace){Pace.start();});
}else if(window.browser<7){
  //开启ie6兼容
  require(['ie6'],function(){});
}