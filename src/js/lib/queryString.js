(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('queryString',['jquery','underscore','jquery.widget'],factory);
  } else {
    window.queryString = factory( jQuery,_,widget );
  }
}(function($,_,widget){
	var queryString = new Object();
	_.extend(queryString,{
		extract: function (maybeUrl) {
			return maybeUrl.split('?')[1] || '';
		},
		parse: function (str) {
			if (typeof str !== 'string') {
				return {};
			}

			str = $.trim(str).replace(/^(\?|#|&)/, '');

			if (!str) {
				return {};
			}

			return _.reduce(str.split('&'),function (ret, param) {
				var parts = param.replace(/\+/g, ' ').split('=');
				var key = parts[0];
				var val = parts[1];

				key = decodeURIComponent(key);
				// missing `=` should be `null`:
				// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
				val = val === undefined ? null : decodeURIComponent(val);

				if (!ret.hasOwnProperty(key)) {
					ret[key] = val;
				} else if (_.isArray(ret[key])) {
					ret[key].push(val);
				} else {
					ret[key] = [ret[key], val];
				}

				return ret;
			}, {});
		},
		/**
		 * 添加space参数改变url生成规则
		 */
		stringify: function (obj,space) {
			return obj ? _.map(_.keys(obj).sort(),function (key) {
				var val = obj[key];

				if (_.isArray(val)) {
					if(space){
						return encodeURIComponent(key) + '=' + encodeURIComponent(val.join(space));
					}else{
						return _.map(val.sort(),function (val2) {
							return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
						}).join('&');
					}
					
				}

				return encodeURIComponent(key) + '=' + encodeURIComponent(val);
			}).join('&') : '';
		}
	});
	return queryString;
}));

