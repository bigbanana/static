require(['jquery','underscore','jquery.ui'],function($,_){
  $(function(){
    var $body = $(document.body);
    $body.on('click','button[data-location]',function(){
      var method = $(this).data('location');
      method && window.location[method] && window.location[method]();
    });
    $body.on('click','button[data-history]',function(){
      var method = $(this).data('history');
      method && window.history[method] && window.history[method]();
    });
    /* 添加链接弹窗支持 */
    $body.on('click','a[data-dialog]',function(e){
      e.preventDefault();
      var $dialog,$iframe;
      var $this = $(this);
      var data = $this.data();
      var opt = {
        id: data.dialog.replace('#',''),
        title: $this.attr('title') || $this.text(),
        href: $this[0].href,
        target: data.dialog,
        width: data.width || 600,
        height: data.height || 400
      }

      var $dialog = $(opt.target);
      if($dialog.length == 0){
        $dialog = $(linkDialogTemp(opt)).dialog({
          width:opt.width,
          height:opt.height,
          modal:true,
          autoOpen:false
        });
      }
      $dialog.dialog('option',{
        title:opt.title
      });
      window.open(opt.href,opt.id+'-iframe');
      $dialog.dialog('open');
    });

  });

  var linkDialogTemp = _.template([
    '<div id="<%= id %>" title="<%= title %>" class="dialog-page">',
      '<iframe name="<%= id %>-iframe" src="" class="dialog-iframe" style="height:<%= (height-60) %>px;"></iframe>',
    '</div>'
  ].join(''));


});
