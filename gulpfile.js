var browserSync = require('browser-sync');
var gulp = require('gulp');
var path = require('path');

gulp.task('html', function(){
  gulp.src(path.join(__dirname, 'src/**/*.html'))
    .pipe(gulp.dest(path.join(__dirname, 'build')));
});
