const gulp = require('gulp');

const gulpif = require('gulp-if');
const rename = require('gulp-rename');

const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const jmq = require('gulp-join-media-queries');
const uglifycss = require('gulp-uglifycss');

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
gulp.task(DOCS.sass.taskName.dev, async function () {
	buildCSS(DOCS.sass.src, DOCS.sass.dest.dev, 'Development');
});

// OCMP development
gulp.task(OCMP.sass.taskName.dev, async function () {
	buildCSS(OCMP.sass.src, OCMP.sass.dest.dev, 'Development');
});


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



exports.BuildDocsSrc = gulp.parallel(
	DOCS.sass.taskName.dev,
	OCMP.sass.taskName.dev,
);
