var  gulp    = require('gulp'),
_            = require('underscore'),
header       = require('gulp-header'),
footer       = require('gulp-footer'),
concat       = require('gulp-concat'),
uglify       = require('gulp-uglify'),
less         = require('gulp-less'),
cssmin       = require('gulp-cssmin'),
rename       = require('gulp-rename'),
clean        = require('gulp-clean'),
autoprefixer = require('gulp-autoprefixer'),
sourcemaps   = require('gulp-sourcemaps'),
moment       = require('moment');

var package = require('./package.json');
var fs      = require('fs');
var path    = require('path');

var src     = './src',   
dest        = './dist';

/* 
  devbaseUrl http://192.168.1.251/static/src/js || http://192.168.1.251/static/dist/js
  probaseUrl http://static.yaozh.com/js
*/
var devbaseUrl   = "http://static.yaozh.com/js",
probaseUrl       = "http://static.yaozh.com/js";
var version      = "1.3.6";
//所有需要合并的模块配置
var concatConfig = ["/js/lib","/js/module","/js/plugin"];
//所有需要复制的文件配置
var copyConfig   = ["/fonts","/thirdparty","/images","/test"];
//构建app.js需要的模块
var appJsConfig  = [src+'/js/require.js',src+'/js/config.js'];

//includes下的less不进行编译
var lessFile   = [src+'/less/**/*.less','!'+src+'/less/includes/**/*'];

var banner = [
    '/* build : <%= package.author %> '+moment().format('YYYY-MM-DD HH:mm:ss')+' */\n'
  ].join('');


gulp.task('clean',function(){
  return gulp.src(dest,{read:false}).pipe(clean());
});

gulp.task('script',['clean'],function(){
  console.log('注意：任务返回的时间为异步执行时间，不是任务执行时间');
  var otherFiles = [src+'/js/**/*.js'];
  appJsConfig.forEach(function(file){
    otherFiles.push("!"+file);
  });

  //处理app.js
  gulp.src(appJsConfig)
    .pipe(concat('app.js'))
    .pipe(footer(initRequireConfig({pro:true})))
    .pipe(uglify())
    .pipe(header(banner,{package:package}))
    .pipe(gulp.dest(dest+'/js'));

  //处理合并
  concatConfig.forEach(function(file){
    var files = src+file+'/**/*.js';
    var fileName = file.match('.*(?=$|\/$)')[0];
    otherFiles.push("!"+files);

    gulp.src([files])
      .pipe(uglify())
      .pipe(concat(fileName+'.js'))
      .pipe(header(banner,{package:package}))
      .pipe(gulp.dest(dest));
  });

  //处理其它脚本
  gulp.src(otherFiles)
    .pipe(uglify())
    .pipe(header(banner,{package:package}))
    .pipe(gulp.dest(dest+'/js'));

});

gulp.task('copy',['clean'],function(){
  copyConfig.forEach(function(item){
    gulp.src(src+item+'/**')
      .pipe(gulp.dest(dest+item));
  });
});

gulp.task('css',['clean'],function(){
  return gulp.src(src+'/css/**/*.css')
    .pipe(cssmin({compatibility:'ie7'}))
    .pipe(header(banner,{package:package}))
    .pipe(gulp.dest(dest+'/css'))
});

gulp.task('less',function(){
  return gulp.src(lessFile)
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 versions','ie 6','ie 7'],
      cascade: false
    }))
    .pipe(gulp.dest(src+'/css'));
});

gulp.task('app',function(){
  return gulp.src(appJsConfig)
    .pipe(concat('app.js'))
    .pipe(footer(initRequireConfig()))
    .pipe(header(banner,{package:package}))
    .pipe(gulp.dest(src+'/js'));
});

gulp.task('watch',function(){
  //build src app.js
  gulp.watch([src+'/js/config.js',src+'/js/path.json'],['app']);
  //build src less
  gulp.watch([src+'/less/**/*.less'],['less']);
});

gulp.task('default',['script','css','copy']);


/**
 * 工具函数
 */
function getPath(pro){
  var paths = JSON.parse(fs.readFileSync(src+'/js/path.json'));
  if(!!pro){
    paths = _.mapObject(paths,function(v,k){
      //查找父级目录
      var dir = v.match(/^.*(?=\/)/);
      
      if(dir && concatConfig.indexOf('/js/'+dir[0]) != -1){
        return dir[0];
      }
      return v;
    });
  }
  return paths; 
}
function initRequireConfig(opt){
  
  opt = opt || {};
  var baseUrl = devbaseUrl;
  if(opt.pro) baseUrl = probaseUrl;
  opt = _.extend({
    pro: false,
    waitSeconds : 10,
    baseUrl: baseUrl,
    version: version
  },opt);
  opt.paths = JSON.stringify(getPath(opt.pro),null,4).replace(/(\})$/,'  $1');

  var _temp = _.template(['',
    'require.config({',
      '  baseUrl: "<%= baseUrl %>",',
      '  paths: <%= paths %>,',
      '  urlArgs: "yaozhVersion=<%= version %>"<% if(!pro){ %>+"&data="+new Date().getTime()<% } %>,',
      '  waitSeconds: <%= waitSeconds %>',
    '})'
  ].join('\n'));

  return _temp(opt);
}
