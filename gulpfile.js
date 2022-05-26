const { src, watch } = require('gulp');
const _sassdoc = require('sassdoc');
const mocha = require('gulp-mocha');

function test(done) {
  src('./test/test_sass.js')
    .pipe(mocha())
    .once('error', () => {
      process.exit(1);
    })
    .once('end', () => {
      process.exit();
    });
  done();
}

function sassdoc(done) {
  src([
    '_config.scss',
    '_bem.scss',
    './mixins/**.scss',
    './helpers/**.scss',
    './functions/*.scss'
  ]).pipe(
    _sassdoc({
      dest: 'gh-pages',
      verbose: true,
      display: {
        access: ['public', 'private'],
        alias: true,
        watermark: true
      },
      groups: {
        undefined: 'sass-bem'
      },
      basePath: 'http://zgabievi.me/sass-bem/'
    })
  );
	done();
}

exports.sassdoc = sassdoc;
exports.test = test;
exports.default = function () {
  watch('./src/**/*.scss', test);
}
