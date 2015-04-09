<?php
/**
 * 获取已上传的文件列表
 * User: Jinqn
 * Date: 14-04-09
 * Time: 上午10:17
 */
/*include "Uploader.class.php";*/
/* 判断类型 */

/*switch ($_GET['action']) {
    case 'listfile':
        $allowFiles = $CONFIG['fileManagerAllowFiles'];
        $listSize = $CONFIG['fileManagerListSize'];
        $path = $CONFIG['fileManagerListPath'];
        break;
    case 'listimage':
    default:
        $allowFiles = $CONFIG['imageManagerAllowFiles'];
        $listSize = $CONFIG['imageManagerListSize'];
        $path = $CONFIG['imageManagerListPath'];
}
$allowFiles = substr(str_replace(".", "|", join("", $allowFiles)) , 1);*/
/* 获取参数 */
/*$size = isset($_GET['size']) ? htmlspecialchars($_GET['size']) : $listSize;
$start = isset($_GET['start']) ? htmlspecialchars($_GET['start']) : 0;
$end = $start + $size;*/
/* 登录超时 */
/*if (!$_SESSION['authId']) {
    
    return json_encode(array(
        "state" => "登录超时",
        "list" => array() ,
        "start" => $start,
        "total" => count($files)
    ));
}*/
/* 获取文件列表 */
/*$path = $_SERVER['DOCUMENT_ROOT'] . (substr($path, 0, 1) == "/" ? "" : "/") . $path;
$files = getfiles($path, $allowFiles);
if (!count($files)) {
    
    return json_encode(array(
        "state" => "no match file",
        "list" => array() ,
        "start" => $start,
        "total" => count($files)
    ));
}*/
/* 获取指定范围的列表 */
/*$len = count($files);

for ($i = min($end, $len) - 1, $list = array(); $i < $len && $i >= 0 && $i >= $start; $i--) {
    $list[] = $files[$i];
}*/
//倒序
//for ($i = $end, $list = array(); $i < $len && $i < $end; $i++){
//    $list[] = $files[$i];
//}
/* 返回数据 */
/*$result = json_encode(array(
    "state" => "SUCCESS",
    "list" => $list,
    "start" => $start,
    "total" => count($files)
));

return $result;*/
/**
 * 遍历获取目录下的指定类型的文件
 * @param $path
 * @param array $files
 * @return array
 */
/*function getfiles($path, $allowFiles, &$files = array()) {
    if (!is_dir($path)) 
    return null;
    if (substr($path, strlen($path) - 1) != '/') $path.= '/';
    $handle = opendir($path);
    
    while (false !== ($file = readdir($handle))) {
        if ($file != '.' && $file != '..') {
            $path2 = $path . $file;
            if (is_dir($path2)) {
                getfiles($path2, $allowFiles, $files);
            } else {
                if (preg_match("/\.(" . $allowFiles . ")$/i", $file)) {
                    $files[] = array(
                        'url' => substr($path2, strlen($_SERVER['DOCUMENT_ROOT'])) ,
                        'mtime' => filemtime($path2)
                    );
                }
            }
        }
    }
    
    return $files;
}
*/
@session_start();
/* 登录超时 */
if (!$_SESSION['authId']) {
    return json_encode(array(
        "state" => "登录超时",
        "list" => array() ,
        "start" => 0,
        "total" => 0
    ));
}
require_once '../../../oss_php_sdk/sdk.class.php';
$oss_sdk_service = new ALIOSS();
$bucket = BUCKET;
$options = array(
        'delimiter' => '/',
        'prefix' => $_SESSION['authId'].'/',
        'max-keys' => 100
    );
$req = $oss_sdk_service->list_object($bucket, $options);
$req = json_decode(json_encode((array) simplexml_load_string($req->body)), true);
// var_dump($req);
$files = array();
foreach($req["Contents"] as $k=>$v){
    $files[] = array(
        'url' => URL.$v['Key'],
        'mtime' => strtotime($v['LastModified'])
        );
};

$listSize = $CONFIG['imageManagerListSize'];
/* 获取参数 */
$size = isset($_GET['size']) ? htmlspecialchars($_GET['size']) : $listSize;
$start = isset($_GET['start']) ? htmlspecialchars($_GET['start']) : 0;
$end = $start + $size;
$len = count($files);

for ($i = min($end, $len) - 1, $list = array(); $i < $len && $i >= 0 && $i >= $start; $i--) {
    $list[] = $files[$i];
}
//倒序
/*for ($i = $end, $list = array(); $i < $len && $i < $end; $i++){
    $list[] = $list[$i];
}*/
/* 返回数据 */
$result = json_encode(array(
    "state" => "SUCCESS",
    "list" => $list,
    "start" => $start,
    "total" => count($list)
));
return $result;