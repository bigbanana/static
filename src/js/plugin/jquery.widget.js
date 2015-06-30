define('jquery.widget',['jquery'],function(){
  var def = $.Deferred();

  $.extend(def,{
    install: function(name,className){
      var obj={};
      if(!name || !className) return;

      obj[name] = function(opt){
        opt = opt || {};
        var args = Array.prototype.slice.apply(arguments);
        args.shift();
        return this.each(function(){
          var $this = $(this);
          var data = $this.data(name);

          if(!data && $.type(opt) == 'object'){
            opt = $.extend({},opt,{el:$this});
            data = new className(opt);
            $this.data(name,data);
          }
          if(data && $.type(opt) == 'string') data[opt].apply(data,args);

          return this;
        });
      }
      $.fn.extend(obj);
    },
    update: function(){
      $(function(){
        var defs = $.map($(document.body).find('[data-widget]'),function(el){
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
      });
    }
  });

  return def;
});
