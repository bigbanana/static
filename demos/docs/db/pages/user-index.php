<!DOCTYPE html>
<html lang="en">
<?php 
  $title = "用户中心";
  require_once('../includes/static.php');
 ?>
<body class="page-user">
  <?php require_once('../includes/ui-topbar.php'); ?>
  <?php require_once('../includes/ui-user-header.php'); ?>

  <div class="main">
    <div class="ui-crumb">
      <span>当前位置：</span>
      <a href="#">首页</a>
      <i>&gt;</i>
      <span>超说明书用药数据库</span>
      <span class="info">
        <a href="#"><i class="fa"></i> 帮助中心</a>
      </span>
    </div>
    <div class="main-box offset-top">
      <?php require_once('../includes/ui-user-leftbox.php'); ?>
      <div class="right-box">
        <div class="ui-box user-info">
          <a href="#" class="head"><img src="//static.yaozh.com/images/project/db/cache/head.png" alt=""></a>
          <div class="title">
            <span>beyondch（xxx企业单位名称）</span>
            <i class="vip">VIP 1</i>
          </div>
          <p>
            <i class="fa"></i>
            <a href="#" class="cl-blue">消息</a>
            <i class="fa ml20"></i>
            <a href="#" class="cl-blue">手机</a>
            <a href="#" class="ml20 cl-gray">[修改密码]</a>
            <a href="#" class="cl-gray">[修改资料]</a>
          </p>
          <p>
            <i class="fa"></i>
            <a href="#">订阅数量(5)</a>
            <i class="fa ml20"></i>
            <a href="#">收藏数量(215)</a>
          </p>
        </div>
        <div class="ui-panel offset-top">
          <div class="ui-panel-title">
            <span class="ui-panel-name">最新订阅信息</span>
            <div class="ui-panel-side">
              <a href="#">MORE</a>
            </div>
          </div>
          <div class="ui-panel-content rss-info">
            <div class="db-info">
              <p class="b fs14">已订阅数据库</p>
              <table class="table offset-top">
                <thead>
                  <tr>
                    <th>药品名称</th>
                    <th>数据库</th>
                    <th>变化状态</th>
                    <th>变化时间</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>阿奇霉素</td>
                    <td>注册与受理</td>
                    <td><span class="cl-red">有变化</span></td>
                    <td>2015-4-1</td>
                  </tr>
                  <tr>
                    <td>阿奇霉素</td>
                    <td>注册与受理</td>
                    <td><span class="cl-red">有变化</span></td>
                    <td>2015-4-1</td>
                  </tr>
                  <tr>
                    <td>阿奇霉素</td>
                    <td>注册与受理</td>
                    <td><span class="cl-red">有变化</span></td>
                    <td>2015-4-1</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="report-info">
              <p class="b fs14">已订阅报告</p>
              <div class="clearfix offset-top">
                <div class="report">
                  <a href="#" class="img">
                    <i class="status">未读</i>
                    <img src="//static.yaozh.com/images/project/db/cache/report1.jpg" alt="">
                  </a>
                  <p class="title"><a href="#">2015药品受理情况分析报告</a></p>
                </div>
                <div class="report">
                  <a href="#" class="img">
                    <i class="status past">已读</i>
                    <img src="//static.yaozh.com/images/project/db/cache/report2.jpg" alt="">
                  </a>
                  <p class="title"><a href="#">2015年2月CDE药品审评</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="offset-top fq-msg">
          <div class="ui-panel">
            <div class="ui-panel-title">
              <span class="ui-panel-name">系统消息</span>
              <div class="ui-panel-side">
                <a href="#">MORE</a>
              </div>
            </div>
            <div class="ui-panel-content">
              <ul class="dot">
                <li><a href="#">新版药智商城隆重上线</a><span class="date">2015-02-16</span></li>
                <li><a href="#">15年大讲堂第二期（12期）：药品专利保护及文献检索与利用</a><span class="date">2015-02-16</span></li>
                <li><a href="#">国内首家“新版欧盟注册数据库”正式上线</a><span class="date">2015-02-16</span></li>
                <li><a href="#">升级！！药智注册与受理数据库2.0强势来袭！</a><span class="date">2015-02-16</span></li>
              </ul>
            </div>
          </div>
          <div class="ui-panel">
            <div class="ui-panel-title">
              <span class="ui-panel-name">常见问题</span>
              <div class="ui-panel-side">
                <a href="#">MORE</a>
              </div>
            </div>
            <div class="ui-panel-content">
              <ul class="dot">
                <li><a href="#">如何成为VIP？ </a></li>
                <li><a href="#">怎样获取数据报告？</a></li>
                <li><a href="#">怎样订阅药品注册与受理数据库的药品受理状态？</a></li>
                <li><a href="#">VIP的权限有哪些呢？</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="ads offset-top">
          <a href="#" class="ad"><img src="//static.yaozh.com/images/project/db/cache/ad_03.jpg" alt=""></a>
          <a href="#" class="ad"><img src="//static.yaozh.com/images/project/db/cache/ad_03.jpg" alt=""></a>
        </div>
      </div>
    </div>
  </div>
  <?php require_once('../includes/ui-user-footer.php'); ?>
</body>
</html>
