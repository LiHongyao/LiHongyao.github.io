// gulp 配置文件


// 1. 引入模块
const gulp = require("gulp");
const plugins = require("gulp-load-plugins")();
const rename = require("gulp-rename"); // 重命名
const less = require("gulp-less"); // 编译less
const notify = require("gulp-notify"); // 通知
const autoprefixer = require("gulp-autoprefixer"); // 自动加入css前缀
const cleanCss = require("gulp-clean-css"); // 压缩css文件
const babel = require("gulp-babel"); // es6->es5
const concat = require("gulp-concat"); // 合并文件
const uglify = require("gulp-uglify"); // 丑化JS
const cache = require("gulp-cache"); // 缓存
const imagemin = require("gulp-imagemin"); // 图片压缩
const browserSync = require("browser-sync").create(); // 实时刷新
const htmlmin = require("gulp-htmlmin"); // 压缩html
const del = require("del");





// 2. 定义任务
gulp.task("handleJS", () => {
    // 获取文件流
    return gulp.src("./src/js/*.js")
        .pipe(babel({
            presets: ["env"]
        }))
        .pipe(concat("bundle.js"))
        .pipe(rename({suffix:".min"}))
        .pipe(uglify())
        //.pipe(plugins.rev())
        .pipe(gulp.dest("./dist/js"))
        .pipe(browserSync.reload({stream: true}));
});
gulp.task("handleCSS", () => {
    return gulp.src("./src/less/*.less")
        .pipe(plugins.less())
        .pipe(plugins.autoprefixer())
        .pipe(plugins.rename({suffix: ".min"}))
        .pipe(plugins.cleanCss())
        .pipe(gulp.dest("./dist/css"))
        .pipe(plugins.notify({message: "task 'handleCSS' is done."}))
        // 实时刷新
        .pipe(browserSync.reload({stream: true}));
});
gulp.task("handleImage", () => {
    return gulp.src("./src/img/*.{png,jpg}")
        .pipe(cache(imagemin({
            optimizationLevel: 5
        })))
        .pipe(gulp.dest("./dist/images"));
});
gulp.task("handleHTML", () => {
   return gulp.src("./src/*.html")
       .pipe(htmlmin({
           removeComments:true, // 清除主持
           collapseWhitespace:true // 清除空格
       }))
       .pipe(gulp.dest("./dist"))
       .pipe(browserSync.reload({stream:true}));
});
gulp.task("browser-sync", () => {
    browserSync.init({
       server: {
           baseDir: './dist'
       }
    });
});

gulp.task("del", (cb) => {
    del(["./dist"], cb);
});




// 3. 监听
gulp.task("watch", () => {
    gulp.watch("./src/less/*.less", ["handleCSS"]);
    gulp.watch("./src/js/*.js", ["handleJS"]);
    gulp.watch("./src/*.html", ["handleHTML"]);
});

gulp.task("default", ["browser-sync","handleCSS", "handleJS", "handleImage", "handleHTML", "watch"]);



















































