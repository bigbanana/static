/**
 * [移动焦点，使用上下左右移动一组集合的焦点]
 * @param  {[funMap]} obj [键:方法名的键值对]
 * up：向上移动，第一次执行选择最后一排第一个
 * down: 向下移动，第一次执行选择第一排第一个
 * left: 向左移动，第一次执行选择最后一排最后一个
 * right: 向右移动，第一次执行选择第一排第一个
 * @return {[object]}         [实例]
 */
(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('jquery.moveFocus',['jquery','jquery.widget'],factory);
  } else {
    factory( jQuery,widget );
  }
}(function($,widget){
  function MoveFocus(opt){
    this.options = $.extend(true,{},MoveFocus.options,opt);
    this.init();
  }

  $.extend(MoveFocus.prototype,{
    init: function(){
      this.$el = $(this.options.el);
      this.$el[0].autocomplete = "off";
      this.$collection = $(this.options.collection);
      this.events();
    },
    events: function(){
      var that = this;
      this.$el.on('keydown',function(e){
        that.$collection = $(that.options.collection);
        var funName = that.options.funMap[e.keyCode];
        if(!funName) return;
        that[funName]();
        return false;
      });
    },
    up: function(){
      var $first,$ffirst;
      var $active = this.$collection.filter('.active');
      if($active.length == 0){
        this.select(this.$collection.index(this.$collection.eq(-1).siblings().andSelf().filter(':first')));
      }else{
        //选择上一排第一个
        $first = $active.siblings().andSelf().filter(':first');
        $ffirst = this.$collection.eq(this.$collection.index($first)-1).siblings().andSelf().filter(':first');
        this.select(this.$collection.index($ffirst));
      }
    },
    down: function(){
      var $last;
      var $active = this.$collection.filter('.active');
      if($active.length == 0){
        this.select(0);
      }else{
        //选择下一排第一个
        $last = $active.siblings().andSelf().filter(':last');
        this.select(this.$collection.index($last)+1);
      }
    },
    left: function(){
      var current;
      var $active = this.$collection.filter('.active');
      if($active.length == 0){
        current = 0;
      }else{
        current = this.$collection.index($active);
      }
      this.select(current-1);
    },
    right: function(){
      var current;
      var $active = this.$collection.filter('.active');
      if($active.length == 0){
        current = -1;
      }else{
        current = this.$collection.index($active);
      }
      this.select(current+1);
    },
    enter: function(){
      var $active = this.$collection.filter('.active');
      //firefox不兼容 
      $active[0].click();
    },
    select: function(index){
      index = index % this.$collection.length;
      this.$collection.filter('.active').removeClass('active');
      this.$collection.eq(index).addClass('active');
    }
  });

  $.extend(MoveFocus,{
    options : {
      collection: "",
      funMap: {
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        13: "enter"
      }
    }
  });

  widget.install('moveFocus',MoveFocus);

  return MoveFocus;

}));
