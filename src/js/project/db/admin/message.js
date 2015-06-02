define(['jquery','jquery.ui'],function($){
  function ztCategoryModuleList(){
    var checkModule;
    $('#makeSure').on('click',function(){
        checkModule = [];
        $('input[type=checkbox]:checked').each(function(index, el) {
            checkModule.push($(el).attr('data-obj'));
        });
        window.sendDialogMessage('ztCategoryModuleList',{data:checkModule});
        window.closeDialog();
    })
  }

  function ztAdd(obj){
    var base_link = "./ztCategoryModuleList";
    $('select[name=cid]').on('change',function(){
      if($(this).val()=='0'){
        $('#addModule').attr('href','javascript:void(0);');
      }else{
        $('#addModule').attr('href',base_link+'/id/'+$(this).val());
      }
    });
    window.onDialogMessage('ztCategoryModuleList',function(data){
        
    })
  }

  return {
    ztCategoryModuleList: ztCategoryModuleList,
    ztAdd:ztAdd
  }

});