/* build : 564493634@qq.com 2015-06-03 15:20:47 */
define(["jquery","baidu.map","jquery.validate","jquery.ui"],function(e){function n(){}function t(){var n=e('input[name="contact[mapcode]"]'),t=n.val().split(","),i=[106.570025,29.52886],a=parseFloat(t[0])||i[0],r=parseFloat(t[1])||i[1],o=new BMap.Map("bmap"),u=new BMap.Point(a,r);o.centerAndZoom(u,15),o.addControl(new BMap.NavigationControl),o.enableScrollWheelZoom(),o.enableContinuousZoom();var c=new BMap.Marker(u);c.enableDragging(),c.addEventListener("dragend",function(e){n.val([e.point.lng,e.point.lat].join(","))}),o.addOverlay(c);var l=e(".submit-form"),d=l.validate();l.on("submit",function(e){return d.form()?void 0:!1})}function i(){window.show_child=function(n,t,i,a){n>0?e.post(AJAX.linkage,{table:t,pid:n},function(n){if(n.length)e(this).attr("name",a);else{e("#"+i+" .child").remove();var t='<select name="'+a+'" class="child">',r="";e.each(n,function(e,n){r+='<option value="'+n.id+'">'+n.name+"</option>"});var t=t+r+"</select>";e("#"+i+" select").after(t)}},"json"):e("#"+i+" .child").remove()},window.CheckSubmit=function(){var n=e("a[class=st-ifo-a-hover]");return n.each(function(n,t){e("form").append("<input name='tag[]' type='hidden' value='"+e(t).attr("tag-id")+"'>")}),e("#protocal").is(":checked")?!0:(alert("请阅读阅读药智商城行为准则，并同意后再提交"),!1)},e(function(){e(".st-ifo-a").click(function(){e(this).removeClass().addClass("st-ifo-a-hover"==e(this).attr("class")?"st-ifo-a":"st-ifo-a-hover")}),e(".prev").on("click",".cancel",function(){e(this).parents("li").remove()}),e("body").on("mouseenter mouseleave",".prev li",function(){e(this).find(".file-panel").toggle(1)}),e(".upload").click(function(){n.getDialog("insertimage").open(),e(this).nextAll(".error").remove()});var n=UE.getEditor("ueditor_upload");n.ready(function(){n.hide(),n.addListener("beforeInsertImage",function(n,t){return t.length>5?(alert("最多上传5张图片"),!1):void e.each(t,function(n,t){e(".prev").append('<li><img src="'+t.src+'" /><div class="file-panel"><span class="cancel"></span></div><input type="hidden" name="pictures[]" value="'+t.src+'" /></li>')})})}),ueditor=UE.getEditor("ueditor_contents"),ueditor.addListener("contentChange",function(){ueditor.sync(),e(this.textarea).valid()});var t=e(".publish-form"),i=t.validate({ignore:"input[type=file],.ignore"});t.on("submit",function(n){if(0==t.find("input[name=protocal]:checked").length)return alert("请阅读阅读药智商城行为准则，并同意后再提交"),!1;var a=t.find('input[name="pictures[]"]');if(!a.length){var r=e(".upload").nextAll(".error");return r.length||e(".upload").after('<span class="error">相关图片不能为空</span>'),!1}if(!i.form())return!1;var o=e("a[class=st-ifo-a-hover]");t.find('input[name="tag[]"]').remove(),o.each(function(n,i){t.append("<input name='tag[]' type='hidden' value='"+e(i).attr("tag-id")+"'>")})})})}function a(){e(function(){ue=UE.getEditor("ueditor_upload"),ue2=UE.getEditor("ueditor_upload2"),ue3=UE.getEditor("ueditor_upload3"),ue4=UE.getEditor("ueditor_upload4"),ue5=UE.getEditor("ueditor_upload5"),ue.ready(function(){ue.hide(),ue.addListener("beforeInsertImage",function(n,t){return t.length>1?(alert("最多上传1张图片"),!1):void e.each(t,function(n,t){e(".prev1").html('<img src="'+t.src+'" /><input type="hidden" name="logo" value="'+t.src+'" />')})})}),ue2.ready(function(){ue2.hide(),ue2.addListener("beforeInsertImage",function(n,t){return t.length>1?(alert("最多上传1张图片"),!1):void e.each(t,function(n,t){e(".prev2").html('<img src="'+t.src+'" /><input type="hidden" name="sell_certificate" value="'+t.src+'" />')})})}),ue3.ready(function(){ue3.hide(),ue3.addListener("beforeInsertImage",function(n,t){return t.length>1?(alert("最多上传1张图片"),!1):void e.each(t,function(n,t){e(".prev3").html('<img src="'+t.src+'" /><input type="hidden" name="agent_certificate" value="'+t.src+'" />')})})}),ue4.ready(function(){ue4.hide(),ue4.addListener("beforeInsertImage",function(n,t){return t.length>1?(alert("最多上传1张图片"),!1):void e.each(t,function(n,t){e(".prev4").html('<img src="'+t.src+'" /><input type="hidden" name="profile_pic" value="'+t.src+'" />')})})}),ue5.ready(function(){ue5.hide(),ue5.addListener("beforeInsertImage",function(n,t){return t.length>5?(alert("最多上传5张图片"),!1):void e.each(t,function(n,t){e(".prev5 ul").find("li").length<5?e(".prev5 ul").append('<li><img src="'+t.src+'" /><input type="hidden" name="pictures[]" value="'+t.src+'" /><div class="file-panel"><span class="cancel">删除</span></div></li>'):alert("公司荣誉最多上传5张图片")})})}),e(".prev5s").on("mouseenter mouseleave","li",function(n){e(this).find(".file-panel").toggle(1)}),e(".prev5s").on("click",".cancel",function(n){e(this).parents("li").remove()}),e("#upload1").click(function(){ue.getDialog("insertimage").open(),e(this).nextAll(".error").remove()}),e("#upload2").click(function(){ue2.getDialog("insertimage").open()}),e("#upload3").click(function(){ue3.getDialog("insertimage").open()}),e("#upload4").click(function(){ue4.getDialog("insertimage").open(),e(this).nextAll(".error").remove()}),e("#upload5").click(function(){ue5.getDialog("insertimage").open()}),get_area("<{$shopinfo['company_province']}>","company_city","<{$shopinfo['company_city']}>"),get_area("<{$shopinfo['company_city']}>","company_district","<{$shopinfo['company_area']}>"),get_area("<{$shopinfo['reg_province']}>","reg_city","<{$shopinfo['reg_city']}>"),get_area("<{$shopinfo['reg_city']}>","reg_district","<{$shopinfo['reg_area']}>"),ueditor=UE.getEditor("ueditor_contents"),ueditor.addListener("contentChange",function(){ueditor.sync(),e(this.textarea).valid()});var n=e(".info-form"),t=n.validate();n.on("submit",function(i){var a=n.find('input[name="logo"]'),r=n.find('input[name="profile_pic"]');if(!r.length){var o=e("#upload4").nextAll(".error");return o.length||e("#upload4").after('<span class="error">公司简介不能为空</span>'),!1}if(!a.length){var o=e("#upload1").nextAll(".error");return o.length||e("#upload1").after('<span class="error">公司Logo不能为空</span>'),!1}return t.form()?void 0:!1}),e(".datepicker").datepicker()})}return{index:n,contactUs:t,releaseSupply:i,shopInfo:a}});