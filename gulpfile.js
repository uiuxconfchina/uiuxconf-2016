var gulp = require('gulp'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  minify = require('gulp-minify-css'),
  borwserSync = require('browser-sync').create(),
  reload = borwserSync.reload,
  assets = {
    'js': [
    ],
    'css': ["assets/scss/**/*.{scss,sass}"]
  };

// Prepares the JS file

gulp.task('js', function() {
  gulp.src(assets.js)
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets'));
});

// Prepares the CSS file
gulp.task('css', function() {
  gulp.src(assets.css)
    .pipe(sass({ includePaths: require('node-bourbon').includePaths }))
    .pipe(concat('main.css'))
    .pipe(minify({ keepBreaks: true }))
    .pipe(gulp.dest('./_site/assets/css'));
});

// Prepares JS & CSS assets
gulp.task('default', ['css', 'js', 'watch']);

// reload browser

gulp.task('watch', function() {
  borwserSync.init({
    server: {
      baseDir: './_site/'
    }
  });
  gulp.watch(assets.css, ['css']).on('change', reload);
  gulp.watch("_includes/*.html").on('change', reload);
  gulp.watch("./*").on('change', reload);
});
