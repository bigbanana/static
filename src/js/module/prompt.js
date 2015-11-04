/**
 * [确定窗口]
 * @param  {[string]} content [显示文字]
 * @param  {[function]} pass [成功后回调]
 * @param  {[function]} cancel [失败后回调]
 * @return {[object]}           [Prompt 实例]
 */
(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('jquery.prompt',['jquery','underscore','jquery.dialog','jquery.widget','input'],factory);
  } else {
    factory( jQuery,_,Dialog,widget);
  }
}(function($,_,Dialog,widget){
  function Prompt(opt){
    $.extend(this,arguments.callee.options,arguments.callee.dialogOpt,opt);
    this.dialogOpt = $.extend({},arguments.callee.dialogOpt,{
      width:this.width,
      height:this.height,
      minWidth:this.minWidth,
      minHeight:this.minHeight,
      modal:this.modal
    });
    this.init();
    this.events();
  }
  $.extend(Prompt.prototype,{
    init: function(){
      var that = this;
      this.$wrap = $(this._template(this));
      this.dialog = new Dialog($.extend({
        el:this.$wrap,
        close: function(){
          that.$wrap.remove();
        }
      },this.dialogOpt));
    },
    events: function(){
      var that = this;
      this.$wrap.find('.ui-prompt-input input').on('input',function(){
        that.value = $.trim($(this).val());
      });
      this.$wrap.on('click','[data-action=pass]',function(){
        that.dialog.close();
        that.pass(that.value);
      });
      this.$wrap.on('click','[data-action=cancel]',function(){
        that.dialog.close();
        that.cancel();
      });
    },
    _template: _.template([
      '<div class="ui-prompt" title="<%= title %>">',
        '<div class="ui-prompt-content">',
          '<div class="ui-prompt-tips"><%= content %></div>',
          '<div class="ui-prompt-input"><input type="text" value="<%= value %>"></div>',
        '</div>',
        '<div class="ui-dialog-toolbar">',
          '<a class="btn btn-blue btn-sm" data-action="pass">确 定</a>',
          '<a class="btn btn-sm ml10" data-action="cancel">取 消</a>',
        '</div>',
      '</div>'
    ].join(''))
  });

  $.extend(Prompt,{
    options : {
      title: '提示',
      content: '请输入...',
      value: '',
      pass: $.noop,
      cancel: $.noop
    },
    dialogOpt: {
      width:280,
      height:180,
      minWidth:280,
      minHeight:158,
      modal:true
    }
  });

  return Prompt;
}));
