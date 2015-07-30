/**
 * 借用jqueryui datepicker
 */
(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('jquery.datepicker',['jquery','jquery.widget','jquery.ui'],factory);
  } else {
    factory( jQuery,widget );
  }
}(function($,widget){

  //保存jquery-ui的datepicker方法
  window.$_fn_datepicker = $.fn.datepicker;

  var Datepicker = function(opt){
    this.options = $.extend(true,{},arguments.callee.options,opt);
    this.$el = $(this.options.el);

    //使用jquery-ui的datepicker方法
    $_fn_datepicker.call(this.$el,this.options);

    //由于jquery-ui的datepicker缓存属性与widget冲突，所以返回jqueryui给widget使用。
    if(opt.widget){
      return this.$el.data('datepicker');
    }

  }
  $.extend(Datepicker.prototype,{});
  $.extend(Datepicker,{
    options: {}
  });

  //注册组件，覆盖jquery-ui的datepicker方法
  widget.install('datepicker',Datepicker);

  return Datepicker

}));