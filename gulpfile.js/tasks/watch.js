var config      = require('../config.json')
var gulp        = require('gulp')
var browserSync = require('browser-sync')
var watch       = require('gulp-watch')

var watchTask = function(){
  gulp.watch(config.css.src, ['css']),
  gulp.watch(config.watch.src, function() {
    browserSync.reload();
  })
}

gulp.task('watch',['browserSync'], watchTask)
