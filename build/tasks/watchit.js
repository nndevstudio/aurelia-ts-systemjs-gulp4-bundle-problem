const { src, dest, watch, series } = require('gulp');
var paths = require('../paths');

const serveModule = require('./serve');
const buildModule = require('./build');

//const bs = require('browser-sync');
//function reload(done) {
//  bs.reload();
//  done();
//}
//reload.displayName = "BrowserSync - reload";

//function watchit() {  
//  watch(paths.source, series(buildModule.buildSystem, reload));
//  watch(paths.html, series(buildModule.buildHtml, reload));
//  watch(paths.style, series(buildModule.buildStyles, reload));
//}
//watchit.displayName = "Watch it";
//watchit.description = "Custom WATCH function";

//exports.default = exports.watchit = series(serveModule.default, watchit);

//---No BSync
function watchit() {  
  src('node_modules/oidc-client/lib/oidc-client.js')
    .pipe(dest('dist/'));
  watch(paths.source, series(buildModule.buildSystem));
  watch(paths.html, series(buildModule.buildHtml));
  watch(paths.style, series(buildModule.buildStyles));
}
watchit.displayName = "Watch it";
watchit.description = "Custom WATCH function";
exports.default = exports.watchit = series(serveModule.default, watchit);








