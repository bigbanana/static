/**
 * [确定窗口]
 * @param  {[string]} content [显示文字]
 * @param  {[function]} pass [成功后回调]
 * @param  {[function]} cancel [失败后回调]
 * @return {[object]}           [Confirm 实例]
 */
(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('jquery.confirm',['jquery','underscore','jquery.dialog','jquery.widget','jquery.preon'],factory);
  } else {
    factory( jQuery,_,Dialog,widget);
  }
}(function($,_,Dialog,widget){
  function Confirm(opt){
    $.extend(this,arguments.callee.options,opt);
    this.dialogOpt = $.extend({},arguments.callee.dialogOpt,opt);
    delete this.dialogOpt.el;
    this.init();
    this.events();
  }

  $.extend(Confirm.prototype,{
    init: function(){
      var that = this;
      this.nopass = true;
      this.$wrap = $(this._template(this));
      this.dialog = new Dialog($.extend({
        el:this.$wrap,
        close: function(){
          if(that.nopass){
            that.cancel()
          }else{
            that.pass();
          };
          that.$wrap.remove();
        }
      },this.dialogOpt));
    },
    events: function(){
      var that = this;
      this.$wrap.on('click','[data-action=pass]',function(){
        that.nopass = false;
        that.dialog.close();
      });
      this.$wrap.on('click','[data-action=cancel]',function(){
        that.dialog.close();
      });
    },
    _template: _.template([
      '<div class="ui-confirm" title="确认">',
        '<div class="ui-confirm-content"><%= content %></div>',
        '<div class="ui-dialog-toolbar">',
          '<a class="btn btn-blue btn-sm" data-action="pass"><%= passName %></a>',
          '<a class="btn btn-sm ml10" data-action="cancel"><%= cancelName %></a>',
        '</div>',
      '</div>'
    ].join(''))
  });

  $.extend(Confirm,{
    options : {
      content: '确定要继续操作吗？',
      passName: '确 定',
      cancelName: '取 消',
      pass: $.noop,
      cancel: $.noop
    },
    dialogOpt: {
      width:280,
      height:160,
      minWidth:280,
      minHeight:158,
      modal:true
    }
  });

  function ComfirmWidget(opt){
    opt.el.preon('click',function(e,data){
      if(!!data && !!data.confirmPass) return;

      e.stopImmediatePropagation();
      e.preventDefault();
      var that = this;
      var $this = $(this);
      var confirm = new Confirm($.extend({
        pass: function(){
          //调用只有一个的时候，为打开链接
          if($._data(that).events['click'].length == 1){
            window.open(that.href,that.target||"_self");
          }else{
            $this.trigger('click',{confirmPass:true});
          }
        }
      },opt));

    });
  }

  widget.install('confirm',ComfirmWidget);

  return Confirm;
}));
