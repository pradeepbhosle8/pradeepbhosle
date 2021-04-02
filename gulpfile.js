const gulp = require('gulp');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssbutify = require('gulp-cssbeautify');
const imagemin = require('gulp-imagemin');

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

gulp.task('scssstyle2', function() {
  return gulp.src('./assets/sass/style2.scss')
    .pipe(sass())

    // .pipe(postcss([autoprefixer({
    //     browsers:['last 4 version']
    // })]))
    // .pipe(cssmin())
    //.pipe(rename({suffix: '.min'}))
    .pipe(cssbutify())
    .pipe(gulp.dest('./assets/css/'))
});

// images minify 
gulp.task('image-mini', function() 
{	return gulp.src('./assets/images/*')
		   .pipe(imagemin())
		   .pipe(gulp.dest('./assets/dist/images'))
});



//////////////////////////
////     Watch task 
//////////////////////////
gulp.task('watch', function(){
    gulp.watch('./assets/sass/*.scss', gulp.series('scss'));
    gulp.watch('./assets/sass/*.scss', gulp.series('scssstyle2'))
    
})

//////////////////////////
////     Run task 
//////////////////////////
gulp.task('default', gulp.series('watch','image-mini'));