define('ie6',['jquery','DD_belatedPNG'],function($,DD_belatedPNG){
  //ie6兼容
  $(function(){
    //png透明
    DD_belatedPNG.fix('img,.png');
    //背景不缓存
    try{
      document.execCommand("BackgroundImageCache", false, true);
    }catch(e){}
    //开启ie6 全局hover功能
    $(document.body).on('mouseover','.ie-hover',function(){
      $(this).addClass('hover')
    }).on('mouseleave','.ie-hover',function(){
      $(this).removeClass('hover')
    });
  });
});