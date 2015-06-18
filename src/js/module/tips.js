define('tips',['jquery','underscore','jquery.easing'],function($,_){
  function Tips(opt){
    $.extend(this,{
      type: 'info',
      content: '',
      distance: 60,
      duration: 300,
      delay: 2600,
      easing: 'easeOutCirc'
    },opt);
    this.init();
  }

  $.extend(Tips.prototype,{
    init: function(){
      var that = this;
      this.$el = $(this._template(this)).appendTo(document.body);
      var marginTop = parseInt(this.$el.css('marginTop')) || 0;
      var startCss = {
        marginTop : marginTop-this.distance,
        opacity : 0
      };
      var css = {
        marginTop : marginTop,
        opacity : 1
      };
      var endCss = {
        marginTop : marginTop+this.distance,
        opacity : 0
      };
      this.$el.css(startCss).animate(css,{
        duration : this.duration,
        easing : this.easing
      }).delay(this.delay).animate(endCss,{
        duration : this.duration,
        easing : this.easing,
        done: function(){
          that.$el.remove();
        }
      });
    },
    _template: _.template([
      '<div class="ui-tips">',
        '<div class="ui-tips-content ui-tips-<%= type %>"><%= content %></div>',
      '</div>'
    ].join(''))
  });

  return Tips;

});
