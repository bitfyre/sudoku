var browserSync = require('browser-sync');
var gulp = require('gulp');
var jade = require('gulp-jade');
var notify = require('gulp-notify');
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
    .pipe(gulp.dest(path.join(__dirname, 'build')))
    .pipe(notify({
      message: 'HTML built'
    }))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: path.join(__dirname, 'build')
    },
    host: 'localhost',
    port: 1337,
    open: false
  });
});

gulp.task('watch',
  [
    'html',
    'browser-sync'
  ],
  function() {
    gulp.watch(path.join(__dirname, 'src/**/*.jade'), ['html']);
});
