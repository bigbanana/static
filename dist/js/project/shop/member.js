/* build : 564493634@qq.com 2015-04-24 10:10:37 */
define(["jquery","baidu.map","jquery.validate","jquery.ui"],function(e){function n(){}function t(){var n=e('input[name="contact[mapcode]"]'),t=n.val().split(","),i=[106.570025,29.52886],o=parseFloat(t[0])||i[0],a=parseFloat(t[1])||i[1],r=new BMap.Map("bmap"),l=new BMap.Point(o,a);r.centerAndZoom(l,15),r.addControl(new BMap.NavigationControl),r.enableScrollWheelZoom(),r.enableContinuousZoom();var c=new BMap.Marker(l);c.enableDragging(),c.addEventListener("dragend",function(e){n.val([e.point.lng,e.point.lat].join(","))}),r.addOverlay(c);var s=e(".submit-form"),u=s.validate();s.on("submit",function(){return u.form()?void 0:!1})}function i(){window.show_child=function(n,t,i){n>0?e.post(AJAX.linkage,{table:t,pid:n},function(n){e("#"+i+" .child").remove();var t='<select name="cid" class="child">',o="";e.each(n,function(e,n){o+='<option value="'+n.id+'">'+n.name+"</option>"});var t=t+o+"</select>";e("#"+i+" select").after(t)},"json"):e("#"+i+" .child").remove()},window.CheckSubmit=function(){var n=e("a[class=st-ifo-a-hover]");return n.each(function(n,t){e("form").append("<input name='tag[]' type='hidden' value='"+e(t).attr("tag-id")+"'>")}),e("#protocal").is(":checked")?!0:(alert("请阅读阅读药智商城行为准则，并同意后再提交"),!1)},e(function(){e(".st-ifo-a").click(function(){e(this).removeClass().addClass("st-ifo-a-hover"==e(this).attr("class")?"st-ifo-a":"st-ifo-a-hover")}),e(".prev").on("click",".cancel",function(){e(this).parents("li").remove()}),e("body").on("mouseenter mouseleave",".prev li",function(){e(this).find(".file-panel").toggle(1)}),e(".upload").click(function(){n.getDialog("insertimage").open(),e(this).nextAll(".error").remove()});var n=UE.getEditor("ueditor_upload");n.ready(function(){n.hide(),n.addListener("beforeInsertImage",function(n,t){return t.length>5?(alert("最多上传5张图片"),!1):void e.each(t,function(n,t){e(".prev").append('<li><img src="'+t.src+'" /><div class="file-panel"><span class="cancel"></span></div><input type="hidden" name="pictures[]" value="'+t.src+'" /></li>')})})}),ueditor=UE.getEditor("ueditor_contents"),ueditor.addListener("contentChange",function(){ueditor.sync(),e(this.textarea).valid()});var t=e(".publish-form"),i=t.validate({ignore:"input[type=file],.ignore"});t.on("submit",function(){if(0==t.find("input[name=protocal]:checked").length)return alert("请阅读阅读药智商城行为准则，并同意后再提交"),!1;var n=t.find('input[name="pictures[]"]');if(!n.length){var o=e(".upload").nextAll(".error");return o.length||e(".upload").after('<span class="error">相关图片不能为空</span>'),!1}if(!i.form())return!1;var a=e("a[class=st-ifo-a-hover]");t.find('input[name="tag[]"]').remove(),a.each(function(n,i){t.append("<input name='tag[]' type='hidden' value='"+e(i).attr("tag-id")+"'>")})})})}function o(){e(function(){e(".prev5s").on("mouseenter mouseleave","li",function(){e(this).find(".file-panel").toggle(1)}),e(".prev5s").on("click",".cancel",function(){e(this).parents("li").remove()}),e("#upload1").click(function(){ue.getDialog("insertimage").open(),e(this).nextAll(".error").remove()}),e("#upload2").click(function(){ue2.getDialog("insertimage").open()}),e("#upload3").click(function(){ue3.getDialog("insertimage").open()}),e("#upload4").click(function(){ue4.getDialog("insertimage").open(),e(this).nextAll(".error").remove()}),e("#upload5").click(function(){ue5.getDialog("insertimage").open()}),get_area("<{$shopinfo['company_province']}>","company_city","<{$shopinfo['company_city']}>"),get_area("<{$shopinfo['company_city']}>","company_district","<{$shopinfo['company_area']}>"),get_area("<{$shopinfo['reg_province']}>","reg_city","<{$shopinfo['reg_city']}>"),get_area("<{$shopinfo['reg_city']}>","reg_district","<{$shopinfo['reg_area']}>"),ueditor=UE.getEditor("ueditor_contents"),ueditor.addListener("contentChange",function(){ueditor.sync(),e(this.textarea).valid()});var n=e(".info-form"),t=n.validate();n.on("submit",function(){var i=n.find('input[name="logo"]'),o=n.find('input[name="profile_pic"]');if(!o.length){var a=e("#upload4").nextAll(".error");return a.length||e("#upload4").after('<span class="error">公司简介不能为空</span>'),!1}if(!i.length){var a=e("#upload1").nextAll(".error");return a.length||e("#upload1").after('<span class="error">公司Logo不能为空</span>'),!1}return t.form()?void 0:!1}),e(".datepicker").datepicker()})}return{index:n,contactUs:t,releaseSupply:i,shopInfo:o}});