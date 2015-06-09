require(['jquery','utils','jquery.waypoints','jquery.ui','jquery.pagination'],function($,utils){
  var $body = $(document.body);
  /**
   * 组件默认值设置
   */

  //topnav
  +(function(){
    console.log('执行topnav模块！');
    $body.on('mouseenter','.ui-topnav>.item',function(){
      var $this = $(this).addClass('active');
    });
    $body.on('mouseleave','.ui-topnav>.item',function(){
      var $this = $(this).removeClass('active');
    });
  })();

  /**
   * header-bar
   */
  !(function(){
    var $headerBar = $(".header-bar");
    var $headerLayer = $('.header-layer');
    if($headerBar.length == 0) return;

    $headerBar.waypoint({
      offset: -10,
      handler: function(direction){
        $headerLayer.toggleClass('fixed',direction == "down");
      }
    });
  })();

  /* 综合搜索 */
  !(function(){
    var $headerLayer = $(".header-bar,.user-header-bar"),
        $form = $headerLayer.find('form'),
        $select = $form.find('.search-type-select')
        $search = $form.find('.search'),
        $btn = $form.find('.search-btn');

    if(utils.browser>7){
      $select.selectmenu({
        change: function(){
          $select.trigger('change');
        }
      });
      $select.each(function(){
        var select = $(this).data('uiSelectmenu');
        select.menuWrap.addClass('search-type-menu');
        select.button.addClass('search-type');
      });
    }else{
      $select.css({visibility:'visible'});
    }
    $select.on('change',function(){
      var data = $select.find('option:selected').data();
      $form.attr('action',data.action);
      $search.attr('name',data.key);
    });
    $btn.on('click',function(){
      $form.submit();
    });
  })();

  //filter
  +(function(){
    console.log('执行filter模块！');
    $body.on('click','.ui-filter .control',function(){
      $(this).parent().toggleClass('open');
    });
  })();

});
