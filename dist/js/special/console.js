define("console",["jquery"],function($){if(!window.console){var console={init:function(){var o=this;this.$el=$('<div id="customer-console"></div>').appendTo(document.body),this.$el.css({opacity:.1,position:"absolute",top:0,right:0,width:600,height:300,background:"#000",color:"#fff",padding:"50px 10px 60px"}),this.$head=$('<div class="console-head">控制台</div>').appendTo(this.$el),this.$head.css({width:600,margin:"10px 10px",paddingBottom:"10px",fontSize:16,fontWeight:700,position:"absolute",left:0,top:0,height:20,lineHeight:"20px",borderBottom:"2px solid #ddd"}),this.$content=$('<div class="console-body">').appendTo(this.$el),this.$content.css({height:"100%",overflowY:"auto"}),this.$footer=$('<div class="console-footer">').appendTo(this.$el),this.$footer.css({width:600,margin:"10px 10px",paddingTop:"10px",fontSize:14,position:"absolute",left:0,bottom:0,height:30,lineHeight:"30px",borderTop:"2px solid #ddd"}),this.$el.hover(function(){o.noOpacity||o.$el.css({opacity:1})},function(){o.noOpacity||o.$el.css({opacity:.1})}),this.$noOpacity=$("<button>固定透明度</button>").appendTo(this.$head),this.$noOpacity.css({position:"absolute",right:0,bottom:10,background:"#fff",color:"#000",border:"none",fontSize:"14px"}).on("click",function(){o.noOpacity=!o.noOpacity}),this.$input=$("<textarea>").appendTo(this.$footer),this.$input.css({padding:"5px",border:"none",overflowY:"hidden",width:580,height:20,lineHeight:"20px"}),this.$input.on("keydown",function(t){if(o.combo[t.keyCode]=!0,13==t.keyCode)return o.combo[16]?void 0:(t.preventDefault(),void o.doEval())}),this.$input.on("keyup",function(t){o.combo[t.keyCode]=!1})},combo:{},doEval:function(){var code=this.$input.val();this.$input.val("");try{this.log(eval(code))}catch(e){this.log(e.name+" : "+e.message)}},log:function(o){$("<div>").addClass("log").text(o).appendTo(this.$content)},close:function(){this.$el.hide()},open:function(){this.$el.show()}};return $(function(){console.init()}),console}});