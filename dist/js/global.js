/* build : 564493634@qq.com 2015-05-25 15:04:16 */
require(["browser"],function(e){e>9&&require(["pace"],function(e){e.start()}),7>e&&require(["ie6"],function(){}),9>e&&require(["respond"],function(){}),e>7&&require(["jquery.focusInput"],function(e){e.focusInput()})}),require(["jquery","browser","modernizr"],function(e){e(function(){require(["jquery.dropdown"],e.noop);e(document.body);e.fn.serializeObject=function(){var n={},r=this.serializeArray();return e.each(r,function(){void 0!==n[this.name]?(n[this.name].push||(n[this.name]=[n[this.name]]),n[this.name].push(this.value||"")):n[this.name]=this.value||""}),n}})});