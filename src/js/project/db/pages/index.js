define(['jquery'],function($){
  function index(){
    var $form = $(".search-tab");
    var $typeid = $form.find('[name=typeid]');
    $form.on('click','.cats .item',function(){
      var $this = $(this);
      $this.addClass('active').siblings('.item').removeClass('active');
      $typeid.val($this.data('typeid'));
    });
    $form.find('.cats .item:eq(0)').trigger('click');
  }
  $.extend(index,{

  });
  return index;

});
