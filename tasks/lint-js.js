import { src } from 'gulp';
import eslint, { format } from 'gulp-eslint';
import config from '../config';

export default () => src(config.js.src)
  .pipe(eslint(config.js.lintConfig))
  .pipe(format());
