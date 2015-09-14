
import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import child_process from 'child_process';
import less from 'gulp-less';
import path from 'path';

const exec = child_process.exec;

gulp.task('less', () => {
  return gulp.src('src/less/index.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('build', ['less'], () => {
  browserify({
    entries: 'src/index.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'],() => {
   gulp.watch('src/**/*.jsx', ['build']);
   gulp.watch('src/less/*.less', ['less']);
});

gulp.task('default', ['build']);
