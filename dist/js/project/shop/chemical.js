/* build : 564493634@qq.com 2015-05-07 13:23:46 */
define(["jquery","underscore","jquery.validate"],function(e,t){function o(){var t=e(".search-form"),o=t.validate({rules:{ch:{zhCode:!0},eng:{enCode:!0},xuhao:{zhCode:!0},cas:{casCode:!0}}});t.on("submit",function(){return o.form()?void 0:!1})}function n(o){e(function(){function n(e){u.html(a({data:e,get_formula:r}))}function r(e){return obj2=e.replace(/[-]/g,""),"http://db.yaozh.com/jiegou/"+obj2.substr(0,2)+"/"+obj2.substr(2,2)+"/"+e+".png"}var u=e("#col-view"),a=t.template(e("#text-template-1").html());n(o)})}return{index:o,info:n}});