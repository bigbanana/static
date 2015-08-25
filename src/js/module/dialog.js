/**
 * [弹窗]
 * 借用jquery-ui dialog并重写jquery-ui接口,jqueryui dialog的所有参数，方法均可适用
 * @return {[object]}         [Dialog 实例]
 */
(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('jquery.dialog',['jquery','jquery.widget','jquery.ui'],factory);
  } else {
    factory( jQuery,widget );
  }
}(function($,widget){

  //保存jquery-ui的dialog方法
  var $_fn_dialog = $.fn.dialog;

  var Dialog = function(opt){
    this.options = $.extend(true,{},arguments.callee.options,opt);
    this.$el = $(this.options.el);

    //使用jquery-ui的dialog方法
    $_fn_dialog.call(this.$el,this.options);
    this._dialog = this.$el.data('uiDialog');
  }

  $.extend(Dialog.prototype,{
    setTitle: function(str){
      this._dialog.option({title:str});
    },
    setOption: function(opt){
      this._dialog.option(opt);
    },
    destroy: function(){
      this._dialog.destroy();
    },
    open: function(){
      this._dialog.open();
    },
    close: function(){
      this._dialog.close();
    }
  });
  $.extend(Dialog,{
    options:{}
  });

  //注册组件，覆盖jquery-ui的dialog方法
  widget.install('dialog',Dialog);

  return Dialog

}));

