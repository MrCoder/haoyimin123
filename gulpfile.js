var gulp = require('gulp');
var deploy = require('gulp-gh-pages');
var options = {origin: 'github'}; 
gulp.task('deploy', function () {
    return gulp.src(['./**/*', '!./node_modules/**'])
        .pipe(deploy(options));
});
