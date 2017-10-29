var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
gulp.task('sass',function(){
    return gulp.src('sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'extended',
        sourceCommnets: 'map'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))
})
gulp.task('watch',function(){
    gulp.watch('sass/**/*.scss',['sass']);
})
