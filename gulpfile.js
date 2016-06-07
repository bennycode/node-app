var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var Server = require('karma').Server;

gulp.task('build-browser', function () {
  return browserify('./src/calc-browser-main.js')
    .bundle()
    .pipe(source('calc-browserified-main.js'))
    .pipe(gulp.dest('./public/build/'));
});

gulp.task('test', ['build-browser'], function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});
