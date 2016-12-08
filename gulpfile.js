
//引入gulp插件
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    spritesmith = require('gulp.spritesmith'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    runSequence = require('run-sequence'),
    inject = require('gulp-inject-string'),
    replace = require('gulp-replace'); // 字符串替换插件

//
var pkg = require('./package.json');

var o = {
    spritePrefix: '.myicon-',
    spriteName: 'sprite'
};

var config = {
    src: {
        root: './',
        file: {
            scss: ['src/sass/**/*.scss'],
            js: 'src/js/**/*.js',
            img: ['src/img/**/*', '!src/img/myicon/*.*'],
            myicons: 'src/img/myicon/*.png',
            spriteImg: 'src/img/' + o.spriteName +'.png',
            spriteScss: 'src/scss/_' + o.spriteName + '.scss',
            font: 'src/font/*',
            html: 'src/*.html',
            vendor: 'src/vendor/**/*'
        },
        dir: {
            scss: 'src/scss/',
            css: 'src/css/',
            js: 'src/js/',
            img: 'src/img/',
            sprite: 'src/img/myicon/',
            font: 'src/font/'
        }
    },
    dist: {
        file: {
            css: 'dist/css/**/*.css'
        },
        dir: {
            root: 'dist',
            js: 'dist/js',
            css: 'dist/css',
            img: 'dist/img',
            font: 'dist/font',
            html: 'dist/*.html',
            vendor: 'dist/vendor'
        }
    }
};

// ==============================
// html
gulp.task('html', function () {
    gulp.src(config.src.file.html)
        .pipe(connect.reload());
});
// ==============================
// style
gulp.task('sass', ['cleanCss'], function () {
    return sass(config.src.file.scss, { sourcemap: true })
        .on('error', sass.logError)
        .pipe(autoprefixer({
            browsers: config.autoprefixerBrowsers,
            cascade: false
        }))

        .pipe(sourcemaps.write())

        .pipe(minifycss({compatibility: 'ie8'}))
        .pipe(rename({
            suffix: '.min',
            extname: '.css'
        }))

        .pipe(gulp.dest(config.src.dir.css))

        .pipe(connect.reload());
});


// ==============================
// js
gulp.task('js', ['cleanJs'], function () {
    return gulp.src(config.src.file.js)
        .pipe(uglify())
        .pipe(gulp.dest(config.dist.dir.js));
});

// ==============================



// ==============================
// 清理
gulp.task('clean', function() {
    return gulp.src(config.dist.dir.root, {read: false})
        .pipe(clean());
});
gulp.task('cleanCss', function() {
    return gulp.src([config.dist.dir.css, config.src.dir.css], {read: false})
        .pipe(clean());
});

gulp.task('cleanJs', function() {
    return gulp.src(config.dist.dir.js, {read: false})
        .pipe(clean());
});

gulp.task('cleanHtml', function() {
    return gulp.src(config.dist.dir.html, {read: false})
        .pipe(clean());
});


gulp.task('watch', function () {
    // watch scss
    gulp.watch(config.src.file.scss, ['sass']);

    // watch js
    gulp.watch(config.src.file.js, ['js']);

    // watch html
    gulp.watch(config.src.file.html, ['html']);

});


//使用connect启动一个Web服务器
gulp.task('connect', function () {
    connect.server({
        root: config.root,
        port: 8090,
        livereload: true
    });
});

//运行Gulp时，默认的Task
gulp.task('default', ['connect', 'watch']);