define("utils",['jquery','browser'],function($,browser){
  
  var utils = {
    browser: browser,
    success: function(str){
      alert(str)
    },
    error: function(str){
      alert(str);
    },
    confirm: function(str,callback){
      window.confirm(str) && callback();
    },
    loading: function(str){
      alert(str)
    },
    unLoading: function(str){
      alert(str)
    }
  }

  return utils
});