<!DOCTYPE html>
<html lang="en">
<?php 
  $title = "头部";
  require_once('./includes/static.php');
 ?>
<body>
  <header>
    <h3>顶部条</h3>
    <?php require_once('./includes/ui-topbar.php'); ?>
    <h3 class="mt20">综合搜索条</h3>
    <?php require_once('./includes/ui-header.php'); ?>
    <h3 class="mt20">会员中心顶部</h3>
    <?php require_once('./includes/ui-user-header.php'); ?>
  </header>
</body>
