define('confirm',['jquery','underscore','jquery.ui'],function($,_){
  function Confirm(opt){
    $.extend(this,{
      content: '确定要继续操作吗？',
      pass: $.noop,
      cancel: $.noop
    },opt);
    this.$el = $(this._template(this));
    this.init();
    this.events();
  }

  $.extend(Confirm.prototype,{
    init: function(){
      var that = this;
      this.$el.dialog({
        width:280,
        height:180,
        modal:true,
        close: function(){
          that.$el.remove();
        }
      });
    },
    events: function(){
      var that = this;
      this.$el.on('click','[data-action=pass]',function(){
        that.$el.dialog('close');
        that.pass();
      });
      this.$el.on('click','[data-action=cancel]',function(){
        that.$el.dialog('close');
        that.cancel();
      });
    },
    _template: _.template([
      '<div class="ui-confirm" title="确认">',
        '<div class="ui-confirm-content"><%= content %></div>',
        '<div class="ui-dialog-toolbar">',
          '<a class="btn btn-blue btn-sm" data-action="pass">确 定</a>',
          '<a class="btn btn-sm ml20" data-action="cancel">取 消</a>',
        '</div>',
      '</div>'
    ].join(''))
  });

  return Confirm;

});
