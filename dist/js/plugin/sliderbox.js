/* build : 564493634@qq.com 2015-03-30 15:50:12 */
define("jquery.sliderbox",["jquery","underscore","jquery.easing"],function(t){var i=function(i){this.options=t.extend(!0,{},arguments.callee.options,i),this.$el=t(i.el),this.init()};return t.extend(i.prototype,{init:function(){this.$items=this.$el.children().css({"float":"left"}).detach().addClass("ui-sliderbox-item"),this.$itemBox=t('<div class="ui-sliderbox-box"></div>').css({position:"absolute",left:0,top:0}).append(this.$items).appendTo(this.$el),this.current=0;var i=this.$items.eq(0).outerWidth(!0),e=this.$items.eq(0).outerHeight(!0);this.options.item={width:i,height:e},this.$itemBox.css(2==this.options.direction?{height:e*this.$items.length}:{width:i*this.$items.length}),this.$el.css({position:"relative",overflow:"hidden",width:i,height:e}).addClass("ui-sliderbox"),this.options.control&&this.initControl(),this.slider(0)},initControl:function(){function i(){clearInterval(s.timer),s.timer=setInterval(t.proxy(s.next,s),s.options.delay)}function e(){clearInterval(s.timer)}var s=this;this.$controlBox=t('<div class="ui-sliderbox-control"></div>').appendTo(this.$el),this.$items.each(function(t){s.$controlBox.append('<a href="javascript:;">'+t+"</a>")}),this.$controlBox.on(this.options.eventType,"a",function(){var i=t(this);s.slider(i.index())}),this.options.auto&&(this.$el.hover(e,i),i())},slider:function(t){var i=this.options.fx;t=(this.$items.length+t)%this.$items.length,endCss=2==this.direction?{top:this.options.item.height*t}:{left:-this.options.item.width*t},this.$itemBox.stop(!0).animate(endCss,{duration:i.duration,easing:i.easing}),this.$controlBox.children().removeClass("active").eq(t).addClass("active"),this.current=t},prev:function(){this.slider(this.current-1)},next:function(){this.slider(this.current+1)}}),t.extend(i,{options:{direction:"1",eventType:"click",displayNumber:1,control:!0,auto:!0,delay:3e3,fx:{duration:400,easing:"easeOutExpo"}}}),t.fn.extend({sliderbox:function(e){e=e||{};var s=Array.prototype.slice.apply(arguments);return s.shift(),this.each(function(){var n=t(this),o=n.data("sliderbox");return"object"==t.type(e)&&(e=t.extend({},e,{el:n}),o=new i(e),n.data("sliderbox",o)),"string"==t.type(e)&&o[e].apply(o,s),this})}}),i});