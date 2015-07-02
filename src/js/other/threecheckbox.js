/**
 * 三态复选框
 */
(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('jquery.threecheckbox',['jquery','jquery.widget'],factory);
  } else {
    factory( jQuery,widget );
  }
}(function($,widget){

  var ThreeCheckbox = function(opt){
    this.options = $.extend(true,{},arguments.callee.options,opt);
    this.$el = $(opt.el);
    this.init();
    this.updateUI();
  }

  $.extend(ThreeCheckbox.prototype,{
    init : function(){
      var _this = this;
      this.$el.wrap('<span class="ui-checkbox-three">');
      this.$wrap = this.$el.parent();
      this.$wrap.prepend('<i class="ui-checkbox-three-icon">');
      this.events();
    },
    events: function(){
      var that = this;
      this.$wrap.on('click',function(){
        var value = parseInt(that.$el.val());
        var num = that.options.halfclick ? 3 : 2;
        value = ++value%num;
        that.$el.val(value);
        that.updateUI();
      });
    },
    updateUI: function(){
      this.$wrap.attr('class','ui-checkbox-three ui-state-'+this.options.state[this.$el.val()]);
    },
    destroy: function(){
      this.$el.unwrap();
      debugger;
    }
  });
  $.extend(ThreeCheckbox,{
    options: {
      halfclick: true,
      state: ['unchecked','checked','halfchecked']
    }
  });

  widget.install('threecheckbox',ThreeCheckbox);

  return ThreeCheckbox

}));