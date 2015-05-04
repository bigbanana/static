require(['jquery','modernizr','respond'],function($,modernizr){
  $(window).on('load',function(){
    $("#html5shiv span").text($('html').attr('class'));
  });
});