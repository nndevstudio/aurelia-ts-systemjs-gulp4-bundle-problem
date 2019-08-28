const { src,  series } = require('gulp');
var paths = require('../paths');
var tslint = require('gulp-tslint');

//gulp.task('lint', gulp.series(function () {
//    return gulp.src(paths.source)
//      .pipe(tslint({
//          emitError: false
//      }))
//      .pipe(tslint.report());
//}));

function lint () {
  return src(paths.source)
    .pipe(tslint({
      emitError: false
    }))
    .pipe(tslint.report());
}
lint.displayName = "Lint";
lint.description = "Custom LINT function";

exports.default = series(lint);
