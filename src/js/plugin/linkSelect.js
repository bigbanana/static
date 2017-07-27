/**
 * 级联下拉选择(已和药智数据耦合较深，其它项目慎用)
 * 参数
 * names : 分别的字段名，字符串(用逗号隔开)或数组(每一个的名字)
 * default : 默认值，字符串或数组，同理names参数
 * list : [
 *          {
 *            name:"",
 *            value:"",
 *            list:[{name:"",value:""}]
 *          }
 *        ]
 * src : 远程拉取数据,数据格式为list
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
    if(!this.options.defaults && typeof(this.options.defaults)!="number"){
      this.options.defaults = [];
    }
    
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
      if($.type(this.options.defaults)!="array"){
        // fix 有些options自带","导致的bug
        this.options.defaults = this.options.defaults.toString().replace(/([^\\]),/,'$1||').replace(/\\,/,',').split('||');
      }
      if(!!this.options.data && $.type(this.options.data)=="string"){
        this.options.data = $.parseJSON(this.options.data);
      }

      this.create();
    },
    create: function(){
      var self = this;
      this.createSelect(this.options).done(function($select){
        self.$el.append($select);
        $select.dropdownSelect();
        $select.trigger('ls-create');
        _.defer(_.bind(self.setDefault,self));
      });
    },
    events: function(){
      var self = this;
      this.$el.on('change','select',function(){
        var $this = $(this);
        var $widget = $this.data('dropdownSelect').$widget;
        var $selected = $this.find('option:selected');
        var data = $selected.data('data');
        $widget.nextAll().remove();
        if(!data) return;
        self.createSelect(data).done(function($select){
          $widget.after($select);
          $select.trigger('ls-create');
          $select.dropdownSelect();
        });
      });
    },
    getName: function($el){
      var index = this.$el.children().length;
      if(this.options.names.length>1){
        return this.options.names[index];
      }else{
        return this.options.names;
      }
    },
    setValue: function(index,item){
      var $select = this.$el.children().eq(index).children('select');
      $select.val(item).trigger('change');
    },
    createSelect: function(data){
      var self = this;
      var func = arguments.callee;
      var def = $.Deferred();
      var promise = def.promise();
      if(data.list === null){
        def.reject();
        return promise;
      };
      if(!data.list){
        data.list = null;
        this.req(data.val).done(function(res){
          if(res.state != 1){
            def.reject(); 
          };
          data.list = res.data;
          func.call(self,data).done(function($select){
            def.resolve($select);
          });
        });
        return promise;
      }
      if(data.list.length == 0){
        def.reject();
        return promise;
      }
      var list = data.list;
      var option = $.extend({},this.options,{name:this.getName()});
      var $select = $(this.selectTemp(option));
      var obj,opt = {};

      if(list.length == 0) return;
      list = list.concat();
      while(obj=list.shift()){
        $select.append(this.createOption(obj));
      }
      def.resolve($select);
      return promise;
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
    req: function(val){
      if(!this.options.src){
        var d=$.Deferred();
        d.reject();
        return d.promise();
      }
      return $.ajax({
        url: this.options.src,
        type: 'get',
        dataType: 'json',
        data: {val:val}
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