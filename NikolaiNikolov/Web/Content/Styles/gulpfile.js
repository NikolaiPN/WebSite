var gulp = require('gulp');
var sass = require('gulp-sass');
//var print = require('gulp-print');
var cconcat = require('gulp-concat');
//var autoprefixer = require('gulp-autoprefixer');  // Not in use yet
var sourcemaps = require('gulp-sourcemaps');

var input = ['**/*.scss', '!node_modules', '!node_modules/**'];

var output = './';

//gulp.task('sass', function () {
//    return gulp
//        .src(input)
//        .pipe(sourcemaps.init())
//        .pipe(sass({ outputStyle: 'compressed' }))
//        .pipe(cconcat('Proccessed.min.css'))
//        .pipe(sourcemaps.write('./maps'))
//        .pipe(gulp.dest(output));
//});

gulp.task('sassBig', function () {
    return gulp
        .src(input)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cconcat('Proccessed.css'))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(output));
});

gulp.task('default', function () {
    gulp.watch(input, ['sassBig'])
});


//gulp.task('print', function () {
//    gulp.src(['**/*.scss', '!node_modules', '!node_modules/**'])
//      .pipe(print(function (filepath) {
//          return "built: " + filepath;
//      }))
//});

