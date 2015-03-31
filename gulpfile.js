var  gulp       = require('gulp'),
     _          = require('underscore'),
     header     = require('gulp-header'),
     footer     = require('gulp-footer'),
     concat     = require('gulp-concat'),
     uglify     = require('gulp-uglify'),
     less       = require('gulp-less'),
     cssmin     = require('gulp-cssmin'),
     rename     = require('gulp-rename'),
     clean      = require('gulp-clean'),
     sourcemaps = require('gulp-sourcemaps'),
     moment     = require('moment');

var package = require('./package.json');
var fs = require('fs');
var path    = require('path');

var src  = './src',   
    dest = './dist';

//所有需要合并的模块配置
var concatConfig = {
  "lib" : "lib/**/*.js",
  "module" : "module/**/*.js",
  "app" : "+(require|config).js"
}
//includes下的less不进行编译
var lessFile   = [src+'/less/**/*.less','!'+src+'/less/includes/**/*'];

var banner = [
    '/* build : <%= package.author %> '+moment().format('YYYY-MM-DD HH:mm:ss')+' */\n'
  ].join('');

function getPath(pro){
  var paths = JSON.parse(fs.readFileSync(src+'/js/path.json'));
  if(!!pro){
    paths = _.mapObject(paths,function(v,k){
      //查找第一级目录
      var dir = v.match(/^[^\/]+(?=\/|$)/)[0];
      if(dir in concatConfig){
        return dir;
      }
      return v;
    });
  }
  return paths; 
}

gulp.task('clean',function(){
  return gulp.src(dest,{read:false}).pipe(clean());
});

gulp.task('script',['clean'],function(){
  var otherFiles = [src+'/js/**/*.js']
  //处理合并
  _.mapObject(concatConfig,function(files,file){
    files = src+'/js/'+files
    otherFiles.push("!"+files);

    if(file == "app"){
      gulp.src([src+'/js/require.js',src+'/js/config.js'])
        .pipe(concat('app.js'))
        .pipe(footer('\nrequire.config({paths:<%=JSON.stringify(paths)%>})',{paths:getPath(true)}))
        .pipe(uglify())
        .pipe(header(banner,{package:package}))
        .pipe(gulp.dest(dest+'/js'));
    }else{
      gulp.src(files)
        .pipe(uglify())
        .pipe(concat(file+'.js'))
        .pipe(header(banner,{package:package}))
        .pipe(gulp.dest(dest+'/js'));
    }
  });
  //处理其它脚本
  gulp.src(otherFiles)
    .pipe(uglify())
    .pipe(header(banner,{package:package}))
    .pipe(gulp.dest(dest+'/js'));
});

gulp.task('copy',['clean'],function(){
    gulp.src(src+'/fonts/**')
    .pipe(gulp.dest(dest+'/fonts'));

  return gulp.src(src+'/images/**')
    .pipe(gulp.dest(dest+'/images'));
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
    .pipe(gulp.dest(src+'/css'));
});

gulp.task('config',function(){
  return gulp.src([src+'/js/require.js',src+'/js/config.js'])
    .pipe(concat('app.js'))
    .pipe(footer('\nrequire.config({paths:<%=JSON.stringify(paths)%>})',{paths:getPath()}))
    .pipe(header(banner,{package:package}))
    .pipe(gulp.dest(src+'/js'));
});

gulp.task('watch',function(){
  //build src app.js
  gulp.watch([src+'/js/config.js',src+'/js/path.json'],['config']);
  //build src less
  gulp.watch([src+'/less/**/*.less'],['less']);
});

gulp.task('default',['script','css','copy']);
