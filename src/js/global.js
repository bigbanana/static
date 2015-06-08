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

require(['jquery','browser','modernizr'],function($,browser,modernizr){
  $(function(){
    var $body = $(document.body);

    //开启dropdown全局支持
    require(['jquery.dropdown'],$.noop);

    //开启通用组件支持
    $body.find('[data-widget]').each(function(){
      var $this = $(this);
      var data = $this.data();
      if(data.ignore) return;
      var widget = data.widget;
      delete data.widget;
      require(['jquery.'+widget],function(){
        $this[widget](data);
      });
    });   
    
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
