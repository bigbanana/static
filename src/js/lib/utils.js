define("utils",['jquery','browser','underscore','confirm','alert','tips'],function($,browser,_,Confirm,Alert,Tips){
  
  var utils = {
    browser: browser,
    info: function(str){
      new Tips({content: str});
    },
    success: function(str){
      new Tips({
        type: 'success',
        content: str
      });
    },
    error: function(str){
      new Tips({
        type: 'error',
        content: str
      });
    },
    alert: function(str){
      new Alert({
        content: str
      });
    },
    confirm: function(str){
      var def = $.Deferred();
      new Confirm({
        content: str,
        pass: def.resolve,
        cancel: def.reject
      });
      return def.promise();
    },
    nodata: function(){
      return $(nodataTemp());
    }
  }

  var nodataTemp = _.template([
    '<div class="fs14 tc">对不起，小智暂时还没有找到数据。</div>'
  ].join(''));

  return utils
});