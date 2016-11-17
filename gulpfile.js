
//引入gulp插件
var gulp = require('gulp'),
    connect = require('gulp-connect');

//
var pkg = require('./package.json');

var o = {
    spritePrefix: '.myicon-',
    spriteName: 'sprite'
};

var config = {
    src: {
        root: 'src',
        file: {
            scss: ['src/sass/**/*.scss'],
            js: 'src/js/**/*.js',
            img: ['src/img/**/*', '!src/img/myicon/*.*'],
            myicons: 'src/img/myicon/*.png',
            spriteImg: 'src/img/' + o.spriteName +'.png',
            spriteScss: 'src/scss/_' + o.spriteName + '.scss',
            font: 'src/font/*',
            html: 'src/html/**/*',
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
            html: 'dist/html',
            vendor: 'dist/vendor'
        }
    }
};


gulp.task('html', function () {
    gulp.src(config.src.file.html)
        .pipe(connect.reload());
});

gulp.task('watch', function () {
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