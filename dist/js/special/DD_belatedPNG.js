/* build : 564493634@qq.com 2015-03-27 11:21:58 */
var DD_belatedPNG={ns:"DD_belatedPNG",imgSize:{},delay:10,nodesFixed:0,createVmlNameSpace:function(){document.namespaces&&!document.namespaces[this.ns]&&document.namespaces.add(this.ns,"urn:schemas-microsoft-com:vml")},createVmlStyleSheet:function(){var e,t;e=document.createElement("style"),e.setAttribute("media","screen"),document.documentElement.firstChild.insertBefore(e,document.documentElement.firstChild.firstChild),e.styleSheet&&(e=e.styleSheet,e.addRule(this.ns+"\\:*","{behavior:url(#default#VML)}"),e.addRule(this.ns+"\\:shape","position:absolute;"),e.addRule("img."+this.ns+"_sizeFinder","behavior:none; border:none; position:absolute; z-index:-1; top:-10000px; visibility:hidden;"),this.screenStyleSheet=e,t=document.createElement("style"),t.setAttribute("media","print"),document.documentElement.firstChild.insertBefore(t,document.documentElement.firstChild.firstChild),t=t.styleSheet,t.addRule(this.ns+"\\:*","{display: none !important;}"),t.addRule("img."+this.ns+"_sizeFinder","{display: none !important;}"))},readPropertyChange:function(){var e,t,i;if(e=event.srcElement,e.vmlInitiated){if((-1!=event.propertyName.search("background")||-1!=event.propertyName.search("border"))&&DD_belatedPNG.applyVML(e),"style.display"==event.propertyName){t="none"==e.currentStyle.display?"none":"block";for(i in e.vml)e.vml.hasOwnProperty(i)&&(e.vml[i].shape.style.display=t)}-1!=event.propertyName.search("filter")&&DD_belatedPNG.vmlOpacity(e)}},vmlOpacity:function(e){if(-1!=e.currentStyle.filter.search("lpha")){var t=e.currentStyle.filter;t=parseInt(t.substring(t.lastIndexOf("=")+1,t.lastIndexOf(")")),10)/100,e.vml.color.shape.style.filter=e.currentStyle.filter,e.vml.image.fill.opacity=t}},handlePseudoHover:function(e){setTimeout(function(){DD_belatedPNG.applyVML(e)},1)},fix:function(e){if(this.screenStyleSheet){var t,i;for(t=e.split(","),i=0;i<t.length;i++)this.screenStyleSheet.addRule(t[i],"behavior:expression(DD_belatedPNG.fixPng(this))")}},applyVML:function(e){e.runtimeStyle.cssText="",this.vmlFill(e),this.vmlOffsets(e),this.vmlOpacity(e),e.isImg&&this.copyImageBorders(e)},attachHandlers:function(e){var t,i,n,r,l,a;if(t=this,i={resize:"vmlOffsets",move:"vmlOffsets"},"A"==e.nodeName){r={mouseleave:"handlePseudoHover",mouseenter:"handlePseudoHover",focus:"handlePseudoHover",blur:"handlePseudoHover"};for(l in r)r.hasOwnProperty(l)&&(i[l]=r[l])}for(a in i)i.hasOwnProperty(a)&&(n=function(){t[i[a]](e)},e.attachEvent("on"+a,n));e.attachEvent("onpropertychange",this.readPropertyChange)},giveLayout:function(e){e.style.zoom=1,"static"==e.currentStyle.position&&(e.style.position="relative")},copyImageBorders:function(e){var t,i;t={borderStyle:!0,borderWidth:!0,borderColor:!0};for(i in t)t.hasOwnProperty(i)&&(e.vml.color.shape.style[i]=e.currentStyle[i])},vmlFill:function(e){if(e.currentStyle){var t,i,n,r,l,a;t=e.currentStyle;for(r in e.vml)e.vml.hasOwnProperty(r)&&(e.vml[r].shape.style.zIndex=t.zIndex);e.runtimeStyle.backgroundColor="",e.runtimeStyle.backgroundImage="",i=!0,("none"!=t.backgroundImage||e.isImg)&&(e.isImg?e.vmlBg=e.src:(e.vmlBg=t.backgroundImage,e.vmlBg=e.vmlBg.substr(5,e.vmlBg.lastIndexOf('")')-5)),n=this,n.imgSize[e.vmlBg]||(l=document.createElement("img"),n.imgSize[e.vmlBg]=l,l.className=n.ns+"_sizeFinder",l.runtimeStyle.cssText="behavior:none; position:absolute; left:-10000px; top:-10000px; border:none; margin:0; padding:0;",a=function(){this.width=this.offsetWidth,this.height=this.offsetHeight,n.vmlOffsets(e)},l.attachEvent("onload",a),l.src=e.vmlBg,l.removeAttribute("width"),l.removeAttribute("height"),document.body.insertBefore(l,document.body.firstChild)),e.vml.image.fill.src=e.vmlBg,i=!1),e.vml.image.fill.on=!i,e.vml.image.fill.color="none",e.vml.color.shape.style.backgroundColor=t.backgroundColor,e.runtimeStyle.backgroundImage="none",e.runtimeStyle.backgroundColor="transparent"}},vmlOffsets:function(e){var t,i,n,r,l,a,o,s,m,d,c;if(t=e.currentStyle,i={W:e.clientWidth+1,H:e.clientHeight+1,w:this.imgSize[e.vmlBg].width,h:this.imgSize[e.vmlBg].height,L:e.offsetLeft,T:e.offsetTop,bLW:e.clientLeft,bTW:e.clientTop},n=i.L+i.bLW==1?1:0,r=function(e,t,i,n,r,l){e.coordsize=n+","+r,e.coordorigin=l+","+l,e.path="m0,0l"+n+",0l"+n+","+r+"l0,"+r+" xe",e.style.width=n+"px",e.style.height=r+"px",e.style.left=t+"px",e.style.top=i+"px"},r(e.vml.color.shape,i.L+(e.isImg?0:i.bLW),i.T+(e.isImg?0:i.bTW),i.W-1,i.H-1,0),r(e.vml.image.shape,i.L+i.bLW,i.T+i.bTW,i.W,i.H,1),l={X:0,Y:0},e.isImg)l.X=parseInt(t.paddingLeft,10)+1,l.Y=parseInt(t.paddingTop,10)+1;else for(m in l)l.hasOwnProperty(m)&&this.figurePercentage(l,i,m,t["backgroundPosition"+m]);e.vml.image.fill.position=l.X/i.W+","+l.Y/i.H,a=t.backgroundRepeat,o={T:1,R:i.W+n,B:i.H,L:1+n},s={X:{b1:"L",b2:"R",d:"W"},Y:{b1:"T",b2:"B",d:"H"}},"repeat"!=a||e.isImg?(d={T:l.Y,R:l.X+i.w,B:l.Y+i.h,L:l.X},-1!=a.search("repeat-")&&(c=a.split("repeat-")[1].toUpperCase(),d[s[c].b1]=1,d[s[c].b2]=i[s[c].d]),d.B>i.H&&(d.B=i.H),e.vml.image.shape.style.clip="rect("+d.T+"px "+(d.R+n)+"px "+d.B+"px "+(d.L+n)+"px)"):e.vml.image.shape.style.clip="rect("+o.T+"px "+o.R+"px "+o.B+"px "+o.L+"px)"},figurePercentage:function(e,t,i,n){var r,l;switch(l=!0,r="X"==i,n){case"left":case"top":e[i]=0;break;case"center":e[i]=.5;break;case"right":case"bottom":e[i]=1;break;default:-1!=n.search("%")?e[i]=parseInt(n,10)/100:l=!1}return e[i]=Math.ceil(l?t[r?"W":"H"]*e[i]-t[r?"w":"h"]*e[i]:parseInt(n,10)),e[i]%2===0&&e[i]++,e[i]},fixPng:function(e){e.style.behavior="none";var t,i,n,r,l;if("BODY"!=e.nodeName&&"TD"!=e.nodeName&&"TR"!=e.nodeName){if(e.isImg=!1,"IMG"==e.nodeName){if(-1==e.src.toLowerCase().search(/\.png$/))return;e.isImg=!0,e.style.visibility="hidden"}else if(-1==e.currentStyle.backgroundImage.toLowerCase().search(".png"))return;t=DD_belatedPNG,e.vml={color:{},image:{}},i={shape:{},fill:{}};for(r in e.vml)if(e.vml.hasOwnProperty(r)){for(l in i)i.hasOwnProperty(l)&&(n=t.ns+":"+l,e.vml[r][l]=document.createElement(n));e.vml[r].shape.stroked=!1,e.vml[r].shape.appendChild(e.vml[r].fill),e.parentNode.insertBefore(e.vml[r].shape,e)}e.vml.image.shape.fillcolor="none",e.vml.image.fill.type="tile",e.vml.color.fill.on=!1,t.attachHandlers(e),t.giveLayout(e),t.giveLayout(e.offsetParent),e.vmlInitiated=!0,t.applyVML(e)}}};try{document.execCommand("BackgroundImageCache",!1,!0)}catch(r){}DD_belatedPNG.createVmlNameSpace(),DD_belatedPNG.createVmlStyleSheet(),define("DD_belatedPNG",function(){return DD_belatedPNG});