/**
 * 级联日期选择
 * @param  {[string]} range [年份跨度]
 * @param  {[string]} format [取值格式化]
 * @return {[object]}         [DateSelect]
 */
(function( factory ) {
  if ( typeof define === "function" && define.amd ) {
    define('jquery.dateSelect',['jquery','underscore','moment','jquery.widget','jquery.dropdownSelect'],factory);
  } else {
    factory( jQuery,_,moment,widget );
  }
}(function($,_,moment,widget){
  var DateSelect = function(opt){
    this.options = $.extend(true,{},arguments.callee.options,opt);
    this.$el = $(opt.el);
    this.init();
  }

  $.extend(DateSelect.prototype,{
    init: function(){
      this.date = moment();
      this.$el.wrap('<div class="ui-date-select"></div>').hide();
      this.$wrap = this.$el.parent();
      this.$year = $('<select></select>').width(this.options.widths[0]).appendTo(this.$wrap);
      this.$month = $('<select></select>').width(this.options.widths[1]);
      this.options.hasmonth && this.$month.appendTo(this.$wrap);
      this.$date = $('<select></select>').width(this.options.widths[0]);
      this.options.hasmonth && this.options.hasdate && this.$date.appendTo(this.$wrap);
      this.updateYear();
      this.updateMonth();
      this.updateDate();
      this.setValue();
      this.event();
    },
    event: function(){
      var that = this;
      this.$year.on('change',function(){
        that.date.set('year',parseInt(this.value));
        that.updateMonth();
        that.updateYear();
        that.setValue();
      });
      this.$month.on('change',function(){
        that.date.set('month',parseInt(this.value));
        that.updateDate();
        that.setValue();
      });
      this.$date.on('change',function(){
        that.date.set('date',parseInt(this.value));
        that.setValue();
      });
    },
    updateYear: function(){
      var opts=[],year = this.date.get('year'),that = this;
      this.$year.dropdownSelect('destory');
      this.$year.empty();
      opts.push(year);
      for(var i=1;i<this.options.range+1;i++){
        opts.unshift(year-i);
        opts.push(year+i);
      }
      _.each(opts,function(item){
        that.$year.append('<option value="'+item+'"'+(item==year&&' selected')+'>'+item+'</option>');
      });
      this.$year.dropdownSelect();
      this.$year.data('dropdownSelect').$selectMenu.width(88);
    },
    updateMonth: function(){
      var opts=[],month = this.date.get('month'),that = this;
      this.$month.dropdownSelect('destory');
      this.$month.empty();
      for(var i=0;i<12;i++){
        that.$month.append('<option value="'+i+'"'+(i==month&&' selected')+'>'+(i+1)+'</option>');
      }
      this.$month.dropdownSelect({className:'ml5'});
    },
    updateDate: function(){
      var opts=[],
          that = this,
          date = this.date.get('date'),
          maxdate = this.date.clone().endOf('month').get('date');
      this.$date.dropdownSelect('destory');
      this.$date.empty();
      for(var i=1;i<maxdate+1;i++){
        that.$date.append('<option value="'+i+'"'+(i==date&&' selected')+'>'+i+'</option>');
      }
      this.$date.dropdownSelect({className:'ml5'});
      this.$date.data('dropdownSelect').$selectMenu.width(60);
    },
    setValue: function(){
      this.$el.val(this.options.format && this.date.format(this.options.format) || this.date.unix());
      this.$el.trigger('change');
    }
  });

  $.extend(DateSelect,{
    options:{
      hasmonth: true,
      hasdate: true,
      widths:[78,50,50],
      range: 20, //年份跨度（前后20年）
      format: '' //YYYY-MM-DD
    }
  });

  widget.install('dateSelect',DateSelect);

  return DateSelect

}));