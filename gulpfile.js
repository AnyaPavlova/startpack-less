'use strict';

const { series, parallel, src, dest, watch }    = require('gulp');
const fileinclude                               = require('gulp-file-include');
const less                                      = require('gulp-less');
const postcss                                   = require('gulp-postcss');
const mqpacker                                  = require('css-mqpacker');
const sourcemaps                                = require('gulp-sourcemaps');
const notify                                    = require('gulp-notify');
const browserSync                               = require('browser-sync').create();

// Path
const path = {
    www: {
        style: 'www/css/',
        html : 'www/'
    },
    src: {
        style: 'src/css/*.less',
        html: 'src/html/*.html'
    },
    watch: {
        srcStyle   : 'src/css/**/*.less',
        buildStyle : 'www/css/*.css',
        srcHtml    : 'src/html/**/*.html',
        html       : 'www/*.html'
    }
}

// concat html
function html() {
    return src(path.src.html)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        })
            .on('error', notify.onError({
                message: '<%= error.fileName %>' +
                    '\nLine <%= error.lineNumber %>:' +
                    '\n<%= error.message %>',
                title  : '<%= error.plugin %>'
            }))
        )
        .pipe(dest(path.www.html));
}
exports.html = html;

// Compilation less
function styles() {
    return src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(less()
            .on('error', notify.onError({
                message: '<%= error.fileName %>' +
                    '\nLine <%= error.lineNumber %>:' +
                    '\n<%= error.message %>',
                title  : '<%= error.plugin %>'
            }))
        )
        .pipe(postcss([
            mqpacker({
                sort: false
            })
        ]))
        .pipe(sourcemaps.write())
        .pipe(dest(path.www.style));
}
exports.styles = styles;

function serve() {
    browserSync.init({
        server: "./www"
    });

    watch([
        path.watch.srcStyle
    ], styles);

    watch([
        path.watch.srcHtml
    ], html);

    watch([
        path.watch.html,
        path.watch.buildStyle
    ]).on('change', browserSync.reload);
}

exports.default = series(
    parallel(styles, html),
    serve
);