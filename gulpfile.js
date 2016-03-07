var gulp = require("gulp")
var sass = require("gulp-sass")

var sources = {
  "sass_file": "sass/style.scss",
  "css_dest": "public/style"
}

gulp.task("default", ["watch"])

gulp.task("build-css", function(){
  gulp.src(sources.sass_file)
  .pipe(sass())
  .pipe(gulp.dest(sources.css_dest))
})

gulp.task('watch', function(){
  gulp.watch(sources.sass_file, ["build-css"])
})
