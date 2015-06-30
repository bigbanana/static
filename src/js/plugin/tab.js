(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('jquery.tab',['jquery','underscore','jquery.widget'],factory);
  } else {
    factory( jQuery,_,widget );
  }
}(function($,_,widget){
  //滑动显示一个列表
  var Tab = function(opt){
    if(opt.event == "hover"){
      opt.event = "mouseenter";
    }
    this.options = $.extend(true,{},arguments.callee.options,opt);
    this.$el = $(opt.el);
    this.init();
  }

  $.extend(Tab.prototype,{
    init : function(){
      var _this = this;
      this.$tabNav = this.$el.find('.ui-tab-nav');
      this.$tabNavs = this.$tabNav.children();
      this.$tabPanels = this.$el.find('.ui-tab-panel');
      this.events();
    },
    events: function(){
      var that = this;
      this.$tabNav.on(this.options.event,'>a',function(){
        var index = $(this).index();
        that.select(index);
      });
    },
    select: function(index){
      this.$tabNavs.eq(index).toggleClass("active",true).siblings().toggleClass("active",false);
      this.$tabPanels.toggleClass("active",false).eq(index).toggleClass("active",true);
    }
  });
  $.extend(Tab,{
    options : {
      event: 'click'
    }
  });

  widget.install('tab',Tab);

  return Tab

}));