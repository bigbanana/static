/* build : 564493634@qq.com 2015-03-27 11:58:13 */
define("jquery.marquee",["jquery"],function(t){function i(i){this.options=t.extend(!0,{},arguments.callee.options,i),this.$el=t(i.el).addClass("ui-marquee"),this.init()}return t.extend(i.prototype,{init:function(){var i,e,s,h=this.options;if(this.$items=this.$el.children().addClass("ui-marquee-li"),"left"==this.options.direction&&this.$items.css({"float":"left"}),i=this.$items.innerWidth(),e=this.$items.innerHeight(),t.extend(this.options,{width:i,height:e,showWidth:i*this.$items.length,showHeight:e*this.$items.length}),this.$items.detach(),this.$items.length>=h.visible)switch(this.$items=this.$items.add(this.$items.slice(0,h.visible).clone()),s=this.$items.length,this.$itemBox=t('<div class="ui-marquee-list"></div>').append(this.$items).appendTo(this.$el),this.$el.css({overflow:"hidden",zoom:1}),this.$itemBox.css({overflow:"hidden",zoom:1}),h.direction){case"left":this.$el.css({width:h.visible*h.width}),this.$itemBox.css({width:s*h.width});break;case"up":this.$el.css({height:h.visible*h.height}),this.$itemBox.css({height:s*h.height})}this.$itemBox.hover(t.proxy(this.stop,this),t.proxy(this.start,this)),this.start()},roll:function(){var t=this.options,i=this.$el;"left"==t.direction&&i.scrollLeft(i.scrollLeft()>=t.showWidth?0:i.scrollLeft()+t.step),"up"==t.direction&&i.scrollTop(i.scrollTop()>=t.showHeight?0:i.scrollTop()+t.step)},start:function(){this.timer=setInterval(t.proxy(this.roll,this),this.options.speed)},stop:function(){clearInterval(this.timer)}}),t.extend(i,{options:{direction:"up",speed:30,step:1,visible:1}}),t.extend(t.fn,{marquee:function(e){e=e||{};var s=Array.prototype.slice.apply(arguments);return s.shift(),this.each(function(){var h=t(this),o=h.data("marquee");return"object"==t.type(e)&&(e=t.extend({},e,{el:h}),o=new i(e),h.data("marquee",o)),"string"==t.type(e)&&o[e].apply(o,s),this})}}),i});