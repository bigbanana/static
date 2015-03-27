//require start
require(['jquery'],function($){

//--------------------------------------------------------------------------------------------------
$(function() {
	$(window).scroll(function(){
		if ($(window).scrollTop() > 100) { 
	        $(".return-top").fadeIn(); 
	    } 
	    else if ($(window).scrollTop() == 0) { 
	        $(".return-top").fadeOut(); 
	    } 
	})
	//scroll to TOP
	$(".return-top").click(function(){
		$('html,body').animate({
      scrollTop:'0px'
    },400);
	})

	$(".code").hover(function() {
		$(".poop").toggle(1);
	}, function() {
		$(".poop").toggle(1);
	});

	var sWidth = $("#focus").width(); //获取焦点图的宽度（显示面积）
	var len = $("#focus ul li").length; //获取焦点图个数
	var index = 0;
	var picTimer;
	if(len>1){

		//以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
		var btn = "<div class='btn'>";
		for(var i=0; i < len; i++) {
			btn += "<span></span>";
		}
		btn += "</div>";         //</div><div class='preNext pre'></div><div class='preNext next'>
		$("#focus").append(btn);
		$("#focus .btnBg").css("opacity",1);

		//为小按钮添加鼠标滑入事件，以显示相应的内容
		$("#focus .btn span").css("opacity",1).mouseover(function() {
			index = $("#focus .btn span").index(this);
			showPics(index);
		}).eq(0).trigger("mouseover");


		//本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
		$("#focus ul").css("width",sWidth * (len));
		
		//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
		$("#focus").hover(function() {
			clearInterval(picTimer);
		},function() {
			picTimer = setInterval(function() {
				showPics(index);
				index++;
				if(index == len) {index = 0;}
			},4000); //此4000代表自动播放的间隔，单位：毫秒
		}).trigger("mouseleave");
		
	}
	//显示图片函数，根据接收的index值显示相应的内容
	function showPics(index) { //普通切换
		var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
		$("#focus ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
		//$("#focus .btn span").removeClass("on").eq(index).addClass("on"); //为当前的按钮切换到选中的效果
		$("#focus .btn span").stop(true,false).animate({"opacity":"0.4"},300).eq(index).stop(true,false).animate({"opacity":"1"},300); //为当前的按钮切换到选中的效果
	}
});


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


$(function() {
	var sWidth = $("#list").width(); 
	var len = ($("#list ul li").length)/3; 
	var index = 0;
	var picTimer;
	
	var btn = "";
	for(var i=0; i < len; i++) 
	btn += "<div class='preNext pre'></div><div class='preNext next'></div>";
	$("#list").append(btn);

	$("#list .preNext").css("opacity",0.04).hover(function() {
		$(this).stop(true,false).animate({"opacity":"0.5"},300);
	},function() {
		$(this).stop(true,false).animate({"opacity":"0.04"},300);
	});

	$("#list .pre").click(function() {
		index -= 1;
		if(index == -1) {index = len - 1;}
		showPics(index);
	});

	$("#list .next").click(function() {
		index += 1;
		if(index == len) {index = 0;}
		showPics(index);
	});
	$("#list ul").css("width",(sWidth+1) * (len));
	
	$("#list").hover(function() {
		clearInterval(picTimer);
	},function() {
		picTimer = setInterval(function() {
			showPics(index);
			index++;
			if(index == len) {index = 0;}
		},4000); 
	}).trigger("mouseleave");
	
	function showPics(index) { 
		var nowLeft = -index*sWidth; 
		$("#list ul").stop(true,false).animate({"left":nowLeft},300);
	}
});


//----------xiangqing-----------------------------------------------------------------------------------------------
$(function() {
	var sWidth = $("#preview").width(); 
	var len = $("#preview ul li").length;
	var index = 0;
	var picTimer;
	if(len>1){
		var btn = "<div class='btn'>";
		for(var i=0; i < len; i++) {
			btn += "<span></span>";
		}
		btn += "</div>"; 
		$("#preview").append(btn);
		$("#preview .btnBg").css("opacity",1);

		$("#preview .btn span").css("opacity",1).mouseover(function() {
			index = $("#preview .btn span").index(this);
			showPics(index);
		}).eq(0).trigger("mouseover");

		$("#preview ul").css("width",sWidth * (len));
		
		$("#preview").hover(function() {
			clearInterval(picTimer);
		},function() {
			picTimer = setInterval(function() {
				showPics(index);
				index++;
				if(index == len) {index = 0;}
			},4000);
		}).trigger("mouseleave");
	}
	function showPics(index) { 
		var nowLeft = -index*sWidth;
		$("#preview ul").stop(true,false).animate({"left":nowLeft},300); 
		$("#preview .btn span").stop(true,false).animate({"opacity":"0.4"},300).eq(index).stop(true,false).animate({"opacity":"1"},300); 
	}
});

//------tabbox---------------------------------------------------------------------------------------------------

$(document).ready(function() {
    jQuery.jqtab = function(tabtit,tab_conbox,shijian) {
        $(tab_conbox).find("li").hide();
		$(tabtit).find("li:first").addClass("thistab").show(); 
		$(tab_conbox).find("li:first").show();	
		$(tabtit).find("li").bind(shijian,function(){
		  $(this).addClass("thistab").siblings("li").removeClass("thistab"); 
			var activeindex = $(tabtit).find("li").index(this);
			$(tab_conbox).children().eq(activeindex).show().siblings().hide();
			return false;
		});
	
	};
    /*调用方法如下：*/
	$.jqtab("#tabs2","#tab_conbox2","mouseenter");
    
});


$(document).ready(function() {
    jQuery.jqtab = function(tabtit,tab_search,shijian) {
        $(tab_search).find("li").hide();
		// $(tabtit).find("li:first").addClass("x-search-li").show(); 
		// $(tab_search).find("li:first").show();	
		$(tabtit).find("li").bind(shijian,function(){
		  $(this).addClass("x-search-li").siblings("li").removeClass("x-search-li"); 
			var activeindex = $(tabtit).find("li").index(this);
			$(tab_search).children().eq(activeindex).show().siblings().hide();
			return false;
		});
	
	};
	$.jqtab("#tab-search","#search-o","click");
});


//------------product-detail---------------------------------------------------------


$(document).ready(function(){
$("#tabs li:first").addClass("curr");
$("#product-detail .yc:gt(0)").hide();
$("#tabs li").click(function(){//mouseover 改为 click 将变成点击后才显示，mouseover是滑过就显示
$(this).addClass("curr").siblings("li").removeClass("curr");
$("#product-detail .yc:eq("+$(this).index()+")").show().siblings(".yc").hide().addClass("curr");
});
});


//-----------------------sdadsadsadasd------------------------------------------------------

/*
	表单验证冲突，待删
$(document).ready(function(){
$("#sheet .text").click(function(){
		$(this).addClass("green")}).blur(function(){
		   $(this).removeClass("green");
		   });
})
 
*/


//----------category--------------------------------------------

$(document).ready(function(){
	$("#category,#category a").hover(function(){
			$(this).children(".fl").addClass('hover');
			$(this).children("b").addClass('bbup');	
		},function()
		{ 
			$(this).children(".fl").removeClass('hover');
			$(this).children("b").removeClass('bbup');
		}
	);
 
})

$(document).ready(function(){
	$(".sort-area,.area-b a").hover(function(){
			$(this).children(".area-n").addClass('hover0');
			$(this).children("b").addClass('bboup');
		},function()
		{ 
			$(this).children(".area-n").removeClass('hover0');
			$(this).children("b").removeClass('bboup');
		}
	); 	 
})

//--------filters----------------------------------------------
 $(document).ready(function(){
 	$(".filters a").click(function () {
            $(this).parents(".filter").children("div").each(function () {
				$('a',this).removeClass("seled");
            });
          $(this).attr("class", "seled");
 
        });

});


//--------#fil----------------------------------------------
 $(document).ready(function(){
 	$("#fil a").click(function () {
            $(this).parents(".sort-se").children("div").each(function () {
				$('a',this).removeClass("ba");
            });
          $(this).attr("class", "ba");
        });

});

//------------------------------------------------------------------
 

$(document).ready(function(){
 if($(this).hasClass('uparrow')){

$(this).removeClass('uparrow').addClass('downarrow');

//收起

}else{

$(this).removeClass('downarrow').addClass('uparrow');

//展开
}
})

//------------------------------------------------------------------
$(document).ready(function(){
 	$(".branletter a").click(function () {
            $(this).parents(".bran").children("div").each(function () {
				$('a',this).removeClass("on");
            });
          $(this).attr("class", "on");
 
        });

});
$(document).ready(function(){
 	$(".branarea a").click(function () {
            $(this).parents(".bran").children("div").each(function () {
				$('a',this).removeClass("on");
            });
          $(this).attr("class", "on");
 
        });
 	$('.btn-collect').click(function(){
 		if(!user_id){
 			alert('请先登录！');
 		}
 		else{
 			$.post(collect_url,{'user_id':user_id,'product_id':product_id,'category':category,'type':type},function(data){
 				if(data.status==1){
 					$('.btn-collect span').html('已收藏');
 				}
 				else{
 					$('.btn-collect span').html('收藏');
 				}
 			},'json');
 		}
 	})

 	//--------------------------全选---------------------------
 	$('.all-checkbox').click(function(){
        var ck = $(this).is(':checked');
        for (var i=0;i<$('.tr-checkboxs').length;i++)
        {
            var e = $('.tr-checkboxs')[i];
            // var ck = $($('.alb-i-checbox')[i]).is(':checked');
            e.checked = ck?true:false;
        }
    })

});


//------------------------弹出窗------------------------------------------------------
$(function() {
		
	$('.showbox').click(function(){
			$('#kui_d_pane').hide();
		});	
	$('.pop-butn-cancel').click(function(){
		// $("#pop-create-album").hide();
		$(this).parents('.pop-upsmin').hide();
		if($("#pop-upload").is(':hidden')||document.getElementById("pop-upload")==null){
			$(".pop-bj").hide();
		}
	});
	$('.pop-close').click(function(){
		$(this).parents('.pop-ups').hide();
		// console.log($(this).parents('.pop-ups').siblings('.pop-ups').length);
		if($(this).parents('.pop-ups').siblings('.pop-ups').is(':hidden')||$(this).parents('.pop-ups').siblings('.pop-ups').length==0){
			$(".pop-bj").hide();
		}
	});
	document.onkeydown = function(e){ 
    var ev = document.all ? window.event : e;
	    if(ev.keyCode==13) {
	           $('#tab_search').click();//处理事件

	    }
	}
	$("#hotwords>a").click(function(e) {
		e.preventDefault();
		$("input[name=search]").val($(this).html());
		search();
	});

})


function check_inquiry(){
	var contact = $("input[name=contact]").val();
	var content = $("textarea[name=content]").val();
	var mobi = $("input[name=mobi]").val();
	var telephone = $("input[name=telephone]").val();
	var mail = $("input[name=mail]").val();
	if(!contact){
		alert('请输入联系人');
		return false;
	}
	if(!mobi&&!telephone&&!mail){
		alert('电话和E-mail至少填定一项');
	}
	if(!content){
		alert('请输入内容');
		return false;
	}
	return true;
}
/**
 * 商城店铺留言提交
 * @return {[type]} [description]
 */
    function checkFeedbackSubmit () {
        var content = $("#content").val();
        var contact = $("#contact").val();
        var phone = $("#phone").val();
        var mail = $("#mail").val();
        if(!content){
            alert("请填写留言内容");
            return false;
        }
        if(!phone&&!mail){
            alert("电话和E-mail至少填写一项");
            return false;
        }
        else{
            return true;
        }
    }
function trim(str){ //删除左右两端的空格 
return str.replace(/(^\s*)|(\s*$)/g, ""); 
} 

//-------------------------------share----------------------------
function share_s_weibo(url,title){
    var url ="http://v.t.sina.com.cn/share/share.php?url="+encodeURIComponent(window.location.href)+"&title="+document.title;
    window.open(url);
}
function share_t_weibo(url,title){
    var url ="http://v.t.qq.com/share/share.php?url="+encodeURIComponent(window.location.href)+"&title="+document.title;
    window.open(url);
}
function share_qzone(url,title){
    var url ="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+encodeURIComponent(window.location.href)+"&title="+document.title;
    window.open(url);
}


/**
 * 举报
 */

$(function(){
	var $body = $(document.body)
	$body.on('click','.action-btn-report',function(){
		var $this = $(this);
		var data = $this.data();

		var dialog = [
			'<div class="report-dialog" style="padding:20px;" title="举报">',
				'<div><textarea name="report" id="" style="height:100px;width:248px;"></textarea></div>',
				'<div style="margin-top:20px;"><a href="javascript:;" class="submit button">确认</a><a style="margin-left:20px;" href="javascript:;" class="cancel button">取消</a></div>',
			'</div>'
		].join('');
		var $dialog = $(dialog);

		$dialog.dialog({
			height:240,
			modal:true
		});
		$dialog.find('.button').button();
		$dialog.on('click','.submit',function(){
			$.post('/index/report', {id: data.id,cat: data.cat,content: $dialog.find('textarea').val()}, function(data) {
				alert("感谢您的举报，我们将尽快处理");
				$dialog.dialog('close');
			});
			
		});
		$dialog.on('click','.cancel',function(){
			$dialog.dialog('close');
		});
	});

});

//require end
});