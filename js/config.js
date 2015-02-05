/**
 * file: config.js
 * description:   require.config
 * author : [" t_fate@163.com "]
 * date : 2014/5/13
 */
require.config({
  baseUrl : location.href.replace(/(?:\/myplace\/).*$/,'/myplace\/')+'js',
  urlArgs : 'v=1.1',
  waitSeconds : 5
});
// 请不要删除下面一行分割线
/*--cut--*/
require.config({
  paths :{
    "jquery":"lib/jquery",
    "jquery.easing":"lib/jquery.easing.1.3",
    "backbone":"lib/backbone",
    "doT":"lib/doT",
    "preloadjs":"lib/preloadjs",
    "TweenMax":"lib/TweenMax",
    "underscore":"lib/underscore",
    //modules
    "module/event":"module/event",
    "module/waterfall":"module/waterfall"
  }
});