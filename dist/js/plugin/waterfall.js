/* build : 564493634@qq.com 2015-03-27 11:58:13 */
define("jquery.waterfall",["jquery","underscore","jquery.easing"],function(t,e){var i=function(n){this.options=t.extend(!0,{},i.options,n),this.$el=t(n.el).css({position:"relative"});var o=[];t.extend(this,{createHeight:function(){o=new Array,t.each(e.range(this.options.column),function(){o.push(0)})},getHeight:function(t){return o[t]||o},setHeight:function(t,e){o[t]=e},getMinHeight:function(){return Math.min.apply(null,o)},getMaxHeight:function(){return Math.max.apply(null,o)},getMinIndex:function(){return e(o).indexOf(this.getMinHeight())||0}}),this.createHeight(),this.init()};return t.extend(i.prototype,{init:function(){var t=this;list=this.$el.children().detach().toArray(),t.append(list)},append:function(e){var i=this;e instanceof t&&(e=e.toArray()),t.isArray(e)||(e=[e]),t.each(e,function(){var e=t(this).css({visibility:"hidden"}).appendTo(i.$el),n={width:e.outerWidth(!0),height:e.outerHeight(!0)},o=i.getMinIndex(),r=i.getMinHeight();e.css({position:"absolute",left:o*n.width,top:r}),i.setHeight(o,r+n.height)}),this.$el.height(this.getMaxHeight()),this.show(e)},show:function(e){var i=this,n=i.options.fx;t.each(i.options.sort(e),function(){var e=t(this);i.$el.delay(n.delay).queue(function(){var o=e.position(),r=t.extend({visibility:"visible"},o,i.options.from(o,e)),s=t.extend(o,i.options.to(o,e));e.css(r).animate(s,{duration:n.duration,easing:n.easing}),t(i.$el).dequeue()})})},refresh:function(){this.createHeight(),this.append(this.$el.css({height:0}).stop(!0,!0).children().detach().stop(!0,!0))}}),t.extend(i,{options:{column:2,fx:{delay:100,duration:200,easing:"linear"},from:function(){return{left:300,top:0,opacity:0}},to:function(t){return{left:t.left,top:t.top,opacity:1}},sort:function(t){return t}}}),t.fn.extend({waterfall:function(e){e=e||{};var n=Array.prototype.slice.apply(arguments);return n.shift(),this.each(function(){var o=t(this),r=o.data("waterfall");return"object"==t.type(e)&&(e=t.extend({},e,{el:o}),r=new i(e),o.data("waterfall",r)),"string"==t.type(e)&&r[e].apply(r,n),this})}}),i});