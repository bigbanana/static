/* build : 564493634@qq.com 2015-04-24 10:10:37 */
define(["jquery","jquery.validate"],function(n){function i(){n(function(){var i=n(".submit-form"),e=i.find('input[name="mobi"]'),a=i.find('input[name="telephone"]'),t=i.find('input[name="mail"]'),o=e.add(a).add(t);n.validator.addMethod("mobilePhoneEmail",function(){return e.val()||a.val()||t.val()?!0:!1},"电话和E-mail至少填写一项"),o.on("focus keyup",function(){o.siblings(".validate-error:not(.validate-success)").remove()});var u=i.validate();i.on("submit",function(){return u.form()?void 0:!1})})}return{supply:i,purchase:i}});