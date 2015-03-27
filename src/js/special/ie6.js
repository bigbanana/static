define('ie6',['jquery','DD_belatedPNG'],function($,DD_belatedPNG){
  //ie6兼容
  $(function(){
    //png透明
    DD_belatedPNG.fix('img,.png');
    //背景不缓存
    try{
      document.execCommand("BackgroundImageCache", false, true);
    }catch(e){}
  });
});