const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

const sassSrc = 'assets/scss/**/*.scss';
const cssDest = 'assets/css';

gulp.task('scss', function (done) {
  gulp.src(sassSrc)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', function(err){
      log.error(err.message);
    }))
    .pipe(postcss([autoprefixer, cssnano]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(cssDest))
    .on('end', done);
});

gulp.task('watch', gulp.series('scss', function (done) {
  gulp.watch(sassSrc, gulp.parallel('scss'));
  done();
}));

gulp.task('default', gulp.series('watch', function () {}));