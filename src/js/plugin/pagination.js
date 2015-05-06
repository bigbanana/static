define('jquery.pagination',['jquery','underscore'],function($,_){
  function Pagination(){
    this.options = $.extend(this,arguments.callee.options,opt);
    this.$el = $(opt.el);
    this.init();
  }

  $.extend(Pagination.prototype,{
    init: function(){
      this.$el.addClass('pagination');
    },
    selectPage: function(number){
      
    },
    createElement: function(opt){
      return $(this._elementTemp(opt));
    },
    render: function(){
      var self = this;
      var totalPage = Math.ceil(this.total/this.pageSize);
      var opt = {
        page: 1,
      }
      //添加当前页
      this.$el.append(this.createElement({
        page: this.currentPage,
        html: this.currentPage,
        style: 'current'
      }));
      //添加显示条数
      _.times(this.displayEdges,_.bind(function(index){
        var index = index+1;
        var prev = this.currentPage-index,
            next = this.currentPage+index;
        if(prev > 0){
          this.$el.prepend(this.createElement({
            page: prev,
            html: prev,
            style: ''
          }));
        }
        if(next < totalPage){
          this.$el.append(this.createElement({
            page: next,
            html: next,
            style: ''
          }));
        }
      },this));
      //添加省略
      //当外边缘加1还小于显示条数开始值则出现省略号。
      if(this.edges+1 < this.currentPage-this.displayEdges){
        this.$el.prepend(this.createElement({
          page: prev,
          html: this.ellipseText,
          style: 'ellipse'
        }));
      }
      //添加边缘
      _.times(this.edges,_.bind(function(index){
        var index = this.edges-index;
        var prevStart = this.currentPage-this.displayEdges;
        var nextStart = this.currentPage+this.displayEdges;
        var prev = index,
            next = totalPage-index;

        if(prev<prevStart){
          this.$el.prepend(this.createElement({
            page: prev,
            html: prev,
            style: ''
          }));
        }
        if(next>nextStart){
          this.$el.append(this.createElement({
            page: prev,
            html: prev,
            style: ''
          }));
        }

      },this));
    },
    _elementTemp: _.template([
      '<a href="<%= href%>" class="<%= style %>"><%= html %></a>'
    ].join(''))
  });

  $.extend(Pagination,{
    options : {
      currentPage: 0,
      pageSize: 10,
      total: 0,
      edges: 1,
      displayEdges: 2,
      prev: "上一页",
      next: "下一页",
      href: "#page-<%= page %>",
      ellipseText: "&hellip;",
      onChange: $.noop
    }
  });

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.pagination')

      if (!data) $this.data('bs.pagination', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }
  $.fn.pagination = Plugin;
  $.fn.pagination.Constructor = Pagination;

});
