/**
 * [侧边栏]
 */
(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('sidebar',['jquery','underscore','jquery.waypoints'],factory);
  } else {
    factory( jQuery,_ );
  }
}(function($,_){
  function Sidebar(opt){
    var _this = this;
    $.extend(this,arguments.callee.options,opt);
    this.$el = $(this.el);
    this.init();
  }

  $.extend(Sidebar.prototype,{
    init: function(){
      this.$el = $(this._temp(this));
      this.$el.appendTo(document.body);
      this.event();
    },
    event: function(){
      var $body = $(document.body);
      var $goTop = $('a[data-action=gotop]',this.$el);
      $body.waypoint({
        offset: this.offset,
        handler: function(direction){
          $goTop.toggleClass('hide',direction == "up");
        }
      });
      this.$el.on('click','a[data-action=gotop]',function(){
        $("html,body").animate({scrollTop:0},200);
      });
    },
    destroy: function(){
      this.$el.remove();
    },
    _temp: _.template([
      '<div class="ui-sidebar">',
        '<a class="item hide" data-action="gotop" href="javascript:;"><i class="fa"></i></a>',
      '</div>'
    ].join(''))
  });

  $.extend(Sidebar,{
    options : {
      offset: "-50%"
    }
  });

  return Sidebar;
}));