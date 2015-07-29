/**
 * 三态复选框
 */
(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('jquery.threecheckbox',['jquery','jquery.widget','underscore'],factory);
  } else {
    factory( jQuery,widget,_ );
  }
}(function($,widget,_){

  var ThreeCheckbox = function(opt){
    this.options = $.extend(true,{},arguments.callee.options,opt);
    var $el = $(opt.el);
    var name = $el.attr('name');
    var value = $el.val();
    this.$el = $('<input style="display:none;" type="text" name="'+name+'" value="'+value+'">');
    $el.replaceWith(this.$el);
    this.init();
    this.updateUI();
  }

  $.extend(ThreeCheckbox.prototype,{
    init : function(){
      var _this = this;
      this.$el.wrap('<span class="ui-checkbox-three"></span>');
      this.$wrap = this.$el.parent();
      this.$wrap.prepend('<i class="ui-checkbox-three-icon"></i>');
      this.events();
    },
    events: function(){
      var that = this;
      this.$wrap.on('click',_.debounce(function(e){
        var value = parseInt(that.$el.val());
        var num = that.options.halfclick ? 3 : 2;

        value = ++value%num;
        that.$el.val(value);
        that.updateUI();
      },0,true));
    },
    updateUI: function(){
      this.$wrap.attr('class','ui-checkbox-three ui-state-'+this.options.state[this.$el.val()]);
    },
    destroy: function(){
      this.$el.unwrap();
    }
  });
  $.extend(ThreeCheckbox,{
    options: {
      halfclick: false,//设置成true即可点击设置第三态，默认不能点击设置
      state: ['unchecked','checked','halfchecked']
    }
  });

  widget.install('threecheckbox',ThreeCheckbox);

  return ThreeCheckbox

}));