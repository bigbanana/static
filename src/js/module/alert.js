define('alert',['jquery','underscore','jquery.ui'],function($,_){
  function Alert(opt){
    $.extend(this,{
      content: ''
    },opt);
    this.$el = $(this._template(this));
    this.init();
    this.events();
  }

  $.extend(Alert.prototype,{
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
      this.$el.on('click','[data-action=cancel]',function(){
        that.$el.dialog('close');
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

  return Alert;

});
