<!DOCTYPE html>
<html lang="en">
<?php 
  $title = "订阅管理";
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
        <div class="ui-tab" data-widget="tab">
          <div class="ui-tab-navs">
            <div class="ui-tab-nav">
              <a class="active" href="#">药品注册与受理</a>
              <a href="#">国产药品数据库</a>
              <a href="#">进口药品数据库</a>
            </div>
            <div class="ui-tab-side">
              <a href="#">进入邮箱看</a>
            </div>
          </div>
          <div class="ui-tab-panels offset-top">
            <div class="ui-tab-panel">
              <form action="" class="form">
                <input type="text" class="form-control" />
                <button class="btn btn-blue" type="submit">搜索</button>
              </form>
              <table class="table offset-top tc">
                <thead>
                  <tr>
                    <th>数据库</th>
                    <th>订阅类型</th>
                    <th>报告名称</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>药品注册与受理</td>
                    <td>新药</td>
                    <td>2014年12月CDE药品审评情况分析报告</td>
                    <td>
                      <a href="#" class="btn btn-xs btn-blue">查看</a>
                      <a href="javascript:;" class="btn btn-xs btn-blue">删除</a>
                    </td>
                  </tr>
                  <tr>
                    <td>药品注册与受理</td>
                    <td>进口</td>
                    <td>2014年化药注册申报排行榜——药智注册与受理数据库</td>
                    <td>
                      <a href="#" class="btn btn-xs btn-blue">查看</a>
                      <a href="javascript:;" class="btn btn-xs btn-blue">删除</a>
                    </td>
                  </tr>
                  <tr>
                    <td>阿奇霉素</td>
                    <td>有状态变化时发送</td>
                    <td>20</td>
                    <td>15</td>
                    <td>5</td>
                    <td>2015-04-01 14:15:22</td>
                    <td>
                      <a href="#" class="btn btn-xs btn-blue">查看</a>
                      <a href="javascript:;" class="btn btn-xs btn-blue">删除</a>
                    </td>
                  </tr>
                  <tr>
                    <td>阿莫西林</td>
                    <td>定期发送</td>
                    <td>36</td>
                    <td>25</td>
                    <td>0</td>
                    <td></td>
                    <td>
                      <a href="#" class="btn btn-xs btn-blue">查看</a>
                      <a href="javascript:;" class="btn btn-xs btn-blue">删除</a>
                    </td>
                  </tr>
                  <tr>
                    <td>阿奇霉素</td>
                    <td>有状态变化时发送</td>
                    <td>20</td>
                    <td>15</td>
                    <td>5</td>
                    <td>2015-04-01 14:15:22</td>
                    <td>
                      <a href="#" class="btn btn-xs btn-blue">查看</a>
                      <a href="javascript:;" class="btn btn-xs btn-blue">删除</a>
                    </td>
                  </tr>
                  <tr>
                    <td>阿莫西林</td>
                    <td>定期发送</td>
                    <td>36</td>
                    <td>25</td>
                    <td>0</td>
                    <td></td>
                    <td>
                      <a href="#" class="btn btn-xs btn-blue">查看</a>
                      <a href="javascript:;" class="btn btn-xs btn-blue">删除</a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="pagination offset-top tr" data-widget="pagination" data-page="1" data-total="26" data-size="6"></div>
            </div>
          </div>
        </div>
        <div class="ui-panel offset-top">
          <div class="ui-panel-title">
            <span class="ui-panel-name">订阅设置</span>
          </div>
          <div class="ui-panel-content">
            <form id="submit-form" action="" class="form align-right" data-widget="validate">
              <div class="form-group">
                <label for="n1" class="form-label">数据库</label>
                <div class="form-box">
                  <select name="n1" id="n1" class="form-control">
                    <option value="1">药品注册与受理</option>
                    <option value="1">国外数据与受理</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="n2" class="form-label">订阅数据库</label>
                <div class="form-box">
                  <div class="mb5">
                    <input name="n2" id="n2" required type="text" class="form-control">
                  </div>
                  <div class="cl-gray">请输入准确的注册（受理）号</div>
                </div>
              </div>
              <div class="form-group">
                <label for="n3" class="form-label">药品名称</label>
                <div class="form-box">
                  <input name="n3" id="n3" required type="text" class="form-control">
                </div>
              </div>
              <div class="form-group">
                <label for="n4" class="form-label">企业名称</label>
                <div class="form-box">
                  <input name="n4" id="n4" required type="text" class="form-control">
                </div>
              </div>
              <div class="form-group">
                <label for="n5" class="form-label">订阅方式</label>
                <div class="form-box">
                  <label class="radio">
                    <input name="n5" type="radio"><span>有状态变化时</span>
                  </label>
                  <label class="radio">
                    <input name="n5" type="radio"><span>定期发送</span>
                  </label>
                </div>
              </div>
              <div class="form-group">
                <label for="n6" class="form-label">订阅方式</label>
                <div class="form-box">
                  <label class="checkbox">
                    <input name="n6" type="checkbox"><span>系统消息</span>
                  </label>
                  <label class="checkbox">
                    <input name="n6" type="checkbox"><span>邮件发送</span>
                  </label>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label"></label>
                <div class="form-box">
                  <button type="submit" class="btn btn-blue form-control-width">保 存</button>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>
  <?php require_once('../includes/ui-user-footer.php'); ?>
</body>
</html>
