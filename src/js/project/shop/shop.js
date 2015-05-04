define(['jquery','baidu.map','jquery.validate'],function($){

  function index(){
    $(function(){
      var $submitForm = $('.submit-form');
      var $phone = $submitForm.find('input[name="phone"]');
      var $mail = $submitForm.find('input[name="mail"]');
      var $elements = $phone.add($mail);

      jQuery.validator.addMethod("mobilePhoneEmail", function(value, element) {
        if(!$phone.val() && !$mail.val()){
          return false;
        }
        return true;
      }, "电话和E-mail至少填写一项");

      $elements.on('focus keyup',function(){
        $elements.nextAll('.validate-error:not(.validate-success)').remove();
      });
      var validator = $submitForm.validate();
      $submitForm.on('submit',function(e){
        if(!validator.form()){
          return false;
        }
      });
    });
    
  }

  function contactUs(){
    var $map = $("#bmap");
    var data = $map.data();
    var mapcode = data.mapcode.split(",");
    var defaultPoint = [106.570025,29.52886];
    var p0 = parseFloat(mapcode[0]) || defaultPoint[0];
    var p1 = parseFloat(mapcode[1]) || defaultPoint[1];

    var map = new BMap.Map("bmap");
    var point = new BMap.Point(p0,p1);
    map.centerAndZoom(point,15);//根据point居中
    map.addControl(new BMap.NavigationControl());//添加平稳缩放
    map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
    map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用

    var infoWindow = new BMap.InfoWindow("<div style='font-size:14px;'>"+data.address+"</div>",{
      width : 250,height:100,title:"联系地址",enableCloseOnClick:false,enableMessage:false
    });
    map.openInfoWindow(infoWindow,point);

  }

  function feedbackList(){
    $(function(){
      var $submitForm = $('.submit-form');
      var $phone = $submitForm.find('input[name="phone"]');
      var $mail = $submitForm.find('input[name="mail"]');
      var $elements = $phone.add($mail);

      jQuery.validator.addMethod("mobilePhoneEmail", function(value, element) {
        if(!$phone.val() && !$mail.val()){
          return false;
        }
        return true;
      }, "电话和E-mail至少填写一项");

      $elements.on('focus keyup',function(){
        $elements.nextAll('.validate-error:not(.validate-success)').remove();
      });
      var validator = $submitForm.validate();
      $submitForm.on('submit',function(e){
        if(!validator.form()){
          return false;
        }
      });
    });
  }

  return {
    index : index,
    contactUs : contactUs,
    feedbackList : feedbackList,
    summary : index
  }

});
