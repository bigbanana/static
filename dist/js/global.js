/* build : 564493634@qq.com 2015-04-24 09:59:58 */
require(["browser"],function(e){e>9&&require(["pace"],function(e){e.start()}),7>e&&require(["ie6"],function(){}),9>e&&require(["respond"],function(){})}),require(["jquery","browser","modernizr"],function(e){e(function(){e(document.body);e.fn.serializeObject=function(){var i={},n=this.serializeArray();return e.each(n,function(){void 0!==i[this.name]?(i[this.name].push||(i[this.name]=[i[this.name]]),i[this.name].push(this.value||"")):i[this.name]=this.value||""}),i}})});