define(['jquery','jquery.validate'],function($){

  function index(){
    
    var $form = $('.search-form');
    var validator = $form.validate({
      rules:{
        ch : {
          required:true,
          zhCode:true
        },
        eng : {
          required:true,
          enCode:true
        },
        xuhao : {
          required:true
        },
        cas : {
          required:true
        }
      }
    });
    $form.on('submit',function(e){
      if(!validator.form()){
        return false;
      }
    });

  }

  function info(){
    debugger;
  }

  return {
    index : index,
    info : info
  }

});
