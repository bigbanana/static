/**
 * [以弹出窗的形式打开一个链接]
 * @param  所有dialog含有的参数
 * @return {[object]}         [LinkDialog实例]
 */
(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('jquery.linkDialog',['jquery','jquery.widget','jquery.dialog','underscore','backbone','queryString'],factory);
  } else {
    factory($,widget,Dialog,_,Backbone,queryString);
  }
}(function($,widget,Dialog,_,Backbone,queryString){
  var URLREG = /^https?:\/\/.*$/;
  var $body = $(document.body);
  var LinkDialog = function(opt){
    this.options = $.extend(true,{},arguments.callee.options,opt);
    if(!!this.options.el){
      this.$el = $(opt.el);
      if(this.$el.length == 0 || !URLREG.test(this.$el[0].href)) return;
      var href = this.options.href || this.$el[0].href;

      var pars = queryString.parse(href.split('?')[1]||'');
      pars._window_type = 'iframe';
      this.options.href = href.split('?')[0]+'?'+queryString.stringify(pars);
      this.options.title = this.options.title || this.$el[0].title;
    }
    this.init();
    this.events();
  }

  $.extend(LinkDialog.prototype,{
    init: function(){
      var that = this;
      this.$dialog = $(this.temp(this.options));
      this.$iframe = this.$dialog.children();
      this.dialog = new Dialog($.extend({},this.options,{
        el: this.$dialog,
        autoOpen: true,
        close: function(){
          that.dialog.destroy();
          that.$dialog.remove();
        }
      }));
    },
    events: function(){
      var that = this;
      var iframe = this.$iframe[0];

      _.extend(iframe,Backbone.Events);
      iframe.on('load',function(){
        try{
          that.dialog.setTitle(this.contentWindow.document.title);
        }catch(e){}
      });
      iframe.on('close',function(){
        that.destroy();
      });
      iframe.on('refresh',function(){
        that.refresh();
      });
      iframe.on('setOption',function(opt){
        that.setOption(opt);
      });
    },
    destroy: function(){
      this.$iframe[0].off();
      this.dialog.destroy();
    },
    refresh: function(){
      window.location.reload();
    },
    setOption: function(opt){
      this.dialog.setOption(opt);
    },
    temp: _.template(['<div class="ui-dialog-iframe-box"><iframe frameborder="no" src="<%= href %>" class="ui-dialog-iframe"></iframe></div>'].join(''))
  });

  $.extend(LinkDialog,{
    options:{
      modal:true,
      href: ''
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
