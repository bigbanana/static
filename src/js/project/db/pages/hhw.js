define(['jquery'],function($){
  function index(){

  }

  function detail(){
    $(function(){
      var $zhItems = $('.zh-items');
      $zhItems.on('click','.title',function(){
        $(this).closest('.item').toggleClass('open');
      });

    });
  }

  $.extend(index,{
    detail: detail
  });
  return index;

});
