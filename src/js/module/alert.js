/**
 * [警告窗口]
 * @param  {[string]} content [显示文字]
 * @return {[object]}           [Alert 实例]
 */
define('alert',['jquery','underscore','jquery.dialog'],function($,_,Dialog){
  function Alert(opt){
    this.options = $.extend({},arguments.callee.options,opt);
    this.$el = $(this._template(this.options));
    this.init();
    this.events();
  }

  $.extend(Alert.prototype,{
    init: function(){
      var that = this;
      this.dialog = new Dialog($.extend({
        el:this.$el,
        close: function(){
          that.$el.remove();
        }
      },this.options));
    },
    events: function(){
      var that = this;
      this.$el.on('click','[data-action=cancel]',function(){
        that.dialog.close();
      });
    },
    _template: _.template([
      '<div class="ui-alert" title="提示">',
        '<div class="ui-alert-content"><%= content %></div>',
        '<div class="ui-dialog-toolbar">',
          '<a class="btn btn-sm" data-action="cancel">确 定</a>',
        '</div>',
      '</div>'
    ].join(''))
  });

  $.extend(Alert,{
    options : {
      width:280,
      height:160,
      minWidth:280,
      minHeight:158,
      modal:true,
      content: ''
    }
  });

  return Alert;

});
