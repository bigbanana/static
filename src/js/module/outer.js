/**
 * file: module/outer.js
 * author : [" 564493634@qq.com "]
 * date : 2014/10/24
 */
define('outer',['jquery','underscore'],function($,_){
  var cache,check;
  cache = [],
  check = function(e){
    var target,parents;
    target = e.target;
    parents = $(e.target).parents().toArray();
    _.each(cache,function(item){
      if(item == target) return;
      if(_.indexOf(parents,item) != -1) return;

      var event = $.Event('outer',{target : target});
      $.event.trigger(event, null, item);
    });
  }
  $.event.special.outer = {
    setup: function(){
      if(cache.length == 0){
        $(document).on('click.outer',check);
      }
      cache.push(this);
    },
    teardown: function(){
      cache = _.without(cache,this);
      if (cache.length == 0){
        $(document).off('click.outer',check);
      }
    }
  }

});

