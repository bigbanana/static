//弹窗事件通知传递
+(function(){
  var top = window.top;
  if(!top.dialogMessage){
    //给top注册事件绑定，事件触发
    var dialogMessage = {},_callbacks = {};
    top.dialogMessage = dialogMessage;
    dialogMessage.on = function(event,callback){
      if(!_callbacks[event]){
        _callbacks[event] = [];
      }
      var callbacks = _callbacks[event];
      callbacks.push(callback);
    }
    dialogMessage.trigger = function(event,data){
      var callbacks = _callbacks[event];
      if(!callbacks) return;
      for(var i=0;i<callbacks.length;i++){
        callbacks[i](data);
      }
    }
  }
  //给当前window添加接口方法
  window.sendDialogMessage = function(){
    top.dialogMessage.trigger.apply(top.dialogMessage,arguments);
  };
  window.onDialogMessage = function(){
    top.dialogMessage.on.apply(top.dialogMessage,arguments);
  }
})();


require(['jquery','underscore','backbone','jquery.pagination','jquery.ui'],function($,_,Backbone){
  $.dialogSetting = $.extend({
    width: 600,
    height: 400
  },$.dialogSetting);
  $(function(){
    var $body = $(document.body);
  
    /* 添加链接tab支持 */
    +(function(){
      $body.on('click',"a[data-tabs]",function(e){
        var $link = $(this)
        var tabs = $link.data('tabs');
        var tab = $(tabs).data('uiTabs');

        if(tab){
          e.preventDefault();
          var href = $link[0].href;
          var title = $link.attr('title') || $link.text();
          var id = encodeURIComponent(href);
          var $target = tab.tabs.find('>a[href="#'+id+'"]');
          var opt = {
            id: id,
            href: href,
            title: title,
            height: $body.height()-130
          }
          if($target.length==0){
            var $li = $(tabNavTemp(opt));
            var $target = $li.find('>a');
            tab.tablist.append($li);
            tab.element.append($(tabContentTemp(opt)));
            tab.refresh();
          }
          $target.trigger('click');
        }
      });

      $body.on("click",".ui-tabs-nav li .ui-icon-close",function() {
        var $this = $(this);
        var $tab = $this.closest(".ui-tabs")
        var panelId = $this.closest( "li" ).remove().attr( "aria-controls" );
        $(document.getElementById(panelId)).remove();
        $tab.tabs( "refresh" );
      });
    })();
      
    /* 添加navigate功能 */
    +(function(){
      //刷新
      $body.on('click',".navigate .reload",function(){
        window.location.reload();
      });
      $body.on('click',".navigate .back",function(){
        window.history.back();
      });
      $body.on('click',".navigate .forward",function(){
        window.history.forward();
      });
    })();

    /* 添加widget支持 */
    //设置默认时间格式
    $.datepicker.setDefaults({
      dateFormat:"yy-mm-dd"
    });

  });

  var linkDialogTemp = _.template([
    '<div id="<%= id %>" title="<%= title %>" class="dialog-page">',
      '<div class="content">',
        '<iframe name="<%= id %>-iframe" src="" class="dialog-iframe" style="height:<%= (height-60) %>px;"></iframe>',
      '</div>',
    '</div>'
  ].join(''));

  var tabNavTemp = _.template([
    '<li>',
      '<a href="#<%= id %>"><%= title %></a>',
      '<span class="ui-icon ui-icon-close" role="presentation"></span>',
    '</li>'
  ].join(''));

  var tabContentTemp = _.template([
    '<div id="<%= id %>">',
      '<div class="content">',
        '<iframe class="tab-iframe" src="<%= href %>" style="height:<%= height%>px;"></iframe>',
      '</div>',
    '</div>'
  ].join(''));

});
