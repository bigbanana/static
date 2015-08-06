/**
 * [自动完成]
 * @param  {[string]} source [远程数据源]
 * 数据格式为{state:1,msg:"成功",data:[{name:"aaa"},{name:"bbb"},...]}
 * @return {[object]}         [AutoComplete实例]
 */
(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('jquery.autoComplete',['jquery','underscore','jquery.widget','effect'],factory);
  } else {
    factory( jQuery,_,widget,Effect );
  }
}(function($,_,widget,Effect){

  var AutoComplete = function(opt){
    this.options = $.extend(true,{},arguments.callee.options,opt);
    this._cache = {};
    this._list = [];
    this.state = "hide";
    this.$el = $(opt.el);
    this.$el[0].autocomplete = "off";
    this.init();
  }

  $.extend(AutoComplete.prototype,{
    init: function(){
      this.$el.wrap('<div class="ui-autocomplete"></div>');
      this.$wrap = this.$el.parent();
      this.$box = $('<div class="ui-autocomplete-box"><ul class="ui-autocomplete-list"></ul></div>');
      this.$list = this.$box.find('.ui-autocomplete-list');
      this.$el.after(this.$box);
      this.events();
    },
    events: function(){
      var that = this;
      this.$el.on('focus',$.proxy(this.show,this));
      this.$el.on('blur',$.proxy(this.hide,this));
      this.$el.on('keydown',_.debounce(function(e){
        switch(e.keyCode){
          case 9:
          case 13:
          case 37:
          case 39:{
            break;
          }
          case 38:{
            //up
            that.move(-1);
            e.preventDefault();
            e.stopPropagation();
            break;
          }
          case 40:{
            //down
            that.move(1);
            e.preventDefault();
            e.stopPropagation();
            break;
          }
          default:{
            that.req(that.$el.val());
          }
        }
      },100));
      this.$el.on('autoCompleteChange',function(e,data){
        that.$el.val(data.name);
      });
      this.$list.on('mousedown','>li',function(){
        var index = $(this).index();
        that.$el.trigger('autoCompleteChange',that._list[index]);
      });
    },
    req: function(key){
      var that = this;
      if(!key){
        this.render([],key);
        return;
      }
      if(!!this._cache[key]){
        this.render(this._cache[key],key);
        return;
      }
      $.get(this.options.source).done(function(res){
        that._cache[key] = res.data;
        that.render(that._cache[key],key);
      });
    },
    render: function(list,key){
      var that = this;
      this._list = list;
      this.$list.empty();
      _.each(list,function(item,i){
        that.$list.append(that._liTemp({item:item,key:key}));
      });

      if(list.length == 0){
        this.hide();
      }else{
        this.show();
      }
    },
    move: function(step){
      var len = this._list.length;
      var $children = this.$list.children();
      var index = $children.filter('.active').removeClass('active').index();
      var active,num = index+step;
      if(num<0){
        if(index == -1){
          num++;
        }
        active = num%len+len;
      }else{
        active = num%len;
      }
      $children.eq(active).addClass('active').trigger('click');
    },
    show: function(){
      if(this.state == 'show' || this._list.length == 0) return;
      this.$wrap.addClass('open');
      new Effect({
        el: this.$box,
        type: 'fadeInDown',
        speed: 'fast'
      });
      this.state = 'show';
    },
    hide: function(){
      var that = this;
      if(this.state == 'hide') return;
      new Effect({
        el: this.$box,
        type: 'fadeOutUp',
        speed: 'fast'
      }).done(function(){
        that.$wrap.removeClass('open');
        that.state = 'hide';
      });
    },
    _liTemp: _.template([
      '<li class="<% if(key == item.name){ %>active<% } %>"><span><%= item.name %></span></li>'
    ].join(''))
  });

  $.extend(AutoComplete,{
    options : {}
  });

  widget.install('autoComplete',AutoComplete);

  return AutoComplete

}));