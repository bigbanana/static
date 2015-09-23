/**
 * 级联下拉选择
 * 参数
 * names : 分别的字段名，字符串(用逗号隔开)或数组(每一个的名字)
 * default : 默认值，字符串或数组，同理names参数
 * data : [
 *          {
 *            name:"",
 *            value:"",
 *            list:[{name:"",value:""}]
 *          }
 *        ]
 * src : 远程拉取数据,数据格式为data
 * 
 */
(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('jquery.linkSelect',['jquery','underscore','jquery.widget','jquery.dropdownSelect'],factory);
  } else {
    factory( jQuery,_,widget );
  }
}(function($,_,widget){
  var LinkSelect = function(opt){
    this.options = $.extend(true,{},arguments.callee.options,opt);
    var $el = $(opt.el);
    this.options.className = $el.attr('class');
    this.options.defaults = this.options.defaults || [];
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
      if(!!this.options.defaults && $.type(this.options.defaults)!="array"){
        this.options.defaults = this.options.defaults.toString().split(',');
      }
      if(!!this.options.data && $.type(this.options.data)=="string"){
        this.options.data = $.parseJSON(this.options.data);
      }
      if(!!this.options.src){
        $.get(this.options.src).done(function(res){
          that.option.data = res;
          that.create();
        });
        return;
      }

      this.create();
    },
    create: function(){
      var $select = this.createSelect(this.options.data);
      this.$el.append($select);
      $select.dropdownSelect();
      _.defer(_.bind(this.setDefault,this));
    },
    events: function(){
      var that = this;
      this.$el.on('change','select',function(){
        var $this = $(this);
        var $widget = $this.data('dropdownSelect').$widget;
        var $selected = $this.find('option:selected');
        var data = $selected.data('data');
        $widget.nextAll().remove();
        if(!data || !data.list || data.list.length == 0) return;
        var $select = that.createSelect(data.list);
        $widget.after($select);
        $select.dropdownSelect({className:'mt5'});
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
      var $select = this.$el.children().eq(index).children('select');
      $select.val(item).trigger('change');
    },
    createSelect: function(list,className){
      var option = $.extend({},this.options,{name:this.getName()});
      var $select = $(this.selectTemp(option));
      var obj,opt = {};

      if(list.length == 0) return;
      list = list.concat();
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
      $.each(this.options.defaults,function(index,item){
        that.setValue(index,item);
      });
    },
    selectTemp: _.template([
      '<select name="<%= name %>" class="<%= className %>" data-widget="dropdownSelect"></select>'
    ].join('')),
    optionTemp: _.template([
      '<option value="<%= val %>"><%= name %></option>'
    ].join(''))
  });
  $.extend(LinkSelect,{});

  widget.install('linkSelect',LinkSelect);

  return LinkSelect

}));