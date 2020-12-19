import { watch, series } from 'gulp';
import buildCss from './build-css';
import lintCss from './lint-css';
import buildJs from './build-js';
import lintJs from './lint-js';
import reload from './reload';
import config from '../config';

export default () => {
  watch(config.css.src, series(lintCss, buildCss, reload));
  watch(config.js.src, series(lintJs, buildJs, reload));
};
