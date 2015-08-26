/**
 * 借用jqueryui tabs
 * type : 
 *   pie 饼图
 *   column 柱图
 *   line 线图
 */
(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('jquery.highchartTable',['jquery','jquery.widget','highchartTable'],factory);
  } else {
    factory( jQuery,widget );
  }
}(function($,widget){

  //保存highchartTable方法
  var $_fn_highchartTable = $.fn.highchartTable;
  var num = 0;
  var HighchartTable = function(opt){
    num++;
    this.options = $.extend(true,{},arguments.callee.options,opt);
    this.$el = $(this.options.el);

    //容器
    if(!this.options.container){
      this.$el.before('<div></div>');
      this.$container = this.$el.prev()
        .attr('id','data-graph-container-'+num)
        .css({width:this.options.width,height:this.options.height});
      this.$el.attr('data-graph-container','#'+'data-graph-container-'+num);
    }
    //类型
    this.$el.attr('data-graph-type',this.options.type).removeAttr('data-type');
    //标题
    this.$el.attr('data-graph-title-text',this.options.title).removeAttr('data-title');
    //副标题
    this.$el.attr('data-graph-subtitle-text',this.options.subtitle).removeAttr('data-subtitle');

    //处理pie饼图标题
    if(this.options.type == "pie"){
      this.$el.attr('data-graph-datalabels-enabled','1');
      this.$el.find('>tbody>tr').each(function(){
        var $children = $(this).children();
        $children.eq(1).attr('data-graph-name',$children.eq(0).text());
      });
    }

    //使用highchartTable方法
    $_fn_highchartTable.call(this.$el,this.options);

  }

  $.extend(HighchartTable.prototype,{});
  $.extend(HighchartTable,{
    options: {
      type: 'column',
      title: '',
      subtitle: '',
      width: 600,
      height: 400
    }
  });

  //注册组件，覆盖jquery-ui的tabs方法
  widget.install('highchartTable',HighchartTable);

  return HighchartTable

}));