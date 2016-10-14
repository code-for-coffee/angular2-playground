/**
 * Created by codeforcoffee on 10/13/16.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var traceur = require('gulp-traceur');

gulp.task('html', function () {
    return gulp.src('app/**/*.html')
        .pipe(gulp.dest('build'));
});

gulp.task('js', function () {
    return gulp.src('app/**/*.js')
        .pipe(traceur({
            modules: 'instantiate',
            annotations: true
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('vendorjs', function () {
    return gulp.src([
        'node_modules/traceur/bin/traceur-runtime.js',
        'node_modules/systemjs/dist/system-csp-production.src.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/@angular/core/index.js'
    ])
        .pipe(gulp.dest('build/vendor/'));
});

gulp.task('connect', function(){
    connect.server({
        root: ['build'],
        host: '0.0.0.0',
        port: 9000
    })
});

gulp.task('default', ['connect', 'html', 'vendorjs', 'js']);