var gulp 		= require('gulp');
var	uglify 		= require('gulp-uglify');
var concat 		= require('gulp-concat');
var watch 		= require('gulp-watch');
var browserSync = require('browser-sync');


//Custom Error Handler For Gulp BS
function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

// Gulp Minification and Concatination
gulp.task('miniConcat', function(){
	 gulp.src('js/*.js')
	 .pipe(uglify())
	 .on("error", handleError)
	 .pipe(concat('all.js'))
	 .pipe(gulp.dest('minjs'))
});

// Gulp Watch Task
gulp.task('watch', function(){
	gulp.watch('js/*js', ['miniConcat'])
});

//Main Trigger or invocation









