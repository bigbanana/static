
define('jquery.gsap',['jquery','TweenMax','utils'],function($,TweenMax,utils){
  var Gsap = function(opt){
    if(utils.browser<9) return;
    this.options = $.extend(true,{},arguments.callee.options,opt);
    this.$el = $(opt.el);
    this.init();
  }

  $.extend(Gsap.prototype,{
    init : function(){
      this.timeLine = new TimelineLite({paused:this.options.paused});
      this.$el.data('tl',this.timeLine);
      this.createTimeLine(this.timeLine,this.$el);
    },
    createTimeLine: function(timeLine,$el){
      var that = this;
      var $el = $($el);
      var $animates = $el.find('[data-method]');

      $animates.each(function(el,i){
        that.addTween(timeLine,this);
      });
    },
    addTween: function(timeLine,$el){
      var that = this;
      var $el = $($el);
      var params = $.extend({},this.constructor.params,$el.data());
      params.vars = eval('('+params.vars+')');
      var tween;
      switch(params.method){
        case "staggerFromTo":{
          tween = TweenMax[params.method]($el.children(),params.duration,params.vars,params.tovars,params.stagger);
          break;
        }
        case "staggerFrom":
        case "staggerTo":{
          tween = TweenMax[params.method]($el.children(),params.duration,params.vars,params.stagger);
          break; 
        }
        default:{
          tween = TweenMax[params.method]($el,params.duration,params.vars);
        }
      }
      timeLine.add(tween,params.position);
    }
  });
  $.extend(Gsap,{
    options : {
      paused:false
    },
    params: {
      method:"from",
      duration:0.5,
      vars:'{}',
      position:'+=0',
      stagger:0
    }
  });

  $.fn.extend({
    gsap : function(opt){
      opt = opt || {};
      var args = Array.prototype.slice.apply(arguments);
      args.shift();
      return this.each(function(){
        var $this = $(this);
        var data = $this.data('gsap');
        if(!data && $.type(opt) == 'object'){
          opt = $.extend({},opt,{el:$this});
          data = new Gsap(opt);
          $this.data('gsap',data);
        }
        if($.type(opt) == 'string') data[opt].apply(data,args);

        return this;
      });
    }
  });

  return Gsap
});
