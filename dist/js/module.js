/* build : 564493634@qq.com 2015-06-03 15:25:58 */
define("outer",["jquery"],function(t){function e(e){var n=e.target,i=t(n),o=i.parents();r.each(function(){if(this!=n&&0==o.filter(this).length){var e=t(this),r=t.Event("outer",{target:n});e.trigger(r)}})}function n(e){var n=this;this.$el=t(e.el),setTimeout(function(){n.register()},0)}var r=t();return t.extend(n.prototype,{register:function(){r.length||t(document).on("click.outer",e),r=r.add(this.$el)},destroy:function(){r=r.not(this.$el),r.length||t(document).off("click.outer",e)}}),t.fn.extend({outer:function(e){return e=e||{},this.each(function(){var r=t(this),i=r.data("event.outer");return"object"==t.type(e)&&(e=t.extend({},e),t.extend(e,{el:r}),i=new n(e),r.data("event.outer",i)),"string"==t.type(e)&&i[e](),this})}}),n});