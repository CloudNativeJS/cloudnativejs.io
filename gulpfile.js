const gulp = require('gulp');

const runSequence = require('run-sequence');
const browserSync = require('browser-sync').create();

// default task
gulp.task('default', function() {
  runSequence('browser-sync');
});

// browser-sync task
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
        notify: false
    });
});
