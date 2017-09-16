var gulp = require('gulp');
var html = require('gulp-htmlmin');
var less = require('gulp-less');
var cssmin = require('gulp-clean-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlReplace = require('gulp-html-replace');
// -------------(以上是gulp插件)--------------------
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
// ----------------(这个是browserify的插件)----------


//压缩html
gulp.task('html', function () {
    gulp.src(['src/**/*.html', 'index.html'])
        .pipe(htmlReplace(
            {
                style: gulp.src('src/html/common/style.html'),
                header: gulp.src('src/html/common/header.html'),
                aside: gulp.src('src/html/common/aside.html'),
                courseEditHeader:gulp.src('src/html/common/course/header.html'),
                courseEditAside:gulp.src('src/html/common/course/aside.html'),
            }
        ))
        .pipe(html({
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
            removeComments: true
        }))
        .pipe(gulp.dest('dist'));
})
//编译less
gulp.task('less', function () {
    gulp.src('src/less/index.less')
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
})
//编译JS
//1.库JS(指的是第三方库)合并在一起
var jsLibs = [
    'node_modules/art-template/lib/template-web.js',
    'node_modules/jquery/dist/jquery.js',
    'node_modules/bootstrap/js/bootstrap.js', //bootstrap依赖jquery，所以要先执行。
    'node_modules/jquery-form/dist/jquery.form.min.js',
    'node_modules/jquery.cookie/jquery.cookie.js',
    'node_modules/nprogress/nprogress.js',
    'node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js',
    'node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.zh-CN.min.js',
    'lib/jquery-Jcrop/js/Jcrop.js',
    'lib/jquery-region/jquery.region.js',
    'lib/jquery-uploadify/jquery.uploadify.js',
];
gulp.task('concat', function () {
    gulp.src(jsLibs) //src里面能放数组。先后执行。
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('dist/js')) //后面可以接目录，也可以接文件名。如果是文件名字，则是合并。
})
//2.自己写的js,打包成commonJS模块。
//其中src下的JS文件中，common下的js文件不需要打包。
// 将来谁要谁require对应的页面脚本。

// browserify不支持通配符，只能一个一个写。（费力）
// 使用循环。（数组存贮）
var jsmodules = [
    'src/js/index.js',
    // 用户
    'src/js/user/login.js',
    'src/js/user/profile.js',
    'src/js/user/repass.js',
    // 讲师
    'src/js/teacher/add.js',
    'src/js/teacher/edit.js',
    'src/js/teacher/list.js',
    // 课程
    'src/js/course/add.js',
    'src/js/course/edit1.js',
    'src/js/course/edit2.js',
    'src/js/course/edit3.js',
    'src/js/course/list.js',
    //学科分类
    'src/js/category/add.js',
    'src/js/category/edit.js',
    'src/js/category/list.js',
];
gulp.task('js', function () {
    jsmodules.forEach(function (jspath) {
        var jsArr = jspath.split('/');
        var jsName = jsArr.pop();
        jsArr.shift();

        browserify(jspath, {debugger: true}).bundle()
            .pipe(source(jsName))
            .pipe(buffer())
            .pipe(gulp.dest('dist/' + jsArr.join('/')));

    })
})
//添加统一打包任务
gulp.task('build', function () {
    gulp.run(['html', 'less', 'concat', 'js']);
})
//    监视任务
gulp.task('default', function () {
    gulp.run('build');
    gulp.watch(['src/**/*.html', 'index.html'], function () {
        gulp.run('html');
    })
    gulp.watch(['src/**/*.less', 'index.less'], function () {
        gulp.run('less');
    })
    gulp.watch(['src/**/*.js'], function () {
        gulp.run('js');
    });
})
