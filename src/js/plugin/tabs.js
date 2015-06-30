/**
 * 借用jqueryui tabs
 */
(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('jquery.tab',['jquery','jquery.widget','jquery.ui'],factory);
  } else {
    factory( jQuery,widget );
  }
}(function($,widget){

  var Tabs = function(opt){
    this.options = $.extend(true,{},arguments.callee.options,opt);
    this.$el = $(this.options.el);
    this.$el.datepicker(this.options);
  }

  $.extend(Tabs.prototype,{});
  $.extend(Tabs,{});

  return Tabs

}));