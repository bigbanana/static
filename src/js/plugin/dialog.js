
define('jquery.dialog',['jquery','underscore','jquery.widget','jquery.ui'],function($,_,widget){
  
  var Dialog = function(opt){
    this.options = $.extend(true,{},arguments.callee.options,opt);
    this.$el = $(this.options.el);
    this.$el.dialog(this.options);
  }

  $.extend(Dialog.prototype,{
    destroy: function(){
      this.$el.dialog('destroy');
    } 
  });
  $.extend(Dialog,{});

  return Dialog

});

