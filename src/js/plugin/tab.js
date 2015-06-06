define('jquery.tab',['jquery','underscore',
  'jquery.easing'],function($,_){
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

  $.fn.extend({
    tab : function(opt){
      opt = opt || {};
      var args = Array.prototype.slice.apply(arguments);
      args.shift();
      return this.each(function(){
        var $this = $(this);
        var data = $this.data('tab');

        if($.type(opt) == 'object'){
          opt = $.extend({},opt,{el:$this});
          data = new Tab(opt);
          $this.data('tab',data);
        }
        if($.type(opt) == 'string') data[opt].apply(data,args);

        return this;
      });
    }
  });

  return Tab

});