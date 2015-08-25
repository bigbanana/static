/**
 * widget全局组件支持
 * install : 注册一个组件以便使用[data-widget]方式调用
 * update : 实例化子节点所有组件
 *   $el => 节点（默认为document）
 */
(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('jquery.widget',['jquery'],factory);
  } else {
    factory( jQuery );
  }
}(function($){

  var widget = {}  

  $.extend(widget,{
    install: function(name,className){
      var obj={};
      if(!name || !className) return;

      obj[name] = function(opt){
        opt = opt || {},obj = {};
        var args = Array.prototype.slice.apply(arguments);
        args.shift();
        return this.each(function(){
          var $this = $(this);
          var data = $this.data(name);

          if(!data){
            if($.type(opt) == "object"){
              obj = $.extend(obj,opt);
            }
            obj = $.extend(obj,{el:$this});
            data = new className(obj);
            $this.data(name,data);
          }

          if(data && $.type(opt) == 'string') data[opt].apply(data,args);

          return this;
        });
      }
      $.fn.extend(obj);
    },
    update: function($el){
      $el = $el || $(document);
      var def = $.Deferred();
      var defs = $.map($el.find('[data-widget]'),function(el){
        var d = $.Deferred();
        var $el = $(el);
        var data = $el.data();
        var widget = data.widget;
        require(['jquery.'+widget],function(){
          $el[widget] && $el[widget](data);
          d.resolve();
        });
        return d.promise();
      });

      $.when.apply(window,defs).done(def.resolve);
      return def;
    }
  });

  $.fn.extend({
    widget: function(){
      var $this = $(this);
      var def = widget.update($this);
      return def
    }
  })

  return widget;

}));
