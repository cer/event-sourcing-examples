import del from "del";
import path from "path";
import gulp from "gulp";
import open from "open";
import gulpLoadPlugins from "gulp-load-plugins";
import packageJson from "./package.json";
import runSequence from "run-sequence";
import webpack from "webpack";
import webpackConfig from "./webpack.config";
import WebpackDevServer from "webpack-dev-server";


const PORT = process.env.PORT || 3000;
const $ = gulpLoadPlugins({camelize: true});


// Main tasks
gulp.task('serve', () => runSequence('serve:clean', 'serve:index', 'serve:start'));
gulp.task('dist', () => runSequence('dist:clean', 'dist:build', 'dist:index'));
gulp.task('clean', ['dist:clean', 'serve:clean']);
gulp.task('open', () => open('http://localhost:3000'));

// Remove all built files
gulp.task('serve:clean', cb => del('build', {dot: true}, cb));
gulp.task('dist:clean', cb => del(['dist', 'dist-intermediate'], {dot: true}, cb));

// Copy static files across to our final directory
gulp.task('serve:static', () => 
  gulp.src([
    'src/static/**'
  ])
    .pipe($.changed('build'))
    .pipe(gulp.dest('build'))
    .pipe($.size({title: 'static'}))
);

gulp.task('dist:static', () => 
  gulp.src([
    'src/static/**'
  ])
    .pipe(gulp.dest('dist'))
    .pipe($.size({title: 'static'}))
);

// Copy our index file and inject css/script imports for this build
gulp.task('serve:index', () => {
  return gulp
    .src('src/index.html')
    .pipe($.injectString.after('<!-- inject:app:js -->', '<script src="generated/main.js"></script>'))
    .pipe(gulp.dest('build'));
});

// Copy our index file and inject css/script imports for this build
gulp.task('dist:index', () => {
  const app = gulp
    .src(["*.{css,js}"], {cwd: 'dist-intermediate/generated'})
    .pipe(gulp.dest('dist'));

  // Build the index.html using the names of compiled files
  return gulp.src('src/index.html')
    .pipe($.inject(app, {
      ignorePath: 'dist',
      starttag: '<!-- inject:app:{{ext}} -->'
    }))
    .on("error", $.util.log)
    .pipe(gulp.dest('dist'));
});

// Start a livereloading development server
gulp.task('serve:start', ['serve:static'], () => {
  const config = webpackConfig(true, 'build', PORT);

  return new WebpackDevServer(webpack(config), {
    contentBase: 'build',
    publicPath: config.output.publicPath,
    watchDelay: 100
  })
    .listen(PORT, '0.0.0.0', (err) => {
      if (err) throw new $.util.PluginError('webpack-dev-server', err);

      $.util.log(`[${packageJson.name} serve]`, `Listening at 0.0.0.0:${PORT}`);
    });
});

// Create a distributable package
gulp.task('dist:build', ['dist:static'], cb => {
  const config = webpackConfig(false, 'dist-intermediate');

  webpack(config, (err, stats) => {
    if (err) throw new $.util.PluginError('dist', err);

    $.util.log(`[${packageJson.name} dist]`, stats.toString({colors: true}));

    cb();
  });
});
