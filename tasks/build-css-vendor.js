import { src, dest } from 'gulp';
import gulpIf from 'gulp-if';
import concat from 'gulp-concat';
import cleanCss from 'gulp-clean-css';
import config from '../config';

export default () => src(config.css.vendor, { sourcemaps: config.develop })
  .pipe(concat('vendor.css'))
  .pipe(gulpIf(!config.develop, cleanCss()))
  .pipe(dest(config.css.dest, { sourcemaps: '.' }));
