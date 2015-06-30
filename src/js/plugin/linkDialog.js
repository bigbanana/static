(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('jquery.linkDialog',['jquery','jquery.widget','jquery.dialog','underscore','backbone'],factory);
  } else {
    factory($,widget,Dialog,_,Backbone);
  }
}(function($,widget,Dialog,_,Backbone){
  var URLREG = /^https?:\/\/.*$/;
  var $body = $(document.body);
  var LinkDialog = function(opt){
    this.options = $.extend(true,{},arguments.callee.options,opt);
    this.$el = $(opt.el);
    if(this.$el.length == 0 || !URLREG.test(this.$el[0].href)) return;
    this.options.href = this.options.href || this.$el[0].href;
    this.options.title = this.options.title || this.$el[0].title;
    this.init();
    this.events();
  }

  $.extend(LinkDialog.prototype,{
    init: function(){
      this.$dialog = $(this.temp(this.options));
      this.$iframe = this.$dialog.children();
      this.dialog = new Dialog($.extend({},this.options,{
        el: this.$dialog
      }));
    },
    events: function(){
      var that = this;
      var iframe = this.$iframe[0];
      _.extend(iframe,Backbone.Events);
      iframe.on('close',function(){
        that.destroy();
      });
    },
    destroy: function(){
      this.dialog.destroy();
    },
    temp: _.template(['<div class="ui-dialog-iframe-box"><iframe scrolling="no" frameborder="no" src="<%= href %>" class="ui-dialog-iframe"></iframe></div>'].join(''))
  });
  $.extend(LinkDialog,{
    options:{
      width:500,
      height:400
    }
  });

  $body.on('click','[data-widget=linkDialog]',function(e){
    e.preventDefault();
    var $el = $(this);
    var data = $el.data();
    data.el = $el;
    new LinkDialog(data);
  });

  return LinkDialog

}));
