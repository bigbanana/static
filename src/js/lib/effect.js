/**
 * 创建一个css3动画（参考animate.css）
 * @param  {[domElement]} el [动画元素]
 * @param  {[string]} type [动画类型]
 * @param  {[string]} speed [动画速度]
 * @return {[Deferred]}         [jquery延迟对象]
 */

(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('effect',['jquery','utils'],factory);
  } else {
    factory( jQuery,utils );
  }
}(function($,utils){
  
  var Effect = function(opt){
    var that = this,className;
    var def = $.Deferred();
    this.options = $.extend(true,{},arguments.callee.options,opt);
    this.$el = $(opt.el);

    if(utils.browser>9){
      className = this.getClassName();
      this.$el.addClass(className).one(this.options.events,function(){
        that.$el.removeClass(className);
        def.resolve();
      });
    }else{
      def.resolve();
    }
    return def.promise();
  }

  $.extend(Effect.prototype,{
    getClassName: function(){
      var classNames = [],
          speed = this.options.speed ? 'animate-speed-'+this.options.speed : '';
      classNames.push(this.options.type);
      classNames.push(this.options.animated);
      speed && classNames.push(speed);
      return classNames.join(' ');
    }
  });
  $.extend(Effect,{
    options: {
      speed: '',
      animated: 'animated',
      events: 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
    }
  });

  return Effect

}));