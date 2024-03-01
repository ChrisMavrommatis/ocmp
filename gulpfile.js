const gulp = require('gulp');

// Common
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

// Html, tpl
const file_include = require('gulp-file-include');

// Packaging
const zip = require('gulp-zip');
const tar = require('gulp-tar');
const gzip = require('gulp-gzip');

// Maintance
const clean = require('gulp-clean');

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
	},
	gtm_template: {
		src: 'src/gtm_template/*.tpl',
		watch: ['src/gtm_template/*', 'src/gtm_template/**/*', 'src/gtm_template/**/**/*'],
		dest: {
			dev: null,
			prod: 'dist/ocmp/gtm/'
		},
		taskName: {
			dev: null,
			prod: 'build-src-gtm_template--production'
		}
	},
	gtm_html: {
		src: 'src/gtm_html/*.html',
		watch: ['src/gtm_html/*.html', 'src/gtm_html/**/*.html', 'src/gtm_html/**/**/*.html'],
		basepath: 'dist/ocmp',
		dest: {
			dev: null,
			prod: 'dist/ocmp/gtm/'
		},
		taskName: {
			dev: null,
			prod: 'build-src-gtm_html--production'
		}
	},
	data: {
		src: 'src/data/**',
		watch: ['src/data/**'],
		dest: {
			dev: null,
			prod: 'dist/ocmp/src/data/'
		},
		taskName: {
			dev: null,
			prod: 'build-src-data--production'
		}
	}
};

const PACKAGE = {
	version: '1.1.0',
	ocmp_src: {
		taskName: 'package-ocmp-src',
		src: ['dist/ocmp/src/**'],
		dest: 'dist/packages',
		filename: 'ocmp_source'
	},
	ocmp_gtm: {
		taskName: 'package-ocmp-gtm',
		src: ['dist/ocmp/gtm/**'],
		dest: 'dist/packages',
		filename: 'ocmp_gtm'
	}
};

const CLEAN ={
	docs :{
		taskName: "clean-docs",
		src: ['docs/css/*', 'docs/js/*']
	},
	jekyll: {
		taskName: "clean-jekyll",
		src: ['.dev']
	},
	ocmp: {
		taskName: "clean-ocmp",
		src: ['dist/ocmp']
	},
	packages:{
		taskName: "clean-packages",
		src: ['dist/packages']
	}
};

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

// OCMP Production
// build-src-html--production
gulp.task(OCMP.html.taskName.prod, async function () {
	buildHtml(OCMP.html.src, OCMP.html.dest.prod, 'Production');
});

// build-src-sass--production
gulp.task(OCMP.sass.taskName.prod, async function () {
	buildCSS(OCMP.sass.src, OCMP.sass.dest.prod, 'Production');
	buildCSS(OCMP.sass.src, OCMP.sass.dest.prod, 'Development');
});

// build-src-js--production
gulp.task(OCMP.js.taskName.prod, async function () {
	buildJS(OCMP.js.src, OCMP.js.dest.prod, 'Production');
	buildJS(OCMP.js.src, OCMP.js.dest.prod, 'Development');
});

// build-src-gtm_template--production
gulp.task(OCMP.gtm_template.taskName.prod, async function () {
	fileInclude(OCMP.gtm_template.src, OCMP.gtm_template.dest.prod, 'Production');
});

// build-src-gtm_html--production
gulp.task(OCMP.gtm_html.taskName.prod, async function () {
	fileInclude(OCMP.gtm_html.src, OCMP.gtm_html.dest.prod, 'Production', OCMP.gtm_html.basepath);
});

// build-src-data--production
gulp.task(OCMP.data.taskName.prod, async function () {
	copy(OCMP.data.src, OCMP.data.dest.prod, 'Production');
});

// OCMP Packaging
// package-ocmp-src
gulp.task(PACKAGE.ocmp_src.taskName, async function () {
	package(PACKAGE.ocmp_src.src, PACKAGE.ocmp_src.dest, PACKAGE.ocmp_src.filename, PACKAGE.version);
});

// package-ocmp-gtm
gulp.task(PACKAGE.ocmp_gtm.taskName, async function () {
	package(PACKAGE.ocmp_gtm.src, PACKAGE.ocmp_gtm.dest, PACKAGE.ocmp_gtm.filename, PACKAGE.version);
});


// Maintenance
// clean-docs
gulp.task(CLEAN.docs.taskName, async function () {
	cleanFiles(CLEAN.docs.src);
});

// clean-jekyll
gulp.task(CLEAN.jekyll.taskName, async function () {
	cleanFiles(CLEAN.jekyll.src);
});

// clean-ocmp
gulp.task(CLEAN.ocmp.taskName, async function () {
	cleanFiles(CLEAN.ocmp.src);
});

// clean-packages
gulp.task(CLEAN.packages.taskName, async function () {
	cleanFiles(CLEAN.packages.src);
});

// Watch Task
gulp.task('watch', async function () {
	// watch Docs Css / JS
	gulp.watch(DOCS.sass.watch, gulp.series(DOCS.sass.taskName.dev));
	gulp.watch(DOCS.js.watch, gulp.series(DOCS.js.taskName.dev));

	// Watch OCMP Html / css / JS
	gulp.watch(OCMP.html.watch, gulp.series(OCMP.html.taskName.dev));
	gulp.watch(OCMP.sass.watch, gulp.series(OCMP.sass.taskName.dev));
	gulp.watch(OCMP.js.watch, gulp.series(OCMP.js.taskName.dev));
});

// Export Tasks
exports.BuildDocsSrc = gulp.parallel(
	DOCS.sass.taskName.dev, 
	DOCS.js.taskName.dev, 
	OCMP.html.taskName.dev, 
	OCMP.sass.taskName.dev, 
	OCMP.js.taskName.dev
);

exports.BuildSrc = gulp.parallel(
	OCMP.html.taskName.prod, 
	OCMP.sass.taskName.prod, 
	OCMP.js.taskName.prod, 
	OCMP.gtm_template.taskName.prod, 
	OCMP.data.taskName.prod
);

exports.Package = gulp.parallel(
	PACKAGE.ocmp_src.taskName, 
	PACKAGE.ocmp_gtm.taskName
);

// ----------------- Begin Functions  ----------------- //
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
		.pipe(gulpif(env === 'Development', rename({ basename: 'template' })))
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

function fileInclude(src, dest, env, basepath) {
	gulp
		.src(src)
		.pipe(
			file_include({
				prefix: '@@',
				basepath: basepath ? basepath : '@file',
				indent: true
			})
		)
		.pipe(gulp.dest(dest));
}

function copy(src, dest, env) {
	gulp.src(src).pipe(gulp.dest(dest));
}

function package(src, dest, destFileName, version) {
	gulp
		.src(src)
		.pipe(
			zip(`${destFileName}.zip`, {
				compress: true
			})
		)
		.pipe(
			gulpif(
				version != null,
				rename(function (path) {
					path.basename = `${destFileName}-v${version}`;
				})
			)
		)
		.pipe(gulp.dest(dest));

	gulp
		.src(src)
		.pipe(tar(`${destFileName}.tar`))
		.pipe(gzip())
		.pipe(
			gulpif(
				version != null,
				rename(function (path) {
					path.basename = `${destFileName}-v${version}.tar`;
				})
			)
		)
		.pipe(gulp.dest(dest));
}


function cleanFiles(src){
	gulp
		.src(src, { read: false, allowEmpty: true })
		.pipe(clean());
}

// ----------------- End Functions  ----------------- //
