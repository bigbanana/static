<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>列表页</title>
  <link rel="stylesheet" href="//static.yaozh.com/css/app.css">
  <link rel="stylesheet" href="//static.yaozh.com/css/db.css">
  <script>
    var config = {
      baseUrl : '//static.yaozh.com/js',
      deps : ['project/db/public']
    }
  </script>
  <script src="//static.yaozh.com/js/app.js"></script>
  <!--[if lt IE 9]><script src="http://static.yaozh.com/js/special/html5shiv.js"></script><![endif]-->
</head>
<body class="page-list">
  <div class="ui-topbar other-topbar">
    <div class="wrapper">
      <div class="fl">
        <a href="#" class="item cl-blue">药智网</a>
        <a href="#" class="item cl-blue">药智新闻</a>
        <a href="#" class="item cl-blue">药智商城</a>
        <a href="#" class="item cl-blue">药智论坛</a>
        <span class="item sub-box">
          <a class="name" href="#">客户服务 <i class="fa"></i></a>
          <div class="subnav">
            <ul>
              <li><a href="#">服务QQ</a></li>
              <li><a href="#">电话咨询</a></li>
              <li><a href="#">在线帮助</a></li>
            </ul>
          </div>
        </span>
        <span class="item sub-box app">
          <span class="app-icon"><i class="fa"></i> <span>药智数据APP</span></span>
          <div class="subnav">
            <div class="box">
              <a href="javascript:alert('开发中！')" class="btn btn-sm ios btn-gray">
                <i class="fa"></i>
                <span>iPhone版下载</span>
              </a>
              <a href="javascript:alert('开发中！')" class="btn btn-sm android mt10 btn-green">
                <i class="fa"></i>
                <span>android版下载</span>
              </a>
              <div class="tc mt10">
                <i class="download_qrcode"></i>
              </div>
            </div>

          </div>
        </span>
      </div>
      <div class="fr">
        <span class="item user">
          <img src="http://www.yaozh.com/uploads/userface/no.png" alt="头像">
          <a href="#" target="_blank">小智数据库</a>
          <i class="vip5"></i>
        </span>
        <span class="item line">
          <a href="#"><i class="fa"></i> 50</a>
        </span>
        <span class="item line">
          <a href="#">退出</a>
        </span>
      </div>
      
    </div>
  </div>
  <div class="header-bar">
    <div class="header-layer">
      <form class="wrapper" action="//db.yaozh.com/jiansuo.php" target="_blank">
        <a href="//db.yaozh.com" class="logo" title="药智数据"></a>        
        <div class="search-box">
          <select class="search-type-select ignore-focus" name="btn_jiansuo" data-widget="dropdownSelect">
            <option value="1" data-action="//db.yaozh.com/jiansuo.php?btn_jiansuo=1" data-key="yaoname">数据库</option>
            <option value="2" data-action="//s.yaozh.com/Index/search" data-key="search">商城</option>
            <option value="3" data-action="//www.yaozh.com/list/" data-key="keytitle">威客</option>
            <option value="4" data-action="//bbs.yaozh.com/search.php?searchsubmit=yes" data-key="srchtxt">论坛</option>
          </select>
          <input class="search ignore-focus" name="yaoname" type="text">
          <a href="javascript:;" class="search-btn">搜索</a>
        </div>
      </form>
    </div>
  </div>

  <div class="main">
    <ul class="ui-topnav other-nav">
      <li class="item">
        <a class="name" href="javascript:;">药品研发</a>
        <ul class="subnav dot">
          <li><a href="http://db.yaozh.com/zhuce" target='_blank'>药品注册与受理数据库</a></li>
          <li><a href="http://db.yaozh.com/xinyao" target='_blank'>新药批准信息(1978-2003)</a></li>
          <li><a href="http://db.yaozh.com/zhuangrang" target='_blank'>药品转让信息数据库</a></li>
          <li><a href="http://db.yaozh.com/targets" target='_blank'>药物分子靶点数据库</a></li>
          <li><a href="http://db.yaozh.com/guowaixinyao" target='_blank'>国外新药及新剂型数据库</a></li>
          <li><a href="http://db.yaozh.com/fdayp" target='_blank'>美国FDA药品数据库</a></li>
          <li><a href="http://db.yaozh.com/dmf" target='_blank'>美国DMF注册数据库</a></li>
          <li><a href="http://db.yaozh.com/epyp" target='_blank'>欧盟药品上市信息</a></li>
          <li><a href="http://db.yaozh.com/usan" target='_blank'>美国在研新药数据库</a></li>
          <li><a href="http://db.yaozh.com/linchuangshiyan" target='_blank'>临床试验数据库</a></li>
          <li><a href="http://db.yaozh.com/animalmodel" target='_blank'>动物模型数据库</a></li>
          <li><a href="http://db.yaozh.com/tiwai" target='_blank'>药品体外溶出试验信息库</a></li>
          <li><a href="http://db.yaozh.com/nce" target='_blank'>药物新化学实体专利信息</a></li>
        </ul>
      </li>
      <li class="item">
        <a class="name" href="javascript:;">生产检验</a>
        <ul class="subnav dot">
          <li><a href="http://db.yaozh.com/biaozhun" target='_blank'>中国药品标准</a></li>
          <li><a href="http://db.yaozh.com/fulu" target='_blank'>中国药典附录</a></li>
          <li><a href="http://db.yaozh.com/foreign" target='_blank'>国外药典在线</a></li>
          <li><a href="http://db.yaozh.com/IR" target='_blank'>红外光谱图</a></li>
          <li><a href="http://db.yaozh.com/sepu" target='_blank'>色谱图数据库</a></li>
          <li><a href="http://db.yaozh.com/jiance" target='_blank'>药检所检测项目费用查询</a></li>
          <li><a href="http://db.yaozh.com/medbagstand" target='_blank'>药包材标准</a></li>
          <li><a href="http://db.yaozh.com/pizhunyaocaibao" target='_blank'>批准的药包材</a></li>
          <li><a href="http://db.yaozh.com/shengchanqiye" target='_blank'>中国药品生产企业</a></li>
          <li><a href="http://db.yaozh.com/gmp" target='_blank'>GMP认证查询</a></li>
        </ul>
      </li>
      <li class="item">
        <a class="name" href="javascript:;">合理用药</a>
        <ul class="subnav dot">
          <li><a href="http://db.yaozh.com/instruct" target='_blank'>药品说明书</a></li>
          <li><a href="http://db.yaozh.com/unlabeleduse" target='_blank'>超说明书用药数据库</a></li>
          <li><a href="http://db.yaozh.com/fda_shuomingshu" target='_blank'>美国FDA药品说明书</a></li>
          <li><a href="http://db.yaozh.com/jp_shuomingshu" target='_blank'>日本药品说明书</a></li>
          <li><a href="http://db.yaozh.com/yibao" target='_blank'>医保目录查询</a></li>
          <li><a href="http://db.yaozh.com/basicdir" target='_blank'>基本药物目录查询</a></li>
          <li><a href="http://db.yaozh.com/goods" target='_blank'>药品商品名查询</a></li>
          <li><a href="http://db.yaozh.com/atc" target='_blank'>药物ATC编码查询系统</a></li>
          <li><a href="http://db.yaozh.com/martindale" target='_blank'>马丁代尔大药典</a></li>
        </ul>
      </li>
      <li class="item">
        <a class="name" href="javascript:;">市场信息</a>
        <ul class="subnav dot">
          <li><a href="http://db.yaozh.com/USAMarket200" target='_blank'>美国药品销售数据TOP200数据库</a></li>
          <li><a href="http://db.yaozh.com/policies" target='_blank'>政策法规数据库</a></li>
          <li><a href='http://db.yaozh.com/screening'>上市药品查询筛选系统</a></li>
          <li><a href="http://db.yaozh.com/pijian" target='_blank'>国产药品数据库</a></li>
          <li><a href="http://db.yaozh.com/jinkou" target='_blank'>进口药品数据库</a></li>
          <li><a href="http://db.yaozh.com/yaopinzhongbiao" target='_blank'>药品中标信息查询</a></li>
          <li><a href="http://db.yaozh.com/pifajiage" target='_blank'>太和药品行情查询</a></li>
          <li><a href="http://db.yaozh.com/yaopinjiage" target='_blank'>药品最高零售价</a></li>
          <li><a href="http://db.yaozh.com/agent" target='_blank'>代理商数据库</a></li>
          <li><a href="http://db.yaozh.com/hmap" target='_blank'>全国医院数据库</a></li>
        </ul>
      </li>
      <li class="item">
        <a class="name" href="javascript:;">CHEMPHARM</a>
        <ul class="subnav dot">
          <li><a href="http://db.yaozh.com/fuliao" target='_blank'>辅料数据库</a></li>
          <li><a href="http://db.yaozh.com/biaozhundb" target='_blank'>杂质-对照品数据库</a></li>
          <li><a href="http://db.yaozh.com/jiegou" target='_blank'>百万化合物信息库</a></li>
          <li><a href="http://db.yaozh.com/fzk" target='_blank'>药物合成数据库</a></li>
          <li><a href="http://db.yaozh.com/bpc" target='_blank'>全球新药研发品种库</a></li>
          <li><a href="http://db.yaozh.com/onrc" target='_blank'>有机合成经典反应数据库</a></li>
          <li><a href="http://db.yaozh.com/hcff" target='_blank'>有机合成方法数据库</a></li>
        </ul>
      </li>
      <li class="item">
        <a class="name" href="javascript:;">中药材</a>
        <ul class="subnav dot">
          <li><a href="http://db.yaozh.com/chufang" target='_blank'>中成药处方数据库</a></li>
          <li><a href="http://db.yaozh.com/sepu" target='_blank'>色谱图数据库</a></li>
          <li><a href="http://db.yaozh.com/fangji" target='_blank'>经典中药方剂</a></li>
          <li><a href="http://db.yaozh.com/yaocai_bz" target='_blank'>药材标准</a></li>
          <li><a href="http://db.yaozh.com/tupu" target='_blank'>中药材图谱</a></li>
          <li><a href="http://db.yaozh.com/zhongyaocai" target='_blank'>中药材基本信息库</a></li>
          <li><a href="http://db.yaozh.com/yaocai" target='_blank'>药材辞典与现代化研究</a></li>
          <li><a href="http://db.yaozh.com/zhongyaopinzhong" target='_blank'>中药保护品种</a></li>
        </ul>
      </li>
      <li class="item">
        <a class="name" href="javascript:;">医疗器械</a>
        <ul class="subnav dot">
          <li><a href="http://db.yaozh.com/jixie" target='_blank'>国产器械</a></li>
          <li><a href="http://db.yaozh.com/jinkoujixie" target='_blank'>进口器械</a></li>
          <li><a href="http://db.yaozh.com/qixiebiaozhun" target='_blank'>医疗器械标准</a></li>
          <li><a href="http://db.yaozh.com/fenleimulu" target='_blank'>医疗器械分类目录</a></li>
          <li><a href="http://db.yaozh.com/jixieshengchanqiye" target='_blank'>医疗器械生产企业</a></li>
        </ul>
      </li>
      <li class="item">
        <a class="name" href="javascript:;">食品-化妆品</a>
        <ul class="subnav dot">
          <li><a href="http://db.yaozh.com/bjsp" target='_blank'>保健食品处方数据库</a></li>
          <li><a href="http://db.yaozh.com/baojian" target='_blank'>国产保健食品</a></li>
          <li><a href="http://db.yaozh.com/jinkoubaojian" target='_blank'>进口保健食品</a></li>
          <li><a href="http://db.yaozh.com/huazhuang" target='_blank'>国产化妆品</a></li>
          <li><a href= arrow"http://db.yaozh.com/jinkouhuazhuang" target='_blank'>进口化妆品</a></li>
          <li><a href="http://db.yaozh.com/huazhuang_yl" target='_blank'>化妆品原料</a></li>
        </ul>
      </li>
      <li class="padding">
        <a href="http://db.yaozh.com/gjvip.php?action=gaojivip" title="药智数据VIP入口" target="_blank">VIP</a>
      </li>
      <li class="padding">
        <a href="http://db.yaozh.com/zhuce/map.php#body" title="数据库导航_网站地图" class="map_i" target="_blank">数据库导航</a>
      </li>
    </ul>
    <div class="ui-crumb offset-top">
      <span>当前位置：</span>
      <a href="#">首页</a>
      <i>&gt;</i>
      <span>超说明书用药数据库</span>
    </div>
    <div class="ui-box ui-box-gray offset-top">
      <form class="form align-right form-style-2" action="">
        <div class="form-groups pt20">
          <div class="form-group">
            <label class="form-label">药品名称：</label>
            <div class="form-box">
              <input class="form-control" placeholder="药品名称" type="text" name="name" required />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">药物剂型和：</label>
            <div class="form-box">
              <input class="form-control" placeholder="药物剂型和" type="text" name="name" required />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">申请机构：</label>
            <div class="form-box">
              <input class="form-control" placeholder="申请机构" type="text" name="name" required />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label"></label>
            <div class="form-box">
              <button type="submit" class="btn btn-blue form-control-width">搜索</button>
            </div>
          </div>
        </div>
        <div class="form-groups pt20">
          <div class="form-group">
            <label class="form-label">药品名称：</label>
            <div class="form-box">
              <input class="form-control" placeholder="请输入账号" type="text" name="name" required />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">药物剂型和：</label>
            <div class="form-box">
              <input class="form-control" placeholder="请输入账号" type="text" name="name" required />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">申请机构：</label>
            <div class="form-box">
              <input class="form-control" placeholder="请输入账号" type="text" name="name" required />
            </div>
          </div>
        </div>
        <div class="form-groups">
          <div class="ui-box ui-box-yellow p10">
            <p>使用说明</p>
            <p>一、项目状态检索标识及释义:</p>
            <ul class="ml20">
              <li>A：已激活</li>
              <li>I： 未激活</li>
            </ul>
            <p>二、项目类型检索标识及释义:</p>
            <ul style="list-style-type:upper-roman;margin-left:40px;">
              <li>生产现场、设备、操作步骤和人员（2000年6月起不再适用）。</li>
              <li>药物、药物中间体，及其制备过程中使用的原料或药品。</li>
              <li>包装材料。</li>
              <li>赋形剂、着色剂、香精、香料, 或其制备过程中使用的原料。</li>
              <li>FDA认可的参考资料。</li>
            </ul>
            <p>三、项目主题支持使用药物英文名、国别及地区来查询。</p>
            <p>四、项目持有者支持公司名称查询。</p>
          </div>
        </div>

      </form>    
    </div>
    <div class="ui-filter offset-top">
      <div class="rows">
        <div class="row">
          <label class="key">已选条件：</label>
          <div class="values">
            <span class="field">
              <span>进口国产：</span>
              <em>进口药物</em>
              <i class="fa"></i>
            </span>
            <span class="field">
              <span>药品类别：</span>
              <em>生物制品</em>
              <i class="fa"></i>
            </span>
          </div>
        </div>
        <div class="row">
          <label class="key">进口国产：</label>
          <div class="values">
            <a href="#" class="link">进口药物</a>
            <a href="#" class="link">国产药物</a>
          </div>
        </div>
        <div class="row">
          <label class="key">药品大类：</label>
          <div class="values">
            <a href="#" class="link">消化道及代谢</a>
            <a href="#" class="link cl-blue">中成药</a>
            <a href="#" class="link">生物制品</a>
            <a href="#" class="link">辅料</a>
            <a href="#" class="link">消化道及代谢</a>
            <a href="#" class="link cl-blue">中成药</a>
            <a href="#" class="link">生物制品</a>
            <a href="#" class="link">辅料</a>
            <a href="#" class="link">消化道及代谢</a>
            <a href="#" class="link cl-blue">中成药</a>
            <a href="#" class="link">生物制品</a>
            <a href="#" class="link">辅料</a>
            <a href="#" class="link">消化道及代谢</a>
            <a href="#" class="link cl-blue">中成药</a>
            <a href="#" class="link">生物制品</a>
            <a href="#" class="link">辅料</a>
          </div>
        </div>
        <div class="row">
          <label class="key">医保药品：</label>
          <div class="values">
            <a href="#" class="link">甲类</a>
            <a href="#" class="link">乙类</a>
            <a href="#" class="link">非医保</a>
            <a href="#" class="link">全部医保</a>
            <a href="#" class="link">名族医保</a>
          </div>
        </div>
        <div class="row">
          <label class="key">生产厂家数量：</label>
          <div class="values">
            <span class="num-area space">
              <input type="text" class="min"> -
              <input type="text" class="max">
              <button class="btn btn-sm">确定</button>
            </span>
            <label class="radio"><input type="radio" name="zzz" value="1"> 按品种统计</label>
            <label class="radio"><input type="radio" name="zzz" value="2"> 按品种统计</label>
          </div>
        </div>
      </div>
      <div class="more">
        <div class="rows">
          <div class="row">
            <label class="key">药品类别：</label>
            <div class="values">
              <a href="#" class="link">化学药</a>
              <a href="#" class="link">中成药</a>
              <a href="#" class="link">生物制品</a>
              <a href="#" class="link">辅料</a>
            </div>
          </div>
          <div class="row">
            <label class="key">药品剂型：</label>
            <div class="values">
              <a href="#" class="link">口服</a>
              <a href="#" class="link">缓释控释剂型</a>
              <a href="#" class="link">口服液体剂</a>
            </div>
          </div>
        </div>
        <div class="control">
          <button class="btn">
            <span class="more">更多选项 <i class="fa"></i></span>
            <span class="less">收起 <i class="fa"></i></span>
          </button>
        </div>
      </div>
    </div>
    
    <div id="responsive-table-test" data-pattern="priority-columns">
      <div class="actions">
        <a class="link" href="#"><i class="fa"></i><span>数据分析</span></a>
        <a class="link" href="#"><i class="fa"></i><span>导出</span></a>
      </div>
      <table cellspacing="0" class="table table-small-font table-bordered table-striped">
        <thead>
           <tr>
              <th>Company</th>
              <th data-priority="1">Last Trade</th>
              <th data-priority="3">Trade Time</th>
              <th data-priority="1">Change</th>
              <th data-priority="3">Prev Close</th>
              <th data-priority="3">Open</th>
              <th data-priority="6">Bid</th>
              <th data-priority="4">Ask</th>
              <th data-priority="4">1y Target Est</th>
              <th data-priority="5">Lorem</th>
              <th data-priority="6">Ipsum</th>
           </tr>
        </thead>
        <tbody>
           <tr>
              <th>GOOG <span class="co-name">Google Inc.</span></th>
              <td>597.74</td>
              <td>12:12PM</td>
              <td>14.81 (2.54%)</td>
              <td>582.93</td>
              <td>597.95</td>
              <td>597.73 x 100</td>
              <td>597.91 x 300</td>
              <td>731.10</td>
              <td colspan="2">Spanning cell</td>
           </tr>      
           <tr>
              <th>AAPL <span class="co-name">Apple Inc.</span></th>
              <td>378.94</td>
              <td>12:22PM</td>
              <td>5.74 (1.54%)</td>
              <td>373.20</td>
              <td>381.02</td>
              <td>378.92 x 300</td>
              <td>378.99 x 100</td>
              <td>505.94</td>
              <td colspan="2">Spanning cell</td>
           </tr>      
           <tr>
              <th>AMZN <span class="co-name">Amazon.com Inc.</span></th>
              <td>191.55</td>
              <td>12:23PM</td>
              <td>3.16 (1.68%)</td>
              <td>188.39</td>
              <td>194.99</td>
              <td>191.52 x 300</td>
              <td>191.58 x 100</td>
              <td>240.32</td>
              <td colspan="2">Spanning cell</td>  
           </tr>       
           <tr>
              <th>ORCL <span class="co-name">Oracle Corporation</span></th>
              <td>31.15</td>
              <td>12:44PM</td>
              <td>1.41 (4.72%)</td>
              <td>29.74</td>
              <td>30.67</td>
              <td>31.14 x 6500</td>
              <td>31.15 x 3200</td>
              <td>36.11</td>
              <td colspan="2">Spanning cell</td>
           </tr>      
           <tr>
              <th>MSFT <span class="co-name">Microsoft Corporation</span></th>
              <td>25.50</td>
              <td>12:27PM</td>
              <td>0.66 (2.67%)</td>
              <td>24.84</td>
              <td>25.37</td>
              <td>25.50 x 71100</td>
              <td>25.51 x 17800</td>
              <td>31.50</td>
              <td>Non-spanning</td>
              <td>Non-spanning</td>  
           </tr>
           <tr>
              <th>CSCO <span class="co-name">Cisco Systems, Inc.</span></th>
              <td>18.65</td>
              <td>12:45PM</td>
              <td>0.97 (5.49%)</td>
              <td>17.68</td>
              <td>18.23</td>
              <td>18.65 x 10300</td>
              <td>18.66 x 24000</td>
              <td>21.12</td>
              <td>Non-spanning</td>
              <td>Non-spanning</td>  
           </tr>      
           <tr>
              <th>YHOO <span class="co-name">Yahoo! Inc.</span></th>
              <td>15.81</td>
              <td>12:25PM</td>
              <td>0.11 (0.67%)</td>
              <td>15.70</td>
              <td>15.94</td>
              <td>15.79 x 6100</td>
              <td>15.80 x 17000</td>
              <td>18.16</td>
              <td>Non-spanning</td>
              <td>Non-spanning</td>         
           </tr>
           <!-- Repeat -->
           <tr>
              <th>GOOG <span class="co-name">Google Inc.</span></th>
              <td>597.74</td>
              <td>12:12PM</td>
              <td>14.81 (2.54%)</td>
              <td>582.93</td>
              <td>597.95</td>
              <td>597.73 x 100</td>
              <td>597.91 x 300</td>
              <td>731.10</td>
              <td colspan="2">Spanning cell</td>
           </tr>      
           <tr>
              <th>AAPL <span class="co-name">Apple Inc.</span></th>
              <td>378.94</td>
              <td>12:22PM</td>
              <td>5.74 (1.54%)</td>
              <td>373.20</td>
              <td>381.02</td>
              <td>378.92 x 300</td>
              <td>378.99 x 100</td>
              <td>505.94</td>
              <td colspan="2">Spanning cell</td>
           </tr>      
           <tr>
              <th>AMZN <span class="co-name">Amazon.com Inc.</span></th>
              <td>191.55</td>
              <td>12:23PM</td>
              <td>3.16 (1.68%)</td>
              <td>188.39</td>
              <td>194.99</td>
              <td>191.52 x 300</td>
              <td>191.58 x 100</td>
              <td>240.32</td>
              <td colspan="2">Spanning cell</td>  
           </tr>       
           <tr>
              <th>ORCL <span class="co-name">Oracle Corporation</span></th>
              <td>31.15</td>
              <td>12:44PM</td>
              <td>1.41 (4.72%)</td>
              <td>29.74</td>
              <td>30.67</td>
              <td>31.14 x 6500</td>
              <td>31.15 x 3200</td>
              <td>36.11</td>
              <td colspan="2">Spanning cell</td>
           </tr>      
           <tr>
              <th>MSFT <span class="co-name">Microsoft Corporation</span></th>
              <td>25.50</td>
              <td>12:27PM</td>
              <td>0.66 (2.67%)</td>
              <td>24.84</td>
              <td>25.37</td>
              <td>25.50 x 71100</td>
              <td>25.51 x 17800</td>
              <td>31.50</td>
              <td>Non-spanning</td>
              <td>Non-spanning</td>  
           </tr>
           <tr>
              <th>CSCO <span class="co-name">Cisco Systems, Inc.</span></th>
              <td>18.65</td>
              <td>12:45PM</td>
              <td>0.97 (5.49%)</td>
              <td>17.68</td>
              <td>18.23</td>
              <td>18.65 x 10300</td>
              <td>18.66 x 24000</td>
              <td>21.12</td>
              <td>Non-spanning</td>
              <td>Non-spanning</td>  
           </tr>      
           <tr>
              <th>YHOO <span class="co-name">Yahoo! Inc.</span></th>
              <td>15.81</td>
              <td>12:25PM</td>
              <td>0.11 (0.67%)</td>
              <td>15.70</td>
              <td>15.94</td>
              <td>15.79 x 6100</td>
              <td>15.80 x 17000</td>
              <td>18.16</td>
              <td>Non-spanning</td>
              <td>Non-spanning</td>         
           </tr>
           <!-- Repeat -->
           <tr>
              <th>GOOG <span class="co-name">Google Inc.</span></th>
              <td>597.74</td>
              <td>12:12PM</td>
              <td>14.81 (2.54%)</td>
              <td>582.93</td>
              <td>597.95</td>
              <td>597.73 x 100</td>
              <td>597.91 x 300</td>
              <td>731.10</td>
              <td colspan="2">Spanning cell</td>
           </tr>      
           <tr>
              <th>AAPL <span class="co-name">Apple Inc.</span></th>
              <td>378.94</td>
              <td>12:22PM</td>
              <td>5.74 (1.54%)</td>
              <td>373.20</td>
              <td>381.02</td>
              <td>378.92 x 300</td>
              <td>378.99 x 100</td>
              <td>505.94</td>
              <td colspan="2">Spanning cell</td>
           </tr>      
           <tr>
              <th>AMZN <span class="co-name">Amazon.com Inc.</span></th>
              <td>191.55</td>
              <td>12:23PM</td>
              <td>3.16 (1.68%)</td>
              <td>188.39</td>
              <td>194.99</td>
              <td>191.52 x 300</td>
              <td>191.58 x 100</td>
              <td>240.32</td>
              <td colspan="2">Spanning cell</td>  
           </tr>       
           <tr>
              <th>ORCL <span class="co-name">Oracle Corporation</span></th>
              <td>31.15</td>
              <td>12:44PM</td>
              <td>1.41 (4.72%)</td>
              <td>29.74</td>
              <td>30.67</td>
              <td>31.14 x 6500</td>
              <td>31.15 x 3200</td>
              <td>36.11</td>
              <td colspan="2">Spanning cell</td>
           </tr>      
           <tr>
              <th>MSFT <span class="co-name">Microsoft Corporation</span></th>
              <td>25.50</td>
              <td>12:27PM</td>
              <td>0.66 (2.67%)</td>
              <td>24.84</td>
              <td>25.37</td>
              <td>25.50 x 71100</td>
              <td>25.51 x 17800</td>
              <td>31.50</td>
              <td>Non-spanning</td>
              <td>Non-spanning</td>  
           </tr>
           <tr>
              <th>CSCO <span class="co-name">Cisco Systems, Inc.</span></th>
              <td>18.65</td>
              <td>12:45PM</td>
              <td>0.97 (5.49%)</td>
              <td>17.68</td>
              <td>18.23</td>
              <td>18.65 x 10300</td>
              <td>18.66 x 24000</td>
              <td>21.12</td>
              <td>Non-spanning</td>
              <td>Non-spanning</td>  
           </tr>      
           <tr>
              <th>YHOO <span class="co-name">Yahoo! Inc.</span></th>
              <td>15.81</td>
              <td>12:25PM</td>
              <td>0.11 (0.67%)</td>
              <td>15.70</td>
              <td>15.94</td>
              <td>15.79 x 6100</td>
              <td>15.80 x 17000</td>
              <td>18.16</td>
              <td>Non-spanning</td>
              <td>Non-spanning</td>         
           </tr>
           <!-- Repeat -->
           <tr>
              <th>GOOG <span class="co-name">Google Inc.</span></th>
              <td>597.74</td>
              <td>12:12PM</td>
              <td>14.81 (2.54%)</td>
              <td>582.93</td>
              <td>597.95</td>
              <td>597.73 x 100</td>
              <td>597.91 x 300</td>
              <td>731.10</td>
              <td colspan="2">Spanning cell</td>
           </tr>      
           <tr>
              <th>AAPL <span class="co-name">Apple Inc.</span></th>
              <td>378.94</td>
              <td>12:22PM</td>
              <td>5.74 (1.54%)</td>
              <td>373.20</td>
              <td>381.02</td>
              <td>378.92 x 300</td>
              <td>378.99 x 100</td>
              <td>505.94</td>
              <td colspan="2">Spanning cell</td>
           </tr>      
           <tr>
              <th>AMZN <span class="co-name">Amazon.com Inc.</span></th>
              <td>191.55</td>
              <td>12:23PM</td>
              <td>3.16 (1.68%)</td>
              <td>188.39</td>
              <td>194.99</td>
              <td>191.52 x 300</td>
              <td>191.58 x 100</td>
              <td>240.32</td>
              <td colspan="2">Spanning cell</td>  
           </tr>       
           <tr>
              <th>ORCL <span class="co-name">Oracle Corporation</span></th>
              <td>31.15</td>
              <td>12:44PM</td>
              <td>1.41 (4.72%)</td>
              <td>29.74</td>
              <td>30.67</td>
              <td>31.14 x 6500</td>
              <td>31.15 x 3200</td>
              <td>36.11</td>
              <td colspan="2">Spanning cell</td>
           </tr>      
           <tr>
              <th>MSFT <span class="co-name">Microsoft Corporation</span></th>
              <td>25.50</td>
              <td>12:27PM</td>
              <td>0.66 (2.67%)</td>
              <td>24.84</td>
              <td>25.37</td>
              <td>25.50 x 71100</td>
              <td>25.51 x 17800</td>
              <td>31.50</td>
              <td>Non-spanning</td>
              <td>Non-spanning</td>  
           </tr>
           <tr>
              <th>CSCO <span class="co-name">Cisco Systems, Inc.</span></th>
              <td>18.65</td>
              <td>12:45PM</td>
              <td>0.97 (5.49%)</td>
              <td>17.68</td>
              <td>18.23</td>
              <td>18.65 x 10300</td>
              <td>18.66 x 24000</td>
              <td>21.12</td>
              <td>Non-spanning</td>
              <td>Non-spanning</td>  
           </tr>      
           <tr>
              <th>YHOO <span class="co-name">Yahoo! Inc.</span></th>
              <td>15.81</td>
              <td>12:25PM</td>
              <td>0.11 (0.67%)</td>
              <td>15.70</td>
              <td>15.94</td>
              <td>15.79 x 6100</td>
              <td>15.80 x 17000</td>
              <td>18.16</td>
              <td>Non-spanning</td>
              <td>Non-spanning</td>         
           </tr>
           <!-- Repeat -->
           <tr>
              <th>GOOG <span class="co-name">Google Inc.</span></th>
              <td>597.74</td>
              <td>12:12PM</td>
              <td>14.81 (2.54%)</td>
              <td>582.93</td>
              <td>597.95</td>
              <td>597.73 x 100</td>
              <td>597.91 x 300</td>
              <td>731.10</td>
              <td colspan="2">Spanning cell</td>
           </tr>      
           <tr>
              <th>AAPL <span class="co-name">Apple Inc.</span></th>
              <td>378.94</td>
              <td>12:22PM</td>
              <td>5.74 (1.54%)</td>
              <td>373.20</td>
              <td>381.02</td>
              <td>378.92 x 300</td>
              <td>378.99 x 100</td>
              <td>505.94</td>
              <td colspan="2">Spanning cell</td>
           </tr>      
           <tr>
              <th>AMZN <span class="co-name">Amazon.com Inc.</span></th>
              <td>191.55</td>
              <td>12:23PM</td>
              <td>3.16 (1.68%)</td>
              <td>188.39</td>
              <td>194.99</td>
              <td>191.52 x 300</td>
              <td>191.58 x 100</td>
              <td>240.32</td>
              <td colspan="2">Spanning cell</td>  
           </tr>       
           <tr>
              <th>ORCL <span class="co-name">Oracle Corporation</span></th>
              <td>31.15</td>
              <td>12:44PM</td>
              <td>1.41 (4.72%)</td>
              <td>29.74</td>
              <td>30.67</td>
              <td>31.14 x 6500</td>
              <td>31.15 x 3200</td>
              <td>36.11</td>
              <td colspan="2">Spanning cell</td>
           </tr>      
           <tr>
              <th>MSFT <span class="co-name">Microsoft Corporation</span></th>
              <td>25.50</td>
              <td>12:27PM</td>
              <td>0.66 (2.67%)</td>
              <td>24.84</td>
              <td>25.37</td>
              <td>25.50 x 71100</td>
              <td>25.51 x 17800</td>
              <td>31.50</td>
              <td>Non-spanning</td>
              <td>Non-spanning</td>  
           </tr>
           <tr>
              <th>CSCO <span class="co-name">Cisco Systems, Inc.</span></th>
              <td>18.65</td>
              <td>12:45PM</td>
              <td>0.97 (5.49%)</td>
              <td>17.68</td>
              <td>18.23</td>
              <td>18.65 x 10300</td>
              <td>18.66 x 24000</td>
              <td>21.12</td>
              <td>Non-spanning</td>
              <td>Non-spanning</td>  
           </tr>      
           <tr>
              <th>YHOO <span class="co-name">Yahoo! Inc.</span></th>
              <td>15.81</td>
              <td>12:25PM</td>
              <td>0.11 (0.67%)</td>
              <td>15.70</td>
              <td>15.94</td>
              <td>15.79 x 6100</td>
              <td>15.80 x 17000</td>
              <td>18.16</td>
              <td>Non-spanning</td>
              <td>Non-spanning</td>         
           </tr>
        </tbody>
      </table>
    </div>

    <div class="pagination offset-top tr" data-widget="pagination" data-page="3" data-total="470" data-size="20"></div>

  </div>
  
  <div class="footer">
    <div class="clearfix">
      <div class="fl">
        <a href="#">关于我们</a>
        <a href="#">帮助中心</a>
        <a href="#">开放接口</a>
        <a href="#">APP</a>
        <a href="#">反馈</a>
      </div>
      <div class="fr">
        <i class="fa"></i>
        <b class="fs16 mr20">400-678-0778</b>
        <a class="fa" href="//weibo.com/yaozh008" target="_blank" title="新浪微博"></a>
        <a class="fa" href="//e.t.qq.com/yaozhcom" target="_blank" title="腾讯微博"></a>
      </div>
    </div>
    <div class="clearfix">
      <div class="fl">
        <span class="mr10">友情链接：</span>
        <a href="#">药品查询</a>
        <a href="#">药品价格</a>
        <a href="#">查询保健品</a>
        <a href="#">商城疾病症状</a>
        <a href="#">网上药店</a>
        <a href="#">药品哈药</a>
      </div>
      <div class="fr">Copyright © 2015 药智网YAOZH.COM  渝ICP备10200070号</div>
    </div>
  </div>

  <script>
    require(['jquery','widget.responsivetable'],function($){
      var $responsivetable = $('#responsive-table-test');
      $responsivetable.responsivetable({
        stickyHeaderOffset:61
      });
    });
  </script>
</body>
