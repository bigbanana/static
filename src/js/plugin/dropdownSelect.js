/**
 * dropdown 与 select集成
 */
(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('jquery.dropdownSelect',['jquery','underscore','jquery.dropdown'], factory );
  } else {
    factory( jQuery , _);
  }
}(function($ , _) {  
  var DropdownSelect = function(opt){
    if(opt.event == "hover"){
      opt.event = "mouseenter";
    }
    this.cache = {value:0};
    this.options = $.extend(true,{},arguments.callee.options,opt);
    this.$el = $(opt.el).hide();
    this.init();
  }

  $.extend(DropdownSelect.prototype,{
    init : function(){
      var _this = this;
      this.createWidget();
      this.events();
    },
    events: function(){
      var that = this;
      this.$widget.on('click','.ui-dropdown-menu li',function(){
        var value = $(this).data('value');
        if(that.cache.value == value) return;
        that.$el.val(value);
        that.$el.trigger('change');
      });
      this.$el.on('change',$.proxy(this.changeValue,this));
    },
    changeValue: function(){
      var $selected = this.$el.find('option:selected');
      var value = $selected.val();
      var text = $selected.text();
      this.cache.value = value;
      this.$selectName.text(text);
      this.$selectMenu.find('>li[data-value="'+value+'"]').addClass('selected')
      .siblings('.selected').removeClass('selected');
    },
    createWidget: function(){
      this.list = this.$el.children().map(function(){
        var $this = $(this);
        return {value:$this.val(),text:$this.text()}
      });
      var css = {
        width: this.$el.width()+2
      }
      if(!this.$widget){
        this.$widget = $('<span class="ui-dropdown-select ui-dropdown">').insertAfter(this.$el);
        this.$widget.css(css);
      }else{
        this.$widget.empty();
      }
      this.$widget.html(this._temp({list:this.list}));
      this.$selectName = this.$widget.find('.ui-dropdown-select-name');
      this.$selectMenu = this.$widget.find('.ui-dropdown-select-menu');
      this.changeValue();
    },
    refresh: function(){
      this.createWidget();
    },
    destory: function(){
      this.$widget.remove();
      this.$el.data('dropdownSelect') = null;
      this.$el.show();
    },
    _temp: _.template([
      '<a href="javascript:;" data-widget="dropdown" class="ui-dropdown-select-name"></a>',
      '<i class="ui-dropdown-arrow"></i>',
      '<div class="ui-dropdown-menu">',
        '<ul>',
        '<% _.each(list,function(item){ %>',
          '<li data-value="<%= item.value %>"><a href="javascript:;"><%= item.text %></a></li>',
        '<% }) %>',
        '</ul>',
      '</div>',
    ].join(''))
  });
  $.extend(DropdownSelect,{
    options : {
      event: 'click'
    }
  });

  $.fn.extend({
    dropdownSelect : function(opt){
      opt = opt || {};
      var args = Array.prototype.slice.apply(arguments);
      args.shift();
      return this.each(function(){
        var $this = $(this);
        var data = $this.data('dropdownSelect');

        if($.type(opt) == 'object'){
          opt = $.extend({},opt,{el:$this});
          data = new DropdownSelect(opt);
          $this.data('dropdownSelect',data);
        }
        if($.type(opt) == 'string') data[opt].apply(data,args);

        return this;
      });
    }
  });

  return DropdownSelect

});
