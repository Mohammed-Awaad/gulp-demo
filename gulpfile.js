const { src, dest, series, parallel, watch } = require("gulp");
const htmlmin = require("gulp-htmlmin");
const concat = require("gulp-concat");
const cleanCss = require("gulp-clean-css");
const terser = require("gulp-terser");
const imagemin = require("gulp-imagemin");

// Bonus =>
const processhtml = require("gulp-processhtml");

const globs = {
  html: "src/*.html",
  css: "src/css/**/*.css",
  js: "src/js/**/*.js",
  img: "src/imgs/*",
};

function htmlMinify() {
  return src(globs.html)
    .pipe(processhtml())
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(dest("dist"));
}
function cssMinify() {
  return src(globs.css).pipe(concat("style.min.css")).pipe(cleanCss()).pipe(dest("dist"));
}
function jsMinify() {
  return src(globs.js).pipe(concat("main.min.js")).pipe(terser()).pipe(dest("dist"));
}
function imgMinify() {
  return src(globs.img).pipe(imagemin()).pipe(dest("dist/imgs"));
}

function watchTasks() {
  watch(globs.html, htmlMinify);
  watch(globs.css, cssMinify);
  watch(globs.js, jsMinify);
  watch(globs.img, imgMinify);
}

exports.default = series(parallel(htmlMinify, cssMinify, jsMinify, imgMinify), watchTasks);
