/* build : 564493634@qq.com 2015-05-07 13:23:46 */
define("ie6",["jquery","DD_belatedPNG"],function(e,o){e(function(){o.fix("img,.png");try{document.execCommand("BackgroundImageCache",!1,!0)}catch(n){}e(document.body).on("mouseover",".ie-hover",function(){e(this).addClass("hover")}).on("mouseleave",".ie-hover",function(){e(this).removeClass("hover")})})});