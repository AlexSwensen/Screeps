var gulp = require('gulp');
var screeps = require('gulp-screeps');
var credentials = require('./credentials.js');

gulp.task('default', ['screeps', 'watch']);
gulp.task('watch', function() {
  gulp.watch('src/*.js', ['screeps']);
});
gulp.task('screeps', function() {
  gulp.src('*.js').pipe(screeps(credentials));

});