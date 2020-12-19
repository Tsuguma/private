import { src } from 'gulp';
import sassLint, { format } from 'gulp-sass-lint';
import config from '../config';

export default () => src(config.css.src)
  .pipe(sassLint({
    config: config.css.lintConfig
  }))
  .pipe(format());
