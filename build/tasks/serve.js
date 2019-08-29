const { series } = require('gulp');
var browserSync = require('browser-sync');

const bundleModule = require('./bundle');
const exportModule = require('./export-release');
const buildModule = require('./build');

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
function serve(done) {
  browserSync({
    online: false,
    open: false,
    port: 9000,
    server: {
      baseDir: ['.'],
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done());
}
serve.displayName = "Serve";
serve.description = "Custom SERVE function";

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
function serveBundle(done) {
  browserSync({
    online: false,
    open: false,
    port: 9000,
    server: {
      baseDir: ['.'],
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done());
}
serveBundle.displayName = "Serve bundle";
serveBundle.description = "Custom SERVE BUNDLE function";

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
function serveExport(done) {
  browserSync({
    online: false,
    open: false,
    port: 9000,
    server: {
      baseDir: ['./export'],
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done());
}
serveExport.displayName = "Serve export";
serveExport.description = "Custom SERVE EXPORT function";

exports.serveBundle = series(bundleModule.default, serveBundle);
exports.serveExport = series(exportModule.default, serveExport);

exports.default = exports.serve = series(buildModule.default, serve);
