/**
 * 借用jqueryui dialog
 */
(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('jquery.dialog',['jquery','jquery.widget','jquery.ui'],factory);
  } else {
    factory( jQuery,widget );
  }
}(function($,widget){
  
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

}));

