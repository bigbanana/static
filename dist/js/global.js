/* build : 564493634@qq.com 2015-04-10 10:36:48 */
require(["browser"],function(e){e>9?require(["pace"],function(e){e.start()}):7>e&&require(["ie6"],function(){})}),require(["jquery","browser"],function(e,i){e(function(){var n=e(document.body);7>i&&n.on("mouseover",".ie-hover",function(){e(this).addClass("hover")}).on("mouseleave",".ie-hover",function(){e(this).removeClass("hover")}),e.fn.serializeObject=function(){var i={},n=this.serializeArray();return e.each(n,function(){void 0!==i[this.name]?(i[this.name].push||(i[this.name]=[i[this.name]]),i[this.name].push(this.value||"")):i[this.name]=this.value||""}),i}})});