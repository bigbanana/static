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

var PATH = {
  src : path.join(__dirname,'src'),
  dest : path.join(__dirname,'dist'),
  backup: path.join(__dirname,'backup'),
  database : path.join(__dirname,'../database'),
  news: path.join(__dirname,'../newnews.yaozh.com'),
  star: path.join(__dirname,'../star_project')
}
PATH.databaseLess = [PATH.database+'/Public/less/**/*.less','!'+PATH.database+'/Public/less/includes/**/*'];
PATH.newsLess = [PATH.news+'/static/less/**/*.less','!'+PATH.news+'/static/less/includes/**/*'];
PATH.starLess = [PATH.star+'/static/less/**/*.less','!'+PATH.star+'/static/less/includes/**/*'];

var baseUrl       = "http://static.yaozh.com/js";
var version      = "1.4.12";
//所有需要合并的模块配置
var concatConfig = ["/js/lib","/js/module","/js/plugin"];
//所有需要复制的文件配置
var copyConfig   = ["/fonts","/thirdparty","/images","/test"];
//构建app.js需要的模块
var appJsConfig  = [PATH.src+'/js/require.js',PATH.src+'/js/config.js'];

//includes下的less不进行编译
var lessFile   = [PATH.src+'/less/**/*.less','!'+PATH.src+'/less/includes/**/*'];

//autoprefixer配置
var autoprefixerConfig = {
    browsers: ['last 2 versions','ie 6','ie 7'],
    cascade: false
  }


var banner = [
    '/* build : <%= package.author %> '+moment().format('YYYY-MM-DDHH:mm:ss')+' */\n'
  ].join('');

gulp.task('clean',function(){
  //return gulp.src(PATH.backup,{read:false}).pipe(clean());
});
gulp.task('backup',['clean'],function(done){
  return gulp.src(PATH.dest+'/**').pipe(gulp.dest(PATH.backup+'_'+moment().format('YYYY-MM-DD_HH_mm_ss')));
});

gulp.task('script',['backup'],function(){
  var otherFiles = [PATH.src+'/js/**/*.js'];
  appJsConfig.forEach(function(file){
    otherFiles.push("!"+file);
  });
  //处理app.js
  gulp.src(appJsConfig)
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(footer(initRequireConfig({pro:true})))
    .pipe(uglify({drop_console:true}))
    .pipe(header(banner,{package:package}))
    .pipe(sourcemaps.write('../sourcemaps'))
    .pipe(gulp.dest(PATH.dest+'/js'));

  //处理合并
  concatConfig.forEach(function(file){
    var files = PATH.src+file+'/**/*.js';
    var fileName = file.match('.*(?=$|\/$)')[0];
    otherFiles.push("!"+files);

    gulp.src([files])
      .pipe(sourcemaps.init())
      .pipe(uglify({drop_console:true}))
      .pipe(concat(fileName+'.js'))
      .pipe(header(banner,{package:package}))
      .pipe(sourcemaps.write('./sourcemaps'))
      .pipe(gulp.dest(PATH.dest));
  });

  //处理其它脚本
  return gulp.src(otherFiles)
    .pipe(uglify({drop_console:true}))
    .pipe(header(banner,{package:package}))
    .pipe(gulp.dest(PATH.dest+'/js'));
});

gulp.task('copy',['backup'],function(){
  copyConfig.forEach(function(item){
    gulp.src(PATH.src+item+'/**')
      .pipe(gulp.dest(PATH.dest+item));
  });
});

gulp.task('css',['backup','less'],function(){
  return gulp.src(PATH.src+'/css/**/*.css')
    .pipe(cssmin({compatibility:'ie7'}))
    .pipe(header(banner,{package:package}))
    .pipe(gulp.dest(PATH.dest+'/css'))
});

gulp.task('less',function(){
  return gulp.src(lessFile)
    .pipe(less())
    .pipe(autoprefixer(autoprefixerConfig))
    .pipe(gulp.dest(PATH.src+'/css'));
});

gulp.task('app',function(){
  return gulp.src(appJsConfig)
    .pipe(concat('app.js'))
    .pipe(footer(initRequireConfig()))
    .pipe(header(banner,{package:package}))
    .pipe(gulp.dest(PATH.src+'/js'));
});

gulp.task('database-less',function(){
  return gulp.src(PATH.databaseLess)
    .pipe(less({
      paths: [ path.join(__dirname,'../') ]
    }))
    .pipe(autoprefixer(autoprefixerConfig))
    .pipe(gulp.dest(path.join(PATH.database,'Public','css')));
});

gulp.task('news-less',function(){
  return gulp.src(PATH.newsLess)
    .pipe(less({
      paths: [ path.join(__dirname,'../') ]
    }))
    .pipe(autoprefixer(autoprefixerConfig))
    .pipe(gulp.dest(path.join(PATH.news,'static','css')));
});

gulp.task('star-less',function(){
  return gulp.src(PATH.starLess)
    .pipe(less({
      paths: [ path.join(__dirname,'../') ]
    }))
    .pipe(autoprefixer(autoprefixerConfig))
    .pipe(gulp.dest(path.join(PATH.star,'static','css')));
});

gulp.task('watch',function(){
  //build src app.js
  gulp.watch([PATH.src+'/js/config.js',PATH.src+'/js/path.json'],['app']);
  //build src less
  gulp.watch([PATH.src+'/less/**/*.less'],['less']);
  //build database
  gulp.watch([PATH.databaseLess[0]],['database-less']);
  //build news
  gulp.watch([PATH.newsLess[0]],['news-less']);
  //build star
  gulp.watch([PATH.starLess[0]],['star-less']);
});

gulp.task('default',['script','css','copy']);


/**
 * 工具函数
 */
function getPath(pro){
  var paths = JSON.parse(fs.readFileSync(PATH.src+'/js/path.json'));
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

  opt = _.extend({
    pro: false,
    waitSeconds : 100,
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
