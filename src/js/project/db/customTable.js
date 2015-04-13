define('db.customTable',['jquery'],function($){
  var CustomTable = function(opt){
    this.options = $.extend(true,{},Waterfall.options,opt);
    this.$el = $(opt.el);
    this.init();
  }
  $.extend(CustomTable.prototype,{
    init : function(){
      var _this = this;
      list = this.$el.children().detach().toArray();
      _this.append(list);
    }
  });
  $.extend(CustomTable,{
    options: {
    }
  });

  $.fn.extend({
    customTable : function(opt){
      opt = opt || {};
      var args = Array.prototype.slice.apply(arguments);
      args.shift();
      return this.each(function(){
        var $this = $(this);
        var data = $this.data('customTable');

        if($.type(opt) == 'object'){
          opt = $.extend({},opt,{el:$this});
          data = new CustomTable(opt);
          $this.data('customTable',data);
        }
        if($.type(opt) == 'string') data[opt].apply(data,args);

        return this;
      });
    }
  });

  return Waterfall
});
