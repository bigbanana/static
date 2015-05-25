/* build : 564493634@qq.com 2015-05-25 15:04:16 */
define("jquery.lightbox",["jquery","css!../css/plugin/lightbox.css"],function(t){(function(){var i=t,e=function(){function t(){this.fadeDuration=500,this.fitImagesInViewport=!0,this.resizeDuration=700,this.positionFromTop=50,this.showImageNumberLabel=!0,this.alwaysShowNavOnTouchDevices=!1,this.wrapAround=!1}return t.prototype.albumLabel=function(t,i){return"Image "+t+" of "+i},t}(),n=function(){function t(t){this.options=t,this.album=[],this.currentImageIndex=void 0,this.init()}return t.prototype.init=function(){this.enable(),this.build()},t.prototype.enable=function(){var t=this;i("body").on("click","a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]",function(e){return t.start(i(e.currentTarget)),!1})},t.prototype.build=function(){var t=this;i("<div id='lightboxOverlay' class='lightboxOverlay'></div><div id='lightbox' class='lightbox'><div class='lb-outerContainer'><div class='lb-container'><img class='lb-image' src='' /><div class='lb-nav'><a class='lb-prev' href='' ></a><a class='lb-next' href='' ></a></div><div class='lb-loader'><a class='lb-cancel'></a></div></div></div><div class='lb-dataContainer'><div class='lb-data'><div class='lb-details'><span class='lb-caption'></span><span class='lb-number'></span></div><div class='lb-closeContainer'><a class='lb-close'></a></div></div></div></div>").appendTo(i("body")),this.$lightbox=i("#lightbox"),this.$overlay=i("#lightboxOverlay"),this.$outerContainer=this.$lightbox.find(".lb-outerContainer"),this.$container=this.$lightbox.find(".lb-container"),this.containerTopPadding=parseInt(this.$container.css("padding-top"),10),this.containerRightPadding=parseInt(this.$container.css("padding-right"),10),this.containerBottomPadding=parseInt(this.$container.css("padding-bottom"),10),this.containerLeftPadding=parseInt(this.$container.css("padding-left"),10),this.$overlay.hide().on("click",function(){return t.end(),!1}),this.$lightbox.hide().on("click",function(e){return"lightbox"===i(e.target).attr("id")&&t.end(),!1}),this.$outerContainer.on("click",function(e){return"lightbox"===i(e.target).attr("id")&&t.end(),!1}),this.$lightbox.find(".lb-prev").on("click",function(){return t.changeImage(0===t.currentImageIndex?t.album.length-1:t.currentImageIndex-1),!1}),this.$lightbox.find(".lb-next").on("click",function(){return t.changeImage(t.currentImageIndex===t.album.length-1?0:t.currentImageIndex+1),!1}),this.$lightbox.find(".lb-loader, .lb-close").on("click",function(){return t.end(),!1})},t.prototype.start=function(t){function e(t){n.album.push({link:t.attr("href"),title:t.attr("data-title")||t.attr("title")})}var n=this,a=i(window);a.on("resize",i.proxy(this.sizeOverlay,this)),i("select, object, embed").css({visibility:"hidden"}),this.sizeOverlay(),this.album=[];var o,s=0,h=t.attr("data-lightbox");if(h){o=i(t.prop("tagName")+'[data-lightbox="'+h+'"]');for(var r=0;r<o.length;r=++r)e(i(o[r])),o[r]===t[0]&&(s=r)}else if("lightbox"===t.attr("rel"))e(t);else{o=i(t.prop("tagName")+'[rel="'+t.attr("rel")+'"]');for(var l=0;l<o.length;l=++l)e(i(o[l])),o[l]===t[0]&&(s=l)}var d=a.scrollTop()+this.options.positionFromTop,c=a.scrollLeft();this.$lightbox.css({top:d+"px",left:c+"px"}).fadeIn(this.options.fadeDuration),this.changeImage(s)},t.prototype.changeImage=function(t){var e=this;this.disableKeyboardNav();var n=this.$lightbox.find(".lb-image");this.$overlay.fadeIn(this.options.fadeDuration),i(".lb-loader").fadeIn("slow"),this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(),this.$outerContainer.addClass("animating");var a=new Image;a.onload=function(){var o,s,h,r,l,d,c;n.attr("src",e.album[t].link),o=i(a),n.width(a.width),n.height(a.height),e.options.fitImagesInViewport&&(c=i(window).width(),d=i(window).height(),l=c-e.containerLeftPadding-e.containerRightPadding-20,r=d-e.containerTopPadding-e.containerBottomPadding-120,(a.width>l||a.height>r)&&(a.width/l>a.height/r?(h=l,s=parseInt(a.height/(a.width/h),10),n.width(h),n.height(s)):(s=r,h=parseInt(a.width/(a.height/s),10),n.width(h),n.height(s)))),e.sizeContainer(n.width(),n.height())},a.src=this.album[t].link,this.currentImageIndex=t},t.prototype.sizeOverlay=function(){this.$overlay.width(i(window).width()).height(i(document).height())},t.prototype.sizeContainer=function(t,i){function e(){n.$lightbox.find(".lb-dataContainer").width(s),n.$lightbox.find(".lb-prevLink").height(h),n.$lightbox.find(".lb-nextLink").height(h),n.showImage()}var n=this,a=this.$outerContainer.outerWidth(),o=this.$outerContainer.outerHeight(),s=t+this.containerLeftPadding+this.containerRightPadding,h=i+this.containerTopPadding+this.containerBottomPadding;a!==s||o!==h?this.$outerContainer.animate({width:s,height:h},this.options.resizeDuration,"swing",function(){e()}):e()},t.prototype.showImage=function(){this.$lightbox.find(".lb-loader").hide(),this.$lightbox.find(".lb-image").fadeIn("slow"),this.updateNav(),this.updateDetails(),this.preloadNeighboringImages(),this.enableKeyboardNav()},t.prototype.updateNav=function(){var t=!1;try{document.createEvent("TouchEvent"),t=this.options.alwaysShowNavOnTouchDevices?!0:!1}catch(i){}this.$lightbox.find(".lb-nav").show(),this.album.length>1&&(this.options.wrapAround?(t&&this.$lightbox.find(".lb-prev, .lb-next").css("opacity","1"),this.$lightbox.find(".lb-prev, .lb-next").show()):(this.currentImageIndex>0&&(this.$lightbox.find(".lb-prev").show(),t&&this.$lightbox.find(".lb-prev").css("opacity","1")),this.currentImageIndex<this.album.length-1&&(this.$lightbox.find(".lb-next").show(),t&&this.$lightbox.find(".lb-next").css("opacity","1"))))},t.prototype.updateDetails=function(){var t=this;"undefined"!=typeof this.album[this.currentImageIndex].title&&""!==this.album[this.currentImageIndex].title&&this.$lightbox.find(".lb-caption").html(this.album[this.currentImageIndex].title).fadeIn("fast").find("a").on("click",function(){location.href=i(this).attr("href")}),this.album.length>1&&this.options.showImageNumberLabel?this.$lightbox.find(".lb-number").text(this.options.albumLabel(this.currentImageIndex+1,this.album.length)).fadeIn("fast"):this.$lightbox.find(".lb-number").hide(),this.$outerContainer.removeClass("animating"),this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration,function(){return t.sizeOverlay()})},t.prototype.preloadNeighboringImages=function(){if(this.album.length>this.currentImageIndex+1){var t=new Image;t.src=this.album[this.currentImageIndex+1].link}if(this.currentImageIndex>0){var i=new Image;i.src=this.album[this.currentImageIndex-1].link}},t.prototype.enableKeyboardNav=function(){i(document).on("keyup.keyboard",i.proxy(this.keyboardAction,this))},t.prototype.disableKeyboardNav=function(){i(document).off(".keyboard")},t.prototype.keyboardAction=function(t){var i=27,e=37,n=39,a=t.keyCode,o=String.fromCharCode(a).toLowerCase();a===i||o.match(/x|o|c/)?this.end():"p"===o||a===e?0!==this.currentImageIndex?this.changeImage(this.currentImageIndex-1):this.options.wrapAround&&this.album.length>1&&this.changeImage(this.album.length-1):("n"===o||a===n)&&(this.currentImageIndex!==this.album.length-1?this.changeImage(this.currentImageIndex+1):this.options.wrapAround&&this.album.length>1&&this.changeImage(0))},t.prototype.end=function(){this.disableKeyboardNav(),i(window).off("resize",this.sizeOverlay),this.$lightbox.fadeOut(this.options.fadeDuration),this.$overlay.fadeOut(this.options.fadeDuration),i("select, object, embed").css({visibility:"visible"})},t}();i(function(){{var t=new e;new n(t)}})}).call(window)});