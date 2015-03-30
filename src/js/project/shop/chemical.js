define(['jquery','validate'],function($){

  function index(){
    
    var $form = $('.search-form');
    var validator = $form.validate({
      rules:{
        ch : {
          zhCode:true
        },
        eng : {
          enCode:true
        },
        xuhao : {
          zhCode:true
        },
        cas : {
          casCode:true
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
