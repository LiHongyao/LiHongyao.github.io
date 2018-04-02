const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const del = require('del');
const vinylPaths = require('vinyl-paths');
const notify = require('gulp-notify');
const rev = require('gulp-rev');
const revReplace = require('gulp-rev-replace');
const htmlmin = require('gulp-htmlmin');
const useref = require('gulp-useref');



// 清除文件
gulp.task('clean', function(){
	del('./dist');
});

// 处理html
gulp.task('handle-html', function(){
	return gulp.src('./index.html')
	.pipe(htmlmin())
	.pipe(useref({
		"css": "css/test.css",
		"js":"js/test.js"
	}))
	.pipe(rev())
	.pipe(gulp.dest('./dist'))
	.pipe(notify({message: 'handle-html task is ok.'}));
});

// 打包js
gulp.task('compress-js', function () {
	return gulp.src('./plugin/*.js')
	.pipe(babel({
		presets: "env"
	}))
	.pipe(uglify())
	.pipe(rename({suffix: '.min'}))
	.pipe(rev())
	.pipe(gulp.dest('./dist'))
	.pipe(notify({message: 'compress-js task is ok.'}));
});

gulp.task('default', ['clean', 'compress-js', 'handle-html']);
















