const gulp = require('gulp');

// Sass, Html & Js
const gulpif = require('gulp-if');
const rename = require('gulp-rename');

// Sass
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const jmq = require('gulp-join-media-queries');
const uglifycss = require('gulp-uglifycss');

// js
const uglify = require('gulp-uglify');
const include = require('gulp-include');

// Html
const file_include = require('gulp-file-include');

// Task Obj Declarations
const DOCS = {
	sass: {
		src: 'docs/_sass/*.scss',
		watch: ['docs/_sass/*.scss', 'docs/_sass/**/*.scss', 'docs/_sass/**/**/*.scss'],
		dest: {
			dev: 'docs/css/',
			prod: null
		},
		taskName: {
			dev: 'build-docs-sass--development',
			prod: null
		}
	},
	js: {
		src: 'docs/_js/*.js',
		watch: ['docs/_js/*.js', 'docs/_js/**/*.js', 'docs/_js/**/**/*.js'],
		dest: {
			dev: 'docs/js/',
			prod: null
		},
		taskName: {
			dev: 'build-docs-js--development',
			prod: null
		}
	}
};

const OCMP = {
	html: {
		src: 'src/html/*.html',
		watch: ['src/html/*.html', 'src/html/**/*.html', 'src/html/**/**/*.html'],
		dest: {
			dev: 'docs/_includes/ocmp/',
			prod: 'dist/ocmp/src/html/'
		},
		taskName: {
			dev: 'build-src-html--development',
			prod: 'build-src-html--production'
		}
	},
	sass: {
		src: 'src/sass/*.scss',
		watch: ['src/sass/*.scss', 'src/sass/**/*.scss', 'src/sass/**/**/*.scss'],
		dest: {
			dev: DOCS.sass.dest.dev,
			prod: 'dist/ocmp/src/css/'
		},
		taskName: {
			dev: 'build-src-sass--development',
			prod: 'build-src-sass--production'
		}
	},
	js: {
		src: 'src/js/*.js',
		watch: ['src/js/*.js', 'src/js/**/*.js', 'src/js/**/**/*.js'],
		dest: {
			dev: DOCS.js.dest.dev,
			prod: 'dist/ocmp/src/js/'
		},
		taskName: {
			dev: 'build-src-js--development',
			prod: 'build-src-js--production'
		}
	}
}

// Docs development
// build-docs-sass--development
gulp.task(DOCS.sass.taskName.dev, async function () {
	buildCSS(DOCS.sass.src, DOCS.sass.dest.dev, 'Development');
});

// build-docs-js--development
gulp.task(DOCS.js.taskName.dev, async function () {
	buildJS(DOCS.js.src, DOCS.js.dest.dev, 'Development');
});


// OCMP development
// build-src-html--development
gulp.task(OCMP.html.taskName.dev, async function () {
	buildHtml(OCMP.html.src, OCMP.html.dest.dev, 'Development');
});

// build-src-sass--development
gulp.task(OCMP.sass.taskName.dev, async function () {
	buildCSS(OCMP.sass.src, OCMP.sass.dest.dev, 'Development');
});

// build-src-js--development
gulp.task(OCMP.js.taskName.dev, async function () {
	buildJS(OCMP.js.src, OCMP.js.dest.dev, 'Development');
});


// Watch Tasks
gulp.task('watch', async function () {
	// watch Docs Css / JS
	gulp.watch(DOCS.sass.watch, gulp.series(DOCS.sass.taskName.dev));
	gulp.watch(DOCS.js.watch, gulp.series(DOCS.js.taskName.dev));

	// Watch OCMP Html / css / JS
	gulp.watch(OCMP.html.watch, gulp.series(OCMP.html.taskName.dev));
	gulp.watch(OCMP.sass.watch, gulp.series(OCMP.sass.taskName.dev));
	gulp.watch(OCMP.js.watch, gulp.series(OCMP.js.taskName.dev));
});

// Export Functions
exports.BuildDocsSrc = gulp.parallel(
	DOCS.sass.taskName.dev,
	DOCS.js.taskName.dev,
	OCMP.html.taskName.dev,
	OCMP.sass.taskName.dev,
	OCMP.js.taskName.dev
);


// Main Functions
function buildHtml(src, dest, env) {
	gulp
		.src(src)
		.pipe(
			file_include({
				prefix: '@@',
				basepath: '@file',
				indent: true
			})
		)
		.pipe(gulpif(env === 'Development', rename( { basename: "template" } )))
		.pipe(gulp.dest(dest));
}

function buildCSS(src, dest, env) {
	gulp
		.src(src)
		.pipe(sass({ outputStyle: 'expanded', errLogToConsole: true }).on('error', sass.logError))
		.pipe(jmq())
		.pipe(autoprefixer('last 2 versions'))
		.pipe(gulpif(env === 'Production', uglifycss()))
		.pipe(gulpif(env === 'Production', rename({ suffix: '.min' })))
		.pipe(gulp.dest(dest));
}

function buildJS(src, dest, env) {
	gulp
		.src(src)
		.pipe(include())
		.pipe(gulpif(env === 'Production', uglify()))
		.pipe(gulpif(env === 'Production', rename({ suffix: '.min' })))
		.pipe(gulp.dest(dest));
}

