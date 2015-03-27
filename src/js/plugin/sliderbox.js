define('jquery.sliderbox',['jquery','underscore',
  'jquery.easing'],function($,_){
  //滑动显示一个列表
  var SliderBox = function(opt){
    this.options = $.extend(true,{},arguments.callee.options,opt);
    this.$el = $(opt.el);
    this.init();
  }
  $.extend(SliderBox.prototype,{
    init : function(){
      var _this = this;
      this.$items = this.$el.children().css({float:'left'}).detach().addClass('ui-sliderbox-item');
      this.$itemBox = $('<div class="ui-sliderbox-box"></div>').css({position:'absolute',left:0,top:0}).append(this.$items).appendTo(this.$el);

      this.current = 0;

      var width = this.$items.eq(0).outerWidth(true),
          height = this.$items.eq(0).outerHeight(true);
      this.options.item = {
        width : width,
        height : height
      }
      if(this.options.direction == 2){
        this.$itemBox.css({height:height*this.$items.length});
      }else{
        this.$itemBox.css({width:width*this.$items.length});
      }

      this.$el.css({
        position:'relative',
        overflow:'hidden',
        width : width,
        height : height
      }).addClass('ui-sliderbox');
      this.options.control && this.initControl();
      this.slider(0);
    },
    initControl : function(){
      var _this = this;
      this.$controlBox = $('<div class="ui-sliderbox-control"></div>').appendTo(this.$el);
      this.$items.each(function(i){
        _this.$controlBox.append('<a href="javascript:;">'+i+'</a>');
      });
      this.$controlBox.on(this.options.eventType,'a',function(){
        var $this = $(this);
        _this.slider($this.index());
      });
      if(this.options.auto){
        function start(){
          clearInterval(_this.timer);
          _this.timer = setInterval($.proxy(_this.next,_this),_this.options.delay);
        }
        function end(){
          clearInterval(_this.timer);
        }
        this.$el.hover(end,start);
        start();
      }
    },
    slider : function(index,direction){
      var _this = this;
      var fx = this.options.fx;

      index = (this.$items.length+index) % this.$items.length
      
      if(this.direction == 2){
        endCss = {top:this.options.item.height*index}
      }else{
        endCss = {left:-this.options.item.width*index}
      }
      this.$itemBox.stop(true).animate(endCss,{
        duration : fx.duration,
        easing : fx.easing
      });
      this.$controlBox.children().removeClass('active').eq(index).addClass('active');
      this.current = index;
    },
    prev : function(){
      this.slider(this.current-1);
    },
    next : function(){
      this.slider(this.current+1);
    }
  });
  $.extend(SliderBox,{
    options : {
      direction : '1',//1:horizontal,2:vertical
      eventType : 'click',
      displayNumber : 1,
      control : true,
      auto : true,
      delay : 3000,
      fx : {
        duration : 400,
        easing : 'easeOutExpo'
      }
    }
  });

  $.fn.extend({
    sliderbox : function(opt){
      opt = opt || {};
      var args = Array.prototype.slice.apply(arguments);
      args.shift();
      return this.each(function(){
        var $this = $(this);
        var data = $this.data('sliderbox');

        if($.type(opt) == 'object'){
          opt = $.extend({},opt,{el:$this});
          data = new SliderBox(opt);
          $this.data('sliderbox',data);
        }
        if($.type(opt) == 'string') data[opt].apply(data,args);

        return this;
      });
    }
  });

  return SliderBox

});