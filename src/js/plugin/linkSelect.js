(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('jquery.linkSelect',['jquery','underscore','jquery.widget'],factory);
  } else {
    factory( jQuery,_,widget );
  }
}(function($,_,widget){
  //滑动显示一个列表
  var LinkSelect = function(opt){
    this.options = $.extend(true,{},arguments.callee.options,opt);
    var $el = $(opt.el);
    this.options.className = $el.attr('class');
    this.$el = $('<div class="link-select-wrap"></div>');
    $el.replaceWith(this.$el);
    this.init();
    this.events();
  }

  $.extend(LinkSelect.prototype,{
    init : function(){
      var that = this;
      if(!!this.options.names && $.type(this.options.names)!="array"){
        this.options.names = this.options.names.split(',');
      }
      if(!!this.options.default && $.type(this.options.default)!="array"){
        this.options.default = this.options.default.split(',');
      }
      if(!!this.options.data){
        this.create();
        return;
      }
      if(!this.options.src) return;
      $.get(this.options.src).done(function(res){
        that.option.data = res;
        that.create();
      });
    },
    create: function(){
      this.$el.append(this.createSelect(this.options.data));
      _.defer(_.bind(this.setDefault,this));
    },
    events: function(){
      var that = this;
      this.$el.on('change','select',function(){
        var $this = $(this);
        var $selected = $this.find('option:selected');
        var data = $selected.data('data');
        $this.nextAll().remove();
        if(!data || !data.list || data.list.length == 0) return;
        $this.after(that.createSelect(data.list));
      });
    },
    getName: function($el){
      var index = this.$el.children().length;
      if(this.options.names){
        return this.options.names[index];
      }else{
        return this.options.names+(index+1);
      }
    },
    setValue: function(index,item){
      var $select = this.$el.children().eq(index);
      $select.val(item).trigger('change');
    },
    createSelect: function(data){
      var option = $.extend({},this.options,{name:this.getName()});
      var $select = $(this.selectTemp(option));
      var list = data,obj;

      if(list.length == 0) return;
      
      while(obj=list.shift()){
        $select.append(this.createOption(obj));
      }

      return $select;
    },
    createOption: function(data){
      var $option = $(this.optionTemp(data));
      $option.data('data',data);
      return $option;
    },
    setDefault: function(){
      var that = this;
      $.each(this.options.default,function(index,item){
        that.setValue(index,item);
      });
    },
    selectTemp: _.template([
      '<select name="<%= name %>" class="<%= className %>"></select>'
    ].join('')),
    optionTemp: _.template([
      '<option value="<%= val %>"><%= name %></option>'
    ].join(''))
  });
  $.extend(LinkSelect,{});

  widget.install('linkSelect',LinkSelect);

  return LinkSelect

}));