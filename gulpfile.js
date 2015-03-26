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

var src,dest;

    src        = new String('./src/'),
    src.script = src+'js/',
    src.css    = src+'css/';
    src.less = src+'less/';
    
    dest       = new String('./dist/'),
    dest.script = dest+'js/',
    dest.css    = dest+'css/';
    dest.less = dest+'less/';

var concatDir  = ['lib','module'];
var uglifyFile = [src.script+'**/*.js','!'+src.script+'+(config|require).js'];
var lessFile   = [src.less+'**/*.less','!'+src.less+'includes/**/*'];

var banner = [
    '/* build : <%= package.author %> '+moment().format('YYYY-MM-DD HH:mm:ss')+' */\n'
  ].join('');

gulp.task('clean',function(){
  del([dest.script]);
});

gulp.task('uglify',function(){
  gulp.src(uglifyFile)
  .pipe(uglify())
  .pipe(header(banner,{package:package}))
  .pipe(gulp.dest(dest.script));
});

gulp.task('concat',['uglify'],function(){
  concatDir.forEach(function(dirname){
    gulp.src(dest.script+dirname+'/**/*.js')
      .pipe(concat(dirname+'.js'))
      .pipe(clean({force:true}))
      .pipe(gulp.dest(dest.script));
  });

});
gulp.task('copy',function(){
  gulp.src(src+'fonts/**/*')
    .pipe(gulp.dest(dest+'fonts'));
});

gulp.task('less',function(){
  return gulp.src(lessFile)
    .pipe(less())
    .pipe(gulp.dest(src.css));
});

gulp.task('cssmin',function(){
  gulp.src(src.css+'**/*.css')
    .pipe(cssmin({compatibility:'ie7'}))
    .pipe(header(banner,{package:package}))
    .pipe(gulp.dest(dest.css))
});

gulp.task('initApp',function(){

  var paths   = JSON.parse(fs.readFileSync('./src/js/path.json'));
  _paths = _.mapObject(paths,function(v,k){
    //查找第一级目录
    var dir = v.match(/^[^\/]+(?=\/|$)/)[0];
    if(concatDir.indexOf(dir)!=-1){
      return dir;
    }
    return v;
  });
  
  gulp.src([src.script+'require.js',src.script+'config.js'])
    .pipe(concat('app.js'))
    .pipe(footer('\nrequire.config({paths:<%=JSON.stringify(paths)%>})',{paths:paths}))
    .pipe(gulp.dest(src.script));

  gulp.src([src.script+'require.js',src.script+'config.js'])
    .pipe(concat('app.js'))
    .pipe(footer('\nrequire.config({paths:<%=JSON.stringify(paths)%>})',{paths:_paths}))
    .pipe(uglify())
    .pipe(header(banner,{package:package}))
    .pipe(gulp.dest(dest.script));
});

gulp.task('watch',function(){
  gulp.watch([src.script+'config.js',src.script+'path.json'],['initApp']);
  gulp.watch([src.less+'**/*.less'],['less']);
});

gulp.task('default',['initApp','concat','cssmin','copy']);
