(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('jquery.placeholder',['jquery','modernizr','jquery.widget'],factory);
  } else {
    factory( jQuery,modernizr,widget );
  }
}(function($,modernizr,widget){
  function Placeholder(opt){
    Placeholder.options.id++;
    this.$el = $(opt.el);
    if(!opt.text){
      opt.text = this.$el.attr('placeholder');
    }
    this.options = $.extend(true,{},Placeholder.options,opt);
    this.init();
  }

  $.extend(Placeholder.prototype,{
    init : function(){
      if(modernizr.input.placeholder){
        return;
      }
      var _this = this;
      var options = this.options;
      options.height = this.$el.height();
      var height = options.height;
      var borderWidth = parseInt(this.$el.css('borderTopWidth')) || 0;
      var id = this.$el.attr('id');
      if(!id){
        id = 'placeholder_'+options.id;
        this.$el.attr('id',id);
      }
      this.$label = $('<label for="'+id+'">'+options.text+'</label>')
        .css({
          position : 'absolute',
          cursor : 'text',
          color : "graytext",
          fontSize : this.$el.css('fontSize'),
          paddingTop : parseInt(this.$el.css('paddingTop'))+borderWidth,
          paddingLeft : parseInt(this.$el.css('paddingLeft'))+borderWidth,
          lineHeight : height+'px'
        }).insertBefore(this.$el);
      this.$el.on('keyup focus input propertychange',function(){
        if(_this.$el.val() == ""){
          _this.$label.text(options.text);
        }else{
          _this.$label.text("");
        }
      });
      this.$el.trigger('input');
    }
  });

  $.extend(Placeholder,{
    options : {
      text : '请输入内容',
      id : 1
    }
  });

  widget.install('placeholder',Placeholder);

  return Placeholder;

}));
