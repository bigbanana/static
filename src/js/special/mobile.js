define('mobile',['jquery',"fastclick","TweenMax"],function($,FastClick,TweenMax){
  require(['jquery.pagination'],function(Pagination){
    $.extend(Pagination.options,{
      edges : 0,
      displayEdges : 0
    });
  });
  $(function() {
    FastClick.attach(document.body);

    var $navToggle = $('.nav-toggle');
    var $topNavWrapper = $('.ui-topnav-wrapper');
    var $topNav = $('.ui-topnav');

    $navToggle.on('click',function(){
      $topNavWrapper.addClass('open');
      TweenMax.fromTo($topNavWrapper,0.3,{background:"rgba(0, 0, 0, 0)"},{background:"rgba(0, 0, 0, 0.66)"});

      TweenMax.to($topNav,0.3,{x:"100%",ease:Power3.easeOut});
    });
    $topNavWrapper.on('click',function(){
      TweenMax.to($topNav,0.3,{
        x:"0%",
        ease:Power3.easeOut,
        onComplete:function(){
          $topNavWrapper.removeClass('open');
        }
      });
      TweenMax.fromTo($topNavWrapper,0.3,{background:"rgba(0, 0, 0, 0.66)"},{background:"rgba(0, 0, 0, 0)"});

    }).on('touchmove',function(e){
      e.preventDefault();
    });

    $topNav.off('mouseenter mouseleave').on('click',function(e){
      e.stopPropagation();
    }).on('click','>.item',function(){
      var $this = $(this);
      $this.toggleClass('active').siblings('.active').removeClass('active');
    });

  });

  

});
