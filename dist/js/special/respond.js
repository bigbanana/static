/* build : 564493634@qq.com 2015-04-21 10:31:40 */
!function(e){"use strict";e.matchMedia=e.matchMedia||function(e){var t,n=e.documentElement,r=n.firstElementChild||n.firstChild,i=e.createElement("body"),a=e.createElement("div");return a.id="mq-test-1",a.style.cssText="position:absolute;top:-100em",i.style.background="none",i.appendChild(a),function(e){return a.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(i,r),t=42===a.offsetWidth,n.removeChild(i),{matches:t,media:e}}}(e.document)}(this),function(e){"use strict";function t(){w(!0)}var n={};e.respond=n,n.update=function(){};var r=[],i=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}(),a=function(e,t){var n=i();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))},s=function(e){return e.replace(n.regex.minmaxwh,"").match(n.regex.other)};if(n.ajax=a,n.queue=r,n.unsupportedmq=s,n.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},n.mediaQueriesSupported=e.matchMedia&&null!==e.matchMedia("only all")&&e.matchMedia("only all").matches,!n.mediaQueriesSupported){var o,l,m,d=e.document,c=d.documentElement,h=[],u=[],f=[],p={},g=30,y=d.getElementsByTagName("head")[0]||c,x=d.getElementsByTagName("base")[0],v=y.getElementsByTagName("link"),E=function(){var e,t=d.createElement("div"),n=d.body,r=c.style.fontSize,i=n&&n.style.fontSize,a=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=a=d.createElement("body"),n.style.background="none"),c.style.fontSize="100%",n.style.fontSize="100%",n.appendChild(t),a&&c.insertBefore(n,c.firstChild),e=t.offsetWidth,a?c.removeChild(n):n.removeChild(t),c.style.fontSize=r,i&&(n.style.fontSize=i),e=m=parseFloat(e)},w=function(t){var n="clientWidth",r=c[n],i="CSS1Compat"===d.compatMode&&r||d.body[n]||r,a={},s=v[v.length-1],p=(new Date).getTime();if(t&&o&&g>p-o)return e.clearTimeout(l),void(l=e.setTimeout(w,g));o=p;for(var x in h)if(h.hasOwnProperty(x)){var C=h[x],T=C.minw,S=C.maxw,b=null===T,z=null===S,B="em";T&&(T=parseFloat(T)*(T.indexOf(B)>-1?m||E():1)),S&&(S=parseFloat(S)*(S.indexOf(B)>-1?m||E():1)),C.hasquery&&(b&&z||!(b||i>=T)||!(z||S>=i))||(a[C.media]||(a[C.media]=[]),a[C.media].push(u[C.rules]))}for(var $ in f)f.hasOwnProperty($)&&f[$]&&f[$].parentNode===y&&y.removeChild(f[$]);f.length=0;for(var M in a)if(a.hasOwnProperty(M)){var O=d.createElement("style"),R=a[M].join("\n");O.type="text/css",O.media=M,y.insertBefore(O,s.nextSibling),O.styleSheet?O.styleSheet.cssText=R:O.appendChild(d.createTextNode(R)),f.push(O)}},C=function(e,t,r){var i=e.replace(n.regex.comments,"").replace(n.regex.keyframes,"").match(n.regex.media),a=i&&i.length||0;t=t.substring(0,t.lastIndexOf("/"));var o=function(e){return e.replace(n.regex.urls,"$1"+t+"$2$3")},l=!a&&r;t.length&&(t+="/"),l&&(a=1);for(var m=0;a>m;m++){var d,c,f,p;l?(d=r,u.push(o(e))):(d=i[m].match(n.regex.findStyles)&&RegExp.$1,u.push(RegExp.$2&&o(RegExp.$2))),f=d.split(","),p=f.length;for(var g=0;p>g;g++)c=f[g],s(c)||h.push({media:c.split("(")[0].match(n.regex.only)&&RegExp.$2||"all",rules:u.length-1,hasquery:c.indexOf("(")>-1,minw:c.match(n.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:c.match(n.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}w()},T=function(){if(r.length){var t=r.shift();a(t.href,function(n){C(n,t.href,t.media),p[t.href]=!0,e.setTimeout(function(){T()},0)})}},S=function(){for(var t=0;t<v.length;t++){var n=v[t],i=n.href,a=n.media,s=n.rel&&"stylesheet"===n.rel.toLowerCase();i&&s&&!p[i]&&(n.styleSheet&&n.styleSheet.rawCssText?(C(n.styleSheet.rawCssText,i,a),p[i]=!0):(!/^([a-zA-Z:]*\/\/)/.test(i)&&!x||i.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&("//"===i.substring(0,2)&&(i=e.location.protocol+i),r.push({href:i,media:a})))}T()};S(),n.update=S,n.getEmValue=E,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this),function(e,t){function n(t){return e.encodeURIComponent(t)}function r(r,a){function s(){var t;try{t=o.contentWindow.name}catch(n){}t?(o.src="about:blank",o.parentNode.removeChild(o),o=null,c&&(c=null,e.CollectGarbage&&e.CollectGarbage()),a(t)):e.setTimeout(s,100)}var o,c;"ActiveXObject"in e?(c=new ActiveXObject("htmlfile"),c.open(),c.write('<iframe id="x"></iframe>'),c.close(),o=c.getElementById("x")):(o=t.createElement("iframe"),o.style.cssText="position:absolute;top:-99em",l.insertBefore(o,l.firstElementChild||l.firstChild)),o.src=i(m)+"?url="+n(d)+"&css="+n(i(r)),e.setTimeout(s,500)}function i(e){var t=document.createElement("div"),n=e.split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;");return t.innerHTML='<a href="'+n+'">x</a>',t.firstChild.href}function a(){if(~!d.indexOf(location.host)){var e=t.createElement("div");e.innerHTML='<a href="'+d+'"></a>',l.insertBefore(e,l.firstElementChild||l.firstChild),d=e.firstChild.href,e.parentNode.removeChild(e),e=null}}function s(){for(var e=t.getElementsByTagName("link"),n=0,i=e.length;i>n;n++){var a=e[n],s=e[n].href,o=/^([a-zA-Z:]*\/\/(www\.)?)/.test(s),l=c&&!o||o;a.rel.indexOf("stylesheet")>=0&&l&&!function(e){r(s,function(t){e.styleSheet.rawCssText=t,respond.update()})}(a)}}var o=t.getElementById("respond-proxy"),l=t.documentElement,m=o&&o.href||require.toUrl("../html/respond-proxy.html").replace(/\?.*/,""),d=(t.getElementById("respond-redirect")||location).href,c=t.getElementsByTagName("base")[0];respond.mediaQueriesSupported||(a(),s())}(window,document);