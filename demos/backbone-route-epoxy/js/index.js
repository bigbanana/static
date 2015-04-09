require(['jquery','underscore','backbone','backbone.epoxy','backbone.queryparams','jquery.clearInput'],
function($,underscore,Backbone,epoxy){
  if(window.browser>9){
    require(['prism'],$.noop);
  }
  /**
   * Epoxy.binding
   */
  Backbone.Epoxy.binding.addHandler("placeholder",{
    init : function($element, value, bindings, context){
      $element.on('blur',function(){
        if(context.value() == ""){
          context.value(value);
        }
      });
      $element.on('focus',function(){
        if(context.value() == value){
          context.value("");
        }
      });
    },
    get : function($element, value){
      return $element.val();
    },
    set : function($element, value){
      $element.val( value );
    },
    clean : function(){
      
    }
  });


  var defaults = {
    firstName: "Luke",
    lastName: "Skywalker",
    email:"564493634@qq.com",
    fontSize:16,
    love:[],
    sex:0,
    year:1991,
    month:1,
    day:1
  }

  var Router = Backbone.Router.extend({
    controller : {
      "api" : {
        "search" : function(params){
          bindModel.set(params,{validate:true});
        }
      }
    }
  })
  window.router = new Router();
  router.route(/^([^\/]+)\/([^\/]+)\/?(\?.*)?$/,'all',function(controller,page,params){
    this.controller[controller] && 
    this.controller[controller][page] && 
    this.controller[controller][page](params);

  });
  var BindModel = Backbone.Epoxy.Model.extend({
    initialize : function(){
      this.on('invalid',function(model,msg,options){
        this.set(options.errorAttr,defaults[options.errorAttr]);
      });
      this.on('change',this.modelChange);
    },
    modelChange : _.throttle(function(){
      var params = this.toJSON();
      router.navigate(router.toFragment('api/search/',params));
      //console.log(decodeURIComponent($.param(params)));
    },1000),
    validate : function(attrs,options){
      if(!_.isArray(attrs.love)){
        options.errorAttr = "love";
        return "love is an Array";
      }
    },
    computeds : {
      fullName : function(){
        return this.get("firstName") +" "+ this.get("lastName");
      }
    }
  });
  window.bindModel = new BindModel(defaults);

  window.viewModel = new Backbone.Model({
    yearList : [
      {value:1991,label:"1991"},
      {value:1992,label:"1992"},
      {value:1993,label:"1993"}
    ],
    monthList : [
      {value:1,label:"1月"},
      {value:2,label:"2月"},
      {value:11,label:"11月"},
      {value:12,label:"12月"}
    ],
    dayList : []
  });

  bindModel.on('change:month',function(){
    var days = new Date(this.get('year'),this.get('month'),0).getDate();
    var dayList = [];

    _(days).times(function(index){
      var day = index+1;
      dayList.push({value:day,label:day+"日"});
    });
    viewModel.set('dayList',dayList);
  });

  var BindingView = Backbone.Epoxy.View.extend({
    el: "#app-luke",
    bindingFilters : {
      isEmail : function(email){
        return !/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( email )
      }
    },
    bindingHandlers : {
      listLoves : function( $element, value ) {
        $element.text( value.join(", ") );
      }
    }
  });

  var view = new BindingView({
    model: bindModel,
    viewModel:viewModel
  });




  /**
   * list
   */
  var d1 = new Date().getTime();
  var ajaxDatas = (function(){
    var list = [];
    _.each(_.range(97,123),function(code){
      var obj = {}
      var charval = String.fromCharCode(code);

      obj.charval = charval
      obj.chars = charval+charval+charval+charval+charval
      obj.phone = _.random(10000000,99999999);
      obj.mobile = '1'+_.random(1000000000,9999999999);
      obj.test1 = 'a'+_.random(1000000000,9999999999);
      obj.test2 = 'b'+_.random(1000000000,9999999999);
      obj.test3 = 'c'+_.random(1000000000,9999999999);
      obj.test4 = 'd'+_.random(1000000000,9999999999);
      obj.test5 = 'e'+_.random(1000000000,9999999999);
      obj.test6 = 'f'+_.random(1000000000,9999999999);
      list.push(obj);
    });
    return list;
  })();

  var d2 = new Date().getTime();
  var Td = Backbone.Model.extend({
    defaults : {
      value : ''
    }
  });
  var Th = Backbone.Model.extend({
    defaults : {
      width : 200,
      value : '',
      display:true
    }
  });

  var TdView = Backbone.Epoxy.View.extend({
    el:'<td data-bind="text:modelValue,toggle:display">',
    initialize: function(options){
      this.pmodel = options.collectionView.model;
    },
    computeds: {
      modelValue: function(){
        return this.pmodel.get(this.getBinding('value'));
      }
    }
  });
  var ThView = TdView.extend({
    el:'<th data-bind="text:value,css:{width:width},toggle:display">'
  });

  var Head = Backbone.Collection.extend({
    model : Th
  });

  window.head = new Head([
    {name:'字符',value:'charval'},
    {name:'字符串',value:'chars'},
    {name:'电话',value:'phone'},
    {name:'手机',value:'mobile'},
    {name:'测试1',value:'test1'},
    {name:'测试2',value:'test2'},
    {name:'测试3',value:'test3'},
    {name:'测试4',value:'test4'},
    {name:'测试5',value:'test5'},
    {name:'测试6',value:'test6'}
  ]);
  var Tr = Backbone.Model.extend({
    defaults : {
      index : 0,
      name : '',
      value : '',
      phone : '',
      mobile : '',
      test1:'',
      test2:'',
      test3:'',
      test4:'',
      test5:'',
      test6:''
    }
  });
  var TrView = Backbone.Epoxy.View.extend({
    el:'<tr data-bind="collection:$head">',
    itemView : TdView,
    initialize: function() {
      debugger;
    },
    bindingSources: {
      head: head,
      mmode: function(){
        return this.model;
      }
    }
  });
  var TrList = Backbone.Collection.extend({
    model : Tr
  });

  var ListView = Backbone.Epoxy.View.extend({
    el : "#data-table",
    itemView : TrView,
    headView : ThView,
    initialize: function() {
      this.collection = new TrList(ajaxDatas);
    },
    bindingSources : {
      head : head
    }
  });
  window.listView = new ListView();

  var d3 = new Date().getTime();
  alert(d2-d1);
  alert(d3-d2);

  $("#toggle").on('click',function(){
    head.at(0).set('display',!head.at(0).get('display'));
  });

  Backbone.history.start({root:'api/search'});


});
