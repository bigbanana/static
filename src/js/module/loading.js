/**
 * [加载中...]
 * @param  {[string]} text [显示文字]
 * @param  {[boole]} autoShow [初始化时显示]
 * @param  {[number]} duration [持续时间]
 * @param  {[string]} className [额外的class样式]
 * @param  {[number]} wait [超时自动关闭]
 * @param  {[string]} easing [缓动函数]
 * @return {[object]}         [Loading 实例]
 */
(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('jquery.loading',['jquery','underscore','jquery.widget'],factory);
  } else {
    factory( jQuery,_,widget );
  }
}(function($,_,widget){
    function Loading(opt){
      var _this = this;
      $.extend(this,arguments.callee.options,opt);
      this.$el = $(this.el);
      this.init();
      if(this.autoShow){
        this.show();
      }
    }

    $.extend(Loading.prototype,{
      init: function(){
        this.isShow = false;
        this.$widget = $(this._temp(this)).addClass(this.className);
        this.$overlay = this.$widget.find('.ui-loading-overlay');
        this.$box = this.$widget.find('.ui-loading-box');
      },
      show: function(){
        var that = this;
        if(this.isShow) return;
        this.isShow = true;
        if(this.$el.css('position')!='absolute'){
          this.$el.addClass('ui-loading-parent');
        }
        this.$el.append(this.$widget);
        this.$overlay.fadeIn(this.duration);
        if(this.wait){
          this.$overlay.delay(this.wait).queue(function(){
            that.hide();
            that.$overlay.dequeue();
          });
        }
        
        this.$box.delay(50).css({opacity:0,marginTop:-100})
        .animate({opacity:1,marginTop:-25},{
          duration : this.duration,
          easing : this.easing
        });
      },
      hide: function(){
        var that = this;
        if(!this.isShow) return;
        this.isShow = false;
        this.$box.animate({opacity:0,marginTop:50},{
          duration : this.duration,
          easing : this.easing
        });
        this.$overlay.clearQueue().delay(50)
        .fadeOut(this.duration,function(){
          that.$el.removeClass('ui-loading-parent');
          that.$widget.detach();
        });
      },
      destroy: function(){
        var that = this;
        this.hide();
        this.$overlay.queue(function(){
          that.$widget.remove();
          that.$el.data('loading',null);
        });
      },
      _temp: _.template([
        '<div class="ui-loading">',
          '<div class="ui-loading-overlay"></div>',
          '<div class="ui-loading-box"><i class="ui-loading-icon"></i><span class="ui-loading-text"><%= text %></span></div>',
        '</div>'
      ].join(''))
    });

    $.extend(Loading,{
      options : {
        text:'Loading...',
        autoShow:true,
        duration:300,
        className:"",
        wait:10000,
        easing:'easeOutCirc'
      }
    });

    widget.install('loading',Loading);

    return Loading;
}));