define('module/slider',['jquery','underscore',
  'jquery.easing'],function($,_){
  //滑动显示一个列表
  var Slider = function(opt){
    this.options = $.extend(true,{},Slider.options,opt);
    this.$el = $(opt.el);

    this.init();
  }
  $.extend(Slider.prototype,{
    init : function(){
      var _this = this;
      $items = this.$el.children();
      this.current = 0;
      var itemWidth = $items.eq(0).outerWidth(true),
          itemHeight = $items.eq(0).outerHeight(true)
      this.options.group = {
        width : this.options.direction && (itemWidth * this.options.displayNumber) || itemWidth,
        height : this.options.direction && itemHeight || (itemHeight * this.options.displayNumber)
      };
      this.$el.css({
        position:'relative',overflow:'hidden',
        width : this.options.group.width,
        height : this.options.group.height
      }).addClass('ui-slider');
      $items.detach().each(function(){
        _this.appendItem(this);
      });
      this.sliderGroup(0);
    },
    sliderGroup : function(index,direction){
      direction = direction || 1;
      var _this = this;
      var fx = this.options.fx;
      var $itemGroups = this.$el.find('.ui-slider-group');

      index = ($itemGroups.length+index) % $itemGroups.length
      
      var $prev = $itemGroups.eq(this.current);
      var $target = $itemGroups.eq(index);

      var fromCss = fx.from(this.options.group,this.options,$target);
      var toCss = fx.to(this.options.group,this.options,$prev);
      var curCss = {
        left:0,top:0,opacity:1,zIndex:5
      }

      var elems = [];
      var delay = Math.abs(fx.delay);

      function prev(){
        var csss = direction>0 ? toCss : fromCss;
        $prev.stop(true).animate(csss,{
          duration : fx.duration,
          easing : fx.easing
        });
        _this.$el.dequeue();
      }
      function target(){
        var csss = direction<0 ? toCss : fromCss;
        $target.stop(true).css(csss).animate(curCss,{
          duration : fx.duration,
          easing : fx.easing
        });
        _this.$el.dequeue();
      }
      this.$el.queue(prev).delay(fx.delay).queue(target);

      this.current = index;
    },
    appendItem : function($item){
      $item = $($item).addClass('ui-slider-item');
      var $itemGroup = this.$el.find('.ui-slider-group:last');
      if($itemGroup.length == 0 || $itemGroup.find('.ui-slider-item').length == this.options.displayNumber){
        $itemGroup = $('<div class="ui-slider-group">').css({
          position : 'absolute',opacity : 0,
          width : this.options.group.width,
          height : this.options.group.height
        });
        this.$el.append($itemGroup);
      }
      $itemGroup.append($item);
    },
    prev : function(){
      this.sliderGroup(this.current-1,-1);
    },
    next : function(){
      this.sliderGroup(this.current+1,1);
    }
  });
  $.extend(Slider,{
    options : {
      direction : 1,//1:horizontal,2:vertical
      displayNumber : 1,
      fx : {
        delay : 100,
        duration : 1000,
        easing : 'easeOutExpo',
        //开始
        from : function(options,opt,$item){
          var css = {zIndex:10};
          if(opt.direction){
            css.left = options.width;
          }else{
            css.top = options.height;
          }
          return css
        },
        //结束
        to : function(options,opt,$item){
          var css = {zIndex:10};
          if(opt.direction){
            css.left = -options.width;
          }else{
            css.top = -options.height;
          }
          return css;
        }
      }
    }
  });

  $.fn.extend({
    slider : function(opt){
      opt = opt || {};
      var args = Array.prototype.slice.apply(arguments);
      args.shift();
      return this.each(function(){
        var $this = $(this);
        var data = $this.data('slider');

        if($.type(opt) == 'object'){
          opt = $.extend({},opt);
          $.extend(opt,{el:$this});
          data = new Slider(opt);
          $this.data('slider',data);
        }
        if($.type(opt) == 'string') data[opt].apply(data,args);

        return this;
      });
    }
  });

  return Slider

});