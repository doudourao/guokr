const gulp=require('gulp');
const less=require('gulp-less');
const px2rem = require('gulp-px3rem');

gulp.task('less',function(){
	gulp.src('less/*.less')
  	.pipe(less())
  	.pipe(px2rem({
			remUnit: 40,
			remPrecision: 6
		}))
  	.pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
  gulp.watch('less/*.less', ['less']);
});

gulp.task('default', ['watch','less']);