import { parallel } from 'gulp';
import lintCss from './lint-css';
import lintJs from './lint-js';
import config from '../config';

export default parallel(
  config.css.lint ? lintCss : (done) => done(),
  config.js.lint ? lintJs : (done) => done()
);
