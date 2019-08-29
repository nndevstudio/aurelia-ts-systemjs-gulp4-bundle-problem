const watchItModule = require('./build/tasks/watchit');
const exportReleaseModule = require('./build/tasks/export-release');
const { task, series, parallel} = require('gulp');

//const bs = require('browser-sync').create();
//function browserSync() {
//  bs.init({
//    server: {
//      baseDir: './dist/'
//    }
//  });
//}

//exports.default = exports.watchit = parallel(browserSync, watchItModule.default);
//exports.export = series(exportReleaseModule.default);


//////------------------------------------------------------------------------
//const bundleModule = require('./build/tasks/bundle');
//exports.bundle = series(bundleModule.default);

//////------------------------------------------------------------------------
////const cleanModule = require('./build/tasks/clean');
////exports.clean = series(cleanModule.default);
//////------------------------------------------------------------------------
//const buildModule = require('./build/tasks/build');
//exports.build = series(buildModule.default);
//exports.buildSystem = series(buildModule.buildSystem);


//---No BSync
exports.default = exports.watchit = series(watchItModule.default);
exports.export = series(exportReleaseModule.default);



