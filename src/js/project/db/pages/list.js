define(['jquery','underscore','TweenMax','utils'],function($,_,TweenMax,utils){
  function index(){}
  $.extend(index,{
    zh: function(){//综合
      function init(){
        var $zhList = $('.zh-list');
        var searchData = $zhList.data();
        var $panels = $zhList.find('.ui-panel');
        var noDatas = _.map($panels,function(el){
          var $el = $(el);
          var $totalNum = $el.find('.total-num')
          var data = $.extend($el.data(),searchData);
          progress($totalNum,0);//初始化进度

          var ajaxs = _.times(data.dbnum,function(n){
            var req = $.extend({id:n},data);
            var ajax = $.get('/Search/getlist',req,function(res){
              if($.type(res.data) != "object") return;
              $.extend(res.data,searchData);
              addItem(res.data,$el);
            });
            return ajax;
          });

          var noData = $.Deferred();//没有数据延迟对象，有数据reject无数据resolve
          noData.done(function(){//没有数据删除元素
            TweenMax.to($el,0.5,{height:0,opacity:0,ease:Power4.easeOut});
          });
          $.when.apply(null,ajaxs).done(function(){
            if($totalNum.data('progress').total>0){
              noData.reject();
            }else{
              noData.resolve();
            }
          });
          return noData.promise();
        });
        
        //全部都没有数据的时候输出点位
        $.when.apply(null,noDatas).done(function(){
          var $nodata = utils.nodata();
          $zhList.append($nodata.css({marginTop:200}));
          TweenMax.from($nodata,2,{opacity:0,opacity:0,ease:Power4.easeOut});
        });
        TweenMax.staggerFrom($panels,0.5,{top:"-=100",opacity:0,ease:Power4.easeOut},0.1);     
      }

      function addItem(data,$parent){
        var $item = $(itemTemp(data));
        var $num = $item.find('.info em');
        var $totalNum = $parent.find('.total-num');
        var $list = $parent.find('.ui-panel-content');
        var datanum = parseInt(data.datanum);
        var index = $list.data('index') || 0;
        $list.data('index',index+1);
        $list.append($item);
        progress($num,datanum);
        progress($totalNum,datanum);
        TweenMax.from($item,0.5,{top:"-=50",opacity:0,ease:Power4.easeOut});
        TweenMax.to($list,0.5,{height:$list.data('index')*32,ease:Power4.easeOut});
        return $item;
      }

      function progress($el,target){
        var progress = $el.data('progress');
        if(!progress){
          progress = {progress:0,total:0};
          $el.data('progress',progress);
        }
        progress.total+=target;
        TweenMax.to(progress,1,{progress:progress.total,onUpdate:function(){
          $el.text(parseInt(progress.progress));
        }});
      }

      var itemTemp = _.template([
        '<a class="item" href="<%= url %>?content=<%= content%>" target="_blank">',
          '<span class="name"><%= dbname %></span>',
          '<span class="info"><em><%= datanum %></em>条</span>',
        '</a>'
      ].join(''));

      $(init);
    }
  });
  return index;

});
