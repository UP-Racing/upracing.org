require('es6-promise').polyfill();
const gulp = require('gulp')
const util = require('gulp-util')
const plumber = require('gulp-plumber')
const clean = require('gulp-clean')
const browserSync = require('browser-sync')
const nodemon = require('gulp-nodemon')
const runSequence = require('run-sequence')
const imagemin = require('gulp-imagemin')

const babel = require('gulp-babel')
const webpackConfig = require('./webpack.config.js')
const webpack = require('webpack')

const config = require('./config');

const bablercForServer = {
	presets: ["stage-0", "es2015", "react"],
	plugins: [
		"syntax-async-functions",
		"transform-async-to-generator",
		"transform-regenerator",
		"transform-runtime",
		"transform-class-properties",
		["css-modules-transform", {
			extensions: [".css", ".scss", ".less"],
		}],
	],
}

//config
var production = !!util.env.production;

const paths = {
	buildFolder: "./build/",
	build: {
		publicFiles: './build/public/',
		server: './build/',
	},
	src: {
		base: './src/',
		serverFiles: ['./src/**/*.js', '!./src/public/**/*.js'],
		components: './src/components/**/*',
		resourcesFolder: './src/public/res',
		publicCoreFiles: ['./src/public/res/img/favicon.ico', './src/public/sitemap.xml'],
	}
}

function handleError(error) {
	util.log(error.toString())
	if (!production) {
		this.emit('end');
	} else {
		util.log('Production error')
	}
}

gulp.task('build:server', () => {
	return gulp.src(paths.src.serverFiles, { base: paths.src.base })
		.pipe(plumber())
		.pipe(babel(bablercForServer).on('error', handleError))
		.pipe(gulp.dest(paths.buildFolder))
})

gulp.task('build:public:resources:coreFiles', () => {
	return gulp.src(paths.src.publicCoreFiles)
		.pipe(plumber())
		.pipe(imagemin())
		.pipe(gulp.dest(paths.build.publicFiles))
})

gulp.task('build:public:resources', ['build:public:resources:coreFiles'], () => {
	return gulp.src(paths.src.resourcesFolder + '**/*', {
		base: paths.src.resourcesFolder
	})
		.pipe(plumber())
		.pipe(imagemin())
		.pipe(gulp.dest(paths.build.publicFiles))
})

gulp.task('build:public', (cb) => {
	runSequence(['build:public:resources'], cb)
})

gulp.task('build:client:compile', (cb) =>
	webpack(webpackConfig, cb)
)

gulp.task('build:client', ['build:client:compile'], () => {
	setTimeout(() => {browserSync.reload({ stream: false }) }, 1500)
})

gulp.task('clean', () => {
	return gulp.src(paths.buildFolder, {read: false})
		.pipe(clean())
})

gulp.task('build', (cb) => {
	runSequence('clean', ['build:client', 'build:public', 'build:server'], cb)
})

gulp.task('browser-sync', () => {
	browserSync({
		proxy: 'localhost:' + config.port,
		port: 8002,
		open: false,
	})
})

gulp.task('nodemon', ['watch'], () => {
	nodemon({
		script: paths.buildFolder + 'index.js',
		watch: paths.buildFolder,
		delay: '1000ms',
	})
})

gulp.task('watch', ['browser-sync', 'build'], () => {
	gulp.watch(paths.src.components, ['build:client'])
	gulp.watch(paths.src.resourcesFolder + '**/*', ['build:public:resources'])
	gulp.watch(paths.src.serverFiles.concat(paths.src.components), ['build:server'])
})

gulp.task('default', (cb) => {
	runSequence(['build'], ['browser-sync'], cb)
})