/* build : 564493634@qq.com 2015-03-27 11:58:13 */
define("jquery.clearInput",["jquery"],function(t){function i(e){this.options=t.extend(!0,{},i.options,e),this.$el=t(e.el),this.init()}t.extend(i.prototype,{init:function(){var i=this;this.options.height=this.$el.outerHeight();var e=this.options.height;this.$button=t('<a href="javascript:;">&times;</a>').css({position:"absolute",display:"none",height:e,width:e,fontSize:Math.ceil(.9*e),fontWeight:700,color:"#000",lineHeight:e+"px",verticalAlign:"middle",textDecoration:"none",textAlign:"center"}).appendTo(t(document.body)),this.$button.on("mousedown",t.proxy(this.clear,this)),this.$el.on("focus keyup input propertychange",function(t){"focus"==t.type&&i.position(),i.action()}),this.$el.on("blur",t.proxy(this.hide,this)),this.position()},show:function(){this.$button.show()},hide:function(){this.$button.hide()},position:function(){var t=this.$el.outerWidth(),i=this.$el.offset();i.left=i.left+t-this.options.height,this.$button.css(i)},action:function(){""!==this.$el.val()?this.show():this.hide()},clear:function(){this.$el.val("").trigger("focus")}}),t.extend(i,{options:{}}),t.fn.extend({clearInput:function(e){e=e||{};var n=Array.prototype.slice.apply(arguments);return n.shift(),this.each(function(){var o=t(this),s=o.data("clearInput");return"object"==t.type(e)&&(e=t.extend({},e,{el:o}),s=new i(e),o.data("clearInput",s)),"string"==t.type(e)&&s[e].apply(s,n),this})}})});