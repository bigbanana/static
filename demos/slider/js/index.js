require(['jquery','jquery.slider','prism'],function($,Slider){
  var $slider = $('.slider-demo').detach();
  //demo1
  (function(){
    var $demo = $('#demo1');
    $demo.append($slider.clone());
    var slider = new Slider({el:$demo.find('.sliders')});
    $demo.on('click','button',function(){
      slider[this.className]();
    });
  })();

  //demo2
  (function(){
    var $demo = $('#demo2');
    $demo.append($slider.clone());
    var slider = new Slider({el:$demo.find('.sliders'),displayNumber:3});
    $demo.on('click','button',function(){
      slider[this.className]();
    });
  })();

  //demo3
  (function(){
    var $demo = $('#demo3');
    $demo.append($slider.clone());
    var slider = new Slider({
      el:$demo.find('.sliders'),
      fx:{
        easing : 'easeOutBack'
      }
    });
    $demo.on('click','button',function(){
      slider[this.className]();
    });
  })();

  //demo4
  (function(){
    var $demo = $('#demo4');
    $demo.append($slider.clone());
    var slider = new Slider({
      el:$demo.find('.sliders'),
      fx:{
        duration : 3000
      }
    });
    $demo.on('click','button',function(){
      slider[this.className]();
    });
  })();

  //demo5
  (function(){
    var $demo = $('#demo5');
    $demo.append($slider.clone());
    var slider = new Slider({
      el:$demo.find('.sliders'),
      fx:{
        delay : 300
      }
    });
    $demo.on('click','button',function(){
      slider[this.className]();
    });
  })();

  //demo6
  (function(){
    var $demo = $('#demo6');
    $demo.append($slider.clone());
    var slider = new Slider({
      el:$demo.find('.sliders'),
      direction:0,
      displayNumber:3
    });
    $demo.on('click','button',function(){
      slider[this.className]();
    });
  })();

  //demo7
  (function(){
    var $demo = $('#demo7');
    $demo.append($slider.clone());
    var slider = new Slider({
      el:$demo.find('.sliders'),
      fx:{
        easing : 'easeOutBounce',
        from:function(options,$item){
          return {
            left : options.width,
            top : -options.height,
            zIndex:10
          }
        },
        to:function(options,$item){
          return {
            left : -options.width,
            top : options.height
          }
        }
      }
    });
    $demo.on('click','button',function(){
      slider[this.className]();
    });
  })();

});