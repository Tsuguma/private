import { src, dest } from 'gulp';
import gulpIf from 'gulp-if';
import sass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import autoprefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';
import config from '../config';

export default () => src(config.css.src, { sourcemaps: config.develop })
  .pipe(sassGlob())
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: config.css.browsers,
    cascade: false
  }))
  .pipe(gulpIf(!config.develop, cleanCss()))
  .pipe(dest(config.css.dest, { sourcemaps: '.' }));
