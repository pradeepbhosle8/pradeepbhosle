const gulp = require('gulp');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssbutify = require('gulp-cssbeautify');

// task 

//////////////////////////
////     scss task 
//////////////////////////
gulp.task('scss', function(){
    return gulp.src('./assets/sass/style.scss')
           .pipe(sass())
         
           .pipe(postcss([autoprefixer({
               browsers:['last 1 version']
           })]))
           // .pipe(cssmin())
           //.pipe(rename({suffix: '.min'}))
           .pipe(cssbutify())
           .pipe(gulp.dest('./assets/css/'))   
});



//////////////////////////
////     Watch task 
//////////////////////////
gulp.task('watch', function(){
    gulp.watch('./assets/sass/*.scss', gulp.series('scss'));

    
})

//////////////////////////
////     Run task 
//////////////////////////
gulp.task('default', gulp.series('watch'));