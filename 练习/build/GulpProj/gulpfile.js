

// 【引入模块】
const gulp    = require('gulp');         // gulp 构建对象
const less    = require('gulp-less');    // 编译less
const babel   = require('gulp-babel');   // 编译ES6
const uglify  = require('gulp-uglify');  // 丑化js
const rename  = require('gulp-rename');  // 重命名
const notify  = require('gulp-notify');  // 发送通知
const plumber = require('gulp-plumber'); // 发送异常
const rev     = require('gulp-rev');     // 添加hash
const del     = require('del');          // 清除文件
const concat  = require('gulp-concat');  // 合并文件
const htmlmin = require('gulp-htmlmin'); // 压缩HTML
const autoprefixer = require('gulp-autoprefixer'); // 自动添加前缀
const cleancss     = require('gulp-clean-css');    // 压缩CSS
const htmlreplace  = require('gulp-html-replace'); // 替换
     


// 【定义任务】
gulp.task('del', () => {
    del.sync(['./dist']);
});

gulp.task('compileJS', () => {
    return gulp.src(['./src/js/tools.js', './src/js/index.js'])
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(babel({
            presets: ["env"]
        }))
        .pipe(uglify())
        .pipe(concat('index.min.js'))
        .pipe(gulp.dest('./dist/static/js'))
        .pipe(notify({message: 'compileJS task is ok.'}));
});
gulp.task('compileLESS', () => {
    return gulp.src(["./src/less/normalize.less", "./src/less/index.less"])
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'], // 浏览器版本
            cascade: true,                 // 美化属性，默认true
            add: true,                     // 是否添加前缀，默认true
            remove: true,                  // 删除过时前缀，默认true
            flexbox: true                  // 为flexbox属性添加前缀，默认true
        }))
        .pipe(cleancss())
        .pipe(concat('index.min.css'))
        .pipe(gulp.dest('./dist/static/css'))
        .pipe(notify({message: 'compileLESS task is ok.'}));
});

gulp.task('compileHTML', () => {
    return gulp.src('./src/index.html')
        .pipe(htmlreplace({
            'css':'./static/css/index.min.css',
            'js':'./static/js/index.min.js'
        }))
        .pipe(htmlmin({
            // 1. 清除html注释	
            removeComments:true, 
            // 2. 清除空格(压缩)
            collapseWhitespace: true, 
            // 3. 省略布尔属性的值 <input checked="true"/> ==> <input />
            collapseBooleanAttributes: true, 
            // 4. 删除所有空格作属性值 <input id="" /> ==> <input />
            removeEmptyAttributes: true,
            // 5. 删除<script>的type="text/javascript"
            removeScriptTypeAttributes: true,
            // 6. 删除<style>和<link>的type="text/css"
            removeStyleLinkTypeAttributes: true,
            // 7. 压缩页面css
            minifyCSS: true,
            // 8. 压缩页面js
            minifyJS: true }))
        .pipe(gulp.dest('./dist'))
        .pipe(notify({message: 'compileHTML task is ok.'}));
});

gulp.task('default', ['del', 'compileJS', 'compileLESS', 'compileHTML'], () => {
    console.log('build is done.');
});

// 【监听文件】
gulp.task('dev', () => {
    gulp.watch('./src/js/*.js', ['compileJS']);
    gulp.watch('./src/less/*.less', ['compileLESS']);
});