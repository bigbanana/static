/* build : 564493634@qq.com 2015-04-10 10:36:48 */
require(["jquery"],function(t){window.browser=function(){var t=navigator.userAgent.match(/msie.(\d+)/i);return t?t[1]:100}(),t(function(){function i(i){var e=-i*n;t("#focus ul").stop(!0,!1).animate({left:e},300),t("#focus .btn span").stop(!0,!1).animate({opacity:"0.4"},300).eq(i).stop(!0,!1).animate({opacity:"1"},300)}t(window).scroll(function(){t(window).scrollTop()>100?t(".return-top").fadeIn():0==t(window).scrollTop()&&t(".return-top").fadeOut()}),t(".return-top").click(function(){t("html,body").animate({scrollTop:"0px"},400)}),window.browser<7&&t(".code").hover(function(){t(this).toggleClass("hover")},function(){t(this).toggleClass("hover")});var e,n=t("#focus").width(),s=t("#focus ul li").length,o=0;if(s>1){for(var a="<div class='btn'>",c=0;s>c;c++)a+="<span></span>";a+="</div>",t("#focus").append(a),t("#focus .btnBg").css("opacity",1),t("#focus .btn span").css("opacity",1).mouseover(function(){o=t("#focus .btn span").index(this),i(o)}).eq(0).trigger("mouseover"),t("#focus ul").css("width",n*s),t("#focus").hover(function(){clearInterval(e)},function(){e=setInterval(function(){i(o),o++,o==s&&(o=0)},4e3)}).trigger("mouseleave")}}),t(function(){function i(i){var e=-i*n;t("#list ul").stop(!0,!1).animate({left:e},300)}for(var e,n=t("#list").width(),s=t("#list ul li").length/3,o=0,a="",c=0;s>c;c++)a+="<div class='preNext pre'></div><div class='preNext next'></div>";t("#list").append(a),t("#list .preNext").css("opacity",.04).hover(function(){t(this).stop(!0,!1).animate({opacity:"0.5"},300)},function(){t(this).stop(!0,!1).animate({opacity:"0.04"},300)}),t("#list .pre").click(function(){o-=1,-1==o&&(o=s-1),i(o)}),t("#list .next").click(function(){o+=1,o==s&&(o=0),i(o)}),t("#list ul").css("width",(n+1)*s),t("#list").hover(function(){clearInterval(e)},function(){e=setInterval(function(){i(o),o++,o==s&&(o=0)},4e3)}).trigger("mouseleave")}),t(function(){function i(i){var e=-i*n;t("#preview ul").stop(!0,!1).animate({left:e},300),t("#preview .btn span").stop(!0,!1).animate({opacity:"0.4"},300).eq(i).stop(!0,!1).animate({opacity:"1"},300)}var e,n=t("#preview").width(),s=t("#preview ul li").length,o=0;if(s>1){for(var a="<div class='btn'>",c=0;s>c;c++)a+="<span></span>";a+="</div>",t("#preview").append(a),t("#preview .btnBg").css("opacity",1),t("#preview .btn span").css("opacity",1).mouseover(function(){o=t("#preview .btn span").index(this),i(o)}).eq(0).trigger("mouseover"),t("#preview ul").css("width",n*s),t("#preview").hover(function(){clearInterval(e)},function(){e=setInterval(function(){i(o),o++,o==s&&(o=0)},4e3)}).trigger("mouseleave")}}),t(document).ready(function(){jQuery.jqtab=function(i,e,n){t(e).find("li").hide(),t(i).find("li:first").addClass("thistab").show(),t(e).find("li:first").show(),t(i).find("li").bind(n,function(){t(this).addClass("thistab").siblings("li").removeClass("thistab");var n=t(i).find("li").index(this);return t(e).children().eq(n).show().siblings().hide(),!1})},t.jqtab("#tabs2","#tab_conbox2","mouseenter")}),t(document).ready(function(){jQuery.jqtab=function(i,e,n){t(e).find("li").hide(),t(i).find("li").bind(n,function(){t(this).addClass("x-search-li").siblings("li").removeClass("x-search-li");var n=t(i).find("li").index(this);return t(e).children().eq(n).show().siblings().hide(),!1})},t.jqtab("#tab-search","#search-o","click")}),t(document).ready(function(){t("#tabs li:first").addClass("curr"),t("#product-detail .yc:gt(0)").hide(),t("#tabs li").click(function(){t(this).addClass("curr").siblings("li").removeClass("curr"),t("#product-detail .yc:eq("+t(this).index()+")").show().siblings(".yc").hide().addClass("curr")})}),t(document).ready(function(){t("#category,#category a").hover(function(){t(this).children(".fl").addClass("hover"),t(this).children("b").addClass("bbup")},function(){t(this).children(".fl").removeClass("hover"),t(this).children("b").removeClass("bbup")})}),t(document).ready(function(){t(".sort-area,.area-b a").hover(function(){t(this).children(".area-n").addClass("hover0"),t(this).children("b").addClass("bboup")},function(){t(this).children(".area-n").removeClass("hover0"),t(this).children("b").removeClass("bboup")})}),t(document).ready(function(){t(".filters a").click(function(){t(this).parents(".filter").children("div").each(function(){t("a",this).removeClass("seled")}),t(this).attr("class","seled")})}),t(document).ready(function(){t("#fil a").click(function(){t(this).parents(".sort-se").children("div").each(function(){t("a",this).removeClass("ba")}),t(this).attr("class","ba")})}),t(document).ready(function(){t(this).hasClass("uparrow")?t(this).removeClass("uparrow").addClass("downarrow"):t(this).removeClass("downarrow").addClass("uparrow")}),t(document).ready(function(){t(".branletter a").click(function(){t(this).parents(".bran").children("div").each(function(){t("a",this).removeClass("on")}),t(this).attr("class","on")})}),t(document).ready(function(){t(".branarea a").click(function(){t(this).parents(".bran").children("div").each(function(){t("a",this).removeClass("on")}),t(this).attr("class","on")}),t(".btn-collect").click(function(){user_id?t.post(collect_url,{user_id:user_id,product_id:product_id,category:category,type:type},function(i){t(".btn-collect span").html(1==i.status?"已收藏":"收藏")},"json"):alert("请先登录！")}),t(".all-checkbox").click(function(){for(var i=t(this).is(":checked"),e=0;e<t(".tr-checkboxs").length;e++){var n=t(".tr-checkboxs")[e];n.checked=i?!0:!1}})}),t(function(){t(".showbox").click(function(){t("#kui_d_pane").hide()}),t(".pop-butn-cancel").click(function(){t(this).parents(".pop-upsmin").hide(),(t("#pop-upload").is(":hidden")||null==document.getElementById("pop-upload"))&&t(".pop-bj").hide()}),t(".pop-close").click(function(){t(this).parents(".pop-ups").hide(),(t(this).parents(".pop-ups").siblings(".pop-ups").is(":hidden")||0==t(this).parents(".pop-ups").siblings(".pop-ups").length)&&t(".pop-bj").hide()}),document.onkeydown=function(i){var e=document.all?window.event:i;13==e.keyCode&&t("#tab_search").click()},t("#hotwords>a").click(function(i){i.preventDefault(),t("input[name=search]").val(t(this).html()),search()})}),t(function(){var i=t(document.body);i.on("click",".action-btn-report",function(){var i=t(this),e=i.data(),n=['<div class="report-dialog" style="padding:20px;" title="举报">','<div><textarea name="report" id="" style="height:100px;width:248px;"></textarea></div>','<div style="margin-top:20px;"><a href="javascript:;" class="submit button">确认</a><a style="margin-left:20px;" href="javascript:;" class="cancel button">取消</a></div>',"</div>"].join(""),s=t(n);s.dialog({height:240,modal:!0}),s.find(".button").button(),s.on("click",".submit",function(){t.post("/index/report",{id:e.id,cat:e.cat,content:s.find("textarea").val()},function(){alert("感谢您的举报，我们将尽快处理"),s.dialog("close")})}),s.on("click",".cancel",function(){s.dialog("close")})})})});