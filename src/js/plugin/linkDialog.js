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
  var id = 0;
  var URLREG = /^https?:\/\/.*$/;
  var $body = $(document.body);
  var LinkDialog = function(opt){
    id++;
    this.options = $.extend(true,{
      windowName: 'linkdialog_'+id
    },arguments.callee.options,opt);
    if(!!this.options.el){
      this.$el = $(opt.el);
      if(this.$el.length == 0 || !URLREG.test(this.$el[0].href)) return;
      this.options.href = this.options.href || this.$el[0].href;
      this.options.title = this.options.title || this.$el[0].title;
    }

    this.init();
    this.events();
  }

  $.extend(LinkDialog.prototype,{
    init: function(){
      var that = this;
      var href = this.options.href.split('?')
      var pars = queryString.parse(href[1]||'');
      pars._window_type = 'iframe';
      pars._window_name = this.options.windowName;
      pars._window_url = window.location.href.replace(/#.*/,'');
      this.options.href = href[0]+'?'+queryString.stringify(pars);

      this.$dialog = $(this.temp(this.options));
      this.$iframe = this.$dialog.children();
      this.$iframe.data('linkDialog',this);
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
    open: function(){
      this.dialog.open();
    },
    setOption: function(opt){
      this.dialog.setOption(opt);
    },
    temp: _.template(['<div class="ui-dialog-iframe-box"><iframe frameborder="no" src="<%= href %>" class="ui-dialog-iframe" name="<%= windowName %>"></iframe></div>'].join(''))
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

  function setLinkDialogHeight(name,height){
    var $iframe = $('iframe[name="'+name+'"]');
    if($iframe.length == 0) return;
    var ld = $iframe.data('linkDialog');
    ld.setOption({height:height});
  }

  var router = new Backbone.Router();
  router.route(/setLinkDialogHeight\?(.+)/,'',function(params){
    params = queryString.parse(params);
    setLinkDialogHeight(params._window_name,params.height);
    this.navigate('');
  });
  Backbone.history.start();

  return LinkDialog

}));
