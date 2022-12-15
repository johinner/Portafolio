import gulp from "gulp";

import minifyCSS from "gulp-minify-css";
import concat from 'gulp-concat';
import minify from "gulp-minify";
import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);

gulp.task("sass", function () {
    return gulp
        .src("public/stylesheets/**/*.scss") //Ruta carpeta scss
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest("dist/stylesheets")); //destino compilado en css
});

gulp.task("compress", function () {
    return gulp
        .src("public/javascripts/**/*.js")
        .pipe(minify())
        //.pipe(concat("concat.js"))
        .pipe(gulp.dest("dist/javascripts"));
});

gulp.task("style_min", () => {
    return gulp
      .src("public/stylesheets/**/*.scss") // ruta inicial
      .pipe(sass())
      .pipe(minifyCSS()) 
      .pipe(concat("style_main.min.css")) // nombre archivo contenedor
      .pipe(gulp.dest("dist/stylesheets")); // ruta final
  });

  gulp.task('watch', () => {
    gulp.watch('public/stylesheets/**/*.scss', gulp.series('style_min'));
    gulp.watch('public/javascripts/**/*.js', gulp.series('compress'));
  });