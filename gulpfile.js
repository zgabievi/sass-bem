const gulp = require('gulp');
const sassdoc = require('sassdoc');
const mocha = require('gulp-mocha');

gulp.task('default', () =>
	gulp.src('./test/test_sass.js')
		.pipe(mocha())
		.once('error', () => {
			process.exit(1);
		})
		.once('end', () => {
			process.exit();
		})
);

gulp.task('sassdoc', () => {
	return gulp.src(['_config.scss', '_bem.scss', './mixins/**.scss', './helpers/**.scss', './functions/*.scss'])
		.pipe(sassdoc({
			dest: 'gh-pages',
			verbose: true,
			display: {
				access: ['public', 'private'],
				alias: true,
				watermark: true,
			},
			groups: {
				'undefined': 'sass-bem'
			},
			basePath: 'http://zgabievi.me/sass-bem/',
		}))
});
