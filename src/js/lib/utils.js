define("utils",['jquery','browser','underscore','confirm','alert','tips'],function($,browser,_,Confirm,Alert,Tips){
  
  var utils = {
    browser: browser,
    info: function(msg){
      new Tips({content: msg});
    },
    success: function(msg){
      new Tips({
        type: 'success',
        content: msg
      });
    },
    error: function(msg){
      new Tips({
        type: 'error',
        content: msg
      });
    },
    alert: function(msg){
      new Alert({
        content: msg
      });
    },
    confirm: function(msg){
      var def = $.Deferred();
      new Confirm({
        content: msg,
        pass: def.resolve,
        cancel: def.reject
      });
      return def.promise();
    }
  }

  return utils
});