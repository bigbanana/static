/* build : 564493634@qq.com 2015-04-24 13:32:04 */
define("db.customTable",["jquery"],function(t){var e=function(e){this.options=t.extend(!0,{},Waterfall.options,e),this.$el=t(e.el),this.init()};return t.extend(e.prototype,{init:function(){var t=this;list=this.$el.children().detach().toArray(),t.append(list)}}),t.extend(e,{options:{}}),t.fn.extend({customTable:function(n){n=n||{};var i=Array.prototype.slice.apply(arguments);return i.shift(),this.each(function(){var a=t(this),r=a.data("customTable");return"object"==t.type(n)&&(n=t.extend({},n,{el:a}),r=new e(n),a.data("customTable",r)),"string"==t.type(n)&&r[n].apply(r,i),this})}}),Waterfall});