define("utils",['jquery','browser','underscore','jquery.confirm','jquery.prompt','alert','tips'],function($,browser,_,Confirm,Prompt,Alert,Tips){
  
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
    },
    prompt: function(msg){
      var def = $.Deferred();
      new Prompt({
        content: msg,
        pass: function(value){
          def.resolve(value);
        },
        cancel: def.reject
      });
      return def.promise();
    },
    /**
     * [promisify 返回函数通过$.Deferred封装的promise]
     * @param  {Function} fn [函数]
     * @return {Function} [返回值为jquery promise的函数]
     */
    promisify: function(fn){
      if(fn.__isPromisified__ === true) {
        return fn;
      }
      fn.__isPromisified__ = true;

      var fuc = function(arg){
        var $def = $.Deferred();
        var args = Array.prototype.slice.call(arguments);
        args.push(function(){
          $def.resolve.apply(window,Array.prototype.slice.call(arguments))
        });
        fn.apply(window,args);
        return $def.promise();
      }
      
      return fuc;
    },
    getSearch: function(){
      var res = location.href.match(/\?.*/);
      if(res){
        res = res[0];
      }else{
        res = "";
      }
      return res;
    }
  }

  utils.require = utils.promisify(require)

window.utils = utils;
  return utils
});