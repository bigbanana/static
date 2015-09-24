/**
 * 往调用链前添加一个jquery事件
 */
(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('jquery.preon',['jquery','underscore'],factory);
  } else {
    factory( jQuery,_ );
  }
}(function($,_){

  $.fn.extend({
    preon: function(type,selector,data,handler){
      var args = arguments;
      if(data == null && handler == null){
        handler = selector;
      }else{
        handler = data;
      }
      return this.each(function(){
        var index;
        $.fn.on.apply($(this),args);
        var events = $._data(this).events[type];
        var listnum = _.findIndex(events,function(obj){return obj.handler == handler});
        var item = events.splice(listnum,1)[0];
        //delegate
        index = (typeof selector === "string") ? 0 : events.delegateCount;
        events.splice(index,0,item);
      });
    }
  });

}));

