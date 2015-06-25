define('widget',['jquery'],function($){
  $(function(){
    $(document.body).find('[data-widget]').each(function(){
      var $this = $(this);
      var data = $this.data();
      var widget = data.widget;
      delete data.widget;
      require(['jquery.'+widget],function(){
        $this[widget](data);
      });
    });
  });
  
});