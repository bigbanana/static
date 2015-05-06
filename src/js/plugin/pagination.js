define('jquery.pagination',['jquery'],function($){
  function Pagination(){
    this.options = $.extend(true,{},arguments.callee.options,opt);
    this.$el = $(opt.el);
    this.init();
  }

  $.extend(Pagination.prototype,{
    selectPage : function(number){
      
    }
  });

  $.extend(Pagination,{
    options : {
      edges : 1,
    }
  });

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }
  $.fn.pagination = Plugin;
  $.fn.pagination.Constructor = Pagination;

});
