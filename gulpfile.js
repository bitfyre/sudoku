var browserSync = require('browser-sync');
var gulp = require('gulp');
var jade = require('gulp-jade');
var path = require('path');
var rename = require('gulp-rename');

gulp.task('html', function(){
  gulp.src(path.join(__dirname, 'src/**/*.html.jade'))
    .pipe(rename({
      // Strips .jade extension leaving .html
      extname: ''
    }))
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(path.join(__dirname, 'build')));
});
