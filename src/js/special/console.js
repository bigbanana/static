define('console',['jquery'],function($){
  if(!!window.console) return;

  var console = {
    init : function(){
      var _this = this;
      this.$el = $('<div id="customer-console"></div>').appendTo(document.body);
      this.$el.css({
        opacity:0.1,
        position:"absolute",
        top:0,
        right:0,
        width:600,
        height:300,
        background:"#000",
        color:"#fff",
        padding:"50px 10px 20px"
      })
      this.$head = $('<div class="console-head">控制台</div>').appendTo(this.$el);
      this.$head.css({
        width:"600px",
        margin:"10px 10px",
        paddingBottom:"10px",
        fontSize:16,
        fontWeight:700,
        position:"absolute",
        left:0,top:0,height:20,lineHeight:"20px",
        borderBottom:"2px solid #ddd"
      });

      this.$content = $('<div class="console-body">').appendTo(this.$el);
      this.$content.css({
        height:'100%',
        overflowY:'auto'
      });

      this.$el.hover(function(){
        if(_this.noOpacity) return;
        _this.$el.css({
          opacity:1
        });
      },function(){
        if(_this.noOpacity) return;
        _this.$el.css({
          opacity:0.1
        });
      });

      this.$noOpacity = $('<button>固定透明度</button>').appendTo(this.$head);
      this.$noOpacity.css({
        position:"absolute",
        right:0,bottom:10,
        background:"#fff",color:"#000",
        border:"none",fontSize:"14px"
      }).on('click',function(){
        _this.noOpacity = !_this.noOpacity;
      });
    },
    log : function(str){
      $('<div>').addClass('log').text(str).appendTo(this.$content);
    },
    close : function(){
      this.$el.hide();
    },
    open : function(){
      this.$el.show();
    }
  }
  console.init();
  window.console = console;
  return console;
});
