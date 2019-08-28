const { series} = require('gulp');
var paths = require('../paths');
var changelog = require('conventional-changelog');
var fs = require('fs');
var bump = require('gulp-bump');
var args = require('../args');

const lintModule = require('./lint');
const buildModule = require('./build');

// utilizes the bump plugin to bump the
// semver for the repo
function bumpVersion () {
  return gulp.src(['./package.json'])
    .pipe(bump({ type: args.bump })) //major|minor|patch|prerelease
    .pipe(gulp.dest('./'));
}
// generates the CHANGELOG.md file based on commit
// from git commit messages
function changeLog() {
  var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

  return changelog({
    repository: pkg.repository.url,
    version: pkg.version,
    file: paths.doc + '/CHANGELOG.md'
  }, function (err, log) {
    fs.writeFileSync(paths.doc + '/CHANGELOG.md', log);
  });
}

exports.default = series(buildModule.default, lintModule.default, renameOidcClient, bumpVersion, changeLog);



