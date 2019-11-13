// commonJS 规范
// 引入gulp对象
const gulp  = require('gulp');
// 引入插件
const babel   = require('gulp-babel');
const uglify  = require('gulp-uglify');
const rename  = require('gulp-rename');
const notify  = require('gulp-notify');
const plumber = require('gulp-plumber');
const concat  = require('gulp-concat');
const del     = require('del');
const htmlmin = require('gulp-htmlmin');
const changed = require('gulp-changed');
const less    = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const cache    = require('gulp-cache');
const browserSync = require('browser-sync').create();
const md5 = require("gulp-md5-plus");

// 定义任务
// 1. 清空dist文件
gulp.task('del', () => {
    del.sync(['./dist']);
});

// 2. 处理JS
gulp.task('handleJS', () => {
    return gulp.src('./src/js/*.js')
                // 错误通知
               .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
                // ES6 -> ES5
               .pipe(babel({presets:['@babel/env']}))
                // 压缩JS
               .pipe(uglify())
                // 合并文件
                //.pipe(concat({path: 'app.js'}))
                // 重命名
               .pipe(rename({suffix: '.min'}))
                // 导出文件
               .pipe(gulp.dest('./dist/static/js/'))
                // 完成通知
               .pipe(notify({message: 'handleJS task is ok.'}));
});
// 3. 处理HTML
gulp.task('handleHTML', () => {
    return gulp.src('./src/**/*.html')
               .pipe(changed('./dist'))
               .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
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
                    minifyJS: true
               }))
               .pipe(gulp.dest('./dist/'))
               .pipe(notify({message: 'handleHTML task is ok.'}));
});

// 4. 处理LESS
gulp.task('handleLess', () => {
    return gulp.src('./src/less/*.less')
                // 编译less
               .pipe(less())
                // 自动添加前缀
               .pipe(autoprefixer({
                    browsers: ['last 2 versions'], // 浏览器版本
                    cascade: true,                 // 美化属性，默认true
                    add: true,                     // 是否添加前缀，默认true
                    remove: true,                  // 删除过时前缀，默认true
                    flexbox: true                  // 为flexbox属性添加前缀，默认true
                }))
                // 压缩CSS
               .pipe(cleanCSS({compatibility: 'ie8'}))
               .pipe(rename({suffix:'.min'}))
               .pipe(gulp.dest('./dist/static/css/'))
               .pipe(browserSync.reload({ stream: true}));
});

// 5. 处理图片
gulp.task('handleImage', () => {
    return gulp.src('./src/images/*')
                // 图片压缩
               .pipe(cache(imagemin([
                    imagemin.gifsicle({interlaced: true}),
                    imagemin.jpegtran({progressive: true}),
                    imagemin.optipng({optimizationLevel: 5}),
                    imagemin.svgo({
                        plugins: [
                            {removeViewBox: true},
                            {cleanupIDs: false}
                        ]
                    })
                 ])))
               .pipe(gulp.dest('./dist/static/images/'))
});

// 实时更新
gulp.task('browserSync', () => {
    browserSync.init({
		// 服务配置
		server: {
			// 设置服务器根目录
            baseDir: './dist'
        },
        port: 8081
	})
});

// 配置默认任务
gulp.task('default', ['del', 'browserSync', 'handleHTML', 'handleJS', 'handleLess', 'handleImage'], () => {
    // 监听文件变化
    gulp.watch('./src/js/*.js', ['handleJS']);
    gulp.watch('./src/images/*', ['handleImage']);
    gulp.watch('./src/less/*.less', ['handleLess']);
});

