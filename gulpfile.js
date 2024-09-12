import {src, dest, watch} from 'gulp';
import gulp from 'gulp-sass';
import * as dartsass from 'sass';

const compilador = gulp(dartsass);

export function css(done) {
    src('src/sass/principal.scss', {sourcemaps: true})
        .pipe(compilador().on('error', compilador.logError))
        .pipe(dest('build/css', {sourcemaps: "."}));
    done();
}

export function watchFiles() {
    watch('src/sass/**/*.scss', css);
}