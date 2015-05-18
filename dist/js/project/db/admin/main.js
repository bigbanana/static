/* build : 564493634@qq.com 2015-05-18 17:43:34 */
require(["jquery","underscore","jquery.ui"],function(i,t){i.dialogSetting=i.extend({width:600,height:400},i.dialogSetting),i(function(){var t=i(document.body);!function(){t.on("click","a[data-dialog]",function(t){t.preventDefault();var a,n=i(this),o=n.data(),l=i.extend({id:o.dialog.replace("#",""),title:n.attr("title")||n.text(),href:n[0].href,target:o.dialog},i.dialogSetting,o),a=i(l.target);0==a.length&&(a=i(e(l)).dialog({width:l.width,height:l.height,modal:!0,autoOpen:!1})),a.dialog("option",{title:l.title});var d=a.find("iframe").attr("name");window.open(l.href,d),a.dialog("open")}),t.on("click","[data-action=closeDialog]",function(){window.closeDialog()}),window.closeDialog=function(i){if(i=i||!1,window.parent===window)return!1;var t=window.parent;i?t.location.reload():t.$(window.frameElement).parents(".dialog-page").dialog("close")},window.updateTitle=function(){if(window.parent===window)return!1;var i=window.document.title,t=window.parent,e=t.$;e(window.frameElement).closest(".dialog-page").dialog("option",{title:i})},window.updateTitle()}(),function(){t.on("click","a[data-tabs]",function(e){var o=i(this),l=o.data("tabs"),d=i(l).data("uiTabs");if(d){e.preventDefault();var r=o[0].href,c=o.attr("title")||o.text(),s=encodeURIComponent(r),f=d.tabs.find('>a[href="#'+s+'"]'),g={id:s,href:r,title:c,height:t.height()-130};if(0==f.length){var w=i(a(g)),f=w.find(">a");d.tablist.append(w),d.element.append(i(n(g))),d.refresh()}f.trigger("click")}}),t.on("click",".ui-tabs-nav li .ui-icon-close",function(){var t=i(this),e=t.closest(".ui-tabs"),a=t.closest("li").remove().attr("aria-controls");i(document.getElementById(a)).remove(),e.tabs("refresh")})}(),function(){t.on("click",".navigate .reload",function(){window.location.reload()}),t.on("click",".navigate .back",function(){window.history.back()}),t.on("click",".navigate .forward",function(){window.history.forward()})}()});var e=t.template(['<div id="<%= id %>" title="<%= title %>" class="dialog-page">','<div class="content">','<iframe name="<%= id %>-iframe" src="" class="dialog-iframe" style="height:<%= (height-60) %>px;"></iframe>',"</div>","</div>"].join("")),a=t.template(["<li>",'<a href="#<%= id %>"><%= title %></a>','<span class="ui-icon ui-icon-close" role="presentation"></span>',"</li>"].join("")),n=t.template(['<div id="<%= id %>">','<div class="content">','<iframe class="tab-iframe" src="<%= href %>" style="height:<%= height%>px;"></iframe>',"</div>","</div>"].join(""))});