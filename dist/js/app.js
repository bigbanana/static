/* build : 564493634@qq.com 2015-06-03 15:25:58 */
var requirejs,require,define;!function(global){function isFunction(e){return"[object Function]"===ostring.call(e)}function isArray(e){return"[object Array]"===ostring.call(e)}function each(e,t){if(e){var i;for(i=0;i<e.length&&(!e[i]||!t(e[i],i,e));i+=1);}}function eachReverse(e,t){if(e){var i;for(i=e.length-1;i>-1&&(!e[i]||!t(e[i],i,e));i-=1);}}function hasProp(e,t){return hasOwn.call(e,t)}function getOwn(e,t){return hasProp(e,t)&&e[t]}function eachProp(e,t){var i;for(i in e)if(hasProp(e,i)&&t(e[i],i))break}function mixin(e,t,i,r){return t&&eachProp(t,function(t,n){(i||!hasProp(e,n))&&(!r||"object"!=typeof t||!t||isArray(t)||isFunction(t)||t instanceof RegExp?e[n]=t:(e[n]||(e[n]={}),mixin(e[n],t,i,r)))}),e}function bind(e,t){return function(){return t.apply(e,arguments)}}function scripts(){return document.getElementsByTagName("script")}function defaultOnError(e){throw e}function getGlobal(e){if(!e)return e;var t=global;return each(e.split("."),function(e){t=t[e]}),t}function makeError(e,t,i,r){var n=new Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e);return n.requireType=e,n.requireModules=r,i&&(n.originalError=i),n}function newContext(e){function t(e){var t,i;for(t=0;t<e.length;t++)if(i=e[t],"."===i)e.splice(t,1),t-=1;else if(".."===i){if(0===t||1===t&&".."===e[2]||".."===e[t-1])continue;t>0&&(e.splice(t-1,2),t-=2)}}function i(e,i,r){var n,o,a,s,u,c,p,d,l,f,h,m,g=i&&i.split("/"),b=E.map,v=b&&b["*"];if(e&&(e=e.split("/"),p=e.length-1,E.nodeIdCompat&&jsSuffixRegExp.test(e[p])&&(e[p]=e[p].replace(jsSuffixRegExp,"")),"."===e[0].charAt(0)&&g&&(m=g.slice(0,g.length-1),e=m.concat(e)),t(e),e=e.join("/")),r&&b&&(g||v)){a=e.split("/");e:for(s=a.length;s>0;s-=1){if(c=a.slice(0,s).join("/"),g)for(u=g.length;u>0;u-=1)if(o=getOwn(b,g.slice(0,u).join("/")),o&&(o=getOwn(o,c))){d=o,l=s;break e}!f&&v&&getOwn(v,c)&&(f=getOwn(v,c),h=s)}!d&&f&&(d=f,l=h),d&&(a.splice(0,l,d),e=a.join("/"))}return n=getOwn(E.pkgs,e),n?n:e}function r(e){isBrowser&&each(scripts(),function(t){return t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===q.contextName?(t.parentNode.removeChild(t),!0):void 0})}function n(e){var t=getOwn(E.paths,e);return t&&isArray(t)&&t.length>1?(t.shift(),q.require.undef(e),q.makeRequire(null,{skipMap:!0})([e]),!0):void 0}function o(e){var t,i=e?e.indexOf("!"):-1;return i>-1&&(t=e.substring(0,i),e=e.substring(i+1,e.length)),[t,e]}function a(e,t,r,n){var a,s,u,c,p=null,d=t?t.name:null,l=e,f=!0,h="";return e||(f=!1,e="_@r"+(A+=1)),c=o(e),p=c[0],e=c[1],p&&(p=i(p,d,n),s=getOwn(M,p)),e&&(p?h=s&&s.normalize?s.normalize(e,function(e){return i(e,d,n)}):-1===e.indexOf("!")?i(e,d,n):e:(h=i(e,d,n),c=o(h),p=c[0],h=c[1],r=!0,a=q.nameToUrl(h))),u=!p||s||r?"":"_unnormalized"+(T+=1),{prefix:p,name:h,parentMap:t,unnormalized:!!u,url:a,originalName:l,isDefine:f,id:(p?p+"!"+h:h)+u}}function s(e){var t=e.id,i=getOwn(j,t);return i||(i=j[t]=new q.Module(e)),i}function u(e,t,i){var r=e.id,n=getOwn(j,r);!hasProp(M,r)||n&&!n.defineEmitComplete?(n=s(e),n.error&&"error"===t?i(n.error):n.on(t,i)):"defined"===t&&i(M[r])}function c(e,t){var i=e.requireModules,r=!1;t?t(e):(each(i,function(t){var i=getOwn(j,t);i&&(i.error=e,i.events.error&&(r=!0,i.emit("error",e)))}),r||req.onError(e))}function p(){globalDefQueue.length&&(apsp.apply(O,[O.length,0].concat(globalDefQueue)),globalDefQueue=[])}function d(e){delete j[e],delete k[e]}function l(e,t,i){var r=e.map.id;e.error?e.emit("error",e.error):(t[r]=!0,each(e.depMaps,function(r,n){var o=r.id,a=getOwn(j,o);!a||e.depMatched[n]||i[o]||(getOwn(t,o)?(e.defineDep(n,M[o]),e.check()):l(a,t,i))}),i[r]=!0)}function f(){var e,t,i=1e3*E.waitSeconds,o=i&&q.startTime+i<(new Date).getTime(),a=[],s=[],u=!1,p=!0;if(!v){if(v=!0,eachProp(k,function(e){var i=e.map,c=i.id;if(e.enabled&&(i.isDefine||s.push(e),!e.error))if(!e.inited&&o)n(c)?(t=!0,u=!0):(a.push(c),r(c));else if(!e.inited&&e.fetched&&i.isDefine&&(u=!0,!i.prefix))return p=!1}),o&&a.length)return e=makeError("timeout","Load timeout for modules: "+a,null,a),e.contextName=q.contextName,c(e);p&&each(s,function(e){l(e,{},{})}),o&&!t||!u||!isBrowser&&!isWebWorker||w||(w=setTimeout(function(){w=0,f()},50)),v=!1}}function h(e){hasProp(M,e[0])||s(a(e[0],null,!0)).init(e[1],e[2])}function m(e,t,i,r){e.detachEvent&&!isOpera?r&&e.detachEvent(r,t):e.removeEventListener(i,t,!1)}function g(e){var t=e.currentTarget||e.srcElement;return m(t,q.onScriptLoad,"load","onreadystatechange"),m(t,q.onScriptError,"error"),{node:t,id:t&&t.getAttribute("data-requiremodule")}}function b(){var e;for(p();O.length;){if(e=O.shift(),null===e[0])return c(makeError("mismatch","Mismatched anonymous define() module: "+e[e.length-1]));h(e)}}var v,x,q,y,w,E={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},j={},k={},S={},O=[],M={},P={},R={},A=1,T=1;return y={require:function(e){return e.require?e.require:e.require=q.makeRequire(e.map)},exports:function(e){return e.usingExports=!0,e.map.isDefine?e.exports?M[e.map.id]=e.exports:e.exports=M[e.map.id]={}:void 0},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){return getOwn(E.config,e.map.id)||{}},exports:e.exports||(e.exports={})}}},x=function(e){this.events=getOwn(S,e.id)||{},this.map=e,this.shim=getOwn(E.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},x.prototype={init:function(e,t,i,r){r=r||{},this.inited||(this.factory=t,i?this.on("error",i):this.events.error&&(i=bind(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.errback=i,this.inited=!0,this.ignore=r.ignore,r.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,q.startTime=(new Date).getTime();var e=this.map;return this.shim?void q.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()})):e.prefix?this.callPlugin():this.load()}},load:function(){var e=this.map.url;P[e]||(P[e]=!0,q.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var e,t,i=this.map.id,r=this.depExports,n=this.exports,o=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,this.depCount<1&&!this.defined){if(isFunction(o)){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)try{n=q.execCb(i,o,r,n)}catch(a){e=a}else n=q.execCb(i,o,r,n);if(this.map.isDefine&&void 0===n&&(t=this.module,t?n=t.exports:this.usingExports&&(n=this.exports)),e)return e.requireMap=this.map,e.requireModules=this.map.isDefine?[this.map.id]:null,e.requireType=this.map.isDefine?"define":"require",c(this.error=e)}else n=o;this.exports=n,this.map.isDefine&&!this.ignore&&(M[i]=n,req.onResourceLoad&&req.onResourceLoad(q,this.map,this.depMaps)),d(i),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var e=this.map,t=e.id,r=a(e.prefix);this.depMaps.push(r),u(r,"defined",bind(this,function(r){var n,o,p,l=getOwn(R,this.map.id),f=this.map.name,h=this.map.parentMap?this.map.parentMap.name:null,m=q.makeRequire(e.parentMap,{enableBuildCallback:!0});return this.map.unnormalized?(r.normalize&&(f=r.normalize(f,function(e){return i(e,h,!0)})||""),o=a(e.prefix+"!"+f,this.map.parentMap),u(o,"defined",bind(this,function(e){this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),p=getOwn(j,o.id),void(p&&(this.depMaps.push(o),this.events.error&&p.on("error",bind(this,function(e){this.emit("error",e)})),p.enable()))):l?(this.map.url=q.nameToUrl(l),void this.load()):(n=bind(this,function(e){this.init([],function(){return e},null,{enabled:!0})}),n.error=bind(this,function(e){this.inited=!0,this.error=e,e.requireModules=[t],eachProp(j,function(e){0===e.map.id.indexOf(t+"_unnormalized")&&d(e.map.id)}),c(e)}),n.fromText=bind(this,function(i,r){var o=e.name,u=a(o),p=useInteractive;r&&(i=r),p&&(useInteractive=!1),s(u),hasProp(E.config,t)&&(E.config[o]=E.config[t]);try{req.exec(i)}catch(d){return c(makeError("fromtexteval","fromText eval for "+t+" failed: "+d,d,[t]))}p&&(useInteractive=!0),this.depMaps.push(u),q.completeLoad(o),m([o],n)}),void r.load(e.name,m,n,E))})),q.enable(r,this),this.pluginMaps[r.id]=r},enable:function(){k[this.map.id]=this,this.enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(e,t){var i,r,n;if("string"==typeof e){if(e=a(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[t]=e,n=getOwn(y,e.id))return void(this.depExports[t]=n(this));this.depCount+=1,u(e,"defined",bind(this,function(e){this.defineDep(t,e),this.check()})),this.errback?u(e,"error",bind(this,this.errback)):this.events.error&&u(e,"error",bind(this,function(e){this.emit("error",e)}))}i=e.id,r=j[i],hasProp(y,i)||!r||r.enabled||q.enable(e,this)})),eachProp(this.pluginMaps,bind(this,function(e){var t=getOwn(j,e.id);t&&!t.enabled&&q.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var i=this.events[e];i||(i=this.events[e]=[]),i.push(t)},emit:function(e,t){each(this.events[e],function(e){e(t)}),"error"===e&&delete this.events[e]}},q={config:E,contextName:e,registry:j,defined:M,urlFetched:P,defQueue:O,Module:x,makeModuleMap:a,nextTick:req.nextTick,onError:c,configure:function(e){e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/");var t=E.shim,i={paths:!0,bundles:!0,config:!0,map:!0};eachProp(e,function(e,t){i[t]?(E[t]||(E[t]={}),mixin(E[t],e,!0,!0)):E[t]=e}),e.bundles&&eachProp(e.bundles,function(e,t){each(e,function(e){e!==t&&(R[e]=t)})}),e.shim&&(eachProp(e.shim,function(e,i){isArray(e)&&(e={deps:e}),!e.exports&&!e.init||e.exportsFn||(e.exportsFn=q.makeShimExports(e)),t[i]=e}),E.shim=t),e.packages&&each(e.packages,function(e){var t,i;e="string"==typeof e?{name:e}:e,i=e.name,t=e.location,t&&(E.paths[i]=e.location),E.pkgs[i]=e.name+"/"+(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}),eachProp(j,function(e,t){e.inited||e.map.unnormalized||(e.map=a(t))}),(e.deps||e.callback)&&q.require(e.deps||[],e.callback)},makeShimExports:function(e){function t(){var t;return e.init&&(t=e.init.apply(global,arguments)),t||e.exports&&getGlobal(e.exports)}return t},makeRequire:function(t,n){function o(i,r,u){var p,d,l;return n.enableBuildCallback&&r&&isFunction(r)&&(r.__requireJsBuild=!0),"string"==typeof i?isFunction(r)?c(makeError("requireargs","Invalid require call"),u):t&&hasProp(y,i)?y[i](j[t.id]):req.get?req.get(q,i,t,o):(d=a(i,t,!1,!0),p=d.id,hasProp(M,p)?M[p]:c(makeError("notloaded",'Module name "'+p+'" has not been loaded yet for context: '+e+(t?"":". Use require([])")))):(b(),q.nextTick(function(){b(),l=s(a(null,t)),l.skipMap=n.skipMap,l.init(i,r,u,{enabled:!0}),f()}),o)}return n=n||{},mixin(o,{isBrowser:isBrowser,toUrl:function(e){var r,n=e.lastIndexOf("."),o=e.split("/")[0],a="."===o||".."===o;return-1!==n&&(!a||n>1)&&(r=e.substring(n,e.length),e=e.substring(0,n)),q.nameToUrl(i(e,t&&t.id,!0),r,!0)},defined:function(e){return hasProp(M,a(e,t,!1,!0).id)},specified:function(e){return e=a(e,t,!1,!0).id,hasProp(M,e)||hasProp(j,e)}}),t||(o.undef=function(e){p();var i=a(e,t,!0),n=getOwn(j,e);r(e),delete M[e],delete P[i.url],delete S[e],eachReverse(O,function(t,i){t[0]===e&&O.splice(i,1)}),n&&(n.events.defined&&(S[e]=n.events),d(e))}),o},enable:function(e){var t=getOwn(j,e.id);t&&s(e).enable()},completeLoad:function(e){var t,i,r,o=getOwn(E.shim,e)||{},a=o.exports;for(p();O.length;){if(i=O.shift(),null===i[0]){if(i[0]=e,t)break;t=!0}else i[0]===e&&(t=!0);h(i)}if(r=getOwn(j,e),!t&&!hasProp(M,e)&&r&&!r.inited){if(!(!E.enforceDefine||a&&getGlobal(a)))return n(e)?void 0:c(makeError("nodefine","No define call for "+e,null,[e]));h([e,o.deps||[],o.exportsFn])}f()},nameToUrl:function(e,t,i){var r,n,o,a,s,u,c,p=getOwn(E.pkgs,e);if(p&&(e=p),c=getOwn(R,e))return q.nameToUrl(c,t,i);if(req.jsExtRegExp.test(e))s=e+(t||"");else{for(r=E.paths,n=e.split("/"),o=n.length;o>0;o-=1)if(a=n.slice(0,o).join("/"),u=getOwn(r,a)){isArray(u)&&(u=u[0]),n.splice(0,o,u);break}s=n.join("/"),s+=t||(/^data\:|\?/.test(s)||i?"":".js"),s=("/"===s.charAt(0)||s.match(/^[\w\+\.\-]+:/)?"":E.baseUrl)+s}return E.urlArgs?s+((-1===s.indexOf("?")?"?":"&")+E.urlArgs):s},load:function(e,t){req.load(q,e,t)},execCb:function(e,t,i,r){return t.apply(r,i)},onScriptLoad:function(e){if("load"===e.type||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var t=g(e);q.completeLoad(t.id)}},onScriptError:function(e){var t=g(e);return n(t.id)?void 0:c(makeError("scripterror","Script error for: "+t.id,e,[t.id]))}},q.require=q.makeRequire(),q}function getInteractiveScript(){return interactiveScript&&"interactive"===interactiveScript.readyState?interactiveScript:(eachReverse(scripts(),function(e){return"interactive"===e.readyState?interactiveScript=e:void 0}),interactiveScript)}var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.1.16",commentRegExp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,ap=Array.prototype,apsp=ap.splice,isBrowser=!("undefined"==typeof window||"undefined"==typeof navigator||!window.document),isWebWorker=!isBrowser&&"undefined"!=typeof importScripts,readyRegExp=isBrowser&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1;if("undefined"==typeof define){if("undefined"!=typeof requirejs){if(isFunction(requirejs))return;cfg=requirejs,requirejs=void 0}"undefined"==typeof require||isFunction(require)||(cfg=require,require=void 0),req=requirejs=function(e,t,i,r){var n,o,a=defContextName;return isArray(e)||"string"==typeof e||(o=e,isArray(t)?(e=t,t=i,i=r):e=[]),o&&o.context&&(a=o.context),n=getOwn(contexts,a),n||(n=contexts[a]=req.s.newContext(a)),o&&n.configure(o),n.require(e,t,i)},req.config=function(e){return req(e)},req.nextTick="undefined"!=typeof setTimeout?function(e){setTimeout(e,4)}:function(e){e()},require||(require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each(["toUrl","undef","defined","specified"],function(e){req[e]=function(){var t=contexts[defContextName];return t.require[e].apply(t,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=defaultOnError,req.createNode=function(e,t,i){var r=e.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");return r.type=e.scriptType||"text/javascript",r.charset="utf-8",r.async=!0,r},req.load=function(e,t,i){var r,n=e&&e.config||{};if(isBrowser)return r=req.createNode(n,t,i),r.setAttribute("data-requirecontext",e.contextName),r.setAttribute("data-requiremodule",t),!r.attachEvent||r.attachEvent.toString&&r.attachEvent.toString().indexOf("[native code")<0||isOpera?(r.addEventListener("load",e.onScriptLoad,!1),r.addEventListener("error",e.onScriptError,!1)):(useInteractive=!0,r.attachEvent("onreadystatechange",e.onScriptLoad)),r.src=i,currentlyAddingScript=r,baseElement?head.insertBefore(r,baseElement):head.appendChild(r),currentlyAddingScript=null,r;if(isWebWorker)try{importScripts(i),e.completeLoad(t)}catch(o){e.onError(makeError("importscripts","importScripts failed for "+t+" at "+i,o,[t]))}},isBrowser&&!cfg.skipDataMain&&eachReverse(scripts(),function(e){return head||(head=e.parentNode),dataMain=e.getAttribute("data-main"),dataMain?(mainScript=dataMain,cfg.baseUrl||(src=mainScript.split("/"),mainScript=src.pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath),mainScript=mainScript.replace(jsSuffixRegExp,""),req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain),cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript],!0):void 0}),define=function(e,t,i){var r,n;"string"!=typeof e&&(i=t,t=e,e=null),isArray(t)||(i=t,t=null),!t&&isFunction(i)&&(t=[],i.length&&(i.toString().replace(commentRegExp,"").replace(cjsRequireRegExp,function(e,i){t.push(i)}),t=(1===i.length?["require"]:["require","exports","module"]).concat(t))),useInteractive&&(r=currentlyAddingScript||getInteractiveScript(),r&&(e||(e=r.getAttribute("data-requiremodule")),n=contexts[r.getAttribute("data-requirecontext")])),(n?n.defQueue:globalDefQueue).push([e,t,i])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)}}(this),window.config=config=window.config||{},config.deps=config.deps||[],require.config({map:{"*":{css:"require.css"}},shim:{prism:{deps:["css!../css/plugin/prism-twilight"]},"jquery.ui":{deps:["css!../css/jquery-ui"]}},deps:["global"].concat(window.config.deps)}),require.config({baseUrl:"http://static.yaozh.com/js",paths:{global:"global",browser:"lib",jquery:"lib",backbone:"lib","backbone.epoxy":"lib","backbone.queryparams":"lib",underscore:"lib",modernizr:"lib","require.css":"lib",cookie:"lib",utils:"lib",outer:"module","jquery.plax":"plugin","jquery.easing":"plugin","jquery.validate.core":"plugin","jquery.validate":"plugin","jquery.waterfall":"plugin","jquery.sliderbox":"plugin","jquery.clearInput":"plugin","jquery.placeholder":"plugin","jquery.focusInput":"plugin","jquery.marquee":"plugin","jquery.rwdtable":"plugin","jquery.dropdown":"plugin","jquery.pagination":"plugin","widget.responsivetable":"widget/responsivetable","jquery.ui":"other/jquery-ui",pace:"other/pace",preloadjs:"other/preloadjs",TweenMax:"other/TweenMax",prism:"other/prism","jquery.lightbox":"other/lightbox","jquery.waypoints":"other/jquery.waypoints",ie6:"special/ie6",DD_belatedPNG:"special/DD_belatedPNG",console:"special/console","baidu.map":"http://api.map.baidu.com/getscript?v=2.0&ak=BB72a92913f9ca70a0587577b1a0dae9",umeditor:"../thirdparty/umeditor/umeditor"},urlArgs:"yaozhVersion=1.1.2",waitSeconds:5});