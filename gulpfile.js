var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./lib/modules/apostrophe-assets/public/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./lib/modules/apostrophe-assets/public/css/'));
});

// RUN : $ gulp sass:watch
gulp.task('sass:watch', function () {
  gulp.watch('./lib/modules/apostrophe-assets/public/sass/**/*.scss', (done) => {
      return gulp.series(['sass'])(done);
  });
});

gulp.task('default', gulp.series(['sass:watch']));
