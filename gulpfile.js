var  gulp    = require('gulp'),
_            = require('underscore'),
header       = require('gulp-header'),
footer       = require('gulp-footer'),
concat       = require('gulp-concat'),
uglify       = require('gulp-uglify'),
less         = require('gulp-less'),
csso         = require('gulp-csso'),
rename       = require('gulp-rename'),
clean        = require('gulp-clean'),
autoprefixer = require('gulp-autoprefixer'),
sourcemaps   = require('gulp-sourcemaps'),
spritesmith  = require('gulp.spritesmith'),
merge        = require('merge-stream'),
moment       = require('moment');

var package = require('./package.json');
var fs      = require('fs');
var path    = require('path');

var PATH = {
  src : path.join(__dirname,'src'),
  dest : path.join(__dirname,'dist'),
  backup: path.join(__dirname,'backup'),
}

var baseUrl       = "//static.yaozh.com/js";
var version      = "1.4.19";
//所有需要合并的模块配置
var concatConfig = ["/js/lib","/js/module","/js/plugin"];
//所有需要复制的文件配置
var copyConfig   = ["/fonts","/thirdparty","/images","/test","/data"];
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

gulp.task('script',function(){
  var otherFiles = [PATH.src+'/js/**/*.js'];
  appJsConfig.forEach(function(file){
    otherFiles.push("!"+file);
  });
  //处理app.js
  gulp.src(appJsConfig)
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(footer(initRequireConfig({pro:true})))
    .pipe(uglify({compress:{drop_console:true}}))
    .pipe(sourcemaps.write('../sourcemaps'))
    .pipe(gulp.dest(PATH.dest+'/js'));

  //处理合并
  concatConfig.forEach(function(file){
    var files = PATH.src+file+'/**/*.js';
    var fileName = file.match('.*(?=$|\/$)')[0];
    otherFiles.push("!"+files);

    gulp.src([files])
      .pipe(sourcemaps.init())
      .pipe(uglify({compress:{drop_console:true}}))
      .pipe(concat(fileName+'.js'))
      .pipe(sourcemaps.write('./sourcemaps'))
      .pipe(gulp.dest(PATH.dest));
  });

  //处理其它脚本
  return gulp.src(otherFiles)
    .pipe(uglify({compress:{drop_console:true}}))
    .pipe(gulp.dest(PATH.dest+'/js'));
});

gulp.task('copy',function(){
  copyConfig.forEach(function(item){
    gulp.src(PATH.src+item+'/**')
      .pipe(gulp.dest(PATH.dest+item));
  });
});

gulp.task('css',['less'],function(){
  return gulp.src(PATH.src+'/css/**/*.css')
    .pipe(csso())
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
    .pipe(gulp.dest(PATH.src+'/js'));
});

gulp.task('watch',function(){
  //build src app.js
  gulp.watch([PATH.src+'/js/config.js',PATH.src+'/js/path.json'],['app']);
  //build src less
  gulp.watch([PATH.src+'/less/**/*.less'],['less']);
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
      '  urlArgs: "yaozhVersion="+(config ? config.version : "<%= version %>")<% if(!pro){ %>+"&data="+new Date().getTime()<% } %>,',
      '  waitSeconds: <%= waitSeconds %>',
    '})'
  ].join('\n'));

  return _temp(opt);
}
