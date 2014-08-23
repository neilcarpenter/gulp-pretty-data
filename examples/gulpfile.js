var gulp = require('gulp');
var prettyData = require('../');

gulp.task('minify', function(){
  gulp.src('./src/**.{json,xml}')
  .pipe(prettyData({
  	type: 'minify',
  	preserveComments: true
  }))
  .pipe(gulp.dest('./build'));
});

gulp.task('pretty', function(){
  gulp.src('./src/**.{json,xml}')
  .pipe(prettyData({
  	type: 'prettify'
  }))
  .pipe(gulp.dest('./build'));
});
