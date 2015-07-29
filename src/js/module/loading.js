(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('jquery.loading',['jquery','underscore','jquery.widget'],factory);
  } else {
    factory( jQuery,_,widget );
  }
}(function($,_,widget){
    function Loading(options){
      var _this = this;
      $.extend(this,{
        text:'Loading...',
        duration:300,
        className:"",
        wait:10000,
        easing:'easeOutCirc'
      },options);
      this.$el = $(options.el);
      this.init();
      this.show();
    }

    $.extend(Loading.prototype,{
      init: function(){
        this.$widget = $(this._temp(this)).addClass(this.className);
        this.$overlay = this.$widget.find('.ui-loading-overlay');
        this.$box = this.$widget.find('.ui-loading-box');
      },
      show: function(){
        var that = this;
        if(this.$el.css('position')!='absolute'){
          this.$el.addClass('ui-loading-parent');
        }
        this.$el.append(this.$widget);
        this.$overlay.fadeIn(this.duration)
        .delay(this.wait).queue(function(){
          that.hide();
          that.$overlay.dequeue();
        });
        this.$box.delay(50).css({opacity:0,marginTop:-100})
        .animate({opacity:1,marginTop:-25},{
          duration : this.duration,
          easing : this.easing
        });
      },
      hide: function(){
        var that = this;
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

    widget.install('loading',Loading);

    return Loading;
}));