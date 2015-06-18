define('loading',['jquery','underscore'],function($,_){

    function Loading(options){
      var _this = this;
      $.extend(this,{
        text:'Loading...',
        duration:300,
        opacity:0.7,
        delay:10000,
        easing:'easeOutCirc'
      },options);
      this.$el = $(options.el);
      this.init();
      this.show();
    }

    $.extend(Loading.prototype,{
      init: function(){
        this.$widget = $(this._temp(this));
        this.$overlay = this.$widget.find('.ui-loading-overlay');
        this.$box = this.$widget.find('.ui-loading-box');
      },
      show: function(){
        var that = this;
        if(this.$el.css('position')!='absolute'){
          this.$el.addClass('ui-loading-parent');
        }
        this.$el.append(this.$widget);
        this.$overlay.css({opacity:0}).animate({opacity:this.opacity},{
          duration : this.duration
        }).delay(this.delay).queue(function(){
          that.hide();
          that.$overlay.dequeue();
        });
        this.$box.delay(100).css({opacity:0,marginTop:-100})
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
        this.$overlay.clearQueue().delay(100).animate({opacity:0},{
          duration: this.duration,
          complete: function(){
            that.$el.removeClass('ui-loading-parent');
            that.$widget.detach();
          }
        });
      },
      _temp: _.template([
        '<div class="ui-loading">',
          '<div class="ui-loading-overlay"></div>',
          '<div class="ui-loading-box"><i class="ui-loading-icon"></i><span class="ui-loading-text"><%= text %></span></div>',
        '</div>'
      ].join(''))
    });

    $.fn.extend({
      loading: function(opt){
        opt = opt || {};
        return this.each(function(){
          var $this = $(this);
          var data = $this.data('loading');

          if($.type(opt) == 'object'){
            opt = $.extend({},opt);
            $.extend(opt,{el:$this});
            data = new Loading(opt);
            $this.data('loading',data);
          }
          
          if(data && $.type(opt) == 'string') data[opt]();

          return this;
        });
      },
      unloading: function(){
        this.loading('hide');
      }
    });
    return Loading;
});