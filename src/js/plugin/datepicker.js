/**
 * 借用jqueryui datepicker
 */
(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('jquery.tab',['jquery','jquery.widget','jquery.ui'],factory);
  } else {
    factory( jQuery,widget );
  }
}(function($,widget){

  var Datepicker = function(opt){
    this.options = $.extend(true,{},arguments.callee.options,opt);
    this.$el = $(this.options.el);
    this.$el.datepicker(this.options);
  }

  $.extend(Datepicker.prototype,{});
  $.extend(Datepicker,{});

  return Datepicker

}));