const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')

// scss読み込み先とcss出力先
const hoge = () => {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./public/stylesheets/'))
}

// 監視タスク
const sassWatch = () => {
  const watcher = gulp.watch(['./sass/**/*.scss'])
  watcher.on('change', hoge)
}

// sassWatchをデフォルトタスクに設定
exports.build = sassWatch
exports.default = gulp.series(sassWatch)