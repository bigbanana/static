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
        var value = parseInt(that.getValue());
        var num = that.options.halfclick ? 3 : 2;
        console.log(value);
        value = ++value%num;
        that.setValue(value);
        that.updateUI();
      });
    },
    getValue: function(){
      return this.$el.val()-this.options.start;
    },
    setValue: function(value){
      this.$el.val(value+this.options.start);
    },
    updateUI: function(){
      this.$wrap.attr('class','ui-checkbox-three ui-state-'+this.options.state[this.getValue()]);
    },
    destroy: function(){
      this.$el.unwrap();
    }
  });
  $.extend(ThreeCheckbox,{
    options: {
      halfclick: false,//设置成true即可点击设置第三态，默认不能点击设置
      start: 1,//起始值
      state: ['unchecked','checked','halfchecked']
    }
  });

  widget.install('threecheckbox',ThreeCheckbox);

  return ThreeCheckbox

}));