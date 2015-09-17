/**
 * [标签页]
 * @param  {[string]} event [触发事件]
 * @param  {[domElement]} el [作用元素]
 * 有两种节构实例化一个标签页，简单的和普通的，
 * 简单的节构为：div>(a+div)*3
 * 普通的节构为：div>div.ui-tab-navs>div.ui-tab-nav>a*3^^+div.ui-tab-panels>div.ui-tab-panel*3
 * @return {[object]}         [Tab 实例]
 */
(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('jquery.tab',['jquery','underscore','jquery.widget'],factory);
  } else {
    factory( jQuery,_,widget );
  }
}(function($,_,widget){
  var Tab = function(opt){
    if(opt.event == "hover"){
      opt.event = "mouseenter";
    }
    this.options = $.extend(true,{},arguments.callee.options,opt);
    this.$el = $(opt.el).addClass('ui-tab');
    this.init();
  }

  $.extend(Tab.prototype,{
    init : function(){
      var _this = this;
      if(this.$el.find('>.ui-tab-navs>.ui-tab-nav').length==0){
        this.simpleModel();
      }else{
        this.normalModel();
      }
      var curIndex = this.$tabNav.children('.active').index()
      curIndex = curIndex>=0 ? curIndex : 0;
      this.select(curIndex);
      this.events();
      this.$el.is(':hidden') && this.$el.fadeIn(200);
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
    },
    normalModel: function(){
      this.$tabNav = this.$el.find('>.ui-tab-navs>.ui-tab-nav');
      this.$tabNavs = this.$tabNav.children();
      this.$tabPanels = this.$el.find('>.ui-tab-panels>.ui-tab-panel');
    },
    simpleModel: function(){
      this.$tabNavs = this.$el.children('a');
      this.$tabPanels = this.$el.children('div').addClass('ui-tab-panel');
      var $navWrap = $('<div class="ui-tab-navs">').prependTo(this.$el);
      var $panelWrap = $('<div class="ui-tab-panels">').appendTo(this.$el);
      this.$tabNav = $('<div class="ui-tab-nav">').appendTo($navWrap);

      $panelWrap.append(this.$tabPanels);
      this.$tabNav.append(this.$tabNavs);
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