define(['jquery','baidu.map','jquery.validate'],function($){

  function index(){
    
    
  }

  function contactUs(){
    var $mapcode = $('input[name="contact[mapcode]"]');
    var mapcode = $mapcode.val().split(",");
    var defaultPoint = [106.570025,29.52886];
    var p0 = parseFloat(mapcode[0]) || defaultPoint[0];
    var p1 = parseFloat(mapcode[1]) || defaultPoint[1];

    var map = new BMap.Map("bmap");
    var point = new BMap.Point(p0,p1);
    map.centerAndZoom(point,15);//根据point居中
    map.addControl(new BMap.NavigationControl());//添加平稳缩放
    map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
    map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用

    var marker = new BMap.Marker(point);        // 创建标注    
    marker.enableDragging();
    marker.addEventListener("dragend",function(e){
      $mapcode.val([e.point.lng,e.point.lat].join(','));
    });
    map.addOverlay(marker);                     // 将标注添加到地图中


    var $form = $('.submit-form');
    var validator = $form.validate();
    $form.on('submit',function(e){
      if(!validator.form()){
        return false;
      }
    });

  }

  return {
    index : index,
    contactUs : contactUs
  }

});
