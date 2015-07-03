(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('jquery.magnifier',['jquery','magnifier','jquery.widget'],factory);
  } else {
    factory( jQuery,Magnifier,widget );
  }
}(function($,Magnifier,widget){

  var evt = {
    attach: function(type,el,callback){
      $(el).on(type,function e(e){
        callback(e.originalEvent,e.target);
      });
    },
    detach: function(type,el,callback){
      $(el).off(type,function e(e){
        callback(e.originalEvent,e.target);
      });
    }
  }
  var m = new Magnifier(evt);
  var index = 0;
  var JQMagnifier = function(opt){
    this.options = $.extend(true,{},arguments.callee.options,opt);
    this.$el = $(opt.el);
    this.$wrapper = $('#'+opt.wrapper);
    //没有ID分配一个ID
    !this.$el.attr('id') && this.$el.attr('id','ui-magnifier-id'+(++index));
    this.init();
    this.events();
  }

  $.extend(JQMagnifier.prototype,{
    init : function(){
      m.attach({
        thumb: '#'+this.$el.attr('id'),
        largeWrapper: this.options.wrapper
      });
      this.$wrapper.css('visibility','visible').hide();
    },
    events: function(){
      var that = this;
      this.$el.parent().on('mouseenter',function(){
        that.$wrapper.show();
      });
      this.$el.parent().on('mouseleave',function(){
        that.$wrapper.hide();
      });
    }
  });
  $.extend(JQMagnifier,{});

  widget.install('magnifier',JQMagnifier);

  return JQMagnifier

}));
