define(['jquery','underscore','backbone','backbone.epoxy','jquery.validate','jquery.ui'],function($,_,Backbone){

  var AddItemView = Backbone.View.extend({
    el : '<div class="tit-contact"></div>'
  });
  var AddCollection = Backbone.Collection.extend({
    model: Backbone.Model
  });

  function release(){
    var $publishForm = $(".publish-form");
    var $parent = $("#parent"),$child = $("#child");
    var $addressForm = $("#address-form");
    $parent.on('change',function(){
      show_child(this.value,"purchase_category");
      if(!this.value) return;
      $.post(ajaxUrl.linkage,
        {
          table:'purchase_category',
          pid:this.value
        },
        function(data){
          $child.html(optionsTemp({list:data}));
        },
      'json');

    });

    $addressForm.dialog({
      width:620,
      height:480,
      modal:true
    }).on('submit',function(){
      var $this = $(this);
      var validator = $this.data('validator');
      if(!validator.form()){
        return false;
      }
      $.post($this.attr('action'),$this.serialize(),function(res){
        debugger;
      },'json');
      return false;
    });
    $addressForm.validate();
    
    $('.use-newadd').on('click',function(){
      $addressForm.dialog('open')[0].reset();
      $addressForm.data('validator').form();
    });
    $publishForm.on('click','.change_address',function(){

    });

    _.each(addList,function(item,index){

    });

    /**
     * templates
     */
    
    //select template
    var optionsTemp = _.template([
      '<% _.each(list,function(item,index){ %>',
        '<option value="<%= item.id %>"><%= item.name %></option>',  
      '<% }) %>',
    ].join(''));
    //addItemTemp
    var addItemTemp = _.template([
      '<div class="tit-contacts">',
        '<div class="tit-contact">',
          '<span><input class="tit-contact-input ignore" type="radio" name="address_id" value="<%= id %>"></span>',
          '<span>联系人：<%= contact %></span>',
          '<span>手机号：<%= mobi %></span>',
          '<span>地址：<%= address %></span>',
          '<a class="tit-contact-a change_address" href="javascript:;">修改信息</a>',
        '</div>',
      '</div>'

    ].join(''));

  /*    var $parent = $("#parent");
    $parent.on('change',function(){
      show_child(this.value,"purchase_category");
    });
    
    $('#new_address').click(function(){
      // $('#anonymous-contact').show();
      $('.contacts').remove();
      if($('ano-contacts').length==0){
        var address_info =  '<div class="contacts ano-contacts"> <div class="st">  <span class="st-span"><b>*</b>联系人：</span>  <div class="st-ifo"><input class="text" type="text" name="contact" value=""></div> </div> <div class="st">  <span class="st-span"><b>*</b>手机号码：</span>  <div class="st-ifo"><input class="text" type="text" name="mobi" value=""></div> </div><div class="st"><span class="st-span">或固定电话</span>  <div class="st-ifo">  <input class="text" type="text" name="tel" value=""></div> </div> <div class="st">  <span class="st-span"><b>*</b>E-mail：</span>  <div class="st-ifo">  <input class="text" type="text" name="email" value=""> </div> </div> <div class="st">  <span class="st-span">联系地址：</span>  <div class="st-ifo">  <input class="text" type="text" name="address" value="">  </div> </div> <div class="st">  <span class="st-span">所属单位：</span>  <div class="st-ifo">  <input class="text" type="text" name="company" value="">  </div> </div> <div class="st">  <span class="st-span">邮编：</span>  <div class="st-ifo">  <input class="text" type="text" name="postcode" value="">  </div> </div> </div>';
        $('.anonymous-contact').after(address_info);
      }
      else{
        alert($('ano-contacts').length);
      }
    });

    $('.use-newadd').click(function(){
      // $('#anonymous-contact').show();
      $('.contacts').remove();
      if($('ano-contacts').length==0){
        var address_info =  '<div class="contacts ano-contacts"> <div class="st">  <span class="st-span"><b>*</b>联系人：</span>  <div class="st-ifo"><input class="text" type="text" name="contact" value=""></div> </div> <div class="st">  <span class="st-span"><b>*</b>手机号码：</span>  <div class="st-ifo"><input class="text" type="text" name="mobi" value=""></div>  <span class="st-span st-span80">或固定电话</span>  <div class="st-ifo">  <input class="text text198" type="text" name="tel" value=""></div> </div> <div class="st">  <span class="st-span"><b>*</b>E-mail：</span>  <div class="st-ifo">  <input class="text" type="text" name="email" value=""> </div> </div> <div class="st">  <span class="st-span">联系地址：</span>  <div class="st-ifo">  <input class="text" type="text" name="address" value="">  </div> </div> <div class="st">  <span class="st-span">所属单位：</span>  <div class="st-ifo">  <input class="text" type="text" name="company" value="">  </div> </div> <div class="st">  <span class="st-span">邮编：</span>  <div class="st-ifo">  <input class="text" type="text" name="postcode" value="">  </div> </div> <div class="st">  <span class="st-span">&nbsp;</span>  <input class="button saveaddress" type="button" value="保存" onclick="saveaddr();"> </div></div>';
        $('.anonymous-contact').after(address_info);
        $('#new_address').attr('checked','checked');
      }
      else{
        alert($('ano-contacts').length);
      }
    });

    $(function(){
       //ueditor 表单验证 
      ueditor = UE.getEditor('ueditor_contents');
      ueditor.addListener('contentChange',function(){
        ueditor.sync();
        $(this.textarea).valid();
      });

      //--------------------------
      var ue = UE.getEditor('ueditor_upload');

      $('.prev').on('click','.cancel',function() {
        $(this).parents('li').remove();
      });
      $('body').on('mouseenter mouseleave','.prev li',function(){
        $(this).find('.file-panel').toggle(1);
      });

      ue.ready(function(){
        ue.hide();
        // ue.getDialog("insertimage").open();
        ue.addListener('beforeInsertImage', function(t, args) {
          if(args.length>5){
            alert('最多上传5张图片');
            return false;
          }
          $.each(args,function(i,item){
            $('.prev').append('<li><img src="'+item.src+'" /><div class="file-panel"><span class="cancel"></span></div><input type="hidden" name="pictures[]" value="'+item.src+'" /></li>');
          })
        });
      });

      $(".upload").on("click",function(){
        ue.getDialog("insertimage").open();
        $(this).nextAll('.error').remove();
      });
      var $publishForm = $('.publish-form');
      var validator = $publishForm.validate({
        ignore : '[type="file"]'
      });
      $publishForm.on('submit',function(e){
        var $pictures = $publishForm.find('input[name="pictures[]"]');
        if(!$pictures.length){
          var $err = $(".upload").nextAll('.validate-error');
          if(!$err.length){
            $(".upload").after('<span class="validate-error">相关图片不能为空</span>');
          }
          return false;
        }

        if(!validator.form()){
          return false;
        }
      });

    });*/

  }
  
  function edit(){
    $('#new_address').click(function(){
        // $('#anonymous-contact').show();
        $('.contacts').remove();
        if($('ano-contacts').length==0){
            var address_info =  '<div class="contacts ano-contacts"> <div class="st">  <span class="st-span"><b>*</b>联系人：</span>  <div class="st-ifo"><input class="text" type="text" name="contact" value=""></div> </div> <div class="st">  <span class="st-span"><b>*</b>手机号码：</span>  <div class="st-ifo"><input class="text" type="text" name="mobi" value=""></div>  <span class="st-span st-span80">或固定电话</span>  <div class="st-ifo">  <input class="text text198" type="text" name="tel" value=""></div> </div> <div class="st">  <span class="st-span"><b>*</b>E-mail：</span>  <div class="st-ifo">  <input class="text" type="text" name="email" value=""> </div> </div> <div class="st">  <span class="st-span">联系地址：</span>  <div class="st-ifo">  <input class="text" type="text" name="address" value="">  </div> </div> <div class="st">  <span class="st-span">所属单位：</span>  <div class="st-ifo">  <input class="text" type="text" name="company" value="">  </div> </div> <div class="st">  <span class="st-span">邮编：</span>  <div class="st-ifo">  <input class="text" type="text" name="postcode" value="">  </div> </div> <div class="st">  <span class="st-span">&nbsp;</span>  <input class="button saveaddress" type="button" value="保存" onclick="saveaddr();"> </div></div>';
            $('.anonymous-contact').after(address_info);
        }
        else{
            alert($('ano-contacts').length);
        }
    })
    $('.prev').on('click','.cancel',function() {
        $(this).parents('li').remove();
    });
    $('body').on('mouseenter mouseleave','.prev li',function(){
      $(this).find('.file-panel').toggle(1);
    });

    var ue = UE.getEditor('ueditor_upload');   
    ue.ready(function(){
      ue.hide();
      // ue.getDialog("insertimage").open();
      ue.addListener('beforeInsertImage', function(t, args) {
        if(args.length>5){
          alert('最多上传5张图片');
          return false;
        }
        $.each(args,function(i,item){
          $('.prev').append('<li><img src="'+item.src+'" /><div class="file-panel"><span class="cancel"></span></div><input type="hidden" name="pictures[]" value="'+item.src+'" /></li>');
        })
      });
    });
    $(function(){
      $(".upload").click(function(){
        ue.getDialog("insertimage").open();
        $(this).nextAll('.error').remove();
      })
    });
  }

  return {
    release : release,
    edit : release
  }

});
