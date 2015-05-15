require(['jquery','cookie','underscore','jquery.ui'],function($,cookie,_){
  $(function(){
    var $body = $(document.body),
        $nav = $('.page-nav'),
        $tab = $(".page-tab"),
        $theme = $(".theme");
    $nav.accordion();
    $tab.tabs().find(".ui-tabs-nav").sortable({
      axis: "x",
      stop: function() {
        $tab.tabs( "refresh" );
      }
    });
    $theme.selectmenu({
      change: function(){
        cookie.set('theme',$(this).val(),{expires:365});
        location.reload();
      }
    });

    $body.on('click',"a[data-tabs]",function(e){
      var $link = $(this)
      var tabs = $link.data('tabs');
      var tab = $(tabs).data('uiTabs');

      if(tab){
        e.preventDefault();
        var href = $link[0].href;
        var title = $link.attr('title') || $link.text();
        var id = encodeURIComponent(href);
        var $target = tab.tabs.find('>a[href="#'+id+'"]');
        var opt = {
          id: id,
          href: href,
          title: title,
          height: $body.height()-110
        }
        if($target.length==0){
          var $li = $(tabNavTemp(opt));
          var $target = $li.find('>a');
          tab.tablist.append($li);
          tab.element.append($(tabContentTemp(opt)));
          tab.refresh();
        }
        $target.trigger('click');
      }
    });

    $tab.on("click",".ui-tabs-nav li .ui-icon-close",function() {
      var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
      $(document.getElementById("#" + panelId)).remove();
      $tab.tabs( "refresh" );
    });
    var tabNavTemp = _.template([
      '<li>',
        '<a href="#<%= id %>"><%= title %></a>',
        '<span class="ui-icon ui-icon-close" role="presentation"></span>',
      '</li>'
    ].join(''));
    var tabContentTemp = _.template([
      '<div id="<%= id %>">',
        '<div class="control-bar"></div>',
        '<div class="content">',
          '<iframe class="tab-iframe" src="<%= href %>" style="height:<%= height%>px;"></iframe>',
        '</div>',
      '</div>'
    ].join(''));

  });
});