//直接加载browser模块,实现快速的pace
require(['browser'],function(browser){
  //ie9以上开启进度条
  if(browser>9){
    require(['pace'],function(Pace){Pace.start();});
  }
  if(browser<7){
    //开启ie6兼容
    require(['ie6'],function(){});
  }
  if(browser>7){
    //开启input focus追踪
    require(['jquery.focusInput'],function($){$.focusInput();});
  }
});

/**
 * 加入iframe检测
 */
require(['modernizr'],function(modernizr){
  modernizr.addTest('iframe',window != window.top);
});

/**
 * 开启DOM widget兼容
 */
require(['jquery','jquery.widget'],function($,widget){
  $(function(){
    widget.update();
  });
});

/**
 * 设置默认时间格式
 */
require(['jquery.datepicker'],function(Datepicker){
  Datepicker.options.dateFormat = "yy-mm-dd";
});

/**
 * jquery常用扩展
 */
require(['jquery'],function($){

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

