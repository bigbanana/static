/* build : 564493634@qq.com 2015-05-06 09:41:54 */
define(["jquery","underscore","backbone","backbone.epoxy","jquery.validate","jquery.ui"],function(s){function t(){var t=s("#parent");t.on("change",function(){show_child(this.value,"purchase_category")}),window.show_child=function(t,a){t>0?s.post(AJAX.linkage,{table:a,pid:t},function(t){s("#child").remove();var a='<select name="category" id="child">',e="";s.each(t,function(s,t){e+='<option value="'+t.id+'">'+t.name+"</option>"});var a=a+e+"</select>";t.length>0&&s("#st-category select").after(a)},"json"):s("#child").remove()},window.saveaddr=function(){var t=s("input[name=contact]").val(),a=s("input[name=mobi]").val(),e=s("input[name=tel]").val(),n=s("input[name=email]").val(),i=s("input[name=address]").val(),c=s("input[name=company]").val(),l=s("input[name=postcode]").val(),o=s("input[name=address_id]:checked").val(),d=s("input[name=uid]").val();s.post(AJAX.save_address,{id:o,user_id:d,contact:t,mobi:a,tel:e,email:n,address:i,company:c,postcode:l},function(s){alert(1==s.status?"保存成功！":"保存失败！")},"json")},s(document.body).on("click",".change_address_a",function(){obj=s(this),s(".change_address_a").attr("isad",0),s(".contacts").remove(),s("#anonymous-contact").hide(),1!=obj.attr("isad")&&s.post(AJAX.edit_address,{id:s(this).attr("data")},function(s){null==s.contact?s.contact="":"",null==s.mobi?s.mobi="":"",null==s.tel?s.tel="":"",null==s.email?s.email="":"",null==s.address?s.address="":"",null==s.company?s.company="":"",null==s.postcode?s.postcode="":"";var t='<div class="contacts edit-contacts"> <div class="st">  <span class="st-span"><b>*</b>联系人：</span>  <div class="st-ifo"><input class="text" type="text" name="contact" value="'+s.contact+'"></div> </div> <div class="st">  <span class="st-span"><b>*</b>手机号码：</span>  <div class="st-ifo"><input class="text" type="text" name="mobi" value="'+s.mobi+'"></div>  </div> <div class="st"><span class="st-span">或固定电话</span>  <div class="st-ifo">  <input class="text" type="text" name="tel" value="'+s.tel+'"></div> </div> <div class="st">  <span class="st-span"><b>*</b>E-mail：</span>  <div class="st-ifo">  <input class="text" type="text" name="email" value="'+s.email+'"> </div> </div> <div class="st">  <span class="st-span">联系地址：</span>  <div class="st-ifo">  <input class="text" type="text" name="address" value="'+s.address+'">  </div> </div> <div class="st">  <span class="st-span">所属单位：</span>  <div class="st-ifo">  <input class="text" type="text" name="company" value="'+s.company+'">  </div> </div> <div class="st">  <span class="st-span">邮编：</span>  <div class="st-ifo">  <input class="text" type="text" name="postcode" value="'+s.postcode+'">  </div> <div class="st"><span class="st-span">&nbsp;</span><input class="button saveaddress" type="button" value="保存" onclick="saveaddr();"></div></div> </div>';obj.attr("isad",1),obj.parent(".tit-contact").after(t),obj.parent(".tit-contact").find(".tit-contact-input").attr("checked","checked")},"json")}),s("#new_address").click(function(){if(s(".contacts").remove(),0==s("ano-contacts").length){var t='<div class="contacts ano-contacts"> <div class="st">  <span class="st-span"><b>*</b>联系人：</span>  <div class="st-ifo"><input class="text" type="text" name="contact" value=""></div> </div> <div class="st">  <span class="st-span"><b>*</b>手机号码：</span>  <div class="st-ifo"><input class="text" type="text" name="mobi" value=""></div> </div><div class="st"><span class="st-span">或固定电话</span>  <div class="st-ifo">  <input class="text" type="text" name="tel" value=""></div> </div> <div class="st">  <span class="st-span"><b>*</b>E-mail：</span>  <div class="st-ifo">  <input class="text" type="text" name="email" value=""> </div> </div> <div class="st">  <span class="st-span">联系地址：</span>  <div class="st-ifo">  <input class="text" type="text" name="address" value="">  </div> </div> <div class="st">  <span class="st-span">所属单位：</span>  <div class="st-ifo">  <input class="text" type="text" name="company" value="">  </div> </div> <div class="st">  <span class="st-span">邮编：</span>  <div class="st-ifo">  <input class="text" type="text" name="postcode" value="">  </div> </div> </div>';s(".anonymous-contact").after(t)}else alert(s("ano-contacts").length)}),s(function(){ueditor=UE.getEditor("ueditor_contents"),ueditor.addListener("contentChange",function(){ueditor.sync(),s(this.textarea).valid()});var t=UE.getEditor("ueditor_upload");s(".prev").on("click",".cancel",function(){s(this).parents("li").remove()}),s("body").on("mouseenter mouseleave",".prev li",function(){s(this).find(".file-panel").toggle(1)}),t.ready(function(){t.hide(),t.addListener("beforeInsertImage",function(t,a){return a.length>5?(alert("最多上传5张图片"),!1):void s.each(a,function(t,a){s(".prev").append('<li><img src="'+a.src+'" /><div class="file-panel"><span class="cancel"></span></div><input type="hidden" name="pictures[]" value="'+a.src+'" /></li>')})})}),s(".upload").on("click",function(){t.getDialog("insertimage").open(),s(this).nextAll(".error").remove()});var a=s(".publish-form"),e=a.validate({ignore:"input[type=file],.ignore"});a.on("submit",function(){return e.form()?void 0:!1})})}function a(){s(function(){s(".copy").click(function(){s("#webaddr").select(),document.execCommand("Copy"),alert("复制成功")})})}return{release:t,edit:t,releaseSuccess:a}});