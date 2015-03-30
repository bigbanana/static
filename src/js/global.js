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

require(['jquery'],function($){
  $(function(){
    var $body = $(document.body);
    if(window.browser<7){
      //开启ie6 hover功能
      $body.on('mouseover','.ie-hover',function(){
        $(this).addClass('hover')
      }).on('mouseleave','.ie-hover',function(){
        $(this).removeClass('hover')
      });
    }
    //序列化form为object
    $.fn.serializeObject = function() {
      var o = {};
      var a = this.serializeArray();
      $.each(a, function() {
        if (o[this.name] !== undefined) {
          if (!o[this.name].push) {
            o[this.name] = [o[this.name]];
          }
          o[this.name].push(this.value || '');
        } else {
          o[this.name] = this.value || '';
        }
      });
      return o;
    };

  });
});
